"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Layers, Maximize2, ShieldCheck } from "lucide-react";

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

export function MonumentalCargoScene() {
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
      className="py-24 sm:py-36 bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Top Header: Theatrical Return to Dark */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-12 border-b border-white/10 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-3">
              Project Cargo &bull; Chapter 03
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Project Cargo Records
            </h2>
          </div>

          {/* Minimalist Scene Navigation Controls */}
          <div className="flex items-center gap-5">
            <button
              onClick={handlePrev}
              aria-label="Previous Record"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>
            <div className="text-xs font-mono tracking-widest text-slate-400">
              0{activeIndex + 1} / 0{MOVEMENTS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Record"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>

        {/* The Hero Stage: Monumental Scale Numbers on Left, Panoramic Imagery on Right */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Typographic Hero: Monumental Mass */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Route Banner */}
                <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 mb-4">
                  <span>{current.routeFrom}</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span>{current.routeTo}</span>
                </div>

                {/* Monumental Number Display */}
                <div className="text-6xl sm:text-8xl md:text-9xl xl:text-[10rem] font-light tracking-tighter text-white leading-[0.88] mb-6">
                  {current.weight}
                </div>

                {/* Subtitle / Unit Metric */}
                <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-8 font-light">
                  {current.weightSub}
                </div>

                {/* Detailed Technical Field Data */}
                <div className="border-t border-white/10 pt-6 space-y-4 max-w-xl">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono">
                        Operation Mode
                      </div>
                      <div className="text-white font-medium text-sm">
                        {current.mode}
                      </div>
                    </div>

                    {current.dimensions && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono">
                          Dimensions
                        </div>
                        <div className="text-white font-medium text-sm">
                          {current.dimensions}
                        </div>
                      </div>
                    )}

                    {current.packages && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono">
                          Consignment Scope
                        </div>
                        <div className="text-white font-medium text-sm">
                          {current.packages} {current.volume ? `&bull; ${current.volume}` : ""}
                        </div>
                      </div>
                    )}

                    {current.date && (
                      <div>
                        <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono">
                          Recorded Date
                        </div>
                        <div className="text-white font-medium text-sm">
                          {current.date}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Verbatim Record Excerpt */}
                  <div className="pt-4 border-t border-white/5 text-xs text-slate-300 font-light leading-relaxed">
                    &ldquo;{current.technicalNote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Right Photographic Hero: Expansive Authentic Cargo Plate */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#091322]">
                  <Image
                    src={current.primaryImage}
                    alt={`${current.weight} ${current.mode} movement`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Real Photo Attribution Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Authentic Freyer Project Documentation
                    </span>
                    <span className="font-mono">{current.mode}</span>
                  </div>
                </div>

                {/* Supporting Photo Gallery Strip if available */}
                {current.supportingPhotos.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {current.supportingPhotos.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        className="relative w-20 h-16 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <Image
                          src={photo}
                          alt={`Angle ${pIdx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fast Selector Strip across all 5 Project Records */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 rounded-xl border transition-all ${
                idx === activeIndex
                  ? "border-amber-400 bg-white/[0.06] text-white"
                  : "border-white/5 bg-transparent text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="text-xl sm:text-2xl font-light text-white tracking-tight">
                {m.weight}
              </div>
              <div className="text-[11px] font-mono text-slate-400 truncate mt-1">
                {m.routeFrom} &rarr; {m.routeTo}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
