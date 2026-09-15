"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CargoFilmRecord {
  id: number;
  weightMain: string;
  weightSuffix: string;
  cargoTitle: string;
  routeFrom: string;
  routeTo: string;
  transportMode: string;
  specs: {
    dimensions?: string;
    packages?: string;
    volume?: string;
    date?: string;
  };
  dimensionLabel: string;
  technicalNote: string;
  image: string;
  layoutVariant: "horizontal" | "monolith" | "dual" | "compact" | "vector";
}

// Strictly verified project cargo records from projects.json
export const VERIFIED_CARGO_RECORDS: CargoFilmRecord[] = [
  {
    id: 11,
    weightMain: "37.6",
    weightSuffix: "MT",
    cargoTitle: "Boom Crane",
    routeFrom: "VENICE",
    routeTo: "MUNDRA",
    transportMode: "BBK on Container Vessel",
    specs: {
      dimensions: "2700 × 400 × 455 cm",
      packages: "1 Unit (37,600 KG)",
    },
    dimensionLabel: "2700 × 400 × 455 CM",
    technicalNote:
      "Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.",
    image: "/images/11.1.jpg",
    layoutVariant: "horizontal",
  },
  {
    id: 9,
    weightMain: "482",
    weightSuffix: "MT",
    cargoTitle: "Break Bulk Shipment",
    routeFrom: "SHANGHAI",
    routeTo: "JEBEL ALI",
    transportMode: "Break Bulk",
    specs: {
      packages: "29 Packages",
      volume: "796 CBM",
    },
    dimensionLabel: "796 CBM",
    technicalNote: "Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT.",
    image: "/images/9.1.jpg",
    layoutVariant: "monolith",
  },
  {
    id: 4,
    weightMain: "2 × 148",
    weightSuffix: "MT",
    cargoTitle: "2 × 148 MT + Accessories",
    routeFrom: "AL JUBAIL",
    routeTo: "JEBEL ALI",
    transportMode: "Door Delivery",
    specs: {
      packages: "2 × 148 MT + Accessories",
      volume: "296 MT Total",
    },
    dimensionLabel: "2 × 148 MT",
    technicalNote: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories.",
    image: "/images/4.jpg",
    layoutVariant: "dual",
  },
  {
    id: 2,
    weightMain: "200",
    weightSuffix: "MT",
    cargoTitle: "Break Bulk Cargo",
    routeFrom: "MASAN",
    routeTo: "CHENNAI",
    transportMode: "Heavy Lift Vessel",
    specs: {
      packages: "22 Packages",
      volume: "837 CBM",
      date: "May 2023",
    },
    dimensionLabel: "837 CBM",
    technicalNote: "22 Packages / 837 cbm / WT 200 MT (May 2023).",
    image: "/images/2.1.jpg",
    layoutVariant: "compact",
  },
  {
    id: 1,
    weightMain: "37.1",
    weightSuffix: "MT",
    cargoTitle: "RORO Cargo Movement",
    routeFrom: "KOBE",
    routeTo: "CHENNAI",
    transportMode: "RORO",
    specs: {
      dimensions: "904 × 310 × 316 cm",
      date: "April 2023",
    },
    dimensionLabel: "904 × 310 × 316 CM",
    technicalNote: "904 x 310 x 316 cm - WT 37100 KG (April 2023).",
    image: "/images/1.jpg",
    layoutVariant: "vector",
  },
];

interface CargoFilmV53Props {
  onIndexChange?: (index: number) => void;
}

