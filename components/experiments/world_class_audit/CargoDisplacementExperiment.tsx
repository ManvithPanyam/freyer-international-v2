"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronRight, Weight, Maximize2, Anchor, Truck, ArrowRight, Shield } from "lucide-react";

export interface CargoProjectRecord {
  id: number;
  weightDisplay: string;
  weightUnit: string;
  title: string;
  origin: string;
  destination: string;
  transportMode: string;
  dimensions: string;
  packages: string;
  volume?: string;
  notes: string;
  image: string;
  phases: {
    phase: string;
    action: string;
    detail: string;
  }[];
}

export const VERIFIED_RECORDS: CargoProjectRecord[] = [
  {
    id: 11,
    weightDisplay: "37.6",
    weightUnit: "MT",
    title: "Boom Crane Heavy Displacement",
    origin: "Venice, Italy",
    destination: "Mundra, India",
    transportMode: "BBK on Container Vessel",
    dimensions: "2,700 × 400 × 455 cm",
    packages: "1 Unit (37,600 KG)",
    notes: "Ex-Works terms including road permit loaded as BBK on container vessel.",
    image: "/images/11.1.jpg",
    phases: [
      {
        phase: "01. ORIGIN EX-WORKS",
        action: "Venice Factory Staging & Road Permits",
        detail: "Specialized route survey and multi-axle police escort permits across Italian transport corridors."
      },
      {
        phase: "02. MARITIME STOWAGE",
        action: "Port of Venice Vessel Loading",
        detail: "Direct ship-crane lift and heavy lashing as Break Bulk (BBK) atop ocean container vessel deck."
      },
      {
        phase: "03. MUNDRA DISCHARGE",
        action: "Discharge & Port Clearance",
        detail: "Discharge onto specialized hydraulic multi-axle trailer for final industrial site delivery."
      }
    ]
  },
  {
    id: 9,
    weightDisplay: "482.0",
    weightUnit: "MT",
    title: "Multi-Unit Break Bulk Lot",
    origin: "Shanghai, China",
    destination: "Jebel Ali, UAE",
    transportMode: "Chartered Break Bulk Vessel",
    dimensions: "Various Industrial Units",
    packages: "29 Packages",
    volume: "796 CBM",
    notes: "29 Packages breakbulk shipment totaling 796 CBM and 482 MT safely delivered.",
    image: "/images/2.1.jpg",
    phases: [
      {
        phase: "01. CONSOLIDATION",
        action: "Shanghai Terminal Assembly",
        detail: "29 industrial packages staged at Shanghai port terminal; total volume calculation 796 CBM."
      },
      {
        phase: "02. HEAVY OCEAN TRANSIT",
        action: "Maritime Ocean Passage",
        detail: "482 MT breakbulk cargo secured in holds under strict marine surveyor inspection."
      },
      {
        phase: "03. JEBEL ALI ARRIVAL",
        action: "Unloading & Gateway Delivery",
        detail: "Tandem port crane discharge directly onto waiting heavy transport trailers."
      }
    ]
  },
  {
    id: 1,
    weightDisplay: "37.1",
    weightUnit: "MT",
    title: "Kobe RORO Industrial Unit",
    origin: "Kobe, Japan",
    destination: "Chennai, India",
    transportMode: "RORO Vessel",
    dimensions: "904 × 310 × 316 cm",
    packages: "1 Unit (37,100 KG)",
    notes: "904 x 310 x 316 cm - WT 37,100 KG executed via specialized RORO vessel into Chennai Port.",
    image: "/images/1.jpg",
    phases: [
      {
        phase: "01. RORO ROLL-ON",
        action: "Kobe Pier Roll-On Operation",
        detail: "37.1 MT unit rolled directly onto specialized automotive/breakbulk vehicle deck."
      },
      {
        phase: "02. SEA PASSAGE",
        action: "Trans-Pacific Ocean Corridor",
        detail: "Secured beneath internal weather-protected decks to prevent marine corrosion."
      },
      {
        phase: "03. CHENNAI BERTH",
        action: "Roll-Off & Customs Brokerage",
        detail: "Freyer Chennai customs team executes immediate AEO clearance upon ramp roll-off."
      }
    ]
  }
];

