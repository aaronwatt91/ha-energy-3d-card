import * as THREE from 'three';

/**
 * EnergyFlowSystem
 * Generates high-visibility energy pulse streams that:
 * 1. Stick directly to the physical cable/pipe centerlines.
 * 2. Are larger and brighter with luminous cores.
 * 3. SHINE CLEARLY THROUGH WALLS (depthTest: false, renderOrder: 999) when running internally.
 * 4. Move strictly in the physical direction of power flow.
 * 5. Freeze completely (0 speed) when generation or consumption is 0.
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

      // 2. Grid Overhead Service: Pylon distribution box -> Catenary sag -> House bracket -> PVC drop -> Smart meter
      grid: new THREE.CatmullRomCurve3([
        new THREE.Vector3(6.40, 6.950, 6.950), // Overhead pylon distribution cutout box
        new THREE.Vector3(6.12, 6.250, 5.200), // ABC cable sagging curve
        new THREE.Vector3(5.86, 5.525, 3.465), // Lowest sag point over driveway
        new THREE.Vector3(5.55, 5.150, 1.700), // Rising catenary towards house
        new THREE.Vector3(5.32, 5.000, -0.02), // House wall anchor bracket
        new THREE.Vector3(5.32, 3.000, 0.040), // Vertical external PVC conduit
        new THREE.Vector3(5.32, 1.100, 0.040), // 90-degree through-wall inspection elbow
        new THREE.Vector3(5.26, 1.100, -0.55), // Entering entrance cupboard (INTERNAL)
        new THREE.Vector3(5.27, 0.950, -0.60)  // 100A main service cutout fuse & smart meter (INTERNAL)
      ]),

      // 3. EV Charging Cable: Zappi wallbox -> catenary loop -> Peugeot e-2008 socket
      ev: new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.19, 1.120, 0.050), // myenergi Zappi Wallbox outlet
        new THREE.Vector3(4.98, 0.920, 0.250), // Cable dropping from wallbox
        new THREE.Vector3(4.77, 0.760, 0.438), // Drooping catenary curve
        new THREE.Vector3(4.35, 0.590, 0.825), // Lowest loop near driveway ground
        new THREE.Vector3(3.93, 0.610, 1.213), // Rising curve towards car
        new THREE.Vector3(3.68, 0.720, 1.450), // Entering charging port vicinity
        new THREE.Vector3(3.51, 0.820, 1.600)  // Peugeot e-2008 charging socket
      ]),

      // 4. Gas Pipe: LPG Storage Tank regulator -> plinth -> gable wall riser -> wall sleeve -> combi boiler
      gas: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.30, 1.050, -8.00), // LPG bulk tank regulator valve
        new THREE.Vector3(-1.30, 0.220, -8.00), // Vertical drop to concrete plinth
        new THREE.Vector3(-0.65, 0.220, -8.15), // Running along garden ground
        new THREE.Vector3(-0.08, 0.220, -8.32), // Reaching external gable wall base
        new THREE.Vector3(-0.08, 1.050, -8.32), // Rising up gable wall through emergency tap
        new THREE.Vector3(0.301, 1.050, -8.32), // Passing through wall sleeve into kitchen (INTERNAL)
        new THREE.Vector3(0.601, 1.050, -8.32), // Under counter to boiler position (INTERNAL)
        new THREE.Vector3(0.601, 1.350, -8.32)  // Combi boiler copper gas manifold (INTERNAL)
      ])
    };

    this.initStreams();
  }

  initStreams() {
    this.streamDefs = {
      solar: {
        curve: this.paths.solar,
        color: new THREE.Color(0xffb700), // Bright golden solar
        baseSpeed: 0.35,
        size: 0.058,                      // Prominent, highly visible size
        flowDirection: 1
      },
      grid: {
        curve: this.paths.grid,
        color: new THREE.Color(0x00d2ff), // Electric cyan
        baseSpeed: 0.30,
        size: 0.065,                      // Prominent overhead grid size
        flowDirection: 1
      },
      ev: {
        curve: this.paths.ev,
        color: new THREE.Color(0x00f59b), // Vibrant EV turquoise / green
        baseSpeed: 0.40,
        size: 0.060,                      // Prominent EV cable size
        flowDirection: 1
      },
      gas: {
        curve: this.paths.gas,
        color: new THREE.Color(0xff6d00), // Warm flame amber
        baseSpeed: 0.25,
        size: 0.052,                      // Prominent gas pipe size
        flowDirection: 1
      }
    };

    const sphereGeo = new THREE.SphereGeometry(1, 12, 12);

    for (const [key, def] of Object.entries(this.streamDefs)) {
      // Material with depthTest: false & renderOrder: 999
      // This ensures energy pulses shine directly through walls when running internally!
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
      instancedMesh.renderOrder = 999; // Render on top of walls

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
        offset: 0,
        isFrozen: false
      });
    }

    // Glowing core backbone directly along cables - also visible through walls!
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
      line.renderOrder = 998; // Just below particles
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
   * Update animation with strict freeze condition when power is 0,
   * prominent particle scaling, and physical direction matching live flow
   */
  update(delta, energyData) {
    if (!energyData) return;

    const solarKw = Number(energyData.solar?.power_kw || 0);
    const gridKw = Number(energyData.octopus_electric?.power_kw || 0);
    const evKw = Number(energyData.ev?.charger_power_kw || 0);
    const isCharging = Boolean(energyData.ev?.is_charging && evKw > 0.08);
    const gasKw = Number(energyData.octopus_gas?.power_kw || 0);
    const gasActive = Boolean((energyData.octopus_gas?.is_active || gasKw > 0.05) && energyData.octopus_gas?.boiler_status !== 'off');

    for (const stream of this.streams) {
      const { id, mesh, def, dummy } = stream;
      let isMoving = true;
      let speedFactor = 1.0;
      let direction = 1;

      if (id === 'solar') {
        // IF NO GENERATION (solarKw <= 0.04), FROZEN NOT MOVING!
        if (solarKw <= 0.04) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(solarKw / 2.0, 0.3), 3.0);
          direction = 1; // Always panels -> meter box
        }
      } else if (id === 'grid') {
        // IF NO GRID POWER (|gridKw| <= 0.03), FROZEN NOT MOVING!
        if (Math.abs(gridKw) <= 0.03) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(Math.abs(gridKw) / 1.5, 0.3), 3.0);
          const isExporting = gridKw < 0 || Boolean(energyData.octopus_electric?.is_exporting);

          if (isExporting) {
            // EXPORTING: Energy moves from meter box UP along cable to pylon/grid!
            direction = -1;
            const green = new THREE.Color(0x00ff88);
            mesh.material.color.lerp(green, 0.12);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(green, 0.12);
          } else {
            // IMPORTING: Energy moves from utility pylon DOWN along cable into meter box!
            direction = 1;
            const cyan = new THREE.Color(0x00d2ff);
            mesh.material.color.lerp(cyan, 0.12);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(cyan, 0.12);
          }
        }
      } else if (id === 'ev') {
        // IF NOT CHARGING, FROZEN NOT MOVING!
        if (!isCharging) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(evKw / 4.0, 0.35), 3.0);
          direction = 1; // Always wallbox -> Peugeot battery port
        }
      } else if (id === 'gas') {
        // IF BOILER IDLE, FROZEN NOT MOVING!
        if (!gasActive) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(gasKw / 1.0, 0.3), 2.5);
          direction = 1; // Always tank -> combi boiler
        }
      }

      // If FROZEN: keep particles visible but completely still (0 speed) and dimmed
      if (!isMoving) {
        mesh.material.opacity = 0.22;
        if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.12;
        continue;
      }

      // If ACTIVE: prominent bright glowing flow
      mesh.material.opacity = 0.95;
      if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.50;

      // Animate offset along curve
      stream.offset += delta * def.baseSpeed * speedFactor * direction;
      if (stream.offset > 1.0) stream.offset -= 1.0;
      if (stream.offset < 0.0) stream.offset += 1.0;

      const count = this.particleCountPerStream;
      for (let i = 0; i < count; i++) {
        let t = (i / count + stream.offset) % 1.0;
        if (t < 0) t += 1.0;

        const pt = def.curve.getPointAt(t);
        dummy.position.copy(pt);

        // Breathing pulse variation to make the flow look organic and energetic
        const scalePhase = Math.sin(t * Math.PI * 4 + delta * 5);
        dummy.scale.setScalar(def.size * (0.88 + 0.28 * scalePhase));

        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }

    // Dynamic mesh emissive glows
    this.updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive);
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
