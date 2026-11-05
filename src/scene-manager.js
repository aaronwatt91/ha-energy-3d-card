import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EnergyFlowSystem } from './energy-flow-system.js';

export const ROOM_LIGHT_CONFIGS = {
  lounge: {
    name: 'Living Room',
    pos: new THREE.Vector3(1.88, 2.15, -2.35),
    range: 7.5,
    maxIntensity: 4.2,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(1.88, 1.20, -2.35),
    boxSize: new THREE.Vector3(3.10, 2.35, 4.05)
  },
  kitchen: {
    name: 'Kitchen',
    pos: new THREE.Vector3(1.80, 2.15, -7.40),
    range: 7.0,
    maxIntensity: 4.5,
    defaultColor: 0xfff0d6,
    boxCenter: new THREE.Vector3(1.80, 1.20, -7.41),
    boxSize: new THREE.Vector3(2.95, 2.35, 2.30)
  },
  dining: {
    name: 'Dining Room',
    pos: new THREE.Vector3(4.30, 2.15, -7.40),
    range: 6.5,
    maxIntensity: 4.0,
    defaultColor: 0xffe6b8,
    boxCenter: new THREE.Vector3(4.32, 1.20, -7.41),
    boxSize: new THREE.Vector3(2.00, 2.35, 2.30)
  },
  hallway: {
    name: 'Hallway',
    pos: new THREE.Vector3(4.20, 2.15, -2.20),
    range: 6.0,
    maxIntensity: 3.8,
    defaultColor: 0xffedd5,
    boxCenter: new THREE.Vector3(4.35, 1.20, -2.35),
    boxSize: new THREE.Vector3(1.85, 2.35, 4.05)
  },
  wc: {
    name: 'Downstairs WC',
    pos: new THREE.Vector3(0.92, 2.15, -5.32),
    range: 4.5,
    maxIntensity: 3.5,
    defaultColor: 0xfff1dc,
    boxCenter: new THREE.Vector3(0.92, 1.20, -5.32),
    boxSize: new THREE.Vector3(1.22, 2.35, 1.82)
  },
  master_bedroom: {
    name: 'Master Bedroom',
    pos: new THREE.Vector3(1.90, 4.55, -2.10),
    range: 7.5,
    maxIntensity: 4.2,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(1.88, 3.85, -2.08),
    boxSize: new THREE.Vector3(3.10, 2.25, 3.52)
  },
  ensuite: {
    name: 'Master En-Suite',
    pos: new THREE.Vector3(4.40, 4.55, -1.22),
    range: 5.0,
    maxIntensity: 3.6,
    defaultColor: 0xfff6ea,
    boxCenter: new THREE.Vector3(4.38, 3.85, -1.23),
    boxSize: new THREE.Vector3(1.85, 2.25, 1.82)
  },
  bedroom2: {
    name: 'Bedroom 2',
    pos: new THREE.Vector3(1.75, 4.55, -7.30),
    range: 6.8,
    maxIntensity: 4.0,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(1.75, 3.85, -7.31),
    boxSize: new THREE.Vector3(2.85, 2.25, 2.48)
  },
  bedroom3: {
    name: 'Bedroom 3',
    pos: new THREE.Vector3(4.30, 4.55, -7.30),
    range: 6.8,
    maxIntensity: 4.0,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(4.32, 3.85, -7.31),
    boxSize: new THREE.Vector3(2.00, 2.25, 2.48)
  },
  bathroom: {
    name: 'Family Bathroom',
    pos: new THREE.Vector3(1.22, 4.55, -4.95),
    range: 5.5,
    maxIntensity: 3.8,
    defaultColor: 0xfff8ee,
    boxCenter: new THREE.Vector3(1.22, 3.85, -4.95),
    boxSize: new THREE.Vector3(1.82, 2.25, 2.18)
  },
  landing: {
    name: 'Landing & Stairs',
    pos: new THREE.Vector3(3.30, 4.55, -4.95),
    range: 6.0,
    maxIntensity: 3.8,
    defaultColor: 0xffedd5,
    boxCenter: new THREE.Vector3(3.30, 3.85, -4.95),
    boxSize: new THREE.Vector3(2.25, 2.25, 2.18)
  }
};

/**
 * SceneManager
 * Coordinates Three.js 3D viewport, camera controls, GLTF model,
 * lighting, X-Ray cutaway roof, camera transitions, and hot-spot tracking.
 */
