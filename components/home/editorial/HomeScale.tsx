"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HomeScale() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.85], [0.8, 1.1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.95], [0, 1, 1, 0]);
  const arcLength = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const matrixOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0.15, 0.75, 0.3]);

  return (
    <section
      ref={containerRef}
      id="scale"
      className="relative min-h-screen w-full bg-[#02050c] text-white flex items-center justify-center overflow-hidden px-6 sm:px-12 py-32"
    >
      {/* ── Visual Event: Evolving Global Trade Corridor Matrix ── */}
      <motion.div
        style={{ opacity: matrixOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
      >
        <svg
          viewBox="0 0 1400 800"
          className="w-full h-full max-w-[1600px] object-cover opacity-60"
          fill="none"
        >
          {/* Orbital Latitudinal Arcs */}
          <ellipse cx="700" cy="400" rx="600" ry="240" stroke="#1e293b" strokeWidth="1.2" strokeDasharray="3 6" />
          <ellipse cx="700" cy="400" rx="460" ry="180" stroke="#1e293b" strokeWidth="1.2" strokeDasharray="3 6" />
          <ellipse cx="700" cy="400" rx="300" ry="120" stroke="#334155" strokeWidth="1.5" />

          {/* Glowing Transcontinental Trade Arcs */}
          <motion.path
            d="M 200 450 Q 500 150, 700 380 T 1200 350"
            stroke="#ff6b4a"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ pathLength: arcLength }}
            filter="drop-shadow(0 0 8px rgba(255,107,74,0.6))"
          />
          <motion.path
            d="M 280 320 Q 600 580, 850 360 T 1150 480"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: arcLength }}
            filter="drop-shadow(0 0 8px rgba(56,189,248,0.5))"
          />
          <motion.path
            d="M 450 550 Q 700 200, 950 420 T 1300 280"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ pathLength: arcLength }}
          />

          {/* Key Global Trade Hub Nodes */}
          <circle cx="700" cy="380" r="6" fill="#ff6b4a" className="animate-ping" opacity="0.75" />
          <circle cx="700" cy="380" r="4" fill="#ff6b4a" />
          <circle cx="200" cy="450" r="3.5" fill="#38bdf8" />
          <circle cx="1200" cy="350" r="3.5" fill="#38bdf8" />
          <circle cx="850" cy="360" r="3" fill="#ffffff" />
        </svg>

        {/* Ambient Radial Core Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,74,0.12)_0%,transparent_65%)]" />
      </motion.div>

      {/* ── Colossal Typographic Focal Point ── */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-4xl text-center space-y-6 select-none"
      >
        <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-[0.45em] uppercase font-bold block">
          Global Reach · 190+ Sovereign Corridors
        </span>

        <div
          className="font-black tracking-[-0.07em] text-white leading-none text-[clamp(6.5rem,20vw,17rem)] drop-shadow-[0_0_50px_rgba(255,107,74,0.2)]"
        >
          190+
        </div>

        <div
          className="text-slate-200 font-black tracking-[0.3em] uppercase text-sm sm:text-2xl"
        >
          COUNTRIES CONNECTED
        </div>

        <p className="text-slate-300 text-sm sm:text-xl font-light max-w-lg mx-auto leading-relaxed pt-2">
          Through verified international freight networks and certified bilateral border agency partnerships.
        </p>
      </motion.div>
    </section>
  );
}
