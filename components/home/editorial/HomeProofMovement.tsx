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

  const imageScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [1.15, 1, 1.08]);
  const containerOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.95], [0.2, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#03060f] text-white flex flex-col justify-center overflow-hidden py-24 sm:py-32 px-6 sm:px-12 lg:px-20"
    >
      <motion.div
        style={{ opacity: containerOpacity }}
        className="max-w-[1560px] mx-auto w-full space-y-12"
      >
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.35em] uppercase font-bold block mb-3">
              Documented Physical Execution
            </span>
            <h2
              className="font-black tracking-tight text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              MUNDRA → SITE
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-xl font-light max-w-xl leading-relaxed">
              Pre-transit engineering, route clearance, and synchronized heavy-cargo movement.
            </p>
          </div>

          <div className="text-left md:text-right font-mono space-y-1">
            <div className="text-xs text-slate-500 uppercase tracking-widest">
              ITALGRU BOOM CRANE ASSEMBLY
            </div>
            <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              37.6 MT · 2,700 × 400 × 455 CM
            </div>
          </div>
        </div>

        {/* Cinematic Photograph Canvas */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/11.4.jpg"
              alt="37.6 MT boom crane assembly loaded on hydraulic platform transporters at Mundra Port"
              fill
              className="object-cover object-center"
              sizes="100vw"
              style={{ filter: "brightness(0.92) contrast(1.12)" }}
            />
            {/* Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
          </motion.div>

          {/* Integrated Editorial Overlay Mark */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span className="text-[#ff6b4a] font-bold">CASE 11</span>
              <span>·</span>
              <span>BREAKBULK ON CONTAINER VESSEL + HYDRAULIC SPMT</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-10 hidden sm:block">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#ff6b4a] bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 transition-colors"
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
