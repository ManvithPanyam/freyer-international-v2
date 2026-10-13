"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, ShieldCheck, Maximize2 } from "lucide-react";

export interface FeaturedShipment {
  id: number;
  recordNumber: string;
  origin: string;
  originCountry: string;
  destination: string;
  destCountry: string;
  transportMode: string;
  headlineMetric: string;
  metricLabel: string;
  specs: { label: string; value: string }[];
  description: string;
  photo: string;
  photoCaption: string;
  tag: string;
}

export const FEATURED_SHIPMENTS: FeaturedShipment[] = [
  {
    id: 9,
    recordNumber: "RECORD #09",
    origin: "SHANGHAI",
    originCountry: "China",
    destination: "JEBEL ALI",
    destCountry: "UAE",
    transportMode: "Break Bulk Shipment",
    headlineMetric: "482 MT",
    metricLabel: "TOTAL SHIPMENT WEIGHT",
    specs: [
      { label: "Cubic Volume", value: "796 CBM" },
      { label: "Packages", value: "29 PKG" },
      { label: "Stowage", value: "Under-Deck Open Hold" },
      { label: "Corridor", value: "East Asia → Arabian Gulf" },
    ],
    description:
      "Fabricated heavy structural steel breakbulk consignment staged under nighttime quayside spotlights in Shanghai and hoisted directly into vessel open hold for international sea transit.",
    photo: "/images/9.1.jpg",
    photoCaption: "Shanghai Terminal: 482 MT structural breakbulk staged on quayside dunnage under nighttime lights.",
    tag: "Breakbulk Ocean Freight",
  },
  {
    id: 7,
    recordNumber: "RECORD #07",
    origin: "GENOA",
    originCountry: "Italy",
    destination: "JEBEL ALI",
    destCountry: "UAE",
    transportMode: "Door to Door Multimodal",
    headlineMetric: "17 UNITS",
    metricLabel: "68,000 KG EACH (DOOR TO DOOR)",
    specs: [
      { label: "Per Unit Weight", value: "68,000 KG (68 MT)" },
      { label: "Dimensions", value: "360 × 263 × 400 CM" },
      { label: "Consignment", value: "17 Monolithic Units" },
      { label: "Execution", value: "Consecutive Ocean Lots" },
    ],
    description:
      "Seventeen heavy monolithic machinery modules, each measuring 360 × 263 × 400 cm and weighing 68,000 kg, coordinated door-to-door from northern Italy into Jebel Ali across scheduled vessel lots.",
    photo: "/images/7.1.jpg",
    photoCaption: "Quayside hold cell guide hoist: 68-ton crated machinery unit lowered by spreader chains.",
    tag: "Heavy Monolithic Machinery",
  },
  {
    id: 11,
    recordNumber: "RECORD #11",
    origin: "VENICE",
    originCountry: "Italy",
    destination: "MUNDRA",
    destCountry: "India",
    transportMode: "BBK on Container Vessel",
    headlineMetric: "2,700 CM",
    metricLabel: "OUT-OF-GAUGE LATTICE BOOM CRANE",
    specs: [
      { label: "Cargo Weight", value: "37,600 KG (37.6 MT)" },
      { label: "Dimensions", value: "2700 × 400 × 455 CM" },
      { label: "Terms", value: "Ex-Works (EXW)" },
      { label: "Permits", value: "Italian Civil Road Permit" },
    ],
    description:
      "27-meter out-of-gauge lattice boom crane assembly moved overland through Italy under special civil road permits, then rigged with spreader beam and stowed as breakbulk on container vessel deck to Mundra.",
    photo: "/images/11.1.jpg",
    photoCaption: "Venice Quayside: 27-meter boom crane rigged with spreader beam on container vessel deck.",
    tag: "Over-Dimensional Breakbulk",
  },
];

interface ProjectsImmersiveHeroProps {
  onSelectProject?: (projectId: number) => void;
}

