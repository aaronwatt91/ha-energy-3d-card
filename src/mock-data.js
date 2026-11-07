/**
 * Realistic Mock / Fallback Energy Data
 * Used for live browser demo, testing, or before HA entities are mapped.
 */

export const DEFAULT_ENERGY_DATA = {
  // Solax Solar Generation
  solar: {
    power_kw: 0.18,          // Live generation in kW (sensor.solax_snm9wncrqy_ac_output_power)
    today_kwh: 1.20,         // Today's total kWh (sensor.solax_snm9wncrqy_today_s_generated_energy)
    week_kwh: 24.5,          // This week's total kWh
    month_kwh: 112.4,        // This month's total kWh
    year_kwh: 341.2,         // Total generated kWh (sensor.solax_snm9wncrqy_total_generated_energy)
    inverter_temp: 24.5,     // Deg C
    status: 'Generating'     // 'Generating', 'Idle', 'Fault'
  },

  // Octopus Grid & Electricity
  octopus_electric: {
    power_kw: 0.171,         // Live power in kW (sensor.octopus_energy_electricity_22l3956422_3200000391421_current_demand: 171 W)
    is_exporting: false,     // Derived: power_kw < 0
    current_rate_p: 31.57,   // Current unit rate in pence per kWh (from 0.315709 GBP/kWh)
    today_spend_gbp: 1.82,   // Current accumulative cost (£1.82)
    monthly_spend_gbp: 1.82, // Current accumulative cost (£1.82)
    day_kwh: 7.01,           // Electricity consumed today (sensor.octopus_energy_electricity_..._current_accumulative_consumption)
    yesterday_kwh: 7.26,     // Yesterday's consumption (7.26 kWh)
    yesterday_cost_gbp: 2.15,// Yesterday's cost (£2.15)
    tariff_name: 'Octopus Energy Electricity'
  },

  // Octopus Gas & Kitchen Combi Boiler
  octopus_gas: {
    is_active: false,        // Boiler is on Standby (not firing)
    power_kw: 0.0,           // Live equivalent gas consumption rate (0 kW when idle)
    day_kwh: 12.69,          // Gas consumed today (sensor.octopus_energy_gas_..._current_accumulative_consumption_kwh)
    today_spend_gbp: 1.40,   // Gas current accumulative cost (£1.40)
    yesterday_kwh: 29.06,    // Yesterday's gas consumption (29.06 kWh)
    yesterday_cost_gbp: 2.82,// Yesterday's gas cost (£2.82)
    current_rate_p: 8.71,    // Gas unit rate in p/kWh (from 0.087134 GBP/kWh)
    monthly_spend_gbp: 1.40, // Gas current accumulative cost (£1.40)
    boiler_status: 'Standby' // 'Heating', 'Standby'
  },

  // myenergi Zappi EV Charger & Peugeot e-2008
  ev: {
    is_charging: false,      // EV is not actively charging
    is_connected: false,     // EV Disconnected (sensor.myenergi_zappi_30084500_plug_status: EV Disconnected)
    status_text: 'EV Disconnected',
    is_plugged: false,
    charger_power_kw: 0.0,   // Live charging power (sensor.myenergi_zappi_30084500_internal_load_ct1: 0)
    energy_added_kwh: 19.3,  // Session energy added (sensor.myenergi_zappi_30084500_charge_added_session: 19.3 kWh)
    charger_mode: 'Eco+',    // 'Eco+', 'Fast', 'Eco', 'Stopped'
    battery_soc_pct: 100,    // Peugeot battery state of charge % (sensor.vr3ukzkxzmj557948_battery: 100%)
    range_miles: 163,        // Peugeot estimated remaining range (sensor.vr3ukzkxzmj557948_autonomy: 262 km = 163 miles)
    battery_capacity_kwh: 50.0 // Peugeot e-2008 50kWh battery
  },

  // Home Total Consumption
  home: {
    total_power_kw: 0.464    // Calculated: 0.284 kW grid + 0.180 kW solar
  },

  // Thermostats for Upstairs & Downstairs
  thermostats: {
    downstairs: {
      entity_id: 'climate.tado_x_downstairs',
      current_temp: 17.7,
      target_temp: 19.0,
      state: 'heat',
      hvac_action: 'idle',
      is_heating: false
    },
    upstairs: {
      entity_id: 'climate.smart_thermostat_x',
      current_temp: 17.9,
      target_temp: 20.0,
      state: 'heat',
      hvac_action: 'idle',
      is_heating: false
    }
  },

  // Room Lights (Mapped to 3D rooms)
  room_lights: {
    lounge: { is_on: false, brightness: 0, entity_id: 'light.living_room_living_room_light' },
    kitchen: { is_on: false, brightness: 0, entity_id: 'light.kitchen_light' },
    dining: { is_on: false, brightness: 0, entity_id: '' },
    hallway: { is_on: false, brightness: 0, entity_id: 'light.downstairs_hallway' },
    wc: { is_on: false, brightness: 0, entity_id: '' },
    master_bedroom: { is_on: false, brightness: 0, entity_id: 'light.bedroom_bedroom_light' },
    ensuite: { is_on: false, brightness: 0, entity_id: 'light.en_suite_light' },
    bedroom2: { is_on: false, brightness: 0, entity_id: 'light.guest_room_guest_room_light' },
    bedroom3: { is_on: false, brightness: 0, entity_id: 'light.office_nursey_light' },
    bathroom: { is_on: false, brightness: 0, entity_id: 'light.bathroom_light' },
    landing: { is_on: false, brightness: 0, entity_id: 'light.upstairs_hallway' },
    living_lamp: { is_on: true, brightness: 220, entity_id: 'light.living_room_lamp' }
  },

  // Dedicated Appliances & Living Room Lamp
  appliances: {
    fridge: {
      entity_id: 'sensor.refrigerator_power',
      power_kw: 0.037, // 37W
      power_w: 37,
      is_active: true,
      fridge_temp: 1,
      freezer_temp: -18
    },
    washer: {
      entity_id: 'sensor.kitchen_washing_machine_daily_energy',
      power_kw: 0.0,
      power_w: 0,
      today_kwh: 1.97,
      is_active: false
    },
    tv: {
      entity_id: 'switch.living_room_living_room_tv_plug',
      is_on: true,
      power_kw: 0.095 // 95W
    },
    living_lamp: {
      entity_id: 'light.living_room_lamp',
      is_on: true,
      brightness: 255
    }
  }
};
