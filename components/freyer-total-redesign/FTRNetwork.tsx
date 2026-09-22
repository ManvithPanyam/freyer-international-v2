"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Copy, Check, Compass, ShieldCheck, ArrowUpRight } from "lucide-react";
import {
  MAINLAND_PATH,
  ISLAND_PATHS,
  STATIONS_DATA,
  type StationData,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";

interface StationMetadata {
  type: string;
  scope: string;
  facilities: string[];
}

const STATION_META: Record<string, StationMetadata> = {
  chennai_egmore: {
    type: "Corporate Registered Headquarters",
    scope: "National Network Management · Central Operations · Licensed Ocean & Air Customs Brokerage",
    facilities: ["Customs House Brokerage", "Pan-India Operations Control", "Project Cargo Directorate"],
  },
  chennai_airport: {
    type: "Air Cargo Terminal Office",
    scope: "On-Field International Air Cargo Operations · Apron Logistics · Expedited Customs Clearance",
    facilities: ["Air Cargo Terminal Desk", "Direct Apron Handling", "Time-Critical Dispatch"],
  },
  delhi: {
    type: "Northern Regional Branch",
    scope: "Northern Industrial Corridor · IGI Air Cargo Terminal · Inland Container Depot (ICD) Coordination",
    facilities: ["Air Freight Operations", "ICD Liaison", "Regional Inland Trucking"],
  },
  mumbai: {
    type: "Western Regional & Port Gateway",
    scope: "Western Seaboard Gateway · Nhava Sheva (JNPT) Support · Air & Ocean Customs Brokerage",
    facilities: ["Nhava Sheva Port Liaison", "Air Cargo Terminal", "Export/Import Clearance"],
  },
  ahmedabad: {
    type: "Gujarat Commercial Branch",
    scope: "Gujarat Industrial Corridor · Port Mundra / Kandla Feeder Linkage · Multimodal Transport",
    facilities: ["Industrial Cargo Liaison", "Multimodal Freight", "Commercial Customs Documentation"],
  },
  bengaluru: {
    type: "Southern Technology & Regional Hub",
    scope: "Southern High-Tech Corridor · Kempegowda International Air Cargo · Bonded Logistics",
    facilities: ["Air Cargo Operations", "High-Value Cargo Security", "Bonded Warehousing Liaison"],
  },
  hyderabad: {
    type: "Regional Commercial Branch",
    scope: "Central Corridor · RGIA Air Cargo Terminal · Inland Port & Pharmaceuticals Handling",
    facilities: ["Pharma Cold Chain Liaison", "Air Cargo Handling", "Regional Inland Transport"],
  },
  visakhapatnam: {
    type: "Eastern Deep-Water Port Gateway",
    scope: "Eastern Seaboard Gateway · Visakhapatnam Port Operations · Heavy Breakbulk Stevedoring",
    facilities: ["Port Operations Desk", "Breakbulk Stevedoring", "Customs Terminal Documentation"],
  },
  coimbatore: {
    type: "Industrial & Manufacturing Gateway",
    scope: "Western Tamil Nadu Industrial Belt · Multi-Axle Road Freight · Inland Customs Handling",
    facilities: ["Industrial Machinery Logistics", "Overland Road Freight", "Inland Clearance"],
  },
  tuticorin: {
    type: "Deep-Water Seaport Branch",
    scope: "V.O. Chidambaranar Port Operations · Ocean Stevedoring · Container Freight Station Handling",
    facilities: ["Deep-Water Berth Liaison", "CFS Stevedoring", "Direct Ocean Clearance"],
  },
};

export function FTRNetwork() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

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
      id="india-network"
      ref={sectionRef}
      aria-label="Freyer India Branch Network Map"
      className="relative bg-[#121316] text-[#F8F7F4] py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] text-slate-300 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
              </span>
              <span>Verified Physical Footprint</span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.92] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
              }}
            >
              TEN STATIONS. <br />
              <span className="text-white">
                ONE INTEGRATED DESK
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Direct company-owned branch offices, licensed customs brokerage, and on-dock
              terminal handling across primary industrial corridors, air cargo gates, and deep-water ports.
            </p>
          </div>

          {/* Key Infrastructure Badges */}
          <div className="grid grid-cols-3 gap-6 text-xs font-mono shrink-0">
            <div className="border-l-2 border-[#e1390f] pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-white font-mono">10</span>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider">Stations</span>
            </div>
            <div className="border-l-2 border-white/20 pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-white font-mono">8</span>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider">Strategic Cities</span>
            </div>
            <div className="border-l-2 border-white/20 pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-[#e1390f] font-mono">100%</span>
              <span className="text-slate-400 text-[10px] uppercase tracking-wider">Direct Network</span>
            </div>
          </div>
        </div>

        {/* Quick Station Filter Rail & Global Atlas Switcher */}
        <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 shrink-0 mr-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#e1390f]" /> Select Station:
            </span>
            {STATIONS_DATA.map((st) => {
              const isSelected = st.id === selected.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setSelectedStationId(st.id)}
                  className={[
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 border",
                    isSelected
                      ? "bg-[#e1390f] border-[#e1390f] text-white font-bold shadow-lg shadow-[#e1390f]/25"
                      : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20",
                  ].join(" ")}
                >
                  {st.isHQ && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                  <span>{st.short}</span>
                </button>
              );
            })}
          </div>

          <Link
            href="/network-partners"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.10] border border-white/12 text-xs font-mono uppercase tracking-wider text-white transition-colors shrink-0"
          >
            <span>World Movement Atlas</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f]" />
          </Link>
        </div>

        {/* ── MAP CANVAS + STATION DOSSIER GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 sm:pt-12">

          {/* MAP CANVAS (8 cols) */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[520px] sm:min-h-[660px] lg:min-h-[740px]">
            <svg
              viewBox="0 0 1000 1208"
              className="w-full h-auto max-h-[740px] select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
            >
              <defs>
                <linearGradient id="ftrIndiaLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22252B" />
                  <stop offset="50%" stopColor="#1A1C22" />
                  <stop offset="100%" stopColor="#14161B" />
                </linearGradient>

                <filter id="ftrCoastlineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#FFFFFF" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* India Mainland Boundary */}
              <path
                d={MAINLAND_PATH}
                fill="url(#ftrIndiaLandGradient)"
                stroke="rgba(255, 255, 255, 0.30)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeOpacity="0.9"
                filter="url(#ftrCoastlineGlow)"
              />

              {/* Island Territories */}
              {ISLAND_PATHS.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  fill="url(#ftrIndiaLandGradient)"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
              ))}

              {/* Station Markers with Uncrowded Labels */}
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
                    {/* Active Pulse Radar Halo */}
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
                          style={{
                            animationDuration: "10s",
                            transformOrigin: `${st.cx}px ${st.cy}px`,
                          }}
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

                    {/* Outer Marker Shell */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 9 : st.isHQ ? 8 : 6}
                      fill={isSelected ? "#e1390f" : st.isHQ ? "#f59e0b" : "#3b82f6"}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                      className="transition-all duration-200"
                    />

                    {/* Inner Pin Dot */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 3.5 : 2}
                      fill="#ffffff"
                    />

                    {/* Station Name Label */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={isLeftAligned ? "end" : "start"}
                      fontSize={isSelected ? "13" : "11"}
                      fontWeight={isSelected ? "bold" : "600"}
                      fontFamily="ui-monospace, monospace"
                      fill={isSelected ? "#ffffff" : "rgba(255,255,255,0.75)"}
                      dominantBaseline="middle"
                      className="transition-all select-none"
                    >
                      {st.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* STATION DOSSIER PANEL (4 cols) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md space-y-6 shadow-2xl"
              >
                {/* Station Title */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#e1390f] font-bold">
                      {meta.type}
                    </span>
                    {selected.isHQ && (
                      <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-mono uppercase font-bold">
                        Corporate HQ
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white tracking-tight">
                    {selected.name}
                  </h3>
                  <p className="text-xs font-mono text-white/50 mt-1">
                    {meta.scope}
                  </p>
                </div>

                {/* Verified Address */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Physical Station Address
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/8 text-xs font-mono text-slate-300 leading-relaxed relative group">
                    <p>{selected.address}</p>
                    <button
                      onClick={copyAddress}
                      className="mt-2 text-[10px] font-mono text-[#e1390f] hover:underline flex items-center gap-1"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" /> Address Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy Full Address
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="space-y-3 border-t border-white/10 pt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Direct Contact Lines
                  </div>
                  <a
                    href={`tel:${selected.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-[#e1390f] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#e1390f] shrink-0" />
                    <div>
                      <div className="text-[9px] font-mono uppercase text-white/40">Direct Desk</div>
                      <div className="text-sm font-bold font-mono text-white group-hover:text-[#e1390f] transition-colors">
                        {selected.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/20 transition-colors group truncate"
                  >
                    <Mail className="w-4 h-4 text-white/40 shrink-0" />
                    <div className="truncate">
                      <div className="text-[9px] font-mono uppercase text-white/40">Official Email</div>
                      <div className="text-xs font-mono text-white/70 group-hover:text-white transition-colors truncate">
                        {selected.email}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Facilities Badges */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    On-Site Facilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.facilities.map((fac) => (
                      <span
                        key={fac}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View All Locations Link */}
                <div className="pt-2">
                  <Link
                    href="/locations"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                  >
                    <span>View All 10 Branch Dossiers</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f]" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
