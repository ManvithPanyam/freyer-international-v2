"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import * as THREE from "three";
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Camera,
  ChevronRight,
  Info,
  CheckCircle2,
  Layers,
  ArrowRight,
  X,
} from "lucide-react";

// =====================================================================
// PROJECT ARCHIVE: 3 VERIFIED SOURCE-TRUTH RECORDS
// Strict adherence to freyer-forensics-v2/raw/html/project.html verbatim text
// =====================================================================

export interface ProjectRecord {
  id: string;
  recordNumber: string;
  origin: string;
  destination: string;
  primaryMetric: string;
  metricLabel: string;
  secondaryMetrics: string[];
  classification: string;
  rawSourceText: string;
  cargoType: "mass" | "modular_units" | "boom_crane";
  cargoVisualTitle: string;
  cargoVisualDescription: string;
  photos: {
    id: string;
    title: string;
    caption: string;
    src: string;
  }[];
}

export const ARCHIVE_PROJECTS: ProjectRecord[] = [
  {
    id: "record-09",
    recordNumber: "09",
    origin: "SHANGHAI",
    destination: "JEBEL ALI",
    primaryMetric: "482 MT",
    metricLabel: "GROSS WEIGHT",
    secondaryMetrics: ["796 CBM", "29 PKG"],
    classification: "BREAK BULK SHIPMENT",
    rawSourceText: "SHANGHAI TO JEBEL ALI — Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT",
    cargoType: "mass",
    cargoVisualTitle: "Heavy Industrial Cargo Mass",
    cargoVisualDescription: "Artistic visualization inspired by quayside photographs 9.1 & 9.2: massive fabricated steel structural mass with lifting lugs and cross-lacing diaphragms.",
    photos: [
      {
        id: "9.1",
        title: "Photo 9.1 • Quayside Night Staging",
        caption: "Archival Field Record: Fabricated structural cargo staged at terminal under nighttime high-pressure sodium spotlights prior to loading.",
        src: "/images/9.1.jpg",
      },
      {
        id: "9.2",
        title: "Photo 9.2 • Vessel Crane Hold Hoist",
        caption: "Archival Field Record: Heavy-lift crane lowering structural cargo into the vessel's open hold for maritime transit to Jebel Ali.",
        src: "/images/9.2.jpg",
      },
    ],
  },
  {
    id: "record-07",
    recordNumber: "07",
    origin: "EX GENOA",
    destination: "JEBEL ALI",
    primaryMetric: "17 UNITS",
    metricLabel: "TOTAL MOVEMENT",
    secondaryMetrics: ["68,000 KG EACH", "360 × 263 × 400 CM"],
    classification: "DOOR TO DOOR",
    rawSourceText: "EX GENOA TO JEBEL ALI — 360 x 263 x 400 cm- WT 68000 KG each Total 17 units moved in different lots (Door to Door)",
    cargoType: "modular_units",
    cargoVisualTitle: "Modular Heavy Machinery Units",
    cargoVisualDescription: "Artistic visualization inspired by photograph 7.1: modular heavy timber-crated monolithic machinery units (68 MT each) with reinforced steel corner brackets and spreader chain attachments.",
    photos: [
      {
        id: "7.1",
        title: "Photo 7.1 • Hold Cell Guide Hoist",
        caption: "Archival Field Record: 68-ton crated machinery unit hoisted by spreader chains into container vessel hold cell guides under terminal lights.",
        src: "/images/7.1.jpg",
      },
      {
        id: "7.2",
        title: "Photo 7.2 • Quayside Staging",
        caption: "Archival Field Record: Heavy crated consignment positioned on quayside trailer during multi-lot movement.",
        src: "/images/7.2.jpg",
      },
    ],
  },
  {
    id: "record-11",
    recordNumber: "11",
    origin: "VENICE",
    destination: "MUNDRA",
    primaryMetric: "37,600 KG",
    metricLabel: "CARGO WEIGHT",
    secondaryMetrics: ["BOOM CRANE", "2700 × 400 × 455 CM"],
    classification: "BREAK BULK ON CONTAINER VESSEL",
    rawSourceText: "VENICE TO MUNDRA — Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on cntr. vessel",
    cargoType: "boom_crane",
    cargoVisualTitle: "Elongated Oversized Boom Crane",
    cargoVisualDescription: "Artistic visualization inspired by photographs 11.1 & 11.2: 27-meter elongated lattice boom crane assembly with pivot counterweight base, gantry walkways, and timber support cradle.",
    photos: [
      {
        id: "11.1",
        title: "Photo 11.1 • Lattice Boom Assembly",
        caption: "Archival Field Record: 27-meter crane boom assembly showing triangular structural lattice, counterweight base, and yellow maintenance walkways.",
        src: "/images/11.1.jpg",
      },
      {
        id: "11.2",
        title: "Photo 11.2 • Modular Hydraulic Transport",
        caption: "Archival Field Record: Elongated boom crane unit secured onto multi-axle heavy transport hauler under road permit.",
        src: "/images/11.2.jpg",
      },
    ],
  },
];

