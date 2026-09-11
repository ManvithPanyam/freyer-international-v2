"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";

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

export function EditorialProjectCargo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const current = MOVEMENTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MOVEMENTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MOVEMENTS.length) % MOVEMENTS.length);
  };

  return (
    <section id="project-cargo-section" className="py-24 sm:py-36 bg-[#07111e] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-light mb-4">
              Project Cargo Operations
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.02]">
              Heavy lift movements. <br />
              <span className="font-normal text-white">Documented execution.</span>
            </h2>
          </div>

          {/* Minimalist Editorial Arrow Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Project Record"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>
            <div className="text-xs font-light text-slate-400 tracking-widest uppercase">
              0{activeIndex + 1} / 0{MOVEMENTS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Project Record"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>

        {/* Large Editorial Stage: Monumental Numbers on Left, Massive Authentic Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Hero Column (The Numbers are the Hero) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Monumental Weight Number */}
                <div className="text-6xl sm:text-8xl lg:text-9xl font-light tracking-tight text-white leading-none">
                  {current.weight}
                </div>

                {/* Route Typography */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-amber-400 mt-4 sm:mt-6">
                  {current.routeFrom} &rarr; {current.routeTo}
                </div>

                {/* Technical Specifications (Clean Open Typography, NOT Boxes) */}
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  {current.dimensions && (
                    <div className="flex items-baseline justify-between text-sm sm:text-base font-light">
                      <span className="text-slate-400 uppercase tracking-widest text-xs">
                        Dimensions
                      </span>
                      <span className="text-white">{current.dimensions}</span>
                    </div>
                  )}

                  {current.packages && (
                    <div className="flex items-baseline justify-between text-sm sm:text-base font-light">
                      <span className="text-slate-400 uppercase tracking-widest text-xs">
                        Quantity
                      </span>
                      <span className="text-white">
                        {current.packages} {current.volume ? `&bull; ${current.volume}` : ""}
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline justify-between text-sm sm:text-base font-light">
                    <span className="text-slate-400 uppercase tracking-widest text-xs">
                      Transport Mode
                    </span>
                    <span className="text-white">{current.mode}</span>
                  </div>

                  {current.date && (
                    <div className="flex items-baseline justify-between text-sm sm:text-base font-light">
                      <span className="text-slate-400 uppercase tracking-widest text-xs">
                        Execution
                      </span>
                      <span className="text-white">{current.date}</span>
                    </div>
                  )}
                </div>

                {/* Verbatim Source Note */}
                <p className="mt-8 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {current.technicalNote}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Photography Column: Dominant Full Photographic Frame */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Large Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={current.primaryImage}
                    alt={`${current.routeFrom} to ${current.routeTo} cargo shipment`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Supporting Photos Strip (if multiple authentic photos exist) */}
                {current.supportingPhotos.length > 1 && (
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {current.supportingPhotos.map((photo, pIdx) => (
                      <div key={pIdx} className="relative aspect-[4/3] overflow-hidden bg-black/20">
                        <Image
                          src={photo}
                          alt={`Movement photo ${pIdx + 1}`}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Jump Index of All Movements */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 items-center">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Select Record:
          </span>
          {MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-xs tracking-wider transition-colors ${
                idx === activeIndex
                  ? "text-amber-400 underline underline-offset-4"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {m.weight} ({m.routeFrom} &rarr; {m.routeTo})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
