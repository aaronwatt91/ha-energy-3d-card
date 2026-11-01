import * as THREE from 'three';

/**
 * EnergyFlowSystem
 * Generates dynamic glowing pulse streams and cable animations
 * linking the 3D nodes (Solar, Meter, Grid Pylon, Gas Boiler, Peugeot EV).
 */
export class EnergyFlowSystem {
  constructor(scene) {
    this.scene = scene;
    this.streams = [];
    this.meshes = {};
    this.particleCountPerStream = 36;
    this.clock = new THREE.Clock();

    // Define 3D spline curves matching the exact geometry of Taylor Wimpey Blair model
    this.paths = {
      // 1. Solar PV Cable: Rear roof panels -> loft chase -> entrance meter box
      solar: new THREE.CatmullRomCurve3([
        new THREE.Vector3(2.80, 6.45, -6.80), // Solar array / DC isolator
        new THREE.Vector3(4.50, 5.20, -4.50), // Roof penetration cowl
        new THREE.Vector3(5.25, 3.80, -2.50), // Party wall conduit drop
        new THREE.Vector3(5.28, 2.45, -0.90), // Hall cupboard ceiling penetration
        new THREE.Vector3(5.28, 1.45, -0.85)  // Solax Inverter & Consumer Unit
      ]),

      // 2. Grid Overhead Service: Utility Pylon -> Catenary sag -> Wall bracket -> Meter
      grid: new THREE.CatmullRomCurve3([
        new THREE.Vector3(6.40, 7.20, 7.00),  // Overhead distribution pole insulator
        new THREE.Vector3(5.85, 5.70, 3.50),  // ABC aerial sag curve
        new THREE.Vector3(5.30, 5.00, 0.05),  // Wall anchor bracket
        new THREE.Vector3(5.28, 2.50, -0.15), // Vertical black PVC conduit drop
        new THREE.Vector3(5.28, 1.10, -0.85)  // Smart Meter & Cutout Fuse
      ]),

      // 3. EV Charging Cable: myenergi Zappi Wallbox -> catenary loop -> Peugeot e-2008 socket
      ev: new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.18, 1.25, 0.09),  // myenergi Zappi Wallbox socket
        new THREE.Vector3(4.70, 0.70, 0.50),  // Cable drooping curve
        new THREE.Vector3(4.10, 0.55, 1.00),  // Ground loop
        new THREE.Vector3(3.60, 0.72, 1.40),  // Rising curve towards car
        new THREE.Vector3(3.42, 0.88, 1.62)   // Peugeot charging port
      ]),

      // 4. Gas Pipe: LPG Storage Tank -> External Pipe -> Kitchen Combi Boiler
      gas: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.30, 0.65, -7.80), // LPG Tank regulator valve
        new THREE.Vector3(-0.85, 0.35, -8.10), // Plinth drop
        new THREE.Vector3(-0.35, 0.40, -8.20), // Gable wall riser
        new THREE.Vector3(0.30, 1.00, -8.25),  // Wall penetration sleeve
        new THREE.Vector3(0.45, 1.15, -8.32)   // Kitchen Combi Boiler manifold
      ])
    };

    this.initStreams();
  }

  /**
   * Create instanced particle streams along each path
   */
  initStreams() {
    this.streamDefs = {
      solar: {
        curve: this.paths.solar,
        color: new THREE.Color(0xffb700), // Golden solar
        baseSpeed: 0.25,
        size: 0.065,
        active: true
      },
      grid: {
        curve: this.paths.grid,
        color: new THREE.Color(0x00e5ff), // Electric cyan
        baseSpeed: 0.20,
        size: 0.070,
        active: true,
        reverse: false
      },
      ev: {
        curve: this.paths.ev,
        color: new THREE.Color(0x00f59b), // Vibrant EV green / turquoise
        baseSpeed: 0.35,
        size: 0.060,
        active: true
      },
      gas: {
        curve: this.paths.gas,
        color: new THREE.Color(0xff6d00), // Flame orange
        baseSpeed: 0.18,
        size: 0.060,
        active: true
      }
    };

    const sphereGeo = new THREE.SphereGeometry(1, 12, 12);

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

      // Initialize positions evenly distributed along curve
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

    // Add glowing guide lines along cables
    this.initGlowLines();
  }

  /**
   * Subtle glowing neon backbone lines along cables
   */
  initGlowLines() {
    this.glowLines = {};
    for (const [key, def] of Object.entries(this.streamDefs)) {
      const points = def.curve.getPoints(50);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.45,
        linewidth: 2,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geo, mat);
      this.scene.add(line);
      this.glowLines[key] = line;
    }
  }

  /**
   * Bind 3D meshes from the loaded GLB model to allow dynamic material glow
   */
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
      } else if (name.includes('Utility_Pylon_Grid')) {
        this.meshes.pylon = child;
      }
    });
  }

  /**
   * Update animation on each frame
   */
  update(delta, energyData) {
    if (!energyData) return;

    const solarKw = Number(energyData.solar?.power_kw || 0);
    const gridKw = Number(energyData.octopus_electric?.power_kw || 0);
    const evKw = Number(energyData.ev?.charger_power_kw || 0);
    const isCharging = Boolean(energyData.ev?.is_charging && evKw > 0.1);
    const gasKw = Number(energyData.octopus_gas?.power_kw || 0);
    const gasActive = Boolean(energyData.octopus_gas?.is_active || gasKw > 0.1);

    // Update each stream
    for (const stream of this.streams) {
      const { id, mesh, def, dummy } = stream;
      let active = true;
      let speedFactor = 1.0;
      let reverse = false;

      if (id === 'solar') {
        active = solarKw > 0.05;
        speedFactor = Math.min(Math.max(solarKw / 2.5, 0.2), 3.0);
      } else if (id === 'grid') {
        active = Math.abs(gridKw) > 0.05;
        speedFactor = Math.min(Math.max(Math.abs(gridKw) / 1.5, 0.2), 3.0);
        // If gridKw < 0 or is_exporting is true, export to grid (reverse pulse direction towards pylon!)
        const isExporting = gridKw < 0 || Boolean(energyData.octopus_electric?.is_exporting);
        reverse = isExporting;

        // Change color: cyan for import, bright solar green for export!
        const targetColor = isExporting ? new THREE.Color(0x00ff88) : new THREE.Color(0x00e5ff);
        mesh.material.color.lerp(targetColor, 0.1);
        if (this.glowLines[id]) {
          this.glowLines[id].material.color.lerp(targetColor, 0.1);
        }
      } else if (id === 'ev') {
        active = isCharging;
        speedFactor = Math.min(Math.max(evKw / 5.0, 0.3), 3.0);
      } else if (id === 'gas') {
        active = gasActive;
        speedFactor = Math.min(Math.max(gasKw / 1.2, 0.2), 2.5);
      }

      mesh.visible = active;
      if (this.glowLines[id]) {
        this.glowLines[id].visible = active;
      }

      if (!active) continue;

      // Animate offset along curve
      const dir = reverse ? -1 : 1;
      stream.offset += delta * def.baseSpeed * speedFactor * dir;
      if (stream.offset > 1.0) stream.offset -= 1.0;
      if (stream.offset < 0.0) stream.offset += 1.0;

      const count = this.particleCountPerStream;
      for (let i = 0; i < count; i++) {
        let t = (i / count + stream.offset) % 1.0;
        if (t < 0) t += 1.0;

        const pt = def.curve.getPointAt(t);
        dummy.position.copy(pt);

        // Breathing particle size variation along the wire
        const scalePhase = Math.sin(t * Math.PI * 6 + delta * 5);
        const dynamicScale = def.size * (0.8 + 0.4 * scalePhase);
        dummy.scale.setScalar(dynamicScale);

        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }

    // Dynamic mesh emissive glows
    this.updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive);
  }

  /**
   * Adjust mesh glow materials based on energy state
   */
  updateMeshGlows(solarKw, gridKw, evKw, isCharging, gasActive) {
    // 1. Solar Panels & Cabling glow
    if (this.meshes.solarPanels?.material) {
      const mat = this.meshes.solarPanels.material;
      mat.emissive = mat.emissive || new THREE.Color();
      const intensity = Math.min(solarKw / 3.0, 1.2);
      mat.emissive.setHex(0xffb700);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity || 0, intensity, 0.05);
    }

    if (this.meshes.solarCable?.material) {
      const mat = this.meshes.solarCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0xffaa00);
      mat.emissiveIntensity = solarKw > 0.1 ? 0.6 : 0.0;
    }

    // 2. EV Charger & Peugeot Lights
    if (this.meshes.evCable?.material) {
      const mat = this.meshes.evCable.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      mat.emissiveIntensity = isCharging ? 0.8 : 0.0;
    }

    if (this.meshes.peugeotLights?.material) {
      const mat = this.meshes.peugeotLights.material;
      mat.emissive = mat.emissive || new THREE.Color();
      mat.emissive.setHex(0x00f59b);
      // Gentle breathing pulse when charging
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
          p.material.emissiveIntensity = gasActive ? 0.5 : 0.0;
        }
      }
    }
  }
}
