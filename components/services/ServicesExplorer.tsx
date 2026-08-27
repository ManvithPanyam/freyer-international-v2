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
  { step: "01", title: "Site Disassembly", desc: "Disassembly of oversized cargo at construction site" },
  { step: "02", title: "Route Survey", desc: "Civil load assessments, transport permits & clearances" },
  { step: "03", title: "Crane Rigging", desc: "Tandem mobile crane calculations & heavy-lift rigging" },
  { step: "04", title: "Port Handling", desc: "Intermediate yard storage & ship-side handling" },
  { step: "05", title: "Vessel Stowage", desc: "Breakbulk, flat rack & RORO stowage and lashing" },
  { step: "06", title: "Site Delivery", desc: "Onward hydraulic transport to final foundation" },
];

const PROJECT_SECTORS = [
  { step: "01", name: "Energy Sector", scope: "Heavy-duty turbines, transformers & generators" },
  { step: "02", name: "Offshore Industry", scope: "Subsea equipment, skids & structural assemblies" },
  { step: "03", name: "Wind Farm Development", scope: "Tower sections, nacelles & blade sets" },
  { step: "04", name: "Machinery", scope: "Industrial presses, manufacturing lines & tooling" },
  { step: "05", name: "Steel and Metal", scope: "Over-dimensional structural beams, coils & plates" },
];

export function ServicesExplorer() {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: WAREHOUSING & 3PL (TIER 1 HERO EDITORIAL SPREAD)
      ───────────────────────────────────────────────────────────── */}
      <section id="warehousing">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-2">
          <span>01 / Contract Logistics</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b2144] leading-tight">
              Warehousing &amp; 3PL Distribution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Efficiency-driven, multi-client facilities strategically positioned in close proximity to major Indian ports, rail ramps, and national highway corridors. Operations span from CFS handling to full 3PL outsourced supply chain management.
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

        {/* Large Dominant High-Bay Warehouse Photography */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden mt-6 bg-slate-900 border border-slate-200 shadow-sm">
          <Image
            src="/images/slide4.jpg"
            alt="High-bay multi-client warehouse facility with industrial racking and WMS material handling - Freyer Logistics"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center justify-between gap-3 text-white text-xs font-mono">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
              Multi-Client &amp; Multi-Location Architecture
            </span>
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 hidden sm:inline-block">
              Port, Rail &amp; Highway Connectivity
            </span>
          </div>
        </div>

        {/* 19 Value-Added Capabilities Typographic Ledger */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-3 border-b border-slate-200">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold">
              19 Value-Added Fulfillment &amp; Processing Services
            </h3>
            <span className="text-xs font-mono text-slate-600 mt-1 sm:mt-0">
              WMS Managed Operations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 text-xs">
            {WAREHOUSE_19_CAPABILITIES.map((service, idx) => (
              <div
                key={idx}
                className="py-3 border-b border-slate-100 flex items-center justify-between text-slate-700 font-medium group hover:text-[#0b2144] transition-colors"
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
      <section id="project-cargo" className="bg-[#060f1e] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-widest font-semibold mb-2">
          <span>02 / Project Cargo Engineering</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              From site disassembly to final foundation.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
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

        {/* Asymmetric Split: High-Impact Mid-Air Heavy-Lift Hoist + Typographic Sector Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src="/images/11.3.jpg"
              alt="Heavy-lift crane spreader hoist lifting 37.6 MT ITALGRU boom assembly mid-air at container terminal - Freyer Project Cargo"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
              37.6 MT Heavy-Lift Crane Hoist &middot; Maritime Terminal Rigging
            </span>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff6b4a] font-bold">
                Target Industrial Sectors
              </h3>
              <span className="text-[11px] font-mono text-slate-400">Turnkey Scope</span>
            </div>

            <div className="divide-y divide-white/5 text-xs">
              {PROJECT_SECTORS.map((sector) => (
                <div key={sector.step} className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#ff6b4a] font-bold">{sector.step}</span>
                    <span className="font-semibold text-white">{sector.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono text-right">{sector.scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Step Operational Execution Process Timeline */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-6">
            Engineered Operational Execution Sequence
          </h3>

          {/* Desktop Horizontal Process Timeline */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-3.5 left-4 right-4 h-px bg-white/10 -z-0" />
            {PROJECT_EXECUTION_STAGES.map((stage) => (
              <div key={stage.step} className="relative z-10 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#060f1e] border-2 border-[#ff6b4a] flex items-center justify-center text-[10px] font-mono font-bold text-white mb-3">
                  {stage.step}
                </div>
                <div className="font-semibold text-white text-xs">{stage.title}</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Connected Sequence */}
          <div className="lg:hidden space-y-4 border-l border-white/10 pl-4 ml-2">
            {PROJECT_EXECUTION_STAGES.map((stage) => (
              <div key={stage.step} className="relative space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#ff6b4a]">{stage.step}</span>
                  <span className="font-semibold text-white text-xs">{stage.title}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: CORE DISCIPLINES (TIER 2 REFINED 2x2 GRID)
      ───────────────────────────────────────────────────────────── */}
      <section id="core-disciplines" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono text-slate-600 uppercase tracking-widest block mb-1.5 font-medium">
            03 / Core Multimodal &amp; Compliance Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Global Freight &amp; Customs Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 pt-10">
          {/* 03: Ocean Freight */}
          <div id="ocean-freight" className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">03 &middot; Ocean Freight (FCL &amp; LCL)</span>
              <span>Maritime Services</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Direct Carrier Contracts &amp; Consolidated LCL Sailings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We leverage established carrier relationships to secure capacity, dependable scheduling, and competitive agreements for full container loads (FCL), alongside dependable weekly consolidated LCL sailings into and out of all major global container ports.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Full Container Load (FCL) carrier space agreements</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Dependable weekly Less than Container Load (LCL) sailings</span>
              </li>
            </ul>
          </div>

          {/* 04: Air Freight */}
          <div id="air-freight" className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">04 &middot; Air Freight &amp; Charter</span>
              <span>Expedited &amp; Scheduled</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Scheduled Flights &amp; Tailored Freighter Chartering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Flexible standard and expedited international air transportation with global end-to-end milestone visibility. When capacity shortfalls or remote destinations require dedicated aircraft, our team crafts tailored full and part-charter solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-600">
              <span className="px-2.5 py-1 bg-slate-100 rounded">Temperature Controlled</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">Dangerous Goods (DG)</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">High Value</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">Perishables</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded">White Glove</span>
            </div>
          </div>

          {/* 05: Customs Brokerage */}
          <div id="customs" className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">05 &middot; Customs Brokerage</span>
              <span>AEO Tier-2 Certified</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              AEO Compliance &amp; Licensed Customs Brokers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Managed by a dedicated team of Licensed Customs Brokers at corporate and branch levels across India. Facilitating import and export declarations to Customs of India and Participating Government Agencies in strict compliance with current and evolving regulations.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>On-site licensed customs brokers across 10 corporate hubs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Designated export compliance and Electronic Export Information (EEI) filing</span>
              </li>
            </ul>
          </div>

          {/* 06: Risk Management */}
          <div id="risk-management" className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">06 &middot; Cargo Risk Management</span>
              <span>Marine Insurance</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Supply Chain Risk Evaluation &amp; Marine Cargo Insurance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traditional carrier liability is strictly limited under international transport conventions. Our risk management experts evaluate exposure across inventory cycles, providing customized transit insurance solutions including spot insurance and annual blanket policies.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>All-Risk coverage options tailored to client transport profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                <span>Spot policies for project movements and continuous blanket coverage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
