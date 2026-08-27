"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function HomeProofMovement() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [1.12, 1, 1.06]);
  const containerOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.95], [0.2, 1, 1, 0.4]);
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.2, 0.6], ["-20px", "0px"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#02050c] text-white flex flex-col justify-center overflow-hidden py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-white/10"
    >
      <motion.div
        style={{ opacity: containerOpacity }}
        className="max-w-[1600px] mx-auto w-full space-y-8"
      >
        {/* ── Spatial Route Statement ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.4em] uppercase font-bold block">
              Physical Case Movement · Heavy Lift
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-black tracking-tight text-white text-[clamp(2.5rem,7vw,6.5rem)] leading-none select-none">
              <span>MUNDRA</span>
              <motion.span style={{ x: textX }} className="text-[#ff6b4a] font-light">
                ──→
              </motion.span>
              <span className="text-slate-300">SITE</span>
            </div>
          </div>

          <div className="text-left lg:text-right font-mono space-y-1">
            <div className="text-xs text-slate-500 uppercase tracking-widest">
              ITALGRU BOOM CRANE HEAVY MOVEMENT
            </div>
            <div className="text-xl sm:text-3xl font-black text-white tracking-tight">
              37.6 MT · 2,700 × 400 × 455 CM
            </div>
          </div>
        </div>

        {/* ── Physical Photo with Route Vector Passing Through ── */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl">
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/11.4.jpg"
              alt="37.6 MT boom crane assembly on hydraulic SPMT platform transporters at Mundra"
              fill
              className="object-cover object-center"
              sizes="100vw"
              style={{ filter: "brightness(0.92) contrast(1.15)" }}
            />
            {/* Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050c]/90 via-transparent to-[#02050c]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02050c]/70 via-transparent to-[#02050c]/50" />
          </motion.div>

          {/* Precision Engineering Dimension Line Vector Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <motion.line
              x1="8%"
              y1="50%"
              x2="92%"
              y2="50%"
              stroke="#ff6b4a"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              style={{ pathLength: lineProgress }}
              filter="drop-shadow(0 0 6px rgba(255,107,74,0.8))"
            />
            <circle cx="8%" cy="50%" r="5" fill="#ff6b4a" />
            <circle cx="92%" cy="50%" r="5" fill="#ff6b4a" />
          </svg>

          {/* In-Image Emergent Telemetry Tags */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 font-mono text-xs text-slate-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
            <span className="text-[#ff6b4a] font-bold">DISCHARGE:</span> QUAYSIDE CONTAINER HOIST → 12-AXLE SPMT
          </div>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 font-mono text-xs text-slate-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
            <span className="text-white font-bold">ROUTE:</span> MUNDRA SEAPORT → INDUSTRIAL POWER FACILITY
          </div>

          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 hidden sm:block">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#ff6b4a] bg-black/70 backdrop-blur-md px-5 py-3 rounded-xl border border-white/15 transition-colors"
            >
              <span>Explore All 11 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
