/**
 * HaEnergyFlowCard - 2D Live Energy Flow Monitor & 24h Trend Chart
 * Apple iOS Dark Aesthetic SVG Power Flow Diagram & Rolling 24h Dual-Curve Graph
 *
 * Visualizes:
 * 1. Live instantaneous Watts (W) distribution from Solar & Grid to Home & appliances.
 * 2. Rolling 24-Hour Dual-Curve Trend Chart comparing Solar PV (W) vs Grid Demand (W)
 *    on the exact same axis, highlighting the midday solar hump, zero-grid self-sufficiency,
 *    overnight EV charging plateau (7 kW), and appliance power spikes.
 */

const CARD_VERSION = '1.2.28';

export class HaEnergyFlowCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._animFrame = null;
    this._lastTimestamp = 0;
    this._particles = {};
    this._viewMode = 'flow'; // 'flow' | 'chart' | 'split'
    this._historyPoints = this.loadStoredHistory();
    this._historyFetched = false;
    this._lastHistoryFetchTime = 0;
    this._isScrubbing = false;
    this._cachedSolarCoords = [];
    this._cachedGridCoords = [];
  }

  static getStubConfig() {
    return {
      title: 'Live Energy Flow',
      view_mode: 'flow',
      solar_entity: 'sensor.solax_snm9wncrqy_pv1_power',
      grid_import_entity: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand',
      grid_export_entity: 'sensor.solax_snm9wncrqy_exported_power',
      ev_entity: 'input_number.zappi_ev_power',
      tv_entity: 'sensor.living_room_tv_plug_power',
      lights_entity: 'input_number.matter_lights_power',
      washer_entity: 'sensor.washing_machine_power',
      fridge_entity: 'sensor.refrigerator_power'
    };
  }

  setConfig(config) {
    this._config = {
      title: 'Live Energy Flow',
      height: '100%',
      view_mode: 'flow',
      solar_entity: 'sensor.solax_snm9wncrqy_pv1_power',
      grid_import_entity: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand',
      grid_export_entity: 'sensor.solax_snm9wncrqy_exported_power',
      ev_entity: 'input_number.zappi_ev_power',
      tv_entity: 'sensor.living_room_tv_plug_power',
      lights_entity: 'input_number.matter_lights_power',
      washer_entity: 'sensor.washing_machine_power',
      fridge_entity: 'sensor.refrigerator_power',
      ...config
    };

    if (this._config.view_mode) {
      this._viewMode = this._config.view_mode;
    }

    if (this._config.height) {
      this.style.height = this._config.height;
    }

    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.updateData();

    if (!this._historyFetched || (Date.now() - this._lastHistoryFetchTime > 5 * 60 * 1000)) {
      this.fetchHistory();
    }
  }

  connectedCallback() {
    this.startAnimation();
  }

  disconnectedCallback() {
    this.stopAnimation();
  }

  getCardSize() {
    return 5;
  }

  // Calculate speed: dur = clamp(0.8s, 6s / (watts / 500), 5s)
  calculateDuration(watts) {
    if (!watts || watts <= 4) return 0;
    const raw = 6.0 / (watts / 500.0);
    return Math.max(0.8, Math.min(5.0, raw));
  }

  getEntityNumeric(entityId, fallback = 0) {
    if (!this._hass || !entityId) return fallback;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return fallback;
    }
    const val = parseFloat(stateObj.state);
    if (isNaN(val)) return fallback;

    // Check unit of measurement
    const uom = (stateObj.attributes?.unit_of_measurement || 'W').toLowerCase().trim();
    if (uom === 'kw') {
      return val * 1000.0;
    }
    return val;
  }

  formatWatts(watts) {
    const w = Math.max(0, Math.round(watts || 0));
    return `${w.toLocaleString()} W`;
  }

  formatKwSubtitle(watts) {
    const w = Math.max(0, watts || 0);
    if (w >= 1000) {
      return `${(w / 1000.0).toFixed(2)} kW`;
    }
    return '';
  }

  // Calculate Lights Power if helper entity isn't set
  getLightsPowerFallback() {
    if (!this._hass?.states) return 0;
    let countOn = 0;
    for (const [id, s] of Object.entries(this._hass.states)) {
      if (id.startsWith('light.') && s.state === 'on') {
        countOn++;
      }
    }
    return countOn * 7.0; // 7W per bulb
  }

  // Calculate EV Power fallback
  getEvPowerFallback() {
    const zappiPower = this.getEntityNumeric('sensor.myenergi_zappi_30084500_internal_load_ct1', 0);
    if (zappiPower > 0) return zappiPower;
    return this.getEntityNumeric('sensor.myenergi_zappi_30084500_power_ct_internal_load', 0);
  }

  // Calculate Solar fallback
  getSolarPowerFallback() {
    const p1 = this.getEntityNumeric('sensor.solax_snm9wncrqy_pv1_power', 0);
    const p2 = this.getEntityNumeric('sensor.solax_snm9wncrqy_pv2_power', 0);
    if (p1 + p2 > 0) return p1 + p2;
    return this.getEntityNumeric('sensor.solax_snm9wncrqy_ac_output_power', 0);
  }

  // Calculate Washing Machine fallback
  getWasherPowerFallback() {
    const candidates = [
      'sensor.washing_machine_power',
      'sensor.kitchen_washing_machine_power',
      'sensor.washer_power',
      'sensor.washing_machine_plug_power',
      'sensor.kitchen_washing_machine_plug_power',
      'sensor.laundry_power',
      'sensor.kitchen_washing_machine_daily_energy'
    ];
    for (const c of candidates) {
      const v = this.getEntityNumeric(c, -1);
      if (v >= 0) return v;
    }
    return 0;
  }

  /**
   * Load real recorded historical data from localStorage.
   * Only real historical readings are stored; synthetic/made-up data is never used.
   */
  loadStoredHistory() {
    try {
      const raw = localStorage.getItem('ha_energy_flow_24h_history_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cutoff = Date.now() - 24 * 3600 * 1000;
          const valid = parsed
            .filter(p => typeof p.time === 'number' && p.time >= cutoff)
            .sort((a, b) => a.time - b.time);
          if (valid.length > 0) return valid;
        }
      }
    } catch (e) {
      console.warn('Could not read stored energy history:', e);
    }
    return [];
  }

  /**
   * Save real historical readings to localStorage.
   * Prunes readings older than 24 hours.
   */
  saveStoredHistory() {
    try {
      if (!this._historyPoints || !this._historyPoints.length) return;
      const cutoff = Date.now() - 24 * 3600 * 1000;
      const valid = this._historyPoints.filter(p => p.time >= cutoff);
      localStorage.setItem('ha_energy_flow_24h_history_v1', JSON.stringify(valid));
    } catch (e) {
      // Ignore localStorage errors (e.g. private browsing quota)
    }
  }

  /**
   * Queries real 24-hour recorder history from Home Assistant Core.
   * Supports:
   * 1. Home Assistant Lovelace WebSocket API (`callWS: history/history_during_period`)
   * 2. Home Assistant Add-on / Web Proxy (`/api/ha-history`)
   * 3. Home Assistant Core REST API (`callApi: GET history/period/...`)
   */
  async fetchHistory() {
    this._lastHistoryFetchTime = Date.now();
    const now = new Date();
    const startTime = new Date(now.getTime() - 24 * 3600 * 1000);
    const solarId = this._config.solar_entity;
    const gridId = this._config.grid_import_entity;

    let rawData = null;

    // 1. Try Lovelace WebSocket API
    if (this._hass && this._hass.callWS) {
      try {
        rawData = await this._hass.callWS({
          type: 'history/history_during_period',
          start_time: startTime.toISOString(),
          end_time: now.toISOString(),
          entity_ids: [solarId, gridId],
          minimal_response: true,
          no_attributes: true
        });
      } catch (e) {
        // WebSocket query error
      }
    }

    // 2. Try Add-on / Web server proxy (/api/ha-history)
    if (!rawData) {
      try {
        const res = await fetch(`api/ha-history?start_time=${encodeURIComponent(startTime.toISOString())}&filter_entity_id=${encodeURIComponent(solarId + ',' + gridId)}`);
        if (res.ok) {
          const json = await res.json();
          if (json && json.history) {
            rawData = json.history;
          }
        }
      } catch (e) {
        // Fetch notice
      }
    }

    // 3. Try this._hass.callApi
    if (!rawData && this._hass && this._hass.callApi) {
      try {
        rawData = await this._hass.callApi(
          'GET',
          `history/period/${startTime.toISOString()}?filter_entity_id=${solarId},${gridId}&minimal_response&no_attributes&end_time=${now.toISOString()}`
        );
      } catch (e) {
        // Call API notice
      }
    }

    if (rawData) {
      this.processHaHistoryData(rawData, solarId, gridId, startTime, now);
      this._historyFetched = true;
    }
  }

  processHaHistoryData(rawData, solarId, gridId, startTime, endTime) {
    let rawSolar = [];
    let rawGrid = [];

    if (Array.isArray(rawData)) {
      for (const group of rawData) {
        if (Array.isArray(group) && group.length > 0) {
          const entId = group[0].entity_id;
          if (entId === solarId) rawSolar = group;
          else if (entId === gridId) rawGrid = group;
        }
      }
      if (!rawSolar.length && !rawGrid.length && rawData.length >= 2) {
        rawSolar = rawData[0] || [];
        rawGrid = rawData[1] || [];
      }
    } else if (rawData && typeof rawData === 'object') {
      rawSolar = rawData[solarId] || [];
      rawGrid = rawData[gridId] || [];
    }

    if (!rawSolar.length && !rawGrid.length) return;

    const getValAtTime = (list, targetTime) => {
      if (!list || !list.length) return null;
      let closest = null;
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const tStr = item.last_changed || item.last_updated || item.lu || item.t;
        const itemTime = tStr ? new Date(tStr).getTime() : 0;
        if (itemTime <= targetTime) {
          const v = parseFloat(item.state || item.s);
          if (!isNaN(v)) {
            const uom = (item.attributes?.unit_of_measurement || item.uom || '').toLowerCase();
            closest = uom === 'kw' ? v * 1000 : v;
          }
        } else {
          break;
        }
      }
      return closest;
    };

    const count = 288; // 5-minute sampling over 24h
    const startMs = startTime.getTime();
    const endMs = endTime.getTime();
    const stepMs = (endMs - startMs) / count;
    const newPoints = [];

    for (let i = 0; i <= count; i++) {
      const t = startMs + i * stepMs;
      const sVal = getValAtTime(rawSolar, t);
      const gVal = getValAtTime(rawGrid, t);

      if (sVal !== null || gVal !== null) {
        newPoints.push({
          time: t,
          solar: Math.max(0, sVal !== null ? sVal : 0),
          grid: Math.max(0, gVal !== null ? gVal : 0)
        });
      }
    }

    if (newPoints.length > 5) {
      // Merge with live recorded points
      const mergedMap = new Map();
      for (const pt of newPoints) {
        mergedMap.set(Math.round(pt.time / 60000), pt);
      }
      for (const pt of this._historyPoints) {
        const key = Math.round(pt.time / 60000);
        if (!mergedMap.has(key)) {
          mergedMap.set(key, pt);
        }
      }

      this._historyPoints = Array.from(mergedMap.values()).sort((a, b) => a.time - b.time);
      this.saveStoredHistory();
      this.updateChart();
    }
  }

  updateData() {
    if (!this.shadowRoot) return;

    // 1. Inlets
    let solarW = this.getEntityNumeric(this._config.solar_entity, -1);
    if (solarW < 0) solarW = this.getSolarPowerFallback();

    const gridDemandW = this.getEntityNumeric(this._config.grid_import_entity, 0);
    let exportW = this.getEntityNumeric(this._config.grid_export_entity, 0);
    if (exportW > 25000) exportW = 0; // Filter 32-bit overflow glitches

    let gridImportW = 0;
    let gridExportW = 0;

    if (exportW > 10) {
      gridExportW = exportW;
      gridImportW = 0;
    } else if (gridDemandW < -10) {
      gridExportW = Math.abs(gridDemandW);
      gridImportW = 0;
    } else {
      gridImportW = Math.max(0, gridDemandW);
      gridExportW = 0;
    }

    // 2. Consumers (Always-on nodes)
    let evW = this.getEntityNumeric(this._config.ev_entity, -1);
    if (evW < 0) evW = this.getEvPowerFallback();

    const tvW = this.getEntityNumeric(this._config.tv_entity, 0);

    let lightsW = this.getEntityNumeric(this._config.lights_entity, -1);
    if (lightsW < 0) lightsW = this.getLightsPowerFallback();

    let washerW = this.getEntityNumeric(this._config.washer_entity, -1);
    if (washerW < 0) washerW = this.getWasherPowerFallback();

    const fridgeW = this.getEntityNumeric(this._config.fridge_entity, 0);

    // 3. Central Home Node = Grid Import + Solar - Export
    const knownConsumers = evW + tvW + lightsW + washerW + fridgeW;
    let homeW = Math.max(0, gridImportW + solarW - gridExportW);
    if (homeW < knownConsumers) {
      homeW = knownConsumers;
    }

    // Flow Active States & Durations
    this._flows = {
      solar: {
        active: solarW > 5,
        watts: solarW,
        dur: this.calculateDuration(solarW),
        color: '#f59e0b',
        pathId: 'path-solar'
      },
      grid_import: {
        active: gridImportW > 5,
        watts: gridImportW,
        dur: this.calculateDuration(gridImportW),
        color: '#3b82f6',
        pathId: 'path-grid-import'
      },
      grid_export: {
        active: gridExportW > 5,
        watts: gridExportW,
        dur: this.calculateDuration(gridExportW),
        color: '#10b981',
        pathId: 'path-grid-export'
      },
      ev: {
        active: evW > 5,
        watts: evW,
        dur: this.calculateDuration(evW),
        color: '#06d6a0',
        pathId: 'path-ev'
      },
      tv: {
        active: tvW > 5,
        watts: tvW,
        dur: this.calculateDuration(tvW),
        color: '#38bdf8',
        pathId: 'path-tv'
      },
      lights: {
        active: lightsW > 2,
        watts: lightsW,
        dur: this.calculateDuration(lightsW),
        color: '#fbbf24',
        pathId: 'path-lights'
      },
      washer: {
        active: washerW > 5,
        watts: washerW,
        dur: this.calculateDuration(washerW),
        color: '#f43f5e',
        pathId: 'path-washer'
      },
      fridge: {
        active: fridgeW > 5,
        watts: fridgeW,
        dur: this.calculateDuration(fridgeW),
        color: '#a78bfa',
        pathId: 'path-fridge'
      }
    };

    // Update text readouts in DOM
    const updateNode = (id, val, active, color) => {
      const elVal = this.shadowRoot.querySelector(`#val-${id}`);
      const elSub = this.shadowRoot.querySelector(`#sub-${id}`);
      const elBox = this.shadowRoot.querySelector(`#box-${id}`);
      const elPill = this.shadowRoot.querySelector(`#pill-${id}`);

      if (elVal) elVal.innerText = this.formatWatts(val);
      if (elSub) elSub.innerText = this.formatKwSubtitle(val);
      if (elBox) {
        elBox.classList.toggle('active', active);
        if (active) {
          elBox.style.borderColor = color;
          elBox.style.boxShadow = `0 0 20px ${color}33`;
        } else {
          elBox.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          elBox.style.boxShadow = 'none';
        }
      }
      if (elPill) {
        elPill.innerText = active ? 'ACTIVE' : 'IDLE';
        elPill.className = `status-pill ${active ? 'active' : 'idle'}`;
      }
    };

    updateNode('solar', solarW, solarW > 5, '#f59e0b');

    // Grid Node (Shows either Import or Export)
    const isExport = gridExportW > 5;
    const gridVal = isExport ? gridExportW : gridImportW;
    const gridActive = gridVal > 5;
    const gridColor = isExport ? '#10b981' : '#3b82f6';
    const gridLabel = isExport ? 'Grid Export' : 'Grid Import';

    const elGridTitle = this.shadowRoot.querySelector('#title-grid');
    if (elGridTitle) elGridTitle.innerText = gridLabel;
    updateNode('grid', gridVal, gridActive, gridColor);

    // Home Node
    updateNode('home', homeW, homeW > 5, '#0ea5e9');

    // Consumer Nodes
    updateNode('ev', evW, evW > 5, '#06d6a0');
    updateNode('tv', tvW, tvW > 5, '#38bdf8');
    updateNode('lights', lightsW, lightsW > 2, '#fbbf24');
    updateNode('washer', washerW, washerW > 5, '#f43f5e');
    updateNode('fridge', fridgeW, fridgeW > 5, '#a78bfa');

    // Update real 24h rolling buffer
    const now = Date.now();
    const lastPoint = this._historyPoints.length ? this._historyPoints[this._historyPoints.length - 1] : null;

    // Record sample if:
    // 1. No points exist yet
    // 2. Over 20 seconds passed since last sample
    // 3. Significant power change (> 20W) in solar or grid demand (immediately captures kettles, oven, EV)
    const timeDelta = lastPoint ? (now - lastPoint.time) : 999999;
    const solarDelta = lastPoint ? Math.abs(solarW - lastPoint.solar) : 9999;
    const gridDelta = lastPoint ? Math.abs(gridDemandW - lastPoint.grid) : 9999;

    if (timeDelta >= 20000 || solarDelta >= 20 || gridDelta >= 20) {
      this._historyPoints.push({
        time: now,
        solar: Math.max(0, Math.round(solarW || 0)),
        grid: Math.max(0, Math.round(gridDemandW || 0))
      });

      const cutoff = now - 24 * 3600 * 1000;
      this._historyPoints = this._historyPoints.filter(p => p.time >= cutoff);
      this.saveStoredHistory();
    }

    // Update 24h Trend Chart
    this.updateChart(solarW, gridDemandW);
  }

  updateChart(liveSolar = null, liveGrid = null) {
    if (!this.shadowRoot) return;
    const points = this._historyPoints || [];

    const elEmpty = this.shadowRoot.querySelector('#chart-empty-state');
    const elLiveSolar = this.shadowRoot.querySelector('#chart-live-solar');
    const elPeakSolar = this.shadowRoot.querySelector('#chart-peak-solar');
    const elTotalSolar = this.shadowRoot.querySelector('#chart-total-solar');

    const elLiveGrid = this.shadowRoot.querySelector('#chart-live-grid');
    const elPeakGrid = this.shadowRoot.querySelector('#chart-peak-grid');
    const elTotalGrid = this.shadowRoot.querySelector('#chart-total-grid');
    const elSelfSufficiency = this.shadowRoot.querySelector('#chart-self-sufficiency');
    const elRecorderStatus = this.shadowRoot.querySelector('#chart-recorder-status');

    const curSolar = liveSolar !== null ? liveSolar : (points[points.length - 1]?.solar || 0);
    const curGrid = liveGrid !== null ? liveGrid : (points[points.length - 1]?.grid || 0);

    if (elLiveSolar) elLiveSolar.innerText = this.formatWatts(curSolar);
    if (elLiveGrid) elLiveGrid.innerText = this.formatWatts(curGrid);

    // If insufficient data points for curve drawing
    if (points.length < 2) {
      if (elEmpty) {
        elEmpty.style.display = 'flex';
        elEmpty.innerHTML = `
          <div class="pulse-dot" style="width:10px;height:10px;"></div>
          <span>Recording real live energy telemetry...</span>
          <span style="font-size:10px;color:#64748b;">Waiting for 24h recorder samples (${points.length} sample logged)</span>
        `;
      }
      if (elRecorderStatus) elRecorderStatus.innerText = 'Telemetry Logging Active';
      return;
    }

    if (elEmpty) elEmpty.style.display = 'none';

    // 1. Calculate Real Peaks & Totals across stored readings
    let peakSolar = 0;
    let peakGrid = 0;
    let totalSolarWs = 0;
    let totalGridWs = 0;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p.solar > peakSolar) peakSolar = p.solar;
      if (p.grid > peakGrid) peakGrid = p.grid;

      if (i > 0) {
        const dtSec = (p.time - points[i - 1].time) / 1000.0;
        totalSolarWs += ((p.solar + points[i - 1].solar) / 2.0) * dtSec;
        totalGridWs += ((p.grid + points[i - 1].grid) / 2.0) * dtSec;
      }
    }

    const totalSolarKwh = totalSolarWs / 3600000.0;
    const totalGridKwh = totalGridWs / 3600000.0;

    if (elPeakSolar) elPeakSolar.innerText = `Peak ${this.formatWatts(peakSolar)}`;
    if (elTotalSolar) elTotalSolar.innerText = `Today ${totalSolarKwh.toFixed(1)} kWh`;

    if (elPeakGrid) elPeakGrid.innerText = `Peak ${this.formatWatts(peakGrid)}`;
    if (elTotalGrid) elTotalGrid.innerText = `Imp ${totalGridKwh.toFixed(1)} kWh`;

    // Dynamic Self-Sufficiency & Recorder Badge
    if (elSelfSufficiency) {
      if (curSolar > curGrid && curSolar > 50) {
        const surplus = curSolar - curGrid;
        elSelfSufficiency.innerText = `🌿 100% Green (+${surplus.toLocaleString()} W)`;
        elSelfSufficiency.className = 'chart-stat-badge surplus';
      } else if (curSolar > 30) {
        const pct = Math.round((curSolar / (curSolar + curGrid)) * 100);
        elSelfSufficiency.innerText = `☀️ ${pct}% Solar Offset`;
        elSelfSufficiency.className = 'chart-stat-badge partial';
      } else {
        elSelfSufficiency.innerText = `⚡ Grid Powered (${curGrid.toLocaleString()} W)`;
        elSelfSufficiency.className = 'chart-stat-badge grid';
      }
    }

    if (elRecorderStatus) {
      const tSpanHrs = Math.max(0.1, (points[points.length - 1].time - points[0].time) / 3600000.0);
      if (tSpanHrs >= 20) {
        elRecorderStatus.innerText = `Real 24h Recorder (${points.length} pts)`;
      } else {
        elRecorderStatus.innerText = `Live Recorded: ${tSpanHrs.toFixed(1)}h (${points.length} pts)`;
      }
    }

    // 2. SVG Geometry Mapping
    // viewBox is 920 x 300
    const plotX = 65;
    const plotY = 22;
    const plotW = 835;
    const plotH = 240;
    const baselineY = plotY + plotH; // 262

    const rawMax = Math.max(peakSolar, peakGrid, 2500);
    // Round to nearest 500W or 1000W
    const stepInterval = rawMax > 5000 ? 2000 : (rawMax > 2000 ? 1000 : 500);
    const yMax = Math.ceil(rawMax / stepInterval) * stepInterval;

    const tStart = points[0].time;
    const tEnd = points[points.length - 1].time;
    const tSpan = Math.max(1000, tEnd - tStart);

    const mapX = (t) => plotX + ((t - tStart) / tSpan) * plotW;
    const mapY = (w) => baselineY - (Math.min(w, yMax) / yMax) * plotH;

    // 3. Grid Lines & Y-Axis Labels
    const gridLinesGroup = this.shadowRoot.querySelector('#chart-grid-lines');
    if (gridLinesGroup) {
      let gridHtml = '';
      const stepCount = Math.min(5, Math.max(3, Math.round(yMax / stepInterval)));
      const actualStep = yMax / stepCount;

      for (let i = 0; i <= stepCount; i++) {
        const val = i * actualStep;
        const y = mapY(val);
        const label = val >= 1000 ? `${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)} kW` : `${Math.round(val)} W`;

        gridHtml += `
          <line x1="${plotX}" y1="${y}" x2="${plotX + plotW}" y2="${y}" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="3 4" />
          <text x="${plotX - 12}" y="${y + 4}" fill="#64748b" font-size="10" font-weight="600" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${label}</text>
        `;
      }
      gridLinesGroup.innerHTML = gridHtml;
    }

    // 4. Time X-Axis Markers
    const xLabelsGroup = this.shadowRoot.querySelector('#chart-x-labels');
    if (xLabelsGroup) {
      let xHtml = '';
      const numTicks = 6;
      for (let i = 0; i <= numTicks; i++) {
        const targetT = tStart + (i / numTicks) * tSpan;
        const x = mapX(targetT);
        const d = new Date(targetT);
        const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        const label = i === numTicks ? 'Now' : timeStr;

        xHtml += `
          <line x1="${x}" y1="${baselineY}" x2="${x}" y2="${baselineY + 4}" stroke="rgba(255, 255, 255, 0.15)" />
          <text x="${x}" y="${baselineY + 18}" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${label}</text>
        `;
      }
      xLabelsGroup.innerHTML = xHtml;
    }

    // 5. Generate Smooth Monotone Cubic Spline Paths
    const solarCoords = points.map(p => ({ x: mapX(p.time), y: mapY(p.solar), ...p }));
    const gridCoords = points.map(p => ({ x: mapX(p.time), y: mapY(p.grid), ...p }));

    this._cachedSolarCoords = solarCoords;
    this._cachedGridCoords = gridCoords;

    const solarLineD = this.buildSmoothPath(solarCoords);
    const gridLineD = this.buildSmoothPath(gridCoords);

    const solarAreaD = `${solarLineD} L ${solarCoords[solarCoords.length - 1].x.toFixed(1)} ${baselineY} L ${solarCoords[0].x.toFixed(1)} ${baselineY} Z`;
    const gridAreaD = `${gridLineD} L ${gridCoords[gridCoords.length - 1].x.toFixed(1)} ${baselineY} L ${gridCoords[0].x.toFixed(1)} ${baselineY} Z`;

    const elSolarLine = this.shadowRoot.querySelector('#chart-solar-line');
    const elSolarGlow = this.shadowRoot.querySelector('#chart-solar-glow');
    const elSolarArea = this.shadowRoot.querySelector('#chart-solar-area');

    const elGridLine = this.shadowRoot.querySelector('#chart-grid-line');
    const elGridGlow = this.shadowRoot.querySelector('#chart-grid-glow');
    const elGridArea = this.shadowRoot.querySelector('#chart-grid-area');

    if (elSolarLine) elSolarLine.setAttribute('d', solarLineD);
    if (elSolarGlow) elSolarGlow.setAttribute('d', solarLineD);
    if (elSolarArea) elSolarArea.setAttribute('d', solarAreaD);

    if (elGridLine) elGridLine.setAttribute('d', gridLineD);
    if (elGridGlow) elGridGlow.setAttribute('d', gridLineD);
    if (elGridArea) elGridArea.setAttribute('d', gridAreaD);

    // 6. Highlight "Zero Grid" / Self-Sufficiency Surplus Zone (where Solar > Grid)
    const elSurplusArea = this.shadowRoot.querySelector('#chart-surplus-area');
    if (elSurplusArea) {
      let surplusD = '';
      let inSurplus = false;
      let surplusSeg = [];

      for (let i = 0; i < points.length; i++) {
        const s = solarCoords[i];
        const g = gridCoords[i];
        if (s.solar > g.grid && s.solar > 80) {
          if (!inSurplus) {
            inSurplus = true;
            surplusSeg = [s];
          } else {
            surplusSeg.push(s);
          }
        } else {
          if (inSurplus && surplusSeg.length > 1) {
            const segLine = this.buildSmoothPath(surplusSeg);
            const firstX = surplusSeg[0].x.toFixed(1);
            const lastX = surplusSeg[surplusSeg.length - 1].x.toFixed(1);
            surplusD += `${segLine} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z `;
          }
          inSurplus = false;
          surplusSeg = [];
        }
      }
      if (inSurplus && surplusSeg.length > 1) {
        const segLine = this.buildSmoothPath(surplusSeg);
        const firstX = surplusSeg[0].x.toFixed(1);
        const lastX = surplusSeg[surplusSeg.length - 1].x.toFixed(1);
        surplusD += `${segLine} L ${lastX} ${baselineY} L ${firstX} ${baselineY} Z`;
      }
      elSurplusArea.setAttribute('d', surplusD);
    }
  }

  /**
   * Monotone Cubic Hermite Spline (Fritsch-Carlson algorithm).
   * Guarantees smooth, aesthetic curves without overshooting or dipping below zero
   * when instantaneous appliance spikes occur.
   */
  buildSmoothPath(pts) {
    if (!pts || !pts.length) return '';
    if (pts.length === 1) return `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    if (pts.length === 2) {
      return `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)} L ${pts[1].x.toFixed(1)} ${pts[1].y.toFixed(1)}`;
    }

    const n = pts.length;
    const dx = new Float64Array(n - 1);
    const dy = new Float64Array(n - 1);
    const slopes = new Float64Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
      dx[i] = pts[i + 1].x - pts[i].x;
      dy[i] = pts[i + 1].y - pts[i].y;
      slopes[i] = dx[i] === 0 ? 0 : dy[i] / dx[i];
    }

    const m = new Float64Array(n);
    m[0] = slopes[0];
    for (let i = 1; i < n - 1; i++) {
      if (slopes[i - 1] * slopes[i] <= 0) {
        m[i] = 0;
      } else {
        m[i] = (slopes[i - 1] + slopes[i]) / 2;
      }
    }
    m[n - 1] = slopes[n - 2];

    for (let i = 0; i < n - 1; i++) {
      if (slopes[i] === 0) {
        m[i] = 0;
        m[i + 1] = 0;
      } else {
        const alpha = m[i] / slopes[i];
        const beta = m[i + 1] / slopes[i];
        const hyp = alpha * alpha + beta * beta;
        if (hyp > 9) {
          const tau = 3 / Math.sqrt(hyp);
          m[i] = tau * alpha * slopes[i];
          m[i + 1] = tau * beta * slopes[i];
        }
      }
    }

    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < n - 1; i++) {
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const segDx = dx[i] / 3;
      const cp1x = p1.x + segDx;
      const cp1y = p1.y + m[i] * segDx;
      const cp2x = p2.x - segDx;
      const cp2y = p2.y - m[i + 1] * segDx;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d;
  }

  setupChartScrubber() {
    const svg = this.shadowRoot.querySelector('#chart-svg');
    const tooltip = this.shadowRoot.querySelector('#chart-tooltip');
    const cursorLine = this.shadowRoot.querySelector('#chart-cursor-line');
    const cursorSolar = this.shadowRoot.querySelector('#chart-cursor-solar');
    const cursorGrid = this.shadowRoot.querySelector('#chart-cursor-grid');

    if (!svg || !tooltip) return;

    const handlePointer = (e) => {
      const coords = this._cachedSolarCoords;
      if (!coords || coords.length < 2) return;

      const rect = svg.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const relX = clientX - rect.left;
      const svgX = (relX / rect.width) * 920;

      // Find closest point
      let closest = coords[0];
      let minDist = 999999;
      for (const pt of coords) {
        const dist = Math.abs(pt.x - svgX);
        if (dist < minDist) {
          minDist = dist;
          closest = pt;
        }
      }

      if (!closest) return;

      const gridPt = this._cachedGridCoords ? this._cachedGridCoords.find(p => p.time === closest.time) : null;
      const gridY = gridPt ? gridPt.y : 262;
      const gridVal = gridPt ? gridPt.grid : 0;

      // Update cursor line and circles
      if (cursorLine) {
        cursorLine.style.display = 'block';
        cursorLine.setAttribute('x1', closest.x);
        cursorLine.setAttribute('x2', closest.x);
      }
      if (cursorSolar) {
        cursorSolar.style.display = 'block';
        cursorSolar.setAttribute('cx', closest.x);
        cursorSolar.setAttribute('cy', closest.y);
      }
      if (cursorGrid) {
        cursorGrid.style.display = 'block';
        cursorGrid.setAttribute('cx', closest.x);
        cursorGrid.setAttribute('cy', gridY);
      }

      // Format tooltip content
      const date = new Date(closest.time);
      const isToday = new Date().toDateString() === date.toDateString();
      const timeStr = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
      const dayPrefix = isToday ? 'Today' : 'Yesterday';

      let statusBadge = '';
      if (closest.solar > gridVal && closest.solar > 80) {
        const surplus = closest.solar - gridVal;
        statusBadge = `<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.35);color:#10b981;font-weight:700;font-size:10px;">🌿 100% Green (+${surplus.toLocaleString()} W surplus)</div>`;
      } else if (gridVal > closest.solar) {
        const imp = gridVal - closest.solar;
        statusBadge = `<div style="display:inline-block;margin-top:6px;padding:2px 8px;border-radius:6px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.3);color:#38bdf8;font-weight:600;font-size:10px;">⚡ Grid Demand (${imp.toLocaleString()} W imported)</div>`;
      }

      tooltip.innerHTML = `
        <div style="font-weight:700;color:#94a3b8;font-size:11px;margin-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:3px;display:flex;justify-content:space-between;gap:12px;">
          <span>🕒 ${dayPrefix}, ${timeStr}</span>
          <span style="color:#64748b;font-weight:600;">Real Telemetry</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#f59e0b;font-weight:700;font-size:12px;margin-bottom:3px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>Solar:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(closest.solar).toLocaleString()} W</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;color:#38bdf8;font-weight:700;font-size:12px;">
          <span style="display:flex;align-items:center;gap:6px;"><span style="width:7px;height:7px;border-radius:50%;background:#38bdf8;display:inline-block;"></span>Grid Demand:</span>
          <span style="font-variant-numeric:tabular-nums;">${Math.round(gridVal).toLocaleString()} W</span>
        </div>
        ${statusBadge}
      `;

      tooltip.style.display = 'block';
      const tooltipX = (closest.x / 920) * rect.width;
      const tooltipY = Math.min((Math.min(closest.y, gridY) / 300) * rect.height, rect.height - 70);

      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${Math.max(12, tooltipY)}px`;
    };

    const hidePointer = () => {
      if (cursorLine) cursorLine.style.display = 'none';
      if (cursorSolar) cursorSolar.style.display = 'none';
      if (cursorGrid) cursorGrid.style.display = 'none';
      if (tooltip) tooltip.style.display = 'none';
    };

    svg.addEventListener('pointermove', handlePointer);
    svg.addEventListener('pointerleave', hidePointer);
    svg.addEventListener('touchmove', handlePointer, { passive: true });
    svg.addEventListener('touchend', hidePointer);
  }

  startAnimation() {
    if (this._animFrame) return;

    // Initialize particle progress trackers
    const flowKeys = ['solar', 'grid_import', 'grid_export', 'ev', 'tv', 'lights', 'washer', 'fridge'];
    for (const key of flowKeys) {
      if (!this._particles[key]) {
        this._particles[key] = [0.0, 0.33, 0.66];
      }
    }

    const animate = (timestamp) => {
      if (!this._lastTimestamp) this._lastTimestamp = timestamp;
      const dt = (timestamp - this._lastTimestamp) / 1000.0;
      this._lastTimestamp = timestamp;

      if (this._flows) {
        for (const [key, flow] of Object.entries(this._flows)) {
          const path = this.shadowRoot.querySelector(`#${flow.pathId}`);
          const pGroup = this.shadowRoot.querySelector(`#particles-${key}`);
          if (!path || !pGroup) continue;

          if (!flow.active || flow.dur <= 0) {
            pGroup.style.opacity = '0';
            continue;
          }

          pGroup.style.opacity = '1';
          const totalLen = path.getTotalLength ? path.getTotalLength() : 0;
          if (totalLen <= 0) continue;

          const step = dt / flow.dur;
          const circles = pGroup.querySelectorAll('circle');

          this._particles[key] = this._particles[key].map((prog, i) => {
            let nextProg = (prog + step) % 1.0;
            const pt = path.getPointAtLength(nextProg * totalLen);
            if (circles[i]) {
              circles[i].setAttribute('cx', pt.x);
              circles[i].setAttribute('cy', pt.y);
            }
            return nextProg;
          });
        }
      }

      this._animFrame = requestAnimationFrame(animate);
    };

    this._animFrame = requestAnimationFrame(animate);
  }

  stopAnimation() {
    if (this._animFrame) {
      cancelAnimationFrame(this._animFrame);
      this._animFrame = null;
    }
  }

  render() {
    const title = this._config.title || 'Live Energy Flow';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #f8fafc;
          user-select: none;
          box-sizing: border-box;
          overflow: hidden;
        }

        .card-container {
          background: radial-gradient(circle at 50% 50%, #0d1527 0%, #060a12 100%);
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          position: relative;
          padding: 16px 20px 16px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          flex-shrink: 0;
          z-index: 10;
          flex-wrap: wrap;
          gap: 8px;
        }

        .card-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.2px;
          color: #f1f5f9;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* View Mode Segmented Controls */
        .view-mode-tabs {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 2px;
          gap: 3px;
        }

        .mode-tab {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mode-tab.active {
          background: #3b82f6;
          color: #ffffff;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }

        .mode-tab:hover:not(.active) {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge-live {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-fs {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #94a3b8;
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-fs:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        /* Content Layout */
        .card-content-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          position: relative;
          gap: 12px;
          overflow: hidden;
        }

        /* Flow Only Mode */
        .card-content-wrap.mode-flow #flow-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .card-content-wrap.mode-flow #chart-wrap {
          display: none !important;
        }

        /* Chart Only Mode */
        .card-content-wrap.mode-chart #flow-wrap {
          display: none !important;
        }
        .card-content-wrap.mode-chart #chart-wrap {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
        }

        /* Split Mode */
        .card-content-wrap.mode-split {
          flex-direction: column;
        }
        .card-content-wrap.mode-split #flow-wrap {
          display: flex;
          flex: 1.1;
          width: 100%;
          min-height: 0;
        }
        .card-content-wrap.mode-split #chart-wrap {
          display: flex;
          flex: 0.9;
          width: 100%;
          min-height: 0;
        }

        .svg-container {
          width: 100%;
          height: 100%;
          flex: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        #flow-svg {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          display: block;
        }

        /* Flow Paths */
        .flow-path-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 3;
          stroke-linecap: round;
        }

        .flow-path-glow {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          opacity: 0.35;
          transition: stroke 0.3s ease, opacity 0.3s ease;
        }

        /* Flow Particles */
        .particle-dot {
          r: 3.5;
          filter: drop-shadow(0 0 6px currentColor);
          transition: opacity 0.3s ease;
        }

        /* HTML Nodes Inside SVG ForeignObjects */
        .node-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 14px;
          padding: 6px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;
        }

        .node-card:hover {
          transform: translateY(-2px);
        }

        .node-card.home {
          background: rgba(14, 165, 233, 0.07);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .node-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          width: 100%;
        }

        .node-title-wrap {
          display: flex;
          align-items: center;
          gap: 5px;
          min-width: 0;
          flex: 1;
        }

        .node-icon {
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .node-title {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .node-value {
          font-size: 15px;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.3px;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .node-sub {
          font-size: 10px;
          font-weight: 500;
          color: #64748b;
        }

        .status-pill {
          font-size: 8px;
          font-weight: 700;
          padding: 1.5px 6px;
          border-radius: 4px;
          text-transform: uppercase;
          flex-shrink: 0;
          white-space: nowrap;
          line-height: 1.2;
        }

        .status-pill.active {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .status-pill.idle {
          background: rgba(255, 255, 255, 0.06);
          color: #64748b;
        }

        /* 24-Hour Trend Chart Styles - Apple iOS Dark Glass Aesthetic */
        .chart-container {
          background: radial-gradient(130% 130% at 50% 0%, rgba(18, 28, 48, 0.72) 0%, rgba(9, 14, 24, 0.9) 60%, rgba(5, 8, 15, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: 14px 18px 12px 18px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        .chart-stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .chart-stat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 8px 14px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .chart-stat-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .chart-stat-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .chart-stat-dot.solar {
          background: #f59e0b;
          box-shadow: 0 0 12px #f59e0b;
        }
        .chart-stat-dot.grid {
          background: #38bdf8;
          box-shadow: 0 0 12px #38bdf8;
        }
        .chart-stat-dot.recorder {
          background: #10b981;
          box-shadow: 0 0 12px #10b981;
          animation: pulse 2s infinite ease-in-out;
        }

        .chart-stat-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1;
        }

        .chart-stat-label {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .chart-stat-val {
          font-size: 16px;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.4px;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .chart-stat-val.solar {
          color: #f59e0b;
        }
        .chart-stat-val.grid {
          color: #38bdf8;
        }

        .chart-stat-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          padding-left: 10px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          white-space: nowrap;
        }

        .chart-stat-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .chart-stat-badge.surplus {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .chart-stat-badge.partial {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .chart-stat-badge.grid {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .chart-svg-wrap {
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #chart-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          cursor: crosshair;
        }

        .chart-tooltip {
          position: absolute;
          background: rgba(13, 20, 36, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7);
          pointer-events: none;
          z-index: 50;
          white-space: nowrap;
          font-size: 11px;
          line-height: 1.45;
          transform: translate(-50%, -100%);
          margin-top: -12px;
          transition: left 0.05s ease, top 0.05s ease;
        }

        .chart-empty-state {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
          background: rgba(9, 14, 25, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          z-index: 20;
        }
      </style>

      <div class="card-container">
        <!-- Top Card Header -->
        <div class="card-header">
          <div class="card-title">
            <div class="pulse-dot"></div>
            <span>${title}</span>
          </div>

          <!-- View Mode Switcher -->
          <div class="view-mode-tabs">
            <button class="mode-tab ${this._viewMode === 'flow' ? 'active' : ''}" data-mode="flow">⚡ Live Flow</button>
            <button class="mode-tab ${this._viewMode === 'chart' ? 'active' : ''}" data-mode="chart">📈 24h Trend</button>
            <button class="mode-tab ${this._viewMode === 'split' ? 'active' : ''}" data-mode="split">🔀 Split View</button>
          </div>

          <div class="header-right">
            <span class="badge-live">Live Watts</span>
            <button class="btn-fs" id="btn-card-fs" title="Toggle Fullscreen">⛶</button>
          </div>
        </div>

        <!-- Content Area: Flow Diagram & 24h Trend Chart -->
        <div class="card-content-wrap mode-${this._viewMode}" id="content-wrap">
          <!-- 1. Live Animated Flow Diagram -->
          <div class="svg-container" id="flow-wrap">
            <svg id="flow-svg" viewBox="0 0 780 440">
              <defs>
                <filter id="glow-solar" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Guide Flow Paths (Curved Béziers) -->
              <!-- 1. Solar to Home -->
              <path id="path-solar" class="flow-path-bg" d="M 185 100 C 265 100, 255 200, 325 200" />
              <path class="flow-path-glow" stroke="#f59e0b" d="M 185 100 C 265 100, 255 200, 325 200" />

              <!-- 2. Grid to Home (Import) -->
              <path id="path-grid-import" class="flow-path-bg" d="M 185 330 C 265 330, 255 235, 325 235" />
              <path class="flow-path-glow" stroke="#3b82f6" d="M 185 330 C 265 330, 255 235, 325 235" />

              <!-- 3. Home to Grid (Export) -->
              <path id="path-grid-export" class="flow-path-bg" d="M 325 235 C 255 235, 265 330, 185 330" />
              <path class="flow-path-glow" stroke="#10b981" d="M 325 235 C 255 235, 265 330, 185 330" />

              <!-- 4. Home to Zappi EV -->
              <path id="path-ev" class="flow-path-bg" d="M 455 190 C 525 190, 525 53, 595 53" />
              <path class="flow-path-glow" stroke="#06d6a0" d="M 455 190 C 525 190, 525 53, 595 53" />

              <!-- 5. Home to LG TV -->
              <path id="path-tv" class="flow-path-bg" d="M 455 205 C 525 205, 525 133, 595 133" />
              <path class="flow-path-glow" stroke="#38bdf8" d="M 455 205 C 525 205, 525 133, 595 133" />

              <!-- 6. Home to Lights -->
              <path id="path-lights" class="flow-path-bg" d="M 455 220 C 525 220, 525 213, 595 213" />
              <path class="flow-path-glow" stroke="#fbbf24" d="M 455 220 C 525 220, 525 213, 595 213" />

              <!-- 7. Home to Washing Machine -->
              <path id="path-washer" class="flow-path-bg" d="M 455 235 C 525 235, 525 293, 595 293" />
              <path class="flow-path-glow" stroke="#f43f5e" d="M 455 235 C 525 235, 525 293, 595 293" />

              <!-- 8. Home to Fridge -->
              <path id="path-fridge" class="flow-path-bg" d="M 455 250 C 525 250, 525 373, 595 373" />
              <path class="flow-path-glow" stroke="#a78bfa" d="M 455 250 C 525 250, 525 373, 595 373" />

              <!-- Animated Moving Particles Groups -->
              <g id="particles-solar" fill="#f59e0b" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-grid_import" fill="#3b82f6" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-grid_export" fill="#10b981" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-ev" fill="#06d6a0" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-tv" fill="#38bdf8" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-lights" fill="#fbbf24" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-washer" fill="#f43f5e" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>
              <g id="particles-fridge" fill="#a78bfa" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>

              <!-- 1. Solar Inverter Node (Top Left) -->
              <foreignObject x="20" y="65" width="165" height="70">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-solar">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">☀️</span>
                      <span class="node-title">Solax Solar</span>
                    </div>
                    <span class="status-pill idle" id="pill-solar">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-solar">0 W</span>
                    <span class="node-sub" id="sub-solar"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 2. Grid Node (Bottom Left - Import/Export) -->
              <foreignObject x="20" y="295" width="165" height="70">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-grid">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">⚡</span>
                      <span class="node-title" id="title-grid">Grid Import</span>
                    </div>
                    <span class="status-pill idle" id="pill-grid">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-grid">0 W</span>
                    <span class="node-sub" id="sub-grid"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 3. Central Home Node (Center) -->
              <foreignObject x="325" y="165" width="130" height="95">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card home" id="box-home">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">🏡</span>
                      <span class="node-title" style="color:#38bdf8;font-weight:700;">Home</span>
                    </div>
                    <span class="status-pill active" id="pill-home">LIVE</span>
                  </div>
                  <div class="node-value" style="font-size:17px;color:#38bdf8;">
                    <span id="val-home">0 W</span>
                  </div>
                  <div class="node-sub" id="sub-home" style="color:#94a3b8;font-size:9px;">Consumption</div>
                </div>
              </foreignObject>

              <!-- 4. Zappi EV Charger (Top Right) -->
              <foreignObject x="595" y="20" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-ev">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">🚗</span>
                      <span class="node-title">Zappi EV</span>
                    </div>
                    <span class="status-pill idle" id="pill-ev">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-ev">0 W</span>
                    <span class="node-sub" id="sub-ev"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 5. LG TV (Mid-Top Right) -->
              <foreignObject x="595" y="100" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-tv">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">📺</span>
                      <span class="node-title">LG TV</span>
                    </div>
                    <span class="status-pill idle" id="pill-tv">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-tv">0 W</span>
                    <span class="node-sub" id="sub-tv"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 6. Matter Lights (Center Right) -->
              <foreignObject x="595" y="180" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-lights">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">💡</span>
                      <span class="node-title">Lights</span>
                    </div>
                    <span class="status-pill idle" id="pill-lights">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-lights">0 W</span>
                    <span class="node-sub" id="sub-lights"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 7. Washing Machine (Mid-Bottom Right) -->
              <foreignObject x="595" y="260" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-washer">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">🧺</span>
                      <span class="node-title">Washing Machine</span>
                    </div>
                    <span class="status-pill idle" id="pill-washer">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-washer">0 W</span>
                    <span class="node-sub" id="sub-washer"></span>
                  </div>
                </div>
              </foreignObject>

              <!-- 8. Fridge (Bottom Right) -->
              <foreignObject x="595" y="340" width="165" height="66">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-card" id="box-fridge">
                  <div class="node-header">
                    <div class="node-title-wrap">
                      <span class="node-icon">❄️</span>
                      <span class="node-title">Fridge</span>
                    </div>
                    <span class="status-pill idle" id="pill-fridge">IDLE</span>
                  </div>
                  <div class="node-value">
                    <span id="val-fridge">0 W</span>
                    <span class="node-sub" id="sub-fridge"></span>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>

          <!-- 2. Rolling 24-Hour Dual-Curve Trend Chart -->
          <div class="chart-container" id="chart-wrap">
            <!-- Chart Top Stats Bar -->
            <div class="chart-stats-bar">
              <div class="chart-stat-item">
                <div class="chart-stat-dot solar"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">☀️ Rooftop Solar</span>
                  <span class="chart-stat-val solar" id="chart-live-solar">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-solar">Peak 0 W</span>
                  <span id="chart-total-solar">Today 0.0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot grid"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">⚡ Grid Demand</span>
                  <span class="chart-stat-val grid" id="chart-live-grid">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-grid">Peak 0 W</span>
                  <span id="chart-total-grid">Imp 0.0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot recorder"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">🌿 Net Power Balance</span>
                  <span class="chart-stat-badge surplus" id="chart-self-sufficiency">100% Green Solar</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-recorder-status" style="color:#10b981;">Real 24h Telemetry</span>
                </div>
              </div>
            </div>

            <!-- SVG Vector Dual-Curve Graph -->
            <div class="chart-svg-wrap">
              <svg id="chart-svg" viewBox="0 0 920 300" preserveAspectRatio="none">
                <defs>
                  <!-- Gradient Fills -->
                  <linearGradient id="solar-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.32" />
                    <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.06" />
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="grid-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.28" />
                    <stop offset="65%" stop-color="#38bdf8" stop-opacity="0.05" />
                    <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="surplus-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0.02" />
                  </linearGradient>
                </defs>

                <!-- Background Horizontal Grid Lines & Y-Axis Labels -->
                <g id="chart-grid-lines"></g>

                <!-- Zero Grid / Self-Sufficiency Surplus Zone -->
                <path id="chart-surplus-area" fill="url(#surplus-area-grad)" />

                <!-- Curve Gradient Area Fills -->
                <path id="chart-solar-area" fill="url(#solar-area-grad)" />
                <path id="chart-grid-area" fill="url(#grid-area-grad)" />

                <!-- Glow Layer Under Strokes -->
                <path id="chart-grid-glow" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.2" />
                <path id="chart-solar-glow" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.22" />

                <!-- Crisp Vector Trend Lines -->
                <path id="chart-grid-line" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="chart-solar-line" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />

                <!-- X-Axis Timeline Markers -->
                <g id="chart-x-labels"></g>

                <!-- Interactive Scrubber Cursor Line & Circles -->
                <line id="chart-cursor-line" x1="0" y1="22" x2="0" y2="262" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" stroke-dasharray="3 3" style="display:none;" />
                <circle id="chart-cursor-solar" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2" style="display:none;" />
                <circle id="chart-cursor-grid" r="5" fill="#38bdf8" stroke="#ffffff" stroke-width="2" style="display:none;" />
              </svg>

              <!-- Floating Scrubber Glass Tooltip -->
              <div id="chart-tooltip" class="chart-tooltip" style="display:none;"></div>

              <!-- Real Telemetry Empty / Loading State -->
              <div id="chart-empty-state" class="chart-empty-state" style="display:none;">
                <div class="pulse-dot" style="width:10px;height:10px;"></div>
                <span>Recording real live energy telemetry...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // View Mode Toggle Listeners
    const contentWrap = this.shadowRoot.querySelector('#content-wrap');
    const modeTabs = this.shadowRoot.querySelectorAll('.mode-tab');
    modeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        modeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.getAttribute('data-mode');
        this._viewMode = mode;
        if (contentWrap) {
          contentWrap.className = `card-content-wrap mode-${mode}`;
        }
        if (mode === 'chart' || mode === 'split') {
          this.updateChart();
        }
      });
    });

    // Fullscreen Toggle
    const btnFs = this.shadowRoot.querySelector('#btn-card-fs');
    if (btnFs) {
      btnFs.addEventListener('click', () => {
        const doc = document;
        if (!doc.fullscreenElement) {
          const target = this.closest('.card-stage') || this;
          if (target.requestFullscreen) {
            target.requestFullscreen().catch(err => console.warn(err));
          } else if (doc.documentElement.requestFullscreen) {
            doc.documentElement.requestFullscreen().catch(err => console.warn(err));
          }
        } else {
          if (doc.exitFullscreen) {
            doc.exitFullscreen().catch(err => console.warn(err));
          }
        }
      });

      document.addEventListener('fullscreenchange', () => {
        const isFs = !!document.fullscreenElement;
        btnFs.innerHTML = isFs ? '✕' : '⛶';
        btnFs.title = isFs ? 'Exit Fullscreen' : 'Toggle Fullscreen';
      });
    }

    // Setup Chart Hover / Touch Scrubber
    this.setupChartScrubber();

    this.updateData();
    this.updateChart();
  }
}

// Register Custom Lovelace Card
if (!customElements.get('ha-energy-flow-card')) {
  customElements.define('ha-energy-flow-card', HaEnergyFlowCard);
}

// Home Assistant custom card registry
window.customCards = window.customCards || [];
if (!window.customCards.some(c => c.type === 'ha-energy-flow-card')) {
  window.customCards.push({
    type: 'ha-energy-flow-card',
    name: '2D Live Energy Flow Monitor',
    description: 'Apple iOS dark aesthetic live 2D animated energy flow card & rolling 24h trend chart for Solar & Grid'
  });
}
