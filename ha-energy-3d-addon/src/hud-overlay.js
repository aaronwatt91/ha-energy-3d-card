function toKw(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return 0;
  // If domestic value >= 20.0, it is Watts (e.g. 50W, 800W, 2500W, 7200W). Divide by 1000.
  // Values < 20.0 are kW (e.g. 0.45, 1.2, 2.85, 7.2).
  if (Math.abs(num) >= 20.0) {
    return num / 1000.0;
  }
  return num;
}

function getComfortStatus(temp) {
  const t = Number(temp);
  if (isNaN(t)) {
    return { label: 'Comfortable', color: '#10b981', icon: '✨', code: 'comfortable' };
  }
  if (t < 16.0) {
    return { label: 'Cold (<16°C)', color: '#38bdf8', icon: '❄️', code: 'cold' };
  } else if (t > 22.0) {
    return { label: 'Hot (>22°C)', color: '#ef4444', icon: '🔥', code: 'hot' };
  } else {
    return { label: 'Comfortable (16–22°C)', color: '#10b981', icon: '✨', code: 'comfortable' };
  }
}

/**
 * HUDOverlay
 * High-tech glassmorphism HUD overlay with floating 3D hotspot badges,
 * live power summary, camera view switchers, metrics drawer, and Sensor Config modal.
 */
export class HUDOverlay {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.activeTab = null;
    this.availableEntities = options.availableEntities || [];
    this.currentSensorConfig = options.currentSensorConfig || {};
    this.onPresetClick = options.onPresetClick || (() => {});
    this.onToggleXray = options.onToggleXray || (() => {});
    this.onToggleNight = options.onToggleNight || (() => {});
    this.onToggleRotate = options.onToggleRotate || (() => {});
    this.onToggleLight = options.onToggleLight || (() => {});
    this.onSaveSensors = options.onSaveSensors || (() => {});

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

        /* Sensor Settings Modal */
        .sensor-modal {
          position: absolute;
          inset: 20px;
          max-width: 600px;
          max-height: 520px;
          margin: auto;
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          pointer-events: auto;
          z-index: 30;
          display: none;
          flex-direction: column;
        }

        .sensor-modal.open {
          display: flex;
        }

        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding-right: 6px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-body::-webkit-scrollbar {
          width: 5px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .sensor-group-title {
          font-size: 12px;
          font-weight: 700;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 6px;
        }

        .sensor-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sensor-row label {
          font-size: 11px;
          color: #94a3b8;
        }

        .sensor-row input {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f8fafc;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 12px;
          outline: none;
          transition: border-color 0.2s;
        }

        .sensor-row input:focus {
          border-color: #38bdf8;
        }

        .sensor-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .light-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 8px;
          margin-top: 6px;
        }

