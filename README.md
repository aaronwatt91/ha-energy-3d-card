# 🏡 Home Energy 3D Monitor for Home Assistant
### Interactive 3D Digital Twin with Solax Solar, Octopus Energy, myenergi Zappi & Peugeot e-2008

[![Home Assistant Add-on](https://img.shields.io/badge/Home%20Assistant-Add--on-blue.svg)](https://www.home-assistant.io/addons/)
[![HACS Custom](https://img.shields.io/badge/HACS-Custom%20Card-orange.svg)](https://github.com/hacs/integration)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black.svg)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive 3D Home Energy Monitor for Home Assistant that you can install directly by pointing at this repository.

It supports:
1. **Home Assistant Add-on App:** One-click install from the Home Assistant Add-on Store with live sidebar integration.
2. **HACS Custom Repository:** One-click install as a Lovelace frontend card in HACS.

---

## ⚡ 1-Click Install Options

### Option A: Home Assistant Add-on App (In Sidebar)

1. In Home Assistant, navigate to **Settings > Add-ons > Add-on Store**.
2. Click the **3 dots** (top-right corner) and select **Repositories**.
3. Paste this repository URL and click **Add**:
   ```text
   https://github.com/aaronwatt91/ha-energy-3d-card
   ```
4. Scroll or search for **Home Energy 3D** in the store.
5. Click **Install**.
6. Toggle **Show in sidebar** and click **Start**.
7. Open **Home Energy 3D** in your sidebar! It will automatically connect to your live Home Assistant entities.

---

### Option B: HACS Custom Repository (Lovelace Card)

1. In Home Assistant, open **HACS > Frontend**.
2. Click the **3 dots** (top-right corner) and choose **Custom repositories**.
3. Add:
   - **Repository:** `https://github.com/aaronwatt91/ha-energy-3d-card`
   - **Category:** `Dashboard` (or `Lovelace`)
4. Click **Add**, find **Home Energy 3D Card**, and click **Download**.
5. Add the card to your dashboard using the YAML config below or the visual card editor!

---

## ⚙️ Lovelace Dashboard Card Configuration (YAML)

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
> The card automatically falls back to online CDN / repository assets if the local model is not yet copied, ensuring it loads seamlessly right after installation.

---

## ✨ Key Features

- **☀️ Solax Solar Integration:**
  - Live PV generation (`kW`) dynamically driving panel luminescence and particle speed.
  - Animated DC cabling flowing down from the rear 5-panel array through the roof cowl and party wall into the entrance meter cupboard.
  - Energy generation tracking: **Today**, **This Week**, **This Month**, and **This Year** (`kWh`).

- **⚡ Octopus Energy & Grid Monitoring:**
  - Real-time electricity import and export tracking (`kW`).
  - Animated service drop cable from roadside utility pylon:
    - **Importing:** Electric cyan/blue pulses flowing down into the smart meter.
    - **Exporting:** Vivid solar emerald green pulses flowing backwards into the grid.
  - Dynamic tariff recording (**p/kWh**) for Agile, Tracker, Go, and Fixed tariffs.
  - **Month-to-date electricity spend (£)**.
  - **30-minute interval readings** (Octopus Home Mini), plus **Day**, **Week**, and **Month** electricity totals.

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

## 💻 Local Preview on Mac

```bash
cd "/Users/aaronwatt/Documents/ha solax"
npm run build
npm run serve
```
Open **`http://localhost:8080/index.html`** in Safari or Chrome.

---

## 📄 License
MIT © Aaron Watt
