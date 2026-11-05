/**
 * Visual Editor for ha-energy-3d-card in Home Assistant
 */
export class HaEnergy3DCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
  }

  setConfig(config) {
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
  }

  render() {
    const c = this._config;

    this.shadowRoot.innerHTML = `
      <style>
        .card-editor {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 8px 0;
          font-family: inherit;
        }
        .section-title {
          font-weight: 700;
          font-size: 13px;
          color: var(--primary-color, #0284c7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid var(--divider-color, #e2e8f0);
          padding-bottom: 4px;
          margin-top: 10px;
        }
        .input-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .input-row label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color, #64748b);
        }
        .input-row input {
          padding: 8px 10px;
          border-radius: 6px;
          border: 1px solid var(--divider-color, #cbd5e1);
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #1e293b);
          font-size: 13px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      </style>

      <div class="card-editor">
        <div class="section-title">🏠 3D Model & Display</div>
        <div class="input-row">
          <label>3D Model URL (GLB)</label>
          <input type="text" data-key="model_url" value="${c.model_url || '/local/ha-energy-3d/Taylor_Wimpey_Blair.glb'}">
        </div>
        <div class="grid-2">
          <div class="input-row">
            <label>Card Height</label>
            <input type="text" data-key="height" value="${c.height || '560px'}">
          </div>
          <div class="input-row">
            <label>Title</label>
            <input type="text" data-key="title" value="${c.title || 'Home Energy 3D'}">
          </div>
        </div>

        <div class="section-title">☀️ Solax Solar Integration</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Live Solar Power (kW)</label>
            <input type="text" data-key="solax_power" value="${c.solax_power || 'sensor.solax_pv_power_total'}">
          </div>
          <div class="input-row">
            <label>Today Solar Energy (kWh)</label>
            <input type="text" data-key="solax_today" value="${c.solax_today || 'sensor.solax_today_s_solar_energy'}">
          </div>
          <div class="input-row">
            <label>This Week Solar (kWh)</label>
            <input type="text" data-key="solax_week" value="${c.solax_week || 'sensor.solax_this_week_solar_energy'}">
          </div>
          <div class="input-row">
            <label>This Month Solar (kWh)</label>
            <input type="text" data-key="solax_month" value="${c.solax_month || 'sensor.solax_this_month_solar_energy'}">
          </div>
          <div class="input-row">
            <label>This Year Solar (kWh)</label>
            <input type="text" data-key="solax_year" value="${c.solax_year || 'sensor.solax_this_year_solar_energy'}">
          </div>
        </div>

        <div class="section-title">⚡ Octopus Electricity & Grid</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Live Electric Power / Mini (kW)</label>
            <input type="text" data-key="octopus_electric_power" value="${c.octopus_electric_power || 'sensor.octopus_home_mini_current_electricity_power'}">
          </div>
          <div class="input-row">
            <label>Feed-In Export Power (kW)</label>
            <input type="text" data-key="octopus_export_power" value="${c.octopus_export_power || 'sensor.solax_feed_in_power'}">
          </div>
          <div class="input-row">
            <label>Electricity Unit Rate (p/kWh)</label>
            <input type="text" data-key="octopus_rate" value="${c.octopus_rate || 'sensor.octopus_energy_electricity_current_rate'}">
          </div>
          <div class="input-row">
            <label>Month Spend (£)</label>
            <input type="text" data-key="octopus_monthly_spend" value="${c.octopus_monthly_spend || 'sensor.octopus_energy_electricity_current_month_cost'}">
          </div>
          <div class="input-row">
            <label>Octopus Mini 30-Min (kWh)</label>
            <input type="text" data-key="octopus_electric_30min" value="${c.octopus_electric_30min || 'sensor.octopus_home_mini_electricity_30min'}">
          </div>
          <div class="input-row">
            <label>Electricity Day (kWh)</label>
            <input type="text" data-key="octopus_electric_day" value="${c.octopus_electric_day || 'sensor.octopus_energy_electricity_day'}">
          </div>
          <div class="input-row">
            <label>Electricity Week (kWh)</label>
            <input type="text" data-key="octopus_electric_week" value="${c.octopus_electric_week || 'sensor.octopus_energy_electricity_week'}">
          </div>
          <div class="input-row">
            <label>Electricity Month (kWh)</label>
            <input type="text" data-key="octopus_electric_month" value="${c.octopus_electric_month || 'sensor.octopus_energy_electricity_month'}">
          </div>
        </div>

        <div class="section-title">🔥 Octopus Gas & Kitchen Boiler</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Boiler Status (switch/climate)</label>
            <input type="text" data-key="boiler_status" value="${c.boiler_status || 'sensor.boiler_status'}">
          </div>
          <div class="input-row">
            <label>Octopus Mini Gas 30-Min (kWh)</label>
            <input type="text" data-key="octopus_gas_30min" value="${c.octopus_gas_30min || 'sensor.octopus_home_mini_gas_30min'}">
          </div>
          <div class="input-row">
            <label>Gas Day (kWh)</label>
            <input type="text" data-key="octopus_gas_day" value="${c.octopus_gas_day || 'sensor.octopus_energy_gas_day'}">
          </div>
          <div class="input-row">
            <label>Gas Week (kWh)</label>
            <input type="text" data-key="octopus_gas_week" value="${c.octopus_gas_week || 'sensor.octopus_energy_gas_week'}">
          </div>
          <div class="input-row">
            <label>Gas Month (kWh)</label>
            <input type="text" data-key="octopus_gas_month" value="${c.octopus_gas_month || 'sensor.octopus_energy_gas_month'}">
          </div>
          <div class="input-row">
            <label>Gas Unit Rate (p/kWh)</label>
            <input type="text" data-key="octopus_gas_rate" value="${c.octopus_gas_rate || 'sensor.octopus_energy_gas_current_rate'}">
          </div>
          <div class="input-row">
            <label>Gas Month Spend (£)</label>
            <input type="text" data-key="octopus_gas_spend" value="${c.octopus_gas_spend || 'sensor.octopus_energy_gas_current_month_cost'}">
          </div>
        </div>

        <div class="section-title">🚗 myenergi Zappi & Peugeot e-2008</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Zappi Charging Power (kW)</label>
            <input type="text" data-key="myenergi_power" value="${c.myenergi_power || 'sensor.myenergi_zappi_power'}">
          </div>
          <div class="input-row">
            <label>Zappi Connection Status</label>
            <input type="text" data-key="myenergi_status" value="${c.myenergi_status || 'sensor.myenergi_zappi_status'}">
          </div>
          <div class="input-row">
            <label>Zappi Session Energy (kWh)</label>
            <input type="text" data-key="myenergi_energy" value="${c.myenergi_energy || 'sensor.myenergi_zappi_charge_added_session'}">
          </div>
          <div class="input-row">
            <label>Peugeot Battery SoC (%)</label>
            <input type="text" data-key="peugeot_battery" value="${c.peugeot_battery || 'sensor.e2008_battery_level'}">
          </div>
          <div class="input-row">
            <label>Peugeot Remaining Range (miles)</label>
            <input type="text" data-key="peugeot_range" value="${c.peugeot_range || 'sensor.e2008_battery_range'}">
          </div>
        </div>

        <div class="section-title">🌡️ Heating & Thermostats</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Downstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_downstairs" value="${c.thermostat_downstairs || 'climate.downstairs'}">
          </div>
          <div class="input-row">
            <label>Upstairs Thermostat (climate/sensor)</label>
            <input type="text" data-key="thermostat_upstairs" value="${c.thermostat_upstairs || 'climate.upstairs'}">
          </div>
        </div>

        <div class="section-title">🍽️ Appliances & Living Room Devices</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Kitchen Fridge Freezer Power</label>
            <input type="text" data-key="sensor_fridge" value="${c.sensor_fridge || 'sensor.fridge_power'}">
          </div>
          <div class="input-row">
            <label>Living Room TV (media_player/switch)</label>
            <input type="text" data-key="sensor_tv" value="${c.sensor_tv || 'media_player.living_room_tv'}">
          </div>
        </div>

        <div class="section-title">💡 Room Lights & Lamps</div>
        <div class="grid-2">
          <div class="input-row">
            <label>Living Room / Lounge Ceiling</label>
            <input type="text" data-key="light_lounge" value="${c.light_lounge || 'light.living_room'}">
          </div>
          <div class="input-row">
            <label>Living Room Lamp</label>
            <input type="text" data-key="light_living_lamp" value="${c.light_living_lamp || 'light.living_room_lamp'}">
          </div>
          <div class="input-row">
            <label>Kitchen</label>
            <input type="text" data-key="light_kitchen" value="${c.light_kitchen || 'light.kitchen'}">
          </div>
          <div class="input-row">
            <label>Dining Room</label>
            <input type="text" data-key="light_dining" value="${c.light_dining || 'light.dining_room'}">
          </div>
          <div class="input-row">
            <label>Entrance Hall & Stairs</label>
            <input type="text" data-key="light_hallway" value="${c.light_hallway || 'light.hallway'}">
          </div>
          <div class="input-row">
            <label>Downstairs WC</label>
            <input type="text" data-key="light_wc" value="${c.light_wc || 'light.downstairs_wc'}">
          </div>
          <div class="input-row">
            <label>Master Bedroom</label>
            <input type="text" data-key="light_master_bedroom" value="${c.light_master_bedroom || 'light.master_bedroom'}">
          </div>
          <div class="input-row">
            <label>Master En-Suite</label>
            <input type="text" data-key="light_ensuite" value="${c.light_ensuite || 'light.ensuite'}">
          </div>
          <div class="input-row">
            <label>Bedroom 2 (Guestroom)</label>
            <input type="text" data-key="light_bedroom2" value="${c.light_bedroom2 || 'light.bedroom_2'}">
          </div>
          <div class="input-row">
            <label>Bedroom 3 (Nursery / Office)</label>
            <input type="text" data-key="light_bedroom3" value="${c.light_bedroom3 || 'light.bedroom_3'}">
          </div>
          <div class="input-row">
            <label>Family Bathroom</label>
            <input type="text" data-key="light_bathroom" value="${c.light_bathroom || ''}">
          </div>
          <div class="input-row">
            <label>Upstairs Landing</label>
            <input type="text" data-key="light_landing" value="${c.light_landing || ''}">
          </div>
        </div>
      </div>
    `;

    // Event listeners
    const inputs = this.shadowRoot.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        const key = e.target.getAttribute('data-key');
        const val = e.target.value;
        const newConfig = { ...this._config, [key]: val };
        const event = new CustomEvent('config-changed', {
          detail: { config: newConfig },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      });
    });
  }
}

customElements.define('ha-energy-3d-card-editor', HaEnergy3DCardEditor);
