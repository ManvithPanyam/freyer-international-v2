"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Anchor, Plane, Building2, ChevronDown } from "lucide-react";

export function CinematicHeroExp() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#071326] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white">
      {/* Background Media Layer with Subtle Parallax Drift */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ai-candidates/AI-GENERATED_NOT_A_REAL_FREYER_FACILITY_ai_port_terminal_1788788622412.jpg"
            alt="Deepwater maritime container terminal at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 brightness-90"
          />
        </motion.div>

        {/* Cinematic Vignettes and Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/60 to-[#071326]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#071326] to-transparent pointer-events-none" />

        {/* Attributed AI Image Micro-Badge */}
        <div className="absolute bottom-4 right-6 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
          AI-Generated Conceptual Illustration — Not a real Freyer facility
        </div>
      </div>

      {/* Top Breadcrumb / Status Line */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-amber-400/90"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          CBIC AEO-LO Certified (INAAQCA4076M0F243) &bull; IATA Agent
        </motion.div>
      </div>

      {/* Main Editorial Hero Canvas */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-mono tracking-[0.28em] text-slate-400 uppercase mb-4"
          >
            Integrated Freight Forwarding & Project Cargo Engineering
          </motion.p>

          {/* Main Title: Generous Editorial Proportions */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.06] mb-8"
          >
            LOGISTICS <br />
            <span className="font-semibold text-white tracking-normal">BEYOND BOUNDARIES.</span>
          </motion.h1>

          {/* Lead Copy: Verbatim from Freyer Source Archive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Logistics helps you realise your business goals with a broad range of transport and
            logistics services. We deliver cost-effective and efficient solutions by leveraging our
            long established carrier relationships with years of expertise across ocean freight, air
            carriage, customs compliance, and heavy industrial cargo.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#project-cargo-story"
              className="inline-flex items-center gap-3 px-7 py-4 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-black/20 hover:shadow-orange-950/40 group"
            >
              <span>Explore Verified Project Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#india-network"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded bg-white/5 hover:bg-white/10 text-white font-normal text-sm sm:text-base tracking-wide border border-white/15 transition-all"
            >
              <span>10 Stations Across 8 Cities</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Telemetry Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#050e1c]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <span className="block text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                National Footprint
              </span>
              <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                10 <span className="text-sm font-sans font-normal text-slate-300">Stations</span>
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Across 8 Commercial Cities in India</p>
            </div>

            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <span className="block text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                Customs Authority
              </span>
              <span className="text-2xl sm:text-3xl font-light text-amber-400 font-mono mt-1 block">
                AEO-LO
              </span>
              <p className="text-xs text-slate-400 mt-0.5">CBIC Accredited Logistics Operator</p>
            </div>

            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <span className="block text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                3PL & CFS Capacity
              </span>
              <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                1,000,000+
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Sq. Ft. WMS-Enabled Footprint</p>
            </div>

            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <span className="block text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                Heavy Lift Benchmark
              </span>
              <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                482 MT
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Breakbulk Shipment (Shanghai - Jebel Ali)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
