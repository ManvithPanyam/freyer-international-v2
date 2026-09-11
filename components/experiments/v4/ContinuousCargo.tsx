"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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
  supportingPhotos: string[];
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
    supportingPhotos: ["/images/11.1.jpg", "/images/11.2.jpg", "/images/11.3.jpg", "/images/11.4.jpg"],
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
    supportingPhotos: ["/images/9.1.jpg", "/images/9.2.jpg"],
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
    supportingPhotos: ["/images/4.jpg"],
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
    supportingPhotos: ["/images/2.1.jpg", "/images/2.2.jpg", "/images/2.3.jpg"],
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
    supportingPhotos: ["/images/1.jpg"],
  },
];

export function ContinuousCargo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const current = MOVEMENTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MOVEMENTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MOVEMENTS.length) % MOVEMENTS.length);
  };

  return (
    <section
      id="cargo-scene"
      className="relative pt-12 pb-24 sm:pb-36 bg-[#040912] text-white selection:bg-[#e1390f] selection:text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Route Entrance Marker */}
      <div className="w-full flex justify-center mb-10 pointer-events-none">
        <div className="w-[1.5px] h-14 bg-gradient-to-b from-[#040912] via-[#e1390f] to-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Simple Source Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Project
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[0.95]">
              Project Cargo
            </h2>
          </div>

          {/* Minimal Frame Stepper */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Record"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-slate-300" />
            </button>
            <div className="text-xs font-mono tracking-widest text-slate-400">
              0{activeIndex + 1} / 0{MOVEMENTS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Record"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>

        {/* Cinematic Editorial Frame: Viewport-Dominating Number & Authentic Photo */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Monumental Number Hero */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Route Header */}
                <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 mb-3">
                  <span>{current.routeFrom}</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span>{current.routeTo}</span>
                </div>

                {/* Viewport-Dominating Number */}
                <div className="text-6xl sm:text-8xl md:text-9xl xl:text-[10.5rem] font-light tracking-tighter text-white leading-[0.88] mb-4">
                  {current.weight}
                </div>

                <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-8 font-light">
                  {current.weightSub}
                </div>

                {/* Technical Specifications */}
                <div className="border-t border-white/10 pt-6 space-y-3 max-w-xl text-xs sm:text-sm">
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

                  {/* Verbatim Record Note */}
                  <div className="pt-3 border-t border-white/5 text-xs text-slate-300 font-light leading-relaxed">
                    &ldquo;{current.technicalNote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Right Column: Full-Scale Panoramic Photograph */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#091322]">
                  <Image
                    src={current.primaryImage}
                    alt={`${current.weight} ${current.mode}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Freyer Project Documentation
                    </span>
                    <span className="font-mono">{current.mode}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Direct Selector Tabs */}
        <div className="mt-14 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-3 sm:p-4 rounded-xl border transition-all ${
                idx === activeIndex
                  ? "border-amber-400 bg-white/[0.06] text-white"
                  : "border-white/5 bg-transparent text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="text-lg sm:text-2xl font-light text-white tracking-tight">
                {m.weight}
              </div>
              <div className="text-[11px] font-mono text-slate-400 truncate mt-1">
                {m.routeFrom} &rarr; {m.routeTo}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Transition Out: Carrier line descending smoothly toward Services */}
      <div className="w-full flex justify-center mt-16 sm:mt-24 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-white/30 via-[#e1390f] to-[#f2f4f7]" />
      </div>
    </section>
  );
}
