"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function HomeScale() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.8], [0.85, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.5, 0.9], ["30px", "0px", "-30px"]);

  return (
    <section
      ref={containerRef}
      id="scale"
      className="relative min-h-screen w-full bg-[#02050c] text-white flex items-center justify-center overflow-hidden px-6 sm:px-12 py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,74,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 max-w-4xl text-center space-y-6 select-none"
      >
        <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-[0.4em] uppercase font-bold block">
          Scale &amp; Reach
        </span>

        <div
          className="font-black tracking-[-0.06em] text-white leading-none text-[clamp(6rem,18vw,16rem)]"
        >
          190+
        </div>

        <div
          className="text-slate-300 font-extrabold tracking-[0.25em] uppercase text-sm sm:text-2xl"
        >
          COUNTRIES CONNECTED
        </div>

        <p className="text-slate-400 text-sm sm:text-lg font-light max-w-lg mx-auto leading-relaxed pt-2">
          Through established international forwarding networks.
        </p>
      </motion.div>
    </section>
  );
}
