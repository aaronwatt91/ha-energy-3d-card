/**
 * Realistic Mock / Fallback Energy Data
 * Used for live browser demo, testing, or before HA entities are mapped.
 */

export const DEFAULT_ENERGY_DATA = {
  // Solax Solar Generation
  solar: {
    power_kw: 2.85,          // Live generation in kW
    today_kwh: 14.6,         // Today's total kWh
    week_kwh: 86.4,          // This week's total kWh
    month_kwh: 342.1,        // This month's total kWh
    year_kwh: 3820.5,        // This year's total kWh
    inverter_temp: 34.2,     // Deg C
    status: 'Generating'     // 'Generating', 'Idle', 'Fault'
  },

  // Octopus Grid & Electricity
  octopus_electric: {
    power_kw: 0.72,          // Live power (positive = import, negative = export)
    is_exporting: false,     // Derived: power_kw < 0
    current_rate_p: 24.85,   // Current unit rate in pence per kWh
    monthly_spend_gbp: 74.20,// Current month spend so far in £
    reading_30min_kwh: 0.36, // Octopus Home Mini 30-min electricity reading
    day_kwh: 8.4,            // Electricity consumed today
    week_kwh: 54.2,          // Electricity consumed this week
    month_kwh: 218.6,        // Electricity consumed this month
    tariff_name: 'Octopus Flexible / Agile'
  },

  // Octopus Gas & Kitchen Combi Boiler
  octopus_gas: {
    is_active: true,         // Boiler is firing / heating
    power_kw: 1.45,          // Live equivalent gas consumption rate
    reading_30min_kwh: 0.72, // Octopus Home Mini 30-min gas reading
    day_kwh: 12.8,           // Gas consumed today
    week_kwh: 78.5,          // Gas consumed this week
    month_kwh: 310.2,        // Gas consumed this month
    current_rate_p: 6.24,    // Gas unit rate in p/kWh
    monthly_spend_gbp: 38.65,// Gas monthly spend in £
    boiler_status: 'Central Heating' // 'Central Heating', 'Hot Water', 'Standby'
  },

  // myenergi Zappi EV Charger & Peugeot e-2008
  ev: {
    is_charging: true,       // EV is plugged in and actively charging
    is_plugged: true,
    charger_power_kw: 7.20,  // Live charging power from Zappi
    energy_added_kwh: 22.4,  // Session / today energy added to car
    charger_mode: 'Eco+',    // 'Eco+', 'Fast', 'Eco', 'Stopped'
    battery_soc_pct: 68,     // Peugeot battery state of charge %
    range_miles: 142,        // Peugeot estimated remaining range
    battery_capacity_kwh: 50.0 // Peugeot e-2008 50kWh battery
  },

  // Home Total Consumption
  home: {
    total_power_kw: 2.15     // Derived / calculated total home load
  },

  // Thermostats for Upstairs & Downstairs
  thermostats: {
    downstairs: {
      entity_id: 'climate.downstairs',
      current_temp: 20.5,
      target_temp: 21.0,
      state: 'heat',
      hvac_action: 'heating',
      is_heating: true
    },
    upstairs: {
      entity_id: 'climate.upstairs',
      current_temp: 19.2,
      target_temp: 19.5,
      state: 'heat',
      hvac_action: 'idle',
      is_heating: false
    }
  },

  // Room Lights (Mapped to 3D rooms, strictly OFF if no sensor configured)
  room_lights: {
    lounge: { is_on: false, brightness: 0, entity_id: '' },
    kitchen: { is_on: false, brightness: 0, entity_id: '' },
    dining: { is_on: false, brightness: 0, entity_id: '' },
    hallway: { is_on: false, brightness: 0, entity_id: '' },
    wc: { is_on: false, brightness: 0, entity_id: '' },
    master_bedroom: { is_on: false, brightness: 0, entity_id: '' },
    ensuite: { is_on: false, brightness: 0, entity_id: '' },
    bedroom2: { is_on: false, brightness: 0, entity_id: '' },
    bedroom3: { is_on: false, brightness: 0, entity_id: '' },
    bathroom: { is_on: false, brightness: 0, entity_id: '' },
    landing: { is_on: false, brightness: 0, entity_id: '' }
  }
};
