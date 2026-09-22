"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowUpRight, Scale, Box, MapPin, Ship, CheckCircle2, ChevronRight, FileText } from "lucide-react";

interface ProjectRecord {
  id: string;
  recordNumber: string;
  commodity: string;
  weight: string;
  weightUnit: string;
  weightNumeric: number;
  volume: string;
  packages: string;
  route: {
    origin: string;
    originCountry: string;
    destination: string;
    destinationCountry: string;
  };
  mode: string;
  vesselTerms: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
  specs: { label: string; value: string }[];
  sourceNote: string;
}

const RECORDS: ProjectRecord[] = [
  {
    id: "record-9",
    recordNumber: "Project Record #09",
    commodity: "Heavy Industrial Breakbulk",
    weight: "482",
    weightUnit: "METRIC TONS",
    weightNumeric: 482,
    volume: "796 CBM",
    packages: "29 Packages",
    route: {
      origin: "Shanghai",
      originCountry: "China",
      destination: "Jebel Ali",
      destinationCountry: "United Arab Emirates",
    },
    mode: "Ocean Breakbulk Charter",
    vesselTerms: "Under-Deck Stowed Breakbulk",
    photo: "/images/9.2.jpg",
    photoAlt: "Heavy industrial breakbulk lift at quayside hold hoist — Record #9",
    photoCaption: "Quayside hold hoist, 482 MT Shanghai to Jebel Ali",
    specs: [
      { label: "Gross Weight", value: "482 Metric Tons" },
      { label: "Cargo Volume", value: "796 CBM" },
      { label: "Package Units", value: "29 Heavy Units" },
      { label: "Stowage Mode", value: "Break Bulk (BBK)" },
      { label: "Origin Gateway", value: "Shanghai, China" },
      { label: "Discharge Port", value: "Jebel Ali, UAE" },
    ],
    sourceNote: "Official Freyer Project Archive Record #9. Verifiable commercial bill of lading and port stowage manifest.",
  },
  {
    id: "record-11",
    recordNumber: "Project Record #11",
    commodity: "Industrial Boom Crane",
    weight: "37.6",
    weightUnit: "METRIC TONS",
    weightNumeric: 37.6,
    volume: "2,700 × 400 × 455 CM",
    packages: "Single Out-of-Gauge Unit",
    route: {
      origin: "Venice",
      originCountry: "Italy",
      destination: "Mundra",
      destinationCountry: "India",
    },
    mode: "BBK on Container Vessel",
    vesselTerms: "Ex-Works with Road Permit",
    photo: "/images/11.1.jpg",
    photoAlt: "Boom Crane 37.6 MT deck stowage on container vessel — Record #11",
    photoCaption: "Boom Crane loaded as BBK on container vessel, Venice to Mundra",
    specs: [
      { label: "Unit Weight", value: "37,600 KG (37.6 MT)" },
      { label: "Dimensions", value: "2,700 × 400 × 455 CM" },
      { label: "Commercial Terms", value: "Ex-Works (EXW)" },
      { label: "Permits Secured", value: "Special Road Transit Permit" },
      { label: "Loading Port", value: "Venice, Italy" },
      { label: "Discharge Port", value: "Mundra, India" },
    ],
    sourceNote: "Verbatim archive entry: 'Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.'",
  },
];

