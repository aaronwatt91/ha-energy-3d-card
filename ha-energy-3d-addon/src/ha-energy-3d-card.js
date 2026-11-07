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
    this._pendingState = {
      lights: {},
      thermostats: {}
    };
    this._thermoDebounceTimers = {};

    try {
      const savedSensors = JSON.parse(localStorage.getItem('ha_energy_3d_custom_sensors') || '{}');
      this.customSensors = savedSensors;
    } catch (e) {
      this.customSensors = {};
    }

    try {
      const savedLights = JSON.parse(localStorage.getItem('ha_energy_3d_custom_lights') || 'null');
      if (savedLights && Array.isArray(savedLights) && savedLights.length) {
        // Clean out legacy dummy entity IDs that prevent lights from working and heal with defaults
        const dummyEntities = new Set([
          'light.living_room', 'light.kitchen', 'light.dining_room', 'light.downstairs_wc',
          'light.master_bedroom', 'light.ensuite', 'light.bedroom_2', 'light.bedroom_3',
          'light.family_bathroom', 'light.landing'
        ]);
        for (const l of savedLights) {
          const def = DEFAULT_LIGHTS.find(d => d.id === l.id);
          if (!l.entity_id || dummyEntities.has(l.entity_id)) {
            l.entity_id = this.customSensors[`light_${l.id}`] || def?.entity_id || '';
          }
          if (l.id === 'living_lamp') {
            if (!l.entity_id || l.entity_id === 'light.living_room_corner_lamp' || dummyEntities.has(l.entity_id)) {
              l.entity_id = 'light.living_room_lamp';
            }
            if (l.name === 'Living Room Corner Lamp' || !l.name) {
              l.name = 'Living Room Lamp';
            }
          }
        }
        this.customLights = savedLights;
        try {
          localStorage.setItem('ha_energy_3d_custom_lights', JSON.stringify(this.customLights));
        } catch (err) {}
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
      solax_week: '',
      solax_month: '',
      solax_year: 'sensor.solax_snm9wncrqy_total_generated_energy',
      // Octopus Electric
      octopus_electric_power: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand',
      octopus_export_power: 'sensor.solax_snm9wncrqy_exported_power',
      octopus_rate: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_rate',
      octopus_monthly_spend: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_cost',
      octopus_electric_30min: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption',
      octopus_electric_day: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_current_accumulative_consumption',
      octopus_electric_yesterday: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_previous_accumulative_consumption',
      octopus_electric_yesterday_cost: 'sensor.octopus_energy_electricity_22l3956422_3200000391421_previous_accumulative_cost',
      octopus_electric_week: '',
      octopus_electric_month: '',
      // Octopus Gas & Boiler
      boiler_status: 'sensor.boiler_status',
      octopus_gas_30min: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh',
      octopus_gas_day: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_consumption_kwh',
      octopus_gas_yesterday: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh',
      octopus_gas_yesterday_cost: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_previous_accumulative_cost',
      octopus_gas_week: '',
      octopus_gas_month: '',
      octopus_gas_rate: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_rate',
      octopus_gas_spend: 'sensor.octopus_energy_gas_e6s18975782161_7756751506_current_accumulative_cost',
      // myenergi & Peugeot EV
      myenergi_power: 'sensor.myenergi_zappi_30084500_internal_load_ct1',
      myenergi_status: 'sensor.myenergi_zappi_30084500_plug_status',
      myenergi_energy: 'sensor.myenergi_zappi_30084500_charge_added_session',
      peugeot_battery: 'sensor.vr3ukzkxzmj557948_battery',
      peugeot_range: 'sensor.vr3ukzkxzmj557948_autonomy',
      peugeot_wakeup: 'button.vr3ukzkxzmj557948_wakeup',
      // Thermostats (Upstairs & Downstairs)
      thermostat_downstairs: 'climate.tado_x_downstairs',
      thermostat_upstairs: 'climate.smart_thermostat_x',
      // Appliances & Living Room Devices
      sensor_fridge: 'sensor.refrigerator_power',
      sensor_washer: 'sensor.kitchen_washing_machine_daily_energy',
      sensor_tv: 'sensor.living_room_tv_plug_power',
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
      ...HaEnergy3DCard.getStubConfig(),
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
      onWakeupVehicle: () => this.wakeupVehicle(),
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
    const entSolaxWeek  = cfg.solax_week ? this.resolveEntity(cfg.solax_week) : null;
    const entSolaxMonth = cfg.solax_month ? this.resolveEntity(cfg.solax_month) : null;
    const entSolaxYear  = this.resolveEntity(cfg.solax_year, 'solax_snm9wncrqy_total_generated_energy', 'total_generated_energy', 'solax_year');

    const solaxPower = this.getPowerInKw(entSolaxPower, this.energyData.solar.power_kw);
    this.energyData.solar = {
      power_kw: solaxPower,
      today_kwh: this.getEnergyInKwh(entSolaxToday, this.energyData.solar.today_kwh),
      week_kwh: entSolaxWeek ? this.getEnergyInKwh(entSolaxWeek, null) : null,
      month_kwh: entSolaxMonth ? this.getEnergyInKwh(entSolaxMonth, null) : null,
      year_kwh: entSolaxYear ? this.getEnergyInKwh(entSolaxYear, this.energyData.solar.year_kwh) : null,
      status: solaxPower > 0.04 ? 'Generating' : 'Idle'
    };

    // 2. Octopus Electricity & Grid
    const entOctopusPower = this.resolveEntity(cfg.octopus_electric_power, 'electricity_22l3956422_3200000391421_current_demand', 'electricity_current_demand', 'current_demand');
    const entOctopusExport = this.resolveEntity(cfg.octopus_export_power, 'solax_snm9wncrqy_exported_power', 'power_export', 'exported_power');
    const entOctopusRate = this.resolveEntity(cfg.octopus_rate, 'electricity_22l3956422_3200000391421_current_rate', 'electricity_current_rate');
    const entOctopusSpend = this.resolveEntity(cfg.octopus_monthly_spend, 'electricity_22l3956422_3200000391421_current_accumulative_cost', 'electricity_current_accumulative_cost');
    const entOctopus30min = this.resolveEntity(cfg.octopus_electric_30min, 'electricity_22l3956422_3200000391421_current_accumulative_consumption', 'electricity_30min');
    const entOctopusDay = this.resolveEntity(cfg.octopus_electric_day, 'electricity_22l3956422_3200000391421_current_accumulative_consumption', 'electricity_today');
    const entOctopusYesterday = this.resolveEntity(cfg.octopus_electric_yesterday, 'electricity_22l3956422_3200000391421_previous_accumulative_consumption', 'electricity_yesterday');
    const entOctopusYesterdayCost = this.resolveEntity(cfg.octopus_electric_yesterday_cost, 'electricity_22l3956422_3200000391421_previous_accumulative_cost', 'electricity_yesterday_cost');
    const entOctopusWeek = cfg.octopus_electric_week ? this.resolveEntity(cfg.octopus_electric_week) : null;
    const entOctopusMonth = cfg.octopus_electric_month ? this.resolveEntity(cfg.octopus_electric_month) : null;

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
      today_spend_gbp: this.getEntityNumericValue(entOctopusSpend, this.energyData.octopus_electric.today_spend_gbp || this.energyData.octopus_electric.monthly_spend_gbp),
      monthly_spend_gbp: this.getEntityNumericValue(entOctopusSpend, this.energyData.octopus_electric.monthly_spend_gbp),
      reading_30min_kwh: this.getEnergyInKwh(entOctopus30min, this.energyData.octopus_electric.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(entOctopusDay, this.energyData.octopus_electric.day_kwh),
      yesterday_kwh: entOctopusYesterday ? this.getEnergyInKwh(entOctopusYesterday, this.energyData.octopus_electric.yesterday_kwh) : null,
      yesterday_cost_gbp: entOctopusYesterdayCost ? this.getEntityNumericValue(entOctopusYesterdayCost, this.energyData.octopus_electric.yesterday_cost_gbp) : null,
      week_kwh: entOctopusWeek ? this.getEnergyInKwh(entOctopusWeek, null) : null,
      month_kwh: entOctopusMonth ? this.getEnergyInKwh(entOctopusMonth, null) : null
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
    const entGasYesterday = this.resolveEntity(cfg.octopus_gas_yesterday, 'gas_e6s18975782161_7756751506_previous_accumulative_consumption_kwh', 'gas_yesterday');
    const entGasYesterdayCost = this.resolveEntity(cfg.octopus_gas_yesterday_cost, 'gas_e6s18975782161_7756751506_previous_accumulative_cost', 'gas_yesterday_cost');
    const entGasWeek = cfg.octopus_gas_week ? this.resolveEntity(cfg.octopus_gas_week) : null;
    const entGasMonth = cfg.octopus_gas_month ? this.resolveEntity(cfg.octopus_gas_month) : null;

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
      today_spend_gbp: this.getEntityNumericValue(entGasSpend, this.energyData.octopus_gas.today_spend_gbp || this.energyData.octopus_gas.monthly_spend_gbp),
      yesterday_kwh: entGasYesterday ? this.getEnergyInKwh(entGasYesterday, this.energyData.octopus_gas.yesterday_kwh) : null,
      yesterday_cost_gbp: entGasYesterdayCost ? this.getEntityNumericValue(entGasYesterdayCost, this.energyData.octopus_gas.yesterday_cost_gbp) : null,
      week_kwh: entGasWeek ? this.getEnergyInKwh(entGasWeek, null) : null,
      month_kwh: entGasMonth ? this.getEnergyInKwh(entGasMonth, null) : null,
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

    // TV Power Sensor & Switch Resolution
    const entTv = this.resolveEntity(
      cfg.sensor_tv,
      'sensor.living_room_tv_plug_power',
      'switch.living_room_tv_plug',
      'sensor.tv_plug_power',
      'switch.living_room_living_room_tv_plug',
      'media_player.lg_webos_tv_oled55c43la_2',
      'media_player.living_room_tv'
    );

    let entTvPower = '';
    let entTvSwitch = '';
    if (entTv.startsWith('sensor.')) {
      entTvPower = entTv;
      entTvSwitch = this.resolveEntity(cfg.switch_tv, 'switch.living_room_tv_plug', entTv.replace('sensor.', 'switch.').replace('_power', ''));
    } else if (entTv.startsWith('switch.')) {
      entTvSwitch = entTv;
      entTvPower = this.resolveEntity('sensor.living_room_tv_plug_power', entTv.replace('switch.', 'sensor.') + '_power');
    } else {
      entTvSwitch = entTv;
      entTvPower = this.resolveEntity('sensor.living_room_tv_plug_power', 'sensor.tv_plug_power');
    }

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

    const tvPowerObj = entTvPower && this._hass ? this._hass.states[entTvPower] : null;
    const tvSwitchObj = entTvSwitch && this._hass ? this._hass.states[entTvSwitch] : null;

    let isTvOn = false;
    let tvPower = 0.0;
    let tvPowerW = 0;

    if (tvPowerObj && tvPowerObj.state !== 'unavailable' && tvPowerObj.state !== 'unknown') {
      const uom = (tvPowerObj.attributes?.unit_of_measurement || 'W').trim();
      const val = parseFloat(tvPowerObj.state);
      if (!isNaN(val)) {
        if (uom.toLowerCase() === 'kw') {
          tvPower = val;
          tvPowerW = Math.round(val * 1000);
        } else {
          // Watts
          tvPowerW = Math.round(val);
          tvPower = val / 1000.0;
        }
        isTvOn = tvPowerW > 5 || (tvSwitchObj && tvSwitchObj.state === 'on');
      }
    } else if (tvSwitchObj && tvSwitchObj.state !== 'unavailable' && tvSwitchObj.state !== 'unknown') {
      const s = tvSwitchObj.state.toLowerCase();
      isTvOn = s === 'on' || s === 'playing' || s === 'paused';
      tvPowerW = isTvOn ? 37 : 1;
      tvPower = tvPowerW / 1000.0;
    } else if (this.energyData.appliances?.tv) {
      isTvOn = Boolean(this.energyData.appliances.tv.is_on);
      tvPower = this.energyData.appliances.tv.power_kw;
      tvPowerW = this.energyData.appliances.tv.power_w || Math.round(tvPower * 1000);
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
        state: isFridgeUnavailable ? 'Unavailable' : (isFridgeActive ? 'Running' : 'Standby'),
        fridge_temp: this._hass?.states?.['sensor.refrigerator_fridge_temperature']?.state,
        freezer_temp: this._hass?.states?.['sensor.refrigerator_freezer_temperature']?.state
      },
      washer: {
        entity_id: entWasher || '',
        power_kw: washerPower,
        power_w: isWasherUnavailable ? 0 : Math.round(washerPower * 1000),
        is_active: isWasherActive,
        state: isWasherUnavailable ? 'Unavailable' : (isWasherActive ? 'Running' : 'Standby')
      },
      tv: {
        entity_id: entTvSwitch || entTv || 'switch.living_room_tv_plug',
        power_entity_id: entTvPower || 'sensor.living_room_tv_plug_power',
        is_on: isTvOn,
        power_kw: tvPower,
        power_w: tvPowerW,
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
    if (this._hass && entityId && this._hass.states?.[entityId]) {
      const stateObj = this._hass.states[entityId];
      if (stateObj.state !== 'unavailable' && stateObj.state !== 'unknown') {
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
        if (attr.hvac_action !== undefined) {
          res.hvac_action = attr.hvac_action;
        }
      }
    }

    // Check pending optimistic state lock so UI doesn't snap back while HA updates
    const pending = this._pendingState?.thermostats?.[entityId];
    if (pending) {
      if (Date.now() > pending.expiry) {
        delete this._pendingState.thermostats[entityId];
      } else {
        if (pending.target_temp !== undefined) {
          if (res.target_temp === pending.target_temp) {
            delete pending.target_temp;
          } else {
            res.target_temp = pending.target_temp;
          }
        }
        if (pending.hvac_mode !== undefined) {
          if (res.state === pending.hvac_mode) {
            delete pending.hvac_mode;
          } else {
            res.state = pending.hvac_mode;
          }
        }
      }
    }

    const rawState = (res.state || '').toLowerCase().trim();
    const isOff = rawState === 'off' || rawState === 'standby' || rawState === 'idle';
    const isSetToHeat = !isOff && (rawState === 'heat' || rawState === 'heating' || rawState === 'auto' || rawState === 'on' || rawState === 'boost' || rawState === 'comfort' || rawState === '');

    const hasTarget = res.target_temp !== null && !isNaN(res.target_temp);
    const hasCurrent = res.current_temp !== null && !isNaN(res.current_temp);
    const action = (res.hvac_action || '').toLowerCase().trim();

    // Reached or exceeded set temperature check
    const reachedOrExceeded = hasTarget && hasCurrent && (res.current_temp >= res.target_temp);

    let isHeating = false;
    if (!isOff && isSetToHeat) {
      if (hasTarget && hasCurrent) {
        if (reachedOrExceeded) {
          isHeating = false;
        } else {
          isHeating = action !== 'idle' && action !== 'off';
        }
      } else {
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

    if (cleanId && this._hass?.states?.[cleanId]) {
      const stateObj = this._hass.states[cleanId];
      if (stateObj.state !== 'unavailable' && stateObj.state !== 'unknown') {
        res.is_on = stateObj.state === 'on';
        const attr = stateObj.attributes || {};
        res.brightness = attr.brightness !== undefined ? attr.brightness : (res.is_on ? 255 : 0);
        if (attr.rgb_color && Array.isArray(attr.rgb_color)) {
          res.rgb_color = attr.rgb_color;
        }
      }
    }

    // Check pending optimistic light state
    const pending = this._pendingState?.lights?.[cleanId];
    if (pending) {
      if (Date.now() > pending.expiry) {
        delete this._pendingState.lights[cleanId];
      } else if (this._hass?.states?.[cleanId] && (this._hass.states[cleanId].state === 'on') === pending.is_on) {
        delete this._pendingState.lights[cleanId];
      } else {
        res.is_on = pending.is_on;
        res.brightness = pending.is_on ? (pending.brightness || 255) : 0;
      }
    }

    return res;
  }

  toggleLightEntity(entityId) {
    let cleanId = entityId ? entityId.trim() : '';
    if (!cleanId && this._config) {
      cleanId = this._config.light_living_lamp || '';
    }
    if (!cleanId) return;

    // Resolve if user passed a short name or default
    const def = DEFAULT_LIGHTS.find(d => d.id === cleanId || d.entity_id === cleanId);
    if (def && !this._hass?.states?.[cleanId] && def.entity_id) {
      cleanId = def.entity_id;
    }

    const current = this.getLightState(cleanId, this.energyData.room_lights?.[cleanId]);
    const targetOn = !current.is_on;

    // Set optimistic state immediately
    if (!this._pendingState.lights) this._pendingState.lights = {};
    this._pendingState.lights[cleanId] = {
      is_on: targetOn,
      brightness: targetOn ? 255 : 0,
      expiry: Date.now() + 4500
    };

    // Update internal energyData right away
    if (this.energyData.room_lights) {
      for (const k of Object.keys(this.energyData.room_lights)) {
        if (this.energyData.room_lights[k].entity_id === cleanId || k === cleanId) {
          this.energyData.room_lights[k].is_on = targetOn;
          this.energyData.room_lights[k].brightness = targetOn ? 255 : 0;
        }
      }
    }
    if (this.energyData.appliances) {
      if (this.energyData.appliances.living_lamp?.entity_id === cleanId) {
        this.energyData.appliances.living_lamp.is_on = targetOn;
        this.energyData.appliances.living_lamp.brightness = targetOn ? 255 : 0;
      }
      if (this.energyData.appliances.tv?.entity_id === cleanId || this.energyData.appliances.tv?.power_entity_id === cleanId) {
        this.energyData.appliances.tv.is_on = targetOn;
        this.energyData.appliances.tv.state = targetOn ? 'On' : 'Standby';
      }
    }

    if (this.sceneManager) {
      this.sceneManager.updateRoomLights(this.energyData.room_lights);
      this.sceneManager.updateAppliances(this.energyData.appliances);
    }
    if (this.hud) {
      this.hud.renderDrawerContent();
    }

    let targetEntity = cleanId;
    if (targetEntity.startsWith('sensor.') && (targetEntity.includes('tv_plug') || targetEntity.includes('tv'))) {
      targetEntity = this.energyData.appliances?.tv?.entity_id || 'switch.living_room_tv_plug';
    }

    const domain = targetEntity.startsWith('switch.') ? 'switch' : (targetEntity.startsWith('light.') ? 'light' : 'homeassistant');
    this.callHAService(domain, 'toggle', { entity_id: targetEntity });
  }

  wakeupVehicle() {
    const cfg = this._config || {};
    const entWakeup = this.resolveEntity(
      cfg.peugeot_wakeup,
      'button.vr3ukzkxzmj557948_wakeup',
      'button.vr3ukzkxzmj557948_wakeup_vehicle',
      'button.peugeot_wakeup',
      'button.car_wakeup'
    );
    if (entWakeup) {
      this.callHAService('button', 'press', { entity_id: entWakeup });
    }
  }

  setThermostatTemperature(entityId, temp) {
    let cleanId = entityId ? entityId.trim() : '';
    if (!cleanId || cleanId === 'climate.downstairs' || (cleanId.includes('downstairs') && !this._hass?.states?.[cleanId])) {
      cleanId = this.resolveEntity(this._config?.thermostat_downstairs, 'climate.tado_x_downstairs', 'climate.downstairs');
    } else if (cleanId === 'climate.upstairs' || (cleanId.includes('upstairs') && !this._hass?.states?.[cleanId])) {
      cleanId = this.resolveEntity(this._config?.thermostat_upstairs, 'climate.smart_thermostat_x', 'climate.upstairs');
    }
    if (!cleanId) return;

    const numTemp = Math.round(Number(temp) * 2) / 2;
    if (isNaN(numTemp)) return;

    // Apply optimistic lock for 5 seconds
    if (!this._pendingState.thermostats) this._pendingState.thermostats = {};
    if (!this._pendingState.thermostats[cleanId]) this._pendingState.thermostats[cleanId] = {};
    this._pendingState.thermostats[cleanId].target_temp = numTemp;
    this._pendingState.thermostats[cleanId].expiry = Date.now() + 5000;

    // Update in-memory energyData
    if (this.energyData.thermostats) {
      for (const floor of ['downstairs', 'upstairs']) {
        const th = this.energyData.thermostats[floor];
        if (th && (th.entity_id === cleanId || (!th.entity_id && (floor === 'downstairs' ? cleanId.includes('downstairs') : cleanId.includes('smart_thermostat_x'))))) {
          th.target_temp = numTemp;
          const isOff = (th.state || '').toLowerCase() === 'off';
          th.is_heating = !isOff && (th.current_temp < numTemp);
        }
      }
    }

    // Sync boiler heating demand
    const dt = this.energyData.thermostats?.downstairs;
    const ut = this.energyData.thermostats?.upstairs;
    const boilerHeating = Boolean((dt && dt.is_heating) || (ut && ut.is_heating));
    if (this.energyData.octopus_gas) {
      this.energyData.octopus_gas.is_active = boilerHeating;
      this.energyData.octopus_gas.boiler_status = boilerHeating ? 'Heating' : 'Standby';
    }

    if (this.sceneManager) {
      this.sceneManager.updateEnergyData(this.energyData);
    }
    if (this.hud) {
      this.hud.renderDrawerContent();
    }

    // Debounce the actual service call by 250ms so rapid clicks don't flood HA / Tado
    if (this._thermoDebounceTimers[cleanId]) {
      clearTimeout(this._thermoDebounceTimers[cleanId]);
    }
    this._thermoDebounceTimers[cleanId] = setTimeout(() => {
      delete this._thermoDebounceTimers[cleanId];
      const curState = (this.energyData.thermostats?.downstairs?.entity_id === cleanId
        ? this.energyData.thermostats?.downstairs?.state
        : this.energyData.thermostats?.upstairs?.state) || '';
      const payload = { entity_id: cleanId, temperature: numTemp };
      if (curState.toLowerCase() === 'off') {
        payload.hvac_mode = 'heat';
      }
      this.callHAService('climate', 'set_temperature', payload);
    }, 250);
  }

  setThermostatHvacMode(entityId, mode) {
    let cleanId = entityId ? entityId.trim() : '';
    if (!cleanId || cleanId === 'climate.downstairs' || (cleanId.includes('downstairs') && !this._hass?.states?.[cleanId])) {
      cleanId = this.resolveEntity(this._config?.thermostat_downstairs, 'climate.tado_x_downstairs', 'climate.downstairs');
    } else if (cleanId === 'climate.upstairs' || (cleanId.includes('upstairs') && !this._hass?.states?.[cleanId])) {
      cleanId = this.resolveEntity(this._config?.thermostat_upstairs, 'climate.smart_thermostat_x', 'climate.upstairs');
    }
    if (!cleanId) return;

    if (!this._pendingState.thermostats) this._pendingState.thermostats = {};
    if (!this._pendingState.thermostats[cleanId]) this._pendingState.thermostats[cleanId] = {};
    this._pendingState.thermostats[cleanId].hvac_mode = mode;
    this._pendingState.thermostats[cleanId].expiry = Date.now() + 5000;

    // Update in-memory energyData
    if (this.energyData.thermostats) {
      for (const floor of ['downstairs', 'upstairs']) {
        const th = this.energyData.thermostats[floor];
        if (th && (th.entity_id === cleanId || (!th.entity_id && (floor === 'downstairs' ? cleanId.includes('downstairs') : cleanId.includes('smart_thermostat_x'))))) {
          th.state = mode;
          const isOff = mode === 'off';
          th.is_heating = !isOff && (th.current_temp < th.target_temp);
        }
      }
    }

    // Sync boiler heating demand
    const dt = this.energyData.thermostats?.downstairs;
    const ut = this.energyData.thermostats?.upstairs;
    const boilerHeating = Boolean((dt && dt.is_heating) || (ut && ut.is_heating));
    if (this.energyData.octopus_gas) {
      this.energyData.octopus_gas.is_active = boilerHeating;
      this.energyData.octopus_gas.boiler_status = boilerHeating ? 'Heating' : 'Standby';
    }

    if (this.sceneManager) {
      this.sceneManager.updateEnergyData(this.energyData);
    }
    if (this.hud) {
      this.hud.renderDrawerContent();
    }

    this.callHAService('climate', 'set_hvac_mode', {
      entity_id: cleanId,
      hvac_mode: mode
    });
  }

  async callHAService(domain, service, serviceData = {}) {
    console.log(`[HA-3D] Calling service: ${domain}.${service}`, serviceData);

    // 1. If running as a Lovelace card with standard hass object
    if (this._hass && typeof this._hass.callService === 'function') {
      try {
        await this._hass.callService(domain, service, serviceData);
        console.log(`[HA-3D] Service ${domain}.${service} succeeded via hass.callService`);
        return true;
      } catch (err) {
        console.warn(`[HA-3D] hass.callService(${domain}, ${service}) error:`, err);
      }
    }

    // 2. Dispatch standard Lovelace 'hass-call-service' custom event
    try {
      this.dispatchEvent(new CustomEvent('hass-call-service', {
        detail: { domain, service, serviceData },
        bubbles: true,
        composed: true
      }));
    } catch (e) {}

    // 3. If running inside the Addon / Ingress web page (or local server proxy)
    try {
      const res = await fetch('api/ha-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain, service, serviceData })
      });
      if (res.ok) {
        console.log(`[HA-3D] Service ${domain}.${service} succeeded via /api/ha-service proxy`);
        return true;
      }
    } catch (e) {}

    return false;
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