// Timeline Structure: Stillness → Physical Movement → Manifest Reveal → Resolution → Stillness
export interface MovementPhase {
  id: string;
  name: string;
  startSec: number;
  endSec: number;
  label: string;
  description: string;
}

const PHASES: MovementPhase[] = [
  {
    id: "stillness_ingress",
    name: "Opening Stillness & Ingress",
    startSec: 0,
    endSec: 7,
    label: "01 • INGRESS",
    description: "Quiet quayside hold. Physical cargo slowly enters along crane descent axis.",
  },
  {
    id: "touchdown",
    name: "Touchdown on Dunnage",
    startSec: 7,
    endSec: 11,
    label: "02 • TOUCHDOWN",
    description: "Cargo settles onto heavy timber deck dunnage. Mechanical stillness.",
  },
  {
    id: "manifest",
    name: "Manifest Reveal & Archival Inspection",
    startSec: 11,
    endSec: 21,
    label: "03 • MANIFEST",
    description: "Editorial manifest surfaces verbatim project records alongside physical cargo.",
  },
  {
    id: "resolution",
    name: "Cargo Transit & Departure",
    startSec: 21,
    endSec: 27,
    label: "04 • TRANSIT",
    description: "Cargo glides along hold transit track toward stowage position.",
  },
  {
    id: "cycle",
    name: "Resolution & Next Record Cue",
    startSec: 27,
    endSec: 30,
    label: "05 • RESOLUTION",
    description: "Hold returns to stillness. Ready for next documented movement.",
  },
];

const TOTAL_CYCLE_DURATION = 30; // 30 seconds

