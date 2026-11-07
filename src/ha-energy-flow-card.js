/**
 * HaEnergyFlowCard - 2D Live Energy Flow Monitor Lovelace Card
 * Apple iOS Dark Aesthetic SVG/Canvas Interactive Power Flow Diagram
 *
 * Visualizes instantaneous Watts (W) distribution from Solar & Grid
 * to Home Consumption and major consumers (EV, TV, Lights, Fridge).
 */

const CARD_VERSION = '1.0.0';

export class HaEnergyFlowCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._animFrame = null;
    this._lastTimestamp = 0;
    this._particles = {};
  }

  static getStubConfig() {
    return {
      title: 'Live Energy Flow',
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
      solar_entity: 'sensor.solax_snm9wncrqy_pv1_power',
      grid_import_entity: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand',
      grid_export_entity: 'sensor.solax_snm9wncrqy_exported_power',
      ev_entity: 'input_number.zappi_ev_power',
      tv_entity: 'sensor.living_room_tv_plug_power',
      lights_entity: 'input_number.matter_lights_power',
      fridge_entity: 'sensor.refrigerator_power',
      ...config
    };

    if (this._config.height) {
      this.style.height = this._config.height;
    }

    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.updateData();
  }

  connectedCallback() {
    this.startAnimation();
  }

  disconnectedCallback() {
    this.stopAnimation();
  }

  getCardSize() {
    return 4;
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

        svg {
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
        }

        .node-title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .node-icon {
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
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
          padding: 1px 5px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .status-pill.active {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .status-pill.idle {
          background: rgba(255, 255, 255, 0.06);
          color: #64748b;
        }
      </style>

      <div class="card-container">
        <div class="card-header">
          <div class="card-title">
            <div class="pulse-dot"></div>
            <span>${title}</span>
          </div>
          <div class="header-right">
            <span class="badge-live">Live Watts</span>
            <button class="btn-fs" id="btn-card-fs" title="Toggle Fullscreen">⛶</button>
          </div>
        </div>

        <div class="svg-container">
          <svg viewBox="0 0 760 440">
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
            <foreignObject x="50" y="60" width="135" height="70">
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
            <foreignObject x="50" y="300" width="135" height="70">
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
            <foreignObject x="325" y="175" width="130" height="90">
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
            <foreignObject x="595" y="30" width="135" height="70">
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
            <foreignObject x="595" y="130" width="135" height="70">
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
            <foreignObject x="595" y="230" width="135" height="70">
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
            <foreignObject x="595" y="330" width="135" height="70">
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
      </div>
    `;

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

    this.updateData();
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
    description: 'Apple iOS dark aesthetic live 2D animated energy flow card for Solar, Grid, EV, TV, Lights & Fridge'
  });
}