export function FTRCargoMonument() {
  const [activeTab, setActiveTab] = useState<"record-9" | "record-11">("record-9");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const record = RECORDS.find((r) => r.id === activeTab) ?? RECORDS[0];

  return (
    <section
      id="cargo-monument"
      ref={sectionRef}
      aria-label="Verified Project Cargo Monument"
      className="relative bg-[#121316] text-[#F8F7F4] py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e1390f]/[0.035] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.015] blur-[140px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── SECTION HEADER: ARCHITECTURAL RIGOR ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] text-slate-300 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
              </span>
              <span>Physical Evidence &amp; Documented Execution</span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.92] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
              }}
            >
              THE WEIGHT OF <br />
              <span className="text-white">
                REAL DISPLACEMENT
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              No simulated cargo renders. No synthetic claims. These are the verified, unalterable
              records of heavy industrial breakbulk cargo engineered and transported by Freyer.
            </p>
          </div>

          {/* Record Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.04] border border-white/10 self-start lg:self-end">
            <button
              onClick={() => setActiveTab("record-9")}
              className={[
                "px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-150 flex items-center gap-2",
                activeTab === "record-9"
                  ? "bg-[#e1390f] text-white font-semibold shadow-lg shadow-[#e1390f]/25"
                  : "text-white/60 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Record #9 · 482 MT</span>
            </button>
            <button
              onClick={() => setActiveTab("record-11")}
              className={[
                "px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-150 flex items-center gap-2",
                activeTab === "record-11"
                  ? "bg-[#e1390f] text-white font-semibold shadow-lg shadow-[#e1390f]/25"
                  : "text-white/60 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Record #11 · 37.6 MT</span>
            </button>
          </div>
        </div>

        {/* ── ACTIVE RECORD DOSSIER DISPLAY ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT COLUMN: Monumental Tonnage Display (7 cols) */}
            <div className="lg:col-span-7 space-y-8">

              {/* Tonnage Callout */}
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#e1390f] uppercase tracking-[0.2em] font-semibold">
                    {record.recordNumber}
                  </span>
                  <span className="text-white/40">{record.mode}</span>
                </div>

                {/* Massive Number */}
                <div className="py-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                  <span
                    className="text-7xl sm:text-9xl font-black uppercase text-white drop-shadow-2xl leading-none"
                    style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                  >
                    {record.weight}
                  </span>
                  <div>
                    <span
                      className="text-2xl sm:text-3xl font-black uppercase text-[#e1390f] tracking-wide block leading-tight"
                      style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                    >
                      {record.weightUnit}
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      {record.commodity}
                    </span>
                  </div>
                </div>

                {/* Route Vector Strip */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/50" />
                    <div>
                      <span className="font-bold text-white">{record.route.origin}</span>
                      <span className="text-white/40 ml-1">({record.route.originCountry})</span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e1390f] to-transparent relative">
                      <Ship className="w-3.5 h-3.5 text-[#e1390f] absolute -top-1.5 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-right">
                    <div>
                      <span className="font-bold text-white">{record.route.destination}</span>
                      <span className="text-white/40 ml-1">({record.route.destinationCountry})</span>
                    </div>
                    <MapPin className="w-3.5 h-3.5 text-[#e1390f]" />
                  </div>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {record.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/8 space-y-1"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {spec.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold font-mono text-white">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verbatim Source Note */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-white/50 leading-relaxed">
                <FileText className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                <p>{record.sourceNote}</p>
              </div>
            </div>

            {/* RIGHT COLUMN: Authentic Documentary Photography (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <Image
                  src={record.photo}
                  alt={record.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center brightness-95 contrast-105"
                />

                {/* Technical camera framing marks */}
                <div className="absolute top-4 left-4 border-t border-l border-white/40 w-4 h-4" />
                <div className="absolute top-4 right-4 border-t border-r border-white/40 w-4 h-4" />
                <div className="absolute bottom-4 left-4 border-b border-l border-white/40 w-4 h-4" />
                <div className="absolute bottom-4 right-4 border-b border-r border-white/40 w-4 h-4" />

                {/* Photo lower label badge */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#e1390f] text-[10px] font-mono font-bold uppercase tracking-wider text-white mb-2">
                    Official Field Archive
                  </div>
                  <p className="text-xs font-mono text-white/80 leading-relaxed">
                    {record.photoCaption}
                  </p>
                </div>
              </div>

              {/* Call to full projects archive */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white font-mono">
                    Explore Full Project Cargo Archive
                  </div>
                  <div className="text-[11px] font-mono text-white/40">
                    Industrial turbines, heavy cranes, energy transformers
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  View All
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