export default function CargoInMotionCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Active Project Selection
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const currentProject = ARCHIVE_PROJECTS[selectedProjectIndex];

  // Playback States
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [autoCycleProjects, setAutoCycleProjects] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activePhotoModal, setActivePhotoModal] = useState<string | null>(null);

  // Animation References
  const animFrameRef = useRef<number | null>(null);
  const currentTimeRef = useRef<number>(0);
  currentTimeRef.current = currentTime;
  const projectIndexRef = useRef<number>(0);
  projectIndexRef.current = selectedProjectIndex;

  // Active Phase calculation
  const activePhase = useMemo(() => {
    return PHASES.find((p) => currentTime >= p.startSec && currentTime < p.endSec) || PHASES[PHASES.length - 1];
  }, [currentTime]);

  // Three.js References
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cargoRoot: THREE.Group;
    cargoMass: THREE.Group;
    cargoModularUnits: THREE.Group;
    cargoBoomCrane: THREE.Group;
    spreaderRig: THREE.Group;
    cameraTarget: THREE.Vector3;
  } | null>(null);

  // ----------------------------------------------------
  // THREE.JS SCENE SETUP & PROCEDURAL OBJECT BUILDING
  // ----------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // SCENE & ATMOSPHERE: Cinematic, Industrial, Chiaroscuro
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0e12); // Deep asphalt charcoal
    scene.fog = new THREE.FogExp2(0x0c0e12, 0.024);

    // CAMERA
    const width = canvas.clientWidth || 1200;
    const height = canvas.clientHeight || 700;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 140);
    camera.position.set(15, 11, 25);
    const cameraTarget = new THREE.Vector3(0, 1.8, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    // ----------------------------------------------------
    // LIGHTING: Atmospheric Maritime Industrial Film Lighting
    // (Natural chiaroscuro, no fluorescent sci-fi neon)
    // ----------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x232730, 1.4);
    scene.add(ambientLight);

    // Primary Industrial Daylight / Key Floodlight
    const keyLight = new THREE.DirectionalLight(0xf1f5f9, 2.6);
    keyLight.position.set(18, 30, 20);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 75;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    // Quayside High-Pressure Sodium Spotlight (Warm Amber terminal illumination)
    const sodiumSpot = new THREE.SpotLight(0xd97706, 3.8, 55, Math.PI / 4.2, 0.5, 1);
    sodiumSpot.position.set(-16, 22, 12);
    sodiumSpot.target.position.set(0, 0, 0);
    scene.add(sodiumSpot);
    scene.add(sodiumSpot.target);

    // Subtle Cool Blue Sky Rim Light (Soft silhouette definition)
    const rimLight = new THREE.DirectionalLight(0x64748b, 1.3);
    rimLight.position.set(-18, 12, -18);
    scene.add(rimLight);

    // Muted Safety Orange Warmth (Low-intensity fill)
    const warmAccent = new THREE.PointLight(0xe1390f, 1.6, 22);
    warmAccent.position.set(10, 3, -12);
    scene.add(warmAccent);

    // ----------------------------------------------------
    // STAGE: STEEL CARGO HOLD & HEAVY TIMBER DUNNAGE
    // ----------------------------------------------------
    const deckGroup = new THREE.Group();
    scene.add(deckGroup);

    // Steel Floor Plates
    const floorGeo = new THREE.PlaneGeometry(80, 80);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x11141a,
      roughness: 0.88,
      metalness: 0.28,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    deckGroup.add(floor);

    // Steel Hatch Coaming Walls (Low industrial border)
    const coamingMat = new THREE.MeshStandardMaterial({
      color: 0x161a22,
      roughness: 0.75,
      metalness: 0.45,
    });
    const addCoaming = (w: number, h: number, d: number, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), coamingMat);
      mesh.position.set(x, y, z);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      deckGroup.add(mesh);
    };
    addCoaming(46, 3.0, 1.0, 0, 1.5, -17);
    addCoaming(46, 3.0, 1.0, 0, 1.5, 17);
    addCoaming(1.0, 3.0, 34, -23, 1.5, 0);
    addCoaming(1.0, 3.0, 34, 23, 1.5, 0);

    // Heavy Timber Dunnage Sleepers (supporting breakbulk cargo)
    const dunnageMat = new THREE.MeshStandardMaterial({
      color: 0x5a3825,
      roughness: 0.92,
      metalness: 0.05,
    });
    for (let x = -10; x <= 10; x += 5) {
      const dunnage = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.4, 12), dunnageMat);
      dunnage.position.set(x, 0.2, 0);
      dunnage.receiveShadow = true;
      dunnage.castShadow = true;
      deckGroup.add(dunnage);
    }

    // Low-key deck track grid lines (muted, non-glow)
    const grid = new THREE.GridHelper(44, 22, 0x334155, 0x1e293b);
    grid.position.y = 0.01;
    deckGroup.add(grid);

    // ----------------------------------------------------
    // CARGO MASTER ROOT & 3 DISTINCT PROCEDURAL OBJECTS
    // ----------------------------------------------------
    const cargoRoot = new THREE.Group();
    scene.add(cargoRoot);

    // Materials
    const weatheredSteelMat = new THREE.MeshStandardMaterial({
      color: 0x3e4756,
      roughness: 0.5,
      metalness: 0.75,
    });
    const darkSteelPlateMat = new THREE.MeshStandardMaterial({
      color: 0x272e3b,
      roughness: 0.6,
      metalness: 0.65,
    });
    const industrialOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xc4340d,
      roughness: 0.45,
      metalness: 0.5,
    });
    const craneWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xdedede,
      roughness: 0.4,
      metalness: 0.35,
    });
    const craneYellowMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.4,
      metalness: 0.3,
    });
    const timberCrateMat = new THREE.MeshStandardMaterial({
      color: 0xa88252,
      roughness: 0.88,
      metalness: 0.08,
    });

    // ----------------------------------------------------
    // OBJECT A: SHANGHAI (482 MT) — LARGE INDUSTRIAL CARGO MASS
    // Fabricated heavy structural steel box girders with cross-lacing
    // ----------------------------------------------------
    const cargoMass = new THREE.Group();
    cargoRoot.add(cargoMass);

    const girderLength = 17.0;
    const girderHeight = 2.4;
    const girderWidth = 1.7;

    // Twin massive steel box girders
    const beamA = new THREE.Mesh(new THREE.BoxGeometry(girderLength, girderHeight, girderWidth), weatheredSteelMat);
    beamA.position.set(0, girderHeight / 2 + 0.4, -1.4);
    beamA.castShadow = true;
    beamA.receiveShadow = true;
    cargoMass.add(beamA);

    const beamB = new THREE.Mesh(new THREE.BoxGeometry(girderLength, girderHeight, girderWidth), weatheredSteelMat);
    beamB.position.set(0, girderHeight / 2 + 0.4, 1.4);
    beamB.castShadow = true;
    beamB.receiveShadow = true;
    cargoMass.add(beamB);

    // Cross-connecting diaphragms & spacers
    for (let x = -6; x <= 6; x += 4) {
      const spacer = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 2.1), darkSteelPlateMat);
      spacer.position.set(x, girderHeight / 2 + 0.4, 0);
      spacer.castShadow = true;
      cargoMass.add(spacer);
    }

    // Heavy corner lifting lugs
    const lugPositions = [
      { x: -6.8, z: -1.4 },
      { x: 6.8, z: -1.4 },
      { x: -6.8, z: 1.4 },
      { x: 6.8, z: 1.4 },
    ];
    lugPositions.forEach((pos) => {
      const lug = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 16), darkSteelPlateMat);
      lug.position.set(pos.x, girderHeight + 0.6, pos.z);
      lug.castShadow = true;
      cargoMass.add(lug);
    });

    // ----------------------------------------------------
    // OBJECT B: GENOA (17 UNITS, 68 MT EACH) — REPEATED HEAVY UNITS
    // Monolithic heavy timber-crated machinery modules (matching photo 7.1)
    // ----------------------------------------------------
    const cargoModularUnits = new THREE.Group();
    cargoRoot.add(cargoModularUnits);

    // Staging 4 prominent crated modules in a 2x2 precision cluster
    const unitW = 3.6;
    const unitH = 4.0;
    const unitD = 2.8;

    const unitOffsets = [
      { x: -4.2, z: -2.8 },
      { x: 4.2, z: -2.8 },
      { x: -4.2, z: 2.8 },
      { x: 4.2, z: 2.8 },
    ];

    unitOffsets.forEach((off) => {
      const unitGroup = new THREE.Group();
      unitGroup.position.set(off.x, unitH / 2 + 0.4, off.z);

      // Main Crate Body
      const crateMesh = new THREE.Mesh(new THREE.BoxGeometry(unitW, unitH, unitD), timberCrateMat);
      crateMesh.castShadow = true;
      crateMesh.receiveShadow = true;
      unitGroup.add(crateMesh);

      // Steel Corner Reinforcement Brackets
      const bracketMat = new THREE.MeshStandardMaterial({ color: 0x1f242d, metalness: 0.7, roughness: 0.5 });
      const corner1 = new THREE.Mesh(new THREE.BoxGeometry(unitW + 0.05, 0.3, unitD + 0.05), bracketMat);
      corner1.position.y = unitH / 2 - 0.15;
      unitGroup.add(corner1);

      const corner2 = new THREE.Mesh(new THREE.BoxGeometry(unitW + 0.05, 0.3, unitD + 0.05), bracketMat);
      corner2.position.y = -unitH / 2 + 0.15;
      unitGroup.add(corner2);

      // Top Heavy Lifting Pad & Slings
      const topLug = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 1.2), bracketMat);
      topLug.position.y = unitH / 2 + 0.2;
      unitGroup.add(topLug);

      cargoModularUnits.add(unitGroup);
    });

    // ----------------------------------------------------
    // OBJECT C: VENICE (37,600 KG) — ELONGATED OVERSIZED BOOM CRANE
    // 27-meter long lattice boom structure (matching photos 11.1 & 11.2)
    // ----------------------------------------------------
    const cargoBoomCrane = new THREE.Group();
    cargoRoot.add(cargoBoomCrane);

    // Crane Base / Counterweight housing (White & Red Industrial Body)
    const baseLength = 7.0;
    const baseHeight = 3.6;
    const baseWidth = 3.4;
    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(baseLength, baseHeight, baseWidth), craneWhiteMat);
    baseMesh.position.set(-8.5, baseHeight / 2 + 0.4, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    cargoBoomCrane.add(baseMesh);

    // Red Accent Band on Counterweight Base
    const redBand = new THREE.Mesh(new THREE.BoxGeometry(baseLength * 0.7, baseHeight * 0.5, baseWidth + 0.05), industrialOrangeMat);
    redBand.position.set(-8.5, baseHeight / 2 + 0.4, 0);
    cargoBoomCrane.add(redBand);

    // Yellow Safety Gantry & Walkway Railings
    const walkway = new THREE.Mesh(new THREE.BoxGeometry(baseLength + 1, 0.25, baseWidth + 1.2), craneYellowMat);
    walkway.position.set(-8.5, baseHeight + 0.5, 0);
    walkway.castShadow = true;
    cargoBoomCrane.add(walkway);

    // 20-meter Elongated Triangular Lattice Boom (Modeled via connected tubular trusses)
    const boomLength = 22.0;
    const boomGeo = new THREE.CylinderGeometry(0.7, 1.4, boomLength, 4);
    const boomMesh = new THREE.Mesh(boomGeo, weatheredSteelMat);
    boomMesh.rotation.z = Math.PI / 2;
    boomMesh.position.set(5.5, 2.2, 0);
    boomMesh.castShadow = true;
    cargoBoomCrane.add(boomMesh);

    // Lattice cross-struts (Triangular bracing along the boom)
    for (let x = -4; x <= 14; x += 3.5) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1 - (x + 4) * 0.035, 0.08, 4, 4), darkSteelPlateMat);
      ring.rotation.y = Math.PI / 2;
      ring.position.set(x, 2.2, 0);
      cargoBoomCrane.add(ring);
    }

    // Heavy Timber Support Cradle under Boom Tip
    const cradle = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.6, 4.0), timberCrateMat);
    cradle.position.set(13.0, 0.8, 0);
    cradle.castShadow = true;
    cargoBoomCrane.add(cradle);

    // ----------------------------------------------------
    // SPREADER RIG & HOIST BEAM
    // ----------------------------------------------------
    const spreaderRig = new THREE.Group();
    scene.add(spreaderRig);

    const spreaderBar = new THREE.Mesh(
      new THREE.BoxGeometry(15, 0.7, 3.0),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4, metalness: 0.6 })
    );
    spreaderBar.position.y = 14;
    spreaderBar.castShadow = true;
    spreaderRig.add(spreaderBar);

    // Wire ropes connecting spreader
    const cableMat = new THREE.LineBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.6 });
    lugPositions.forEach((pos) => {
      const points = [new THREE.Vector3(pos.x, 14, pos.z), new THREE.Vector3(pos.x, 3.2, pos.z)];
      const line = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points), cableMat);
      spreaderRig.add(line);
    });

    // Store references
    threeRef.current = {
      scene,
      camera,
      renderer,
      cargoRoot,
      cargoMass,
      cargoModularUnits,
      cargoBoomCrane,
      spreaderRig,
      cameraTarget,
    };

    // Initial visibility according to selectedProjectIndex
    cargoMass.visible = selectedProjectIndex === 0;
    cargoModularUnits.visible = selectedProjectIndex === 1;
    cargoBoomCrane.visible = selectedProjectIndex === 2;

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
    };
  }, []);

  // Update object visibility when selectedProjectIndex changes
  useEffect(() => {
    if (threeRef.current) {
      const { cargoMass, cargoModularUnits, cargoBoomCrane } = threeRef.current;
      cargoMass.visible = selectedProjectIndex === 0;
      cargoModularUnits.visible = selectedProjectIndex === 1;
      cargoBoomCrane.visible = selectedProjectIndex === 2;
    }
  }, [selectedProjectIndex]);

  // ----------------------------------------------------
  // CINEMATIC TICKER & ANIMATION CHOREOGRAPHY LOOP
  // Stillness → Physical Movement → Manifest Reveal → Resolution → Stillness
  // ----------------------------------------------------
  useEffect(() => {
    let lastStamp = performance.now();

    const animate = (now: number) => {
      const delta = (now - lastStamp) / 1000;
      lastStamp = now;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + delta;
          if (next >= TOTAL_CYCLE_DURATION) {
            if (autoCycleProjects) {
              // Advance to next project in queue
              const nextIndex = (projectIndexRef.current + 1) % ARCHIVE_PROJECTS.length;
              setSelectedProjectIndex(nextIndex);
            }
            return 0;
          }
          return next;
        });
      }

      // Update 3D Stage Physics & Camera
      if (threeRef.current) {
        const { camera, cargoRoot, spreaderRig, cameraTarget } = threeRef.current;
        const t = currentTimeRef.current;
        const projIdx = projectIndexRef.current;

        // Choreography Timeline
        if (t < 7.0) {
          // PHASE 1: Stillness & Ingress (0s - 7s)
          // Heavy physical cargo lowers slowly from hoist axis
          const p = t / 7.0; // 0 -> 1
          const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);
          const currentY = THREE.MathUtils.lerp(14, 0, easeOutQuad(p));

          cargoRoot.position.set(0, currentY, 0);
          cargoRoot.rotation.y = 0;
          spreaderRig.position.set(0, currentY, 0);
          spreaderRig.visible = true;

          // Camera: Wide architectural establishing composition
          const camZ = 28 - p * 3;
          camera.position.set(16, 12, camZ);
          cameraTarget.set(0, 2.2, 0);
          camera.lookAt(cameraTarget);
        } else if (t >= 7.0 && t < 11.0) {
          // PHASE 2: Touchdown on Dunnage (7s - 11s)
          // Settled on timber sleepers; spreader disengages upwards
          const p = (t - 7.0) / 4.0; // 0 -> 1
          cargoRoot.position.set(0, 0, 0);
          cargoRoot.rotation.y = 0;

          // Spreader rig slowly hoists up out of frame
          spreaderRig.position.y = p * 10;

          // Camera: Deliberate dolly tracking closer
          camera.position.set(THREE.MathUtils.lerp(16, 12, p), THREE.MathUtils.lerp(12, 7.5, p), THREE.MathUtils.lerp(25, 18, p));
          cameraTarget.set(0, 1.8, 0);
          camera.lookAt(cameraTarget);
        } else if (t >= 11.0 && t < 21.0) {
          // PHASE 3: Manifest Reveal & Archival Inspection (11s - 21s)
          // Stately, slow editorial orbit around cargo mass
          const p = (t - 11.0) / 10.0; // 0 -> 1
          cargoRoot.position.set(0, 0, 0);
          cargoRoot.rotation.y = 0;
          spreaderRig.visible = false;

          // Custom camera angle per cargo profile
          let baseRadius = 17.0;
          let camY = 6.2;
          let targetX = 0;
          if (projIdx === 2) {
            // Elongated 27-meter boom crane framed across wide diagonal axis
            baseRadius = 26.0;
            camY = 8.5;
            targetX = 2.0;
          } else if (projIdx === 1) {
            baseRadius = 18.0;
            camY = 7.0;
          }

          const angle = 0.5 + p * 0.9; // Gentle cinematic sweep
          camera.position.set(baseRadius * Math.sin(angle), camY + Math.sin(p * Math.PI) * 0.8, baseRadius * Math.cos(angle));
          cameraTarget.set(targetX, 1.8, 0);
          camera.lookAt(cameraTarget);
        } else if (t >= 21.0 && t < 27.0) {
          // PHASE 4: Cargo Transit & Departure (21s - 27s)
          // Cargo glides steadily along deck transit line into stowage position
          const p = (t - 21.0) / 6.0; // 0 -> 1
          const easeInCubic = (x: number) => x * x * x;
          const transitX = easeInCubic(p) * 32;

          cargoRoot.position.set(transitX, 0, 0);

          // Camera: Pan following heavy motion
          camera.position.set(-10 + p * 5, 8, 20);
          cameraTarget.set(transitX * 0.6, 1.5, 0);
          camera.lookAt(cameraTarget);
        } else {
          // PHASE 5: Resolution & Reset (27s - 30s)
          // Cargo is clear. Quayside hold rests in mechanical stillness
          cargoRoot.position.set(100, 0, 0);
          spreaderRig.visible = false;

          camera.position.set(16, 12, 28);
          cameraTarget.set(0, 2.2, 0);
          camera.lookAt(cameraTarget);
        }

        threeRef.current.renderer.render(threeRef.current.scene, camera);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, autoCycleProjects]);

  // Jump to specific movement phase
  const jumpToPhase = (phase: MovementPhase) => {
    setCurrentTime(phase.startSec);
  };

  // Switch project directly
  const switchProject = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-[#0a0c10] text-[#f1f5f9] select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none border-none" : "h-[740px] sm:h-[820px]"
      }`}
    >
      {/* 3D WEBGL STAGE */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing" />

      {/* TOP EDITORIAL ARCHIVE HEADER */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-7 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Editorial Project Badge & Breadcrumb */}
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold">
              PROJECT ARCHIVE / CARGO IN MOTION
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
              {currentProject.origin} <span className="text-slate-500 font-sans font-light mx-1">→</span> {currentProject.destination}
            </h2>
            <span className="text-xs font-mono text-[#e1390f] uppercase tracking-wider font-semibold">
              RECORD #{currentProject.recordNumber}
            </span>
          </div>

          <p className="text-xs font-mono text-slate-400 max-w-xl truncate">
            {currentProject.rawSourceText}
          </p>
        </div>

        {/* Top Right Controls & Archival Photo Buttons */}
        <div className="pointer-events-auto flex items-center gap-2 self-start">
          {/* Archival Photography Trigger Chips */}
          {currentProject.photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setActivePhotoModal(activePhotoModal === photo.id ? null : photo.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition flex items-center gap-1.5 ${
                activePhotoModal === photo.id
                  ? "bg-[#e1390f] border-[#e1390f] text-white font-bold shadow-md shadow-[#e1390f]/20"
                  : "bg-black/60 border-white/15 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Photo {photo.id}</span>
            </button>
          ))}

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-lg bg-black/60 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 transition"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* THREE-PROJECT SELECTOR TABS (Minimal Editorial Navigation) */}
      <div className="absolute top-24 sm:top-28 left-4 sm:left-7 z-20 pointer-events-auto">
        <div className="inline-flex rounded-xl bg-black/70 p-1 border border-white/15 backdrop-blur-md">
          {ARCHIVE_PROJECTS.map((proj, idx) => {
            const isSelected = selectedProjectIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => switchProject(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-white/20 text-white font-bold border border-white/30 shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-[#e1390f] font-bold">{proj.recordNumber}</span>
                <span>{proj.origin.replace("EX ", "")}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PHASE 3 EDITORIAL PHYSICAL MANIFEST (Appears during 11s - 21s) */}
      {/* Editorial layout: SHANGHAI → JEBEL ALI | 482 MT | 796 CBM · 29 PKG | BREAK BULK SHIPMENT */}
      <div
        className={`absolute bottom-28 sm:bottom-32 left-4 sm:left-8 z-30 max-w-sm sm:max-w-md bg-[#0a0c10]/95 border border-white/20 rounded-xl p-5 backdrop-blur-xl shadow-2xl transition-all duration-700 ${
          currentTime >= 10.5 && currentTime <= 21.5
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#e1390f] shrink-0" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold truncate">
                RECORD #{currentProject.recordNumber} &bull; {currentProject.cargoType === 'mass' ? 'CARGO MASS' : currentProject.cargoType === 'modular_units' ? 'MODULAR UNITS' : 'BOOM CRANE'}
              </span>
            </div>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider shrink-0">
              11 MOVEMENTS
            </span>
          </div>

          {/* Editorial Route Title */}
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              PROJECT ROUTE
            </div>
            <div className="text-2xl sm:text-3xl font-black uppercase text-white font-[family-name:var(--font-barlow-condensed)] tracking-tight">
              {currentProject.origin} <span className="text-slate-500 font-sans font-light">→</span> {currentProject.destination}
            </div>
          </div>

          {/* Primary Metric Hero */}
          <div className="pt-1 pb-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {currentProject.metricLabel}
            </div>
            <div className="text-3xl sm:text-4xl font-black font-[family-name:var(--font-barlow-condensed)] text-white tracking-tight">
              {currentProject.primaryMetric}
            </div>
          </div>

          {/* Secondary Verified Manifest Metrics */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
            {currentProject.secondaryMetrics.map((sec, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/15 text-xs font-mono text-slate-200"
              >
                {sec}
              </span>
            ))}
          </div>

          {/* Classification & Source Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              {currentProject.classification}
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              project.html verbatim
            </span>
          </div>
        </div>
      </div>

      {/* ARCHIVAL PHOTOGRAPH EVIDENCE MODAL */}
      {activePhotoModal && (
        <div className="absolute top-24 sm:top-28 right-4 sm:right-7 z-40 w-80 sm:w-96 bg-[#0a0c10]/95 border border-white/20 rounded-xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          {(() => {
            const photo = currentProject.photos.find((p) => p.id === activePhotoModal);
            if (!photo) return null;
            return (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{photo.title}</span>
                  </div>
                  <button
                    onClick={() => setActivePhotoModal(null)}
                    className="text-slate-400 hover:text-white p-1"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-white/10 bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="pt-2 border-t border-white/10 font-mono text-[10px] text-amber-400 flex items-center justify-between">
                  <span>Authentic Archival Evidence</span>
                  <span className="text-slate-500">Source: Freyer Archive</span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* BOTTOM EDITORIAL TRANSPORT CONTROLS */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-6 z-20 space-y-3">
        {/* Phase Markers Ribbon */}
        <div className="grid grid-cols-5 gap-1.5 text-left">
          {PHASES.map((p) => {
            const isActive = activePhase.id === p.id;
            const isPassed = currentTime >= p.endSec;
            return (
              <button
                key={p.id}
                onClick={() => jumpToPhase(p)}
                className={`text-left p-1.5 sm:p-2 rounded-lg border transition-all ${
                  isActive
                    ? "bg-white/15 border-[#e1390f] shadow-md shadow-[#e1390f]/20"
                    : isPassed
                    ? "bg-white/5 border-white/15 text-slate-400 hover:bg-white/10"
                    : "bg-black/30 border-white/5 text-slate-600 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono font-bold">
                  <span className={isActive ? "text-[#e1390f]" : isPassed ? "text-slate-300" : "text-slate-500"}>
                    {p.label}
                  </span>
                  <span className="opacity-50 text-[8px] sm:text-[9px]">{p.startSec}s</span>
                </div>
                <div
                  className={`text-[10px] sm:text-xs font-semibold truncate mt-0.5 ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                >
                  {p.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Scrubbable Timeline Track */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, clickX / rect.width));
            setCurrentTime(ratio * TOTAL_CYCLE_DURATION);
          }}
          className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer"
        >
          <div
            className="absolute top-0 bottom-0 left-0 bg-[#e1390f] transition-all duration-75"
            style={{ width: `${(currentTime / TOTAL_CYCLE_DURATION) * 100}%` }}
          />
        </div>

        {/* Bottom Playback & Stage Controls */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 rounded-lg bg-[#e1390f] hover:bg-[#c42f0b] text-white transition flex items-center gap-1.5 font-bold shadow-md shadow-[#e1390f]/20"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              onClick={() => {
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition flex items-center gap-1"
              title="Restart Sequence"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            <button
              onClick={() => setAutoCycleProjects(!autoCycleProjects)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border transition ${
                autoCycleProjects
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-black/40 border-white/10 text-slate-500"
              }`}
            >
              Auto-Cycle: {autoCycleProjects ? "ON" : "OFF"}
            </button>

            <div className="text-slate-400 font-mono text-xs">
              <span className="text-white font-bold">{currentTime.toFixed(1)}s</span>
              <span className="opacity-50"> / {TOTAL_CYCLE_DURATION}.0s</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span className="hidden md:inline">Creative Visualization • Source Grounded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
