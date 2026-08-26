"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const WAREHOUSE_19_CAPABILITIES = [
  "Pick and Pack",
  "Fulfillment",
  "Storage (short and long-term)",
  "Inventory control and management",
  "Cross docking",
  "Kitting",
  "Vendor Consolidation Programs",
  "Reporting",
  "Transportation Management",
  "Reverse Logistics",
  "Quality Control",
  "Assembly",
  "Finishing",
  "Tagging",
  "Conditioning",
  "(Re) Packaging",
  "Packing",
  "Labelling",
  "Container Freight Station (CFS)",
];

const PROJECT_EXECUTION_STAGES = [
  { step: "01", title: "Site Disassembly", desc: "Disassembly of oversized cargo at manufacturing or construction site" },
  { step: "02", title: "Route Survey", desc: "Civil load assessments, overhead clearance mapping, and transport permits" },
  { step: "03", title: "Crane Rigging", desc: "Tandem mobile crane calculations and heavy-lift rigging engineering" },
  { step: "04", title: "Port Handling", desc: "Intermediate port yard storage, lashing, and direct ship-to-trailer discharge" },
  { step: "05", title: "Vessel Stowage", desc: "Breakbulk, flat rack, and RORO securing aboard ocean carriers" },
  { step: "06", title: "Site Delivery", desc: "Hydraulic multi-axle modular transport and final foundation positioning" },
];

const PROJECT_SECTORS = [
  "Energy Sector",
  "Offshore Industry",
  "Wind Farm Development",
  "Machinery",
  "Steel and Metal",
];

