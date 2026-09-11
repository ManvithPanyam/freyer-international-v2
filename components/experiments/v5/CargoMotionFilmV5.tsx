"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ProjectRecord {
  id: number;
  weight: string;
  weightSub: string;
  routeFrom: string;
  routeTo: string;
  mode: string;
  dimensions?: string;
  dimensionDetails?: {
    length: string;
    width: string;
    height: string;
  };
  packages?: string;
  volume?: string;
  date?: string;
  technicalNote: string;
  primaryImage: string;
}

export const VERIFIED_MOVEMENTS: ProjectRecord[] = [
  {
    id: 11,
    weight: "37.6 MT",
    weightSub: "Single Unit Net Weight (37,600 KG)",
    routeFrom: "VENICE",
    routeTo: "MUNDRA",
    mode: "BBK on Container Vessel",
    dimensions: "2700 × 400 × 455 cm",
    dimensionDetails: {
      length: "2700 cm",
      width: "400 cm",
      height: "455 cm",
    },
    technicalNote:
      "Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.",
    primaryImage: "/images/11.1.jpg",
  },
  {
    id: 9,
    weight: "482 MT",
    weightSub: "Total Cargo Weight",
    routeFrom: "SHANGHAI",
    routeTo: "JEBEL ALI",
    mode: "Break Bulk Shipment",
    packages: "29 Packages",
    volume: "796 CBM",
    technicalNote: "Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT.",
    primaryImage: "/images/9.1.jpg",
  },
  {
    id: 4,
    weight: "2 × 148 MT",
    weightSub: "Heaviest Dual Units (296 MT Total)",
    routeFrom: "AL JUBAIL",
    routeTo: "JEBEL ALI",
    mode: "Door Delivery",
    technicalNote: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories.",
    primaryImage: "/images/4.jpg",
  },
  {
    id: 2,
    weight: "200 MT",
    weightSub: "Total Movement Weight",
    routeFrom: "MASAN",
    routeTo: "CHENNAI",
    mode: "Break Bulk",
    packages: "22 Packages",
    volume: "837 CBM",
    date: "May 2023",
    technicalNote: "22 Packages / 837 cbm / WT 200 MT (May 2023).",
    primaryImage: "/images/2.1.jpg",
  },
  {
    id: 1,
    weight: "37.1 MT",
    weightSub: "Net Weight (37,100 KG)",
    routeFrom: "KOBE",
    routeTo: "CHENNAI",
    mode: "RORO Movement",
    dimensions: "904 × 310 × 316 cm",
    dimensionDetails: {
      length: "904 cm",
      width: "310 cm",
      height: "316 cm",
    },
    date: "April 2023",
    technicalNote: "904 x 310 x 316 cm - WT 37100 KG (April 2023).",
    primaryImage: "/images/1.jpg",
  },
];

