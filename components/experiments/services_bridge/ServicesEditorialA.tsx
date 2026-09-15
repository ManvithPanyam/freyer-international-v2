"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Anchor, Plane, ShieldCheck, Warehouse as WarehouseIcon, AlertTriangle, PackageCheck } from "lucide-react";

export const EDITORIAL_SERVICES = [
  {
    id: "ocean",
    index: "01",
    name: "Ocean Services",
    tagline: "FCL Full Container & LCL Groupage",
    description: "Leveraging long-established carrier relationships with direct space allocations across global shipping lines. Dependable weekly scheduled sailings into and out of major worldwide ports with volume-based competitive pricing.",
    specs: [
      { label: "Modes", value: "FCL & LCL Consolidation" },
      { label: "Schedules", value: "Weekly Major Port Sailings" },
      { label: "Agreements", value: "Tier-1 Ocean Carriers" }
    ],
    image: "/images/Ocean-Services.jpg",
    icon: Anchor
  },
  {
    id: "air",
    index: "02",
    name: "Air Services",
    tagline: "Scheduled Freight & Dedicated Charters",
    description: "IATA-approved cargo operations meeting critical transit deadlines. Standard and expedited international airfreight capacity, full freighter chartering for project cargo, and specialized handling for temperature-controlled and hazardous goods.",
    specs: [
      { label: "Accreditation", value: "IATA Endorsed Agent" },
      { label: "Charter", value: "Dedicated Freighter Capacity" },
      { label: "Specialty", value: "Perishables & DG Goods" }
    ],
    image: "/images/Air-Services.jpg",
    icon: Plane
  },
  {
    id: "customs",
    index: "03",
    name: "Customs Services",
    tagline: "Licensed Brokerage & Statutory Compliance",
    description: "In-house licensed Customs Brokers operating at corporate and branch levels. Direct filing of Electronic Export Information and import declarations with Indian Customs and Participating Government Agencies (PGAs).",
    specs: [
      { label: "Licensing", value: "Licensed Customs House Agents" },
      { label: "Jurisdiction", value: "Sea Ports, Air Cargo & ICDs" },
      { label: "Compliance", value: "Import / Export Statutory PGAs" }
    ],
    image: "/images/Customs-Services.jpg",
    icon: ShieldCheck
  },
  {
    id: "warehouse",
    index: "04",
    name: "Warehouse & Distribution",
    tagline: "Over 1,000,000 Sq Ft Multi-Client Network",
    description: "Turnkey storage and fulfillment infrastructure situated in close proximity to major seaports, rail terminals, and national highways. WMS-enabled multi-client facilities offering CFS operations to full 3PL contract management.",
    specs: [
      { label: "Total Footprint", value: "1,000,000+ Square Feet" },
      { label: "Systems", value: "WMS Enabled Inventory" },
      { label: "Scope", value: "CFS to 3PL Contract Fulfillment" }
    ],
    image: "/images/Warehouse.jpg",
    icon: WarehouseIcon
  },
  {
    id: "risk",
    index: "05",
    name: "Risk Management",
    tagline: "Consulting & Comprehensive Cargo Insurance",
    description: "Protecting commercial exposure beyond statutory carrier liability limits. Case modeling and defined risk analytics to mitigate supply chain disruption, providing All-Risk coverage, spot insurance, and blanket marine policies.",
    specs: [
      { label: "Coverage", value: "Up to 100% Insured Value" },
      { label: "Policies", value: "Spot & Blanket Marine Covers" },
      { label: "Consulting", value: "Predictive Risk Analytics" }
    ],
    image: "/images/Risk-Management.jpg",
    icon: AlertTriangle
  },
  {
    id: "project",
    index: "06",
    name: "Project Cargo",
    tagline: "Heavy-Lift & Industrial Breakbulk",
    description: "End-to-end management of out-of-gauge equipment for energy, offshore, and heavy manufacturing. Complete scope from factory disassembly and specialized permits to port crane stevedoring and multi-axle discharge.",
    specs: [
      { label: "Benchmark", value: "482 MT Documented Record" },
      { label: "Sectors", value: "Energy, Offshore & Machinery" },
      { label: "Scope", value: "Permits, Heavy Cranes & Stowage" }
    ],
    image: "/images/Project-Cargo.jpg",
    icon: PackageCheck
  }
];

export function ServicesEditorialA() {
  const [activeService, setActiveService] = useState(EDITORIAL_SERVICES[0].id);
  const current = EDITORIAL_SERVICES.find((s) => s.id === activeService) || EDITORIAL_SERVICES[0];

  return (
    <section className="relative bg-[#060c18] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
              Concept A &bull; Large-Format Editorial
            </div>
            <h2 id="concept-a-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              CORE FREIGHT CAPABILITIES.
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 max-w-xs leading-relaxed">
            Six verified services operating across ocean, air, customs, and warehousing infrastructure.
          </div>
        </div>

        {/* Quiet Editorial Navigation Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-8 pb-12 border-b border-white/10">
          {EDITORIAL_SERVICES.map((s) => {
            const isSelected = s.id === current.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`text-left p-4 rounded transition border ${
                  isSelected
                    ? "bg-white/10 border-white/30 text-white"
                    : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                <div className="text-[10px] font-mono text-[#e1390f]">{s.index}</div>
                <div className="text-sm font-semibold tracking-tight mt-1">{s.name}</div>
              </button>
            );
          })}
        </div>

        {/* Large-Format Editorial Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-12">
          {/* High-Resolution Field Photography */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] rounded-lg overflow-hidden border border-white/10 bg-black">
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Documented Capability Photo
                </div>
                <div className="text-base font-semibold text-white mt-0.5">
                  {current.name} &bull; {current.tagline}
                </div>
              </div>
              <div className="hidden sm:block p-3 rounded bg-black/60 backdrop-blur-md border border-white/10">
                <current.icon className="w-5 h-5 text-[#e1390f]" />
              </div>
            </div>
          </div>

          {/* Editorial Rigor & Verifiable Data */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-lg bg-[#071120] border border-white/10 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#e1390f] font-bold">{current.index}</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  / Official Service Specification
                </span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                {current.name}
              </h3>
              <div className="text-xs font-mono text-[#e1390f] font-medium">
                {current.tagline}
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                {current.description}
              </p>
            </div>

            {/* Factual Specification Register */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Verified Service Specifications
              </div>
              <div className="space-y-3">
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                    <span className="text-slate-400 font-mono">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 leading-relaxed pt-2">
              All operations verified under Freyer International Logistics registered service documentation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
