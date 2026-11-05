import { SceneManager } from './scene-manager.js';
import { HUDOverlay } from './hud-overlay.js';
import { DEFAULT_ENERGY_DATA } from './mock-data.js';

/**
 * Helper to auto-figure if a value is in Watts vs Kilowatts.
 * Domestic rule: No home or appliance draws 800 kW (it's Watts -> / 1000).
 * 1.2 Watts is way too low, so numbers < 20 are kW.
 */
export function autoFigureKw(val, unit = '') {
  const num = parseFloat(val);
  if (isNaN(num)) return 0;

  const u = (unit || '').toLowerCase().trim();
  if (u === 'w' || u === 'va' || u === 'watt' || u === 'watts') {
    return num / 1000.0;
  }
  if (u === 'kw' || u === 'kva' || u === 'kilowatt' || u === 'kilowatts') {
    return num;
  }

  // Automatic heuristic:
  // Domestic power: values >= 20.0 are Watts (e.g. 50W, 100W, 800W, 2400W, 7200W).
  // Values < 20.0 are kW (e.g. 0.45 kW, 1.2 kW, 2.85 kW, 7.2 kW).
  if (Math.abs(num) >= 20.0) {
    return num / 1000.0;
  }
  return num;
}

export function autoFigureKwh(val, unit = '') {
  const num = parseFloat(val);
  if (isNaN(num)) return 0;

  const u = (unit || '').toLowerCase().trim();
  if (u === 'wh') return num / 1000.0;
  if (u === 'kwh') return num;
  if (u === 'mwh') return num * 1000.0;

  // Daily totals >= 1000 are Wh (e.g. 4500 Wh -> 4.5 kWh)
  if (Math.abs(num) >= 1000.0) {
    return num / 1000.0;
  }
  return num;
}

/**
 * HaEnergy3DCard
 * Custom Home Assistant Lovelace Card Component
 */
