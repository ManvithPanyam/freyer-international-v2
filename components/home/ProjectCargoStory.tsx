"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, ShieldCheck, Compass } from "lucide-react";

export function ProjectCargoStory() {
  const containerRef = useRef<HTMLElement>(null);

  // Measure scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // Restrained scroll transformations
  const imageScale = useTransform(scrollYProgress, [0.1, 0.9], [1.0, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);
  const routeLineWidth = useTransform(scrollYProgress, [0.25, 0.65], ["0%", "100%"]);
  const metricOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.85, 0.95], [0, 1, 1, 0.7]);
  const metricY = useTransform(scrollYProgress, [0.3, 0.5], [24, 0]);

  return (
    <section
      id="project-cargo"
      ref={containerRef}
      className="relative bg-[#040914] text-white py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-b border-white/10"
    >
      {/* ── Background Photography Layer with Cinematic Depth ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="relative w-full h-full"
          style={!prefersReducedMotion ? { scale: imageScale, y: imageY } : {}}
        >
          <Image
            src="/images/11.4.jpg"
            alt="ITALGRU heavy-lift crane boom structure on vessel flatracks — Freyer project cargo engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter: "brightness(0.92) contrast(1.08) saturate(0.9)",
            }}
          />
          {/* Subtle directional gradients for high-contrast typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914]/95 via-[#040914]/75 to-[#040914]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-[#040914]/80" />
        </motion.div>
      </div>

      {/* ── Editorial Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Technical Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-[0.22em] text-[#ff6b4a] uppercase font-bold">
              PROJECT CARGO // 37.6 MT
            </span>
            <span className="text-slate-600 font-mono text-xs">|</span>
            <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
              HEAVY-LIFT BREAKBULK MOVEMENT
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ff6b4a]" />
              Port-to-Foundation Turnkey
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Civil Route Clearance
            </span>
          </div>
        </div>

        {/* ── Signature Movement Corridor: MUNDRA ──→ SITE ── */}
        <div className="pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Movement Trajectory & Spatial Route Typography */}
            <div className="lg:col-span-7 space-y-8">
              {/* Route Trajectory Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                  <span>MUNDRA</span>
                  <div className="relative flex-1 min-w-[60px] sm:min-w-[120px] max-w-[200px] h-[2px] bg-white/20">
                    <motion.div
                      className="absolute top-0 left-0 bottom-0 bg-[#ff6b4a] shadow-[0_0_10px_#ff6b4a]"
                      style={!prefersReducedMotion ? { width: routeLineWidth } : { width: "100%" }}
                    />
                    <div className="absolute -right-1.5 -top-1 w-2.5 h-2.5 rounded-full bg-[#ff6b4a]" />
                  </div>
                  <span className="text-slate-300 font-light italic">SITE</span>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
                  Turnkey heavy-lift engineering for an ITALGRU boom crane superstructure — navigating 1,420 km of civil bypasses, bridge load distributions, and port-to-foundation placement.
                </p>
              </div>

              {/* Verified Technical Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Configuration</div>
                  <div className="text-sm font-bold text-white mt-1">12-Axle Hydraulic SPMT</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Dimensions</div>
                  <div className="text-sm font-bold text-white mt-1">2,700 × 400 × 455 cm</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Surveyed Route</div>
                  <div className="text-sm font-bold text-white mt-1">1,420 KM Corridor</div>
                </div>
              </div>

              {/* Commercial Direct Action */}
              <div className="pt-4">
                <Link
                  href="/services/project-cargo"
                  className="inline-flex items-center gap-3 bg-[#c42f0b] hover:bg-[#a82506] active:bg-[#8f1f04] text-white font-semibold text-sm px-7 py-4 rounded-sm transition-colors duration-150 shadow-xl shadow-[#c42f0b]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Project Cargo Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: The Monumental Metric (One Dominant Engineering Fact) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <motion.div
                className="relative bg-[#071224]/85 border border-white/15 p-8 sm:p-10 rounded-sm backdrop-blur-md w-full max-w-md shadow-2xl"
                style={!prefersReducedMotion ? { opacity: metricOpacity, y: metricY } : {}}
              >
                {/* Metric Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#ff6b4a] uppercase font-bold">
                    Primary Single Piece
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6b4a]" />
                    Mundra Quayside
                  </span>
                </div>

                {/* Colossal 37.6 MT */}
                <div className="space-y-1">
                  <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none">
                    37.6 <span className="text-3xl sm:text-4xl text-[#ff6b4a] font-light">MT</span>
                  </div>
                  <div className="text-sm font-mono tracking-widest text-slate-300 uppercase pt-2">
                    Superstructure Boom Assembly
                  </div>
                </div>

                {/* Engineered Execution Details */}
                <p className="mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Lashed on heavy-duty vessel flatracks with certified marine lashing calculations, transferred to hydraulic multi-axle trailers without intermediate laydown.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
