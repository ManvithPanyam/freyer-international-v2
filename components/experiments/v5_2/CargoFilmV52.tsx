"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Gauge, Maximize2 } from "lucide-react";

export interface CargoFilmRecord {
  id: number;
  weightMain: string;
  weightSuffix: string;
  cargoName: string;
  routeFrom: string;
  routeTo: string;
  mode: string;
  specs: {
    length?: string;
    width?: string;
    height?: string;
    volume?: string;
    packages?: string;
    date?: string;
  };
  caliperLabel: string;
  technicalNote: string;
  image: string;
  themeLayout: "horizontal-void" | "vertical-monolith" | "dual-tandem" | "hydraulic-compression" | "precision-vector";
}

export const CARGO_FILMS: CargoFilmRecord[] = [
  {
    id: 11,
    weightMain: "37.6",
    weightSuffix: "MT",
    cargoName: "Autoclave Boom Crane",
    routeFrom: "VENICE",
    routeTo: "MUNDRA",
    mode: "BBK on Container Vessel",
    specs: {
      length: "27.0 m",
      width: "4.0 m",
      height: "4.55 m",
      packages: "1 Unit (37,600 KG)",
    },
    caliperLabel: "↔ 27.0 M SPAN CALIPER",
    technicalNote: "Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.",
    image: "/images/11.1.jpg",
    themeLayout: "horizontal-void",
  },
  {
    id: 9,
    weightMain: "482",
    weightSuffix: "MT",
    cargoName: "Super Heavy Lift Lot",
    routeFrom: "SHANGHAI",
    routeTo: "JEBEL ALI",
    mode: "Break Bulk Shipment",
    specs: {
      volume: "796 CBM",
      packages: "29 Packages",
      date: "Documented Discharge",
    },
    caliperLabel: "Ø 796 CBM VOLUMETRIC DISCHARGE",
    technicalNote: "Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT.",
    image: "/images/9.1.jpg",
    themeLayout: "vertical-monolith",
  },
  {
    id: 4,
    weightMain: "2 × 148",
    weightSuffix: "MT",
    cargoName: "Dual Heavy Columns",
    routeFrom: "AL JUBAIL",
    routeTo: "JEBEL ALI",
    mode: "Door Delivery",
    specs: {
      packages: "2 × 148 MT + Accessories",
      volume: "296 MT Tandem Total",
    },
    caliperLabel: "↔ DUAL 148 MT TANDEM CLEARANCE",
    technicalNote: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories.",
    image: "/images/4.jpg",
    themeLayout: "dual-tandem",
  },
  {
    id: 2,
    weightMain: "200",
    weightSuffix: "MT",
    cargoName: "Heavy Lift Modules",
    routeFrom: "MASAN",
    routeTo: "CHENNAI",
    mode: "Heavy Lift Vessel",
    specs: {
      volume: "837 CBM",
      packages: "22 Packages",
      date: "May 2023",
    },
    caliperLabel: "↕ 837 CBM HYDRAULIC CELL",
    technicalNote: "22 Packages / 837 cbm / WT 200 MT (May 2023).",
    image: "/images/2.1.jpg",
    themeLayout: "hydraulic-compression",
  },
  {
    id: 1,
    weightMain: "37.1",
    weightSuffix: "MT",
    cargoName: "Precision Turbine Rotor",
    routeFrom: "KOBE",
    routeTo: "CHENNAI",
    mode: "RORO Movement",
    specs: {
      length: "9.04 m",
      width: "3.10 m",
      height: "3.16 m",
      date: "April 2023",
    },
    caliperLabel: "↔ 904 × 310 × 316 CM VECTOR AXIS",
    technicalNote: "904 x 310 x 316 cm - WT 37100 KG (April 2023).",
    image: "/images/1.jpg",
    themeLayout: "precision-vector",
  },
];

interface CargoFilmV52Props {
  onReachFinalRecord?: (isFinal: boolean) => void;
  externalActiveFilm?: number;
}

