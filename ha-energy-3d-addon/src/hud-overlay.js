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
    this.onToggleTvAudio = options.onToggleTvAudio || (() => {});
    this.onSaveSensors = options.onSaveSensors || (() => {});
    this.customLights = options.customLights || [];
    this.onSaveCustomLights = options.onSaveCustomLights || (() => {});
    this.onUpdateLightPosition = options.onUpdateLightPosition || (() => {});
    this.onBeaconFocus = options.onBeaconFocus || (() => {});
    this.onBeaconClear = options.onBeaconClear || (() => {});
    this.onEnableClickToPlace = options.onEnableClickToPlace || (() => {});
    this.onDisableClickToPlace = options.onDisableClickToPlace || (() => {});
    this.editingLight = null;

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

        .sensor-input-wrap {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .sensor-input-wrap input {
          flex: 1;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f8fafc;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 12px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .sensor-input-wrap input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }

        .btn-entity-browse {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .btn-entity-browse:hover {
          background: rgba(56, 189, 248, 0.3);
          border-color: #38bdf8;
          color: #fff;
        }

        /* Entity Picker Modal Dialog */
        .entity-picker-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          display: none;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .entity-picker-overlay.open {
          display: flex;
        }

        .entity-picker-card {
          width: 92%;
          max-width: 520px;
          max-height: 82vh;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .entity-picker-header {
          padding: 14px 18px 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .entity-picker-title {
          font-weight: 700;
          font-size: 14px;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .entity-filter-chips {
          display: flex;
          gap: 6px;
          padding: 10px 18px 6px;
          overflow-x: auto;
        }

        .filter-chip {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .filter-chip.active, .filter-chip:hover {
          background: #0284c7;
          border-color: #38bdf8;
          color: #fff;
        }

        .entity-search-wrap {
          padding: 6px 18px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .entity-search-input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }

        .entity-search-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }

        .entity-list-container {
          flex: 1;
          overflow-y: auto;
          padding: 8px 14px;
          max-height: 380px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .entity-item-row {
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid transparent;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.15s ease;
        }

        .entity-item-row:hover {
          background: rgba(56, 189, 248, 0.14);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .entity-item-id {
          font-weight: 600;
          font-size: 12px;
          color: #e2e8f0;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .entity-item-state {
          font-size: 11px;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
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

        /* Light Customizer Overlay Modal */
        .light-customizer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 120;
          display: none;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .light-customizer-overlay.open {
          display: flex;
        }

        .light-customizer-card {
          width: 92%;
          max-width: 540px;
          max-height: 86vh;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .coord-section {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 6px 0;
        }

        .coord-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .coord-label {
          width: 80px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .coord-stepper {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .coord-slider {
          flex: 1;
          accent-color: #38bdf8;
          height: 6px;
          cursor: pointer;
        }

        .coord-val-input {
          width: 65px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #38bdf8;
          font-weight: 700;
          padding: 4px 6px;
          border-radius: 6px;
          text-align: center;
          font-size: 12px;
          outline: none;
        }

        .coord-step-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }

        .coord-step-btn:hover {
          background: rgba(56, 189, 248, 0.3);
          border-color: #38bdf8;
        }

        .btn-pick-3d {
          background: rgba(56, 189, 248, 0.18);
          border: 1px solid #38bdf8;
          color: #38bdf8;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-pick-3d.active {
          background: #38bdf8;
          color: #000;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
        }

        .floor-select-group {
          display: flex;
          gap: 8px;
        }

        .floor-opt-btn {
          flex: 1;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
          transition: all 0.15s;
        }

        .floor-opt-btn.active {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #fff;
        }

        .color-preset-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .color-chip-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: transform 0.15s, border-color 0.15s;
        }

        .color-chip-btn:hover, .color-chip-btn.active {
          transform: scale(1.15);
          border-color: #fff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .light-card-footer {
          display: flex;
          gap: 6px;
          margin-top: 4px;
        }

        .btn-light-sub {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 6px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          transition: background 0.15s;
        }

        .btn-light-sub:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
        }

        .btn-light-del {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          width: 28px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }

        .btn-light-del:hover {
          background: rgba(239, 68, 68, 0.3);
          color: #fff;
        }

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
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-power" placeholder="sensor.solax_pv_power_total">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-power">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Today's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-today" placeholder="sensor.solax_today_s_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-today">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Week's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-week" placeholder="sensor.solax_this_week_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-week">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Month's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-month" placeholder="sensor.solax_this_month_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-month">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>This Year's Solar Energy (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-solax-year" placeholder="sensor.solax_this_year_solar_energy">
              <button type="button" class="btn-entity-browse" data-target="#cfg-solax-year">📋 Select</button>
            </div>
          </div>

          <!-- Octopus Electricity -->
          <div class="sensor-group-title">⚡ Octopus Electricity & Grid</div>
          <div class="sensor-row">
            <label>Live Electricity Power / Home Mini (kW)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-power" placeholder="sensor.octopus_home_mini_current_electricity_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-power">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Solar Feed-In Export Power (kW)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-export" placeholder="sensor.solax_feed_in_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-export">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Unit Rate (p/kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-rate" placeholder="sensor.octopus_energy_electricity_current_rate">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-rate">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Month-to-Date Spend (£)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-spend" placeholder="sensor.octopus_energy_electricity_current_month_cost">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-spend">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Octopus Home Mini 30-Min Reading (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-30min" placeholder="sensor.octopus_home_mini_electricity_30min">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-30min">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Day (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-day" placeholder="sensor.octopus_energy_electricity_day">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-day">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Week (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-week" placeholder="sensor.octopus_energy_electricity_week">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-week">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Electricity Month (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-octopus-month" placeholder="sensor.octopus_energy_electricity_month">
              <button type="button" class="btn-entity-browse" data-target="#cfg-octopus-month">📋 Select</button>
            </div>
          </div>

          <!-- Gas -->
          <div class="sensor-group-title">🔥 Octopus Gas & Combi Boiler</div>
          <div class="sensor-row">
            <label>Boiler Status (switch / climate / sensor)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-boiler-status" placeholder="sensor.boiler_status">
              <button type="button" class="btn-entity-browse" data-target="#cfg-boiler-status">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas 30-Min Reading (Home Mini) (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-30min" placeholder="sensor.octopus_home_mini_gas_30min">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-30min">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Day (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-day" placeholder="sensor.octopus_energy_gas_day">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-day">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Week (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-week" placeholder="sensor.octopus_energy_gas_week">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-week">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Gas Month (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-gas-month" placeholder="sensor.octopus_energy_gas_month">
              <button type="button" class="btn-entity-browse" data-target="#cfg-gas-month">📋 Select</button>
            </div>
          </div>

          <!-- EV -->
          <div class="sensor-group-title">🚗 myenergi Zappi & Peugeot e-2008</div>
          <div class="sensor-row">
            <label>Zappi Charging Speed (kW / Watts)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-power" placeholder="sensor.myenergi_zappi_power">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-power">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Zappi Connection Status (climate/sensor/binary_sensor)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-status" placeholder="sensor.myenergi_zappi_status">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-status">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Zappi Session Energy Added (kWh)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-zappi-energy" placeholder="sensor.myenergi_zappi_charge_added_session">
              <button type="button" class="btn-entity-browse" data-target="#cfg-zappi-energy">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Peugeot Battery SoC (%)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-peugeot-battery" placeholder="sensor.e2008_battery_level">
              <button type="button" class="btn-entity-browse" data-target="#cfg-peugeot-battery">📋 Select</button>
            </div>
          </div>
          <div class="sensor-row">
            <label>Peugeot Remaining Range (miles)</label>
            <div class="sensor-input-wrap">
              <input type="text" list="ha-entities-datalist" id="cfg-peugeot-range" placeholder="sensor.e2008_battery_range">
              <button type="button" class="btn-entity-browse" data-target="#cfg-peugeot-range">📋 Select</button>
            </div>
          </div>

          <!-- Appliances & Furniture -->
          <div class="sensor-group-title">🍽️ Appliances & Living Room Devices</div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>Kitchen Fridge Freezer (power sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-fridge" placeholder="sensor.fridge_power">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-fridge">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>Kitchen Washing Machine (power sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-washer" placeholder="sensor.washing_machine_power">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-washer">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>📺 Living Room TV (media_player/switch)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-sensor-tv" placeholder="media_player.living_room_tv">
                <button type="button" class="btn-entity-browse" data-target="#cfg-sensor-tv">📋 Select</button>
              </div>
            </div>
          </div>

          <!-- Heating & Thermostats -->
          <div class="sensor-group-title">🌡️ Heating & Thermostats (Upstairs & Downstairs)</div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>Downstairs Thermostat (climate / sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-thermostat-downstairs" placeholder="climate.downstairs">
                <button type="button" class="btn-entity-browse" data-target="#cfg-thermostat-downstairs">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>Upstairs Thermostat (climate / sensor)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-thermostat-upstairs" placeholder="climate.upstairs">
                <button type="button" class="btn-entity-browse" data-target="#cfg-thermostat-upstairs">📋 Select</button>
              </div>
            </div>
          </div>

          <!-- Room Lights -->
          <div class="sensor-group-title">💡 Room Lights (11 Interior Rooms)</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: -6px;">
            Select light/switch entities for each room. When turned ON, the room glows in 3D!
          </div>
          <div class="sensor-grid-2">
            <div class="sensor-row">
              <label>🛋️ Living Room / Lounge</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-lounge" placeholder="light.living_room">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-lounge">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🍳 Kitchen</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-kitchen" placeholder="light.kitchen">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-kitchen">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🍽️ Dining Area</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-dining" placeholder="light.dining_room">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-dining">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🚪 Entrance Hall & Stairs</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-hallway" placeholder="light.hallway">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-hallway">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🚽 Downstairs WC / Cloakroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-wc" placeholder="light.downstairs_wc">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-wc">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🛏️ Master Bedroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-master" placeholder="light.master_bedroom">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-master">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🚿 Master En-Suite</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-ensuite" placeholder="light.ensuite">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-ensuite">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🛏️ Bedroom 2 (Guestroom)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bedroom2" placeholder="light.bedroom_2">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bedroom2">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🧸 Bedroom 3 (Nursery / Office)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bedroom3" placeholder="light.bedroom_3">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bedroom3">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🛁 Family Bathroom</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-bathroom" placeholder="light.family_bathroom">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-bathroom">📋 Select</button>
              </div>
            </div>
            <div class="sensor-row">
              <label>🪜 Upstairs Landing</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="cfg-light-landing" placeholder="light.landing">
                <button type="button" class="btn-entity-browse" data-target="#cfg-light-landing">📋 Select</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-action btn-detect" id="btn-detect-sensors">🔍 Auto-Detect Sensors</button>
          <button class="btn-action btn-save" id="btn-save-sensors">💾 Save & Apply</button>
        </div>
      </div>

      <!-- Interactive Entity Picker Modal Dialog (Open a window and select from a list) -->
      <div class="entity-picker-overlay" id="entity-picker-dialog">
        <div class="entity-picker-card">
          <div class="entity-picker-header">
            <div class="entity-picker-title">
              <span>📋</span>
              <span id="picker-dialog-title">Select Home Assistant Entity</span>
            </div>
            <button class="drawer-close" id="picker-dialog-close">&times;</button>
          </div>

          <div class="entity-filter-chips" id="picker-filter-chips">
            <button class="filter-chip active" data-filter="all">All</button>
            <button class="filter-chip" data-filter="light">💡 Lights</button>
            <button class="filter-chip" data-filter="switch">🔌 Switches</button>
            <button class="filter-chip" data-filter="sensor">📊 Sensors</button>
            <button class="filter-chip" data-filter="climate">🌡️ Climate</button>
            <button class="filter-chip" data-filter="media_player">📺 Media</button>
          </div>

          <div class="entity-search-wrap">
            <input type="text" class="entity-search-input" id="picker-search-input" placeholder="🔍 Search entity ID or friendly name...">
          </div>

          <div class="entity-list-container" id="picker-entity-list">
            <!-- Dynamic entities list populated on demand -->
          </div>
        </div>
      </div>

      <!-- Interactive 3D Light Customizer Modal Dialog (Add, Delete, Set & Move in 3D) -->
      <div class="light-customizer-overlay" id="light-customizer-dialog">
        <div class="light-customizer-card">
          <div class="entity-picker-header">
            <div class="entity-picker-title">
              <span>💡</span>
              <span id="light-customizer-title">Configure & Position Light</span>
            </div>
            <button class="drawer-close" id="light-customizer-close">&times;</button>
          </div>

          <div class="modal-body" style="padding:14px 18px; overflow-y:auto; max-height:calc(86vh - 120px);">
            <!-- Light Name -->
            <div class="sensor-row">
              <label>Light Label / Friendly Name</label>
              <input type="text" id="custom-light-name" placeholder="e.g. Living Room Spotlight">
            </div>

            <!-- HA Entity -->
            <div class="sensor-row">
              <label>Mapped Home Assistant Entity (light or switch)</label>
              <div class="sensor-input-wrap">
                <input type="text" list="ha-entities-datalist" id="custom-light-entity" placeholder="e.g. light.living_room">
                <button type="button" class="btn-entity-browse" data-target="#custom-light-entity">📋 Select</button>
              </div>
            </div>

            <!-- Floor Location -->
            <div class="sensor-row">
              <label>Floor Level</label>
              <div class="floor-select-group">
                <button type="button" class="floor-opt-btn active" data-floor="ground" id="floor-btn-ground">🛋️ Downstairs (Ground)</button>
                <button type="button" class="floor-opt-btn" data-floor="first" id="floor-btn-first">🛏️ Upstairs (First)</button>
              </div>
            </div>

            <!-- 3D Positioning Controls -->
            <div class="coord-section">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:#38bdf8;">📍 Move Position in 3D (Meters)</span>
                <button type="button" class="btn-pick-3d" id="btn-pick-3d-point">📍 Click House to Place</button>
              </div>

              <!-- X: Left / Right -->
              <div class="coord-row">
                <span class="coord-label">X (Left/Right)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="x" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-x-slider" min="-1.5" max="6.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-x-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="x" data-dir="1">&plus;</button>
                </div>
              </div>

              <!-- Y: Height -->
              <div class="coord-row">
                <span class="coord-label">Y (Height)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="y" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-y-slider" min="0.1" max="5.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-y-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="y" data-dir="1">&plus;</button>
                </div>
              </div>

              <!-- Quick Height Presets -->
              <div style="display:flex; gap:6px; margin-top:-4px;">
                <button type="button" class="btn-light-sub" id="btn-preset-ceil-down">Ceiling Down (2.15m)</button>
                <button type="button" class="btn-light-sub" id="btn-preset-ceil-up">Ceiling Up (4.55m)</button>
                <button type="button" class="btn-light-sub" id="btn-preset-lamp">Floor Lamp (1.55m)</button>
              </div>

              <!-- Z: Front / Back -->
              <div class="coord-row">
                <span class="coord-label">Z (Front/Back)</span>
                <div class="coord-stepper">
                  <button type="button" class="coord-step-btn" data-axis="z" data-dir="-1">&minus;</button>
                  <input type="range" class="coord-slider" id="coord-z-slider" min="-9.0" max="1.5" step="0.05">
                  <input type="number" class="coord-val-input" id="coord-z-val" step="0.05">
                  <button type="button" class="coord-step-btn" data-axis="z" data-dir="1">&plus;</button>
                </div>
              </div>
            </div>

            <!-- Light Color Swatches -->
            <div class="sensor-row">
              <label>Light Color Tone</label>
              <div class="color-preset-chips">
                <button type="button" class="color-chip-btn" style="background:#ffe299" data-color="#ffe299" title="Warm Candle White"></button>
                <button type="button" class="color-chip-btn" style="background:#fff0d6" data-color="#fff0d6" title="Soft White"></button>
                <button type="button" class="color-chip-btn" style="background:#ffffff" data-color="#ffffff" title="Pure Daylight"></button>
                <button type="button" class="color-chip-btn" style="background:#f59e0b" data-color="#f59e0b" title="Amber Gold"></button>
                <button type="button" class="color-chip-btn" style="background:#38bdf8" data-color="#38bdf8" title="Sky Cyan"></button>
                <button type="button" class="color-chip-btn" style="background:#ec4899" data-color="#ec4899" title="Pink Accent"></button>
                <input type="color" id="custom-light-color-input" style="width:28px; height:24px; border:none; background:none; cursor:pointer;" title="Custom Color">
              </div>
            </div>
          </div>

          <div class="modal-footer" style="padding:12px 18px;">
            <button class="btn-action" style="background:rgba(239,68,68,0.2); color:#f87171; border:1px solid rgba(239,68,68,0.4);" id="btn-custom-light-delete">🗑️ Delete Light</button>
            <button class="btn-action btn-save" id="btn-custom-light-save">💾 Save Light</button>
          </div>
        </div>
      </div>

      <!-- HTML5 Datalist for Direct Typing Auto-Completion -->
      <datalist id="ha-entities-datalist"></datalist>

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
        this.activePreset = preset;
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

    // Browse / Select Entity buttons (Opens searchable Entity Picker modal)
    const browseBtns = this.el.querySelectorAll('.btn-entity-browse');
    browseBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.getAttribute('data-target');
        this.openEntityPicker(targetId);
      });
    });

    // Entity Picker Dialog close & backdrop click
    const pickerDialog = this.el.querySelector('#entity-picker-dialog');
    const pickerClose = this.el.querySelector('#picker-dialog-close');
    if (pickerClose) {
      pickerClose.addEventListener('click', () => {
        pickerDialog.classList.remove('open');
      });
    }

    if (pickerDialog) {
      pickerDialog.addEventListener('click', (e) => {
        if (e.target === pickerDialog) {
          pickerDialog.classList.remove('open');
        }
      });
    }

    // Filter chips inside Entity Picker
    const filterChips = this.el.querySelectorAll('.filter-chip');
    filterChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        filterChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentPickerFilter = chip.getAttribute('data-filter') || 'all';
        const searchVal = this.el.querySelector('#picker-search-input')?.value || '';
        this.renderPickerEntityList(searchVal, this.currentPickerFilter);
      });
    });

    // Live search input in Entity Picker
    const searchInput = this.el.querySelector('#picker-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.renderPickerEntityList(e.target.value, this.currentPickerFilter || 'all');
      });
    }

    // Light Customizer Dialog close & backdrop click
    const lightCustDialog = this.el.querySelector('#light-customizer-dialog');
    const lightCustClose = this.el.querySelector('#light-customizer-close');
    if (lightCustClose) {
      lightCustClose.addEventListener('click', () => {
        lightCustDialog.classList.remove('open');
        this.onBeaconClear();
        this.onDisableClickToPlace();
        this.el.querySelector('#btn-pick-3d-point')?.classList.remove('active');
      });
    }

    if (lightCustDialog) {
      lightCustDialog.addEventListener('click', (e) => {
        if (e.target === lightCustDialog) {
          lightCustDialog.classList.remove('open');
          this.onBeaconClear();
          this.onDisableClickToPlace();
          this.el.querySelector('#btn-pick-3d-point')?.classList.remove('active');
        }
      });
    }

    // Floor Selector buttons
    const floorGround = this.el.querySelector('#floor-btn-ground');
    const floorFirst = this.el.querySelector('#floor-btn-first');
    if (floorGround && floorFirst) {
      floorGround.addEventListener('click', () => {
        floorGround.classList.add('active');
        floorFirst.classList.remove('active');
        if (this.editingLight) this.editingLight.floor = 'ground';
      });
      floorFirst.addEventListener('click', () => {
        floorFirst.classList.add('active');
        floorGround.classList.remove('active');
        if (this.editingLight) this.editingLight.floor = 'first';
      });
    }

    // Coordinate Steppers & Sliders
    ['x', 'y', 'z'].forEach((axis) => {
      const slider = this.el.querySelector(`#coord-${axis}-slider`);
      const numInput = this.el.querySelector(`#coord-${axis}-val`);
      if (slider) {
        slider.addEventListener('input', (e) => this.onCoordChange(axis, e.target.value));
      }
      if (numInput) {
        numInput.addEventListener('change', (e) => this.onCoordChange(axis, e.target.value));
      }
    });

    // Step +/- buttons
    const stepBtns = this.el.querySelectorAll('.coord-step-btn');
    stepBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const axis = btn.getAttribute('data-axis');
        const dir = parseFloat(btn.getAttribute('data-dir') || '1');
        if (this.editingLight) {
          const current = this.editingLight.pos[axis] || 0;
          const next = parseFloat((current + dir * 0.1).toFixed(2));
          this.onCoordChange(axis, next);
        }
      });
    });

    // Preset height buttons
    const btnCeilDown = this.el.querySelector('#btn-preset-ceil-down');
    const btnCeilUp = this.el.querySelector('#btn-preset-ceil-up');
    const btnFloorLamp = this.el.querySelector('#btn-preset-lamp');
    if (btnCeilDown) btnCeilDown.addEventListener('click', () => this.onCoordChange('y', 2.15));
    if (btnCeilUp) btnCeilUp.addEventListener('click', () => this.onCoordChange('y', 4.55));
    if (btnFloorLamp) btnFloorLamp.addEventListener('click', () => this.onCoordChange('y', 1.55));

    // Click on 3D House to Place button
    const btnPick3D = this.el.querySelector('#btn-pick-3d-point');
    if (btnPick3D) {
      btnPick3D.addEventListener('click', () => {
        btnPick3D.classList.toggle('active');
        if (btnPick3D.classList.contains('active')) {
          this.onEnableClickToPlace((coords) => {
            this.onCoordChange('x', coords.x);
            this.onCoordChange('y', coords.y);
            this.onCoordChange('z', coords.z);
          });
        } else {
          this.onDisableClickToPlace();
        }
      });
    }

    // Color chips
    const colorChips = this.el.querySelectorAll('.color-chip-btn');
    const colorInput = this.el.querySelector('#custom-light-color-input');
    colorChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const colStr = chip.getAttribute('data-color');
        const colHex = parseInt(colStr.replace('#', '0x'), 16);
        if (this.editingLight) {
          this.editingLight.defaultColor = colHex;
        }
        colorChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        if (colorInput) colorInput.value = colStr;
      });
    });
    if (colorInput) {
      colorInput.addEventListener('input', (e) => {
        const colHex = parseInt(e.target.value.replace('#', '0x'), 16);
        if (this.editingLight) {
          this.editingLight.defaultColor = colHex;
        }
        colorChips.forEach((c) => c.classList.remove('active'));
      });
    }

    // Save & Delete buttons
    const btnSaveLight = this.el.querySelector('#btn-custom-light-save');
    const btnDeleteLight = this.el.querySelector('#btn-custom-light-delete');
    if (btnSaveLight) {
      btnSaveLight.addEventListener('click', () => this.saveEditingLight());
    }
    if (btnDeleteLight) {
      btnDeleteLight.addEventListener('click', () => {
        if (this.editingLight?.id) this.deleteLight(this.editingLight.id);
      });
    }

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
    setVal('#cfg-zappi-status', cfg.myenergi_status);
    setVal('#cfg-zappi-energy', cfg.myenergi_energy);
    setVal('#cfg-peugeot-battery', cfg.peugeot_battery);
    setVal('#cfg-peugeot-range', cfg.peugeot_range);

    // Thermostats
    setVal('#cfg-thermostat-downstairs', cfg.thermostat_downstairs);
    setVal('#cfg-thermostat-upstairs', cfg.thermostat_upstairs);

    // Appliances & Living Room Devices
    setVal('#cfg-sensor-fridge', cfg.sensor_fridge);
    setVal('#cfg-sensor-washer', cfg.sensor_washer);
    setVal('#cfg-sensor-tv', cfg.sensor_tv);
    setVal('#cfg-light-living-lamp', cfg.light_living_lamp);

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
      myenergi_status: getVal('#cfg-zappi-status'),
      myenergi_energy: getVal('#cfg-zappi-energy'),
      peugeot_battery: getVal('#cfg-peugeot-battery'),
      peugeot_range: getVal('#cfg-peugeot-range'),

      // Thermostats
      thermostat_downstairs: getVal('#cfg-thermostat-downstairs'),
      thermostat_upstairs: getVal('#cfg-thermostat-upstairs'),

      // Appliances & Living Room Devices
      sensor_fridge: getVal('#cfg-sensor-fridge'),
      sensor_washer: getVal('#cfg-sensor-washer'),
      sensor_tv: getVal('#cfg-sensor-tv'),
      light_living_lamp: getVal('#cfg-light-living-lamp'),

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

  openEntityPicker(targetInputId) {
    this.activePickerTarget = targetInputId;
    const picker = this.el.querySelector('#entity-picker-dialog');
    if (!picker) return;

    const targetEl = this.el.querySelector(targetInputId);
    const titleEl = this.el.querySelector('#picker-dialog-title');
    if (titleEl && targetEl) {
      const label = targetEl.closest('.sensor-row')?.querySelector('label')?.innerText || 'Select Entity';
      titleEl.innerText = label;
    }

    // Auto-select filter domain if recognizable
    let defaultFilter = 'all';
    if (targetInputId.includes('light')) defaultFilter = 'light';
    else if (targetInputId.includes('thermostat')) defaultFilter = 'climate';
    else if (targetInputId.includes('tv')) defaultFilter = 'media_player';
    else if (targetInputId.includes('power') || targetInputId.includes('energy') || targetInputId.includes('fridge')) defaultFilter = 'sensor';

    this.currentPickerFilter = defaultFilter;
    const filterChips = this.el.querySelectorAll('.filter-chip');
    filterChips.forEach((c) => c.classList.toggle('active', c.getAttribute('data-filter') === defaultFilter));

    picker.classList.add('open');
    const searchInput = this.el.querySelector('#picker-search-input');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 60);
    }
    this.renderPickerEntityList('', defaultFilter);
  }

  renderPickerEntityList(searchTerm = '', filterDomain = 'all') {
    const listEl = this.el.querySelector('#picker-entity-list');
    if (!listEl) return;

    let entities = this.availableEntities || [];
    if (!entities.length) {
      entities = [
        'sensor.solax_pv_power_total',
        'sensor.solax_today_s_solar_energy',
        'sensor.solax_feed_in_power',
        'sensor.octopus_home_mini_current_electricity_power',
        'sensor.octopus_energy_electricity_current_rate',
        'sensor.octopus_energy_electricity_current_month_cost',
        'sensor.boiler_status',
        'sensor.octopus_home_mini_gas_30min',
        'sensor.myenergi_zappi_power',
        'sensor.e2008_battery_level',
        'sensor.e2008_battery_range',
        'climate.downstairs',
        'climate.upstairs',
        'sensor.fridge_power',
        'media_player.living_room_tv',
        'light.living_room_lamp',
        'light.living_room',
        'light.kitchen',
        'light.dining_room',
        'light.hallway',
        'light.downstairs_wc',
        'light.master_bedroom',
        'light.ensuite',
        'light.bedroom_2',
        'light.bedroom_3',
        'light.family_bathroom',
        'light.landing'
      ];
    }

    const query = searchTerm.toLowerCase().trim();
    const filtered = entities.filter((item) => {
      const id = (typeof item === 'string' ? item : item.entity_id || '').toLowerCase();
      const domain = id.split('.')[0] || '';
      if (filterDomain !== 'all') {
        if (filterDomain === 'media_player') {
          if (domain !== 'media_player' && !id.includes('tv') && domain !== 'switch') return false;
        } else if (filterDomain === 'climate') {
          if (domain !== 'climate' && !id.includes('thermostat') && !id.includes('temp')) return false;
        } else if (domain !== filterDomain) {
          return false;
        }
      }
      if (query && !id.includes(query)) return false;
      return true;
    });

    if (!filtered.length) {
      listEl.innerHTML = `
        <div style="padding: 24px 12px; text-align: center; color: #94a3b8; font-size: 13px;">
          No matching entities found. You can type any entity ID directly into the input field!
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map((item) => {
      const id = typeof item === 'string' ? item : item.entity_id;
      const domain = id.split('.')[0] || 'sensor';
      const icon = domain === 'light' ? '💡' : domain === 'climate' ? '🌡️' : domain === 'switch' ? '🔌' : domain === 'media_player' ? '📺' : '📊';
      return `
        <div class="entity-item-row" data-entity-id="${id}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span>${icon}</span>
            <span class="entity-item-id">${id}</span>
          </div>
          <span class="entity-item-state">${domain}</span>
        </div>
      `;
    }).join('');

    const rows = listEl.querySelectorAll('.entity-item-row');
    rows.forEach((row) => {
      row.addEventListener('click', () => {
        const entId = row.getAttribute('data-entity-id');
        this.selectEntityForTarget(entId);
      });
    });
  }

  selectEntityForTarget(entityId) {
    if (this.activePickerTarget) {
      const el = this.el.querySelector(this.activePickerTarget);
      if (el) {
        el.value = entityId;
        el.focus();
        el.style.borderColor = '#10b981';
        el.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.6)';
        setTimeout(() => {
          el.style.borderColor = '';
          el.style.boxShadow = '';
        }, 1200);
      }
    }
    const picker = this.el.querySelector('#entity-picker-dialog');
    if (picker) picker.classList.remove('open');
  }

  setAvailableEntities(entities) {
    this.availableEntities = entities || [];
    this.updateDatalist();
  }

  updateDatalist() {
    let dl = this.el.querySelector('#ha-entities-datalist');
    if (!dl) return;
    const ids = this.availableEntities.map((e) => (typeof e === 'string' ? e : e.entity_id || '')).filter(Boolean);
    dl.innerHTML = ids.map((id) => `<option value="${id}"></option>`).join('');
  }

  setCustomLights(lights) {
    this.customLights = lights || [];
    if (this.activeTab === 'lights') {
      this.renderDrawerContent();
    }
  }

  openLightEditor(lightId = null) {
    const dialog = this.el.querySelector('#light-customizer-dialog');
    if (!dialog) return;

    if (!lightId) {
      // Adding a new light
      const isDownstairs = this.activePreset === 'downstairs';
      const defaultY = isDownstairs ? 2.15 : 4.55;
      const defaultFloor = isDownstairs ? 'ground' : 'first';
      this.editingLight = {
        id: `light_custom_${Date.now()}`,
        name: `New Light ${this.customLights.length + 1}`,
        floor: defaultFloor,
        pos: { x: 2.20, y: defaultY, z: -3.50 },
        range: 6.5,
        maxIntensity: 4.0,
        defaultColor: 0xffe299,
        entity_id: '',
        isNew: true
      };
      this.el.querySelector('#light-customizer-title').innerText = '➕ Add New 3D Light';
      this.el.querySelector('#btn-custom-light-delete').style.display = 'none';
    } else {
      const existing = this.customLights.find((l) => l.id === lightId);
      if (!existing) return;
      this.editingLight = JSON.parse(JSON.stringify(existing));
      this.editingLight.isNew = false;
      this.el.querySelector('#light-customizer-title').innerText = `💡 Configure & Move: ${this.editingLight.name}`;
      this.el.querySelector('#btn-custom-light-delete').style.display = 'block';
    }

    // Populate inputs
    this.el.querySelector('#custom-light-name').value = this.editingLight.name || '';
    const currentEntity = this.editingLight.entity_id || this.currentSensorConfig?.[`light_${this.editingLight.id}`] || (this.editingLight.id === 'living_lamp' ? this.currentSensorConfig?.light_living_lamp : '') || '';
    this.el.querySelector('#custom-light-entity').value = currentEntity;

    // Floor buttons
    const floor = this.editingLight.floor || (this.editingLight.pos.y > 3.0 ? 'first' : 'ground');
    this.el.querySelector('#floor-btn-ground').classList.toggle('active', floor === 'ground');
    this.el.querySelector('#floor-btn-first').classList.toggle('active', floor === 'first');

    // Coordinates
    this.updateCoordInputs(this.editingLight.pos.x, this.editingLight.pos.y, this.editingLight.pos.z);

    // Show 3D beacon marker in the house
    this.onBeaconFocus(this.editingLight.id, this.editingLight.pos);

    dialog.classList.add('open');
  }

  updateCoordInputs(x, y, z) {
    const setVal = (id, val) => {
      const el = this.el.querySelector(id);
      if (el) el.value = val;
    };
    setVal('#coord-x-slider', x);
    setVal('#coord-x-val', x);
    setVal('#coord-y-slider', y);
    setVal('#coord-y-val', y);
    setVal('#coord-z-slider', z);
    setVal('#coord-z-val', z);
  }

  onCoordChange(axis, val) {
    if (!this.editingLight) return;
    const num = parseFloat(val);
    if (isNaN(num)) return;
    this.editingLight.pos[axis] = num;
    this.updateCoordInputs(this.editingLight.pos.x, this.editingLight.pos.y, this.editingLight.pos.z);
    this.onUpdateLightPosition(this.editingLight.id, this.editingLight.pos.x, this.editingLight.pos.y, this.editingLight.pos.z);
    this.onBeaconFocus(this.editingLight.id, this.editingLight.pos);
  }

  saveEditingLight() {
    if (!this.editingLight) return;
    this.editingLight.name = this.el.querySelector('#custom-light-name')?.value?.trim() || 'Custom Light';
    this.editingLight.entity_id = this.el.querySelector('#custom-light-entity')?.value?.trim() || '';

    const isFirst = this.el.querySelector('#floor-btn-first')?.classList.contains('active');
    this.editingLight.floor = isFirst ? 'first' : 'ground';

    if (this.editingLight.isNew) {
      delete this.editingLight.isNew;
      this.customLights.push(this.editingLight);
    } else {
      const idx = this.customLights.findIndex((l) => l.id === this.editingLight.id);
      if (idx !== -1) {
        this.customLights[idx] = this.editingLight;
      } else {
        this.customLights.push(this.editingLight);
      }
    }

    this.onSaveCustomLights(this.customLights);
    this.onBeaconClear();
    this.onDisableClickToPlace();
    this.el.querySelector('#btn-pick-3d-point')?.classList.remove('active');
    this.el.querySelector('#light-customizer-dialog')?.classList.remove('open');
    this.renderDrawerContent();
  }

  deleteLight(lightId) {
    if (!confirm('Are you sure you want to delete this light from the 3D model?')) return;
    this.customLights = this.customLights.filter((l) => l.id !== lightId);
    this.onSaveCustomLights(this.customLights);
    this.onBeaconClear();
    this.onDisableClickToPlace();
    this.el.querySelector('#btn-pick-3d-point')?.classList.remove('active');
    this.el.querySelector('#light-customizer-dialog')?.classList.remove('open');
    this.renderDrawerContent();
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
    setIfFound('#cfg-zappi-status', 'zappi_status', 'zappi_plug_status', 'myenergi_status', 'charger_status');
    setIfFound('#cfg-zappi-energy', 'charge_added_session', 'zappi_energy', 'zappi_today');
    setIfFound('#cfg-peugeot-battery', 'e2008_battery', 'peugeot_battery', 'battery_level', 'soc');
    setIfFound('#cfg-peugeot-range', 'e2008_range', 'peugeot_range', 'range');

    // Thermostats auto-detection
    setIfFound('#cfg-thermostat-downstairs', 'climate.downstairs', 'climate.ground_floor', 'climate.hallway', 'climate.living_room', 'downstairs_temperature');
    setIfFound('#cfg-thermostat-upstairs', 'climate.upstairs', 'climate.first_floor', 'climate.landing', 'climate.master_bedroom', 'upstairs_temperature');

    // Appliances auto-detection
    setIfFound('#cfg-sensor-fridge', 'fridge', 'refrigerator', 'freezer', 'fridge_power', 'kitchen_fridge');
    setIfFound('#cfg-sensor-washer', 'washer_power', 'washing_machine_power', 'washing_machine', 'washer', 'laundry_power', 'laundry');
    setIfFound('#cfg-sensor-tv', 'living_room_tv', 'lounge_tv', 'media_player.tv', 'media_player.living_room', 'switch.tv');
    setIfFound('#cfg-light-living-lamp', 'living_room_lamp', 'corner_lamp', 'living_lamp', 'floor_lamp', 'standard_lamp', 'lamp');

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
          <div class="stat-card">
            <div class="stat-label">KITCHEN WASHING MACHINE</div>
            <div class="stat-val" style="color:${data.appliances?.washer?.is_active ? '#00f59b' : '#94a3b8'};">
              ${data.appliances?.washer?.power_w || 0} <span class="stat-unit">W</span>
            </div>
            <div class="stat-subtext">Status: ${data.appliances?.washer?.state || 'Standby'}</div>
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
            <div class="stat-val color-gas">${isActive ? '🔥 Heating' : 'Standby'}</div>
            <div class="stat-subtext">Status: ${isActive ? 'Heating (Firing)' : 'Standby (Idle)'} &bull; Supply: External LPG Bulk Tank</div>
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
      const isCharging = Boolean(ev.is_charging && evKw > 0.04);
      const isConnected = ev.is_connected !== false;
      const statusText = ev.status_text || (isCharging ? `Charging @ ${evKw.toFixed(1)} kW` : (isConnected ? 'Connected (Idle)' : 'Disconnected'));

      content.innerHTML = `
        <div class="stat-grid">
          <div class="stat-card stat-card-full">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <div>
                <div class="stat-label">⚡ myenergi ZAPPI EV CHARGER</div>
                <div class="stat-val color-ev" style="font-size:24px;">
                  ${isCharging ? `${evKw.toFixed(2)} <span class="stat-unit">kW</span>` : (isConnected ? 'Connected' : 'Disconnected')}
                  <span style="font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 6px; background: rgba(255,255,255,0.08); color: ${isCharging ? '#00f59b' : (isConnected ? '#38bdf8' : '#94a3b8')}; vertical-align: middle; margin-left: 6px;">
                    ${isCharging ? '⚡ CHARGING' : (isConnected ? '🔌 CONNECTED' : 'DISCONNECTED')}
                  </span>
                </div>
                <div class="stat-subtext" style="margin-top: 4px;">
                  Connection: <strong style="color:${isConnected ? (isCharging ? '#00f59b' : '#38bdf8') : '#94a3b8'};">${isConnected ? 'Plugged In & Connected' : 'Disconnected'}</strong> &bull;
                  Charging Rate: <strong style="color:${isCharging ? '#00f59b' : '#94a3b8'};">${isCharging ? `${evKw.toFixed(2)} kW` : '0.00 kW (Idle)'}</strong>
                </div>
              </div>
              <button class="light-toggle-btn" style="padding:6px 12px;" id="btn-focus-charger">⚡ View Charger</button>
            </div>
          </div>

          <div class="stat-card stat-card-full">
            <div class="stat-label">PEUGEOT e-2008 BATTERY</div>
            <div class="stat-val color-ev">${soc}% <span class="stat-unit">(${Number(ev.range_miles || 0)} miles)</span></div>
            <div class="battery-bar-container">
              <div class="battery-bar-fill" style="width: ${soc}%"></div>
            </div>
            <div class="stat-subtext" style="margin-top: 6px;">Charging Cable: ${isCharging ? '⚡ Flowing to Car (5 Pulses)' : (isConnected ? '🔌 Plugged In (Idle)' : 'Disconnected')}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">CHARGING SPEED</div>
            <div class="stat-val">${evKw.toFixed(2)} <span class="stat-unit">kW</span></div>
            <div class="stat-subtext">Mode: ${ev.charger_mode || 'Eco+'}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">SESSION ENERGY ADDED</div>
            <div class="stat-val">${Number(ev.energy_added_kwh || 0).toFixed(1)} <span class="stat-unit">kWh</span></div>
            <div class="stat-subtext">Source: Solax PV & Grid</div>
          </div>
        </div>
      `;

      const btnFocus = content.querySelector('#btn-focus-charger');
      if (btnFocus) {
        btnFocus.addEventListener('click', () => this.onPresetClick('charger'));
      }
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
              ${boilerFiring ? '🔥 Heating' : 'Standby'}
            </div>
            <div class="stat-subtext">
              Status: ${boilerFiring ? 'Heating (Firing)' : 'Standby'} &bull; Supply: LPG Bulk Tank
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
      const lights = this.customLights || [];

      let cardsHtml = '';
      for (const lt of lights) {
        const item = roomLights[lt.id] || (lt.id === 'living_lamp' ? data.appliances?.living_lamp : {}) || {};
        const isOn = Boolean(item.is_on || item.state === 'on');
        const bri = item.brightness !== undefined ? Math.round((item.brightness / 255) * 100) : (isOn ? 100 : 0);
        const icon = lt.isFloorLamp || lt.name?.toLowerCase().includes('lamp') ? '🛋️' : '💡';
        const floorText = lt.floor === 'first' || (lt.pos && lt.pos.y > 3.0) ? '🛏️ Upstairs' : '🛋️ Downstairs';
        const posText = lt.pos ? `(${lt.pos.x.toFixed(1)}, ${lt.pos.y.toFixed(1)}, ${lt.pos.z.toFixed(1)})` : '';
        const mappedEntity = lt.entity_id || this.currentSensorConfig?.[`light_${lt.id}`] || (lt.id === 'living_lamp' ? this.currentSensorConfig?.light_living_lamp : '') || '';

        cardsHtml += `
          <div class="light-card ${isOn ? 'active' : ''}">
            <div class="light-card-top">
              <span class="light-name">${icon} ${lt.name}</span>
              <span class="light-status-pill ${isOn ? 'on' : 'off'}">${isOn ? '💡 ON' : 'OFF'}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#94a3b8;">
              <span>${floorText}</span>
              <span style="font-size:9px;">${posText}</span>
            </div>
            <div style="font-size:10px; color:#94a3b8; display:flex; justify-content:space-between; align-items:center;">
              <span>${isOn ? `Brightness: ${bri}%` : 'Light is off'}</span>
              <span style="font-size:9px; color:#64748b; font-family:monospace; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${mappedEntity || 'Manual Toggle'}">
                ${mappedEntity ? `🔗 ${mappedEntity}` : '⚪ Manual'}
              </span>
            </div>
            <button class="light-toggle-btn" data-entity="${mappedEntity}" data-light-id="${lt.id}">
              ${isOn ? 'Turn Off' : 'Turn On'}
            </button>
            <div class="light-card-footer">
              <button class="btn-light-sub btn-edit-light-coords" data-light-id="${lt.id}">
                ⚙️ Move / Edit
              </button>
              <button class="btn-light-del btn-delete-light-item" data-light-id="${lt.id}" title="Delete light">
                🗑️
              </button>
            </div>
          </div>
        `;
      }

      content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px; flex-wrap:wrap;">
          <div>
            <div style="font-weight:700; font-size:13px; color:#f8fafc;">💡 Interactive 3D Lights (${lights.length})</div>
            <div style="font-size:11px; color:#94a3b8;">Add, delete, move around in 3D, and link Home Assistant entities</div>
          </div>
          <button class="btn-action" id="btn-add-light-ui" style="background:#0284c7; color:#fff; display:flex; align-items:center; gap:6px; padding:6px 14px; border-radius:8px; font-weight:600; font-size:12px; cursor:pointer; border:none;">
            <span>➕</span>
            <span>Add Light</span>
          </button>
        </div>
        <div class="light-grid">
          ${cardsHtml}
        </div>
      `;

      // Toggle buttons
      const toggleBtns = content.querySelectorAll('.light-toggle-btn');
      toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const entId = btn.getAttribute('data-entity')?.trim();
          const lightId = btn.getAttribute('data-light-id');
          if (!lightId) return;

          let lightInfo = data.room_lights?.[lightId];
          if (lightId === 'living_lamp') {
            lightInfo = data.appliances?.living_lamp || lightInfo;
          }
          const currentOn = Boolean(lightInfo?.is_on || lightInfo?.state === 'on');
          const newIsOn = !currentOn;

          if (data.room_lights?.[lightId]) {
            data.room_lights[lightId].is_on = newIsOn;
            data.room_lights[lightId].brightness = newIsOn ? (data.room_lights[lightId].brightness || 255) : 0;
          }
          if (lightId === 'living_lamp' && data.appliances?.living_lamp) {
            data.appliances.living_lamp.is_on = newIsOn;
            data.appliances.living_lamp.brightness = newIsOn ? (data.appliances.living_lamp.brightness || 255) : 0;
          }

          if (entId) {
            this.onToggleLight(entId);
          }
          if (this.options.onToggleRoomLight) {
            this.options.onToggleRoomLight(lightId, newIsOn);
          }

          this.renderDrawerContent();
        });
      });

      // Add light button
      const btnAdd = content.querySelector('#btn-add-light-ui');
      if (btnAdd) {
        btnAdd.addEventListener('click', () => {
          this.openLightEditor(null);
        });
      }

      // Edit / Move light buttons
      const editBtns = content.querySelectorAll('.btn-edit-light-coords');
      editBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const lightId = btn.getAttribute('data-light-id');
          this.openLightEditor(lightId);
        });
      });

      // Delete light buttons
      const delBtns = content.querySelectorAll('.btn-delete-light-item');
      delBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const lightId = btn.getAttribute('data-light-id');
          this.deleteLight(lightId);
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
        badgeHtml = `<span>🔥 Boiler</span> <span class="color-gas">${data.octopus_gas?.is_active ? 'Heating' : 'Standby'}</span>`;
      } else if (spot.id === 'ev') {
        badgeHtml = `<span>🚗 Peugeot</span> <span class="color-ev">${data.ev?.battery_soc_pct || 68}%</span>`;
      } else if (spot.id === 'ev_charger') {
        const ev = data.ev || {};
        const isCharging = Boolean(ev.is_charging);
        const isConnected = ev.is_connected !== false;
        const evKw = Number(ev.charger_power_kw || 0);
        let rateText = 'Disconnected';
        if (isCharging) {
          rateText = `⚡ ${evKw.toFixed(1)} kW`;
        } else if (isConnected) {
          rateText = 'Connected';
        }
        badgeHtml = `<span>⚡ Zappi</span> <span style="color:${isCharging ? '#00f59b' : (isConnected ? '#38bdf8' : '#94a3b8')};font-weight:700;">${rateText}</span>`;
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
      } else if (spot.id === 'appliance_fridge') {
        const fridge = data.appliances?.fridge || {};
        const pVal = fridge.power_w !== undefined ? `${fridge.power_w} W` : '0 W';
        const isRun = Boolean(fridge.is_active);
        badgeHtml = `<span>🧊 Fridge</span> <span style="color:#38bdf8;font-weight:700;">${pVal}</span> <span style="font-size:9px;color:${isRun ? '#10b981' : '#64748b'}">●</span>`;
      } else if (spot.id === 'appliance_washer') {
        const washer = data.appliances?.washer || {};
        const isRun = Boolean(washer.is_active);
        const pVal = washer.power_w !== undefined ? `${washer.power_w} W` : (isRun ? 'Running' : '0 W');
        badgeHtml = `<span>🫧 Washer</span> <span style="color:${isRun ? '#00f59b' : '#94a3b8'};font-weight:700;">${pVal}</span> <span style="font-size:9px;color:${isRun ? '#10b981' : '#64748b'}">●</span>`;
      } else if (spot.id === 'appliance_tv') {
        const tv = data.appliances?.tv || {};
        const isTvOn = Boolean(tv.is_on);
        badgeHtml = `<span>📺 Living TV</span> <span style="color:${isTvOn ? '#60a5fa' : '#94a3b8'};font-weight:700;">${isTvOn ? '▶ Playing' : 'OFF'}</span> ${isTvOn ? '<button class="btn-tv-audio" style="margin-left:4px;padding:1px 5px;border-radius:4px;background:rgba(255,255,255,0.2);border:none;color:#fff;cursor:pointer;font-size:9px;">🔊 Sound</button>' : ''}`;
      }

      const badge = document.createElement('div');
      badge.className = 'hotspot-badge';
      badge.style.left = `${spot.x}px`;
      badge.style.top = `${spot.y}px`;
      badge.innerHTML = badgeHtml;

      badge.addEventListener('click', (e) => {
        if (spot.id === 'appliance_tv') {
          if (e.target.closest('.btn-tv-audio')) {
            e.stopPropagation();
            if (this.onToggleTvAudio) this.onToggleTvAudio();
            return;
          }
          const tv = data.appliances?.tv;
          if (tv?.entity_id) {
            this.onToggleLight(tv.entity_id);
          } else if (tv) {
            tv.is_on = !tv.is_on;
            this.updateData(data);
          }
          this.onPresetClick('downstairs');
          return;
        } else if (spot.id === 'appliance_fridge') {
          this.openDrawerTab('electric');
          this.onPresetClick('downstairs');
          return;
        } else if (spot.id === 'appliance_washer') {
          this.openDrawerTab('electric');
          this.onPresetClick('downstairs');
          return;
        } else if (spot.id === 'ev_charger') {
          this.openDrawerTab('ev');
          this.onPresetClick('charger');
          return;
        }

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
