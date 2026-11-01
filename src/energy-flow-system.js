import * as THREE from 'three';

/**
 * EnergyFlowSystem
 * Generates energy pulse streams that stick directly to the physical cable/pipe meshes
 * and move strictly in the physical direction of power flow, freezing completely when power is 0.
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
        new THREE.Vector3(4.15, 5.250, -5.80), // Loft tie level
        new THREE.Vector3(5.26, 5.250, -1.10), // Along roof truss to party wall
        new THREE.Vector3(5.26, 2.450, -1.10), // Down party wall chase
        new THREE.Vector3(5.28, 2.020, -0.85), // Solax generation inverter
        new THREE.Vector3(5.28, 1.650, -0.95)  // Main consumer unit / meter
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
        new THREE.Vector3(5.26, 1.100, -0.55), // Passing into entrance cupboard
        new THREE.Vector3(5.27, 0.950, -0.60)  // 100A main service cutout fuse & smart meter
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
        new THREE.Vector3(0.301, 1.050, -8.32), // Passing through wall sleeve into kitchen
        new THREE.Vector3(0.601, 1.050, -8.32), // Under counter to boiler position
        new THREE.Vector3(0.601, 1.350, -8.32)  // Combi boiler copper gas manifold
      ])
    };

    this.initStreams();
  }

  initStreams() {
    this.streamDefs = {
      solar: {
        curve: this.paths.solar,
        color: new THREE.Color(0xffb700), // Warm solar gold
        baseSpeed: 0.35,
        size: 0.024,                      // Snug to cable diameter
        flowDirection: 1                  // Always panels -> meter box
      },
      grid: {
        curve: this.paths.grid,
        color: new THREE.Color(0x00d2ff), // Electric cyan
        baseSpeed: 0.30,
        size: 0.028,                      // Heavy overhead ABC cable diameter
        flowDirection: 1                  // 1 = import (pylon -> meter), -1 = export (meter -> pylon)
      },
      ev: {
        curve: this.paths.ev,
        color: new THREE.Color(0x00f59b), // Vibrant EV green / turquoise
        baseSpeed: 0.40,
        size: 0.025,                      // EV heavy rubber cable diameter
        flowDirection: 1                  // Always charger -> car
      },
      gas: {
        curve: this.paths.gas,
        color: new THREE.Color(0xff6d00), // Flame orange
        baseSpeed: 0.25,
        size: 0.022,                      // Yellow gas pipe diameter
        flowDirection: 1                  // Always tank -> boiler
      }
    };

    const sphereGeo = new THREE.SphereGeometry(1, 10, 10);

    for (const [key, def] of Object.entries(this.streamDefs)) {
      const mat = new THREE.MeshBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending
      });

      const count = this.particleCountPerStream;
      const instancedMesh = new THREE.InstancedMesh(sphereGeo, mat, count);
      instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

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

    // Glowing core backbone directly inside the cables
    this.glowLines = {};
    for (const [key, def] of Object.entries(this.streamDefs)) {
      const points = def.curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.35,
        linewidth: 2,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geo, mat);
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
   * and physical direction matching live flow
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
      let direction = 1; // 1 = forward along curve, -1 = reverse

      if (id === 'solar') {
        // Solar: IF NO GENERATION (solarKw <= 0.04), FROZEN NOT MOVING!
        if (solarKw <= 0.04) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(solarKw / 2.2, 0.25), 3.0);
          direction = 1; // Always panels -> meter box
        }
      } else if (id === 'grid') {
        // Grid: IF NO GRID POWER (|gridKw| <= 0.03), FROZEN NOT MOVING!
        if (Math.abs(gridKw) <= 0.03) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(Math.abs(gridKw) / 1.5, 0.25), 3.0);
          const isExporting = gridKw < 0 || Boolean(energyData.octopus_electric?.is_exporting);

          if (isExporting) {
            // EXPORTING: Energy moves from meter box UP along cable to pylon/grid!
            direction = -1;
            const green = new THREE.Color(0x00ff88);
            mesh.material.color.lerp(green, 0.1);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(green, 0.1);
          } else {
            // IMPORTING: Energy moves from utility pylon DOWN along cable into meter box!
            direction = 1;
            const cyan = new THREE.Color(0x00d2ff);
            mesh.material.color.lerp(cyan, 0.1);
            if (this.glowLines[id]) this.glowLines[id].material.color.lerp(cyan, 0.1);
          }
        }
      } else if (id === 'ev') {
        // EV: IF NOT CHARGING (evKw <= 0.08), FROZEN NOT MOVING!
        if (!isCharging) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(evKw / 4.5, 0.3), 3.0);
          direction = 1; // Always wallbox -> Peugeot battery port
        }
      } else if (id === 'gas') {
        // Gas: IF BOILER IDLE (not active), FROZEN NOT MOVING!
        if (!gasActive) {
          isMoving = false;
        } else {
          speedFactor = Math.min(Math.max(gasKw / 1.0, 0.3), 2.5);
          direction = 1; // Always tank -> combi boiler
        }
      }

      // If FROZEN:
      // Keep particles visible but completely still (frozen), with reduced dormant opacity
      if (!isMoving) {
        mesh.material.opacity = 0.20; // Dim dormant glow
        if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.10;
        // Do NOT update stream.offset - stays 100% frozen!
        continue;
      }

      // If ACTIVE:
      mesh.material.opacity = 0.95;
      if (this.glowLines[id]) this.glowLines[id].material.opacity = 0.45;

      // Animate offset along curve in the exact physical direction
      stream.offset += delta * def.baseSpeed * speedFactor * direction;
      if (stream.offset > 1.0) stream.offset -= 1.0;
      if (stream.offset < 0.0) stream.offset += 1.0;

      const count = this.particleCountPerStream;
      for (let i = 0; i < count; i++) {
        let t = (i / count + stream.offset) % 1.0;
        if (t < 0) t += 1.0;

        const pt = def.curve.getPointAt(t);
        dummy.position.copy(pt);

        // Gentle breathing pulse
        const scalePhase = Math.sin(t * Math.PI * 4 + delta * 4);
        dummy.scale.setScalar(def.size * (0.85 + 0.3 * scalePhase));

        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }

    // Dynamic mesh emissive glows
    this.updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive);
  }

  updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive) {
    // 1. Solar Panels & Cabling glow (frozen/off at 0 kW)
    if (this.meshes.solarPanels?.material) {
      const mat = this.meshes.solarPanels.material;
      mat.emissive = mat.emissive || new THREE.Color();
      const targetIntensity = solarKw > 0.05 ? Math.min(solarKw / 2.5, 1.2) : 0.0;
      mat.emissive.setHex(0xffb700);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity || 0, targetIntensity, 0.08);
    }

    if (this.meshes.solarCable?.material) {
      const mat = this.meshes.solarCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0xffaa00);
      mat.emissiveIntensity = solarKw > 0.05 ? 0.7 : 0.0;
    }

    // 2. EV Cable & Peugeot
    if (this.meshes.evCable?.material) {
      const mat = this.meshes.evCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      mat.emissiveIntensity = isCharging ? 0.85 : 0.0;
    }

    if (this.meshes.peugeotLights?.material) {
      const mat = this.meshes.peugeotLights.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      const pulse = isCharging ? (Math.sin(Date.now() * 0.003) * 0.3 + 0.7) : 0.0;
      mat.emissiveIntensity = pulse;
    }

    // 3. Combi Boiler & Gas Pipes
    if (this.meshes.boiler?.material) {
      const mat = this.meshes.boiler.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0xff5500);
      mat.emissiveIntensity = gasActive ? 0.75 : 0.0;
    }

    if (this.meshes.gasPipes) {
      for (const p of this.meshes.gasPipes) {
        if (p.material) {
          p.material.emissive = p.material.emissive || new THREE.Color();
          p.material.emissive.setHex(0xff7700);
          p.material.emissiveIntensity = gasActive ? 0.55 : 0.0;
        }
      }
    }
  }
}