export function CargoFilmV53({ onIndexChange }: CargoFilmV53Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilmIndex, setActiveFilmIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        VERIFIED_CARGO_RECORDS.length - 1,
        Math.max(0, Math.floor(latest * VERIFIED_CARGO_RECORDS.length))
      );
      if (idx !== activeFilmIndex) {
        setDirection(idx > activeFilmIndex ? 1 : -1);
        setActiveFilmIndex(idx);
        if (onIndexChange) onIndexChange(idx);
      }
    });
  }, [activeFilmIndex, scrollYProgress, onIndexChange]);

  const goToNext = () => {
    const nextIdx = (activeFilmIndex + 1) % VERIFIED_CARGO_RECORDS.length;
    setDirection(1);
    setActiveFilmIndex(nextIdx);
    if (onIndexChange) onIndexChange(nextIdx);
  };

  const goToPrev = () => {
    const prevIdx =
      (activeFilmIndex - 1 + VERIFIED_CARGO_RECORDS.length) %
      VERIFIED_CARGO_RECORDS.length;
    setDirection(-1);
    setActiveFilmIndex(prevIdx);
    if (onIndexChange) onIndexChange(prevIdx);
  };

  const currentFilm = VERIFIED_CARGO_RECORDS[activeFilmIndex];

  return (
    <section
      ref={containerRef}
      id="project-cargo-film-section"
      className="relative w-full min-h-[380vh] bg-[#05080e] text-white"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-16 py-8 lg:py-10 select-none">
        {/* Top Control Ribbon: Clean, Static Monospace Bar */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-bold">
              Project Cargo // Record [{activeFilmIndex + 1} of {VERIFIED_CARGO_RECORDS.length}]
            </span>
            <span className="hidden sm:inline font-mono text-xs text-white/40">
              [5 Authenticated Movements]
            </span>
          </div>

          {/* Clean Film Tabs (No looping animations, no radar pulses) */}
          <div className="flex items-center gap-2">
            <div className="flex bg-white/5 border border-white/10 rounded p-1">
              {VERIFIED_CARGO_RECORDS.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setDirection(i > activeFilmIndex ? 1 : -1);
                    setActiveFilmIndex(i);
                    if (onIndexChange) onIndexChange(i);
                  }}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-colors rounded ${
                    i === activeFilmIndex
                      ? "bg-[#e1390f] text-white font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {f.weightMain} {f.weightSuffix}
                </button>
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white/80 transition-colors"
              title="Previous Record"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white/80 transition-colors"
              title="Next Record"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Film Stage */}
        <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentFilm.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 50 : -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -50 : 50,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full"
            >
              {/* FILM 1: 37.6 MT (Horizontal Void Composition) */}
              {currentFilm.layoutVariant === "horizontal" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-7xl sm:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-none text-white">
                        {currentFilm.weightMain}
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-[#e1390f]">
                        {currentFilm.weightSuffix}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-xs text-white/60 tracking-wider">
                        <span className="text-white font-bold">{currentFilm.routeFrom}</span>
                        <span className="text-[#e1390f] uppercase">{currentFilm.transportMode}</span>
                        <span className="text-white font-bold">{currentFilm.routeTo}</span>
                      </div>
                      <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#e1390f]"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl border-l-2 border-[#e1390f] pl-4">
                      {currentFilm.technicalNote}
                    </p>

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

                  <div className="lg:col-span-6 relative">
                    <motion.div
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/15 bg-black/40 shadow-2xl"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoTitle}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-white/20 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-white">
                        <span className="text-[#e1390f] font-bold">|◀</span>
                        <span className="tracking-widest uppercase">{currentFilm.dimensionLabel}</span>
                        <span className="text-[#e1390f] font-bold">▶|</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* FILM 2: 482 MT (Vertical Monolith Power Block) */}
              {currentFilm.layoutVariant === "monolith" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 relative order-2 lg:order-1">
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/20 bg-black/60 shadow-2xl"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoTitle}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/85 border border-white/20 p-2.5 font-mono text-xs flex justify-between items-center text-white">
                        <span className="text-[#e1390f] font-bold">VOLUME:</span>
                        <span>{currentFilm.dimensionLabel}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-8xl sm:text-9xl lg:text-[8.5rem] font-black tracking-tighter leading-none text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-4xl lg:text-5xl font-mono font-black text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-b border-white/10 py-3 space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between text-white/60">
                        <span>ORIGIN: <strong className="text-white">{currentFilm.routeFrom}</strong></span>
                        <span>DESTINATION: <strong className="text-white">{currentFilm.routeTo}</strong></span>
                      </div>
                      <div className="text-[#e1390f] font-semibold">{currentFilm.transportMode}</div>
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
              {currentFilm.layoutVariant === "dual" && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      {/* Mobile Safe Typography Clamping to Prevent Awkward Wrapping */}
                      <div className="flex items-baseline gap-2 sm:gap-3 whitespace-nowrap">
                        <span className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white">
                          {currentFilm.weightMain}
                        </span>
                        <span className="text-2xl sm:text-4xl font-mono font-bold text-[#e1390f]">
                          {currentFilm.weightSuffix}
                        </span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-white/70 max-w-md bg-white/5 p-3 rounded border border-white/10">
                      {currentFilm.technicalNote}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <motion.div
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.65, delay: 0.1 }}
                      className="md:col-span-7 relative aspect-[16/9] rounded-lg overflow-hidden border border-white/20"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoTitle}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-3 px-4 py-2 bg-black/80 flex justify-between font-mono text-[11px] text-white border-t border-white/20">
                        <span>UNIT A: 148 MT</span>
                        <span className="text-[#e1390f] font-bold">{currentFilm.dimensionLabel}</span>
                        <span>UNIT B: 148 MT</span>
                      </div>
                    </motion.div>

                    <div className="md:col-span-5 space-y-4 font-mono text-xs">
                      <div className="bg-white/5 border border-white/10 p-4 rounded space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold">{currentFilm.routeFrom}</span>
                          <span className="text-white/40">══════►</span>
                          <span className="font-bold">{currentFilm.routeTo}</span>
                        </div>
                        <div className="text-white/60 text-[11px]">{currentFilm.transportMode}</div>
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

              {/* FILM 4: 200 MT (Compact Heavy Lift Movement) */}
              {currentFilm.layoutVariant === "compact" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <div>
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
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/20"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoTitle}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-2 font-mono text-xs flex justify-between text-white border-t border-white/15">
                        <span className="text-[#e1390f] font-bold">DISCHARGE VOLUME:</span>
                        <span>{currentFilm.dimensionLabel}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* FILM 5: 37.1 MT (Vector Trajectory — Prepares Voyage into Services) */}
              {currentFilm.layoutVariant === "vector" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-8xl sm:text-9xl font-black tracking-tight text-white">
                        {currentFilm.weightMain}
                      </span>
                      <span className="text-4xl font-mono font-bold text-[#e1390f]">
                        {currentFilm.weightSuffix}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-xs text-white">
                        <span className="font-bold">{currentFilm.routeFrom}</span>
                        <span className="text-[#e1390f] font-semibold">{currentFilm.transportMode}</span>
                        <span className="font-bold">{currentFilm.routeTo}</span>
                      </div>
                      <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#e1390f]"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
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
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                      className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/20 bg-black/50"
                    >
                      <Image
                        src={currentFilm.image}
                        alt={currentFilm.cargoTitle}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/85 px-4 py-2 font-mono text-xs flex justify-between items-center text-white border-t border-[#e1390f]/70">
                        <span className="text-[#e1390f] font-bold">DIMENSIONS:</span>
                        <span>{currentFilm.dimensionLabel}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Static, Factual Metadata (No bouncing UI, no looping icons) */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-white/40 block text-[10px] uppercase">CARGO TITLE:</span>
              <span className="text-white font-bold">{currentFilm.cargoTitle}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">MODE:</span>
              <span className="text-white font-bold">{currentFilm.transportMode}</span>
            </div>
          </div>

          <div className="text-right text-white/50 text-[11px]">
            SCROLL TO ADVANCE JOURNEY
          </div>
        </div>
      </div>
    </section>
  );
}
