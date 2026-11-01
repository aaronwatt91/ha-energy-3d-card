/**
 * HUDOverlay
 * High-tech glassmorphism HUD overlay with floating 3D hotspot badges,
 * live power summary, camera view switchers, and comprehensive metric tabs.
 */
export class HUDOverlay {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.activeTab = null;
    this.onPresetClick = options.onPresetClick || (() => {});
    this.onToggleXray = options.onToggleXray || (() => {});
    this.onToggleNight = options.onToggleNight || (() => {});
    this.onToggleRotate = options.onToggleRotate || (() => {});

    this.initDOM();
  }

  initDOM() {
    this.el = document.createElement('div');
    this.el.className = 'ha-energy-hud';
    this.el.innerHTML = `
      <style>
        .ha-energy-hud {
          position: absolute;
          inset: 0;
          pointer-events: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #f1f5f9;
          overflow: hidden;
          user-select: none;
        }

        /* Top Bar */
        .hud-header {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          pointer-events: auto;
          z-index: 10;
        }

        .hud-brand {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .hud-brand-title {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hud-pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Power Flow Summary Pills */
        .hud-flow-summary {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          font-size: 12px;
        }

        .hud-flow-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hud-flow-val {
          font-weight: 700;
          font-feature-settings: "tnum";
        }

        .color-solar { color: #f59e0b; }
        .color-grid-import { color: #0284c7; }
        .color-grid-export { color: #10b981; }
        .color-ev { color: #06b6d4; }
        .color-gas { color: #f97316; }

        /* Quick View Controls Bar */
        .hud-controls-bar {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 30px;
          padding: 5px 8px;
          pointer-events: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
          z-index: 10;
        }

        .hud-btn {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .hud-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.08);
        }

        .hud-btn.active {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.35);
        }

        .hud-btn-divider {
          width: 1px;
          height: 18px;
          background: rgba(255, 255, 255, 0.12);
          align-self: center;
        }

        /* 3D Hotspot Pins */
        .hotspot-badge {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 5px 11px;
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          font-size: 11px;
          font-weight: 600;
        }

        .hotspot-badge:hover {
          transform: translate(-50%, -55%) scale(1.06);
          border-color: #38bdf8;
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.3);
        }

        .hotspot-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        /* Slide-Out Detail Modal / Drawer */
        .hud-drawer {
          position: absolute;
          top: 70px;
          right: 14px;
          width: 360px;
          max-width: calc(100vw - 28px);
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
          pointer-events: auto;
          z-index: 20;
          display: none;
          animation: slide-in 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-drawer.open {
          display: block;
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .drawer-title {
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .drawer-close {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
        }

        .drawer-close:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Stat Grid */
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 10px 12px;
        }

        .stat-card-full {
          grid-column: 1 / -1;
        }

        .stat-label {
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .stat-val {
          font-size: 18px;
          font-weight: 700;
          font-feature-settings: "tnum";
        }

        .stat-unit {
          font-size: 11px;
          font-weight: 500;
          color: #94a3b8;
          margin-left: 3px;
        }

        .stat-subtext {
          font-size: 10px;
          color: #64748b;
          margin-top: 3px;
        }

        /* Battery Gauge */
        .battery-bar-container {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 6px;
        }

        .battery-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          border-radius: 4px;
          transition: width 0.4s ease;
        }

        /* Navigation Drawer Tabs */
        .drawer-nav-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          padding: 4px;
        }

        .drawer-nav-tab {
          flex: 1;
          text-align: center;
          padding: 6px 4px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .drawer-nav-tab.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 600px) {
          .hud-controls-bar {
            width: calc(100% - 24px);
            overflow-x: auto;
            justify-content: flex-start;
          }
          .hud-flow-summary {
            display: none; /* Hide top pill on very small mobile screens */
          }
          .hud-drawer {
            top: 60px;
            right: 8px;
            left: 8px;
            width: auto;
          }
        }
      </style>

      <!-- Header -->
      <div class="hud-header">
        <div class="hud-brand">
          <div class="hud-pulse-dot"></div>
          <span class="hud-brand-title">HOME ENERGY 3D</span>
        </div>

        <div class="hud-flow-summary" id="flow-summary">
          <div class="hud-flow-item">
            <span>☀️</span>
            <span class="hud-flow-val color-solar" id="hdr-solar-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>⚡</span>
            <span class="hud-flow-val color-grid-import" id="hdr-grid-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>🚗</span>
            <span class="hud-flow-val color-ev" id="hdr-ev-kw">0.00 kW</span>
          </div>
          <div class="hud-flow-item">
            <span>🔥</span>
            <span class="hud-flow-val color-gas" id="hdr-gas-val">Active</span>
          </div>
        </div>
      </div>

      <!-- 3D Hotspot Badges Container -->
      <div id="hotspots-container"></div>

      <!-- Detail Drawer Modal -->
      <div class="hud-drawer" id="hud-drawer">
        <div class="drawer-header">
          <div class="drawer-title" id="drawer-title">⚡ Energy Details</div>
          <button class="drawer-close" id="drawer-close-btn">&times;</button>
        </div>

        <div class="drawer-nav-tabs">
          <button class="drawer-nav-tab active" data-tab="solar">☀️ Solar</button>
          <button class="drawer-nav-tab" data-tab="electric">⚡ Electric</button>
          <button class="drawer-nav-tab" data-tab="gas">🔥 Gas</button>
          <button class="drawer-nav-tab" data-tab="ev">🚗 EV</button>
        </div>

        <div id="drawer-content"></div>
      </div>

      <!-- Bottom Camera & Feature Bar -->
      <div class="hud-controls-bar">
        <button class="hud-btn active" data-preset="overview">🏠 House</button>
        <button class="hud-btn" data-preset="solar">☀️ Solar</button>
        <button class="hud-btn" data-preset="meter">⚡ Meter</button>
        <button class="hud-btn" data-preset="boiler">🔥 Boiler</button>
        <button class="hud-btn" data-preset="ev">🚗 Peugeot</button>
        <div class="hud-btn-divider"></div>
        <button class="hud-btn" id="btn-xray">👁️ X-Ray</button>
        <button class="hud-btn" id="btn-night">🌙 Night</button>
        <button class="hud-btn" id="btn-rotate">🔄 Orbit</button>
        <button class="hud-btn" id="btn-drawer">📊 Stats</button>
      </div>
    `;

    this.container.appendChild(this.el);
    this.bindEvents();
  }

  bindEvents() {
    // Preset buttons
    const presetBtns = this.el.querySelectorAll('[data-preset]');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        presetBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const preset = btn.getAttribute('data-preset');
        this.onPresetClick(preset);
      });
    });

    // Feature Toggles
    const btnXray = this.el.querySelector('#btn-xray');
    btnXray.addEventListener('click', () => {
      btnXray.classList.toggle('active');
      this.onToggleXray(btnXray.classList.contains('active'));
    });

    const btnNight = this.el.querySelector('#btn-night');
    btnNight.addEventListener('click', () => {
      btnNight.classList.toggle('active');
      this.onToggleNight(btnNight.classList.contains('active'));
    });

    const btnRotate = this.el.querySelector('#btn-rotate');
    btnRotate.addEventListener('click', () => {
      btnRotate.classList.toggle('active');
      this.onToggleRotate(btnRotate.classList.contains('active'));
    });

    // Drawer toggle
    const btnDrawer = this.el.querySelector('#btn-drawer');
    const drawer = this.el.querySelector('#hud-drawer');
    const closeBtn = this.el.querySelector('#drawer-close-btn');

    btnDrawer.addEventListener('click', () => {
      drawer.classList.toggle('open');
      btnDrawer.classList.toggle('active', drawer.classList.contains('open'));
      if (drawer.classList.contains('open') && !this.activeTab) {
        this.switchTab('solar');
      }
    });

    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      btnDrawer.classList.remove('active');
    });

    // Tab buttons
    const tabBtns = this.el.querySelectorAll('.drawer-nav-tab');
    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        const tab = tabBtn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });
  }

  openDrawerTab(tab) {
    const drawer = this.el.querySelector('#hud-drawer');
    const btnDrawer = this.el.querySelector('#btn-drawer');
    drawer.classList.add('open');
    btnDrawer.classList.add('active');
    this.switchTab(tab);
  }

  switchTab(tab) {
    this.activeTab = tab;
    const tabBtns = this.el.querySelectorAll('.drawer-nav-tab');
    tabBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    this.renderDrawerContent();
  }

  renderDrawerContent() {
    const content = this.el.querySelector('#drawer-content');
    const data = this.lastData;
    if (!data) return;

    if (this.activeTab === 'solar') {
      const s = data.solar || {};
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${Number(s.power_kw || 0).toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Status: ${s.status || 'Generating'} • DC Isolator Closed</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(s.today_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(s.week_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(s.month_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS YEAR</div>
            <div class="stat-val">${Number(s.year_kwh || 0).toFixed(0)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `;
    } else if (this.activeTab === 'electric') {
      const o = data.octopus_electric || {};
      const kw = Number(o.power_kw || 0);
      const isExporting = kw < 0 || Boolean(o.is_exporting);
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">OCTOPUS GRID POWER (${isExporting ? 'EXPORT' : 'IMPORT'})</div>
            <div class="stat-val ${isExporting ? 'color-grid-export' : 'color-grid-import'}">
              ${Math.abs(kw).toFixed(2)} <span class="stat-unit">kW</span>
            </div>
            <div class="stat-subtext">Service Drop: Utility Pylon to Entrance Meter</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">CURRENT TARIFF RATE</div>
            <div class="stat-val">${Number(o.current_rate_p || 0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">MONTH TO DATE SPEND</div>
            <div class="stat-val">£${Number(o.monthly_spend_gbp || 0).toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(o.reading_30min_kwh || 0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(o.day_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(o.week_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(o.month_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `;
    } else if (this.activeTab === 'gas') {
      const g = data.octopus_gas || {};
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val color-gas">${g.boiler_status || 'Active'}</div>
            <div class="stat-subtext">Fed via External LPG Bulk Tank & Gable Pipework</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">30-MIN READING (MINI)</div>
            <div class="stat-val">${Number(g.reading_30min_kwh || 0).toFixed(2)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">TODAY</div>
            <div class="stat-val">${Number(g.day_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS WEEK</div>
            <div class="stat-val">${Number(g.week_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">THIS MONTH</div>
            <div class="stat-val">${Number(g.month_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">GAS RATE</div>
            <div class="stat-val">${Number(g.current_rate_p || 0).toFixed(2)} <span class="stat-unit">p/kWh</span></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">EST. MONTH SPEND</div>
            <div class="stat-val">£${Number(g.monthly_spend_gbp || 0).toFixed(2)}</div>
          </div>
        </div>
      `;
    } else if (this.activeTab === 'ev') {
      const ev = data.ev || {};
      const soc = Math.min(Math.max(Number(ev.battery_soc_pct || 0), 0), 100);
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">PEUGEOT e-2008 BATTERY</div>
            <div class="stat-val color-ev">${soc}% <span class="stat-unit">(${Number(ev.range_miles || 0)} miles)</span></div>
            <div class="battery-bar-container">
              <div class="battery-bar-fill" style="width: ${soc}%"></div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-label">myenergi ZAPPI SPEED</div>
            <div class="stat-val">${Number(ev.charger_power_kw || 0).toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Mode: ${ev.charger_mode || 'Eco+'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">SESSION ENERGY ADDED</div>
            <div class="stat-val">${Number(ev.energy_added_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Plugged In • Catenary Cable</div>
          </div>
        </div>
      `;
    }
  }

  update(data, projectedHotspots = []) {
    this.lastData = data;

    // Header pills
    const solarKw = Number(data.solar?.power_kw || 0);
    const gridKw = Number(data.octopus_electric?.power_kw || 0);
    const evKw = Number(data.ev?.charger_power_kw || 0);
    const isExporting = gridKw < 0 || Boolean(data.octopus_electric?.is_exporting);

    const hdrSolar = this.el.querySelector('#hdr-solar-kw');
    const hdrGrid = this.el.querySelector('#hdr-grid-kw');
    const hdrEv = this.el.querySelector('#hdr-ev-kw');
    const hdrGas = this.el.querySelector('#hdr-gas-val');

    if (hdrSolar) hdrSolar.innerText = `${solarKw.toFixed(2)} kW`;
    if (hdrGrid) {
      hdrGrid.innerText = `${isExporting ? 'Export ' : 'Import '}${Math.abs(gridKw).toFixed(2)} kW`;
      hdrGrid.className = `hud-flow-val ${isExporting ? 'color-grid-export' : 'color-grid-import'}`;
    }
    if (hdrEv) hdrEv.innerText = `${evKw.toFixed(2)} kW`;
    if (hdrGas) {
      hdrGas.innerText = data.octopus_gas?.is_active ? 'Heating' : 'Standby';
    }

    // 3D Hotspot Badges
    const container = this.el.querySelector('#hotspots-container');
    container.innerHTML = '';

    for (const spot of projectedHotspots) {
      if (!spot.visible) continue;

      let badgeHtml = '';
      if (spot.id === 'solar') {
        badgeHtml = `<span>☀️ Solax</span> <span class="color-solar">${solarKw.toFixed(2)} kW</span>`;
      } else if (spot.id === 'grid') {
        const rate = Number(data.octopus_electric?.current_rate_p || 0).toFixed(1);
        badgeHtml = `<span>⚡ Octopus</span> <span>${Math.abs(gridKw).toFixed(1)} kW</span> <span style="color:#94a3b8">(${rate}p)</span>`;
      } else if (spot.id === 'boiler') {
        badgeHtml = `<span>🔥 Boiler</span> <span class="color-gas">${data.octopus_gas?.boiler_status || 'Active'}</span>`;
      } else if (spot.id === 'ev') {
        badgeHtml = `<span>🚗 Peugeot</span> <span class="color-ev">${data.ev?.battery_soc_pct || 68}%</span>`;
      }

      const badge = document.createElement('div');
      badge.className = 'hotspot-badge';
      badge.style.left = `${spot.x}px`;
      badge.style.top = `${spot.y}px`;
      badge.innerHTML = badgeHtml;

      badge.addEventListener('click', () => {
        const tabMap = { solar: 'solar', grid: 'electric', boiler: 'gas', ev: 'ev' };
        this.openDrawerTab(tabMap[spot.id] || 'solar');
        this.onPresetClick(spot.id);
      });

      container.appendChild(badge);
    }

    // Update open drawer if visible
    if (this.el.querySelector('#hud-drawer').classList.contains('open')) {
      this.renderDrawerContent();
    }
  }
}