export function ProjectsImmersiveHero({ onSelectProject }: ProjectsImmersiveHeroProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = FEATURED_SHIPMENTS[activeIdx];

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    if (onSelectProject) {
      onSelectProject(FEATURED_SHIPMENTS[idx].id);
    }
  };

  return (
    <section
      aria-label="Projects in Motion — Featured Cargo Dossier"
      className="relative w-full bg-[#111317] text-white overflow-hidden min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-white/10"
    >
      {/* ── FULL-WIDTH ART-DIRECTED BACKGROUND PHOTOGRAPH ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        >
          <Image
            src={current.photo}
            alt={current.photoCaption}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.42] contrast-[1.08]"
          />
          {/* Subtle Industrial Vignette Scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111317] via-[#111317]/85 to-transparent w-full lg:w-[70%]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#111317] via-[#111317]/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111317]/90 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── BREADCRUMB & EYEBROW ROW ── */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[var(--color-cta)] font-semibold">Projects</span>
            <span className="text-white/30">/</span>
            <span className="text-white font-medium">Documented Movements</span>
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-cta)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-cta)]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--color-cta)] font-bold">
              VERIFIED ARCHIVE &bull; 11 MOVEMENTS
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO EDITORIAL OVERLAY GRID ── */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* LEFT COLUMN: Headline & Route Vector (8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Classification & Record tag */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-white font-semibold">
                {current.tag}
              </span>
              <span className="text-xs font-mono text-[var(--color-cta)] font-bold tracking-wider">
                {current.recordNumber}
              </span>
            </div>

            {/* Monumental Title */}
            <div>
              <h1
                className="text-white font-black tracking-[-0.02em] leading-[0.92] uppercase text-balance"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(3.2rem, 7vw, 6.4rem)",
                }}
              >
                PROJECTS <br />
                <span className="text-[#3b82f6] font-light italic text-[0.88em] leading-tight tracking-normal block mt-1">
                  IN MOTION.
                </span>
              </h1>
            </div>

            {/* Route Vector Lockup */}
            <div className="flex flex-wrap items-center gap-4 text-2xl sm:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-barlow-condensed)] tracking-tight uppercase leading-none pt-2">
              <span className="text-white">{current.origin}</span>
              <span className="text-xs font-mono text-white/50 tracking-normal self-end pb-1 font-normal">
                ({current.originCountry})
              </span>
              <div className="inline-flex items-center gap-2 text-[var(--color-cta)]">
                <span className="w-6 sm:w-10 h-[3px] bg-[var(--color-cta)]" />
                <ArrowRight className="w-5 sm:w-7 h-5 sm:h-7" />
              </div>
              <span className="text-white/60 italic">{current.destination}</span>
              <span className="text-xs font-mono text-white/40 tracking-normal self-end pb-1 font-normal">
                ({current.destCountry})
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
              {current.description}
            </p>

            {/* Primary Measurement Highlight Bar */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-baseline gap-6 sm:gap-10">
              <div>
                <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-[family-name:var(--font-barlow-condensed)] leading-none tracking-tight block">
                  {current.headlineMetric}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-bold mt-1 block">
                  {current.metricLabel}
                </span>
              </div>

              {/* Supporting Specs */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-white/70">
                {current.specs.map((s, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-white/40 text-[9px] uppercase tracking-wider block">
                      {s.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Authentic Archival Image Card & Direct Dossier Button (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 group">
              <Image
                src={current.photo}
                alt={current.photoCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cta)]" />
                <span>ORIGINAL ARCHIVAL FIELD PHOTO</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                <p className="line-clamp-2 text-[11px] text-white/70 leading-snug">{current.photoCaption}</p>
              </div>
            </div>

            {/* Jump to Project Record in Archive */}
            <button
              onClick={() => {
                const target = document.getElementById(`project-record-${current.id}`);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "center" });
                } else if (onSelectProject) {
                  onSelectProject(current.id);
                }
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-between group"
            >
              <span>Inspect Case File #{current.id.toString().padStart(2, "0")} in Register</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--color-cta)]" />
            </button>
          </div>
        </div>
      </div>

      {/* ── THREE-PROJECT FEATURED INDEX SELECTOR (SUBTLE EDITORIAL TABS) ── */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono text-white/50">
            <span className="text-[var(--color-cta)] font-bold">SELECT FEATURED RECORD:</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="hidden sm:inline">3 Landmark Movements</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {FEATURED_SHIPMENTS.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2.5 whitespace-nowrap border ${
                    isSelected
                      ? "bg-[var(--color-cta)] border-[var(--color-cta)] text-white font-bold shadow-lg shadow-[var(--color-cta)]/20"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  <span className={isSelected ? "text-white" : "text-[var(--color-cta)] font-bold"}>
                    {item.recordNumber}
                  </span>
                  <span>
                    {item.origin} → {item.destination}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
