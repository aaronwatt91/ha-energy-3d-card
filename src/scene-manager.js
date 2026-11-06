import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { EnergyFlowSystem } from './energy-flow-system.js';

export const DEFAULT_LIGHTS = [
  { id: 'lounge', name: 'Living Room Ceiling', floor: 'ground', pos: { x: 1.88, y: 2.15, z: -2.35 }, range: 7.5, maxIntensity: 4.2, defaultColor: 0xffe299, entity_id: '' },
  { id: 'kitchen', name: 'Kitchen Ceiling', floor: 'ground', pos: { x: 1.80, y: 2.15, z: -7.40 }, range: 7.0, maxIntensity: 4.5, defaultColor: 0xfff0d6, entity_id: '' },
  { id: 'dining', name: 'Dining Room', floor: 'ground', pos: { x: 4.30, y: 2.15, z: -7.40 }, range: 6.5, maxIntensity: 4.0, defaultColor: 0xffe6b8, entity_id: '' },
  { id: 'hallway', name: 'Hall & Stairs', floor: 'ground', pos: { x: 4.30, y: 2.15, z: -3.25 }, range: 7.5, maxIntensity: 3.8, defaultColor: 0xffedd5, entity_id: '' },
  { id: 'wc', name: 'Downstairs WC', floor: 'ground', pos: { x: 1.85, y: 2.15, z: -5.32 }, range: 5.5, maxIntensity: 3.8, defaultColor: 0xfff1dc, entity_id: '' },
  { id: 'living_lamp', name: 'Living Room Lamp', floor: 'ground', pos: { x: 0.60, y: 1.58, z: -0.65 }, range: 5.5, maxIntensity: 3.8, defaultColor: 0xffd580, entity_id: 'light.living_room_lamp', isFloorLamp: true },
  { id: 'master_bedroom', name: 'Master Bedroom', floor: 'first', pos: { x: 1.90, y: 4.55, z: -2.10 }, range: 7.5, maxIntensity: 4.2, defaultColor: 0xffe299, entity_id: '' },
  { id: 'ensuite', name: 'Master En-Suite', floor: 'first', pos: { x: 4.40, y: 4.55, z: -1.22 }, range: 5.0, maxIntensity: 3.6, defaultColor: 0xfff6ea, entity_id: '' },
  { id: 'bedroom2', name: 'Bedroom 2 (Guestroom)', floor: 'first', pos: { x: 1.75, y: 4.55, z: -7.30 }, range: 6.8, maxIntensity: 4.0, defaultColor: 0xffe299, entity_id: '' },
  { id: 'bedroom3', name: 'Bedroom 3 (Nursery / Office)', floor: 'first', pos: { x: 4.30, y: 4.55, z: -7.30 }, range: 6.8, maxIntensity: 4.0, defaultColor: 0xffe299, entity_id: '' },
  { id: 'bathroom', name: 'Family Bathroom', floor: 'first', pos: { x: 1.22, y: 4.55, z: -4.95 }, range: 5.5, maxIntensity: 3.8, defaultColor: 0xfff8ee, entity_id: '' },
  { id: 'landing', name: 'Upstairs Landing', floor: 'first', pos: { x: 3.30, y: 4.55, z: -4.95 }, range: 6.0, maxIntensity: 3.8, defaultColor: 0xffedd5, entity_id: '' }
];

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
    pos: new THREE.Vector3(4.30, 2.15, -3.25),
    range: 7.5,
    maxIntensity: 3.8,
    defaultColor: 0xffedd5,
    boxCenter: new THREE.Vector3(4.37, 1.20, -3.275),
    boxSize: new THREE.Vector3(1.98, 2.40, 6.00)
  },
  wc: {
    name: 'Downstairs WC',
    pos: new THREE.Vector3(1.85, 2.15, -5.32),
    range: 5.5,
    maxIntensity: 3.8,
    defaultColor: 0xfff1dc,
    boxCenter: new THREE.Vector3(1.85, 1.20, -5.32),
    boxSize: new THREE.Vector3(3.08, 2.35, 1.82)
  },
  master_bedroom: {
    name: 'Master Bedroom',
    pos: new THREE.Vector3(1.90, 4.55, -2.10),
    range: 7.5,
    maxIntensity: 4.2,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(2.325, 3.85, -2.075),
    boxSize: new THREE.Vector3(4.10, 2.40, 3.62)
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
    boxCenter: new THREE.Vector3(1.775, 3.85, -7.315),
    boxSize: new THREE.Vector3(3.00, 2.40, 2.60)
  },
  bedroom3: {
    name: 'Bedroom 3',
    pos: new THREE.Vector3(4.30, 4.55, -7.30),
    range: 6.8,
    maxIntensity: 4.0,
    defaultColor: 0xffe299,
    boxCenter: new THREE.Vector3(4.295, 3.85, -7.315),
    boxSize: new THREE.Vector3(2.15, 2.40, 2.60)
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
      { id: 'ev_charger', name: 'myenergi Zappi Charger', pos: new THREE.Vector3(5.20, 1.45, 0.05) },
      { id: 'thermostat_downstairs', name: 'Downstairs Heating', pos: new THREE.Vector3(3.60, 1.45, -2.40) },
      { id: 'thermostat_upstairs', name: 'Upstairs Heating', pos: new THREE.Vector3(3.30, 4.05, -4.95) },
      { id: 'appliance_fridge', name: 'Kitchen Fridge Freezer', pos: new THREE.Vector3(2.45, 1.45, -6.65) },
      { id: 'appliance_washer', name: 'Kitchen Washing Machine', pos: new THREE.Vector3(2.15, 0.90, -8.20) },
      { id: 'appliance_tv', name: 'Living Room TV', pos: new THREE.Vector3(3.35, 1.40, -3.10) }
    ];

    this.roofParts = [];
    this.topFloorMeshes = [];
    this.cuttableMeshes = [];
    this.occludingMeshes = [];
    this.tvRaycaster = new THREE.Raycaster();
    this.tvTargetPos = new THREE.Vector3(3.34, 1.35, -3.10);
    this.cutawayMode = 'normal';
    this.customLights = this.options.customLights || DEFAULT_LIGHTS;
    this.roomLights = {};
    this.xrayActive = false;
    this.nightMode = this.options.nightMode;
    this.targetCameraPos = null;
    this.targetLookAt = null;
    this.clickToPlaceCallback = null;
    this.boundOnClickToPlace = null;

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
    this.renderer.localClippingEnabled = true;
    this.downstairsClipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 2.52);
    this.container.appendChild(this.renderer.domElement);

    // 3b. CSS3D Renderer for Interactive Elements (e.g., Living Room TV YouTube stream)
    this.css3dScene = new THREE.Scene();
    this.css3dRenderer = new CSS3DRenderer();
    this.css3dRenderer.setSize(width, height);
    this.css3dRenderer.domElement.style.position = 'absolute';
    this.css3dRenderer.domElement.style.top = '0';
    this.css3dRenderer.domElement.style.left = '0';
    this.css3dRenderer.domElement.style.width = '100%';
    this.css3dRenderer.domElement.style.height = '100%';
    this.css3dRenderer.domElement.style.pointerEvents = 'none';
    this.container.appendChild(this.css3dRenderer.domElement);

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

    // Immediately stop camera preset animation when user interacts/drags to allow free motion
    this.controls.addEventListener('start', () => this.stopCameraAnimation());

    const onUserInput = () => this.stopCameraAnimation();
    this.renderer.domElement.addEventListener('pointerdown', onUserInput, { passive: true });
    this.renderer.domElement.addEventListener('wheel', onUserInput, { passive: true });
    this.renderer.domElement.addEventListener('touchstart', onUserInput, { passive: true });
    if (this.css3dRenderer?.domElement) {
      this.css3dRenderer.domElement.addEventListener('pointerdown', onUserInput, { passive: true });
      this.css3dRenderer.domElement.addEventListener('wheel', onUserInput, { passive: true });
    }

    // 5. Lighting
    this.initLighting();

    // 6. Appliances & Interactive Furniture (Fridge, Wall TV, Corner Lamp)
    this.initAppliancesAndFurniture();

    // 7. Energy Flow Particle System
    this.energyFlow = new EnergyFlowSystem(this.scene);

    // 8. Load GLTF 3D House Model with smart fallback chain
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

    this.rebuildCustomLights(this.customLights);

    this.applyLightingMode();
  }

  rebuildCustomLights(lightsList) {
    if (!lightsList || !Array.isArray(lightsList)) return;
    this.customLights = lightsList;

    // Clear existing lights
    while (this.roomLightsGroup.children.length > 0) {
      const child = this.roomLightsGroup.children[0];
      this.roomLightsGroup.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
        else child.material.dispose();
      }
    }
    this.roomLights = {};

    const fixtureGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.04, 16);

    for (const cfg of lightsList) {
      const p = cfg.pos || { x: 2.5, y: 2.2, z: -3.5 };
      const vec = new THREE.Vector3(p.x, p.y, p.z);
      const col = cfg.defaultColor !== undefined ? cfg.defaultColor : 0xffe299;
      const range = cfg.range || 6.5;

      const pLight = new THREE.PointLight(col, 0.0, range, 1.2);
      pLight.position.copy(vec);

      const fixMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        emissive: 0x111111,
        roughness: 0.3,
        metalness: 0.2
      });
      const fixtureMesh = new THREE.Mesh(fixtureGeom, fixMat);
      fixtureMesh.position.copy(vec);
      if (cfg.isFloorLamp || cfg.id === 'living_lamp') {
        fixtureMesh.visible = false;
      }

      const container = new THREE.Group();
      container.add(pLight);
      container.add(fixtureMesh);

      // Room Darkness Shade Box (Makes unlit rooms visibly dark & shadowed)
      let shadeMesh = null;
      const roomPreset = ROOM_LIGHT_CONFIGS[cfg.id];
      if (roomPreset?.boxCenter && roomPreset?.boxSize) {
        const shadeGeom = new THREE.BoxGeometry(roomPreset.boxSize.x, roomPreset.boxSize.y, roomPreset.boxSize.z);
        const shadeMat = new THREE.MeshBasicMaterial({
          color: 0x040814,
          transparent: true,
          opacity: 0.65,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        shadeMesh = new THREE.Mesh(shadeGeom, shadeMat);
        shadeMesh.position.copy(roomPreset.boxCenter);
        container.add(shadeMesh);
      }

      this.roomLightsGroup.add(container);

      this.roomLights[cfg.id] = {
        config: cfg,
        light: pLight,
        fixture: fixtureMesh,
        container,
        shadeMesh,
        floor: cfg.floor || (vec.y > 3.0 ? 'first' : 'ground'),
        isOn: false,
        brightness: 0,
        colorHex: col
      };
    }

    if (this.cutawayMode === 'downstairs') {
      this.setCutawayMode('downstairs');
    }
  }

  updateLightPosition(lightId, x, y, z) {
    const obj = this.roomLights[lightId];
    if (obj) {
      obj.light.position.set(x, y, z);
      obj.fixture.position.set(x, y, z);
      obj.config.pos = { x, y, z };
      obj.floor = y > 3.0 ? 'first' : 'ground';
    }
    if (lightId === 'living_lamp' && this.applianceLamp) {
      this.applianceLamp.position.set(x, 0.0, z);
      if (this.applianceLampLight) {
        this.applianceLampLight.position.set(x, y, z);
      }
    }
    if (this.beaconGroup && this.beaconGroup.visible) {
      this.setEditingLightBeacon(lightId, new THREE.Vector3(x, y, z));
    }
  }

  setEditingLightBeacon(lightId, pos = null) {
    if (!this.beaconGroup) {
      this.beaconGroup = new THREE.Group();
      this.scene.add(this.beaconGroup);

      const ringGeom = new THREE.RingGeometry(0.16, 0.28, 32);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      this.beaconRing = new THREE.Mesh(ringGeom, ringMat);
      this.beaconGroup.add(this.beaconRing);

      const lineGeom = new THREE.CylinderGeometry(0.008, 0.008, 1.0, 8);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
      this.beaconLine = new THREE.Mesh(lineGeom, lineMat);
      this.beaconGroup.add(this.beaconLine);

      const sphereGeom = new THREE.SphereGeometry(0.07, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
      this.beaconSphere = new THREE.Mesh(sphereGeom, sphereMat);
      this.beaconGroup.add(this.beaconSphere);
    }

    const lightObj = this.roomLights[lightId];
    const p = pos || (lightObj ? lightObj.light.position : new THREE.Vector3(2.5, 2.2, -3.5));

    this.beaconGroup.visible = true;
    this.beaconSphere.position.copy(p);
    this.beaconRing.position.set(p.x, 0.02, p.z);
    this.beaconLine.position.set(p.x, p.y / 2, p.z);
    this.beaconLine.scale.set(1, Math.max(0.1, p.y), 1);
  }

  clearEditingLightBeacon() {
    if (this.beaconGroup) {
      this.beaconGroup.visible = false;
    }
  }

  enableClickToPlace(callback) {
    this.clickToPlaceCallback = callback;
    if (!this.boundOnClickToPlace) {
      this.boundOnClickToPlace = (e) => {
        if (!this.clickToPlaceCallback) return;
        const rect = this.renderer.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);
        const intersects = raycaster.intersectObjects(this.scene.children, true);
        const valid = intersects.find((hit) => {
          let p = hit.object;
          while (p) {
            if (p === this.beaconGroup || p === this.roomLightsGroup || p === this.energyFlow?.group) return false;
            p = p.parent;
          }
          return true;
        });

        if (valid) {
          const pt = valid.point;
          const yPos = this.cutawayMode === 'downstairs' ? 2.15 : (pt.y > 3.0 ? 4.55 : 2.15);
          this.clickToPlaceCallback({
            x: parseFloat(pt.x.toFixed(2)),
            y: parseFloat(yPos.toFixed(2)),
            z: parseFloat(pt.z.toFixed(2))
          });
        }
      };
      this.renderer.domElement.addEventListener('pointerup', this.boundOnClickToPlace);
    }
  }

  disableClickToPlace() {
    this.clickToPlaceCallback = null;
  }

  updateRoomLights(lightsData) {
    if (!lightsData) return;
    this.lastLightsData = lightsData;
    for (const [roomId, info] of Object.entries(lightsData)) {
      const room = this.roomLights[roomId];
      if (!room) continue;

      const isOn = Boolean(info.is_on || info.state === 'on');
      const brightness = info.brightness !== undefined ? info.brightness : 255;
      const rgb = info.rgb_color;

      this.setRoomLightState(roomId, isOn, brightness, rgb);
    }

    // Living Room illumination: if either living ceiling light OR living room lamp is ON, light up living room
    const loungeRoom = this.roomLights['lounge'];
    if (loungeRoom && loungeRoom.shadeMesh) {
      const isLoungeOn = Boolean(lightsData['lounge']?.is_on || lightsData['lounge']?.state === 'on');
      const isLampOn = Boolean(lightsData['living_lamp']?.is_on || lightsData['living_lamp']?.state === 'on');
      const isLivingRoomLit = isLoungeOn || isLampOn;
      loungeRoom.shadeMesh.visible = !isLivingRoomLit;
    }

    // Dedicated 3D physical floor standing lamp illumination
    if (this.applianceLampShade && this.applianceLampLight) {
      const lampInfo = lightsData['living_lamp'];
      const isLampOn = Boolean(lampInfo?.is_on || lampInfo?.state === 'on');
      const bri = lampInfo?.brightness !== undefined ? lampInfo.brightness : 255;
      const ratio = Math.max(0.1, bri / 255.0);

      if (isLampOn) {
        let col = new THREE.Color(0xffd580);
        if (lampInfo?.rgb_color && Array.isArray(lampInfo.rgb_color) && lampInfo.rgb_color.length === 3) {
          col.setRGB(lampInfo.rgb_color[0] / 255, lampInfo.rgb_color[1] / 255, lampInfo.rgb_color[2] / 255);
        }
        this.applianceLampShade.material.emissive.copy(col);
        this.applianceLampShade.material.emissiveIntensity = 2.4 * ratio;
        this.applianceLampLight.color.copy(col);
        this.applianceLampLight.intensity = 3.6 * ratio;
      } else {
        this.applianceLampShade.material.emissive.setHex(0x000000);
        this.applianceLampShade.material.emissiveIntensity = 0.0;
        this.applianceLampLight.intensity = 0.0;
      }
    }
  }

  initAppliancesAndFurniture() {
    this.appliancesGroup = new THREE.Group();
    this.scene.add(this.appliancesGroup);

    // ==========================================
    // 1. Kitchen Fridge Freezer (Modern Freestanding French Door)
    // ==========================================
    const fridgeGroup = new THREE.Group();
    // Moved to opposite partition wall (backing on wall z = -6.30, facing into kitchen)
    fridgeGroup.position.set(2.45, 0.0, -6.65);
    fridgeGroup.rotation.y = Math.PI;

    // Main Fridge Cabinet
    const cabinetGeom = new THREE.BoxGeometry(0.70, 1.84, 0.65);
    const cabinetMat = new THREE.MeshStandardMaterial({
      color: 0x2e3440,
      metalness: 0.82,
      roughness: 0.28
    });
    const cabinet = new THREE.Mesh(cabinetGeom, cabinetMat);
    cabinet.position.y = 0.92;
    cabinet.castShadow = true;
    cabinet.receiveShadow = true;
    fridgeGroup.add(cabinet);

    // Chrome Handles
    const handleGeom = new THREE.CylinderGeometry(0.012, 0.012, 0.55, 12);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0xd8dee9,
      metalness: 0.95,
      roughness: 0.15
    });
    const handleL = new THREE.Mesh(handleGeom, handleMat);
    handleL.position.set(-0.06, 1.28, 0.34);
    const handleR = new THREE.Mesh(handleGeom, handleMat);
    handleR.position.set(0.06, 1.28, 0.34);
    fridgeGroup.add(handleL);
    fridgeGroup.add(handleR);

    // Freezer Drawer Handle
    const freezerHandleGeom = new THREE.CylinderGeometry(0.012, 0.012, 0.48, 12);
    const freezerHandle = new THREE.Mesh(freezerHandleGeom, handleMat);
    freezerHandle.rotation.z = Math.PI / 2;
    freezerHandle.position.set(0.0, 0.65, 0.34);
    fridgeGroup.add(freezerHandle);

    // Digital LED Display & Ice/Water Dispenser
    const dispGeom = new THREE.PlaneGeometry(0.12, 0.18);
    const dispMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide
    });
    const dispenser = new THREE.Mesh(dispGeom, dispMat);
    dispenser.position.set(-0.16, 1.35, 0.33);
    fridgeGroup.add(dispenser);

    this.appliancesGroup.add(fridgeGroup);
    this.applianceFridge = fridgeGroup;

    // ==========================================
    // 2. Living Room Wall-Mounted Widescreen TV
    // ==========================================
    const tvGroup = new THREE.Group();
    tvGroup.position.set(3.38, 1.35, -3.10);

    // Bezel / Chassis (faced towards -X living room)
    const tvBezelGeom = new THREE.BoxGeometry(0.038, 0.72, 1.22);
    const tvBezelMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.6
    });
    const tvBezel = new THREE.Mesh(tvBezelGeom, tvBezelMat);
    tvGroup.add(tvBezel);

    // TV Screen Panel
    const tvScreenGeom = new THREE.BoxGeometry(0.01, 0.67, 1.17);
    const tvScreenMat = new THREE.MeshStandardMaterial({
      color: 0x020305,
      roughness: 0.12,
      metalness: 0.2,
      emissive: 0x000000,
      emissiveIntensity: 0.0
    });
    this.applianceTvScreen = new THREE.Mesh(tvScreenGeom, tvScreenMat);
    this.applianceTvScreen.position.x = -0.016; // Slight offset facing living room (-X)
    tvGroup.add(this.applianceTvScreen);

    // Tiny Power/Standby LED
    const ledGeom = new THREE.SphereGeometry(0.007, 8, 8);
    this.applianceTvLed = new THREE.Mesh(ledGeom, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    this.applianceTvLed.position.set(-0.022, -0.34, 0.54);
    tvGroup.add(this.applianceTvLed);

    // Ambient TV Glow Light into Living Room
    this.applianceTvLight = new THREE.PointLight(0x70a5ff, 0.0, 3.8, 1.6);
    this.applianceTvLight.position.set(3.18, 1.35, -3.10);
    this.appliancesGroup.add(this.applianceTvLight);

    this.appliancesGroup.add(tvGroup);
    this.applianceTv = tvGroup;

    // YouTube Video Player Screen (CSS3D interactive iframe)
    const tvIframeContainer = document.createElement('div');
    tvIframeContainer.style.width = '640px';
    tvIframeContainer.style.height = '366px';
    tvIframeContainer.style.backgroundColor = '#000000';
    tvIframeContainer.style.overflow = 'hidden';
    tvIframeContainer.style.borderRadius = '3px';
    tvIframeContainer.style.backfaceVisibility = 'hidden';
    tvIframeContainer.style.webkitBackfaceVisibility = 'hidden';

    const tvIframe = document.createElement('iframe');
    tvIframe.id = 'tv-youtube-iframe';
    tvIframe.style.width = '100%';
    tvIframe.style.height = '100%';
    tvIframe.style.border = 'none';
    tvIframe.style.pointerEvents = 'auto';
    tvIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    tvIframe.referrerPolicy = 'strict-origin-when-cross-origin';
    tvIframe.setAttribute('allowfullscreen', 'true');
    tvIframeContainer.appendChild(tvIframe);

    this.tvIframe = tvIframe;
    this.tvIframeContainer = tvIframeContainer;
    this.isTvMuted = true;
    this.isTvPlaying = false;

    this.tvCss3dObject = new CSS3DObject(tvIframeContainer);
    // Slightly in front of the bezel (X = 3.352) to eliminate z-fighting / clipping at grazing angles
    this.tvCss3dObject.position.set(3.352, 1.35, -3.10);
    this.tvCss3dObject.rotation.y = -Math.PI / 2;
    const tvScale = 1.17 / 640;
    this.tvCss3dObject.scale.set(tvScale, tvScale, tvScale);
    this.tvCss3dObject.visible = false;
    this.css3dScene.add(this.tvCss3dObject);

    // ==========================================
    // 3. Living Room Corner Floor Standing Lamp
    // ==========================================
    const lampGroup = new THREE.Group();
    lampGroup.position.set(0.60, 0.0, -0.65);

    // Heavy Circular Base
    const baseGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.025, 24);
    const lampMetalMat = new THREE.MeshStandardMaterial({
      color: 0xc49b56,
      metalness: 0.85,
      roughness: 0.25
    });
    const lampBase = new THREE.Mesh(baseGeom, lampMetalMat);
    lampBase.position.y = 0.0125;
    lampGroup.add(lampBase);

    // Vertical Brass Pole
    const poleGeom = new THREE.CylinderGeometry(0.014, 0.014, 1.55, 16);
    const lampPole = new THREE.Mesh(poleGeom, lampMetalMat);
    lampPole.position.y = 0.775;
    lampGroup.add(lampPole);

    // Fabric Drum Shade
    const shadeGeom = new THREE.CylinderGeometry(0.18, 0.22, 0.28, 24);
    const shadeMat = new THREE.MeshStandardMaterial({
      color: 0xfef3c7,
      roughness: 0.85,
      side: THREE.DoubleSide,
      emissive: 0x000000,
      emissiveIntensity: 0.0
    });
    this.applianceLampShade = new THREE.Mesh(shadeGeom, shadeMat);
    this.applianceLampShade.position.y = 1.55;
    lampGroup.add(this.applianceLampShade);

    // Dedicated Point Light for Floor Lamp
    this.applianceLampLight = new THREE.PointLight(0xffe2aa, 0.0, 5.0, 1.2);
    this.applianceLampLight.position.set(0.60, 1.58, -0.65);
    this.appliancesGroup.add(this.applianceLampLight);

    this.appliancesGroup.add(lampGroup);
    this.applianceLamp = lampGroup;

    // ==========================================
    // 4. Kitchen Washing Machine (Opposite side from Fridge Freezer)
    // ==========================================
    const washerGroup = new THREE.Group();
    // Placed on opposite wall (under counter at z = -8.20, x = 2.15, facing +Z towards fridge freezer)
    washerGroup.position.set(2.15, 0.0, -8.20);

    // Main Washer Cabinet
    const washerBodyGeom = new THREE.BoxGeometry(0.58, 0.85, 0.58);
    const washerBodyMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
      metalness: 0.25
    });
    const washerBody = new THREE.Mesh(washerBodyGeom, washerBodyMat);
    washerBody.position.y = 0.425;
    washerBody.castShadow = true;
    washerBody.receiveShadow = true;
    washerGroup.add(washerBody);

    // Front Chrome/Gloss Porthole Door Rim
    const doorRimGeom = new THREE.TorusGeometry(0.19, 0.024, 16, 36);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.90,
      roughness: 0.18
    });
    const doorRim = new THREE.Mesh(doorRimGeom, chromeMat);
    doorRim.position.set(0.0, 0.42, 0.295);
    washerGroup.add(doorRim);

    // Smoked Porthole Glass Window
    const glassGeom = new THREE.CircleGeometry(0.175, 32);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.6,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    this.applianceWasherGlass = new THREE.Mesh(glassGeom, glassMat);
    this.applianceWasherGlass.position.set(0.0, 0.42, 0.298);
    washerGroup.add(this.applianceWasherGlass);

    // Inner Stainless Steel Drum Lines
    const innerRimGeom = new THREE.TorusGeometry(0.14, 0.012, 12, 28);
    const innerRim = new THREE.Mesh(innerRimGeom, chromeMat);
    innerRim.position.set(0.0, 0.42, 0.296);
    washerGroup.add(innerRim);

    // Top Control Panel Inset
    const panelGeom = new THREE.PlaneGeometry(0.54, 0.14);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.5,
      side: THREE.DoubleSide
    });
    const panel = new THREE.Mesh(panelGeom, panelMat);
    panel.position.set(0.0, 0.74, 0.295);
    washerGroup.add(panel);

    // Detergent Drawer Handle (Left)
    const drawerGeom = new THREE.BoxGeometry(0.14, 0.08, 0.015);
    const drawerMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.3
    });
    const drawer = new THREE.Mesh(drawerGeom, drawerMat);
    drawer.position.set(-0.17, 0.74, 0.30);
    washerGroup.add(drawer);

    // Rotary Selector Dial (Center)
    const dialGeom = new THREE.CylinderGeometry(0.032, 0.032, 0.018, 20);
    const dial = new THREE.Mesh(dialGeom, chromeMat);
    dial.rotation.x = Math.PI / 2;
    dial.position.set(0.0, 0.74, 0.302);
    washerGroup.add(dial);

    // Digital LED Display (Right)
    const washerDispGeom = new THREE.PlaneGeometry(0.12, 0.05);
    const washerDispMat = new THREE.MeshBasicMaterial({
      color: 0x00f59b,
      side: THREE.DoubleSide
    });
    this.applianceWasherDisplay = new THREE.Mesh(washerDispGeom, washerDispMat);
    this.applianceWasherDisplay.position.set(0.17, 0.74, 0.302);
    washerGroup.add(this.applianceWasherDisplay);

    // Status LED Indicator
    const washerLedGeom = new THREE.SphereGeometry(0.006, 8, 8);
    this.applianceWasherLed = new THREE.Mesh(washerLedGeom, new THREE.MeshBasicMaterial({ color: 0x64748b }));
    this.applianceWasherLed.position.set(0.24, 0.77, 0.304);
    washerGroup.add(this.applianceWasherLed);

    // Internal Drum Ambient Light (Glows when running cycle)
    this.applianceWasherLight = new THREE.PointLight(0x00f59b, 0.0, 2.0, 1.4);
    this.applianceWasherLight.position.set(2.15, 0.45, -7.95);
    this.appliancesGroup.add(this.applianceWasherLight);

    this.appliancesGroup.add(washerGroup);
    this.applianceWasher = washerGroup;

    // ==========================================
    // 3. Living Room Sectional Corner Couch (Prop only, no tag)
    // "it should face the tv and the shorter side on the wall the bathroom shares"
    // TV at x = 3.38, z = -3.10. Bathroom wall at z = -4.30.
    // ==========================================
    const couchGroup = new THREE.Group();

    const couchFabricMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Slate charcoal upholstery
      roughness: 0.85,
      metalness: 0.05
    });
    const couchCushionMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Soft textured seat cushion
      roughness: 0.80,
      metalness: 0.02
    });
    const pillowAmberMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Warm amber throw pillow
      roughness: 0.70
    });
    const pillowCreamMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Crisp cream throw pillow
      roughness: 0.80
    });
    const couchLegsMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Dark timber feet
      roughness: 0.6
    });

    // Main long section (runs along outer wall at x ≈ 1.05, facing +X towards TV)
    const baseLong = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.22, 2.10), couchFabricMat);
    baseLong.position.set(0.99, 0.17, -3.05);
    baseLong.castShadow = true;
    baseLong.receiveShadow = true;
    couchGroup.add(baseLong);

    // Shorter L-return section (along the wall the bathroom shares, at z ≈ -4.00, facing +Z)
    const baseShort = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.22, 0.88), couchFabricMat);
    baseShort.position.set(1.905, 0.17, -3.66);
    baseShort.castShadow = true;
    baseShort.receiveShadow = true;
    couchGroup.add(baseShort);

    // Long section backrest (along outer wall on -X side)
    const backLong = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.46, 2.10), couchFabricMat);
    backLong.position.set(0.65, 0.51, -3.05);
    backLong.castShadow = true;
    backLong.receiveShadow = true;
    couchGroup.add(backLong);

    // Shorter section backrest (along the shared bathroom wall on -Z side)
    const backShort = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.46, 0.20), couchFabricMat);
    backShort.position.set(1.905, 0.51, -4.00);
    backShort.castShadow = true;
    backShort.receiveShadow = true;
    couchGroup.add(backShort);

    // Front armrest (front end of main section at z = -2.00)
    const armFront = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.38, 0.16), couchFabricMat);
    armFront.position.set(0.99, 0.41, -2.00);
    armFront.castShadow = true;
    armFront.receiveShadow = true;
    couchGroup.add(armFront);

    // Right armrest (far end of shorter section along bathroom wall at x = 2.38)
    const armRight = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.38, 0.88), couchFabricMat);
    armRight.position.set(2.38, 0.41, -3.66);
    armRight.castShadow = true;
    armRight.receiveShadow = true;
    couchGroup.add(armRight);

    // Seat cushions for long section (facing TV)
    const cushion1 = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.13, 0.92), couchCushionMat);
    cushion1.position.set(1.10, 0.345, -2.55);
    cushion1.castShadow = true;
    couchGroup.add(cushion1);

    const cushion2 = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.13, 0.92), couchCushionMat);
    cushion2.position.set(1.10, 0.345, -3.49);
    cushion2.castShadow = true;
    couchGroup.add(cushion2);

    // Seat cushion for shorter section (along bathroom wall)
    const cushionShort = new THREE.Mesh(new THREE.BoxGeometry(0.93, 0.13, 0.66), couchCushionMat);
    cushionShort.position.set(1.905, 0.345, -3.56);
    cushionShort.castShadow = true;
    couchGroup.add(cushionShort);

    // Accent throw pillows
    const pillow1 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.30, 0.10), pillowAmberMat);
    pillow1.position.set(0.82, 0.52, -2.18);
    pillow1.rotation.y = 0.25;
    couchGroup.add(pillow1);

    const pillow2 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.30, 0.10), pillowCreamMat);
    pillow2.position.set(0.84, 0.52, -3.88);
    pillow2.rotation.y = 0.78;
    couchGroup.add(pillow2);

    const pillow3 = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.28, 0.10), pillowAmberMat);
    pillow3.position.set(2.22, 0.52, -3.68);
    pillow3.rotation.y = 1.35;
    couchGroup.add(pillow3);

    // Sofa legs
    const legPositions = [
      [0.60, -2.00], [1.38, -2.00],
      [0.60, -4.05], [2.35, -4.05],
      [2.35, -3.25], [1.38, -3.25]
    ];
    for (const [lx, lz] of legPositions) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.06, 8), couchLegsMat);
      leg.position.set(lx, 0.03, lz);
      couchGroup.add(leg);
    }

    this.appliancesGroup.add(couchGroup);
    this.couchGroup = couchGroup;

    // ==========================================
    // 4. Dining Room Table & Chairs (In front of Patio Doors in Kitchen/Dining area)
    // French patio doors at z ≈ -8.50, Dining area around x = 4.30, z = -7.40
    // ==========================================
    const diningGroup = new THREE.Group();

    const tableWoodMat = new THREE.MeshStandardMaterial({
      color: 0x9a6b47, // Warm natural oak
      roughness: 0.45,
      metalness: 0.08
    });
    const chairFabricMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.8
    });

    // Tabletop
    const tabletop = new THREE.Mesh(new THREE.BoxGeometry(1.40, 0.045, 0.85), tableWoodMat);
    tabletop.position.set(4.30, 0.73, -7.40);
    tabletop.castShadow = true;
    tabletop.receiveShadow = true;
    diningGroup.add(tabletop);

    // Table Legs (4 corner legs)
    const legOffsets = [
      [-0.62, -0.36], [0.62, -0.36],
      [-0.62, 0.36], [0.62, 0.36]
    ];
    for (const [ox, oz] of legOffsets) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.71, 0.05), tableWoodMat);
      leg.position.set(4.30 + ox, 0.355, -7.40 + oz);
      leg.castShadow = true;
      diningGroup.add(leg);
    }

    // 4 Dining Chairs around the table (2 facing +Z towards patio doors, 2 facing -Z)
    const chairPositions = [
      { x: 4.02, z: -7.40 - 0.52, rotY: 0 },
      { x: 4.58, z: -7.40 - 0.52, rotY: 0 },
      { x: 4.02, z: -7.40 + 0.52, rotY: Math.PI },
      { x: 4.58, z: -7.40 + 0.52, rotY: Math.PI }
    ];

    for (const cp of chairPositions) {
      const chair = new THREE.Group();
      chair.position.set(cp.x, 0, cp.z);
      chair.rotation.y = cp.rotY;

      // Seat pad
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.04, 0.38), chairFabricMat);
      seat.position.y = 0.44;
      seat.castShadow = true;
      chair.add(seat);

      // Backrest
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.035), chairFabricMat);
      back.position.set(0, 0.66, -0.17);
      back.castShadow = true;
      chair.add(back);

      // 4 Chair Legs
      const clegOffsets = [[-0.16, -0.16], [0.16, -0.16], [-0.16, 0.16], [0.16, 0.16]];
      for (const [cx, cz] of clegOffsets) {
        const cleg = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.42, 6), tableWoodMat);
        cleg.position.set(cx, 0.21, cz);
        chair.add(cleg);
      }

      diningGroup.add(chair);
    }

    this.appliancesGroup.add(diningGroup);
    this.diningTable = diningGroup;

    // ==========================================
    // 5. Upstairs Bedroom Furniture (Master bed, Guest bed, Cot in bedroom 3)
    // Placed in this.upstairsFurnitureGroup so they cleanly hide when downstairs view is chosen
    // ==========================================
    this.upstairsFurnitureGroup = new THREE.Group();
    this.scene.add(this.upstairsFurnitureGroup);

    const firstFloorY = 2.52; // First floor slab top level

    // Master Bedroom Double Bed (External wall on -X at x ≈ 0.40, centered at z ≈ -2.15)
    const masterBedGroup = new THREE.Group();
    masterBedGroup.position.set(0.55, firstFloorY, -2.15);

    const masterFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
    const masterHeadboardMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const mattressMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 });
    const masterDuvetMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.75 });
    const pillowWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });

    // Headboard on external wall (-X)
    const mHeadboard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, 1.62), masterHeadboardMat);
    mHeadboard.position.set(0.04, 0.52, 0);
    mHeadboard.castShadow = true;
    masterBedGroup.add(mHeadboard);

    // Bed frame base
    const mBase = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.28, 1.55), masterFrameMat);
    mBase.position.set(1.015, 0.14, 0);
    mBase.castShadow = true;
    masterBedGroup.add(mBase);

    // Mattress
    const mMattress = new THREE.Mesh(new THREE.BoxGeometry(1.90, 0.20, 1.48), mattressMat);
    mMattress.position.set(1.02, 0.38, 0);
    mMattress.castShadow = true;
    masterBedGroup.add(mMattress);

    // Duvet
    const mDuvet = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.09, 1.52), masterDuvetMat);
    mDuvet.position.set(1.26, 0.485, 0);
    mDuvet.castShadow = true;
    masterBedGroup.add(mDuvet);

    // 2 Pillows
    const mPillow1 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.58), pillowWhiteMat);
    mPillow1.position.set(0.28, 0.51, -0.34);
    masterBedGroup.add(mPillow1);

    const mPillow2 = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.58), pillowWhiteMat);
    mPillow2.position.set(0.28, 0.51, 0.34);
    masterBedGroup.add(mPillow2);

    // 2 Bedside nightstands
    for (const sz of [-0.98, 0.98]) {
      const stand = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.44, 0.38), masterFrameMat);
      stand.position.set(0.22, 0.22, sz);
      masterBedGroup.add(stand);

      const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.03, 12), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
      lampBase.position.set(0.22, 0.455, sz);
      masterBedGroup.add(lampBase);

      const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.16, 12), new THREE.MeshStandardMaterial({ color: 0xffedd5 }));
      lampShade.position.set(0.22, 0.58, sz);
      masterBedGroup.add(lampShade);
    }

    this.upstairsFurnitureGroup.add(masterBedGroup);

    // Guest Bedroom Double Bed (Bedroom 2, on external wall on -X, centered at z ≈ -7.30)
    const guestBedGroup = new THREE.Group();
    guestBedGroup.position.set(0.55, firstFloorY, -7.30);

    const guestFrameMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const guestDuvetMat = new THREE.MeshStandardMaterial({ color: 0x4d695b, roughness: 0.75 }); // Sage green

    // Headboard on external wall
    const gHeadboard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.88, 1.50), guestFrameMat);
    gHeadboard.position.set(0.04, 0.48, 0);
    gHeadboard.castShadow = true;
    guestBedGroup.add(gHeadboard);

    // Bed frame base
    const gBase = new THREE.Mesh(new THREE.BoxGeometry(1.90, 0.26, 1.44), guestFrameMat);
    gBase.position.set(0.99, 0.13, 0);
    gBase.castShadow = true;
    guestBedGroup.add(gBase);

    // Mattress
    const gMattress = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.18, 1.38), mattressMat);
    gMattress.position.set(1.00, 0.35, 0);
    gMattress.castShadow = true;
    guestBedGroup.add(gMattress);

    // Duvet
    const gDuvet = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.08, 1.42), guestDuvetMat);
    gDuvet.position.set(1.23, 0.445, 0);
    gDuvet.castShadow = true;
    guestBedGroup.add(gDuvet);

    // 2 Pillows
    const gPillow1 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.11, 0.52), pillowWhiteMat);
    gPillow1.position.set(0.27, 0.47, -0.32);
    guestBedGroup.add(gPillow1);

    const gPillow2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.11, 0.52), pillowWhiteMat);
    gPillow2.position.set(0.27, 0.47, 0.32);
    guestBedGroup.add(gPillow2);

    // Bedside nightstand
    const gStand = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.42, 0.36), guestFrameMat);
    gStand.position.set(0.22, 0.21, 0.92);
    guestBedGroup.add(gStand);

    this.upstairsFurnitureGroup.add(guestBedGroup);

    // Bedroom 3 Baby Cot (Smallest room, centre on party wall on +X at x ≈ 5.18, z ≈ -7.30)
    const cotGroup = new THREE.Group();
    cotGroup.position.set(5.18, firstFloorY, -7.30);

    const cotWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.35
    });
    const cotMattressMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8
    });
    const cotBlanketMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a, // Soft pastel yellow baby blanket
      roughness: 0.7
    });

    // 4 Corner Posts
    const cPostOffsets = [
      [0.0, -0.58], [-0.64, -0.58],
      [0.0, 0.58], [-0.64, 0.58]
    ];
    for (const [px, pz] of cPostOffsets) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.82, 0.04), cotWhiteMat);
      post.position.set(px, 0.41, pz);
      post.castShadow = true;
      cotGroup.add(post);
    }

    // Top Rails (around 4 sides)
    const railTopParty = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1.20), cotWhiteMat);
    railTopParty.position.set(0.0, 0.80, 0);
    cotGroup.add(railTopParty);

    const railTopRoom = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1.20), cotWhiteMat);
    railTopRoom.position.set(-0.64, 0.80, 0);
    cotGroup.add(railTopRoom);

    const railTopHead = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.035, 0.035), cotWhiteMat);
    railTopHead.position.set(-0.32, 0.80, -0.58);
    cotGroup.add(railTopHead);

    const railTopFoot = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.035, 0.035), cotWhiteMat);
    railTopFoot.position.set(-0.32, 0.80, 0.58);
    cotGroup.add(railTopFoot);

    // Bottom Rails
    const railBotParty = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1.20), cotWhiteMat);
    railBotParty.position.set(0.0, 0.22, 0);
    cotGroup.add(railBotParty);

    const railBotRoom = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1.20), cotWhiteMat);
    railBotRoom.position.set(-0.64, 0.22, 0);
    cotGroup.add(railBotRoom);

    // Slats along the front (room-facing side)
    for (let sz = -0.50; sz <= 0.50; sz += 0.10) {
      const slat = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.55, 6), cotWhiteMat);
      slat.position.set(-0.64, 0.51, sz);
      cotGroup.add(slat);
    }

    // Slats along the party wall back
    for (let sz = -0.50; sz <= 0.50; sz += 0.10) {
      const slat = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.55, 6), cotWhiteMat);
      slat.position.set(0.0, 0.51, sz);
      cotGroup.add(slat);
    }

    // Slats on the two ends
    for (let sx = -0.52; sx <= -0.10; sx += 0.10) {
      const slat1 = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.55, 6), cotWhiteMat);
      slat1.position.set(sx, 0.51, -0.58);
      cotGroup.add(slat1);

      const slat2 = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.55, 6), cotWhiteMat);
      slat2.position.set(sx, 0.51, 0.58);
      cotGroup.add(slat2);
    }

    // Cot Mattress
    const cotMattress = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.10, 1.14), cotMattressMat);
    cotMattress.position.set(-0.32, 0.27, 0);
    cotMattress.castShadow = true;
    cotGroup.add(cotMattress);

    // Cot Baby Blanket
    const cotBlanket = new THREE.Mesh(new THREE.BoxGeometry(0.61, 0.03, 0.76), cotBlanketMat);
    cotBlanket.position.set(-0.32, 0.33, 0.19);
    cotBlanket.castShadow = true;
    cotGroup.add(cotBlanket);

    this.upstairsFurnitureGroup.add(cotGroup);
  }

  updateAppliances(appliances) {
    if (!appliances) return;

    // 1. Living Room TV Screen, YouTube Video Stream & Glow
    if (this.applianceTvScreen && this.applianceTvLight) {
      const isTvOn = Boolean(appliances.tv?.is_on || appliances.tv?.state === 'on');
      this.isTvPlaying = isTvOn;

      if (isTvOn) {
        this.applianceTvScreen.material.emissive.setHex(0x5ca8f5);
        this.applianceTvScreen.material.emissiveIntensity = 1.8;
        this.applianceTvLight.intensity = 1.6;
        if (this.applianceTvLed) this.applianceTvLed.material.color.setHex(0x22c55e);

        const ytUrl = 'https://www.youtube.com/embed/-m0iWqgyvKQ?autoplay=1&mute=1&loop=1&playlist=-m0iWqgyvKQ&enablejsapi=1';
        if (this.tvIframe && (!this.tvIframe.src || !this.tvIframe.src.includes('-m0iWqgyvKQ'))) {
          this.tvIframe.src = ytUrl;
        }
      } else {
        this.applianceTvScreen.material.emissive.setHex(0x000000);
        this.applianceTvScreen.material.emissiveIntensity = 0.0;
        this.applianceTvLight.intensity = 0.0;
        if (this.applianceTvLed) this.applianceTvLed.material.color.setHex(0xef4444);

        if (this.tvIframe && this.tvIframe.src) {
          this.tvIframe.src = '';
        }
        if (this.tvCss3dObject) {
          this.tvCss3dObject.visible = false;
        }
      }
    }

    // 2. Kitchen Washing Machine Drum & Status
    if (this.applianceWasher && this.applianceWasherLight) {
      const washer = appliances.washer || {};
      const isWasherActive = Boolean(washer.is_active || (washer.power_w && washer.power_w > 10));

      if (isWasherActive) {
        if (this.applianceWasherLed) this.applianceWasherLed.material.color.setHex(0x22c55e); // Active green
        if (this.applianceWasherDisplay) this.applianceWasherDisplay.material.color.setHex(0x00f59b);
        if (this.applianceWasherGlass) {
          this.applianceWasherGlass.material.emissive.setHex(0x00f59b);
          this.applianceWasherGlass.material.emissiveIntensity = 0.8;
        }
        this.applianceWasherLight.intensity = 1.4;
      } else {
        if (this.applianceWasherLed) this.applianceWasherLed.material.color.setHex(0x64748b); // Standby grey
        if (this.applianceWasherDisplay) this.applianceWasherDisplay.material.color.setHex(0x334155);
        if (this.applianceWasherGlass) {
          this.applianceWasherGlass.material.emissive.setHex(0x000000);
          this.applianceWasherGlass.material.emissiveIntensity = 0.0;
        }
        this.applianceWasherLight.intensity = 0.0;
      }
    }
  }

  toggleTvAudio() {
    if (!this.tvIframe || !this.tvIframe.contentWindow) return false;
    this.isTvMuted = !this.isTvMuted;
    const cmd = this.isTvMuted ? 'mute' : 'unMute';
    this.tvIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: cmd, args: '' }), '*');
    return !this.isTvMuted;
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
    if (this.lastLightsData) {
      this.updateRoomLights(this.lastLightsData);
    }
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

              // Roof ghosting parts for general X-Ray
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

              // Top floor meshes (Hidden when viewing downstairs so ground floor is 100% visible)
              if (
                name.includes('Roof_') ||
                name.includes('Fascia_and_Soffits') ||
                name.includes('Rainwater_Gutters') ||
                name.includes('First_Floor_') ||
                name.includes('Interior_Walls_First') ||
                name.includes('Landing_Carpet') ||
                name.includes('Carpet_') ||
                name.includes('Room_Labels_3D') ||
                name.includes('Solar_PV_')
              ) {
                this.topFloorMeshes.push({
                  mesh: child,
                  originalMaterial: child.material
                });
              }

              // Sliced meshes (Cut off cleanly at Y=2.52 downstairs ceiling level when downstairs preset is chosen)
              // This removes upstairs doors, upper toilets, upper baths/sinks, upper window glass, party wall, exterior walls.
              // Note: Staircase is NOT cuttable, so staircase remains intact leading up from the hallway!
              if (
                name.includes('Exterior_Walls') ||
                name.includes('Separating_Party_Wall') ||
                name.includes('Windows_') ||
                name.includes('Front_Entrance_Door') ||
                name.includes('Rear_French_Doors') ||
                name.includes('Interior_Doors') ||
                name.includes('Sanitaryware') ||
                name.includes('Exterior_Hardware_Chrome') ||
                name.includes('Solar_PV_Cabling')
              ) {
                this.cuttableMeshes.push(child);
              }

              // Occluding house structure meshes for TV visibility line-of-sight test
              if (
                name.includes('Exterior_Walls') ||
                name.includes('Separating_Party_Wall') ||
                name.includes('Interior_Walls_') ||
                name.includes('First_Floor_') ||
                name.includes('Roof_') ||
                name.includes('Front_Entrance_Door')
              ) {
                this.occludingMeshes.push(child);
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

  setCutawayMode(mode) {
    this.cutawayMode = mode;
    const isDownstairs = mode === 'downstairs';

    // 1. Hide top floor structures (ceiling, roof, first floor interior walls, carpets, first floor slab)
    for (const item of this.topFloorMeshes) {
      item.mesh.visible = !isDownstairs;
    }

    // 1b. Hide upstairs beds and furniture when viewing downstairs
    if (this.upstairsFurnitureGroup) {
      this.upstairsFurnitureGroup.visible = !isDownstairs;
    }

    // 2. Slice exterior walls at ground floor ceiling level so ground floor is 100% visible from above
    for (const mesh of this.cuttableMeshes) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach((m) => {
        if (m) {
          m.clippingPlanes = isDownstairs ? [this.downstairsClipPlane] : [];
          m.clipShadows = true;
          m.needsUpdate = true;
        }
      });
    }

    // 3. Hide upstairs lights and fixtures
    for (const [id, lightObj] of Object.entries(this.roomLights)) {
      const isUpstairs = lightObj.floor === 'first' || (lightObj.config?.pos?.y > 3.0);
      if (isUpstairs) {
        if (lightObj.container) lightObj.container.visible = !isDownstairs;
        if (lightObj.fixture) lightObj.fixture.visible = !isDownstairs;
        if (lightObj.shadeMesh) lightObj.shadeMesh.visible = !isDownstairs;
        if (lightObj.light) {
          if (isDownstairs) {
            lightObj.light.intensity = 0;
          } else if (lightObj.isOn) {
            const factor = Math.max(0.20, Math.min(1.0, (lightObj.brightness || 255) / 255.0));
            const nightMult = this.nightMode ? 1.4 : 1.0;
            lightObj.light.intensity = (lightObj.config?.maxIntensity || 4.0) * factor * nightMult;
          }
        }
      }
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
      charger: {
        pos: new THREE.Vector3(7.4, 2.2, 0.4),
        target: new THREE.Vector3(5.20, 1.25, 0.05),
        xray: false
      },
      downstairs: {
        pos: new THREE.Vector3(2.8, 11.5, 4.2),
        target: new THREE.Vector3(2.8, 0.8, -4.5),
        xray: false
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

    // Trigger cutaway mode for downstairs so top floors disappear
    if (preset === 'downstairs') {
      this.setCutawayMode('downstairs');
    } else {
      this.setCutawayMode('normal');
    }

    if (target.xray !== undefined && target.xray !== this.xrayActive && preset !== 'downstairs') {
      this.setXRayRoof(target.xray);
    }
  }

  updateEnergyData(data) {
    this.currentEnergyData = data;
    if (data?.appliances) {
      this.updateAppliances(data.appliances);
    }
  }

  getProjectedHotspots() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 500;
    const halfW = width / 2;
    const halfH = height / 2;

    return this.hotspots
      .filter((spot) => {
        if (this.cutawayMode === 'downstairs') {
          if (spot.id === 'solar' || spot.id === 'thermostat_upstairs') return false;
        }
        return true;
      })
      .map((spot) => {
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
    if (this.css3dRenderer) {
      this.css3dRenderer.setSize(width, height);
    }
  }

  stopCameraAnimation() {
    if (this.targetCameraPos || this.targetLookAt) {
      this.targetCameraPos = null;
      this.targetLookAt = null;
      if (this.onUserCameraInteraction) {
        this.onUserCameraInteraction();
      }
    }
  }

  animate() {
    if (!this.isRunning) return;
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();

    if (this.targetCameraPos && this.targetLookAt) {
      this.camera.position.lerp(this.targetCameraPos, 0.06);
      this.controls.target.lerp(this.targetLookAt, 0.06);

      if (
        this.camera.position.distanceTo(this.targetCameraPos) < 0.05 &&
        this.controls.target.distanceTo(this.targetLookAt) < 0.05
      ) {
        this.targetCameraPos = null;
        this.targetLookAt = null;
      }
    }

    this.controls.update();

    if (this.energyFlow) {
      this.energyFlow.update(delta, this.currentEnergyData);
    }

    this.renderer.render(this.scene, this.camera);

    // Update TV YouTube stream visibility & render CSS3D scene
    if (this.tvCss3dObject) {
      if (this.isTvPlaying) {
        // Camera must be in front of the TV screen plane (facing -X into living room)
        // TV is located on the living room wall at X = 3.36, screen normal points along -X
        const isFacing = this.camera.position.x < 3.38;

        let isOccluded = false;
        if (isFacing && this.occludingMeshes && this.occludingMeshes.length > 0) {
          // Multi-point line-of-sight test across the TV screen (Center, Left, Right)
          const testPoints = [
            new THREE.Vector3(3.28, 1.35, -3.10), // Center
            new THREE.Vector3(3.28, 1.35, -2.75), // Left
            new THREE.Vector3(3.28, 1.35, -3.45)  // Right
          ];

          const visibleOccluders = this.occludingMeshes.filter((m) => m.visible);
          let hasLineOfSight = false;

          for (const pt of testPoints) {
            const rayDir = new THREE.Vector3().subVectors(pt, this.camera.position);
            const distToPt = rayDir.length();
            rayDir.normalize();
            this.tvRaycaster.set(this.camera.position, rayDir);
            this.tvRaycaster.near = 0.1;
            this.tvRaycaster.far = distToPt;

            const hits = this.tvRaycaster.intersectObjects(visibleOccluders, false);
            let pointBlocked = false;

            for (const hit of hits) {
              // In downstairs cutaway mode, walls above the cut plane (y > 2.50) are clipped away and invisible
              if (this.cutawayMode === 'downstairs' && hit.point.y > 2.50) {
                continue;
              }
              // In X-ray roof mode, transparent ghost roofs do not occlude
              if (this.xrayActive && this.roofParts.some((p) => p.mesh === hit.object)) {
                continue;
              }
              // If hit is closer than (distToPt - 0.35m), a solid wall stands between camera and TV
              if (hit.distance < distToPt - 0.35) {
                pointBlocked = true;
                break;
              }
            }

            if (!pointBlocked) {
              hasLineOfSight = true;
              break; // If any part of the screen has direct line of sight, show TV
            }
          }

          isOccluded = !hasLineOfSight;
        }

        this.tvCss3dObject.visible = isFacing && !isOccluded;
      } else {
        this.tvCss3dObject.visible = false;
      }
    }

    if (this.css3dRenderer && this.css3dScene) {
      this.css3dRenderer.render(this.css3dScene, this.camera);
    }

    if (this.onFrame) {
      this.onFrame();
    }
  }

  destroy() {
    this.isRunning = false;
    this.stopCameraAnimation();
    window.removeEventListener('resize', this.handleResize);
    this.controls?.dispose();
    if (this.tvIframe) {
      this.tvIframe.src = '';
    }
    if (this.css3dRenderer?.domElement?.parentElement) {
      this.css3dRenderer.domElement.parentElement.removeChild(this.css3dRenderer.domElement);
    }
    if (this.renderer?.domElement?.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
    this.renderer?.dispose();
  }
}
