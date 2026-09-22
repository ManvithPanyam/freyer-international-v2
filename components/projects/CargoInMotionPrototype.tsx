"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { CargoProjectRecord } from "@/data/cargo-records";
import { RotateCcw, Play, Pause, Compass, Layers, ShieldCheck } from "lucide-react";

interface CargoInMotionPrototypeProps {
  record: CargoProjectRecord;
  externalProgress?: number;
  onProgressChange?: (progress: number) => void;
}

/**
 * FREYER / CARGO IN MOTION — PROTOTYPE SPEC IMPLEMENTATION
 * Single Record: Shanghai → Jebel Ali, 482 MT
 *
 * 5 KEYFRAMES:
 * KF0 (0.00 – 0.15) — Establishing: Dim industrial port/vessel deck, dusk lighting, atmospheric haze. Distant cargo silhouette. "11 DOCUMENTED MOVEMENTS".
 * KF1 (0.15 – 0.35) — Approach: Push-in along Z axis, key light rises on cargo unit, environment focus.
 * KF2 (0.35 – 0.55) — Identification: Settles into 3/4 hero angle. Physical manifest stamp: "SHANGHAI → JEBEL ALI".
 * KF3 (0.55 – 0.85) — Manifest Reveal: Camera locked. Remaining fields stamp on in sequence: 482 MT -> 796 CBM -> 29 PACKAGES.
 * KF4 (0.85 – 1.00) — Settle / Loop Point: Micro pull-back (~10% dolly out), full manifest + cargo held in frame.
 */