export class SceneManager {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      modelUrl: options.modelUrl || 'Taylor_Wimpey_Blair.glb',
      nightMode: options.nightMode || false,
      autoRotate: options.autoRotate || false,
      ...options
    };

    this.hotspots = [
      { id: 'solar', name: 'Solax Solar PV', pos: new THREE.Vector3(2.80, 6.60, -6.80) },
      { id: 'grid', name: 'Octopus Grid & Meter', pos: new THREE.Vector3(5.30, 2.00, -0.85) },
      { id: 'boiler', name: 'Combi Boiler & Gas', pos: new THREE.Vector3(0.45, 1.80, -8.30) },
      { id: 'ev', name: 'Peugeot e-2008 EV', pos: new THREE.Vector3(5.25, 1.20, 1.35) },
      { id: 'thermostat_downstairs', name: 'Downstairs Heating', pos: new THREE.Vector3(3.60, 1.45, -2.40) },
      { id: 'thermostat_upstairs', name: 'Upstairs Heating', pos: new THREE.Vector3(3.30, 4.05, -4.95) }
    ];

    this.roofParts = [];
    this.roomLights = {};
    this.xrayActive = false;
    this.nightMode = this.options.nightMode;
    this.targetCameraPos = null;
    this.targetLookAt = null;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 500;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    this.camera.position.set(15, 12, 17);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.container.appendChild(this.renderer.domElement);

    // 4. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't go below ground
    this.controls.minDistance = 3;
    this.controls.maxDistance = 45;
    this.controls.target.set(2.5, 2.5, 0.0);
    this.controls.autoRotate = this.options.autoRotate;
    this.controls.autoRotateSpeed = 0.8;

    // 5. Lighting
    this.initLighting();

    // 6. Energy Flow Particle System
    this.energyFlow = new EnergyFlowSystem(this.scene);

    // 7. Load GLTF 3D House Model with smart fallback chain
    this.loadModelWithFallbacks(this.options.modelUrl);

    // 8. Resize Listener
    this.handleResize = this.onResize.bind(this);
    window.addEventListener('resize', this.handleResize);

    // Start Render Loop
    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    this.isRunning = true;
    requestAnimationFrame(this.animate);
  }

  initLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, this.nightMode ? 0.35 : 1.1);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfffaed, this.nightMode ? 0.2 : 1.8);
    this.sunLight.position.set(16, 22, 12);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 60;
    this.sunLight.shadow.camera.left = -15;
    this.sunLight.shadow.camera.right = 15;
    this.sunLight.shadow.camera.top = 15;
    this.sunLight.shadow.camera.bottom = -15;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    this.hemiLight = new THREE.HemisphereLight(0xbad7f2, 0x3d5a45, this.nightMode ? 0.2 : 0.6);
    this.scene.add(this.hemiLight);

    this.meterPointLight = new THREE.PointLight(0x00e5ff, 0.0, 4);
    this.meterPointLight.position.set(5.28, 1.4, -0.85);
    this.scene.add(this.meterPointLight);

    this.carPointLight = new THREE.PointLight(0x00f59b, 0.0, 5);
    this.carPointLight.position.set(3.4, 1.2, 1.6);
    this.scene.add(this.carPointLight);

    // Dedicated Room Lighting Container & Point Lights
    this.roomLightsGroup = new THREE.Group();
    this.scene.add(this.roomLightsGroup);

    const fixtureGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.04, 16);

    for (const [roomId, cfg] of Object.entries(ROOM_LIGHT_CONFIGS)) {
      const pLight = new THREE.PointLight(cfg.defaultColor, 0.0, cfg.range, 1.2);
      pLight.position.copy(cfg.pos);

      const fixMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        emissive: 0x111111,
        roughness: 0.3,
        metalness: 0.2
      });
      const fixtureMesh = new THREE.Mesh(fixtureGeom, fixMat);
      fixtureMesh.position.copy(cfg.pos);

      this.roomLightsGroup.add(pLight);
      this.roomLightsGroup.add(fixtureMesh);

      // Unlit Room Darkness Shade Box (Makes unlit rooms visibly dark & shadowed)
      let shadeMesh = null;
      if (cfg.boxCenter && cfg.boxSize) {
        const shadeGeom = new THREE.BoxGeometry(cfg.boxSize.x, cfg.boxSize.y, cfg.boxSize.z);
        const shadeMat = new THREE.MeshBasicMaterial({
          color: 0x040814,
          transparent: true,
          opacity: 0.65,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        shadeMesh = new THREE.Mesh(shadeGeom, shadeMat);
        shadeMesh.position.copy(cfg.boxCenter);
        this.roomLightsGroup.add(shadeMesh);
      }

      this.roomLights[roomId] = {
        config: cfg,
        light: pLight,
        fixture: fixtureMesh,
        shadeMesh,
        isOn: false,
        brightness: 0,
        colorHex: cfg.defaultColor
      };
    }

    this.applyLightingMode();
  }

  updateRoomLights(lightsData) {
    if (!lightsData) return;
    for (const [roomId, info] of Object.entries(lightsData)) {
      const room = this.roomLights[roomId];
      if (!room) continue;

      const isOn = Boolean(info.is_on || info.state === 'on');
      const brightness = info.brightness !== undefined ? info.brightness : 255;
      const rgb = info.rgb_color;

      this.setRoomLightState(roomId, isOn, brightness, rgb);
    }
  }

  setRoomLightState(roomId, isOn, brightness = 255, rgb = null) {
    const room = this.roomLights[roomId];
    if (!room) return;

    room.isOn = isOn;
    room.brightness = brightness;

    if (isOn) {
      if (room.shadeMesh) room.shadeMesh.visible = false;
      const factor = Math.max(0.20, Math.min(1.0, brightness / 255.0));
      if (Array.isArray(rgb) && rgb.length === 3) {
        room.light.color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
      } else {
        room.light.color.setHex(room.config.defaultColor);
      }
      const nightMult = this.nightMode ? 1.4 : 1.0;
      room.light.intensity = room.config.maxIntensity * factor * nightMult;
      room.fixture.material.emissive.copy(room.light.color).multiplyScalar(factor * 2.8);
      room.fixture.material.color.setHex(0xffffff);
    } else {
      if (room.shadeMesh) room.shadeMesh.visible = true;
      room.light.intensity = 0.0;
      room.fixture.material.emissive.setHex(0x0a0a0a);
      room.fixture.material.color.setHex(0x222222);
    }
  }

  applyLightingMode() {
    if (this.nightMode) {
      this.scene.background = new THREE.Color(0x050811);
      this.ambientLight.intensity = 0.12;
      this.sunLight.intensity = 0.10;
      this.sunLight.color.setHex(0x385585);
      this.hemiLight.intensity = 0.10;
      this.meterPointLight.intensity = 1.2;
      this.carPointLight.intensity = 1.2;
    } else {
      this.scene.background = new THREE.Color(0x0e1424);
      this.ambientLight.intensity = 0.35;
      this.sunLight.intensity = 1.8;
      this.sunLight.color.setHex(0xfffaed);
      this.hemiLight.intensity = 0.28;
      this.meterPointLight.intensity = 0.4;
      this.carPointLight.intensity = 0.4;
    }
  }

  setNightMode(active) {
    this.nightMode = active;
    this.applyLightingMode();
  }

  loadModelWithFallbacks(initialUrl) {
    const urlsToTry = [
      initialUrl,
      'Taylor_Wimpey_Blair.glb',
      './Taylor_Wimpey_Blair.glb',
      '/local/ha-energy-3d/Taylor_Wimpey_Blair.glb',
      '/hacsfiles/ha-energy-3d-card/Taylor_Wimpey_Blair.glb',
      'https://raw.githubusercontent.com/aaronwatt91/ha-energy-3d-card/main/Taylor_Wimpey_Blair.glb'
    ].filter(Boolean);

    // Remove duplicates
    const uniqueUrls = [...new Set(urlsToTry)];
    const loader = new GLTFLoader();

    const tryNext = (idx) => {
      if (idx >= uniqueUrls.length) {
        console.error('All model fallback URLs failed to load.');
        return;
      }

      const url = uniqueUrls[idx];
      loader.load(
        url,
        (gltf) => {
          this.model = gltf.scene;
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;

              const name = child.name;
              if (
                name.includes('Roof_Main') ||
                name.includes('Roof_Ridge_Tiles') ||
                name.includes('First_Floor_Ceiling') ||
                name.includes('Fascia_and_Soffits')
              ) {
                this.roofParts.push({
                  mesh: child,
                  originalMaterial: child.material,
                  ghostMaterial: new THREE.MeshStandardMaterial({
                    color: 0x88aacc,
                    transparent: true,
                    opacity: 0.15,
                    roughness: 0.2,
                    metalness: 0.1,
                    depthWrite: false
                  })
                });
              }
            }
          });

          this.scene.add(this.model);
          this.energyFlow.bindMeshes(this.model);

          if (this.onModelLoaded) {
            this.onModelLoaded();
          }
        },
        (xhr) => {
          if (this.onProgress && xhr.total) {
            this.onProgress(xhr.loaded / xhr.total);
          }
        },
        (err) => {
          console.warn(`Could not load GLB from ${url}, trying fallback...`, err);
          tryNext(idx + 1);
        }
      );
    };

    tryNext(0);
  }

  setXRayRoof(enable) {
    this.xrayActive = enable;
    for (const part of this.roofParts) {
      part.mesh.material = enable ? part.ghostMaterial : part.originalMaterial;
    }
  }

  setCameraPreset(preset) {
    const presets = {
      overview: {
        pos: new THREE.Vector3(15, 12, 17),
        target: new THREE.Vector3(2.5, 2.5, 0.0),
        xray: false
      },
      solar: {
        pos: new THREE.Vector3(3.2, 10.5, -13.5),
        target: new THREE.Vector3(2.8, 6.2, -6.8),
        xray: false
      },
      meter: {
        pos: new THREE.Vector3(7.2, 2.3, 0.5),
        target: new THREE.Vector3(5.28, 1.3, -0.85),
        xray: true
      },
      boiler: {
        pos: new THREE.Vector3(-3.8, 3.2, -11.5),
        target: new THREE.Vector3(0.0, 1.4, -8.0),
        xray: true
      },
      ev: {
        pos: new THREE.Vector3(7.2, 2.2, 3.2),
        target: new THREE.Vector3(5.2, 0.95, 1.0),
        xray: false
      },
      downstairs: {
        pos: new THREE.Vector3(2.8, 9.5, 4.0),
        target: new THREE.Vector3(2.8, 1.2, -4.5),
        xray: true
      },
      upstairs: {
        pos: new THREE.Vector3(2.8, 11.5, 4.0),
        target: new THREE.Vector3(2.8, 3.8, -4.5),
        xray: true
      },
      heating: {
        pos: new THREE.Vector3(7.8, 4.5, -2.5),
        target: new THREE.Vector3(3.4, 2.5, -3.5),
        xray: true
      }
    };

    const target = presets[preset];
    if (!target) return;

    this.targetCameraPos = target.pos.clone();
    this.targetLookAt = target.target.clone();

    if (target.xray !== undefined && target.xray !== this.xrayActive) {
      this.setXRayRoof(target.xray);
    }
  }

  updateEnergyData(data) {
    this.currentEnergyData = data;
  }

  getProjectedHotspots() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 500;
    const halfW = width / 2;
    const halfH = height / 2;

    return this.hotspots.map((spot) => {
      const v = spot.pos.clone();
      v.project(this.camera);

      const isVisible = v.z < 1.0;
      const x = v.x * halfW + halfW;
      const y = -(v.y * halfH) + halfH;

      return {
        id: spot.id,
        name: spot.name,
        x,
        y,
        visible: isVisible
      };
    });
  }

  onResize() {
    if (!this.container) return;
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 500;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    if (!this.isRunning) return;
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();

    if (this.targetCameraPos && this.targetLookAt) {
      this.camera.position.lerp(this.targetCameraPos, 0.06);
      this.controls.target.lerp(this.targetLookAt, 0.06);

      if (this.camera.position.distanceTo(this.targetCameraPos) < 0.05) {
        this.targetCameraPos = null;
        this.targetLookAt = null;
      }
    }

    this.controls.update();

    if (this.energyFlow) {
      this.energyFlow.update(delta, this.currentEnergyData);
    }

    this.renderer.render(this.scene, this.camera);

    if (this.onFrame) {
      this.onFrame();
    }
  }

  destroy() {
    this.isRunning = false;
    window.removeEventListener('resize', this.handleResize);
    if (this.renderer?.domElement?.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
    this.renderer?.dispose();
  }
}