export function CargoFilmV52({ onReachFinalRecord, externalActiveFilm }: CargoFilmV52Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilmIndex, setActiveFilmIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);

  // Sync if externally controlled
  useEffect(() => {
    if (externalActiveFilm !== undefined && externalActiveFilm !== activeFilmIndex) {
      setDirection(externalActiveFilm > activeFilmIndex ? 1 : -1);
      setActiveFilmIndex(externalActiveFilm);
    }
  }, [externalActiveFilm]);

  // Scroll tracking to step through the 5 films
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        CARGO_FILMS.length - 1,
        Math.max(0, Math.floor(latest * CARGO_FILMS.length))
      );
      if (idx !== activeFilmIndex) {
        setDirection(idx > activeFilmIndex ? 1 : -1);
        setActiveFilmIndex(idx);
      }
    });
  }, [activeFilmIndex, scrollYProgress]);

  useEffect(() => {
    if (onReachFinalRecord) {
      onReachFinalRecord(activeFilmIndex === CARGO_FILMS.length - 1);
    }
  }, [activeFilmIndex, onReachFinalRecord]);

  const goToNextFilm = () => {
    if (activeFilmIndex < CARGO_FILMS.length - 1) {
      setDirection(1);
      setActiveFilmIndex((prev) => prev + 1);
    } else {
      setDirection(1);
      setActiveFilmIndex(0);
    }
  };

  const goToPrevFilm = () => {
    if (activeFilmIndex > 0) {
      setDirection(-1);
      setActiveFilmIndex((prev) => prev - 1);
    } else {
      setDirection(-1);
      setActiveFilmIndex(CARGO_FILMS.length - 1);
    }
  };

  const currentFilm = CARGO_FILMS[activeFilmIndex];

  return (
    <section
      ref={containerRef}
      id="project-cargo-film-section"
      className="relative w-full min-h-[420vh] bg-[#05080e] text-white"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-16 py-8 lg:py-12 select-none">
        {/* Subtle Background Radial Depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,57,15,0.08),rgba(5,8,14,0))]" />

        {/* TOP TECHNICAL BAR: Quiet Monospace Navigation */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e1390f] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-bold">
              Project Cargo // Motion Film [{activeFilmIndex + 1} of {CARGO_FILMS.length}]
            </span>
            <span className="hidden md:inline font-mono text-xs text-white/40">
              [AUTHENTIC EXECUTION • 5 DOCUMENTED LIFTS]
            </span>
          </div>

          {/* Film Scrubber Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex bg-white/5 border border-white/10 rounded p-1">
              {CARGO_FILMS.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setDirection(i > activeFilmIndex ? 1 : -1);
                    setActiveFilmIndex(i);
                  }}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-all rounded ${
                    i === activeFilmIndex
                      ? "bg-[#e1390f] text-white font-bold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {f.weightMain} {f.weightSuffix}
                </button>
              ))}
            </div>

            <button
              onClick={goToPrevFilm}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white/80 hover:text-white transition-colors"
              title="Previous Cargo Film"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNextFilm}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white/80 hover:text-white transition-colors"
              title="Next Cargo Film"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MAIN FILM EDITORIAL STAGE */}
        <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-2 sm:py-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentFilm.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 80 : -80,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -80 : 80,
                scale: 0.94,
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full"
            >
              {/* THE 5 DISTINCT MINI MOTION FILM COMPOSITIONS */}

              {/* FILM 1: 37.6 MT (Horizontal Void Composition) */}
              {currentFilm.themeLayout === "horizontal-void" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    {/* Giant Punched Typography */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-baseline gap-3"
                      >
                        <span className="text-7xl sm:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-none text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </motion.div>
                    </div>

                    {/* Route Vector Drawing */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-xs text-white/60 tracking-wider">
                        <span className="text-white font-bold">{currentFilm.routeFrom}</span>
                        <span className="text-[#e1390f] uppercase">{currentFilm.mode}</span>
                        <span className="text-white font-bold">{currentFilm.routeTo}</span>
                      </div>
                      <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#e1390f] to-[#ff6b4a]"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl border-l-2 border-[#e1390f] pl-4">
                      {currentFilm.technicalNote}
                    </p>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {Object.entries(currentFilm.specs).map(([key, val]) => (
                        <div
                          key={key}
                          className="bg-white/5 border border-white/10 px-3 py-1.5 rounded font-mono text-xs text-white/80"
                        >
                          <span className="text-white/40 uppercase mr-1.5">{key}:</span>
                          <span className="font-semibold text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Traveling Photograph with Caliper Overlay */}
                  <div className="lg:col-span-6 relative">
                    <motion.div
                      initial={{ x: -100, opacity: 0, scale: 0.92 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/15 bg-black/40 shadow-2xl"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoName}
                        fill
                        className="object-cover brightness-95 contrast-105"
                        priority
                      />

                      {/* Caliper Dimension Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-[#e1390f]/60 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-white"
                      >
                        <span className="text-[#e1390f] font-bold">|◀</span>
                        <span className="tracking-widest uppercase text-white font-semibold">
                          {currentFilm.caliperLabel}
                        </span>
                        <span className="text-[#e1390f] font-bold">▶|</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* FILM 2: 482 MT (Vertical Monolith Explosion) */}
              {currentFilm.themeLayout === "vertical-monolith" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 relative order-2 lg:order-1">
                    {/* Massive Monolithic Photograph Dropping in with Hydraulic Momentum */}
                    <motion.div
                      initial={{ y: -70, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#e1390f]/30 bg-black/60 shadow-2xl"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoName}
                        fill
                        className="object-cover brightness-90 contrast-110"
                        priority
                      />
                      {/* Industrial Framing Reticles */}
                      <div className="absolute top-3 left-3 font-mono text-[10px] text-[#e1390f] tracking-widest bg-black/80 px-2 py-1 border border-white/10">
                        SUPER HEAVY LIFT RECORD // BREAK BULK
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/20 p-3 font-mono text-xs flex justify-between items-center text-white">
                        <span className="text-[#e1390f] font-bold">DISCHARGE ANALYSIS:</span>
                        <span>{currentFilm.caliperLabel}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                    <motion.div
                      initial={{ scale: 1.25, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-1"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e1390f] font-bold block">
                        RECORD TONNAGE DISCHARGE
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-8xl sm:text-9xl lg:text-[8.5rem] font-black tracking-tighter leading-none text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-4xl lg:text-5xl font-mono font-black text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </div>
                    </motion.div>

                    <div className="border-t border-b border-white/10 py-3 space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between text-white/60">
                        <span>ORIGIN: <strong className="text-white">{currentFilm.routeFrom}</strong></span>
                        <span>DESTINATION: <strong className="text-white">{currentFilm.routeTo}</strong></span>
                      </div>
                      <div className="text-[#e1390f] font-semibold">{currentFilm.mode}</div>
                    </div>

                    <p className="font-mono text-xs text-white/70 leading-relaxed">
                      {currentFilm.technicalNote}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                      {Object.entries(currentFilm.specs).map(([k, v]) => (
                        <div key={k} className="bg-white/5 border border-white/10 p-2 rounded">
                          <span className="text-white/40 block text-[10px] uppercase">{k}</span>
                          <span className="text-white font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FILM 3: 2 × 148 MT (Dual Tandem Synchronized Screen) */}
              {currentFilm.themeLayout === "dual-tandem" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-bold block mb-1">
                        TANDEM SPLIT CONVOY // DUAL UNIT SHIPMENT
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-3xl sm:text-4xl font-mono font-bold text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-white/70 max-w-md bg-white/5 p-3 rounded border border-white/10">
                      {currentFilm.technicalNote}
                    </div>
                  </div>

                  {/* Twin Photograph and Dual Caliper Geometry */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <motion.div
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.75, delay: 0.15 }}
                      className="md:col-span-7 relative aspect-[16/9] rounded-lg overflow-hidden border border-white/20"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoName}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-3 px-4 py-2 bg-black/80 backdrop-blur-md flex justify-between font-mono text-[11px] text-white border-t border-[#e1390f]/50">
                        <span>UNIT A: 148 MT</span>
                        <span className="text-[#e1390f] font-bold">{currentFilm.caliperLabel}</span>
                        <span>UNIT B: 148 MT</span>
                      </div>
                    </motion.div>

                    <div className="md:col-span-5 space-y-4 font-mono text-xs">
                      <div className="bg-white/5 border border-white/10 p-4 rounded space-y-3">
                        <span className="text-[#e1390f] uppercase tracking-wider block font-bold text-[10px]">
                          Tandem Corridor Routing
                        </span>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold">{currentFilm.routeFrom}</span>
                          <span className="text-white/40">══════►</span>
                          <span className="font-bold">{currentFilm.routeTo}</span>
                        </div>
                        <div className="text-white/60 text-[11px]">{currentFilm.mode}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(currentFilm.specs).map(([k, v]) => (
                          <div key={k} className="bg-white/5 border border-white/10 p-2.5 rounded">
                            <span className="text-white/40 block text-[10px] uppercase">{k}</span>
                            <span className="text-white font-bold">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FILM 4: 200 MT (Hydraulic Compression) */}
              {currentFilm.themeLayout === "hydraulic-compression" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-bold block mb-2">
                        HEAVY LIFT VESSEL CELL
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-8xl sm:text-9xl font-black tracking-tight text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-4xl font-mono font-black text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </div>
                    </div>

                    <div className="font-mono text-xs space-y-2 border-l-2 border-white/20 pl-4">
                      <div className="text-white/50 uppercase text-[10px]">CORRIDOR TRAJECTORY:</div>
                      <div className="text-sm font-bold text-white">
                        {currentFilm.routeFrom} ──► {currentFilm.routeTo}
                      </div>
                      <p className="text-white/70">{currentFilm.technicalNote}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {Object.entries(currentFilm.specs).map(([k, v]) => (
                        <div key={k} className="bg-white/5 border border-white/10 px-3 py-1 rounded">
                          <span className="text-white/40 uppercase mr-1">{k}:</span>
                          <span className="text-white font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 relative">
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/20"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoName}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-2 font-mono text-xs flex justify-between text-white border-t border-white/15">
                        <span className="text-[#e1390f] font-bold">CELL DIMENSIONS:</span>
                        <span>{currentFilm.caliperLabel}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* FILM 5: 37.1 MT (Precision Vector Trajectory — Connects into Services) */}
              {currentFilm.themeLayout === "precision-vector" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-[#e1390f]/20 border border-[#e1390f]/40 px-3 py-1 rounded font-mono text-xs text-[#e1390f]">
                      <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
                      TRANS-OCEANIC VECTOR // KOBE TO CHENNAI
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-8xl sm:text-9xl font-black tracking-tight text-white">
                        {currentFilm.weightMain}
                      </span>
                      <span className="text-4xl font-mono font-bold text-[#e1390f]">
                        {currentFilm.weightSuffix}
                      </span>
                    </div>

                    {/* Vector Trajectory Line */}
                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-xs text-white">
                        <span className="font-bold">{currentFilm.routeFrom}</span>
                        <span className="text-[#e1390f] font-semibold">{currentFilm.mode}</span>
                        <span className="font-bold">{currentFilm.routeTo}</span>
                      </div>
                      <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#e1390f]"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.0, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed border-l-2 border-[#e1390f] pl-4">
                      {currentFilm.technicalNote}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {Object.entries(currentFilm.specs).map(([k, v]) => (
                        <div key={k} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded font-mono text-xs">
                          <span className="text-white/40 uppercase mr-1.5">{k}:</span>
                          <span className="text-white font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/20 bg-black/50"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoName}
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Animated Continuous Caliper Vector */}
                      <motion.div
                        className="absolute inset-x-0 bottom-0 bg-black/85 backdrop-blur-md px-4 py-2.5 font-mono text-xs flex justify-between items-center text-white border-t border-[#e1390f]/70"
                      >
                        <span className="text-[#e1390f] font-bold">MEASUREMENT:</span>
                        <span className="tracking-wider">{currentFilm.caliperLabel}</span>
                        <span className="text-[#e1390f] animate-pulse">CONTINUOUS VECTOR ▼</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM VOYAGE METRICS BAR */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-white/40 block text-[10px] uppercase">CARGO RECORD:</span>
              <span className="text-white font-bold">{currentFilm.cargoName}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">TRANSIT MODE:</span>
              <span className="text-white font-bold">{currentFilm.mode}</span>
            </div>
          </div>

          <div className="text-right flex items-center gap-3">
            <span className="text-white/40">SCROLL DOWN TO ADVANCE CARGO FILMS</span>
            <span className="text-[#e1390f] font-bold animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
