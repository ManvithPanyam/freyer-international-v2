"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export function HeroExperiment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, shouldReduceMotion ? 1.0 : 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.9], [0.45, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="hero-experiment"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between bg-[#07152b] text-white overflow-hidden"
    >
      {/* 01. AUTHENTIC DOCUMENTARY BACKGROUND (No AI generation, no synthetic disclaimers) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-poster.jpg"
            alt="Freyer International maritime breakbulk logistics operations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152b] via-[#07152b]/75 to-transparent" />
      </div>

      {/* 02. EDITORIAL TOP BROW & SOVEREIGN ACCREDITATIONS */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#e1390f]" />
          <span className="text-xs tracking-[0.25em] uppercase text-slate-300 font-medium">
            Freyer International Logistics
          </span>
          <span className="hidden md:inline text-white/30">&bull;</span>
          <span className="hidden md:inline text-xs text-slate-400 font-mono tracking-wider">
            HQ: CHENNAI, INDIA
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tracking-wider text-slate-300">
          <div className="flex items-center gap-1.5 text-amber-400/90">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>CBIC AEO-LO (INAAQCA4076M0F243)</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline text-slate-400">IATA CARGO AGENT</span>
        </div>
      </div>

      {/* 03. PRIMARY VIEWPORT STATEMENT — 3-SECOND COMPREHENSION COMMAND */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-14 my-auto"
      >
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-slate-300 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#e1390f]" />
            <span>10 Verified Operating Stations &bull; 8 Strategic Indian Gateways</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            LOGISTICS BEYOND <br />
            <span className="text-white">
              BOUNDARIES.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Multi-modal freight forwarding, heavy project cargo displacement, and customs engineering 
            governed from Chennai across international ocean and air networks.
          </p>

          {/* Frictionless Commercial Action Pathways */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href="#project-cargo-experiment"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-150 shadow-lg shadow-[#e1390f]/25"
            >
              <span>Explore Project Cargo</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#cartographic-experiment"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-medium tracking-wide transition duration-150 backdrop-blur-sm"
            >
              <span>Inspect India Network</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 04. BASELINE OPERATIONAL TELEMETRY BAR */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#07152b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">Head Office</div>
            <div className="text-white font-medium mt-0.5">Chennai (Egmore), India</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">Verified Stations</div>
            <div className="text-white font-medium mt-0.5">10 Stations across 8 Cities</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">Heavy Lift Record</div>
            <div className="text-white font-medium mt-0.5">482 MT Breakbulk (Shanghai → Jebel Ali)</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">Direct Phone Dispatch</div>
            <div className="text-[#e1390f] font-mono font-medium mt-0.5">+91 44 43191919</div>
          </div>
        </div>
      </div>
    </section>
  );
}