export class HaEnergy3DCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this.sceneManager = null;
    this.hud = null;
    this.energyData = JSON.parse(JSON.stringify(DEFAULT_ENERGY_DATA));

    try {
      const savedSensors = JSON.parse(localStorage.getItem('ha_energy_3d_custom_sensors') || '{}');
      this.customSensors = savedSensors;
    } catch (e) {
      this.customSensors = {};
    }
  }

  static getStubConfig() {
    return {
      type: 'custom:ha-energy-3d-card',
      title: 'Home Energy 3D',
      model_url: 'Taylor_Wimpey_Blair.glb',
      height: '560px',
      // Solax Solar
      solax_power: 'sensor.solax_pv_power_total',
      solax_today: 'sensor.solax_today_s_solar_energy',
      solax_week: 'sensor.solax_this_week_solar_energy',
      solax_month: 'sensor.solax_this_month_solar_energy',
      solax_year: 'sensor.solax_this_year_solar_energy',
      // Octopus Electric
      octopus_electric_power: 'sensor.octopus_home_mini_current_electricity_power',
      octopus_export_power: 'sensor.solax_feed_in_power',
      octopus_rate: 'sensor.octopus_energy_electricity_current_rate',
      octopus_monthly_spend: 'sensor.octopus_energy_electricity_current_month_cost',
      octopus_electric_30min: 'sensor.octopus_home_mini_electricity_30min',
      octopus_electric_day: 'sensor.octopus_energy_electricity_day',
      octopus_electric_week: 'sensor.octopus_energy_electricity_week',
      octopus_electric_month: 'sensor.octopus_energy_electricity_month',
      // Octopus Gas & Boiler
      boiler_status: 'sensor.boiler_status',
      octopus_gas_30min: 'sensor.octopus_home_mini_gas_30min',
      octopus_gas_day: 'sensor.octopus_energy_gas_day',
      octopus_gas_week: 'sensor.octopus_energy_gas_week',
      octopus_gas_month: 'sensor.octopus_energy_gas_month',
      octopus_gas_rate: 'sensor.octopus_energy_gas_current_rate',
      octopus_gas_spend: 'sensor.octopus_energy_gas_current_month_cost',
      // myenergi & Peugeot EV
      myenergi_power: 'sensor.myenergi_zappi_power',
      myenergi_energy: 'sensor.myenergi_zappi_charge_added_session',
      peugeot_battery: 'sensor.e2008_battery_level',
      peugeot_range: 'sensor.e2008_battery_range',
      // Thermostats (Upstairs & Downstairs)
      thermostat_downstairs: 'climate.downstairs',
      thermostat_upstairs: 'climate.upstairs',
      // Room Lights
      light_lounge: 'light.living_room',
      light_kitchen: 'light.kitchen',
      light_dining: 'light.dining_room',
      light_hallway: 'light.hallway',
      light_wc: 'light.downstairs_wc',
      light_master_bedroom: 'light.master_bedroom',
      light_ensuite: 'light.ensuite',
      light_bedroom2: 'light.bedroom_2',
      light_bedroom3: 'light.bedroom_3',
      light_bathroom: 'light.family_bathroom',
      light_landing: 'light.landing',
      light_exterior: 'light.front_porch'
    };
  }

  static async getConfigElement() {
    await import('./ha-card-editor.js');
    return document.createElement('ha-energy-3d-card-editor');
  }

  setConfig(config) {
    this._config = {
      model_url: 'Taylor_Wimpey_Blair.glb',
      height: '560px',
      night_mode: false,
      auto_rotate: false,
      ...config,
      ...this.customSensors
    };

    if (this.wrapper) {
      this.wrapper.style.height = this._config.height;
    }
  }

  connectedCallback() {
    if (this.sceneManager) return;
    this.render();
  }

  disconnectedCallback() {
    if (this.sceneManager) {
      this.sceneManager.destroy();
      this.sceneManager = null;
    }
  }

  render() {
    const cardHeight = this._config.height || '560px';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          background: #070b14;
          box-shadow: var(--ha-card-box-shadow, 0 8px 30px rgba(0, 0, 0, 0.4));
        }
        .container {
          position: relative;
          width: 100%;
          height: ${cardHeight};
          overflow: hidden;
        }
        .viewport {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="container" id="card-container">
        <div class="viewport" id="viewport"></div>
      </div>
    `;

    this.wrapper = this.shadowRoot.querySelector('#card-container');
    const viewport = this.shadowRoot.querySelector('#viewport');

    // Initialize 3D Scene
    this.sceneManager = new SceneManager(viewport, {
      modelUrl: this._config.model_url,
      nightMode: this._config.night_mode,
      autoRotate: this._config.auto_rotate
    });

    // Initialize HUD Overlay inside viewport container
    this.hud = new HUDOverlay(this.wrapper, {
      currentSensorConfig: this._config,
      onPresetClick: (preset) => this.sceneManager.setCameraPreset(preset),
      onToggleXray: (enable) => this.sceneManager.setXRayRoof(enable),
      onToggleNight: (enable) => this.sceneManager.setNightMode(enable),
      onToggleRotate: (enable) => {
        this.sceneManager.controls.autoRotate = enable;
      },
      onToggleLight: (entityId) => this.toggleLightEntity(entityId),
      onSaveSensors: (customSensors) => {
        this.customSensors = customSensors;
        this._config = { ...this._config, ...customSensors };
        this.updateStatesFromHass();
      }
    });

    // On each frame, update HUD with projected 3D hotspot coordinates
    this.sceneManager.onFrame = () => {
      const hotspots = this.sceneManager.getProjectedHotspots();
      this.hud.update(this.energyData, hotspots);
    };

    if (this._hass) {
      this.updateStatesFromHass();
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (this.hud && hass?.states) {
      this.hud.setAvailableEntities(Object.keys(hass.states));
    }
    this.updateStatesFromHass();
  }

  getPowerInKw(entityId, defaultKw = 0) {
    if (!this._hass || !entityId) return defaultKw;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return defaultKw;
    }
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return autoFigureKw(stateObj.state, unit);
  }

  getEnergyInKwh(entityId, defaultKwh = 0) {
    if (!this._hass || !entityId) return defaultKwh;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return defaultKwh;
    }
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return autoFigureKwh(stateObj.state, unit);
  }

  getEntityNumericValue(entityId, defaultVal = 0) {
    if (!this._hass || !entityId) return defaultVal;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return defaultVal;
    }
    const val = parseFloat(stateObj.state);
    return isNaN(val) ? defaultVal : val;
  }

  getEntityState(entityId, defaultVal = '') {
    if (!this._hass || !entityId) return defaultVal;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return defaultVal;
    }
    return stateObj.state;
  }

  updateStatesFromHass() {
    if (!this._hass) return;
    const cfg = { ...this._config, ...this.customSensors };

    // 1. Solax Solar (Auto-figures Watts vs kW)
    const solaxPower = this.getPowerInKw(cfg.solax_power, this.energyData.solar.power_kw);
    this.energyData.solar = {
      power_kw: solaxPower,
      today_kwh: this.getEnergyInKwh(cfg.solax_today, this.energyData.solar.today_kwh),
      week_kwh: this.getEnergyInKwh(cfg.solax_week, this.energyData.solar.week_kwh),
      month_kwh: this.getEnergyInKwh(cfg.solax_month, this.energyData.solar.month_kwh),
      year_kwh: this.getEnergyInKwh(cfg.solax_year, this.energyData.solar.year_kwh),
      status: solaxPower > 0.04 ? 'Generating' : 'Idle'
    };

    // 2. Octopus Electricity & Grid (Auto-figures Watts vs kW, Import vs Export)
    let electricKw = this.getPowerInKw(cfg.octopus_electric_power, this.energyData.octopus_electric.power_kw);
    const exportKw = this.getPowerInKw(cfg.octopus_export_power, 0);
    let isExporting = false;

    if (exportKw > 0.04) {
      electricKw = -exportKw;
      isExporting = true;
    } else if (electricKw < -0.04) {
      isExporting = true;
    }

    this.energyData.octopus_electric = {
      power_kw: electricKw,
      is_exporting: isExporting,
      current_rate_p: this.getEntityNumericValue(cfg.octopus_rate, this.energyData.octopus_electric.current_rate_p),
      monthly_spend_gbp: this.getEntityNumericValue(cfg.octopus_monthly_spend, this.energyData.octopus_electric.monthly_spend_gbp),
      reading_30min_kwh: this.getEnergyInKwh(cfg.octopus_electric_30min, this.energyData.octopus_electric.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(cfg.octopus_electric_day, this.energyData.octopus_electric.day_kwh),
      week_kwh: this.getEnergyInKwh(cfg.octopus_electric_week, this.energyData.octopus_electric.week_kwh),
      month_kwh: this.getEnergyInKwh(cfg.octopus_electric_month, this.energyData.octopus_electric.month_kwh)
    };

    // 3. Octopus Gas & Combi Boiler
    const boilerRawState = this.getEntityState(cfg.boiler_status, 'Central Heating');
    const isGasActive = boilerRawState === 'on' || boilerRawState === 'heat' || boilerRawState === 'Central Heating';

    this.energyData.octopus_gas = {
      is_active: isGasActive,
      power_kw: isGasActive ? 1.45 : 0.0,
      boiler_status: isGasActive ? 'Central Heating' : 'Standby',
      reading_30min_kwh: this.getEnergyInKwh(cfg.octopus_gas_30min, this.energyData.octopus_gas.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(cfg.octopus_gas_day, this.energyData.octopus_gas.day_kwh),
      week_kwh: this.getEnergyInKwh(cfg.octopus_gas_week, this.energyData.octopus_gas.week_kwh),
      month_kwh: this.getEnergyInKwh(cfg.octopus_gas_month, this.energyData.octopus_gas.month_kwh),
      current_rate_p: this.getEntityNumericValue(cfg.octopus_gas_rate, this.energyData.octopus_gas.current_rate_p),
      monthly_spend_gbp: this.getEntityNumericValue(cfg.octopus_gas_spend, this.energyData.octopus_gas.monthly_spend_gbp)
    };

    // 4. myenergi Zappi & Peugeot e-2008 (Auto-figures Watts vs kW, e.g. 7200W -> 7.2 kW)
    const evChargerKw = this.getPowerInKw(cfg.myenergi_power, this.energyData.ev.charger_power_kw);
    this.energyData.ev = {
      is_charging: evChargerKw > 0.04,
      is_plugged: true,
      charger_power_kw: evChargerKw,
      energy_added_kwh: this.getEnergyInKwh(cfg.myenergi_energy, this.energyData.ev.energy_added_kwh),
      charger_mode: evChargerKw > 3.0 ? 'Fast' : 'Eco+',
      battery_soc_pct: this.getEntityNumericValue(cfg.peugeot_battery, this.energyData.ev.battery_soc_pct),
      range_miles: this.getEntityNumericValue(cfg.peugeot_range, this.energyData.ev.range_miles)
    };

    // 5. Thermostats (Upstairs & Downstairs Heating Monitoring)
    this.energyData.thermostats = {
      downstairs: this.getThermostatState(cfg.thermostat_downstairs, this.energyData.thermostats?.downstairs),
      upstairs: this.getThermostatState(cfg.thermostat_upstairs, this.energyData.thermostats?.upstairs)
    };

    // 6. Room Lights (12 distinct rooms with live on/off & illumination)
    const roomKeys = [
      'lounge', 'kitchen', 'dining', 'hallway', 'wc',
      'master_bedroom', 'ensuite', 'bedroom2', 'bedroom3',
      'bathroom', 'landing', 'exterior'
    ];
    const lightsData = {};
    for (const room of roomKeys) {
      const entityKey = `light_${room}`;
      const entityId = cfg[entityKey] || cfg.room_lights?.[room];
      lightsData[room] = this.getLightState(entityId, this.energyData.room_lights?.[room]);
    }
    this.energyData.room_lights = lightsData;

    if (this.sceneManager) {
      this.sceneManager.updateEnergyData(this.energyData);
      this.sceneManager.updateRoomLights(lightsData);
    }
  }

  getThermostatState(entityId, defaultState = {}) {
    const res = {
      entity_id: entityId || defaultState?.entity_id || '',
      current_temp: defaultState?.current_temp ?? 20.0,
      target_temp: defaultState?.target_temp ?? 21.0,
      hvac_action: defaultState?.hvac_action || 'idle',
      is_heating: defaultState?.is_heating || false,
      state: defaultState?.state || 'heat'
    };
    if (!this._hass || !entityId) return res;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') return res;

    res.state = stateObj.state;
    const attr = stateObj.attributes || {};
    if (attr.current_temperature !== undefined) {
      res.current_temp = parseFloat(attr.current_temperature);
    } else {
      const num = parseFloat(stateObj.state);
      if (!isNaN(num)) res.current_temp = num;
    }

    if (attr.temperature !== undefined) {
      res.target_temp = parseFloat(attr.temperature);
    } else if (attr.target_temp_high !== undefined) {
      res.target_temp = parseFloat(attr.target_temp_high);
    }

    res.hvac_action = attr.hvac_action || (stateObj.state === 'heating' ? 'heating' : (stateObj.state === 'off' ? 'off' : 'idle'));
    res.is_heating = res.hvac_action === 'heating' || (res.target_temp !== null && res.current_temp < res.target_temp && stateObj.state !== 'off');
    return res;
  }

  getLightState(entityId, defaultState = {}) {
    const res = {
      entity_id: entityId || defaultState?.entity_id || '',
      is_on: defaultState?.is_on || false,
      brightness: defaultState?.brightness ?? (defaultState?.is_on ? 255 : 0),
      rgb_color: defaultState?.rgb_color || null
    };
    if (!this._hass || !entityId) return res;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') return res;

    res.is_on = stateObj.state === 'on';
    const attr = stateObj.attributes || {};
    res.brightness = attr.brightness !== undefined ? attr.brightness : (res.is_on ? 255 : 0);
    if (attr.rgb_color && Array.isArray(attr.rgb_color)) {
      res.rgb_color = attr.rgb_color;
    }
    return res;
  }

  toggleLightEntity(entityId) {
    if (!this._hass || !entityId) return;
    const domain = entityId.split('.')[0] || 'light';
    try {
      this._hass.callService(domain, 'toggle', { entity_id: entityId });
    } catch (e) {
      console.warn('Call service error:', e);
    }
  }

  getCardSize() {
    return 8;
  }
}

// Register Custom Element
customElements.define('ha-energy-3d-card', HaEnergy3DCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'ha-energy-3d-card',
  name: 'Home Energy 3D Card',
  description: 'Interactive 3D Energy Flow Card for Solax Solar, Octopus Energy, myenergi Zappi, and Peugeot EV',
  preview: true
});
