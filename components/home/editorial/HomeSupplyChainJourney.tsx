"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";

const STAGES = [
  {
    num: "01",
    id: "factory",
    title: "FACTORY",
    subtitle: "Origin Staging & Cargo Preparation",
    desc: "Industrial site disassembly, structural verification, specialized packaging, and pre-carriage coordination across factory hubs.",
    image: "/images/1.jpg",
    alt: "Factory cargo preparation and industrial machinery staging",
    badge: "STAGE 01 · ORIGIN",
  },
  {
    num: "02",
    id: "port",
    title: "PORT",
    subtitle: "Quayside Handling & Crane Rigging",
    desc: "Direct ship-side receiving, heavy-lift tandem crane hoist calculations, and certified port-captaincy supervision at gateway ports.",
    image: "/images/11.3.jpg",
    alt: "Heavy crane spreader bar hoist at quayside container terminal",
    badge: "STAGE 02 · GATEWAY",
  },
  {
    num: "03",
    id: "vessel",
    title: "VESSEL",
    subtitle: "Deep-Sea Oceanic Carriage",
    desc: "Custom below-deck vessel stowage, certified marine sea-fastening lashing, and dedicated breakbulk carrier space management.",
    image: "/images/2.1.jpg",
    alt: "Vessel breakbulk loading in ship hold",
    badge: "STAGE 03 · MARITIME",
  },
  {
    num: "04",
    id: "customs",
    title: "CUSTOMS",
    subtitle: "AEO Tier-2 Fast-Track Clearance",
    desc: "Green-channel ICEGATE EDI processing, Direct Port Delivery (DPD) expediting, and zero intermediate demurrage delays.",
    image: "/images/Customs-Services.jpg",
    alt: "Customs brokerage and documentation verification",
    badge: "STAGE 04 · REGULATORY",
  },
  {
    num: "05",
    id: "site",
    title: "SITE",
    subtitle: "Foundation Delivery & SPMT Handover",
    desc: "12-axle hydraulic modular transport over surveyed civil corridors with direct discharge onto foundation concrete plinths.",
    image: "/images/11.4.jpg",
    alt: "Hydraulic multi-axle platform transporter at destination site",
    badge: "STAGE 05 · HANDOVER",
  },
];

export function HomeSupplyChainJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = STAGES.length;
    const segment = 1 / total;
    const idx = Math.min(Math.floor(latest / segment), total - 1);
    if (idx !== activeStageIdx && idx >= 0) {
      setActiveStageIdx(idx);
    }
  });

  const activeStage = STAGES[activeStageIdx] || STAGES[0];
  const routeProgress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative h-[250vh] w-full bg-[#02050c] text-white"
    >
      {/* Sticky Fullscreen Story Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 sm:p-12 lg:p-20 overflow-hidden">
        {/* Background Visual Display */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={activeStage.image}
                alt={activeStage.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                style={{ filter: "brightness(0.9) contrast(1.15)" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-black/45 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/65" />
        </div>

        {/* ── Top Header ── */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.35em] uppercase font-bold block mb-2">
              The Supply Chain System
            </span>
            <h2
              className="font-extrabold tracking-tight text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
            >
              One uninterrupted
              <br />
              <span className="text-slate-400 font-light italic">
                corridor of movement.
              </span>
            </h2>
          </div>

          <div className="hidden sm:block text-right font-mono text-xs text-slate-300">
            <span className="text-slate-500">STAGE PROGRESSION</span>
            <div className="text-[#ff6b4a] font-bold text-sm mt-0.5">
              {activeStage.num} / 05
            </div>
          </div>
        </div>

        {/* ── Active Stage Narrative ── */}
        <div className="relative z-10 w-full max-w-4xl py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-[#ff6b4a] font-bold uppercase bg-[#ff6b4a]/15 border border-[#ff6b4a]/40 px-3 py-1 rounded">
                  {activeStage.badge}
                </span>
                <span className="text-xs font-mono text-slate-300 border-l border-white/20 pl-3">
                  {activeStage.subtitle}
                </span>
              </div>

              <div
                className="font-black text-white tracking-tight leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                {activeStage.title}
              </div>

              <p className="text-slate-200 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
                {activeStage.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Connecting Animated Vector Rail ── */}
        <div className="relative z-10 w-full pt-6 border-t border-white/15">
          {/* Animated Route Line */}
          <div className="relative w-full mb-4">
            <svg viewBox="0 0 1000 20" className="w-full h-4 overflow-visible">
              <line x1="0" y1="10" x2="1000" y2="10" stroke="#334155" strokeWidth="2" strokeDasharray="4 6" />
              <motion.line
                x1="0"
                y1="10"
                x2="1000"
                y2="10"
                stroke="#ff6b4a"
                strokeWidth="3.5"
                style={{ pathLength: routeProgress }}
              />
            </svg>
          </div>

          {/* 5 Stages Interactive Tabs */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {STAGES.map((s, idx) => {
              const isActive = idx === activeStageIdx;
              const isPast = idx < activeStageIdx;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`text-left p-2.5 sm:p-4 rounded-xl border transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "bg-white/20 border-[#ff6b4a] shadow-[0_0_20px_rgba(255,107,74,0.35)]"
                      : isPast
                      ? "bg-white/5 border-white/20 text-slate-300 hover:bg-white/10"
                      : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isActive ? "text-[#ff6b4a]" : isPast ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {s.num}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a] animate-ping" />}
                  </div>
                  <div
                    className={`font-bold text-xs sm:text-sm tracking-tight truncate ${
                      isActive ? "text-white" : isPast ? "text-slate-200" : "text-slate-400"
                    }`}
                  >
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