        .light-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .light-card.active {
          background: rgba(251, 191, 36, 0.12);
          border-color: rgba(251, 191, 36, 0.4);
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.15);
        }

        .light-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .light-name {
          font-size: 11px;
          font-weight: 600;
          color: #f1f5f9;
        }

        .light-status-pill {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .light-status-pill.on {
          background: #f59e0b;
          color: #000;
        }

        .light-status-pill.off {
          background: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .light-toggle-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 5px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          pointer-events: auto;
          transition: background 0.2s;
        }

        .light-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-action {
          padding: 7px 16px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: 0.2s ease;
        }

        .btn-save {
          background: #0284c7;
          color: #fff;
        }
        .btn-save:hover { background: #0369a1; }

        .btn-detect {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        .btn-detect:hover { background: rgba(255, 255, 255, 0.18); }

        @media (max-width: 600px) {
          .hud-controls-bar {
            width: calc(100% - 24px);
            overflow-x: auto;
            justify-content: flex-start;
          }
          .hud-flow-summary { display: none; }
          .hud-drawer {
            top: 60px;
            right: 8px;
            left: 8px;
            width: auto;
          }
          .sensor-modal {
            inset: 10px;
            max-height: calc(100vh - 20px);
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
          <button class="drawer-nav-tab" data-tab="heating">🌡️ Heating</button>
          <button class="drawer-nav-tab" data-tab="lights">💡 Lights</button>
        </div>

        <div id="drawer-content"></div>
      </div>

      <!-- Sensor Configuration Modal (Add In My Own Sensors) -->
      <div class="sensor-modal" id="sensor-modal">
        <div class="drawer-header">
          <div class="drawer-title">⚙️ Configure My Device Sensors</div>
          <button class="drawer-close" id="sensor-modal-close">&times;</button>
        </div>

        <div class="modal-body" id="sensor-modal-body">
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 6px;">
            Map your Home Assistant entities to monitor live power in the 3D model:
          </div>

          <!-- Solar -->
          <div class="sensor-group-title">☀️ Solax Solar Integration</div>
          <div class="sensor-row">
            <label>Live Solar Generation Power (kW)</label>
            <input type="text" id="cfg-solax-power" placeholder="sensor.solax_pv_power_total">
          </div>
          <div class="sensor-row">
            <label>Today's Solar Energy (kWh)</label>
            <input type="text" id="cfg-solax-today" placeholder="sensor.solax_today_s_solar_energy">
          </div>
          <div class="sensor-row">
            <label>This Week's Solar Energy (kWh)</label>
            <input type="text" id="cfg-solax-week" placeholder="sensor.solax_this_week_solar_energy">
          </div>
          <div class="sensor-row">
            <label>This Month's Solar Energy (kWh)</label>
            <input type="text" id="cfg-solax-month" placeholder="sensor.solax_this_month_solar_energy">
          </div>
          <div class="sensor-row">
            <label>This Year's Solar Energy (kWh)</label>
            <input type="text" id="cfg-solax-year" placeholder="sensor.solax_this_year_solar_energy">
          </div>

          <!-- Octopus Electricity -->
          <div class="sensor-group-title">⚡ Octopus Electricity & Grid</div>
          <div class="sensor-row">
            <label>Live Electricity Power / Home Mini (kW)</label>
            <input type="text" id="cfg-octopus-power" placeholder="sensor.octopus_home_mini_current_electricity_power">
          </div>
          <div class="sensor-row">
            <label>Solar Feed-In Export Power (kW)</label>
            <input type="text" id="cfg-octopus-export" placeholder="sensor.solax_feed_in_power">
          </div>
          <div class="sensor-row">
            <label>Electricity Unit Rate (p/kWh)</label>
            <input type="text" id="cfg-octopus-rate" placeholder="sensor.octopus_energy_electricity_current_rate">
          </div>
          <div class="sensor-row">
            <label>Month-to-Date Spend (£)</label>
            <input type="text" id="cfg-octopus-spend" placeholder="sensor.octopus_energy_electricity_current_month_cost">
          </div>
          <div class="sensor-row">
            <label>Octopus Home Mini 30-Min Reading (kWh)</label>
            <input type="text" id="cfg-octopus-30min" placeholder="sensor.octopus_home_mini_electricity_30min">
          </div>
          <div class="sensor-row">
            <label>Electricity Day (kWh)</label>
            <input type="text" id="cfg-octopus-day" placeholder="sensor.octopus_energy_electricity_day">
          </div>
          <div class="sensor-row">
            <label>Electricity Week (kWh)</label>
            <input type="text" id="cfg-octopus-week" placeholder="sensor.octopus_energy_electricity_week">
          </div>
          <div class="sensor-row">
            <label>Electricity Month (kWh)</label>
            <input type="text" id="cfg-octopus-month" placeholder="sensor.octopus_energy_electricity_month">
          </div>

          <!-- Gas -->
          <div class="sensor-group-title">🔥 Octopus Gas & Combi Boiler</div>
          <div class="sensor-row">
            <label>Boiler Status (switch / climate / sensor)</label>
            <input type="text" id="cfg-boiler-status" placeholder="sensor.boiler_status">
          </div>
          <div class="sensor-row">
            <label>Gas 30-Min Reading (Home Mini) (kWh)</label>
            <input type="text" id="cfg-gas-30min" placeholder="sensor.octopus_home_mini_gas_30min">
          </div>
          <div class="sensor-row">
            <label>Gas Day (kWh)</label>
            <input type="text" id="cfg-gas-day" placeholder="sensor.octopus_energy_gas_day">
          </div>
          <div class="sensor-row">
            <label>Gas Week (kWh)</label>
            <input type="text" id="cfg-gas-week" placeholder="sensor.octopus_energy_gas_week">
          </div>
          <div class="sensor-row">
            <label>Gas Month (kWh)</label>
            <input type="text" id="cfg-gas-month" placeholder="sensor.octopus_energy_gas_month">
          </div>

          <!-- EV -->
          <div class="sensor-group-title">🚗 myenergi Zappi & Peugeot e-2008</div>
          <div class="sensor-row">
            <label>Zappi Charging Speed (kW)</label>
            <input type="text" id="cfg-zappi-power" placeholder="sensor.myenergi_zappi_power">
          </div>
          <div class="sensor-row">
            <label>Zappi Session Energy Added (kWh)</label>
            <input type="text" id="cfg-zappi-energy" placeholder="sensor.myenergi_zappi_charge_added_session">
          </div>
          <div class="sensor-row">
            <label>Peugeot Battery SoC (%)</label>
            <input type="text" id="cfg-peugeot-battery" placeholder="sensor.e2008_battery_level">
          </div>
          <div class="sensor-row">
            <label>Peugeot Remaining Range (miles)</label>
            <input type="text" id="cfg-peugeot-range" placeholder="sensor.e2008_battery_range">
          </div>

          <!-- Heating & Thermostats -->
          <div class="sensor-group-title">🌡️ Heating & Thermostats (Upstairs & Downstairs)</div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>Downstairs Thermostat (climate / sensor)</label>
              <input type="text" id="cfg-thermostat-downstairs" placeholder="climate.downstairs">
            </div>
            <div class="sensor-row">
              <label>Upstairs Thermostat (climate / sensor)</label>
              <input type="text" id="cfg-thermostat-upstairs" placeholder="climate.upstairs">
            </div>
          </div>

          <!-- Room Lights -->
          <div class="sensor-group-title">💡 Room Lights (12 Rooms in 3D Model)</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: -6px;">
            Select light/switch entities for each room. When turned ON, the room glows in 3D!
          </div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>🛋️ Living Room / Lounge</label>
              <input type="text" id="cfg-light-lounge" placeholder="light.living_room">
            </div>
            <div class="sensor-row">
              <label>🍳 Kitchen</label>
              <input type="text" id="cfg-light-kitchen" placeholder="light.kitchen">
            </div>
            <div class="sensor-row">
              <label>🍽️ Dining Area</label>
              <input type="text" id="cfg-light-dining" placeholder="light.dining_room">
            </div>
            <div class="sensor-row">
              <label>🚪 Entrance Hall & Stairs</label>
              <input type="text" id="cfg-light-hallway" placeholder="light.hallway">
            </div>
            <div class="sensor-row">
              <label>🚽 Downstairs WC / Cloakroom</label>
              <input type="text" id="cfg-light-wc" placeholder="light.downstairs_wc">
            </div>
            <div class="sensor-row">
              <label>🛏️ Master Bedroom</label>
              <input type="text" id="cfg-light-master" placeholder="light.master_bedroom">
            </div>
            <div class="sensor-row">
              <label>🚿 Master En-Suite</label>
              <input type="text" id="cfg-light-ensuite" placeholder="light.ensuite">
            </div>
            <div class="sensor-row">
              <label>🛏️ Bedroom 2 (Guestroom)</label>
              <input type="text" id="cfg-light-bedroom2" placeholder="light.bedroom_2">
            </div>
            <div class="sensor-row">
              <label>🧸 Bedroom 3 (Nursery / Office)</label>
              <input type="text" id="cfg-light-bedroom3" placeholder="light.bedroom_3">
            </div>
            <div class="sensor-row">
              <label>🛁 Family Bathroom</label>
              <input type="text" id="cfg-light-bathroom" placeholder="light.family_bathroom">
            </div>
            <div class="sensor-row">
              <label>🪜 Upstairs Landing</label>
              <input type="text" id="cfg-light-landing" placeholder="light.landing">
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-action btn-detect" id="btn-detect-sensors">🔍 Auto-Detect Sensors</button>
          <button class="btn-action btn-save" id="btn-save-sensors">💾 Save & Apply</button>
        </div>
      </div>

      <!-- Bottom Camera & Feature Bar -->
      <div class="hud-controls-bar">
        <button class="hud-btn active" data-preset="overview">🏠 House</button>
        <button class="hud-btn" data-preset="solar">☀️ Solar</button>
        <button class="hud-btn" data-preset="meter">⚡ Meter</button>
        <button class="hud-btn" data-preset="boiler">🔥 Boiler</button>
        <button class="hud-btn" data-preset="ev">🚗 Peugeot</button>
        <button class="hud-btn" data-preset="downstairs">🛋️ Downstairs</button>
        <button class="hud-btn" data-preset="upstairs">🛏️ Upstairs</button>
        <div class="hud-btn-divider"></div>
        <button class="hud-btn" id="btn-xray">👁️ X-Ray</button>
        <button class="hud-btn" id="btn-night">🌙 Night</button>
        <button class="hud-btn" id="btn-rotate">🔄 Orbit</button>
        <button class="hud-btn" id="btn-drawer">📊 Stats</button>
        <button class="hud-btn" id="btn-sensors">⚙️ Sensors</button>
      </div>
    `;

    this.container.appendChild(this.el);
    this.bindEvents();
    this.populateSensorInputs();
  }

  bindEvents() {
    const presetBtns = this.el.querySelectorAll('[data-preset]');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        presetBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const preset = btn.getAttribute('data-preset');
        this.onPresetClick(preset);
      });
    });

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

    // Sensor Config Modal
    const btnSensors = this.el.querySelector('#btn-sensors');
    const sensorModal = this.el.querySelector('#sensor-modal');
    const sensorClose = this.el.querySelector('#sensor-modal-close');
    const btnSaveSensors = this.el.querySelector('#btn-save-sensors');
    const btnDetectSensors = this.el.querySelector('#btn-detect-sensors');

    btnSensors.addEventListener('click', () => {
      sensorModal.classList.toggle('open');
      btnSensors.classList.toggle('active', sensorModal.classList.contains('open'));
    });

    sensorClose.addEventListener('click', () => {
      sensorModal.classList.remove('open');
      btnSensors.classList.remove('active');
    });

    btnSaveSensors.addEventListener('click', () => {
      const cfg = this.readSensorInputs();
      this.currentSensorConfig = cfg;
      try {
        localStorage.setItem('ha_energy_3d_custom_sensors', JSON.stringify(cfg));
      } catch (e) {}

      this.onSaveSensors(cfg);
      sensorModal.classList.remove('open');
      btnSensors.classList.remove('active');
    });

    btnDetectSensors.addEventListener('click', () => {
      this.autoDetectSensors();
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

  populateSensorInputs() {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem('ha_energy_3d_custom_sensors') || '{}');
    } catch (e) {}

    const cfg = { ...this.currentSensorConfig, ...saved };
    const setVal = (id, val) => {
      const el = this.el.querySelector(id);
      if (el && val) el.value = val;
    };

    setVal('#cfg-solax-power', cfg.solax_power);
    setVal('#cfg-solax-today', cfg.solax_today);
    setVal('#cfg-solax-week', cfg.solax_week);
    setVal('#cfg-solax-month', cfg.solax_month);
    setVal('#cfg-solax-year', cfg.solax_year);

    setVal('#cfg-octopus-power', cfg.octopus_electric_power);
    setVal('#cfg-octopus-export', cfg.octopus_export_power);
    setVal('#cfg-octopus-rate', cfg.octopus_rate);
    setVal('#cfg-octopus-spend', cfg.octopus_monthly_spend);
    setVal('#cfg-octopus-30min', cfg.octopus_electric_30min);
    setVal('#cfg-octopus-day', cfg.octopus_electric_day);
    setVal('#cfg-octopus-week', cfg.octopus_electric_week);
    setVal('#cfg-octopus-month', cfg.octopus_electric_month);

    setVal('#cfg-boiler-status', cfg.boiler_status);
    setVal('#cfg-gas-30min', cfg.octopus_gas_30min);
    setVal('#cfg-gas-day', cfg.octopus_gas_day);
    setVal('#cfg-gas-week', cfg.octopus_gas_week);
    setVal('#cfg-gas-month', cfg.octopus_gas_month);

    setVal('#cfg-zappi-power', cfg.myenergi_power);
    setVal('#cfg-zappi-energy', cfg.myenergi_energy);
    setVal('#cfg-peugeot-battery', cfg.peugeot_battery);
    setVal('#cfg-peugeot-range', cfg.peugeot_range);

    // Thermostats
    setVal('#cfg-thermostat-downstairs', cfg.thermostat_downstairs);
    setVal('#cfg-thermostat-upstairs', cfg.thermostat_upstairs);

    // Room Lights (11 Interior Rooms)
    const rooms = [
      'lounge', 'kitchen', 'dining', 'hallway', 'wc',
      'master', 'ensuite', 'bedroom2', 'bedroom3',
      'bathroom', 'landing'
    ];
    for (const r of rooms) {
      const fieldKey = r === 'master' ? 'master_bedroom' : r;
      setVal(`#cfg-light-${r}`, cfg[`light_${fieldKey}`] || cfg.room_lights?.[fieldKey]?.entity_id || cfg.room_lights?.[fieldKey]);
    }
  }

  readSensorInputs() {
    const getVal = (id) => {
      const el = this.el.querySelector(id);
      return el ? el.value.trim() : '';
    };

    return {
      solax_power: getVal('#cfg-solax-power'),
      solax_today: getVal('#cfg-solax-today'),
      solax_week: getVal('#cfg-solax-week'),
      solax_month: getVal('#cfg-solax-month'),
      solax_year: getVal('#cfg-solax-year'),

      octopus_electric_power: getVal('#cfg-octopus-power'),
      octopus_export_power: getVal('#cfg-octopus-export'),
      octopus_rate: getVal('#cfg-octopus-rate'),
      octopus_monthly_spend: getVal('#cfg-octopus-spend'),
      octopus_electric_30min: getVal('#cfg-octopus-30min'),
      octopus_electric_day: getVal('#cfg-octopus-day'),
      octopus_electric_week: getVal('#cfg-octopus-week'),
      octopus_electric_month: getVal('#cfg-octopus-month'),

      boiler_status: getVal('#cfg-boiler-status'),
      octopus_gas_30min: getVal('#cfg-gas-30min'),
      octopus_gas_day: getVal('#cfg-gas-day'),
      octopus_gas_week: getVal('#cfg-gas-week'),
      octopus_gas_month: getVal('#cfg-gas-month'),

      myenergi_power: getVal('#cfg-zappi-power'),
      myenergi_energy: getVal('#cfg-zappi-energy'),
      peugeot_battery: getVal('#cfg-peugeot-battery'),
      peugeot_range: getVal('#cfg-peugeot-range'),

      // Thermostats
      thermostat_downstairs: getVal('#cfg-thermostat-downstairs'),
      thermostat_upstairs: getVal('#cfg-thermostat-upstairs'),

      // Room Lights
      light_lounge: getVal('#cfg-light-lounge'),
      light_kitchen: getVal('#cfg-light-kitchen'),
      light_dining: getVal('#cfg-light-dining'),
      light_hallway: getVal('#cfg-light-hallway'),
      light_wc: getVal('#cfg-light-wc'),
      light_master_bedroom: getVal('#cfg-light-master'),
      light_ensuite: getVal('#cfg-light-ensuite'),
      light_bedroom2: getVal('#cfg-light-bedroom2'),
      light_bedroom3: getVal('#cfg-light-bedroom3'),
      light_bathroom: getVal('#cfg-light-bathroom'),
      light_landing: getVal('#cfg-light-landing')
    };
  }

  setAvailableEntities(entities) {
    this.availableEntities = entities || [];
  }

  autoDetectSensors() {
    const ids = this.availableEntities.map((e) => (typeof e === 'string' ? e : e.entity_id || ''));
    if (!ids.length) return;

    const findBest = (...patterns) => {
      for (const p of patterns) {
        const found = ids.find((id) => id.toLowerCase().includes(p.toLowerCase()));
        if (found) return found;
      }
      return '';
    };

    const setIfFound = (elemId, ...patterns) => {
      const el = this.el.querySelector(elemId);
      if (el && !el.value) {
        const match = findBest(...patterns);
        if (match) el.value = match;
      }
    };

    // Auto-detect matches
    setIfFound('#cfg-solax-power', 'solax_pv_power', 'solax_power', 'pv_power', 'solar_power');
    setIfFound('#cfg-solax-today', 'solax_today', 'solar_today', 'pv_energy_today');
    setIfFound('#cfg-solax-week', 'solax_week', 'solar_week');
    setIfFound('#cfg-solax-month', 'solax_month', 'solar_month');
    setIfFound('#cfg-solax-year', 'solax_year', 'solar_year');

    setIfFound('#cfg-octopus-power', 'home_mini_current_electricity', 'octopus_electricity_power', 'grid_power');
    setIfFound('#cfg-octopus-export', 'feed_in_power', 'solax_export', 'grid_export');
    setIfFound('#cfg-octopus-rate', 'electricity_current_rate', 'octopus_rate', 'current_rate');
    setIfFound('#cfg-octopus-spend', 'electricity_current_month_cost', 'octopus_month_cost', 'electricity_cost');
    setIfFound('#cfg-octopus-30min', 'home_mini_electricity_30min', 'electricity_30min');
    setIfFound('#cfg-octopus-day', 'electricity_day', 'octopus_electricity_today');
    setIfFound('#cfg-octopus-week', 'electricity_week');
    setIfFound('#cfg-octopus-month', 'electricity_month');

    setIfFound('#cfg-boiler-status', 'boiler', 'climate.boiler', 'switch.boiler', 'heating');
    setIfFound('#cfg-gas-30min', 'home_mini_gas_30min', 'gas_30min');
    setIfFound('#cfg-gas-day', 'gas_day', 'octopus_gas_today');
    setIfFound('#cfg-gas-week', 'gas_week');
    setIfFound('#cfg-gas-month', 'gas_month');

    setIfFound('#cfg-zappi-power', 'zappi_power', 'myenergi_power', 'ev_power', 'charger_power');
    setIfFound('#cfg-zappi-energy', 'charge_added_session', 'zappi_energy', 'zappi_today');
    setIfFound('#cfg-peugeot-battery', 'e2008_battery', 'peugeot_battery', 'battery_level', 'soc');
    setIfFound('#cfg-peugeot-range', 'e2008_range', 'peugeot_range', 'range');

    // Thermostats auto-detection
    setIfFound('#cfg-thermostat-downstairs', 'climate.downstairs', 'climate.ground_floor', 'climate.hallway', 'climate.living_room', 'downstairs_temperature');
    setIfFound('#cfg-thermostat-upstairs', 'climate.upstairs', 'climate.first_floor', 'climate.landing', 'climate.master_bedroom', 'upstairs_temperature');

    // Room Lights auto-detection
    setIfFound('#cfg-light-lounge', 'light.living', 'light.lounge', 'light.sitting_room', 'switch.living');
    setIfFound('#cfg-light-kitchen', 'light.kitchen', 'light.kitchen_lights', 'switch.kitchen');
    setIfFound('#cfg-light-dining', 'light.dining', 'light.dining_room', 'switch.dining');
    setIfFound('#cfg-light-hallway', 'light.hallway', 'light.hall', 'light.entrance', 'switch.hallway');
    setIfFound('#cfg-light-wc', 'light.wc', 'light.cloakroom', 'light.downstairs_toilet', 'switch.wc');
    setIfFound('#cfg-light-master', 'light.master', 'light.bedroom_1', 'light.main_bedroom', 'switch.master');
    setIfFound('#cfg-light-ensuite', 'light.ensuite', 'light.en_suite', 'switch.ensuite');
    setIfFound('#cfg-light-bedroom2', 'light.bedroom_2', 'light.bed_2', 'light.guest_room', 'switch.bedroom_2');
    setIfFound('#cfg-light-bedroom3', 'light.bedroom_3', 'light.bed_3', 'light.nursery', 'light.office', 'switch.bedroom_3');
    setIfFound('#cfg-light-bathroom', 'light.bathroom', 'light.family_bathroom', 'switch.bathroom');
    setIfFound('#cfg-light-landing', 'light.landing', 'light.stairs', 'light.upstairs_hallway', 'switch.landing');
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
      const kw = toKw(s.power_kw);
      const isGenerating = kw > 0.04;
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">SOLAX LIVE GENERATION</div>
            <div class="stat-val color-solar">${kw.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Status: ${isGenerating ? 'Generating • Active Flow' : 'Frozen (No Generation)'}</div>
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
      const kw = toKw(o.power_kw);
      const isExporting = kw < -0.02 || Boolean(o.is_exporting);
      const isMoving = Math.abs(kw) > 0.03;
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">OCTOPUS GRID POWER (${isMoving ? (isExporting ? 'EXPORTING TO GRID' : 'IMPORTING FROM GRID') : 'IDLE / FROZEN'})</div>
            <div class="stat-val ${isExporting ? 'color-grid-export' : 'color-grid-import'}">
              ${Math.abs(kw).toFixed(2)} <span class="stat-unit">kW</span>
            </div>
            <div class="stat-subtext">Flow: ${isMoving ? (isExporting ? '⬆️ House to Pylon' : '⬇️ Pylon to House') : 'Frozen (0 kW)'}</div>
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
      const isActive = Boolean(g.is_active && g.boiler_status !== 'off');
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val color-gas">${g.boiler_status || (isActive ? 'Active' : 'Standby')}</div>
            <div class="stat-subtext">Pipework: ${isActive ? '🔥 Flowing Tank to Boiler' : 'Frozen (Idle)'}</div>
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
      const evKw = toKw(ev.charger_power_kw);
      const isCharging = Boolean(ev.is_charging && evKw > 0.05);
      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div class="stat-label">PEUGEOT e-2008 BATTERY</div>
            <div class="stat-val color-ev">${soc}% <span class="stat-unit">(${Number(ev.range_miles || 0)} miles)</span></div>
            <div class="battery-bar-container">
              <div class="battery-bar-fill" style="width: ${soc}%"></div>
            </div>
            <div class="stat-subtext" style="margin-top: 6px;">Charging Cable: ${isCharging ? '⚡ Flowing Charger to Car' : 'Frozen (Not Charging)'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">myenergi ZAPPI SPEED</div>
            <div class="stat-val">${evKw.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Mode: ${ev.charger_mode || 'Eco+'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">SESSION ENERGY ADDED</div>
            <div class="stat-val">${Number(ev.energy_added_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
          </div>
        </div>
      `;
    } else if (this.activeTab === 'heating') {
      const thermo = data.thermostats || {};
      const down = thermo.downstairs || {};
      const up = thermo.upstairs || {};
      const gas = data.octopus_gas || {};

      const downTemp = Number(down.current_temp || 20.0);
      const downTarget = Number(down.target_temp || 21.0);
      const downHeating = Boolean(down.is_heating);
      const downComfort = getComfortStatus(downTemp);

      const upTemp = Number(up.current_temp || 19.5);
      const upTarget = Number(up.target_temp || 19.5);
      const upHeating = Boolean(up.is_heating);
      const upComfort = getComfortStatus(upTemp);

      const boilerFiring = Boolean(gas.is_active);

      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">DOWNSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${downComfort.color}; font-size: 26px;">
                  ${downTemp.toFixed(1)} <span class="stat-unit">°C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${downComfort.color}; vertical-align: middle; margin-left: 6px;">
                    ${downComfort.icon} ${downComfort.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Target Setpoint: ${downTarget.toFixed(1)}°C &bull; 
                  <span style="color: ${downHeating ? '#f97316' : '#94a3b8'}; font-weight: ${downHeating ? '700' : 'normal'};">
                    ${downHeating ? '🔥 Calling for Heat' : '❄️ Thermostat Idle / Off'}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-down">🛋️ View Ground Floor</button>
            </div>
          </div>

          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">UPSTAIRS HEATING & CLIMATE</div>
                <div class="stat-val" style="color: ${upComfort.color}; font-size: 26px;">
                  ${upTemp.toFixed(1)} <span class="stat-unit">°C</span>
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${upComfort.color}; vertical-align: middle; margin-left: 6px;">
                    ${upComfort.icon} ${upComfort.label}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Target Setpoint: ${upTarget.toFixed(1)}°C &bull; 
                  <span style="color: ${upHeating ? '#f97316' : '#94a3b8'}; font-weight: ${upHeating ? '700' : 'normal'};">
                    ${upHeating ? '🔥 Calling for Heat' : '❄️ Thermostat Idle / Off'}
                  </span>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-up">🛏️ View First Floor</button>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">KITCHEN COMBI BOILER</div>
            <div class="stat-val" style="color: ${boilerFiring ? '#f97316' : '#94a3b8'};">
              ${boilerFiring ? '🔥 Central Heating (Firing)' : 'Standby / Off'}
            </div>
            <div class="stat-subtext">
              Hooked to Thermostats: ${boilerFiring ? (downHeating && upHeating ? 'Downstairs & Upstairs Heating' : (downHeating ? 'Downstairs Heating' : 'Upstairs Heating')) : 'Both Thermostats Satisfied (Off)'}
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">GAS TODAY</div>
            <div class="stat-val">${Number(gas.day_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Supply: External LPG Bulk Tank</div>
          </div>
        </div>
      `;

      const btnDown = content.querySelector('#btn-focus-down');
      if (btnDown) {
        btnDown.addEventListener('click', () => this.onPresetClick('downstairs'));
      }
      const btnUp = content.querySelector('#btn-focus-up');
      if (btnUp) {
        btnUp.addEventListener('click', () => this.onPresetClick('upstairs'));
      }
    } else if (this.activeTab === 'lights') {
      const roomLights = data.room_lights || {};
      const roomList = [
        { key: 'lounge', name: 'Living Room', icon: '🛋️' },
        { key: 'kitchen', name: 'Kitchen', icon: '🍳' },
        { key: 'dining', name: 'Dining Room', icon: '🍽️' },
        { key: 'hallway', name: 'Hall & Stairs', icon: '🚪' },
        { key: 'wc', name: 'Downstairs WC', icon: '🚽' },
        { key: 'master_bedroom', name: 'Master Bedroom', icon: '🛏️' },
        { key: 'ensuite', name: 'Master En-Suite', icon: '🚿' },
        { key: 'bedroom2', name: 'Bedroom 2', icon: '🛏️' },
        { key: 'bedroom3', name: 'Bedroom 3', icon: '🧸' },
        { key: 'bathroom', name: 'Family Bathroom', icon: '🛁' },
        { key: 'landing', name: 'Upstairs Landing', icon: '🪜' }
      ];

      let cardsHtml = '';
      for (const r of roomList) {
        const item = roomLights[r.key] || {};
        const isOn = Boolean(item.is_on);
        const bri = item.brightness !== undefined ? Math.round((item.brightness / 255) * 100) : 100;
        cardsHtml += `
          <div class="light-card ${isOn ? 'active' : ''}">
            <div class="light-card-top">
              <span class="light-name">${r.icon} ${r.name}</span>
              <span class="light-status-pill ${isOn ? 'on' : 'off'}">${isOn ? '💡 ON' : 'OFF'}</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8;">${isOn ? `Brightness: ${bri}%` : 'Light is off'}</div>
            <button class="light-toggle-btn" data-entity="${item.entity_id || ''}" data-room="${r.key}">
              ${isOn ? 'Turn Off' : 'Turn On'}
            </button>
          </div>
        `;
      }

      content.innerHTML = `
        <div style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">
          Interactive 3D Room Illumination &bull; Toggle lights to illuminate rooms in the model:
        </div>
        <div class="light-grid">
          ${cardsHtml}
        </div>
      `;

      const toggleBtns = content.querySelectorAll('.light-toggle-btn');
      toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const entId = btn.getAttribute('data-entity');
          const roomKey = btn.getAttribute('data-room');
          if (entId) {
            this.onToggleLight(entId);
          } else if (roomKey && data.room_lights?.[roomKey]) {
            // Local fallback simulation
            data.room_lights[roomKey].is_on = !data.room_lights[roomKey].is_on;
            this.renderDrawerContent();
          }
        });
      });
    }
  }

  update(data, projectedHotspots = []) {
    this.lastData = data;

    const solarKw = toKw(data.solar?.power_kw);
    const gridKw = toKw(data.octopus_electric?.power_kw);
    const evKw = toKw(data.ev?.charger_power_kw);
    const isExporting = gridKw < -0.02 || Boolean(data.octopus_electric?.is_exporting);

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
        const isGen = solarKw > 0.04;
        badgeHtml = `<span>☀️ Solax</span> <span class="color-solar">${solarKw.toFixed(2)} kW</span> <span style="font-size:9px;color:${isGen ? '#10b981' : '#64748b'}">●</span>`;
      } else if (spot.id === 'grid') {
        const rate = Number(data.octopus_electric?.current_rate_p || 0).toFixed(1);
        badgeHtml = `<span>⚡ Octopus</span> <span>${Math.abs(gridKw).toFixed(1)} kW</span> <span style="color:#94a3b8">(${rate}p)</span>`;
      } else if (spot.id === 'boiler') {
        badgeHtml = `<span>🔥 Boiler</span> <span class="color-gas">${data.octopus_gas?.boiler_status || 'Active'}</span>`;
      } else if (spot.id === 'ev') {
        badgeHtml = `<span>🚗 Peugeot</span> <span class="color-ev">${data.ev?.battery_soc_pct || 68}%</span>`;
      } else if (spot.id === 'thermostat_downstairs') {
        const down = data.thermostats?.downstairs || {};
        const tVal = Number(down.current_temp || 20.0).toFixed(1);
        const isHeat = Boolean(down.is_heating);
        const comfort = getComfortStatus(down.current_temp || 20.0);
        badgeHtml = `<span>🌡️ Downstairs</span> <span style="color:${comfort.color};font-weight:700;">${tVal}°C</span> <span style="font-size:10px;">${comfort.icon}</span> ${isHeat ? '<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>' : ''}`;
      } else if (spot.id === 'thermostat_upstairs') {
        const up = data.thermostats?.upstairs || {};
        const tVal = Number(up.current_temp || 19.5).toFixed(1);
        const isHeat = Boolean(up.is_heating);
        const comfort = getComfortStatus(up.current_temp || 19.5);
        badgeHtml = `<span>🌡️ Upstairs</span> <span style="color:${comfort.color};font-weight:700;">${tVal}°C</span> <span style="font-size:10px;">${comfort.icon}</span> ${isHeat ? '<span style="color:#f97316;font-size:9px;font-weight:700;">HEATING</span>' : ''}`;
      }

      const badge = document.createElement('div');
      badge.className = 'hotspot-badge';
      badge.style.left = `${spot.x}px`;
      badge.style.top = `${spot.y}px`;
      badge.innerHTML = badgeHtml;

      badge.addEventListener('click', () => {
        const tabMap = {
          solar: 'solar',
          grid: 'electric',
          boiler: 'gas',
          ev: 'ev',
          thermostat_downstairs: 'heating',
          thermostat_upstairs: 'heating'
        };
        const presetMap = {
          thermostat_downstairs: 'downstairs',
          thermostat_upstairs: 'upstairs'
        };
        this.openDrawerTab(tabMap[spot.id] || 'solar');
        this.onPresetClick(presetMap[spot.id] || spot.id);
      });

      container.appendChild(badge);
    }

    if (this.el.querySelector('#hud-drawer').classList.contains('open')) {
      this.renderDrawerContent();
    }
  }
}
