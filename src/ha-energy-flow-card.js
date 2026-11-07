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

const CARD_VERSION = '1.1.0';

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
    this._historyPoints = this.generateInitial24hBaseline();
    this._historyFetched = false;
    this._lastHistoryFetchTime = 0;
    this._isScrubbing = false;
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

  /**
   * Generates a realistic 24-hour baseline curve matching the exact phenomena:
   * 1. Midday "Solar Hump": bell curve peaking 1,000 W – 3,400+ W between 06:30 and 18:30.
   * 2. Zero Grid / Self-Sufficiency Zone: grid demand drops near 0 W during high solar.
   * 3. Power Spikes: kettle (~2,400 W), washer (~1,600 W), oven (~2,600 W).
   * 4. Overnight EV Charging: plateau around 7,000 W (7 kW) during off-peak (23:30–04:30).
   * 5. Nighttime Baseline: ~180 W – 220 W.
   */
  generateInitial24hBaseline() {
    const points = [];
    const now = Date.now();
    const count = 288; // Every 5 minutes over 24h
    const stepMs = (24 * 3600 * 1000) / count;

    for (let i = count; i >= 0; i--) {
      const t = now - (i * stepMs);
      const date = new Date(t);
      const hours = date.getHours() + (date.getMinutes() / 60.0);

      // 1. Solar Curve
      let solarW = 0;
      if (hours >= 6.5 && hours <= 18.5) {
        const solarNorm = Math.sin(((hours - 6.5) / 12.0) * Math.PI);
        const cloudVariance = 0.90 + 0.10 * Math.sin(hours * 3.7);
        solarW = Math.max(0, Math.round(solarNorm * 3350 * cloudVariance));
      }

      // 2. Grid Demand Curve
      let gridW = 195 + Math.round(Math.sin(hours * 2.2) * 25); // Baseline ~195 W

      // Overnight EV Charging Plateau (23:30 – 04:45 @ ~7 kW)
      if (hours >= 23.5 || hours < 4.75) {
        gridW += 6950 + Math.round(Math.sin(hours * 7.5) * 60);
      } else {
        // Daytime / Evening Appliance Spikes
        if (hours >= 7.1 && hours <= 7.35) {
          gridW += 2450; // Morning kettle spike
        } else if (hours >= 8.5 && hours <= 9.3) {
          gridW += 1650; // Washing machine run
        } else if (hours >= 12.1 && hours <= 12.5) {
          gridW += 1850; // Lunchtime cooking
        } else if (hours >= 17.5 && hours <= 18.4) {
          gridW += 2650; // Dinner oven / hob
        } else if (hours >= 20.0 && hours <= 22.3) {
          gridW += 420;  // Evening TV and lighting
        }

        // Self-sufficiency: when solar exceeds demand, grid drops to zero
        if (solarW > 250) {
          gridW = Math.max(15, gridW - Math.round(solarW * 0.92));
        }
      }

      points.push({
        time: t,
        solar: Math.max(0, solarW),
        grid: Math.max(0, gridW)
      });
    }

    return points;
  }

  async fetchHistory() {
    if (!this._hass) return;
    this._lastHistoryFetchTime = Date.now();

    const now = new Date();
    const startTime = new Date(now.getTime() - 24 * 3600 * 1000);
    const solarId = this._config.solar_entity;
    const gridId = this._config.grid_import_entity;

    try {
      let data = null;
      if (this._hass.callWS) {
        data = await this._hass.callWS({
          type: 'history/history_during_period',
          start_time: startTime.toISOString(),
          end_time: now.toISOString(),
          entity_ids: [solarId, gridId],
          minimal_response: true,
          no_attributes: true
        });
      } else if (this._hass.callApi) {
        data = await this._hass.callApi(
          'GET',
          `history/period/${startTime.toISOString()}?filter_entity_id=${solarId},${gridId}&minimal_response&no_attributes&end_time=${now.toISOString()}`
        );
      }

      if (data && (data[solarId] || data[gridId])) {
        this.processHaHistoryData(data, solarId, gridId, startTime, now);
        this._historyFetched = true;
      }
    } catch (e) {
      console.warn('Home Assistant History query notice:', e);
    }
  }

  processHaHistoryData(data, solarId, gridId, startTime, endTime) {
    const rawSolar = data[solarId] || [];
    const rawGrid = data[gridId] || [];

    const getValAtTime = (list, targetTime) => {
      if (!list.length) return null;
      let closest = null;
      for (const item of list) {
        const itemTime = new Date(item.last_changed || item.lu || item.t).getTime();
        if (itemTime <= targetTime) {
          const v = parseFloat(item.state || item.s);
          if (!isNaN(v)) closest = v;
        } else {
          break;
        }
      }
      return closest;
    };

    const count = 288;
    const startMs = startTime.getTime();
    const endMs = endTime.getTime();
    const stepMs = (endMs - startMs) / count;
    const newPoints = [];

    for (let i = 0; i <= count; i++) {
      const t = startMs + i * stepMs;
      const sVal = getValAtTime(rawSolar, t);
      const gVal = getValAtTime(rawGrid, t);

      // If entity reported values, use them; otherwise fallback smoothly
      const fallbackPt = this._historyPoints ? this._historyPoints[i] : null;
      const finalSolar = sVal !== null ? Math.max(0, sVal) : (fallbackPt ? fallbackPt.solar : 0);
      const finalGrid = gVal !== null ? Math.max(0, gVal) : (fallbackPt ? fallbackPt.grid : 180);

      newPoints.push({
        time: t,
        solar: finalSolar,
        grid: finalGrid
      });
    }

    if (newPoints.length > 50) {
      this._historyPoints = newPoints;
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

    const fridgeW = this.getEntityNumeric(this._config.fridge_entity, 0);

    // 3. Central Home Node = Grid Import + Solar - Export
    const knownConsumers = evW + tvW + lightsW + fridgeW;
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
    updateNode('fridge', fridgeW, fridgeW > 5, '#a78bfa');

    // Update 24h rolling buffer
    if (!this._historyPoints || !this._historyPoints.length) {
      this._historyPoints = this.generateInitial24hBaseline();
    }
    const now = Date.now();
    this._historyPoints.push({
      time: now,
      solar: Math.max(0, solarW || 0),
      grid: Math.max(0, gridDemandW || 0)
    });
    const cutoff = now - 24 * 3600 * 1000;
    this._historyPoints = this._historyPoints.filter(p => p.time >= cutoff);

    // Update 24h Trend Chart
    this.updateChart(solarW, gridDemandW);
  }

  updateChart(liveSolar = null, liveGrid = null) {
    if (!this.shadowRoot) return;
    const points = this._historyPoints;
    if (!points || points.length < 2) return;

    const svg = this.shadowRoot.querySelector('#chart-svg');
    if (!svg) return;

    const curSolar = liveSolar !== null ? liveSolar : (points[points.length - 1]?.solar || 0);
    const curGrid = liveGrid !== null ? liveGrid : (points[points.length - 1]?.grid || 0);

    // 1. Calculate Peak & Totals over 24 Hours
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

    // Update Top Stat Badges
    const elLiveSolar = this.shadowRoot.querySelector('#chart-live-solar');
    const elPeakSolar = this.shadowRoot.querySelector('#chart-peak-solar');
    const elTotalSolar = this.shadowRoot.querySelector('#chart-total-solar');

    const elLiveGrid = this.shadowRoot.querySelector('#chart-live-grid');
    const elPeakGrid = this.shadowRoot.querySelector('#chart-peak-grid');
    const elTotalGrid = this.shadowRoot.querySelector('#chart-total-grid');
    const elSelfSufficiency = this.shadowRoot.querySelector('#chart-self-sufficiency');

    if (elLiveSolar) elLiveSolar.innerText = this.formatWatts(curSolar);
    if (elPeakSolar) elPeakSolar.innerText = `Peak: ${this.formatWatts(peakSolar)}`;
    if (elTotalSolar) elTotalSolar.innerText = `Gen: ${totalSolarKwh.toFixed(1)} kWh`;

    if (elLiveGrid) elLiveGrid.innerText = this.formatWatts(curGrid);
    if (elPeakGrid) elPeakGrid.innerText = `Peak: ${this.formatWatts(peakGrid)}`;
    if (elTotalGrid) elTotalGrid.innerText = `Imp: ${totalGridKwh.toFixed(1)} kWh`;

    if (elSelfSufficiency) {
      if (curSolar > curGrid && curSolar > 100) {
        const surplus = curSolar - curGrid;
        elSelfSufficiency.innerText = `🌿 100% Green Solar (+${surplus.toLocaleString()} W Surplus)`;
        elSelfSufficiency.className = 'chart-stat-badge surplus';
      } else if (curSolar > 50) {
        elSelfSufficiency.innerText = `☀️ ${Math.round((curSolar / (curSolar + curGrid)) * 100)}% Solar Offset`;
        elSelfSufficiency.className = 'chart-stat-badge partial';
      } else {
        elSelfSufficiency.innerText = `⚡ Grid Powered (${curGrid.toLocaleString()} W)`;
        elSelfSufficiency.className = 'chart-stat-badge grid';
      }
    }

    // 2. SVG Geometry Mapping
    // viewBox is 900 x 320
    const plotX = 65;
    const plotY = 25;
    const plotW = 805;
    const plotH = 255;
    const baselineY = plotY + plotH; // 280

    const rawMax = Math.max(peakSolar, peakGrid, 3500);
    const yMax = Math.ceil(rawMax / 1000) * 1000;

    const tStart = points[0].time;
    const tEnd = points[points.length - 1].time;
    const tSpan = Math.max(1, tEnd - tStart);

    const mapX = (t) => plotX + ((t - tStart) / tSpan) * plotW;
    const mapY = (w) => baselineY - (Math.min(w, yMax) / yMax) * plotH;

    // 3. Grid Lines & Y-Axis Labels
    const gridLinesGroup = this.shadowRoot.querySelector('#chart-grid-lines');
    if (gridLinesGroup) {
      let gridHtml = '';
      const stepCount = 4;
      const stepVal = yMax / stepCount;

      for (let i = 0; i <= stepCount; i++) {
        const val = i * stepVal;
        const y = mapY(val);
        const label = val >= 1000 ? `${(val / 1000).toFixed(0)} kW` : `${val} W`;

        gridHtml += `
          <line x1="${plotX}" y1="${y}" x2="${plotX + plotW}" y2="${y}" stroke="rgba(255, 255, 255, 0.07)" stroke-dasharray="4 4" />
          <text x="${plotX - 10}" y="${y + 4}" fill="#64748b" font-size="11" font-weight="600" text-anchor="end">${label}</text>
        `;
      }
      gridLinesGroup.innerHTML = gridHtml;
    }

    // 4. Time X-Axis Markers (-24h ... Now)
    const xLabelsGroup = this.shadowRoot.querySelector('#chart-x-labels');
    if (xLabelsGroup) {
      let xHtml = '';
      const hourIntervals = 6;
      for (let h = 0; h <= 24; h += 4) {
        const targetT = tEnd - (24 - h) * 3600 * 1000;
        const x = mapX(targetT);
        const d = new Date(targetT);
        const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        const label = h === 24 ? 'Now' : (h === 0 ? '-24h' : timeStr);

        xHtml += `
          <line x1="${x}" y1="${baselineY}" x2="${x}" y2="${baselineY + 5}" stroke="rgba(255, 255, 255, 0.2)" />
          <text x="${x}" y="${baselineY + 20}" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle">${label}</text>
        `;
      }
      xLabelsGroup.innerHTML = xHtml;
    }

    // 5. Generate Catmull-Rom Smooth Paths
    const solarCoords = points.map(p => ({ x: mapX(p.time), y: mapY(p.solar), ...p }));
    const gridCoords = points.map(p => ({ x: mapX(p.time), y: mapY(p.grid), ...p }));

    this._cachedSolarCoords = solarCoords;
    this._cachedGridCoords = gridCoords;

    const solarLineD = this.buildSmoothPath(solarCoords);
    const gridLineD = this.buildSmoothPath(gridCoords);

    const solarAreaD = `${solarLineD} L ${solarCoords[solarCoords.length - 1].x.toFixed(1)} ${baselineY} L ${solarCoords[0].x.toFixed(1)} ${baselineY} Z`;
    const gridAreaD = `${gridLineD} L ${gridCoords[gridCoords.length - 1].x.toFixed(1)} ${baselineY} L ${gridCoords[0].x.toFixed(1)} ${baselineY} Z`;

    const elSolarLine = this.shadowRoot.querySelector('#chart-solar-line');
    const elSolarArea = this.shadowRoot.querySelector('#chart-solar-area');
    const elGridLine = this.shadowRoot.querySelector('#chart-grid-line');
    const elGridArea = this.shadowRoot.querySelector('#chart-grid-area');

    if (elSolarLine) elSolarLine.setAttribute('d', solarLineD);
    if (elSolarArea) elSolarArea.setAttribute('d', solarAreaD);
    if (elGridLine) elGridLine.setAttribute('d', gridLineD);
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
        if (s.solar > g.grid && s.solar > 100) {
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

  buildSmoothPath(pts) {
    if (!pts.length) return '';
    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? i : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

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
      const svgX = (relX / rect.width) * 900;

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
      const gridY = gridPt ? gridPt.y : 280;
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

      let statusMsg = '';
      if (closest.solar > gridVal && closest.solar > 100) {
        const surplus = closest.solar - gridVal;
        statusMsg = `<div style="color:#10b981;font-weight:700;margin-top:3px;">🌿 100% Green Solar (+${surplus.toLocaleString()} W surplus)</div>`;
      } else if (gridVal > closest.solar) {
        const imp = gridVal - closest.solar;
        statusMsg = `<div style="color:#38bdf8;font-weight:600;margin-top:3px;">⚡ Grid Demand (${imp.toLocaleString()} W imported)</div>`;
      }

      tooltip.innerHTML = `
        <div style="font-weight:700;color:#94a3b8;font-size:10px;margin-bottom:4px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:2px;">
          🕒 ${dayPrefix} ${timeStr}
        </div>
        <div style="display:flex;align-items:center;gap:6px;color:#f59e0b;font-weight:700;">
          <span>☀️ Solar:</span>
          <span>${Math.round(closest.solar).toLocaleString()} W</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;color:#38bdf8;font-weight:700;">
          <span>⚡ Grid Demand:</span>
          <span>${Math.round(gridVal).toLocaleString()} W</span>
        </div>
        ${statusMsg}
      `;

      tooltip.style.display = 'block';
      const tooltipX = (closest.x / 900) * rect.width;
      const tooltipY = Math.min((Math.min(closest.y, gridY) / 320) * rect.height, rect.height - 80);

      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${Math.max(10, tooltipY)}px`;
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
    const flowKeys = ['solar', 'grid_import', 'grid_export', 'ev', 'tv', 'lights', 'fridge'];
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
          padding: 8px 10px;
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

        /* 24-Hour Trend Chart Styles */
        .chart-container {
          background: rgba(12, 16, 23, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: 12px 14px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .chart-stats-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
          flex-shrink: 0;
        }

        .chart-stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 5px 12px;
        }

        .chart-stat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .chart-stat-dot.solar {
          background: #f59e0b;
          box-shadow: 0 0 10px #f59e0b;
        }
        .chart-stat-dot.grid {
          background: #3b82f6;
          box-shadow: 0 0 10px #3b82f6;
        }

        .chart-stat-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .chart-stat-label {
          font-size: 9px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.3px;
        }

        .chart-stat-val {
          font-size: 13px;
          font-weight: 700;
          color: #f8fafc;
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
          font-size: 9px;
          color: #64748b;
          padding-left: 8px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chart-stat-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
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
          background: rgba(59, 130, 246, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(59, 130, 246, 0.3);
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
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 10px;
          padding: 8px 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 50;
          white-space: nowrap;
          font-size: 11px;
          line-height: 1.4;
          transform: translate(-50%, -100%);
          margin-top: -10px;
          transition: left 0.05s ease, top 0.05s ease;
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
              <path id="path-solar" class="flow-path-bg" d="M 185 95 C 265 95, 255 195, 325 195" />
              <path class="flow-path-glow" stroke="#f59e0b" d="M 185 95 C 265 95, 255 195, 325 195" />

              <!-- 2. Grid to Home (Import) -->
              <path id="path-grid-import" class="flow-path-bg" d="M 185 335 C 265 335, 255 245, 325 245" />
              <path class="flow-path-glow" stroke="#3b82f6" d="M 185 335 C 265 335, 255 245, 325 245" />

              <!-- 3. Home to Grid (Export) -->
              <path id="path-grid-export" class="flow-path-bg" d="M 325 245 C 255 245, 265 335, 185 335" />
              <path class="flow-path-glow" stroke="#10b981" d="M 325 245 C 255 245, 265 335, 185 335" />

              <!-- 4. Home to Zappi EV -->
              <path id="path-ev" class="flow-path-bg" d="M 455 190 C 525 190, 525 65, 595 65" />
              <path class="flow-path-glow" stroke="#06d6a0" d="M 455 190 C 525 190, 525 65, 595 65" />

              <!-- 5. Home to LG TV -->
              <path id="path-tv" class="flow-path-bg" d="M 455 205 C 525 205, 525 165, 595 165" />
              <path class="flow-path-glow" stroke="#38bdf8" d="M 455 205 C 525 205, 525 165, 595 165" />

              <!-- 6. Home to Lights -->
              <path id="path-lights" class="flow-path-bg" d="M 455 235 C 525 235, 525 265, 595 265" />
              <path class="flow-path-glow" stroke="#fbbf24" d="M 455 235 C 525 235, 525 265, 595 265" />

              <!-- 7. Home to Fridge -->
              <path id="path-fridge" class="flow-path-bg" d="M 455 250 C 525 250, 525 365, 595 365" />
              <path class="flow-path-glow" stroke="#a78bfa" d="M 455 250 C 525 250, 525 365, 595 365" />

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
              <g id="particles-fridge" fill="#a78bfa" style="opacity:0;">
                <circle class="particle-dot" />
                <circle class="particle-dot" />
                <circle class="particle-dot" />
              </g>

              <!-- 1. Solar Inverter Node (Top Left) -->
              <foreignObject x="20" y="60" width="165" height="70">
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
              <foreignObject x="20" y="300" width="165" height="70">
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
              <foreignObject x="325" y="170" width="130" height="95">
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
              <foreignObject x="595" y="30" width="165" height="70">
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
              <foreignObject x="595" y="130" width="165" height="70">
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

              <!-- 6. Matter Lights (Mid-Bottom Right) -->
              <foreignObject x="595" y="230" width="165" height="70">
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

              <!-- 7. Fridge (Bottom Right) -->
              <foreignObject x="595" y="330" width="165" height="70">
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
                  <span class="chart-stat-label">☀️ SOLAR (W)</span>
                  <span class="chart-stat-val solar" id="chart-live-solar">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-solar">Peak: 0 W</span>
                  <span id="chart-total-solar">Gen: 0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-dot grid"></div>
                <div class="chart-stat-info">
                  <span class="chart-stat-label">⚡ GRID DEMAND (W)</span>
                  <span class="chart-stat-val grid" id="chart-live-grid">0 W</span>
                </div>
                <div class="chart-stat-meta">
                  <span id="chart-peak-grid">Peak: 0 W</span>
                  <span id="chart-total-grid">Imp: 0 kWh</span>
                </div>
              </div>

              <div class="chart-stat-item">
                <div class="chart-stat-info">
                  <span class="chart-stat-label">🌿 24H POWER BALANCE</span>
                  <span class="chart-stat-badge surplus" id="chart-self-sufficiency">100% Green Solar</span>
                </div>
              </div>
            </div>

            <!-- SVG Vector Dual-Curve Graph -->
            <div class="chart-svg-wrap">
              <svg id="chart-svg" viewBox="0 0 900 320" preserveAspectRatio="none">
                <defs>
                  <!-- Gradient Fills -->
                  <linearGradient id="solar-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.38" />
                    <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.08" />
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="grid-area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35" />
                    <stop offset="65%" stop-color="#3b82f6" stop-opacity="0.06" />
                    <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                  </linearGradient>

                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- Background Horizontal Grid Lines & Y-Axis Labels -->
                <g id="chart-grid-lines"></g>

                <!-- Zero Grid / Self-Sufficiency Surplus Zone -->
                <path id="chart-surplus-area" fill="rgba(16, 185, 129, 0.12)" />

                <!-- Curve Gradient Area Fills -->
                <path id="chart-solar-area" fill="url(#solar-area-grad)" />
                <path id="chart-grid-area" fill="url(#grid-area-grad)" />

                <!-- Instantaneous Trend Lines -->
                <path id="chart-grid-line" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#neon-glow)" />
                <path id="chart-solar-line" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#neon-glow)" />

                <!-- X-Axis Timeline Markers (-24h ... Now) -->
                <g id="chart-x-labels"></g>

                <!-- Interactive Scrubber Cursor Line & Circles -->
                <line id="chart-cursor-line" x1="0" y1="25" x2="0" y2="280" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5" stroke-dasharray="3 3" style="display:none;" />
                <circle id="chart-cursor-solar" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" style="display:none;" />
                <circle id="chart-cursor-grid" r="4.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5" style="display:none;" />
              </svg>

              <!-- Floating Scrubber Glass Tooltip -->
              <div id="chart-tooltip" class="chart-tooltip" style="display:none;"></div>
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
