"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  SectionHeader,
  FreyerCard,
  FreyerButton,
  THEME_TOKENS,
} from "@/components/ui/design-system";

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
  { step: "01", title: "Site Disassembly", desc: "Disassembly of oversized assemblies at construction sites" },
  { step: "02", title: "Route Survey", desc: "Civil load assessments, bridge clearance & transport permits" },
  { step: "03", title: "Crane Rigging", desc: "Tandem mobile crane calculations & certified heavy rigging" },
  { step: "04", title: "Port Handling", desc: "Intermediate yard staging, quayside & ship-side handling" },
  { step: "05", title: "Vessel Stowage", desc: "Breakbulk, flat rack & RORO stowage and heavy lashing" },
  { step: "06", title: "Site Delivery", desc: "Multi-axle hydraulic transport to final foundation" },
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
    <div className="space-y-24 sm:space-y-32">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: WAREHOUSING & 3PL
      ───────────────────────────────────────────────────────────── */}
      <section id="warehousing">
        <SectionHeader
          num="01"
          tag="Contract Warehousing &amp; 3PL"
          title="CONTRACT STORAGE."
          highlight="WMS DISTRIBUTION."
          description="Efficiency-driven multi-client facilities strategically positioned near major Indian seaports, rail ICDs, and national manufacturing corridors."
          action={
            <div className="text-right">
              <div
                className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight"
                style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
              >
                1,000,000+ SQ FT
              </div>
              <div className="text-[10px] font-mono text-[var(--color-cta)] uppercase tracking-wider mt-1">
                WMS Managed Footprint
              </div>
            </div>
          }
        />

        {/* High-Bay Warehouse Photography Panel */}
        <div className="relative aspect-[16/10] sm:aspect-[2.2/1] w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[var(--color-border-subtle)] shadow-lg">
          <Image
            src="/images/slide4.jpg"
            alt="High-bay multi-client warehouse facility with industrial racking and WMS material handling"
            fill
            className="object-cover object-[center_38%] brightness-95 contrast-105"
            sizes="(min-width: 1280px) 1400px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-surface)]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center justify-between gap-3 text-white text-xs font-mono">
            <span className="bg-[var(--color-bg-alt)]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
              Multi-Client &middot; Bonded CFS &middot; Temperature Controlled
            </span>
            <span className="bg-[var(--color-bg-alt)]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 hidden sm:inline-block">
              Port &amp; Rail ICD Connectivity
            </span>
          </div>
        </div>

        {/* 19 Capabilities Typographic Ledger */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-3 border-b border-[var(--color-border-subtle)]">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-semibold">
              19 Value-Added Fulfillment &amp; Processing Services
            </h3>
            <span className="text-xs font-mono text-[var(--color-text-secondary)] mt-1 sm:mt-0">
              Integrated WMS Control
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 text-xs mt-4">
            {WAREHOUSE_19_CAPABILITIES.map((service, idx) => (
              <div
                key={idx}
                className="py-3 border-b border-[var(--color-border-subtle)] flex items-center justify-between text-[var(--color-text-primary)] font-light hover:text-[var(--color-cta)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[var(--color-cta)] font-semibold w-5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{service}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-subtle)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: PROJECT CARGO
      ───────────────────────────────────────────────────────────── */}
      <section id="project-cargo">
        <SectionHeader
          num="02"
          tag="Heavy Lift &amp; ODC Engineering"
          title="SITE DISASSEMBLY."
          highlight="TO FINAL FOUNDATION."
          description="Turnkey engineered logistics for energy, offshore, wind energy, and heavy manufacturing. From single heavy pieces up to 482 MT to the smallest accompanying components."
          action={
            <FreyerButton href="/projects" size="sm" variant="primary">
              11 Documented Projects
            </FreyerButton>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--color-border-subtle)] bg-[#FFFFFF] shadow-lg">
            <Image
              src="/images/11.3.jpg"
              alt="Heavy-lift crane spreader hoist lifting 37.6 MT boom assembly mid-air at container terminal"
              fill
              className="object-cover object-center brightness-95 contrast-105"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-surface)]/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-white bg-[var(--color-bg-alt)]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
              37.6 MT Boom Crane Lift &middot; Venice to Mundra
            </span>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-semibold">
                Target Industrial Sectors
              </h3>
              <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">Turnkey Scope</span>
            </div>

            <div className="divide-y divide-[var(--color-border-subtle)] text-xs">
              {PROJECT_SECTORS.map((sector) => (
                <div key={sector.step} className="py-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[var(--color-cta)] font-bold">{sector.step}</span>
                    <span className="font-semibold text-[var(--color-text-primary)] font-mono">{sector.name}</span>
                  </div>
                  <span className="text-[11px] text-[var(--color-text-secondary)] font-light text-right">{sector.scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6-Step Operational Execution Process */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)]">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-semibold mb-6">
            Engineered Operational Execution Sequence
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROJECT_EXECUTION_STAGES.map((stage) => (
              <FreyerCard key={stage.step} className="p-4 space-y-2">
                <div className="w-7 h-7 rounded bg-[var(--color-cta)]/15 border border-[var(--color-brand-blue)]/30 flex items-center justify-center text-[10px] font-mono font-bold text-[var(--color-cta)]">
                  {stage.step}
                </div>
                <div className="font-semibold text-[var(--color-text-primary)] text-xs">{stage.title}</div>
                <p className="text-[var(--color-text-secondary)] text-[11px] font-light leading-relaxed">{stage.desc}</p>
              </FreyerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: MULTIMODAL & STATUTORY DISCIPLINES (GRID 2x2)
      ───────────────────────────────────────────────────────────── */}
      <section id="core-disciplines">
        <SectionHeader
          num="03"
          tag="Multimodal &amp; Compliance"
          title="OCEAN. AIR. CUSTOMS."
          highlight="RISK MITIGATION."
          description="Direct international carrier contracts, scheduled freighter flights, CBIC AEO-LO customs brokerage, and marine cargo insurance underwriting."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 03: Ocean Freight */}
          <FreyerCard id="ocean-freight" className="p-8 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-secondary)] pb-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-[var(--color-cta)] font-bold">03 &middot; OCEAN FREIGHT</span>
              <span>FCL &amp; LCL Sailings</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Direct Carrier Contracts &amp; Consolidated LCL Sailings
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
              We leverage established ocean carrier alliances to secure guaranteed capacity, dependable container scheduling, and competitive slot agreements across major global trade corridors.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text-primary)] pt-2 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>Full Container Load (FCL) carrier space allocations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>Weekly Less-than-Container Load (LCL) consolidated sailings</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link href="/services/ocean-freight" className="text-xs font-mono text-[var(--color-cta)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1">
                <span>View Full Ocean Specifications</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </FreyerCard>

          {/* 04: Air Freight */}
          <FreyerCard id="air-freight" className="p-8 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-secondary)] pb-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-[var(--color-cta)] font-bold">04 &middot; AIR FREIGHT</span>
              <span>IATA 14-3-4852</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Scheduled Airline Bookings &amp; Tailored Freighter Chartering
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
              Standard and expedited international air transportation with door-to-apron visibility. When capacity shortages or remote landing strips require dedicated aircraft, we broker full and part-charter flights.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-mono text-[var(--color-text-primary)]">
              <span className="px-2.5 py-1 bg-[var(--color-bg-base)] rounded border border-[var(--color-border-subtle)]">Pharma Cold Chain</span>
              <span className="px-2.5 py-1 bg-[var(--color-bg-base)] rounded border border-[var(--color-border-subtle)]">Dangerous Goods (DG)</span>
              <span className="px-2.5 py-1 bg-[var(--color-bg-base)] rounded border border-[var(--color-border-subtle)]">High Value Secure</span>
            </div>
            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link href="/services/air-freight" className="text-xs font-mono text-[var(--color-cta)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1">
                <span>View Full Air Cargo Specifications</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </FreyerCard>

          {/* 05: Customs Brokerage */}
          <FreyerCard id="customs-brokerage" className="p-8 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-secondary)] pb-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-[var(--color-cta)] font-bold">05 &middot; CUSTOMS BROKERAGE</span>
              <span>AEO-LO Certified</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
              CBIC Customs Authority &amp; In-House Licensed Brokers
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
              Managed by in-house Licensed Customs Brokers at corporate and branch desks across India. Facilitating import and export clearances to Indian Customs with prioritized processing privileges.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text-primary)] pt-2 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>On-site licensed customs house brokers across 10 branch stations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>Specialized tariff classification and duty exemption management</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link href="/services/customs-brokerage" className="text-xs font-mono text-[var(--color-cta)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1">
                <span>View Full Customs Specifications</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </FreyerCard>

          {/* 06: Risk Management */}
          <FreyerCard id="risk-management" className="p-8 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-secondary)] pb-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-[var(--color-cta)] font-bold">06 &middot; CARGO RISK MANAGEMENT</span>
              <span>Marine Insurance</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Supply Chain Exposure Underwriting &amp; Marine Policies
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
              Carrier liability is strictly capped under international transport conventions. Our marine surveyors evaluate transit exposure, providing comprehensive All-Risk insurance policies.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text-primary)] pt-2 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>All-Risk ICC(A) marine cargo coverage for global movements</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-cta)] shrink-0" />
                <span>Spot single-voyage policies and continuous annual blanket covers</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link href="/services/risk-management" className="text-xs font-mono text-[var(--color-cta)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1">
                <span>View Full Risk Management Specifications</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </FreyerCard>
        </div>
      </section>
    </div>
  );
}
