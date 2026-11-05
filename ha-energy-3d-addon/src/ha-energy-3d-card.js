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
      myenergi_status: 'sensor.myenergi_zappi_status',
      myenergi_energy: 'sensor.myenergi_zappi_charge_added_session',
      peugeot_battery: 'sensor.e2008_battery_level',
      peugeot_range: 'sensor.e2008_battery_range',
      // Thermostats (Upstairs & Downstairs)
      thermostat_downstairs: 'climate.downstairs',
      thermostat_upstairs: 'climate.upstairs',
      // Appliances & Living Room Devices
      sensor_fridge: 'sensor.fridge_power',
      sensor_washer: 'sensor.washing_machine_power',
      sensor_tv: 'media_player.living_room_tv',
      light_living_lamp: 'light.living_room_lamp',
      // Room Lights (Unset by default: strictly OFF until user maps a sensor)
      light_lounge: '',
      light_kitchen: '',
      light_dining: '',
      light_hallway: '',
      light_wc: '',
      light_master_bedroom: '',
      light_ensuite: '',
      light_bedroom2: '',
      light_bedroom3: '',
      light_bathroom: '',
      light_landing: ''
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

    // Strict rule:
    // If electricKw > 0.02: House is IMPORTING from Octopus grid -> positive kW, flow moves towards house.
    // If electricKw < -0.02: House is EXPORTING (negative) -> flow moves away from house towards pylon.
    if (electricKw < -0.02) {
      isExporting = true;
    } else if (electricKw > 0.02) {
      isExporting = false;
    } else if (exportKw > 0.04) {
      // Only when main electricity power is ~0 and dedicated export sensor reports export
      electricKw = -exportKw;
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

    // 3. Thermostats (Upstairs & Downstairs Heating Monitoring)
    const downThermo = this.getThermostatState(cfg.thermostat_downstairs, this.energyData.thermostats?.downstairs);
    const upThermo = this.getThermostatState(cfg.thermostat_upstairs, this.energyData.thermostats?.upstairs);
    this.energyData.thermostats = {
      downstairs: downThermo,
      upstairs: upThermo
    };

    // 4. Octopus Gas & Combi Boiler
    // Directly hooked to thermostats: if either is on/calling for heat, the boiler is firing.
    // If both are off/idle, the boiler is in Standby / Off.
    const eitherThermostatHeating = Boolean(downThermo.is_heating || upThermo.is_heating);
    let explicitBoilerActive = false;
    if (cfg.boiler_status) {
      const boilerRawState = this.getEntityState(cfg.boiler_status, '');
      if (boilerRawState === 'on' || boilerRawState === 'heat' || boilerRawState === 'heating' || boilerRawState === 'Central Heating') {
        explicitBoilerActive = true;
      }
    }

    const isGasActive = eitherThermostatHeating || explicitBoilerActive;
    const boilerStatus = isGasActive ? 'Heating' : 'Standby';

    this.energyData.octopus_gas = {
      is_active: isGasActive,
      power_kw: isGasActive ? 1.45 : 0.0,
      boiler_status: boilerStatus,
      reading_30min_kwh: this.getEnergyInKwh(cfg.octopus_gas_30min, this.energyData.octopus_gas.reading_30min_kwh),
      day_kwh: this.getEnergyInKwh(cfg.octopus_gas_day, this.energyData.octopus_gas.day_kwh),
      week_kwh: this.getEnergyInKwh(cfg.octopus_gas_week, this.energyData.octopus_gas.week_kwh),
      month_kwh: this.getEnergyInKwh(cfg.octopus_gas_month, this.energyData.octopus_gas.month_kwh),
      current_rate_p: this.getEntityNumericValue(cfg.octopus_gas_rate, this.energyData.octopus_gas.current_rate_p),
      monthly_spend_gbp: this.getEntityNumericValue(cfg.octopus_gas_spend, this.energyData.octopus_gas.monthly_spend_gbp)
    };

    // 5. myenergi Zappi & Peugeot e-2008 (Auto-figures Watts vs kW, e.g. 7200W -> 7.2 kW)
    const evChargerKw = this.getPowerInKw(cfg.myenergi_power, this.energyData.ev.charger_power_kw);
    const evStatusRaw = this.getEntityState(cfg.myenergi_status, '').toLowerCase();

    let isConnected = true;
    let statusText = 'Connected';

    if (evStatusRaw) {
      if (evStatusRaw.includes('charg')) {
        isConnected = true;
        statusText = 'Charging';
      } else if (evStatusRaw.includes('connect') || evStatusRaw.includes('wait') || evStatusRaw.includes('pause') || evStatusRaw.includes('plug') || evStatusRaw.includes('complete')) {
        isConnected = true;
        statusText = 'Connected (Idle)';
      } else if (evStatusRaw.includes('disconn') || evStatusRaw === 'off') {
        isConnected = false;
        statusText = 'Disconnected';
      } else {
        statusText = evStatusRaw.charAt(0).toUpperCase() + evStatusRaw.slice(1);
      }
    } else {
      if (evChargerKw > 0.04) {
        isConnected = true;
        statusText = 'Charging';
      } else {
        const hasCar = this.getEntityNumericValue(cfg.peugeot_battery, 0) > 0;
        isConnected = hasCar;
        statusText = hasCar ? 'Connected (Idle)' : 'Disconnected';
      }
    }

    const isCharging = evChargerKw > 0.04;
    if (isCharging) {
      statusText = `Charging @ ${evChargerKw.toFixed(1)} kW`;
    }

    this.energyData.ev = {
      is_charging: isCharging,
      is_connected: isConnected,
      status_text: statusText,
      charger_power_kw: evChargerKw,
      energy_added_kwh: this.getEnergyInKwh(cfg.myenergi_energy, this.energyData.ev.energy_added_kwh),
      charger_mode: evChargerKw > 3.0 ? 'Fast' : 'Eco+',
      battery_soc_pct: this.getEntityNumericValue(cfg.peugeot_battery, this.energyData.ev.battery_soc_pct),
      range_miles: this.getEntityNumericValue(cfg.peugeot_range, this.energyData.ev.range_miles)
    };

    // 6. Customizable 3D Lights (Mapped to Home Assistant entities or manual toggle)
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
    const fridgeStateObj = cfg.sensor_fridge && this._hass ? this._hass.states[cfg.sensor_fridge] : null;
    const fridgeRawState = (fridgeStateObj ? fridgeStateObj.state : this.getEntityState(cfg.sensor_fridge, '')).toLowerCase();
    const isFridgeUnavailable = fridgeStateObj && (fridgeRawState === 'unavailable' || fridgeRawState === 'unknown');
    let fridgePower = 0.0;
    if (isFridgeUnavailable) {
      fridgePower = 0.0;
    } else {
      fridgePower = this.getPowerInKw(cfg.sensor_fridge, this.energyData.appliances?.fridge?.power_kw ?? 0.085);
    }
    const isFridgeActive = !isFridgeUnavailable && (fridgePower > 0.005 || fridgeRawState === 'on');

    const tvStateObj = cfg.sensor_tv && this._hass ? this._hass.states[cfg.sensor_tv] : null;
    let isTvOn = false;
    let tvPower = 0;
    if (tvStateObj) {
      const s = tvStateObj.state;
      isTvOn = s === 'on' || s === 'playing' || s === 'paused' || s === 'idle';
      if (tvStateObj.attributes?.unit_of_measurement) {
        tvPower = autoFigureKw(s, tvStateObj.attributes.unit_of_measurement);
        isTvOn = tvPower > 0.015;
      } else {
        tvPower = isTvOn ? 0.095 : 0.001;
      }
    } else if (this.energyData.appliances?.tv) {
      isTvOn = Boolean(this.energyData.appliances.tv.is_on);
      tvPower = this.energyData.appliances.tv.power_kw;
    }

    const washerStateObj = cfg.sensor_washer && this._hass ? this._hass.states[cfg.sensor_washer] : null;
    const washerRawState = (washerStateObj ? washerStateObj.state : this.getEntityState(cfg.sensor_washer, '')).toLowerCase();
    const isWasherUnavailable = washerStateObj && (washerRawState === 'unavailable' || washerRawState === 'unknown');
    let washerPower = 0.0;
    if (isWasherUnavailable) {
      washerPower = 0.0;
    } else {
      washerPower = this.getPowerInKw(cfg.sensor_washer, this.energyData.appliances?.washer?.power_kw ?? 0.0);
    }
    const isWasherActive = !isWasherUnavailable && (washerPower > 0.010 || washerRawState === 'on' || washerRawState === 'running');

    const lampEntity = cfg.light_living_lamp || this.customLights.find(l => l.id === 'living_lamp' || l.name?.toLowerCase().includes('corner lamp'))?.entity_id;
    const lampData = this.getLightState(lampEntity, this.energyData.appliances?.living_lamp);

    this.energyData.appliances = {
      fridge: {
        entity_id: cfg.sensor_fridge || '',
        power_kw: fridgePower,
        power_w: isFridgeUnavailable ? 0 : Math.round(fridgePower * 1000),
        is_active: isFridgeActive,
        state: isFridgeUnavailable ? 'Unavailable' : (isFridgeActive ? 'Running' : 'Standby')
      },
      washer: {
        entity_id: cfg.sensor_washer || '',
        power_kw: washerPower,
        power_w: isWasherUnavailable ? 0 : Math.round(washerPower * 1000),
        is_active: isWasherActive,
        state: isWasherUnavailable ? 'Unavailable' : (isWasherActive ? 'Running' : 'Standby')
      },
      tv: {
        entity_id: cfg.sensor_tv || '',
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
