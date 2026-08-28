"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CapabilityItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  routeHref: string;
  verifiedProofs: { label: string; value: string }[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "ocean",
    index: "01",
    name: "Ocean Freight",
    tagline: "FCL, LCL consolidation, and direct breakbulk maritime carriage.",
    description:
      "Global port-to-port and door-to-door containerized freight allocations across major liner trade corridors with scheduled sailings and terminal handling.",
    image: "/images/Ocean-Services.jpg",
    routeHref: "/services/ocean-freight",
    verifiedProofs: [
      { label: "Carriage Modes", value: "FCL, LCL & Breakbulk" },
      { label: "Service Scope", value: "Port-to-Port & Door-to-Door" },
      { label: "Global Reach", value: "190+ Countries (WCA / SCN)" },
    ],
  },
  {
    id: "air",
    index: "02",
    name: "Air Freight",
    tagline: "IATA-regulated air cargo forwarding and dedicated aircraft charters.",
    description:
      "Direct scheduled airline booking authority, automated electronic air waybill issuance, and time-critical routing connecting India's manufacturing corridors with global gateways.",
    image: "/images/Air-Services.jpg",
    routeHref: "/services/air-freight",
    verifiedProofs: [
      { label: "Aviation Standard", value: "IATA Regulated Cargo Agent" },
      { label: "Gateway Stations", value: "Chennai Airport (MAA) Terminal" },
      { label: "Operational Type", value: "Scheduled & Full Air Charter" },
    ],
  },
  {
    id: "customs",
    index: "03",
    name: "Customs Brokerage",
    tagline: "AEO Tier-2 certified Customs House Agency and tariff governance.",
    description:
      "Direct CBIC-authorized customs brokerage with rapid port release, precise HSN duty classification, bonded transfers, and full ICEGATE electronic compliance across all Indian seaports and air terminals.",
    image: "/images/Customs-Services.jpg",
    routeHref: "/services/customs-brokerage",
    verifiedProofs: [
      { label: "Sovereign License", value: "AEO Tier-2 (CBIC, India)" },
      { label: "Certificate Record", value: "INAAQCA4076M0F243" },
      { label: "Filing Authority", value: "Direct ICEGATE EDI Clearance" },
    ],
  },
  {
    id: "warehouse",
    index: "04",
    name: "Contract Warehousing & 3PL",
    tagline: "Strategic multi-hub storage, inventory governance, and CFS handling.",
    description:
      "Positioned in close proximity to major ports and national highway corridors. Operations span container freight station (CFS) handling, cross-docking, and full 3PL distribution.",
    image: "/images/Warehouse.jpg",
    routeHref: "/services/warehousing",
    verifiedProofs: [
      { label: "Storage Model", value: "Short & Long-Term Contract" },
      { label: "Handling Scope", value: "Pick & Pack, CFS & Cross-Dock" },
      { label: "Location Synergy", value: "Port & Industrial Gateways" },
    ],
  },
  {
    id: "project",
    index: "05",
    name: "Project Cargo & Heavy Lift",
    tagline: "Over-dimensional breakbulk engineering and civil route execution.",
    description:
      "Turnkey port-to-foundation transport for industrial superstructures, crane booms, and transformers using certified multi-axle modular trailers, bridge bypasses, and ocean flatracks.",
    image: "/images/Project-Cargo.jpg",
    routeHref: "/services/project-cargo",
    verifiedProofs: [
      { label: "Verified Movement", value: "37.6 MT ITALGRU Boom Crane" },
      { label: "Trailer Equipment", value: "12-Axle Hydraulic Modular SPMT" },
      { label: "Surveyed Distance", value: "1,420 KM Mundra-to-Site Route" },
    ],
  },
  {
    id: "risk",
    index: "06",
    name: "Cargo Risk Management",
    tagline: "Comprehensive marine transit insurance and loss mitigation.",
    description:
      "End-to-end cargo insurance underwriting coverage and dedicated claim assistance protecting valuable capital assets and industrial shipments across international sea and air lanes.",
    image: "/images/Risk-Management.jpg",
    routeHref: "/services/risk-management",
    verifiedProofs: [
      { label: "Coverage Scope", value: "Marine, Air & Inland Transit" },
      { label: "Protection Focus", value: "Capital Goods & High-Value Cargo" },
      { label: "Claim Support", value: "End-to-End Survey & Settlement" },
    ],
  },
];

export function CapabilitiesIndex() {
  const [activeId, setActiveId] = useState<string>("ocean");
  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#fbfcfd] text-[#0b2144] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Operational Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Multimodal Capabilities &amp; Compliance
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
              6 Core Transport Disciplines
            </span>
            <span className="text-xs font-mono text-[#c42f0b] font-semibold block mt-0.5">
              AEO Tier-2 &middot; IATA &middot; Pan-India Network
            </span>
          </div>
        </div>

        {/* ── Industrial Capability Ledger (Master-Detail Grid) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 items-start">
          {/* Left Column: Numbered Discipline Ledger Rows */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeId;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveId(cap.id)}
                  onMouseEnter={() => setActiveId(cap.id)}
                  className={`p-5 sm:p-6 transition-all duration-150 cursor-pointer ${
                    isActive ? "bg-slate-50/90" : "hover:bg-slate-50/50 bg-white"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveId(cap.id);
                    }
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span
                        className={`text-xs sm:text-sm font-mono pt-1 transition-colors ${
                          isActive ? "text-[#c42f0b] font-bold" : "text-slate-400 font-medium"
                        }`}
                      >
                        {cap.index}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3
                            className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                              isActive ? "text-[#0b2144]" : "text-slate-800"
                            }`}
                          >
                            {cap.name}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg leading-relaxed">
                          {cap.tagline}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={cap.routeHref}
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#0b2144] text-white"
                          : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                      }`}
                      aria-label={`View detailed ${cap.name} specifications`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Inline Verified Proofs (Expanded when Active) */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-slate-200/80"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {cap.verifiedProofs.map((proof, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-white p-2.5 rounded-sm border border-slate-200/80 text-[11px] font-mono shadow-2xs"
                          >
                            <span className="text-slate-400 block uppercase tracking-wider text-[9px]">
                              {proof.label}
                            </span>
                            <span className="text-[#0b2144] font-bold mt-0.5 block truncate">
                              {proof.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Specification Panel & Documentary Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
              {/* Photo Viewport */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeCapability.image}
                      alt={`${activeCapability.name} - Freyer International Logistics`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040a14]/90 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] uppercase tracking-wider text-[#ff6b4a] font-bold">
                        {activeCapability.index} // {activeCapability.name}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Detailed Operational Narrative & Verified Proofs */}
              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#c42f0b] font-semibold block mb-1.5">
                    Discipline Overview
                  </span>
                  <h4 className="text-xl font-bold text-[#0b2144] tracking-tight">
                    {activeCapability.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {activeCapability.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">
                    Verified Operational Benchmarks
                  </span>
                  <div className="space-y-2 font-mono text-xs">
                    {activeCapability.verifiedProofs.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
                        <span className="text-slate-500">{p.label}</span>
                        <span className="font-bold text-[#0b2144]">{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={activeCapability.routeHref}
                    className="inline-flex items-center justify-between w-full bg-[#0b2144] hover:bg-[#1a365d] text-white text-xs font-semibold px-4 py-3 rounded-lg transition-colors font-mono"
                  >
                    <span>Inspect Full {activeCapability.name} Protocol</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
