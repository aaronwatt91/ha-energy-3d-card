import * as THREE from 'three';

/**
 * EnergyFlowSystem
 * Generates high-visibility energy pulse streams that:
 * 1. Attach directly and precisely to the physical cable and pipe geometries.
 * 2. EV energy flows strictly towards the car, with speed directly proportional to power,
 *    getting slower as energy drops and stopping at 0 kW.
 * 3. Grid energy flows forwards (pylon -> meter) when importing, and backwards (meter -> pylon) when exporting.
 *    The more energy in either direction, the faster it flows.
 * 4. Solar energy flows from roof panels to meter box, getting slower as energy drops and stopping at 0 kW.
 * 5. Internal cables shine clearly through walls with depthTest: false and high renderOrder.
 */
export class EnergyFlowSystem {
  constructor(scene) {
    this.scene = scene;
    this.streams = [];
    this.meshes = {};
    this.particleCountPerStream = 48;

    // Exact centerline 3D splines matching the geometry of Taylor Wimpey Blair model
    this.paths = {
      // 1. Solar PV: Underside of panels -> isolator -> cowl -> loft -> party wall -> inverter -> meter
      solar: new THREE.CatmullRomCurve3([
        new THREE.Vector3(2.50, 6.454, -6.20), // Solar string cable under panels
        new THREE.Vector3(4.10, 6.534, -6.20), // DC isolator switch box
        new THREE.Vector3(4.15, 6.709, -5.80), // Roof penetration cowl
        new THREE.Vector3(4.15, 5.250, -5.80), // Loft tie level (INTERNAL)
        new THREE.Vector3(5.26, 5.250, -1.10), // Along roof truss to party wall (INTERNAL)
        new THREE.Vector3(5.26, 2.450, -1.10), // Down party wall chase (INTERNAL)
        new THREE.Vector3(5.28, 2.020, -0.85), // Solax generation inverter in cupboard (INTERNAL)
        new THREE.Vector3(5.28, 1.650, -0.95)  // Main consumer unit / meter (INTERNAL)
      ]),

      // 2. Grid Overhead Service: Pylon distribution box (t=0) -> Catenary sag -> House bracket -> PVC drop -> Smart meter (t=1)
      grid: new THREE.CatmullRomCurve3([
        new THREE.Vector3(6.40, 6.950, 6.950), // Overhead pylon distribution cutout box (t = 0)
        new THREE.Vector3(6.12, 6.250, 5.200), // ABC cable sagging curve
        new THREE.Vector3(5.86, 5.525, 3.465), // Lowest sag point over driveway
        new THREE.Vector3(5.55, 5.150, 1.700), // Rising catenary towards house
        new THREE.Vector3(5.32, 5.000, -0.02), // House wall anchor bracket
        new THREE.Vector3(5.32, 3.000, 0.040), // Vertical external PVC conduit
        new THREE.Vector3(5.32, 1.100, 0.040), // 90-degree through-wall inspection elbow
        new THREE.Vector3(5.26, 1.100, -0.55), // Entering entrance cupboard (INTERNAL)
        new THREE.Vector3(5.27, 0.950, -0.60)  // 100A main service cutout fuse & smart meter (INTERNAL, t = 1)
      ]),

      // 3. EV Charging Cable: Exact 17-point catenary curve from Zappi wallbox directly into Peugeot e-2008 socket
      ev: new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.190, 1.120, 0.050), // Wallbox outlet (t = 0)
        new THREE.Vector3(5.195, 1.009, 0.150),
        new THREE.Vector3(5.200, 0.910, 0.250),
        new THREE.Vector3(5.205, 0.823, 0.350),
        new THREE.Vector3(5.210, 0.748, 0.450),
        new THREE.Vector3(5.215, 0.684, 0.550),
        new THREE.Vector3(5.220, 0.633, 0.650),
        new THREE.Vector3(5.225, 0.593, 0.750),
        new THREE.Vector3(5.230, 0.565, 0.850),
        new THREE.Vector3(5.235, 0.549, 0.950), // Lowest catenary loop
        new THREE.Vector3(5.240, 0.545, 1.050),
        new THREE.Vector3(5.245, 0.553, 1.150),
        new THREE.Vector3(5.250, 0.573, 1.250),
        new THREE.Vector3(5.255, 0.604, 1.350),
        new THREE.Vector3(5.260, 0.648, 1.450),
        new THREE.Vector3(5.265, 0.703, 1.550),
        new THREE.Vector3(5.270, 0.770, 1.650)  // Peugeot charging port (t = 1)
      ]),

      // 4. Gas Pipe: LPG Storage Tank regulator (t=0) -> plinth -> gable wall riser -> wall sleeve -> combi boiler (t=1)
      gas: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.30, 1.050, -8.00), // LPG bulk tank regulator valve (t = 0)
        new THREE.Vector3(-1.30, 0.220, -8.00), // Vertical drop to concrete plinth
        new THREE.Vector3(-0.65, 0.220, -8.15), // Running along garden ground
        new THREE.Vector3(-0.08, 0.220, -8.32), // Reaching external gable wall base
        new THREE.Vector3(-0.08, 1.050, -8.32), // Rising up gable wall through emergency tap
        new THREE.Vector3(0.301, 1.050, -8.32), // Passing through wall sleeve into kitchen (INTERNAL)
        new THREE.Vector3(0.601, 1.050, -8.32), // Under counter to boiler position (INTERNAL)
        new THREE.Vector3(0.601, 1.350, -8.32)  // Combi boiler copper gas manifold (INTERNAL, t = 1)
      ])
    };

    this.initStreams();
  }

  initStreams() {
    this.streamDefs = {
      solar: {
        curve: this.paths.solar,
        color: new THREE.Color(0xffb700), // Golden solar
        baseSpeed: 0.40,
        size: 0.058
      },
      grid: {
        curve: this.paths.grid,
        color: new THREE.Color(0x00d2ff), // Electric cyan (import)
        baseSpeed: 0.38,
        size: 0.065
      },
      ev: {
        curve: this.paths.ev,
        color: new THREE.Color(0x00f59b), // Vibrant EV turquoise / green
        baseSpeed: 0.44,
        size: 0.060
      },
      gas: {
        curve: this.paths.gas,
        color: new THREE.Color(0xff6d00), // Warm flame amber
        baseSpeed: 0.32,
        size: 0.052
      }
    };

    const sphereGeo = new THREE.SphereGeometry(1, 12, 12);

    for (const [key, def] of Object.entries(this.streamDefs)) {
      // Glow balls with depthTest: false to shine through walls
      const mat = new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.95,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const count = this.particleCountPerStream;
      const instancedMesh = new THREE.InstancedMesh(sphereGeo, mat, count);
      instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      instancedMesh.renderOrder = 999;

      const dummy = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        const t = i / count;
        const pt = def.curve.getPointAt(t);
        dummy.position.copy(pt);
        dummy.scale.setScalar(def.size);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      instancedMesh.instanceMatrix.needsUpdate = true;

      this.scene.add(instancedMesh);
      this.streams.push({
        id: key,
        mesh: instancedMesh,
        def,
        dummy,
        offset: 0
      });
    }

    // Glowing core line along cables - also shines through walls
    this.glowLines = {};
    for (const [key, def] of Object.entries(this.streamDefs)) {
      const points = def.curve.getPoints(100);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.50,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geo, mat);
      line.renderOrder = 998;
      this.scene.add(line);
      this.glowLines[key] = line;
    }
  }

  bindMeshes(model) {
    model.traverse((child) => {
      if (!child.isMesh) return;
      const name = child.name;

      if (name.includes('Roof_Solar_Panels')) {
        this.meshes.solarPanels = child;
        child.material = child.material.clone();
      } else if (name.includes('Solar_PV_Cabling')) {
        this.meshes.solarCable = child;
        child.material = child.material.clone();
      } else if (name.includes('EV_Charger')) {
        this.meshes.evCharger = child;
        child.material = child.material.clone();
      } else if (name.includes('EV_Charging_Cable')) {
        this.meshes.evCable = child;
        child.material = child.material.clone();
      } else if (name.includes('Car_Peugeot_e2008_Body')) {
        this.meshes.peugeotBody = child;
      } else if (name.includes('Car_Peugeot_e2008_Lights')) {
        this.meshes.peugeotLights = child;
        child.material = child.material.clone();
      } else if (name.includes('Car_Peugeot_e2008_Taillights')) {
        this.meshes.peugeotTaillights = child;
        child.material = child.material.clone();
      } else if (name.includes('Kitchen_Combi_Boiler')) {
        this.meshes.boiler = child;
        child.material = child.material.clone();
      } else if (name.includes('Kitchen_Boiler_Pipes') || name.includes('Gas_Supply_Pipes')) {
        if (!this.meshes.gasPipes) this.meshes.gasPipes = [];
        child.material = child.material.clone();
        this.meshes.gasPipes.push(child);
      } else if (name.includes('Entrance_Meter_Box') || name.includes('Entrance_Meter_Fittings')) {
        if (!this.meshes.meterBox) this.meshes.meterBox = [];
        child.material = child.material.clone();
        this.meshes.meterBox.push(child);
      }
    });
  }

  /**
   * Update animation loop:
   * - Solar: Always flows roof -> meter box. Gets slower as energy drops, completely stops at 0 kW.
   * - Grid:
   *   - Importing: Flows pylon -> meter box (cyan). Faster with more kW.
   *   - Exporting: Flows meter box -> pylon (green backwards). Faster with more kW.
   *   - 0 kW: Completely stopped.
   * - EV: Flows strictly towards the car, gets slower as energy drops, completely stops at 0 kW.
   * - Gas: Flows towards boiler, gets slower and stops when idle.
   */
  update(delta, energyData) {
    if (!energyData) return;

    // Normalize power values (auto-detect Watts > 50 vs kW)
    let rawSolar = Number(energyData.solar?.power_kw || 0);
    const solarKw = rawSolar > 50 ? rawSolar / 1000 : rawSolar;

    let rawGrid = Number(energyData.octopus_electric?.power_kw || 0);
    const gridKw = Math.abs(rawGrid) > 50 ? rawGrid / 1000 : rawGrid;

    let rawEv = Number(energyData.ev?.charger_power_kw || 0);
    const evKw = rawEv > 50 ? rawEv / 1000 : rawEv;

    let rawGas = Number(energyData.octopus_gas?.power_kw || 0);
    const gasKw = rawGas > 50 ? rawGas / 1000 : rawGas;

    const gasActive = Boolean((energyData.octopus_gas?.is_active || gasKw > 0.05) && energyData.octopus_gas?.boiler_status !== 'off');

    for (const stream of this.streams) {
      const { id, mesh, def, dummy } = stream;
      let speed = 0;
      let direction = 1; // 1 = forward along curve, -1 = reverse

      if (id === 'solar') {
        // Solar: Always goes roof -> meter. Slower as kW drops, stops at 0 kW.
        if (solarKw > 0.02) {
          const ratio = Math.min(solarKw / 4.0, 2.5);
          // Speed scales directly with kW: slower with less energy, faster with more
          speed = Math.max(ratio * def.baseSpeed, 0.04);
          direction = 1; // Always panels -> meter box
        } else {
          speed = 0; // Frozen stopped!
        }
      } else if (id === 'grid') {
        // Grid:
        // Exporting: goes backwards towards grid (direction = -1), faster with more export
        // Importing: goes inwards towards meter (direction = 1), faster with more import
        const absGridKw = Math.abs(gridKw);
        const isExporting = gridKw < -0.02 || (Boolean(energyData.octopus_electric?.is_exporting) && absGridKw > 0.02);

        if (absGridKw > 0.02) {
          const ratio = Math.min(absGridKw / 3.5, 2.5);
          speed = Math.max(ratio * def.baseSpeed, 0.04);

          if (isExporting) {
            direction = -1; // Goes backwards towards the grid!
            const green = new THREE.Color(0x00ff88);
            mesh.material.color.lerp(green, 0.2);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(green, 0.2);
          } else {
            direction = 1; // Flows from pylon into meter box
            const cyan = new THREE.Color(0x00d2ff);
            mesh.material.color.lerp(cyan, 0.2);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(cyan, 0.2);
          }
        } else {
          speed = 0; // Frozen stopped!
        }
      } else if (id === 'ev') {
        // EV: Flows strictly towards the car (direction = 1).
        // Slower as energy drops, completely stops at 0 kW!
        if (evKw > 0.04) {
          const ratio = Math.min(evKw / 7.2, 2.5);
          speed = Math.max(ratio * def.baseSpeed, 0.04);
          direction = 1; // Always towards the car
        } else {
          speed = 0; // Frozen stopped!
        }
      } else if (id === 'gas') {
        // Gas: Flows towards boiler, stops when idle
        if (gasActive && gasKw > 0.05) {
          const ratio = Math.min(gasKw / 2.0, 2.5);
          speed = Math.max(ratio * def.baseSpeed, 0.04);
          direction = 1; // Always towards boiler
        } else {
          speed = 0; // Frozen stopped!
        }
      }

      // If STOPPED (speed === 0): keep balls visible but completely still & dimmed
      if (speed === 0) {
        mesh.material.opacity = 0.20;
        if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.12;
        continue;
      }

      // If MOVING: bright luminous flow
      mesh.material.opacity = 0.95;
      if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.50;

      // Update offset along curve with exact direction & speed
      stream.offset += delta * speed * direction;
      if (stream.offset > 1.0) stream.offset -= 1.0;
      if (stream.offset < 0.0) stream.offset += 1.0;

      const count = this.particleCountPerStream;
      for (let i = 0; i < count; i++) {
        let t = (i / count + stream.offset) % 1.0;
        if (t < 0) t += 1.0;

        const pt = def.curve.getPointAt(t);
        dummy.position.copy(pt);

        // Breathing pulse variation
        const scalePhase = Math.sin(t * Math.PI * 4 + delta * 5);
        dummy.scale.setScalar(def.size * (0.90 + 0.25 * scalePhase));

        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }

    // Dynamic mesh emissive glows
    this.updateMeshGlows(solarKw, gridKw, evKw, evKw > 0.04, gasActive);
  }

  updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive) {
    if (this.meshes.solarPanels?.material) {
      const mat = this.meshes.solarPanels.material;
      mat.emissive = mat.emissive || new THREE.Color();
      const targetIntensity = solarKw > 0.05 ? Math.min(solarKw / 2.2, 1.3) : 0.0;
      mat.emissive.setHex(0xffb700);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity || 0, targetIntensity, 0.08);
    }

    if (this.meshes.solarCable?.material) {
      const mat = this.meshes.solarCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0xffaa00);
      mat.emissiveIntensity = solarKw > 0.05 ? 0.8 : 0.0;
    }

    if (this.meshes.evCable?.material) {
      const mat = this.meshes.evCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      mat.emissiveIntensity = isCharging ? 0.9 : 0.0;
    }

    if (this.meshes.peugeotLights?.material) {
      const mat = this.meshes.peugeotLights.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      const pulse = isCharging ? (Math.sin(Date.now() * 0.003) * 0.35 + 0.65) : 0.0;
      mat.emissiveIntensity = pulse;
    }

    if (this.meshes.boiler?.material) {
      const mat = this.meshes.boiler.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0xff5500);
      mat.emissiveIntensity = gasActive ? 0.8 : 0.0;
    }

    if (this.meshes.gasPipes) {
      for (const p of this.meshes.gasPipes) {
        if (p.material) {
          p.material.emissive = p.material.emissive || new THREE.Color();
          p.material.emissive.setHex(0xff7700);
          p.material.emissiveIntensity = gasActive ? 0.6 : 0.0;
        }
      }
    }
  }
}