export default function CargoInMotionPrototype({
  record,
  externalProgress,
  onProgressChange,
}: CargoInMotionPrototypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Internal progress (0.0 to 1.0)
  const [internalProgress, setInternalProgress] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);

  const activeProgress = externalProgress !== undefined ? externalProgress : internalProgress;
  const progressRef = useRef<number>(activeProgress);
  progressRef.current = activeProgress;

  // Three.js References
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cargoRoot: THREE.Group;
    breakbulkMass: THREE.Group;
    genericSilhouette: THREE.Group;
    keyLight: THREE.DirectionalLight;
    sodiumSpot: THREE.SpotLight;
    rimLight: THREE.DirectionalLight;
    initialCamPos: THREE.Vector3;
    heroCamPos: THREE.Vector3;
    finalCamPos: THREE.Vector3;
  } | null>(null);

  // ---------------------------------------------------------------------------
  // INITIALIZE THREE.JS SCENE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 1200;
    const height = canvas.clientHeight || 700;

    // SCENE & ATMOSPHERE: Dim dusk port/vessel deck, chiaroscuro
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0e12); // Asphalt charcoal
    scene.fog = new THREE.FogExp2(0x0c0e12, 0.022); // Atmospheric port haze

    // CAMERA: Perspective (Field of view 36 for cinematic industrial compression)
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 150);
    const initialCamPos = new THREE.Vector3(0, 7.5, 34); // KF0 wide establishing
    const heroCamPos = new THREE.Vector3(14, 5.2, 19);   // KF2 3/4 hero angle (settled)
    const finalCamPos = new THREE.Vector3(15.4, 5.7, 21); // KF4 micro pull-back (~10% dolly out)

    camera.position.copy(initialCamPos);
    camera.lookAt(0, 1.8, 0);

    // RENDERER: Performance tuned (60fps on mid-range laptop)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // LIGHTING SYSTEM
    // Dusk Ambient
    const ambientLight = new THREE.AmbientLight(0x181c24, 0.9);
    scene.add(ambientLight);

    // Primary Industrial Key Light (Rises during KF1 approach)
    const keyLight = new THREE.DirectionalLight(0xf1f5f9, 0.4);
    keyLight.position.set(16, 24, 18);
    scene.add(keyLight);

    // Quayside High-Pressure Sodium Spot (Warm dusk maritime sodium illumination)
    const sodiumSpot = new THREE.SpotLight(0xd97706, 0.8, 55, Math.PI / 4, 0.5, 1);
    sodiumSpot.position.set(-16, 20, 10);
    sodiumSpot.target.position.set(0, 0, 0);
    scene.add(sodiumSpot);
    scene.add(sodiumSpot.target);

    // Subtle Cool Blue Sky Rim Light (Edge definition)
    const rimLight = new THREE.DirectionalLight(0x475569, 0.7);
    rimLight.position.set(-15, 10, -18);
    scene.add(rimLight);

    // -------------------------------------------------------------------------
    // PORT DECK / VESSEL STOWAGE STAGE
    // Baked planar shadow + industrial steel hatch grid
    // -------------------------------------------------------------------------
    const deckGroup = new THREE.Group();
    scene.add(deckGroup);

    // Deck Surface
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x121418,
      roughness: 0.85,
      metalness: 0.25,
    });
    const deckMesh = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), deckMat);
    deckMesh.rotation.x = -Math.PI / 2;
    deckMesh.position.y = 0;
    deckGroup.add(deckMesh);

    // Steel Hatch Plate Grid Lines
    const gridHelper = new THREE.GridHelper(70, 35, 0x222630, 0x171a20);
    gridHelper.position.y = 0.01;
    deckGroup.add(gridHelper);

    // Baked Ground Ambient Contact Shadow
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x040507,
      transparent: true,
      opacity: 0.75,
    });
    const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(24, 8), shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, 0.02, 0);
    deckGroup.add(shadowMesh);

    // Heavy Hardwood Dunnage Sleepers (supporting the cargo mass off deck)
    const timberMat = new THREE.MeshStandardMaterial({
      color: 0x271e16,
      roughness: 0.95,
      metalness: 0.05,
    });
    for (let x = -8; x <= 8; x += 2.6) {
      const sleeper = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 5.2), timberMat);
      sleeper.position.set(x, 0.175, 0);
      deckGroup.add(sleeper);
    }

    // -------------------------------------------------------------------------
    // CARGO OBJECT ROOT & SHIPMENT-TYPE SILHOUETTE SELECTION (§3)
    // -------------------------------------------------------------------------
    const cargoRoot = new THREE.Group();
    scene.add(cargoRoot);

    // --- Branch A: Dedicated Break Bulk Mass (Record #9 Shanghai 482 MT) ---
    const breakbulkMass = new THREE.Group();
    cargoRoot.add(breakbulkMass);

    const weatheredSteelMat = new THREE.MeshStandardMaterial({
      color: 0x23262d,
      roughness: 0.72,
      metalness: 0.45,
    });
    const structuralRibMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c22,
      roughness: 0.65,
      metalness: 0.55,
    });

    const girderLength = 17.5;
    const girderHeight = 2.6;
    const girderWidth = 1.8;

    // Twin massive fabricated steel box girders
    const girderA = new THREE.Mesh(new THREE.BoxGeometry(girderLength, girderHeight, girderWidth), weatheredSteelMat);
    girderA.position.set(0, girderHeight / 2 + 0.35, -1.35);
    breakbulkMass.add(girderA);

    const girderB = new THREE.Mesh(new THREE.BoxGeometry(girderLength, girderHeight, girderWidth), weatheredSteelMat);
    girderB.position.set(0, girderHeight / 2 + 0.35, 1.35);
    breakbulkMass.add(girderB);

    // Heavy structural cross-lacing diaphragms (6 internal reinforcement bays)
    for (let x = -7; x <= 7; x += 2.8) {
      const diaphragm = new THREE.Mesh(new THREE.BoxGeometry(0.65, girderHeight - 0.3, 2.7), structuralRibMat);
      diaphragm.position.set(x, girderHeight / 2 + 0.35, 0);
      breakbulkMass.add(diaphragm);
    }

    // Lifting lugs / trunnions
    const lugPositions = [
      { x: -7.2, z: -1.35 },
      { x: 7.2, z: -1.35 },
      { x: -7.2, z: 1.35 },
      { x: 7.2, z: 1.35 },
      { x: -2.4, z: -1.35 },
      { x: 2.4, z: -1.35 },
      { x: -2.4, z: 1.35 },
      { x: 2.4, z: 1.35 },
    ];
    lugPositions.forEach((pos) => {
      const lug = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.65, 16), structuralRibMat);
      lug.position.set(pos.x, girderHeight + 0.55, pos.z);
      breakbulkMass.add(lug);
    });

    // --- Branch B: Generic Heavy-Lift Silhouette (Fallback per §3) ---
    const genericSilhouette = new THREE.Group();
    cargoRoot.add(genericSilhouette);

    const genericMat = new THREE.MeshStandardMaterial({
      color: 0x1f2228,
      roughness: 0.8,
      metalness: 0.3,
    });
    const genericBody = new THREE.Mesh(new THREE.BoxGeometry(14, 3.2, 4), genericMat);
    genericBody.position.set(0, 1.95, 0);
    genericSilhouette.add(genericBody);

    // Branch visibility based strictly on record.shipment_type
    const isBreakBulk = record.shipment_type === "Break Bulk";
    breakbulkMass.visible = isBreakBulk;
    genericSilhouette.visible = !isBreakBulk;

    threeRef.current = {
      scene,
      camera,
      renderer,
      cargoRoot,
      breakbulkMass,
      genericSilhouette,
      keyLight,
      sodiumSpot,
      rimLight,
      initialCamPos,
      heroCamPos,
      finalCamPos,
    };

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

    // -------------------------------------------------------------------------
    // ANIMATION & SCROLL-DRIVEN CAMERA TICK
    // -------------------------------------------------------------------------
    let frameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const renderLoop = (time: number) => {
      frameId = requestAnimationFrame(renderLoop);

      // FPS tracking
      frameCount++;
      if (time - lastFpsUpdate >= 500) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      const p = progressRef.current; // 0.0 -> 1.0

      if (threeRef.current) {
        const {
          scene,
          camera,
          renderer,
          keyLight,
          sodiumSpot,
          rimLight,
          initialCamPos,
          heroCamPos,
          finalCamPos,
        } = threeRef.current;

        // Easing utilities
        const easeInOutCubic = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
        const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);

        // ---------------------------------------------------------------------
        // CAMERA PATH & LIGHTING CHOREOGRAPHY
        // ---------------------------------------------------------------------
        if (p <= 0.15) {
          // KF0: Establishing (0.00 – 0.15)
          // Wide shot: dim port deck, distant silhouette
          const subP = p / 0.15;
          camera.position.lerpVectors(initialCamPos, new THREE.Vector3(0, 7.2, 30), easeInOutCubic(subP));
          camera.lookAt(0, 1.8, 0);

          // Lighting: Low dusk keys
          keyLight.intensity = 0.4 + subP * 0.2;
          sodiumSpot.intensity = 0.8 + subP * 0.4;
          rimLight.intensity = 0.7;
        } else if (p > 0.15 && p <= 0.35) {
          // KF1: Approach (0.15 – 0.35)
          // Camera dolly-in along Z axis into hero proximity
          const subP = (p - 0.15) / 0.2;
          const fromPos = new THREE.Vector3(0, 7.2, 30);
          const toPos = new THREE.Vector3(7, 6.0, 24);
          camera.position.lerpVectors(fromPos, toPos, easeInOutCubic(subP));
          camera.lookAt(0, 1.8, 0);

          // Key light rises on cargo unit
          keyLight.intensity = 0.6 + subP * 1.4;
          sodiumSpot.intensity = 1.2 + subP * 1.6;
          rimLight.intensity = 0.7 + subP * 0.5;
        } else if (p > 0.35 && p <= 0.55) {
          // KF2: Identification (0.35 – 0.55)
          // Settles into 3/4 hero angle (~5° lateral yaw)
          const subP = (p - 0.35) / 0.2;
          const fromPos = new THREE.Vector3(7, 6.0, 24);
          camera.position.lerpVectors(fromPos, heroCamPos, easeOutQuad(subP));
          camera.lookAt(0, 1.8, 0);

          // Lighting at full hero intensity
          keyLight.intensity = 2.0;
          sodiumSpot.intensity = 2.8;
          rimLight.intensity = 1.2;
        } else if (p > 0.55 && p <= 0.85) {
          // KF3: Manifest Reveal (0.55 – 0.85)
          // Camera strictly locked to let manifest stamping breathe
          camera.position.copy(heroCamPos);
          camera.lookAt(0, 1.8, 0);

          keyLight.intensity = 2.0;
          sodiumSpot.intensity = 2.8;
          rimLight.intensity = 1.2;
        } else {
          // KF4: Settle / Loop point (0.85 – 1.00)
          // Micro pull-back (~10% dolly out), hold composition
          const subP = (p - 0.85) / 0.15;
          camera.position.lerpVectors(heroCamPos, finalCamPos, easeInOutCubic(subP));
          camera.lookAt(0, 1.8, 0);
        }

        renderer.render(scene, camera);
      }
    };

    frameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [record]);

  // Autoplay ticker for non-scroll preview
  useEffect(() => {
    if (!isAutoPlaying) return;
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setInternalProgress((prev) => {
        const next = prev + delta / 26; // ~26 seconds full loop
        if (next >= 1.0) return 0;
        return next;
      });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoPlaying]);

  // Handle scroll or slider scrub
  const handleProgressChange = (newP: number) => {
    const clamped = Math.max(0, Math.min(1, newP));
    setInternalProgress(clamped);
    if (onProgressChange) onProgressChange(clamped);
  };

  // Scroll linkage when mouse wheels inside canvas container
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * 0.0008;
    handleProgressChange(activeProgress + delta);
  };

  // Current Keyframe descriptor for status
  const currentKeyframe = useMemo(() => {
    const p = activeProgress;
    if (p < 0.15) return { name: "KF0 — Establishing", sec: "0–4s", desc: "Wide dusk industrial port, distant cargo silhouette" };
    if (p < 0.35) return { name: "KF1 — Approach", sec: "4–10s", desc: "Camera dolly-in along Z-axis, key light rising on unit" };
    if (p < 0.55) return { name: "KF2 — Identification", sec: "10–16s", desc: "Settle into 3/4 hero angle, route stenciled reveal" };
    if (p < 0.85) return { name: "KF3 — Manifest Reveal", sec: "16–24s", desc: "Camera locked, sequential manifest physical stamping" };
    return { name: "KF4 — Settle / Hold", sec: "24–30s", desc: "Micro pull-back, full manifest & cargo held in frame" };
  }, [activeProgress]);

  // ---------------------------------------------------------------------------
  // MANIFEST STENCIL SEQUENTIAL TIMING (§1 KF2 & KF3)
  // ---------------------------------------------------------------------------
  // Route reveal: KF2 (starts at p >= 0.38, stamps solid by p >= 0.44)
  const showRoute = activeProgress >= 0.38;
  const routeStampProgress = Math.min(1, Math.max(0, (activeProgress - 0.38) / 0.08));

  // Weight reveal: KF3-A (starts at p >= 0.56, stamps solid by p >= 0.62)
  const showWeight = Boolean(record.weight_mt) && activeProgress >= 0.56;
  const weightStampProgress = Math.min(1, Math.max(0, (activeProgress - 0.56) / 0.06));

  // Volume reveal: KF3-B (starts at p >= 0.65, stamps solid by p >= 0.71)
  const showVolume = Boolean(record.volume_cbm) && activeProgress >= 0.65;
  const volumeStampProgress = Math.min(1, Math.max(0, (activeProgress - 0.65) / 0.06));

  // Packages reveal: KF3-C (starts at p >= 0.74, stamps solid by p >= 0.80)
  const showPackages = Boolean(record.packages) && activeProgress >= 0.74;
  const packagesStampProgress = Math.min(1, Math.max(0, (activeProgress - 0.74) / 0.06));

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="relative w-full aspect-[16/9] min-h-[560px] max-h-[760px] bg-[#0c0e12] rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none"
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* ------------------------------------------------------------------- */}
      {/* KF0: ESTABLISHING TYPOGRAPHY OVERLAY ("11 DOCUMENTED MOVEMENTS")     */}
      {/* ------------------------------------------------------------------- */}
      <div
        className={`absolute top-8 left-8 sm:left-12 z-20 transition-opacity duration-700 pointer-events-none ${
          activeProgress <= 0.22 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#e1390f] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#e1390f] uppercase font-bold">
            ARCHIVE MONOGRAPH
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
          11 DOCUMENTED MOVEMENTS
        </h2>
        <p className="text-xs font-mono text-white/50 tracking-wider mt-1">
          PHYSICAL HEAVY-LIFT PROJECT VERIFICATION &bull; RECORD #{record.id.replace("cargo-", "")}
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* KF2 & KF3: PHYSICAL MANIFEST STENCIL OVERLAY                        */}
      {/* Rendered as industrial stenciled typography physically aligned      */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end p-8 sm:p-12 pb-24 sm:pb-28">
        {/* Physical Stencil Block */}
        <div className="max-w-2xl">
          {/* 1. ROUTE STENCIL (KF2: SHANGHAI → JEBEL ALI) */}
          {showRoute && (
            <div
              style={{
                opacity: routeStampProgress,
                transform: `translateY(${(1 - routeStampProgress) * 12}px) scale(${0.96 + routeStampProgress * 0.04})`,
              }}
              className="transition-transform duration-300 mb-3 inline-block"
            >
              <div className="px-3 py-1 bg-[#14171d]/90 backdrop-blur-sm border border-white/20 rounded-md inline-flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-sm sm:text-base font-mono font-bold tracking-[0.2em] text-white uppercase">
                  {record.route_origin} → {record.route_destination}
                </span>
                {record.shipment_type && (
                  <span className="text-[10px] font-mono text-white/50 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                    {record.shipment_type}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 2. SEQUENTIAL MANIFEST STAMPS (KF3) */}
          <div className="flex flex-wrap items-baseline gap-4 sm:gap-8">
            {/* Field 1: 482 MT (if present in record) */}
            {record.weight_mt !== null && showWeight && (
              <div
                style={{
                  opacity: weightStampProgress,
                  transform: `scale(${0.9 + weightStampProgress * 0.1})`,
                }}
                className="transition-transform duration-300"
              >
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-[family-name:var(--font-barlow-condensed)] leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {record.weight_mt} <span className="text-2xl sm:text-3xl text-[#e1390f]">MT</span>
                </div>
                <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase mt-1">
                  GROSS CARGO WEIGHT
                </div>
              </div>
            )}

            {/* Field 2: 796 CBM (if present in record) */}
            {record.volume_cbm !== null && showVolume && (
              <div
                style={{
                  opacity: volumeStampProgress,
                  transform: `scale(${0.9 + volumeStampProgress * 0.1})`,
                }}
                className="transition-transform duration-300"
              >
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-[family-name:var(--font-barlow-condensed)] leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {record.volume_cbm} <span className="text-2xl sm:text-3xl text-white/70">CBM</span>
                </div>
                <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase mt-1">
                  CUBIC VOLUME
                </div>
              </div>
            )}

            {/* Field 3: 29 PACKAGES (if present in record) */}
            {record.packages !== null && showPackages && (
              <div
                style={{
                  opacity: packagesStampProgress,
                  transform: `scale(${0.9 + packagesStampProgress * 0.1})`,
                }}
                className="transition-transform duration-300"
              >
                <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-[family-name:var(--font-barlow-condensed)] leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {record.packages} <span className="text-2xl sm:text-3xl text-white/70">PKG</span>
                </div>
                <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/60 uppercase mt-1">
                  FABRICATED UNITS
                </div>
              </div>
            )}

            {/* Conditional dimensions (Silently omitted when null) */}
            {record.dimensions_cm && (
              <div className="text-sm font-mono text-white/80">
                {record.dimensions_cm}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* TELEMETRY & CONTROLS DOCK                                          */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl p-3 px-4">
        {/* Playback & Keyframe Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5 text-xs font-mono"
            title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span className="hidden sm:inline">{isAutoPlaying ? "PAUSE" : "AUTOPLAY"}</span>
          </button>

          <button
            onClick={() => handleProgressChange(0)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
            title="Reset to KF0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <div className="border-l border-white/10 pl-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">{currentKeyframe.name}</span>
              <span className="text-[10px] font-mono text-white/40">({currentKeyframe.sec})</span>
            </div>
            <div className="text-[10px] font-mono text-white/50 hidden md:block">
              {currentKeyframe.desc}
            </div>
          </div>
        </div>

        {/* Scroll / Scrub Progress Slider */}
        <div className="flex items-center gap-3 flex-1 max-w-xs sm:max-w-md">
          <span className="text-[10px] font-mono text-white/50 shrink-0">SCROLL / SCRUB</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={activeProgress}
            onChange={(e) => {
              setIsAutoPlaying(false);
              handleProgressChange(parseFloat(e.target.value));
            }}
            className="w-full accent-[#e1390f] bg-white/20 h-1.5 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-mono text-white/90 shrink-0 w-10 text-right">
            {Math.round(activeProgress * 100)}%
          </span>
        </div>

        {/* Performance telemetry */}
        <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-3 text-[11px] font-mono text-white/50">
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${fps >= 55 ? "bg-emerald-400" : fps >= 30 ? "bg-amber-400" : "bg-red-400"}`} />
            <span>{fps} FPS</span>
          </div>
          <span className="text-white/20">&bull;</span>
          <span>{record.shipment_type || "Generic"} Silhouette</span>
        </div>
      </div>
    </div>
  );
}