export function CargoDisplacementExperiment() {
  const [selectedRecordIndex, setSelectedRecordIndex] = useState(0);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const currentRecord = VERIFIED_RECORDS[selectedRecordIndex];

  return (
    <section id="project-cargo-experiment" className="relative bg-[#050b14] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
              Experiment 02 &bull; Project Cargo Storytelling
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              THE PHYSICAL DISPLACEMENT
            </h2>
          </div>
          <div className="text-sm text-slate-400 font-light max-w-md">
            Moving hundreds of metric tons requires mathematical precision. Every record below is verified from Freyer’s historical engineering execution.
          </div>
        </div>

        {/* Record Selectors */}
        <div className="flex flex-wrap gap-2.5 pt-6 pb-8">
          {VERIFIED_RECORDS.map((rec, idx) => (
            <button
              key={rec.id}
              onClick={() => {
                setSelectedRecordIndex(idx);
                setActivePhaseIndex(0);
              }}
              className={`px-4 py-2.5 rounded text-xs font-mono tracking-wider transition ${
                selectedRecordIndex === idx
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              RECORD #{rec.id} &bull; {rec.weightDisplay} {rec.weightUnit} &bull; {rec.origin.split(",")[0]} → {rec.destination.split(",")[0]}
            </button>
          ))}
        </div>

        {/* The Cargo Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Cargo Stage with Displacement Animation */}
          <div className="lg:col-span-7 bg-[#0b1728] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            <div className="relative h-[340px] sm:h-[420px] w-full bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentRecord.id}-${activePhaseIndex}`}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentRecord.image}
                    alt={currentRecord.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728] via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Tonnage Callout Plate */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                <div className="bg-[#07152b]/90 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Verified Payload</div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-baseline gap-1">
                    <span>{currentRecord.weightDisplay}</span>
                    <span className="text-sm text-[#e1390f]">{currentRecord.weightUnit}</span>
                  </div>
                </div>

                <div className="bg-[#07152b]/90 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded text-right hidden sm:block">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Transport Mode</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{currentRecord.transportMode}</div>
                </div>
              </div>
            </div>

            {/* Displacement Phase Step Controller */}
            <div className="p-5 sm:p-6 bg-[#07152b] border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Transit Phase ({activePhaseIndex + 1} of 3)
              </div>
              <div className="grid grid-cols-3 gap-2">
                {currentRecord.phases.map((p, idx) => (
                  <button
                    key={p.phase}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`text-left p-2.5 sm:p-3 rounded border transition ${
                      activePhaseIndex === idx
                        ? "bg-white/10 border-[#e1390f] text-white"
                        : "bg-black/20 border-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className={`text-[10px] font-mono ${activePhaseIndex === idx ? "text-[#e1390f] font-bold" : ""}`}>
                      {p.phase}
                    </div>
                    <div className="text-xs font-medium truncate mt-0.5">{p.action.split(" ")[0]}...</div>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-4 rounded bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">{currentRecord.phases[activePhaseIndex].action}: </span>
                {currentRecord.phases[activePhaseIndex].detail}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Telemetry & Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b1728] p-6 rounded-lg border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-white/10 pb-3">
                Verified Engineering Specifications
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Commodity Title</span>
                  <span className="text-white font-medium text-right">{currentRecord.title}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Routing Corridor</span>
                  <span className="text-white font-medium text-right">{currentRecord.origin} → {currentRecord.destination}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Dimensions</span>
                  <span className="text-white font-mono font-medium text-right">{currentRecord.dimensions}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Package Count</span>
                  <span className="text-white font-medium text-right">{currentRecord.packages}</span>
                </div>
                {currentRecord.volume && (
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400 font-mono">Total Volume</span>
                    <span className="text-white font-mono font-medium text-right">{currentRecord.volume}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Official Source Note</div>
                <div className="p-3 bg-black/30 rounded border border-white/10 text-xs text-slate-300 font-light italic">
                  "{currentRecord.notes}"
                </div>
              </div>
            </div>

            {/* Operational Reassurance */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3.5 text-xs text-slate-300">
              <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Full Chain Marine Cargo Insurance & Survey</div>
                <div className="mt-1 text-slate-400 font-light leading-relaxed">
                  Every oversized lot operates under specialized heavy cargo permits, port crane surveys, and lashing certification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
