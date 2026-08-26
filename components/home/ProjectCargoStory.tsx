"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

// Three editorial capability tags — replace the database spec table
const EDITORIAL_TAGS = [
  "Over-Dimensional / ODC",
  "Hydraulic SPMT / Multi-Axle",
  "Port-to-Site",
];

export function ProjectCargoStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="project-cargo"
      ref={sectionRef}
      className="relative bg-[#060f1e] text-white overflow-hidden"
    >
      {/* ── Full-bleed main image — left 65% ── */}
      <div className="absolute inset-0 lg:right-[35%]">
        <Image
          src="/images/11.4.jpg"
          alt="ITALGRU heavy-lift crane assembly secured on vessel flatracks — Freyer project cargo engineering"
          fill
          priority
          className="object-cover object-left sm:object-center"
          sizes="(min-width: 1024px) 65vw, 100vw"
          style={{ filter: "brightness(1.14) contrast(1.04)" }}
        />
        {/* Very light grade — let the subject breathe */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-[#060f1e]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e]/70 via-transparent to-transparent" />
      </div>

      {/* ── Mobile image banner (stacked layout) ── */}
      <div className="lg:hidden relative w-full h-[60vw] min-h-[260px] max-h-[440px]">
        <Image
          src="/images/11.4.jpg"
          alt="ITALGRU heavy-lift crane assembly on flatracks"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "brightness(1.14) contrast(1.04)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/40 to-transparent" />
      </div>

      {/* ── Right editorial panel — 35% ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-[#060f1e] lg:bg-transparent">
        <div className="lg:ml-auto lg:w-[35%] lg:pl-10">

          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#ff6b4a] text-[10px] font-mono tracking-[0.22em] uppercase font-semibold block mb-5"
          >
            Project Cargo Engineering
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Moving what ordinary{" "}
            <span className="text-slate-400 font-light italic">
              logistics cannot.
            </span>
          </motion.h2>

          {/* Brief */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Turnkey multimodal engineering for over-dimensional cargo — hydraulic
            transport, route surveys, port-to-site.
          </motion.p>

          {/* Editorial tags — replace spec table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 pt-6 border-t border-white/10 space-y-3"
          >
            {EDITORIAL_TAGS.map((tag) => (
              <span
                key={tag}
                className="block text-[11px] font-mono tracking-[0.18em] uppercase text-slate-400"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Consult Project Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
