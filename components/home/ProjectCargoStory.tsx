"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

const SPECS = [
  { label: "Cargo type", value: "Over-dimensional / ODC" },
  { label: "Gross weight", value: "Up to 1,200+ MT" },
  { label: "Transport", value: "Hydraulic SPMT / multi-axle" },
  { label: "Scope", value: "Port-to-site, turnkey" },
  { label: "Documentation", value: "EXIM + customs special cargo" },
];

const EVIDENCE = [
  {
    src: "/images/slide2.jpg",
    alt: "STS cranes and container ships at deep-water port",
    label: "Deep-water port operations",
  },
  {
    src: "/images/11.4.jpg",
    alt: "ITALGRU crane girder on flatcar at port yard",
    label: "Port yard lashing & stowage",
  },
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
      {/* ── Full-bleed main image — left ~65% ── */}
      <div className="absolute inset-0 lg:right-[38%]">
        <Image
          src="/images/11.3.jpg"
          alt="ITALGRU heavy crane girder lifted mid-air at container port — Freyer project cargo"
          fill
          priority
          className="object-cover object-center"
          sizes="65vw"
        />
        {/* Dark treatment: left gets lighter (let image breathe), right edge fades to section bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-[#060f1e]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e]/80 via-transparent to-transparent" />
      </div>

      {/* ── Mobile image overlay (stacked layout) ── */}
      <div className="lg:hidden relative w-full h-[55vw] min-h-[240px] max-h-[420px]">
        <Image
          src="/images/11.3.jpg"
          alt="ITALGRU heavy crane girder lifted mid-air at container port"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/40 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 bg-[#060f1e] lg:bg-transparent">
        <div className="lg:ml-auto lg:w-[38%] lg:pl-12">
          {/* Label */}
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

          {/* Single-sentence brief */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs"
          >
            Turnkey multimodal engineering for over-dimensional cargo —
            hydraulic transport, route surveys, port-to-site.
          </motion.p>

          {/* Technical specs */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 space-y-3 border-t border-white/10 pt-6"
          >
            {SPECS.map(({ label, value }) => (
              <div key={label} className="flex justify-between items-baseline gap-4">
                <dt className="text-[11px] font-mono text-slate-500 uppercase tracking-wider shrink-0">
                  {label}
                </dt>
                <dd className="text-xs sm:text-sm text-slate-200 font-medium text-right">
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Consult Project Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Evidence image strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-2.5"
          >
            {EVIDENCE.map(({ src, alt, label }, i) => (
              <div key={i} className="relative aspect-[4/3] rounded overflow-hidden border border-white/8">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center grayscale-[20%]"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-slate-300 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