export function ServicesExplorer() {
  return (
    <div className="space-y-28 sm:space-y-36">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: WAREHOUSING & 3PL (TIER 1 HERO EDITORIAL SPREAD)
      ───────────────────────────────────────────────────────────── */}
      <section id="warehousing" className="pt-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-3">
          <span>01 / Contract Logistics</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-slate-200">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b2144] leading-tight">
              Warehousing &amp; 3PL Distribution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Our efficiency-driven, multiple-client facilities enable us to create turnkey warehousing solutions. Close proximity to major ports, rail ramps, and highways, with operations ranging from CFS to full 3PL outsourced partnerships.
            </p>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <div className="text-4xl sm:text-5xl font-bold font-mono text-[#0b2144] tracking-tight">
              1,000,000+
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
              Square Feet Footprint &middot; WMS Enabled
            </div>
          </div>
        </div>

        {/* Large Uncropped Authentic Warehouse Photography */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden mt-10 bg-slate-900 border border-slate-200">
          <Image
            src="/images/slide4.jpg"
            alt="High-bay multi-client warehouse facility with heavy pallet racking and industrial material handling - Freyer Logistics"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center justify-between gap-4 text-white text-xs font-mono">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
              Multi-Client &amp; Multi-Location Architecture
            </span>
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 hidden sm:inline-block">
              Port, Rail &amp; Highway Connectivity
            </span>
          </div>
        </div>

        {/* 19 Value-Added Capabilities Typographic Ledger */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4 border-b border-slate-200">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold">
              19 Value-Added Fulfillment &amp; Processing Services
            </h3>
            <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">
              Complete Supply Chain Processing Scope
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 text-xs">
            {WAREHOUSE_19_CAPABILITIES.map((service, idx) => (
              <div
                key={idx}
                className="py-3.5 border-b border-slate-100 flex items-center justify-between text-slate-700 font-medium group hover:text-[#0b2144] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#c42f0b] font-semibold w-5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{service}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#c42f0b] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: PROJECT CARGO (TIER 1 HERO DARK STAGE)
      ───────────────────────────────────────────────────────────── */}
      <section id="project-cargo" className="bg-[#060f1e] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-widest font-semibold mb-3">
          <span>02 / Project Cargo Engineering</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              From site disassembly to final foundation.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Freyer International offers a one-stop solution for all projects relating to the energy sector, offshore industry, wind farm development, machinery, steel and metal. From the heaviest pieces to the smallest accompanying bolt.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors shadow-lg shadow-[#c42f0b]/20"
            >
              <span>11 Documented Movements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Split: Authentic Heavy-Lift Frame + Sector Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/images/11.4.jpg"
              alt="ITALGRU heavy-lift crane assembly secured on vessel flatracks - Freyer Project Cargo"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
              Breakbulk &middot; Tandem Crane Rigging &middot; Port Stowage
            </span>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff6b4a] font-bold">
              Target Industrial Sectors
            </h3>
            <div className="space-y-2.5">
              {PROJECT_SECTORS.map((sector, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white/[0.03] border border-white/8 rounded-xl flex items-center justify-between text-xs text-slate-200"
                >
                  <span className="font-semibold">{sector}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Turnkey Scope</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Step Operational Execution Chain */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-8">
            Engineered Operational Execution Sequence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {PROJECT_EXECUTION_STAGES.map((stage) => (
              <div key={stage.step} className="p-5 bg-white/[0.02] border border-white/8 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#ff6b4a] font-bold">{stage.step}</span>
                  <span className="font-semibold text-white">{stage.title}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: CORE DISCIPLINES (TIER 2 REFINED 2x2 GRID)
      ───────────────────────────────────────────────────────────── */}
      <section id="core-disciplines" className="pt-4">
        <div className="pb-8 border-b border-slate-200">
          <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-2">
            03 / Core Multimodal &amp; Compliance Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Global Freight &amp; Customs Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pt-12">
          {/* 03: Ocean Freight */}
          <div id="ocean-freight" className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">03 &middot; Ocean Freight (FCL &amp; LCL)</span>
              <span>Global Maritime Routes</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Direct Carrier Contracts &amp; Consolidated LCL Sailings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We negotiate competitive agreements with the world&apos;s leading ocean carriers, passing capacity, space security, and pricing advantages on to our customers. Our weekly consolidated LCL sailings into and out of all major global ports reduce inventory holding requirements.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Full Container Load (FCL) carrier space guarantees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Dependable weekly Less than Container Load (LCL) sailings</span>
              </li>
            </ul>
          </div>

          {/* 04: Air Freight */}
          <div id="air-freight" className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">04 &middot; Air Freight &amp; Charter</span>
              <span>Expedited &amp; Scheduled</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Scheduled Flights &amp; Tailored Freighter Chartering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Flexible standard and expedited international air transportation with global milestone visibility. When capacity shortfalls or remote destinations require dedicated aircraft, our air desk crafts custom full and part-charter solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-slate-600">
              <span className="px-2.5 py-1 bg-slate-100 rounded">Temperature Controlled</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">Dangerous Goods (DG)</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">High Value</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">Perishables</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">White Glove</span>
            </div>
          </div>

          {/* 05: Customs Brokerage */}
          <div id="customs" className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">05 &middot; Customs Brokerage</span>
              <span>AEO Tier-2 Certified</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              AEO Compliance &amp; Licensed Customs Brokers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Managed by a dedicated team of Licensed Customs Brokers at corporate and branch levels across India. We facilitate import declarations and Electronic Export Information (EEI) filings in full compliance with Customs of India and Participating Government Agencies.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>On-site licensed customs brokers across 10 corporate hubs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Proactive regulatory adaptation and classification audits</span>
              </li>
            </ul>
          </div>

          {/* 06: Risk Management */}
          <div id="risk-management" className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">06 &middot; Cargo Risk Management</span>
              <span>Supply Chain Resilience</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Predictive Risk Analytics &amp; All-Risk Marine Insurance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traditional carrier liability is strictly limited under international transport conventions. Our risk management experts apply predictive event modeling and underwrite customized All-Risk transit insurance up to full cargo value.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>All-Risk coverage and full compensation up to insured value</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Spot insurance for high-value projects and annual blanket policies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
