"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Copy, Check, Compass, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
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

export function LTNetwork() {
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
      className="relative bg-[#FFFFFF] text-[#17181B] py-24 sm:py-32 border-t border-[#DCDCD7] overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-[#DCDCD7] gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-[#E33B12] font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E33B12] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E33B12]" />
              </span>
              <span>Verified Physical Footprint</span>
            </div>
            <h2
              className="text-[#17181B] font-black tracking-[-0.02em] leading-[0.92] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "var(--token-text-4xl)",
              }}
            >
              TEN STATIONS. <br />
              <span className="text-[#17181B]">
                ONE INTEGRATED DESK
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#62656B] font-light leading-relaxed">
              Direct company-owned branch offices, licensed customs brokerage, and on-dock
              terminal handling across primary industrial corridors, air cargo gates, and deep-water ports.
            </p>
          </div>

          {/* Key Infrastructure Badges */}
          <div className="grid grid-cols-3 gap-6 text-xs font-mono shrink-0">
            <div className="border-l-2 border-[#E33B12] pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-[#17181B] font-mono">10</span>
              <span className="text-[#62656B] text-2xs uppercase tracking-wider">Stations</span>
            </div>
            <div className="border-l-2 border-[#DCDCD7] pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-[#17181B] font-mono">8</span>
              <span className="text-[#62656B] text-2xs uppercase tracking-wider">Strategic Cities</span>
            </div>
            <div className="border-l-2 border-[#DCDCD7] pl-4 space-y-1">
              <span className="block text-2xl sm:text-3xl font-bold text-[#E33B12] font-mono">100%</span>
              <span className="text-[#62656B] text-[10px] uppercase tracking-wider">Direct Network</span>
            </div>
          </div>
        </div>

        {/* Quick Station Filter Rail & Global Atlas Switcher */}
        <div className="py-4 border-b border-[#DCDCD7] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#62656B] shrink-0 mr-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#E33B12]" /> Select Station:
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
                      ? "bg-[#17181B] border-[#17181B] text-[#F7F6F2] font-bold"
                      : "bg-[#F7F6F2] border-[#DCDCD7] text-[#17181B] hover:text-[#E33B12] hover:border-[#E33B12]",
                  ].join(" ")}
                >
                  {st.isHQ && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                  <span>{st.short}</span>
                </button>
              );
            })}
          </div>

          <Button
            href="/network-partners"
            variant="secondary"
            size="sm"
            icon
            className="bg-transparent border-[#17181B] text-[#17181B]"
          >
            World Movement Atlas
          </Button>
        </div>

        {/* ── MAP CANVAS + STATION DOSSIER GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 sm:pt-12">

          {/* MAP CANVAS (8 cols) */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[520px] sm:min-h-[660px] lg:min-h-[740px]">
            <svg
              viewBox="0 0 1000 1208"
              className="w-full h-auto max-h-[740px] select-none"
            >
              <defs>
                <filter id="ftrCoastlineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.05" />
                </filter>
              </defs>

              {/* India Mainland Boundary */}
              <path
                d={MAINLAND_PATH}
                fill="#DCDCD7"
                stroke="rgba(23, 24, 27, 0.20)"
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
                  fill="#DCDCD7"
                  stroke="rgba(23, 24, 27, 0.20)"
                  strokeWidth="1.0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
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
                          stroke="#E33B12"
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
                          stroke="#E33B12"
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
                      fill={isSelected ? "#E33B12" : st.isHQ ? "#E33B12" : "#62656B"}
                      stroke="#FFFFFF"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                      className="transition-all duration-200"
                    />

                    {/* Inner Pin Dot */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 3.5 : 2}
                      fill="#FFFFFF"
                    />

                    {/* Station Name Label */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={isLeftAligned ? "end" : "start"}
                      fontSize={isSelected ? "13" : "11"}
                      fontWeight={isSelected ? "bold" : "600"}
                      fontFamily="ui-monospace, monospace"
                      fill="#17181B"
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
                className="p-6 sm:p-8 rounded-2xl bg-[#F7F6F2] border border-[#DCDCD7] space-y-6 shadow-lg"
              >
                {/* Station Title */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xs font-mono uppercase tracking-widest text-[#E33B12] font-bold bg-[#E33B12]/10 border border-[#E33B12]/20 px-2 py-0.5 rounded">
                      {meta.type}
                    </span>
                    {selected.isHQ && (
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-2xs font-mono uppercase font-bold border border-amber-200">
                        Corporate HQ
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-bold font-mono text-[#17181B] tracking-tight mt-2"
                    style={{ fontSize: "var(--token-text-xl)" }}
                  >
                    {selected.name}
                  </h3>
                  <p className="text-xs font-mono text-[#62656B] mt-1">
                    {meta.scope}
                  </p>
                </div>

                {/* Verified Address */}
                <div className="space-y-2 border-t border-[#DCDCD7] pt-4">
                  <div className="text-2xs font-mono uppercase tracking-wider text-[#62656B]">
                    Physical Station Address
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DCDCD7] text-xs font-mono text-[#62656B] leading-relaxed relative group flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#E33B12] shrink-0 mt-0.5" />
                    <div>
                      <p>{selected.address}</p>
                      <button
                        onClick={copyAddress}
                        className="mt-3 px-3 py-1.5 rounded-lg bg-[#F7F6F2] border border-[#DCDCD7] text-[#17181B] text-2xs font-mono hover:border-[#E33B12] transition-colors flex items-center gap-1.5"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#E33B12]" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#17181B]" /> Copy Address
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="space-y-3 border-t border-[#DCDCD7] pt-4">
                  <div className="text-2xs font-mono uppercase tracking-wider text-[#62656B]">
                    Direct Contact Lines
                  </div>
                  <a
                    href={`tel:${selected.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#DCDCD7] hover:border-[#E33B12] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#E33B12] shrink-0" />
                    <div>
                      <div className="text-2xs font-mono uppercase text-[#62656B]">Direct Desk</div>
                      <div className="text-sm font-bold font-mono text-[#17181B] group-hover:text-[#E33B12] transition-colors">
                        {selected.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#DCDCD7] hover:border-[#E33B12] transition-colors group truncate"
                  >
                    <Mail className="w-4 h-4 text-[#62656B] shrink-0 group-hover:text-[#E33B12]" />
                    <div className="truncate">
                      <div className="text-2xs font-mono uppercase text-[#62656B]">Official Email</div>
                      <div className="text-xs font-mono text-[#62656B] group-hover:text-[#17181B] transition-colors truncate">
                        {selected.email}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Facilities Badges */}
                <div className="space-y-2 border-t border-[#DCDCD7] pt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#62656B]">
                    On-Site Facilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.facilities.map((fac) => (
                      <span
                        key={fac}
                        className="px-2.5 py-1 rounded bg-[#FFFFFF] border border-[#DCDCD7] text-[10px] font-mono text-[#17181B]"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View All Locations Link */}
                <div className="pt-2">
                  <TextLink
                    href="/locations"
                    icon
                    className="text-[#E33B12] hover:text-[#17181B]"
                  >
                    View All 10 Branch Dossiers
                  </TextLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
