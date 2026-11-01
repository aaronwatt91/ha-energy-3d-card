# 🏡 Home Energy 3D Monitor for Home Assistant
### Interactive 3D Digital Twin with Solax Solar, Octopus Energy, myenergi Zappi & Peugeot e-2008

[![HACS Custom](https://img.shields.io/badge/HACS-Custom%20Card-blue.svg)](https://github.com/hacs/integration)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black.svg)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive 3D Home Energy Dashboard and Lovelace Custom Card for Home Assistant. Built directly around the Taylor Wimpey Blair 3D model, providing real-time animated energy flows, glowing cables, live metric HUDs, and camera preset controls.

---

## ✨ Features

- **☀️ Solax Solar Integration:**
  - Live PV generation (`kW`) dynamically driving panel glow and particle speed.
  - Animated DC cabling flowing from the rear roof array through the loft down into the entrance hall meter cupboard.
  - Energy generation tracking: **Today**, **This Week**, **This Month**, and **This Year** (`kWh`).

- **⚡ Octopus Energy & Grid Monitoring:**
  - Real-time electricity import and export tracking (`kW`).
  - Animated service drop cable from roadside utility pylon:
    - **Importing:** Electric cyan/blue pulses flowing down into the smart meter.
    - **Exporting:** Vivid solar emerald green pulses flowing backwards into the grid.
  - Dynamic tariff recording (**p/kWh**) for Agile, Tracker, Go, and Fixed tariffs.
  - **Month-to-date electricity spend (£)**.
  - **30-minute interval readings** (from Octopus Home Mini), plus **Day**, **Week**, and **Month** electricity totals.

- **🔥 Octopus Gas & Kitchen Combi Boiler:**
  - External bulk LPG gas storage tank and yellow supply pipework lighting up in warm flame amber.
  - Combi boiler active state (`Central Heating`, `Hot Water`, `Standby`).
  - 30-minute gas readings (Octopus Home Mini), **Day**, **Week**, and **Month** gas usage (`kWh` / `m³`).
  - Gas rate and estimated monthly spend.

- **🚗 myenergi Zappi EV Charger & Peugeot e-2008:**
  - Wallbox charger and catenary charging cable plugged into the Peugeot e-2008 on the driveway.
  - Dynamic charging speed (`kW`) with high-energy turquoise pulse stream.
  - Peugeot battery state of charge gauge (**% SoC**) and remaining mileage range.
  - Session and today's energy added (`kWh`).

- **🎮 Full 3D Interactive Viewport:**
  - **Orbit, Pan, Zoom, and Touch:** Move around and inspect every angle of your home.
  - **Camera Quick Presets:** 🏠 Whole House, ☀️ Solar Roof, ⚡ Meter Box, 🔥 Combi Boiler, 🚗 Peugeot EV.
  - **👁️ X-Ray Roof Mode:** Makes the roof and upper ceilings transparent so you can look straight down into the entrance meter cupboard and kitchen combi boiler inside the house!
  - **🌙 Night / Neon Glow Mode:** Dims the daylight into dusk/night so the glowing energy cables, solar array, and car headlights pop vibrantly!
  - **🔄 Auto-Orbit:** Smoothly rotates the model for ambient dashboard displays.

---

## 🚀 Quick Local Test (Mac / Browser)

You can test and play with the 3D model and live sliders right now on your Mac before installing it in Home Assistant:

```bash
# In the project directory:
npm run build
npm run serve
```
Then open `http://localhost:8080/index.html` in Safari or Chrome!
Use the sliders at the bottom to adjust Solar generation kW, Grid Import/Export, Gas Boiler status, and Peugeot battery %, and watch the 3D scene react in real time.

---

## 📦 Home Assistant Installation

### Method 1: Manual Installation (Recommended)

1. **Copy the Card Bundle & 3D Model to Home Assistant:**
   Copy `dist/ha-energy-3d-card.js` and `Taylor_Wimpey_Blair.glb` into your Home Assistant `/config/www/ha-energy-3d/` directory:

   ```bash
   /config/www/ha-energy-3d/ha-energy-3d-card.js
   /config/www/ha-energy-3d/Taylor_Wimpey_Blair.glb
   ```

2. **Add Lovelace Resource:**
   In Home Assistant, navigate to **Settings > Dashboards > Resources** (top right 3 dots) and add:
   - **URL:** `/local/ha-energy-3d/ha-energy-3d-card.js`
   - **Resource type:** `JavaScript Module`

3. **Add the Card to your Dashboard:**
   Edit your dashboard, click **Add Card**, select **Manual**, and paste the YAML configuration below.

---

## ⚙️ Lovelace Dashboard Configuration (YAML)

```yaml
type: custom:ha-energy-3d-card
title: Home Energy 3D Monitor
model_url: /local/ha-energy-3d/Taylor_Wimpey_Blair.glb
height: 560px
night_mode: false
auto_rotate: false

# --- Solax Solar Integration ---
solax_power: sensor.solax_pv_power_total
solax_today: sensor.solax_today_s_solar_energy
solax_week: sensor.solax_this_week_solar_energy
solax_month: sensor.solax_this_month_solar_energy
solax_year: sensor.solax_this_year_solar_energy

# --- Octopus Electricity & Grid ---
octopus_electric_power: sensor.octopus_home_mini_current_electricity_power
octopus_export_power: sensor.solax_feed_in_power
octopus_rate: sensor.octopus_energy_electricity_current_rate
octopus_monthly_spend: sensor.octopus_energy_electricity_current_month_cost
octopus_electric_30min: sensor.octopus_home_mini_electricity_30min
octopus_electric_day: sensor.octopus_energy_electricity_day
octopus_electric_week: sensor.octopus_energy_electricity_week
octopus_electric_month: sensor.octopus_energy_electricity_month

# --- Octopus Gas & Boiler ---
boiler_status: sensor.boiler_status
octopus_gas_30min: sensor.octopus_home_mini_gas_30min
octopus_gas_day: sensor.octopus_energy_gas_day
octopus_gas_week: sensor.octopus_energy_gas_week
octopus_gas_month: sensor.octopus_energy_gas_month
octopus_gas_rate: sensor.octopus_energy_gas_current_rate
octopus_gas_spend: sensor.octopus_energy_gas_current_month_cost

# --- myenergi Zappi & Peugeot e-2008 ---
myenergi_power: sensor.myenergi_zappi_power
myenergi_energy: sensor.myenergi_zappi_charge_added_session
peugeot_battery: sensor.e2008_battery_level
peugeot_range: sensor.e2008_battery_range
```

> [!NOTE]
> If any of your sensor entity IDs differ from the defaults, you can change them directly in the YAML or using the visual card editor in Home Assistant! If an entity is not yet available, the card automatically uses smooth fallback demo values without throwing errors.

---

## 🏗️ 3D Model Specifications (Taylor Wimpey Blair TK)

The 3D model `Taylor_Wimpey_Blair.glb` is scaled directly from the official Taylor Wimpey West Scotland architectural drawings (`BLR - 4 TK/02.01`) configured as the **Left-Hand Semi-Detached**:
- **Solax PV Array:** 5-panel array on rear pitch (3 top, 2 bottom with empty 6th position) with weatherproof IP66 isolator, roof cowl, and loft conduit drop down party wall into entrance meter cupboard.
- **Service Cupboard & Meter:** Ground floor entrance hall cupboard housing smart meter with 25mm tails, consumer unit, and Solax inverter unit.
- **Utility Pylon:** Roadside wooden pole with cross-arm, bell insulators, and catenary ABC service drop to house corner.
- **Kitchen Combi Boiler & LPG Gas Tank:** Boiler mounted on gable counter wall with copper manifold, through-wall sleeve, and yellow external pipework to bulk LPG vessel on concrete plinth in side garden.
- **myenergi Zappi Charger & Peugeot e-2008:** Vertigo Blue Peugeot e-2008 reversed into driveway with open charging port and heavy-duty catenary charging cable plugged into wallbox.
- **Landscaped Grounds:** Front, side, and rear gardens with featherboard fencing, patio, trees, and hedges.

---

## 🛠️ Development & Building

```bash
# Install dependencies
npm install

# Rebuild standalone bundle
npm run build

# Start live file watcher
npm run dev
```

---

## 📄 License
MIT © Aaron Watt
