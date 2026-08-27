"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";

const STAGES = [
  {
    num: "01",
    id: "factory",
    stageName: "ORIGIN STAGING",
    title: "FACTORY",
    desc: "Industrial site disassembly, structural verification, and heavy machinery rigging at origin plant.",
    image: "/images/1.jpg",
    alt: "Heavy machinery preparation and origin staging",
  },
  {
    num: "02",
    id: "port",
    stageName: "QUAYSIDE HOIST",
    title: "PORT",
    desc: "Ship-side tandem crane loading, spreader bar balancing, and certified port captaincy inspection.",
    image: "/images/11.3.jpg",
    alt: "Heavy-lift crane hoist at container terminal quayside",
  },
  {
    num: "03",
    id: "vessel",
    stageName: "OCEAN CARRIAGE",
    title: "VESSEL",
    desc: "Dedicated below-deck breakbulk stowage and engineered marine sea-fastening lashing on deep-sea trade routes.",
    image: "/images/2.1.jpg",
    alt: "Cargo vessel deep-sea hold stowage",
  },
  {
    num: "04",
    id: "customs",
    stageName: "AEO CLEARANCE",
    title: "CUSTOMS",
    desc: "AEO Tier-2 fast-track EDI clearance, sovereign green-channel status, and direct port delivery dispatch.",
    image: "/images/Customs-Services.jpg",
    alt: "Customs brokerage and port clearance documentation",
  },
  {
    num: "05",
    id: "site",
    stageName: "SPMT HANDOVER",
    title: "SITE",
    desc: "Multi-axle hydraulic transporter delivery over surveyed civil corridors with precision foundation discharge.",
    image: "/images/11.4.jpg",
    alt: "Multi-axle hydraulic platform transporter at destination site plinth",
  },
];

export function HomeSupplyChainJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = STAGES.length;
    const segment = 1 / total;
    const idx = Math.min(Math.floor(latest / segment), total - 1);
    if (idx !== activeIdx && idx >= 0) {
      setActiveIdx(idx);
    }
  });

  const activeStage = STAGES[activeIdx] || STAGES[0];
  const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative h-[250vh] w-full bg-[#02050c] text-white"
    >
      {/* ── Sticky Fullscreen Narrative Canvas ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 sm:p-12 lg:p-20 overflow-hidden">
        {/* Visual Background Transition */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0"
            >
              <Image
                src={activeStage.image}
                alt={activeStage.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                style={{ filter: "brightness(0.85) contrast(1.15)" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Cinematic Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/60" />
        </div>

        {/* ── Top Header ── */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.4em] uppercase font-bold block mb-2">
              Physical Supply Chain Corridor
            </span>
            <h2
              className="font-black tracking-tight text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              From Origin Disassembly
              <br />
              <span className="text-slate-400 font-light italic">
                to Final Foundation Placement.
              </span>
            </h2>
          </div>

          <div className="font-mono text-right hidden sm:block">
            <span className="text-xs text-slate-400 uppercase tracking-widest">MOVEMENT STAGE</span>
            <div className="text-2xl font-black text-[#ff6b4a]">
              {activeStage.num} <span className="text-slate-500 font-light text-base">/ 05</span>
            </div>
          </div>
        </div>

        {/* ── Active Stage Narrative Focus ── */}
        <div className="relative z-10 w-full max-w-4xl py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-[0.3em] text-[#ff6b4a] font-bold uppercase">
                  {activeStage.stageName}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs font-mono text-slate-300">STAGE {activeStage.num}</span>
              </div>

              <div
                className="font-black text-white tracking-[-0.04em] leading-none"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
              >
                {activeStage.title}
              </div>

              <p className="text-slate-200 text-lg sm:text-2xl font-light leading-relaxed max-w-2xl">
                {activeStage.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Continuous Illuminated Rail ── */}
        <div className="relative z-10 w-full pt-6 border-t border-white/15">
          {/* Active Stage Rail Track */}
          <div className="relative h-1 w-full bg-white/15 rounded-full overflow-hidden mb-6">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-[#ff6b4a] shadow-[0_0_12px_#ff6b4a]"
              style={{ width: progressPercent }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono tracking-wider">
            {STAGES.map((s, idx) => {
              const isActive = idx === activeIdx;
              const isPast = idx < activeIdx;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex flex-col items-start transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "text-[#ff6b4a] font-bold scale-105"
                      : isPast
                      ? "text-slate-200"
                      : "text-slate-400 hover:text-slate-300"
                  }`}
                >
                  <span className="text-[10px] text-slate-400">{s.num}</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
