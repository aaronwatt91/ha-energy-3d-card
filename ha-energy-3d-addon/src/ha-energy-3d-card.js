import { SceneManager, DEFAULT_LIGHTS } from './scene-manager.js';
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
 * Helper to determine comfort status based on temperature:
 * < 16°C: Cold
 * 16°C to 22°C: Comfortable
 * > 22°C: Hot
 */
export function getComfortStatus(temp) {
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

    try {
      const savedLights = JSON.parse(localStorage.getItem('ha_energy_3d_custom_lights') || 'null');
      if (savedLights && Array.isArray(savedLights) && savedLights.length) {
        // Clean out legacy dummy entity IDs that prevent lights from working
        const dummyEntities = new Set([
          'light.living_room', 'light.kitchen', 'light.dining_room', 'light.downstairs_wc',
          'light.master_bedroom', 'light.ensuite', 'light.bedroom_2', 'light.bedroom_3',
          'light.family_bathroom', 'light.landing'
        ]);
        for (const l of savedLights) {
          if (l.id !== 'living_lamp' && dummyEntities.has(l.entity_id)) {
            l.entity_id = this.customSensors[`light_${l.id}`] || this.customSensors[`light_${l.id === 'master_bedroom' ? 'master' : l.id}`] || '';
          }
          if (l.id === 'living_lamp' && (l.name === 'Living Room Corner Lamp' || !l.name)) {
            l.name = 'Living Room Lamp';
          }
        }
        this.customLights = savedLights;
      } else {
        this.customLights = JSON.parse(JSON.stringify(DEFAULT_LIGHTS));
      }
    } catch (e) {
      this.customLights = JSON.parse(JSON.stringify(DEFAULT_LIGHTS));
    }
  }

  static getStubConfig() {
    return {
      type: 'custom:ha-energy-3d-card',
      title: 'Home Energy 3D',
      model_url: 'Taylor_Wimpey_Blair.glb',
      height: '560px',
      // Solax Solar
      solax_power: 'sensor.solax_snm9wncrqy_ac_output_power',
      solax_today: 'sensor.solax_snm9wncrqy_today_s_generated_energy',
      solax_week: 'sensor.solax_snm9wncrqy_today_s_generated_energy',
      solax_month: 'sensor.solax_snm9wncrqy_today_s_generated_energy',
      solax_year: 'sensor.solax_snm9wncrqy_total_generated_energy',
      // Octopus Electric
      octopus_electric_power: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand',
      octopus_export_power: 'sensor.solax_snm9wncrqy_exported_power',
      octopus_rate: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_rate',
      octopus_monthly_spend: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_cost',
      octopus_electric_30min: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption',
      octopus_electric_day: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption',
      octopus_electric_week: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_previous_accumulative_consumption',
      octopus_electric_month: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_total_consumption',
      // Octopus Gas & Boiler
      boiler_status: 'sensor.boiler_status',
      octopus_gas_30min: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh',
      octopus_gas_day: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh',
      octopus_gas_week: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh',
      octopus_gas_month: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_total_consumption_kwh',
      octopus_gas_rate: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_rate',
      octopus_gas_spend: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_cost',
      // myenergi & Peugeot EV
      myenergi_power: 'sensor.myenergi_zappi_30084500_internal_load_ct1',
      myenergi_status: 'sensor.myenergi_zappi_30084500_plug_status',
      myenergi_energy: 'sensor.myenergi_zappi_30084500_charge_added_session',
      peugeot_battery: 'sensor.vr3ukzkxzmj557948_battery',
      peugeot_range: 'sensor.vr3ukzkxzmj557948_autonomy',
      // Thermostats (Upstairs & Downstairs)
      thermostat_downstairs: 'climate.tado_x_downstairs',
      thermostat_upstairs: 'climate.smart_thermostat_x',
      // Appliances & Living Room Devices
      sensor_fridge: 'sensor.refrigerator_power',
      sensor_washer: 'sensor.kitchen_washing_machine_daily_energy',
      sensor_tv: 'switch.living_room_living_room_tv_plug',
      light_living_lamp: 'light.living_room_lamp',
      // Room Lights
      light_lounge: 'light.living_room_living_room_light',
      light_kitchen: 'light.kitchen_light',
      light_dining: '',
      light_hallway: 'light.downstairs_hallway',
      light_wc: '',
      light_master_bedroom: 'light.bedroom_bedroom_light',
      light_ensuite: 'light.en_suite_light',
      light_bedroom2: 'light.guest_room_guest_room_light',
      light_bedroom3: 'light.office_nursey_light',
      light_bathroom: 'light.bathroom_light',
      light_landing: 'light.upstairs_hallway'
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
      autoRotate: this._config.auto_rotate,
      customLights: this.customLights
    });

    // Initialize HUD Overlay inside viewport container
    this.hud = new HUDOverlay(this.wrapper, {
      currentSensorConfig: this._config,
      customLights: this.customLights,
      onPresetClick: (preset) => this.sceneManager.setCameraPreset(preset),
      onToggleXray: (enable) => this.sceneManager.setXRayRoof(enable),
      onToggleNight: (enable) => this.sceneManager.setNightMode(enable),
      onToggleRotate: (enable) => {
        this.sceneManager.controls.autoRotate = enable;
      },
      onToggleLight: (entityId) => this.toggleLightEntity(entityId),
      onSetTemperature: (floor, temp, entityId) => this.setThermostatTemperature(entityId, temp),
      onSetHvacMode: (floor, mode, entityId) => this.setThermostatHvacMode(entityId, mode),
      onThermostatChange: (thermostats, gas) => {
        if (this.energyData) {
          this.energyData.thermostats = thermostats;
          this.energyData.octopus_gas = gas;
        }
        if (this.sceneManager) {
          this.sceneManager.updateEnergyData(this.energyData);
        }
      },
      onToggleRoomLight: (lightId, isOn) => {
        if (!this.energyData.room_lights) this.energyData.room_lights = {};
        if (!this.energyData.room_lights[lightId]) {
          this.energyData.room_lights[lightId] = { entity_id: '', is_on: isOn, brightness: isOn ? 255 : 0, rgb_color: null };
        } else {
          this.energyData.room_lights[lightId].is_on = isOn;
          this.energyData.room_lights[lightId].brightness = isOn ? (this.energyData.room_lights[lightId].brightness || 255) : 0;
        }
        if (lightId === 'living_lamp') {
          if (!this.energyData.appliances) this.energyData.appliances = {};
          this.energyData.appliances.living_lamp = this.energyData.room_lights[lightId];
        }
        if (this.sceneManager) {
          this.sceneManager.updateRoomLights(this.energyData.room_lights);
        }
      },
      onToggleTvAudio: () => this.sceneManager.toggleTvAudio(),
      onSaveSensors: (customSensors) => {
        this.customSensors = customSensors;
        this._config = { ...this._config, ...customSensors };
        // Sync customLights entity_id with the saved sensor config
        for (const light of this.customLights) {
          let cfgVal = customSensors[`light_${light.id}`];
          if (cfgVal === undefined && light.id === 'master_bedroom') {
            cfgVal = customSensors.light_master_bedroom || customSensors.light_master;
          }
          if (cfgVal === undefined && light.id === 'living_lamp') {
            cfgVal = customSensors.light_living_lamp;
          }
          if (cfgVal !== undefined) {
            light.entity_id = cfgVal;
          }
        }
        try {
          localStorage.setItem('ha_energy_3d_custom_lights', JSON.stringify(this.customLights));
        } catch (e) {}
        this.sceneManager.rebuildCustomLights(this.customLights);
        this.updateStatesFromHass();
        if (this.hud) {
          this.hud.setCustomLights(this.customLights);
          this.hud.renderDrawerContent();
        }
      },
      onSaveCustomLights: (lights) => {
        this.customLights = lights;
        try {
          localStorage.setItem('ha_energy_3d_custom_lights', JSON.stringify(lights));
        } catch (e) {}
        // Also sync back into customSensors
        for (const light of lights) {
          if (light.id === 'living_lamp') {
            this.customSensors.light_living_lamp = light.entity_id || '';
            this._config.light_living_lamp = light.entity_id || '';
          } else {
            this.customSensors[`light_${light.id}`] = light.entity_id || '';
            this._config[`light_${light.id}`] = light.entity_id || '';
            if (light.id === 'master_bedroom') {
              this.customSensors.light_master = light.entity_id || '';
              this._config.light_master = light.entity_id || '';
            }
          }
        }
        try {
          localStorage.setItem('ha_energy_3d_custom_sensors', JSON.stringify(this.customSensors));
        } catch (e) {}
        this.sceneManager.rebuildCustomLights(lights);
        this.updateStatesFromHass();
      },
      onUpdateLightPosition: (id, x, y, z) => {
        this.sceneManager.updateLightPosition(id, x, y, z);
      },
      onBeaconFocus: (id, pos) => {
        this.sceneManager.setEditingLightBeacon(id, pos);
      },
      onBeaconClear: () => {
        this.sceneManager.clearEditingLightBeacon();
      },
      onEnableClickToPlace: (cb) => {
        this.sceneManager.enableClickToPlace(cb);
      },
      onDisableClickToPlace: () => {
        this.sceneManager.disableClickToPlace();
      }
    });

    // On each frame, update HUD with projected 3D hotspot coordinates
    this.sceneManager.onFrame = () => {
      const hotspots = this.sceneManager.getProjectedHotspots();
      this.hud.update(this.energyData, hotspots);
    };

    // When user drags, orbits, or pans away, clear preset active state
    this.sceneManager.onUserCameraInteraction = () => {
      if (this.hud) {
        this.hud.clearActivePreset();
      }
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
      return 0;
    }
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return autoFigureKw(stateObj.state, unit);
  }

  getEnergyInKwh(entityId, defaultKwh = 0) {
    if (!this._hass || !entityId) return defaultKwh;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return 0;
    }
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return autoFigureKwh(stateObj.state, unit);
  }

  getEntityNumericValue(entityId, defaultVal = 0) {
    if (!this._hass || !entityId) return defaultVal;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      return 0;
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

  resolveEntity(configuredId, ...fallbackPatterns) {
    if (configuredId && this._hass?.states?.[configuredId]) {
      return configuredId;
    }
    if (!this._hass?.states) return configuredId || '';
    const keys = Object.keys(this._hass.states);
    for (const pat of fallbackPatterns) {
      const match = keys.find(k => k.toLowerCase().includes(pat.toLowerCase()));
      if (match) return match;
    }
    return configuredId || '';
  }

  getTariffRate(entityId, defaultRate = 0) {
    if (!this._hass || !entityId) return defaultRate;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') return defaultRate;
    const val = parseFloat(stateObj.state);
    if (isNaN(val)) return defaultRate;
    const unit = (stateObj.attributes?.unit_of_measurement || '').toLowerCase();
    // If rate is in GBP/kWh or £/kWh (e.g. 0.3157), convert to pence (31.57 p/kWh)
    if (unit.includes('gbp') || unit.includes('£') || val < 1.5) {
      return parseFloat((val * 100).toFixed(2));
    }
    return parseFloat(val.toFixed(2));
  }

  getVehicleRange(entityId, defaultMiles = 0) {
    if (!this._hass || !entityId) return defaultMiles;
    const stateObj = this._hass.states[entityId];
    if (!stateObj || stateObj.state === 'unavailable' || stateObj.state === 'unknown') return defaultMiles;
    const val = parseFloat(stateObj.state);
    if (isNaN(val)) return defaultMiles;
    const unit = (stateObj.attributes?.unit_of_measurement || '').toLowerCase();
    // If vehicle range is in km (e.g. 262 km), convert to miles (163 miles)
    if (unit === 'km' || val > 200) {
      return Math.round(val * 0.621371);
    }
    return Math.round(val);
  }

  updateStatesFromHass() {
    if (!this._hass) return;
    const cfg = { ...this._config, ...this.customSensors };

    // 1. Solax Solar Integration
    const entSolaxPower = this.resolveEntity(cfg.solax_power, 'solax_snm9wncrqy_ac_output_power', 'ac_output_power', 'pv1_power', 'solax_pv_power');
    const entSolaxToday = this.resolveEntity(cfg.solax_today, 'solax_snm9wncrqy_today_s_generated_energy', 'today_s_generated_energy', 'solax_today');
    const entSolaxWeek  = this.resolveEntity(cfg.solax_week, 'solax_snm9wncrqy_today_s_generated_energy', 'solax_week');
    const entSolaxMonth = this.resolveEntity(cfg.solax_month, 'solax_snm9wncrqy_today_s_generated_energy', 'solax_month');
    const entSolaxYear  = this.resolveEntity(cfg.solax_year, 'solax_snm9wncrqy_total_generated_energy', 'total_generated_energy', 'solax_year');

    const solaxPower = this.getPowerInKw(entSolaxPower, this.energyData.solar.power_kw);
    this.energyData.solar = {
      power_kw: solaxPower,
      today_kwh: this.getEnergyInKwh(entSolaxToday, this.energyData.solar.today_kwh),
      week_kwh: this.getEnergyInKwh(entSolaxWeek, this.energyData.solar.week_kwh),
      month_kwh: this.getEnergyInKwh(entSolaxMonth, this.energyData.solar.month_kwh),
      year_kwh: this.getEnergyInKwh(entSolaxYear, this.energyData.solar.year_kwh),
      status: solaxPower > 0.04 ? 'Generating' : 'Idle'
    };

    // 2. Octopus Electricity & Grid
    const entOctopusPower = this.resolveEntity(cfg.octopus_electric_power, 'electricity_22l3956422_3200000391421_current_demand', 'electricity_current_demand', 'current_demand');
    const entOctopusExport = this.resolveEntity(cfg.octopus_export_power, 'solax_snm9wncrqy_exported_power', 'power_export', 'exported_power');
    const entOctopusRate = this.resolveEntity(cfg.octopus_rate, 'electricity_22l3956422_3200000391421_current_rate', 'electricity_current_rate');
    const entOctopusSpend = this.resolveEntity(cfg.octopus_monthly_spend, 'electricity_22l3956422_3200000391421_current_accumulative_cost', 'electricity_current_accumulative_cost');
    const entOctopus30min = this.resolveEntity(cfg.octopus_electric_30min, 'electricity_22l3956422_3200000391421_current_accumulative_consumption', 'electricity_30min');
    const entOctopusDay = this.resolveEntity(cfg.octopus_electric_day, 'electricity_22l3956422_3200000391421_current_accumulative_consumption', 'electricity_today');
    const entOctopusWeek = this.resolveEntity(cfg.octopus_electric_week, 'electricity_22l3956422_3200000391421_previous_accumulative_consumption', 'electricity_week');
    const entOctopusMonth = this.resolveEntity(cfg.octopus_electric_month, 'electricity_22l3956422_3200000391421_current_total_consumption', 'electricity_month');

    let electricKw = this.getPowerInKw(entOctopusPower, this.energyData.octopus_electric.power_kw);
    let exportKw = this.getPowerInKw(entOctopusExport, 0);
    if (exportKw > 25.0) exportKw = 0; // Guard against integer overflow sensors (e.g. 4294901755 W)

    let isExporting = false;
    if (electricKw < -0.02) {
      isExporting = true;
    } else if (electricKw > 0.02) {
      isExporting = false;
    } else if (exportKw > 0.04) {
      electricKw = -exportKw;
      isExporting = true;
    }

    this.energyData.octopus_electric = {
      power_kw: electricKw,
      is_exporting: isExporting,
      current_rate_p: this.getTariffRate(entOctopusRate, this.energyData.octopus_electric.current_rate_p),
      monthly_spend_gbp: this.getEntityNumericValue(entOctopusSpend, this.energyData.octopus_electric.monthly_spend_gbp),
      reading_30min_kwh: this.getEnergyInKwh(entOctopus30min, this.energyData.octopus_electric.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(entOctopusDay, this.energyData.octopus_electric.day_kwh),
      week_kwh: this.getEnergyInKwh(entOctopusWeek, this.energyData.octopus_electric.week_kwh),
      month_kwh: this.getEnergyInKwh(entOctopusMonth, this.energyData.octopus_electric.month_kwh)
    };

    // 3. Thermostats (Upstairs & Downstairs Heating Monitoring)
    const entThermoDown = this.resolveEntity(cfg.thermostat_downstairs, 'climate.tado_x_downstairs', 'climate.downstairs');
    const entThermoUp = this.resolveEntity(cfg.thermostat_upstairs, 'climate.smart_thermostat_x', 'climate.tado_x_upstairs', 'climate.upstairs');
    const downThermo = this.getThermostatState(entThermoDown, this.energyData.thermostats?.downstairs);
    const upThermo = this.getThermostatState(entThermoUp, this.energyData.thermostats?.upstairs);
    this.energyData.thermostats = {
      downstairs: downThermo,
      upstairs: upThermo
    };

    // 4. Octopus Gas & Combi Boiler
    const entGasRate = this.resolveEntity(cfg.octopus_gas_rate, 'gas_e6s18975782161_7756751506_current_rate', 'gas_current_rate');
    const entGasSpend = this.resolveEntity(cfg.octopus_gas_spend, 'gas_e6s18975782161_7756751506_current_accumulative_cost', 'gas_current_accumulative_cost');
    const entGas30min = this.resolveEntity(cfg.octopus_gas_30min, 'gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh', 'gas_30min');
    const entGasDay = this.resolveEntity(cfg.octopus_gas_day, 'gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh', 'gas_day');
    const entGasWeek = this.resolveEntity(cfg.octopus_gas_week, 'gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh', 'gas_week');
    const entGasMonth = this.resolveEntity(cfg.octopus_gas_month, 'gas_e6s18975782161_7756751506_current_total_consumption_kwh', 'gas_month');

    let isBoilerHeating = false;
    const hasDownThermo = Boolean(entThermoDown && this._hass?.states?.[entThermoDown]);
    const hasUpThermo = Boolean(entThermoUp && this._hass?.states?.[entThermoUp]);
    const thermostatsConfigured = hasDownThermo || hasUpThermo;

    // Active heating demand from thermostats
    const thermostatDemand = Boolean(
      (hasDownThermo && downThermo.is_heating) ||
      (hasUpThermo && upThermo.is_heating) ||
      (!thermostatsConfigured && (downThermo.is_heating || upThermo.is_heating))
    );

    if (thermostatsConfigured) {
      if (cfg.boiler_status && this._hass?.states?.[cfg.boiler_status]) {
        const bObj = this._hass.states[cfg.boiler_status];
        const bState = (bObj.state || '').toLowerCase().trim();
        const idleWords = ['standby', 'idle', 'off', 'ready', 'waiting', '0', 'false'];
        if (idleWords.includes(bState)) {
          isBoilerHeating = false;
        } else if (bState === 'hot water' || bState === 'hot_water') {
          isBoilerHeating = true;
        } else {
          isBoilerHeating = thermostatDemand;
        }
      } else {
        isBoilerHeating = thermostatDemand;
      }
    } else {
      if (cfg.boiler_status && this._hass?.states?.[cfg.boiler_status]) {
        const bObj = this._hass.states[cfg.boiler_status];
        const bState = (bObj.state || '').toLowerCase().trim();
        const bAttr = bObj.attributes || {};
        const activeWords = ['heating', 'heat', 'firing', 'on', 'central heating', 'hot water', 'active'];
        const idleWords = ['standby', 'idle', 'off', 'ready', 'waiting', '0', 'false'];

        if (activeWords.includes(bState) || bAttr.hvac_action === 'heating' || bAttr.is_heating === true) {
          isBoilerHeating = true;
        } else if (idleWords.includes(bState)) {
          isBoilerHeating = false;
        } else {
          const num = parseFloat(bState);
          isBoilerHeating = !isNaN(num) ? num > 0.05 : false;
        }
      } else {
        isBoilerHeating = Boolean(downThermo.is_heating || upThermo.is_heating);
      }
    }

    const boilerStatus = isBoilerHeating ? 'Heating' : 'Standby';

    this.energyData.octopus_gas = {
      is_active: isBoilerHeating,
      power_kw: isBoilerHeating ? 1.45 : 0.0,
      boiler_status: boilerStatus,
      reading_30min_kwh: this.getEnergyInKwh(entGas30min, this.energyData.octopus_gas.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(entGasDay, this.energyData.octopus_gas.day_kwh),
      week_kwh: this.getEnergyInKwh(entGasWeek, this.energyData.octopus_gas.week_kwh),
      month_kwh: this.getEnergyInKwh(entGasMonth, this.energyData.octopus_gas.month_kwh),
      current_rate_p: this.getTariffRate(entGasRate, this.energyData.octopus_gas.current_rate_p),
      monthly_spend_gbp: this.getEntityNumericValue(entGasSpend, this.energyData.octopus_gas.monthly_spend_gbp)
    };

    // 5. myenergi Zappi & Peugeot e-2008
    const entZappiPower = this.resolveEntity(cfg.myenergi_power, 'myenergi_zappi_30084500_internal_load_ct1', 'power_ct_internal_load', 'zappi_power');
    const entZappiStatus = this.resolveEntity(cfg.myenergi_status, 'myenergi_zappi_30084500_plug_status', 'zappi_plug_status', 'plug_status');
    const entZappiEnergy = this.resolveEntity(cfg.myenergi_energy, 'myenergi_zappi_30084500_charge_added_session', 'charge_added_session');

    const entPeugeotBattery = this.resolveEntity(cfg.peugeot_battery, 'sensor.vr3ukzkxzmj557948_battery', 'vr3ukzkxzmj557948_battery', 'battery_level', 'e2008_battery');
    const entPeugeotRange = this.resolveEntity(cfg.peugeot_range, 'sensor.vr3ukzkxzmj557948_autonomy', 'vr3ukzkxzmj557948_autonomy', 'autonomy', 'e2008_range');

    const evChargerKw = this.getPowerInKw(entZappiPower, this.energyData.ev.charger_power_kw);
    const evStatusRaw = this.getEntityState(entZappiStatus, '').toLowerCase().trim();

    let isConnected = false;
    let statusText = 'Disconnected';

    if (evStatusRaw) {
      if (
        evStatusRaw.includes('disconn') ||
        evStatusRaw.includes('unplug') ||
        evStatusRaw === 'off' ||
        evStatusRaw === 'unavailable' ||
        evStatusRaw === 'unknown'
      ) {
        isConnected = false;
        statusText = 'Disconnected';
      } else if (evStatusRaw.includes('charg')) {
        isConnected = true;
        statusText = 'Charging';
      } else if (
        evStatusRaw.includes('connect') ||
        evStatusRaw.includes('wait') ||
        evStatusRaw.includes('pause') ||
        evStatusRaw.includes('plug') ||
        evStatusRaw.includes('complete') ||
        evStatusRaw.includes('stop')
      ) {
        isConnected = true;
        statusText = 'Connected (Idle)';
      } else {
        isConnected = evChargerKw > 0.04;
        statusText = isConnected ? (evStatusRaw.charAt(0).toUpperCase() + evStatusRaw.slice(1)) : 'Disconnected';
      }
    } else {
      if (evChargerKw > 0.04) {
        isConnected = true;
        statusText = 'Charging';
      } else {
        isConnected = false;
        statusText = 'Disconnected';
      }
    }

    const isCharging = isConnected && evChargerKw > 0.04;
    if (isCharging) {
      statusText = `Charging @ ${evChargerKw.toFixed(1)} kW`;
    }

    this.energyData.ev = {
      is_charging: isCharging,
      is_connected: isConnected,
      status_text: statusText,
      charger_power_kw: isConnected ? evChargerKw : 0.0,
      energy_added_kwh: this.getEnergyInKwh(entZappiEnergy, this.energyData.ev.energy_added_kwh),
      charger_mode: evChargerKw > 3.0 ? 'Fast' : 'Eco+',
      battery_soc_pct: this.getEntityNumericValue(entPeugeotBattery, this.energyData.ev.battery_soc_pct),
      range_miles: this.getVehicleRange(entPeugeotRange, this.energyData.ev.range_miles)
    };

    // 6. Customizable 3D Lights
    const lightsData = {};
    for (const light of this.customLights) {
      let entityId = cfg[`light_${light.id}`];
      if (entityId === undefined && light.id === 'master_bedroom') {
        entityId = cfg.light_master_bedroom || cfg.light_master;
      }
      if (entityId === undefined && light.id === 'living_lamp') {
        entityId = cfg.light_living_lamp;
      }
      if (!entityId && light.entity_id) {
        entityId = light.entity_id;
      }

      // If still no entityId, check if HA states has a direct match
      if (!entityId && this._hass?.states) {
        const potential = [
          `light.${light.id}`,
          `switch.${light.id}`,
          `light.${light.id.replace('_bedroom', '')}`,
          `light.${light.id.replace('bedroom', 'bed_')}`
        ];
        for (const pot of potential) {
          if (this._hass.states[pot]) {
            entityId = pot;
            break;
          }
        }
      }

      lightsData[light.id] = this.getLightState(entityId, this.energyData.room_lights?.[light.id]);
    }
    this.energyData.room_lights = lightsData;

    // 7. Kitchen Fridge Freezer, Living Room TV, and Corner Lamp
    const entFridge = this.resolveEntity(cfg.sensor_fridge, 'sensor.refrigerator_power', 'refrigerator_power', 'fridge_power');
    const entWasher = this.resolveEntity(cfg.sensor_washer, 'sensor.kitchen_washing_machine_daily_energy', 'washing_machine_power', 'washer_power');
    const entTv = this.resolveEntity(cfg.sensor_tv, 'switch.living_room_living_room_tv_plug', 'media_player.lg_webos_tv_oled55c43la_2', 'media_player.living_room_tv');

    const fridgeStateObj = entFridge && this._hass ? this._hass.states[entFridge] : null;
    const fridgeRawState = (fridgeStateObj ? fridgeStateObj.state : '').toLowerCase();
    const isFridgeUnavailable = fridgeStateObj && (fridgeRawState === 'unavailable' || fridgeRawState === 'unknown');
    let fridgePower = 0.0;
    if (isFridgeUnavailable) {
      fridgePower = 0.0;
    } else {
      fridgePower = this.getPowerInKw(entFridge, this.energyData.appliances?.fridge?.power_kw ?? 0.048);
    }
    const isFridgeActive = !isFridgeUnavailable && (fridgePower > 0.005 || fridgeRawState === 'on');

    const tvStateObj = entTv && this._hass ? this._hass.states[entTv] : null;
    let isTvOn = false;
    let tvPower = 0;
    if (tvStateObj) {
      const s = tvStateObj.state.toLowerCase();
      isTvOn = s === 'on' || s === 'playing' || s === 'paused' || s === 'idle';
      if (tvStateObj.attributes?.unit_of_measurement) {
        tvPower = autoFigureKw(tvStateObj.state, tvStateObj.attributes.unit_of_measurement);
        isTvOn = tvPower > 0.015;
      } else {
        tvPower = isTvOn ? 0.095 : 0.001;
      }
    } else if (this.energyData.appliances?.tv) {
      isTvOn = Boolean(this.energyData.appliances.tv.is_on);
      tvPower = this.energyData.appliances.tv.power_kw;
    }

    const washerStateObj = entWasher && this._hass ? this._hass.states[entWasher] : null;
    const washerRawState = (washerStateObj ? washerStateObj.state : '').toLowerCase();
    const isWasherUnavailable = washerStateObj && (washerRawState === 'unavailable' || washerRawState === 'unknown');
    let washerPower = 0.0;
    if (isWasherUnavailable) {
      washerPower = 0.0;
    } else {
      washerPower = this.getPowerInKw(entWasher, this.energyData.appliances?.washer?.power_kw ?? 0.0);
    }
    const isWasherActive = !isWasherUnavailable && (washerPower > 0.010 || washerRawState === 'on' || washerRawState === 'running');

    const lampEntity = cfg.light_living_lamp || this.customLights.find(l => l.id === 'living_lamp' || l.name?.toLowerCase().includes('corner lamp'))?.entity_id;
    const lampData = this.getLightState(lampEntity, this.energyData.appliances?.living_lamp);

    this.energyData.appliances = {
      fridge: {
        entity_id: entFridge || '',
        power_kw: fridgePower,
        power_w: isFridgeUnavailable ? 0 : Math.round(fridgePower * 1000),
        is_active: isFridgeActive,
        state: isFridgeUnavailable ? 'Unavailable' : (isFridgeActive ? 'Running' : 'Standby')
      },
      washer: {
        entity_id: entWasher || '',
        power_kw: washerPower,
        power_w: isWasherUnavailable ? 0 : Math.round(washerPower * 1000),
        is_active: isWasherActive,
        state: isWasherUnavailable ? 'Unavailable' : (isWasherActive ? 'Running' : 'Standby')
      },
      tv: {
        entity_id: entTv || '',
        is_on: isTvOn,
        power_kw: tvPower,
        power_w: Math.round(tvPower * 1000),
        state: isTvOn ? 'On' : 'Standby'
      },
      living_lamp: lampData
    };

    if (this.sceneManager) {
      this.sceneManager.updateEnergyData(this.energyData);
      this.sceneManager.updateRoomLights(lightsData);
      this.sceneManager.updateAppliances(this.energyData.appliances);
    }
    if (this.hud && this.hud.isDrawerOpen()) {
      this.hud.renderDrawerContent();
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

    const rawState = (stateObj.state || '').toLowerCase().trim();
    const isOff = rawState === 'off' || rawState === 'standby' || rawState === 'idle';
    const isSetToHeat = !isOff && (rawState === 'heat' || rawState === 'heating' || rawState === 'auto' || rawState === 'on' || rawState === 'boost' || rawState === 'comfort' || rawState === '');

    const hasTarget = res.target_temp !== null && !isNaN(res.target_temp);
    const hasCurrent = res.current_temp !== null && !isNaN(res.current_temp);
    const action = (attr.hvac_action || '').toLowerCase().trim();

    // Reached or exceeded set temperature check
    // "if a thermostat is set to heat but it has reached its set temperture or exceeded it set the boiler to stand by."
    const reachedOrExceeded = hasTarget && hasCurrent && (res.current_temp >= res.target_temp);

    let isHeating = false;
    if (!isOff && isSetToHeat) {
      if (hasTarget && hasCurrent) {
        if (reachedOrExceeded) {
          // Reached or exceeded set temperature -> NOT heating
          isHeating = false;
        } else {
          // Below set temperature: calling for heat unless explicitly idle or off
          isHeating = action !== 'idle' && action !== 'off';
        }
      } else {
        // Temperatures not numerical -> fall back to action or mode
        isHeating = action === 'heating' || rawState === 'heating';
      }
    } else {
      isHeating = false;
    }

    res.is_heating = isHeating;
    res.hvac_action = isHeating ? 'heating' : (isOff ? 'off' : 'idle');
    res.comfort = getComfortStatus(res.current_temp);
    return res;
  }

  getLightState(entityId, defaultState = {}) {
    const cleanId = (entityId || '').trim();
    const prevOn = Boolean(defaultState?.is_on || defaultState?.state === 'on');
    const prevBri = defaultState?.brightness !== undefined ? defaultState.brightness : (prevOn ? 255 : 0);
    const prevRgb = defaultState?.rgb_color || null;

    const res = {
      entity_id: cleanId,
      is_on: prevOn,
      brightness: prevBri,
      rgb_color: prevRgb
    };

    if (!cleanId) {
      // Unmapped entity: respect current/manual toggle state
      return res;
    }

    if (!this._hass) return res;
    const stateObj = this._hass.states[cleanId];
    if (!stateObj) {
      // Entity not found in this HA instance: retain current/manual toggle state
      return res;
    }

    if (stateObj.state === 'unavailable' || stateObj.state === 'unknown') {
      res.is_on = false;
      res.brightness = 0;
      return res;
    }

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

  setThermostatTemperature(entityId, temp) {
    if (!this._hass || !entityId) return;
    try {
      this._hass.callService('climate', 'set_temperature', {
        entity_id: entityId,
        temperature: Number(temp)
      });
    } catch (e) {
      console.warn('Call climate set_temperature error:', e);
    }
  }

  setThermostatHvacMode(entityId, mode) {
    if (!this._hass || !entityId) return;
    try {
      this._hass.callService('climate', 'set_hvac_mode', {
        entity_id: entityId,
        hvac_mode: mode
      });
    } catch (e) {
      console.warn('Call climate set_hvac_mode error:', e);
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
