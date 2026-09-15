"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Ruler, Maximize2, ShieldAlert, CheckCircle2, ArrowRight, Truck } from "lucide-react";

export interface CaliperItem {
  id: string;
  name: string;
  projectOrigin: string;
  projectDest: string;
  lengthM: number;
  widthM: number;
  heightM: number;
  weightMT: number;
  mode: string;
  clearanceStatus: string;
  roadPermit: string;
  vesselStowage: string;
  image: string;
  notes: string;
}

export const CALIPER_LOADS: CaliperItem[] = [
  {
    id: "boom-crane",
    name: "Boom Crane (Project #11)",
    projectOrigin: "Venice, Italy",
    projectDest: "Mundra, India",
    lengthM: 27.0,
    widthM: 4.0,
    heightM: 4.55,
    weightMT: 37.6,
    mode: "BBK on Container Vessel Deck",
    clearanceStatus: "Over-Length & Over-Height Envelope Verified",
    roadPermit: "Italian Highway Police Escort & Port Access Permit",
    vesselStowage: "Weather-deck tandem block lashing (BBK)",
    image: "/images/11.1.jpg",
    notes: "27.0m continuous span required dedicated multi-axle steering trailer to negotiate sharp port roundabouts."
  },
  {
    id: "qingdao-unit",
    name: "Wide BBK Unit (Project #3)",
    projectOrigin: "Qingdao, China",
    projectDest: "Sohar & Dammam",
    lengthM: 7.6,
    widthM: 6.15,
    heightM: 0.5,
    weightMT: 16.0,
    mode: "4 × BBK + 20' & 40' Flat Rack",
    clearanceStatus: "Extreme Over-Width Envelope (6.15m Span)",
    roadPermit: "Port Gantry Wide-Span Lift Authorization",
    vesselStowage: "Dual Flat Rack cell footprint span",
    image: "/images/3.jpg",
    notes: "6.15m extreme width required overhang approvals and special vessel cell bay clearance."
  },
  {
    id: "kobe-roro",
    name: "RORO Heavy Unit (Project #1)",
    projectOrigin: "Kobe, Japan",
    projectDest: "Chennai, India",
    lengthM: 9.04,
    widthM: 3.1,
    heightM: 3.16,
    weightMT: 37.1,
    mode: "RORO Vessel Internal Deck",
    clearanceStatus: "Ramp Incline & Ramp Door Clearance Passed",
    roadPermit: "Chennai Port Trust Ramp Clearance & Transit Permit",
    vesselStowage: "Lower vehicle deck tie-down clamps",
    image: "/images/1.jpg",
    notes: "9.04m length wheeled unit cleared RORO ramp angle without ground clearance scrape."
  }
];

export function CargoClearanceCaliperExperiment() {
  const [selectedLoadId, setSelectedLoadId] = useState("boom-crane");
  const shouldReduceMotion = useReducedMotion();

  const currentLoad = CALIPER_LOADS.find(l => l.id === selectedLoadId) || CALIPER_LOADS[0];

  // Visual scaling factors for caliper display (normalized to 400px width)
  const maxLen = 30.0;
  const calWidthPx = Math.max(120, Math.min(380, (currentLoad.lengthM / maxLen) * 380));

  return (
    <section id="caliper-experiment" className="relative bg-[#07152b] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
              Experiment 05 &bull; Unexpected Signature Interaction
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              THE CARGO CLEARANCE CALIPER
            </h2>
          </div>
          <div className="text-sm text-slate-400 font-light max-w-md">
            In heavy lift forwarding, millimeter clearance decides feasibility. This interactive engineering tool articulates real dimensional envelopes from verified Freyer projects.
          </div>
        </div>

        {/* Load Selector Pills */}
        <div className="flex flex-wrap gap-2.5 pt-6 pb-8">
          {CALIPER_LOADS.map(load => (
            <button
              key={load.id}
              onClick={() => setSelectedLoadId(load.id)}
              className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition ${
                selectedLoadId === load.id
                  ? "bg-[#e1390f] text-white font-bold shadow-md shadow-[#e1390f]/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {load.name} &bull; {load.weightMT} MT
            </button>
          ))}
        </div>

        {/* The Caliper Inspection Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#050b14] rounded-xl border border-white/10 p-6 sm:p-8">
          {/* Left Column: Interactive Dimensional Caliper Blueprint */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-[#0b1728] p-6 rounded-lg border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Ruler className="w-4 h-4 text-amber-400" />
                <span>DIMENSIONAL ENVELOPE INSPECTION</span>
              </span>
              <span>SCALE: 1:100 METRIC</span>
            </div>

            {/* SVG Engineering Blueprint Canvas */}
            <div className="relative py-8 flex flex-col items-center justify-center min-h-[260px]">
              {/* Length Caliper Line (Horizontal) */}
              <div className="w-full flex flex-col items-center mb-4">
                <div className="text-[11px] font-mono text-[#e1390f] font-bold mb-1">
                  LENGTH: {currentLoad.lengthM} METERS
                </div>
                <div className="relative flex items-center justify-center w-full max-w-[380px]">
                  {/* Caliper Bar */}
                  <motion.div
                    animate={{ width: calWidthPx }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="h-0.5 bg-[#e1390f] relative"
                  >
                    <div className="absolute left-0 -top-2 w-0.5 h-4.5 bg-[#e1390f]" />
                    <div className="absolute right-0 -top-2 w-0.5 h-4.5 bg-[#e1390f]" />
                  </motion.div>
                </div>
              </div>

              {/* Cargo Silhouette Card with Real Photo */}
              <motion.div
                layout
                className="relative h-32 sm:h-40 rounded border border-white/20 bg-black/60 overflow-hidden flex items-center justify-center"
                style={{ width: calWidthPx }}
              >
                <Image
                  src={currentLoad.image}
                  alt={currentLoad.name}
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                <div className="relative z-10 text-center p-2">
                  <div className="text-xs font-mono font-bold text-white drop-shadow">{currentLoad.name}</div>
                  <div className="text-[10px] font-mono text-amber-300 drop-shadow">{currentLoad.weightMT} MT &bull; {currentLoad.mode}</div>
                </div>
              </motion.div>

              {/* Width & Height Sub-Calipers */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-[380px] mt-6 text-center text-xs font-mono">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">MAX WIDTH</div>
                  <div className="text-white font-bold mt-0.5">{currentLoad.widthM} METERS</div>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">MAX HEIGHT</div>
                  <div className="text-white font-bold mt-0.5">{currentLoad.heightM} METERS</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between">
              <span>Origin: {currentLoad.projectOrigin}</span>
              <span>Destination: {currentLoad.projectDest}</span>
            </div>
          </div>

          {/* Right Column: Engineering Clearance Audits */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#e1390f]">
                Transit Clearance Feasibility Audit
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {currentLoad.name}
              </h3>

              {/* Status Badges */}
              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-emerald-300">Feasibility Status: </span>
                    <span className="text-slate-300 font-light">{currentLoad.clearanceStatus}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Road Permit Engineering</div>
                  <div className="text-slate-200">{currentLoad.roadPermit}</div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Marine Stowage Architecture</div>
                  <div className="text-slate-200">{currentLoad.vesselStowage}</div>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-light italic leading-relaxed pt-1">
                "{currentLoad.notes}"
              </p>
            </div>

            {/* Inquire for Custom Envelope */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="mailto:info@freyerinternational.com?subject=Oversized Cargo Feasibility Study"
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-white/10 hover:bg-white/15 border border-white/20 text-white py-3 text-xs font-semibold tracking-wider uppercase font-mono transition"
              >
                <span>Submit Custom Cargo Dimensions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
