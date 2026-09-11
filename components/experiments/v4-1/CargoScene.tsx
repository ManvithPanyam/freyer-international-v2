"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectRecord {
  id: number;
  weight: string;
  weightSub: string;
  routeFrom: string;
  routeTo: string;
  mode: string;
  dimensions?: string;
  packages?: string;
  volume?: string;
  date?: string;
  technicalNote: string;
  primaryImage: string;
}

const MOVEMENTS: ProjectRecord[] = [
  {
    id: 11,
    weight: "37.6 MT",
    weightSub: "Single Unit Net Weight (37,600 KG)",
    routeFrom: "VENICE",
    routeTo: "MUNDRA",
    mode: "BBK on Container Vessel",
    dimensions: "2700 × 400 × 455 cm",
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
    date: "April 2023",
    technicalNote: "904 x 310 x 316 cm - WT 37100 KG (April 2023).",
    primaryImage: "/images/1.jpg",
  },
];

export function CargoScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualIndex, setManualIndex] = useState<number | null>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll progression through the 5 project movements
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (manualIndex !== null) return;
      const idx = Math.min(
        MOVEMENTS.length - 1,
        Math.max(0, Math.floor(v * MOVEMENTS.length))
      );
      setScrollIndex(idx);
    });
  }, [scrollYProgress, manualIndex]);

  const activeIndex = manualIndex !== null ? manualIndex : scrollIndex;
  const current = MOVEMENTS[activeIndex];

  const handleSelect = (idx: number) => {
    setManualIndex(idx);
    // Reset manual override after a period so scroll takes over again
    setTimeout(() => setManualIndex(null), 4000);
  };

  const handleNext = () => {
    handleSelect((activeIndex + 1) % MOVEMENTS.length);
  };

  const handlePrev = () => {
    handleSelect((activeIndex - 1 + MOVEMENTS.length) % MOVEMENTS.length);
  };

  return (
    <div
      ref={containerRef}
      id="cargo-scene"
      className="relative bg-[#040912] text-white selection:bg-[#e1390f] selection:text-white"
    >
      {/* Pinned Viewport Container (sticky across scroll sequence) */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-between py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden">
        {/* Simple Source Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Project
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[0.95]">
              Project Cargo
            </h2>
          </div>

          {/* Minimal Editorial Stepper Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Record"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-slate-300" />
            </button>
            <div className="text-xs font-mono tracking-widest text-slate-400">
              0{activeIndex + 1} / 0{MOVEMENTS.length}
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

        {/* The Unified Editorial Frame (Number, Route, Specs, Image move together) */}
        <div className="my-auto py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Viewport-Dominating Number */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Route Header */}
                <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 mb-2">
                  <span>{current.routeFrom}</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span>{current.routeTo}</span>
                </div>

                {/* Colossal Number Hero */}
                <div className="text-6xl sm:text-8xl md:text-9xl xl:text-[10.5rem] font-light tracking-tighter text-white leading-[0.88] mb-3">
                  {current.weight}
                </div>

                <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-6 font-light">
                  {current.weightSub}
                </div>

                {/* Technical Specifications */}
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
                          Dimensions
                        </div>
                        <div className="text-white font-medium">
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
                          {current.packages} {current.volume ? `&bull; ${current.volume}` : ""}
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

              {/* Right Column: Full-Scale Photographic Documentation Plate */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#081220]">
                  <Image
                    src={current.primaryImage}
                    alt={`${current.weight} ${current.mode}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Freyer Documentation
                    </span>
                    <span className="font-mono">{current.mode}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Navigation Strip (Subordinate to scroll) */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => handleSelect(idx)}
              className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all ${
                idx === activeIndex
                  ? "border-amber-400 bg-white/[0.08] text-white"
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

      {/* Spacer to provide natural scroll travel across the 5 project movements */}
      <div className="h-[240vh] pointer-events-none" />
    </div>
  );
}