export function CargoMotionFilmV5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualIndex, setManualIndex] = useState<number | null>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track continuous scroll progression across the 5 project movements
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (manualIndex !== null) return;
      const idx = Math.min(
        VERIFIED_MOVEMENTS.length - 1,
        Math.max(0, Math.floor(v * VERIFIED_MOVEMENTS.length))
      );
      setScrollIndex(idx);
    });
  }, [scrollYProgress, manualIndex]);

  const activeIndex = manualIndex !== null ? manualIndex : scrollIndex;
  const current = VERIFIED_MOVEMENTS[activeIndex];

  const handleSelect = (idx: number) => {
    setManualIndex(idx);
    setTimeout(() => setManualIndex(null), 4000);
  };

  const handleNext = () => {
    handleSelect((activeIndex + 1) % VERIFIED_MOVEMENTS.length);
  };

  const handlePrev = () => {
    handleSelect((activeIndex - 1 + VERIFIED_MOVEMENTS.length) % VERIFIED_MOVEMENTS.length);
  };

  return (
    <div
      ref={containerRef}
      id="cargo-scene"
      className="relative bg-[#040912] text-white selection:bg-[#e1390f] selection:text-white md:min-h-[250vh]"
    >
      {/* Desktop Viewport: Sticky Film Experience */}
      <div className="hidden md:flex sticky top-0 h-screen flex-col justify-between py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden">
        {/* Editorial Top Line */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Project
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[0.95]">
              Project Cargo
            </h2>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Record"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-slate-300" />
            </button>
            <div className="text-xs font-mono tracking-widest text-slate-400">
              0{activeIndex + 1} / 0{VERIFIED_MOVEMENTS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Record"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>

        {/* The Motion Film Stage: Numbers scale & track spatially, route lines draw, dimensions caliper animate */}
        <div className="my-auto py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Spatial Typography & Route Vector */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Animated Route Line */}
                <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 mb-3">
                  <span className="font-semibold">{current.routeFrom}</span>
                  <div className="relative w-16 sm:w-24 h-4 flex items-center">
                    <motion.svg
                      viewBox="0 0 100 12"
                      className="w-full h-full overflow-visible"
                    >
                      <motion.line
                        x1="0"
                        y1="6"
                        x2="92"
                        y2="6"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.polygon
                        points="90,2 100,6 90,10"
                        fill="#f59e0b"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                      />
                      {/* Traveling Cargo Micro-Pip */}
                      <motion.circle
                        r="2.5"
                        fill="#ffffff"
                        initial={{ cx: 0, cy: 6 }}
                        animate={{ cx: 90, cy: 6 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </div>
                  <span className="font-semibold">{current.routeTo}</span>
                </div>

                {/* Monumental Scaling Weight Numeral */}
                <motion.div
                  initial={{ scale: 0.92, y: 15 }}
                  animate={{ scale: 1.0, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-8xl md:text-9xl xl:text-[9.5rem] font-light tracking-tighter text-white leading-[0.88] mb-2"
                >
                  {current.weight}
                </motion.div>

                <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-6 font-light">
                  {current.weightSub}
                </div>

                {/* Technical Specifications & Caliper Dimension Indicators */}
                <div className="border-t border-white/10 pt-4 space-y-3 max-w-xl text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono text-xs">
                        Mode
                      </div>
                      <div className="text-white font-medium">
                        {current.mode}
                      </div>
                    </div>

                    {current.dimensions && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono text-xs">
                          Dimensions (L × W × H)
                        </div>
                        <div className="text-white font-medium font-mono text-xs sm:text-sm">
                          {current.dimensions}
                        </div>
                      </div>
                    )}

                    {current.packages && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono text-xs">
                          Scope
                        </div>
                        <div className="text-white font-medium">
                          {current.packages} {current.volume ? `• ${current.volume}` : ""}
                        </div>
                      </div>
                    )}

                    {current.date && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono text-xs">
                          Date
                        </div>
                        <div className="text-white font-medium">
                          {current.date}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Verbatim Record Excerpt */}
                  <div className="pt-2 border-t border-white/5 text-xs text-slate-300 font-light leading-relaxed">
                    &ldquo;{current.technicalNote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Right Column: Motion Film Photographic Plate with Measurement Overlays */}
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ scale: 1.06, y: 15 }}
                  animate={{ scale: 1.0, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#081220]"
                >
                  <Image
                    src={current.primaryImage}
                    alt={`${current.weight} ${current.mode}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Architectural Dimension Caliper Lines (for records with dimensions) */}
                  {current.dimensionDetails && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-x-6 bottom-14 pointer-events-none"
                    >
                      {/* Length Caliper Line */}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-3 border-l border-amber-400" />
                        <div className="flex-1 h-[1px] bg-amber-400/80 relative flex items-center justify-center">
                          <span className="bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 border border-amber-400/30">
                            {current.dimensionDetails.length} (Length)
                          </span>
                        </div>
                        <div className="w-1.5 h-3 border-r border-amber-400" />
                      </div>
                    </motion.div>
                  )}

                  {/* Clean Bottom Meta Ribbon */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono text-amber-400 font-semibold">{current.weight}</span>
                    <span className="font-mono text-slate-300">{current.mode}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Navigation Stepper */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-5 gap-2.5">
          {VERIFIED_MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => handleSelect(idx)}
              className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all ${
                idx === activeIndex
                  ? "border-amber-400 bg-white/[0.08] text-white shadow-md"
                  : "border-white/5 bg-transparent text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="text-base sm:text-xl font-light text-white tracking-tight">
                {m.weight}
              </div>
              <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                {m.routeFrom} &rarr; {m.routeTo}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Experience: Clean Non-Blocking Touch Progression */}
      <div className="md:hidden py-16 px-6">
        <div className="pb-6 border-b border-white/10 mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
            Project
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white leading-tight">
            Project Cargo
          </h2>
          <div className="flex items-center justify-between mt-4">
            <div className="text-xs font-mono text-slate-400">
              0{activeIndex + 1} / 0{VERIFIED_MOVEMENTS.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Mobile Project Display */}
        <div className="space-y-6">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#081220]">
            <Image
              src={current.primaryImage}
              alt={`${current.weight} ${current.mode}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-amber-400">{current.weight}</span>
              <span className="font-mono">{current.mode}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
              <span>{current.routeFrom}</span>
              <span>&rarr;</span>
              <span>{current.routeTo}</span>
            </div>
            <div className="text-5xl font-light text-white tracking-tight">
              {current.weight}
            </div>
            <div className="text-xs uppercase text-slate-400 mt-1 mb-4">
              {current.weightSub}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>
                  <span className="text-slate-500 block uppercase font-mono text-[10px]">Mode</span>
                  <span>{current.mode}</span>
                </div>
                {current.dimensions && (
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Dimensions</span>
                    <span>{current.dimensions}</span>
                  </div>
                )}
                {current.packages && (
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Scope</span>
                    <span>{current.packages}</span>
                  </div>
                )}
                {current.date && (
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Date</span>
                    <span>{current.date}</span>
                  </div>
                )}
              </div>
              <p className="pt-2 text-[11px] text-slate-400 leading-relaxed">
                &ldquo;{current.technicalNote}&rdquo;
              </p>
            </div>
          </div>

          {/* Stepper Pills for Mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 pt-2">
            {VERIFIED_MOVEMENTS.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setManualIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  idx === activeIndex
                    ? "bg-amber-400 text-black font-semibold"
                    : "bg-white/10 text-slate-300"
                }`}
              >
                {m.weight}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
