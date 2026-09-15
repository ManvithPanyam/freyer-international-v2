"use client";

import React, { useState } from "react";
import {
  MAINLAND_PATH,
  ISLAND_PATHS,
  STATIONS_DATA,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface StationMetadata {
  type: string;
  scope: string;
  facilities: string[];
}

const STATION_META: Record<string, StationMetadata> = {
  chennai_egmore: {
    type: "Corporate Registered Headquarters",
    scope: "National Network Management • Central Operations • Licensed Ocean & Air Customs Brokerage",
    facilities: ["Customs House Brokerage", "Pan-India Operations Control", "Project Cargo Directorate"],
  },
  chennai_airport: {
    type: "Air Cargo Terminal Office",
    scope: "On-Field International Air Cargo Operations • Apron Logistics • Expedited Customs Clearance",
    facilities: ["Air Cargo Terminal Desk", "Direct Apron Handling", "Time-Critical Dispatch"],
  },
  delhi: {
    type: "Northern Regional Branch",
    scope: "Northern Industrial Corridor • IGI Air Cargo Terminal • Inland Container Depot (ICD) Coordination",
    facilities: ["Air Freight Operations", "ICD Liaison", "Regional Inland Trucking"],
  },
  mumbai: {
    type: "Western Regional & Port Gateway",
    scope: "Western Seaboard Gateway • Nhava Sheva (JNPT) Support • Air & Ocean Customs Brokerage",
    facilities: ["Nhava Sheva Port Liaison", "Air Cargo Terminal", "Export/Import Clearance"],
  },
  ahmedabad: {
    type: "Gujarat Commercial Branch",
    scope: "Gujarat Industrial Corridor • Port Mundra / Kandla Feeder Linkage • Multimodal Transport",
    facilities: ["Industrial Cargo Liaison", "Multimodal Freight", "Commercial Customs Documentation"],
  },
  bengaluru: {
    type: "Southern Technology & Regional Hub",
    scope: "Southern High-Tech Corridor • Kempegowda International Air Cargo • Bonded Logistics",
    facilities: ["Air Cargo Operations", "High-Value Cargo Security", "Bonded Warehousing Liaison"],
  },
  hyderabad: {
    type: "Regional Commercial Branch",
    scope: "Central Corridor • RGIA Air Cargo Terminal • Inland Port & Pharmaceuticals Handling",
    facilities: ["Pharma Cold Chain Liaison", "Air Cargo Handling", "Regional Inland Transport"],
  },
  visakhapatnam: {
    type: "Eastern Deep-Water Port Gateway",
    scope: "Eastern Seaboard Gateway • Visakhapatnam Port Operations • Heavy Breakbulk Stevedoring",
    facilities: ["Port Operations Desk", "Breakbulk Stevedoring", "Customs Terminal Documentation"],
  },
  coimbatore: {
    type: "Industrial & Manufacturing Gateway",
    scope: "Western Tamil Nadu Industrial Belt • Multi-Axle Road Freight • Inland Customs Handling",
    facilities: ["Industrial Machinery Logistics", "Overland Road Freight", "Inland Clearance"],
  },
  tuticorin: {
    type: "Deep-Water Seaport Branch",
    scope: "V.O. Chidambaranar Port Operations • Ocean Stevedoring • Container Freight Station Handling",
    facilities: ["Deep-Water Berth Liaison", "CFS Stevedoring", "Direct Ocean Clearance"],
  },
};

export function PresentationIndiaMap() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [copied, setCopied] = useState(false);

  const selected = STATIONS_DATA.find((s) => s.id === selectedStationId) || STATIONS_DATA[0];
  const meta = STATION_META[selected.id] || {
    type: "Operating Branch Station",
    scope: "Commercial Freight Forwarding & Logistics",
    facilities: ["Local Customs Clearance", "Direct Cargo Operations"],
  };

  const copyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(selected.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="india-network-hero"
      className="relative bg-[#030712] text-white py-16 sm:py-24 border-t border-white/10 overflow-hidden"
    >
      <div id="network-finalist" className="absolute -top-12" />
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* ================================================== */}
        {/* 1. EDITORIAL SECTION HEADER (No GIS / Experiment UI) */}
        {/* ================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 sm:pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#e1390f]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f] font-semibold">
                VERIFIED PHYSICAL FOOTPRINT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              10 STATIONS ACROSS INDIA.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Direct company branch offices, licensed customs brokerage, and on-dock terminal handling across primary industrial corridors, air cargo gates, and major deep-water seaports.
            </p>
          </div>

          {/* Key Infrastructure Badges */}
          <div className="grid grid-cols-3 gap-4 text-xs font-mono shrink-0">
            <div className="border-l border-white/10 pl-3">
              <span className="block text-white font-bold text-xl sm:text-2xl font-mono">10</span>
              <span className="text-slate-400 text-[11px] uppercase tracking-wider">Stations</span>
            </div>
            <div className="border-l border-white/10 pl-3">
              <span className="block text-white font-bold text-xl sm:text-2xl font-mono">8</span>
              <span className="text-slate-400 text-[11px] uppercase tracking-wider">Key Cities</span>
            </div>
            <div className="border-l border-white/10 pl-3">
              <span className="block text-[#e1390f] font-bold text-xl sm:text-2xl font-mono">100%</span>
              <span className="text-slate-400 text-[11px] uppercase tracking-wider">Direct Presence</span>
            </div>
          </div>
        </div>

        {/* Quick Station Filter Rail */}
        <div className="py-4 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 shrink-0 mr-1 flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#e1390f]" /> Select Station:
          </span>
          {STATIONS_DATA.map((st) => {
            const isSelected = st.id === selected.id;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStationId(st.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-[#e1390f] border-[#e1390f] text-white font-bold shadow-lg shadow-[#e1390f]/25"
                    : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {st.isHQ && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                <span>{st.short}</span>
              </button>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* 2. MAIN MAP HERO STAGE + INTEGRATED CUSTOMER PANEL */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-8 sm:pt-12">
          
          {/* MAP CANVAS — DOMINATES 8 COLUMNS (~70% Visual Field) */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[500px] sm:min-h-[660px] lg:min-h-[740px]">
            
            {/* The Floating Authoritative India SVG */}
            <svg
              viewBox="0 0 1000 1208"
              className="w-full h-auto max-h-[740px] select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700"
            >
              <defs>
                {/* Refined Rich Landmass Fill Gradient */}
                <linearGradient id="indiaLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d1b2e" />
                  <stop offset="50%" stopColor="#091424" />
                  <stop offset="100%" stopColor="#050c17" />
                </linearGradient>

                {/* Subtle Coastline Glow Filter */}
                <filter id="coastlineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.35" />
                </filter>
              </defs>

              {/* India Mainland Boundary (Approved Survey of India geometry) */}
              <path
                d={MAINLAND_PATH}
                fill="url(#indiaLandGradient)"
                stroke="#3b82f6"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeOpacity="0.85"
                filter="url(#coastlineGlow)"
              />

              {/* Andaman & Nicobar, Lakshadweep Island Chains */}
              {ISLAND_PATHS.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  fill="url(#indiaLandGradient)"
                  stroke="#3b82f6"
                  strokeWidth="1.0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
              ))}

              {/* Station Markers with Clear, Uncrowded Labels */}
              {STATIONS_DATA.map((st) => {
                const isSelected = st.id === selected.id;

                const isLeftAligned =
                  st.city === "Mumbai" ||
                  st.city === "Ahmedabad" ||
                  st.city === "Bengaluru" ||
                  st.city === "Coimbatore";

                const labelX = isLeftAligned ? st.cx - 16 : st.cx + 16;
                const labelY =
                  st.id === "chennai_egmore"
                    ? st.cy - 6
                    : st.id === "chennai_airport"
                    ? st.cy + 16
                    : st.cy + 4;

                return (
                  <g
                    key={st.id}
                    onClick={() => setSelectedStationId(st.id)}
                    className="cursor-pointer group"
                  >
                    {/* Active Station Pulse Radar Halo */}
                    {isSelected && (
                      <>
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={st.isHQ ? 22 : 18}
                          fill="none"
                          stroke="#e1390f"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          className="animate-spin"
                          style={{ animationDuration: "12s", transformOrigin: `${st.cx}px ${st.cy}px` }}
                        />
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={st.isHQ ? 14 : 12}
                          fill="none"
                          stroke="#e1390f"
                          strokeWidth="1"
                          className="opacity-40"
                        />
                      </>
                    )}

                    {/* Subtle Leader line for close Chennai stations */}
                    {st.id === "chennai_airport" && (
                      <line
                        x1={st.cx}
                        y1={st.cy}
                        x2={labelX}
                        y2={labelY - 4}
                        stroke="#e1390f"
                        strokeWidth="0.8"
                        strokeOpacity="0.5"
                        strokeDasharray="2 2"
                      />
                    )}
                    {st.id === "chennai_egmore" && (
                      <line
                        x1={st.cx}
                        y1={st.cy}
                        x2={labelX}
                        y2={labelY - 4}
                        stroke="#e1390f"
                        strokeWidth="0.8"
                        strokeOpacity="0.5"
                        strokeDasharray="2 2"
                      />
                    )}

                    {/* Outer Marker Shell */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 9 : st.isHQ ? 8 : 6}
                      fill={isSelected ? "#e1390f" : st.isHQ ? "#e1390f" : "#0f172a"}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Inner Center Core */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 3.5 : 2.2}
                      fill={isSelected ? "#ffffff" : st.isHQ ? "#ffffff" : "#38bdf8"}
                    />

                    {/* Geographic City Text Label */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={isLeftAligned ? "end" : "start"}
                      className={`text-[12px] font-mono tracking-wider transition-all duration-200 pointer-events-none select-none ${
                        isSelected
                          ? "fill-white font-bold text-[13px]"
                          : st.isHQ
                          ? "fill-amber-400 font-bold"
                          : "fill-slate-300 group-hover:fill-white font-medium"
                      }`}
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000000)",
                      }}
                    >
                      {st.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ================================================== */}
          {/* 3. CUSTOMER-FACING STATION DOSSIER (4 COLUMNS) */}
          {/* ================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            
            {/* Active Station Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#091322] to-[#050b14] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle accent border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e1390f] to-transparent opacity-80" />

              {/* Card Header: Station Name & Type */}
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-[#e1390f]/15 text-[#e1390f] border border-[#e1390f]/30 font-semibold">
                    {meta.type}
                  </span>
                  {selected.isHQ && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                      Headquarters
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                  {selected.name}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {meta.scope}
                </p>
              </div>

              {/* Physical Address Section */}
              <div className="py-4 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e1390f]" /> Verified Office Address
                  </span>
                  <button
                    onClick={copyAddress}
                    className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition"
                    title="Copy full address"
                  >
                    {copied ? (
                      <span className="text-emerald-400 flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-0.5">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-200 leading-relaxed">
                  {selected.address}
                </div>
              </div>

              {/* Direct Communications */}
              <div className="pt-2 pb-4 space-y-2.5 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Direct Station Contact
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <a
                    href={`tel:${selected.phone}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-mono text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-[#e1390f]/20 flex items-center justify-center text-[#e1390f]">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold">{selected.phone}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-white uppercase tracking-wider">
                      Call Direct
                    </span>
                  </a>

                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-mono text-white group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6 h-6 rounded bg-[#e1390f]/20 flex items-center justify-center text-[#e1390f] shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold truncate">{selected.email}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-white uppercase tracking-wider shrink-0 ml-2">
                      Email
                    </span>
                  </a>
                </div>
              </div>

              {/* Core Capabilities at this Station */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  Station Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {meta.facilities.map((fac, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Operating Truth Badge */}
            <div className="p-4 rounded-xl bg-[#040810] border border-white/5 text-xs text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
              <div className="leading-relaxed font-sans text-slate-400 text-[11px]">
                <strong className="text-white font-medium">Licensed Customs House Broker:</strong> In-house documentation, clearance, and terminal representation at all primary Indian gateways.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}