"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "motion/react";
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
  additionalImages?: string[];
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
    dimensionDetails: {
      length: "Heavy Steel Lot",
      width: "Multiple Holds",
      height: "796 CBM",
    },
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
    packages: "2 × 148 MT + Accessories",
    dimensionDetails: {
      length: "Heavy Columns",
      width: "Multi-Axle Trailer",
      height: "Vessel Hold",
    },
    technicalNote: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories.",
    primaryImage: "/images/4.1.jpg",
    additionalImages: ["/images/4.2.jpg", "/images/4.3.jpg", "/images/4.4.jpg"],
  },
  {
    id: 2,
    weight: "200 MT",
    weightSub: "Total Shipment Weight",
    routeFrom: "MASAN",
    routeTo: "CHENNAI",
    mode: "Heavy Lift Vessel",
    packages: "22 Packages",
    volume: "837 CBM",
    date: "May 2023",
    dimensionDetails: {
      length: "Industrial Modules",
      width: "Discharge Cranes",
      height: "837 CBM",
    },
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [manualLock, setManualLock] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Native scroll progression driving directional displacement
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (manualLock) return;
      const targetIdx = Math.min(
        VERIFIED_MOVEMENTS.length - 1,
        Math.max(0, Math.floor(v * VERIFIED_MOVEMENTS.length))
      );
      if (targetIdx !== activeIndex) {
        setDirection(targetIdx > activeIndex ? 1 : -1);
        setActiveIndex(targetIdx);
      }
    });
  }, [scrollYProgress, manualLock, activeIndex]);

  const current = VERIFIED_MOVEMENTS[activeIndex];

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    setManualLock(true);
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
    setTimeout(() => setManualLock(false), 4000);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % VERIFIED_MOVEMENTS.length;
    setManualLock(true);
    setDirection(1);
    setActiveIndex(nextIdx);
    setTimeout(() => setManualLock(false), 3000);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + VERIFIED_MOVEMENTS.length) % VERIFIED_MOVEMENTS.length;
    setManualLock(true);
    setDirection(-1);
    setActiveIndex(prevIdx);
    setTimeout(() => setManualLock(false), 3000);
  };

  // Directional Displacement Motion Variants
  const typographyVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -140 : 140,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
      transition: {
        duration: 0.45,
        ease: [0.32, 0, 0.67, 0] as const,
      },
    }),
  };

  const photoVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.65,
        delay: 0.05,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 1.04,
      transition: {
        duration: 0.45,
        ease: [0.32, 0, 0.67, 0] as const,
      },
    }),
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
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-300" />
            </button>
            <div className="text-xs font-mono tracking-widest text-slate-400">
              0{activeIndex + 1} / 0{VERIFIED_MOVEMENTS.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Record"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>

        {/* The Motion Film Stage: Directional Displacement & Compositional Shifts */}
        <div className="my-auto py-4 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Spatial Typography & Animated Route Corridor */}
              <motion.div
                custom={direction}
                variants={typographyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="lg:col-span-6 flex flex-col justify-center"
              >
                {/* 1. Animated Route Corridor & Traveling Cargo Pip */}
                <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 mb-3">
                  <span className="font-semibold">{current.routeFrom}</span>
                  <div className="relative w-20 sm:w-28 h-5 flex items-center">
                    <svg viewBox="0 0 120 14" className="w-full h-full overflow-visible">
                      <line
                        x1="0"
                        y1="7"
                        x2="110"
                        y2="7"
                        stroke="rgba(245, 158, 11, 0.25)"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                      <motion.line
                        x1="0"
                        y1="7"
                        x2="110"
                        y2="7"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.polygon
                        points="108,3 118,7 108,11"
                        fill="#f59e0b"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.45, duration: 0.2 }}
                      />
                      {/* Traveling Cargo Micro-Pip */}
                      <motion.circle
                        r="3"
                        fill="#ffffff"
                        initial={{ cx: 0, cy: 7 }}
                        animate={{ cx: 110, cy: 7 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                  <span className="font-semibold">{current.routeTo}</span>
                </div>

                {/* 2. Giant Monumental Tonnage Metric with Spatial Scaling Entrance */}
                <motion.div
                  initial={{ scale: 0.88, y: 25, opacity: 0 }}
                  animate={{ scale: 1.0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-8xl md:text-9xl xl:text-[9.2rem] font-light tracking-tighter text-white leading-[0.88] mb-2 select-none"
                >
                  {current.weight}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-6 font-light"
                >
                  {current.weightSub}
                </motion.div>

                {/* 3. Progressive Factual Metadata Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.45 }}
                  className="border-t border-white/10 pt-4 space-y-3 max-w-xl text-xs sm:text-sm"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-400 uppercase tracking-wider mb-1 font-mono text-xs">
                        Transport Mode
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
                          Execution Date
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
                </motion.div>
              </motion.div>

              {/* Right Column: Independent Photographic Displacement & Drawing Calipers */}
              <motion.div
                custom={direction}
                variants={photoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="lg:col-span-6 relative"
              >
                {/* 4. Project Photograph Container with Independent Parallax Movement */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#081220]">
                  {current.additionalImages && current.additionalImages.length > 0 ? (
                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-black/40">
                      <div className="relative w-full h-full">
                        <Image
                          src={current.primaryImage}
                          alt={`${current.weight} View 1`}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      {current.additionalImages.slice(0, 3).map((img, i) => (
                        <div key={i} className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={`${current.weight} View ${i + 2}`}
                            fill
                            priority
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={current.primaryImage}
                      alt={`${current.weight} ${current.mode}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center brightness-95"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* 5. Architectural Dimension Caliper Lines Drawing onto Image */}
                  {current.dimensionDetails && (
                    <div className="absolute inset-x-6 bottom-14 pointer-events-none">
                      <div className="relative flex items-center justify-between">
                        {/* Animated Caliper Haierline */}
                        <svg viewBox="0 0 400 24" className="w-full h-6 overflow-visible">
                          {/* Left Tick */}
                          <motion.line
                            x1="0"
                            y1="4"
                            x2="0"
                            y2="20"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          />
                          {/* Horizontal Caliper Line */}
                          <motion.line
                            x1="0"
                            y1="12"
                            x2="400"
                            y2="12"
                            stroke="#f59e0b"
                            strokeWidth="1.5"
                            strokeDasharray="4 2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                          />
                          {/* Right Tick */}
                          <motion.line
                            x1="400"
                            y1="4"
                            x2="400"
                            y2="20"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          />
                        </svg>

                        {/* Centered Dimension Badge Overlay */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="absolute left-1/2 -translate-x-1/2 bg-black/85 px-3 py-0.5 rounded text-[10px] font-mono text-amber-300 border border-amber-400/40 shadow-lg tracking-wider"
                        >
                          {current.dimensionDetails.length} (Length)
                        </motion.span>
                      </div>
                    </div>
                  )}

                  {/* Clean Bottom Meta Ribbon */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                    <span className="font-mono text-amber-400 font-semibold">{current.weight}</span>
                    <span className="font-mono text-slate-300">{current.mode}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Navigation Stepper: 5 Authenticated Movements */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-5 gap-2.5">
          {VERIFIED_MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => handleSelect(idx)}
              className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer ${
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
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-300 active:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-300 active:bg-white/20"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Active Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`mobile-${current.id}`}
            custom={direction}
            variants={typographyVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/15 bg-[#081220]">
              <Image
                src={current.primaryImage}
                alt={current.weight}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400">{current.weight}</span>
                <span className="text-slate-300">{current.mode}</span>
              </div>
            </div>

            {/* Route & Tonnage */}
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                {current.routeFrom} &rarr; {current.routeTo}
              </div>
              <div className="text-5xl font-light text-white tracking-tight">
                {current.weight}
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-light">
                {current.weightSub}
              </div>
            </div>

            {/* Metadata */}
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
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
          </motion.div>
        </AnimatePresence>

        {/* Mobile Horizontal Pill Scroller */}
        <div className="mt-8 pt-4 border-t border-white/10 flex gap-2 overflow-x-auto pb-2">
          {VERIFIED_MOVEMENTS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => handleSelect(idx)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg border text-xs font-mono transition-all ${
                idx === activeIndex
                  ? "border-amber-400 bg-white/10 text-amber-300"
                  : "border-white/10 text-slate-400"
              }`}
            >
              {m.weight}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
