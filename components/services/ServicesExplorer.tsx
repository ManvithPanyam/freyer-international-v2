"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Warehouse,
  Anchor,
  Plane,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Boxes,
  Truck,
  Flame,
  Thermometer,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
} from "lucide-react";

interface ServiceData {
  file: string;
  page_title: string;
  h2_headings: string[];
  paragraphs: string[];
  list_items: string[];
}

const WAREHOUSE_CAPABILITIES = [
  "Pick and Pack",
  "Fulfillment",
  "Short & Long-term Storage",
  "Inventory Control & Management",
  "Cross Docking",
  "Kitting",
  "Vendor Consolidation Programs",
  "Real-time Inventory Reporting",
  "Transportation Management",
  "Reverse Logistics",
  "Quality Control Inspection",
  "Sub-Assembly",
  "Finishing",
  "Tagging & Barcoding",
  "Conditioning",
  "Re-Packaging",
  "Export Packing",
  "Compliance Labelling",
  "Container Freight Station (CFS)",
];

const AIR_SPECIALTIES = [
  { label: "Temperature Controlled", desc: "Cold-chain solutions for pharmaceutical & clinical cargo" },
  { label: "Dangerous Goods (DG)", desc: "Certified IATA hazardous materials handling" },
  { label: "High Value Shipments", desc: "Dedicated secure transit protocols with surveillance" },
  { label: "Perishable Goods", desc: "Time-critical expedited airport ramp clearance" },
  { label: "White Glove Handling", desc: "Specialized delicate equipment delivery & unpacking" },
  { label: "Freighter Charter", desc: "Full & part chartering for out-of-gauge emergency freight" },
];

export function ServicesExplorer({ rawServices }: { rawServices: ServiceData[] }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ── SHOWCASE 1: 1,000,000+ SQ FT CONTRACT WAREHOUSING & 3PL ── */}
      <section id="warehousing" className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-slate-100">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold mb-3">
                <Warehouse className="w-4 h-4" />
                <span>Contract Logistics &middot; 1,000,000+ Sq Ft</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144] leading-tight">
                Warehousing &amp; 3PL Distribution
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Multi-client, multi-location facilities strategically positioned in close proximity to major Indian container ports, rail ramps, and national highway corridors. Equipped with Warehouse Management Systems (WMS) for complete real-time inventory visibility.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 lg:w-80 shrink-0">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                Operational Scope
              </span>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                  <span>1M+ sq ft operational footprint</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                  <span>Multi-Client &amp; Multi-Location WMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                  <span>CFS to Full 3PL Outsourcing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 19 Value Added Services Grid */}
          <div className="pt-10">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#0b2144] font-bold mb-6">
              19 Value-Added Fulfillment &amp; Processing Capabilities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {WAREHOUSE_CAPABILITIES.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-100/70 transition-colors flex items-start gap-2.5 text-xs text-slate-800"
                >
                  <span className="text-[10px] font-mono text-[#c42f0b] font-semibold mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE 2: PROJECT CARGO & HEAVY-LIFT ENGINEERING ── */}
      <section id="project-cargo" className="bg-[#060f1e] text-white rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-wider font-semibold mb-3">
                <Truck className="w-4 h-4" />
                <span>Over-Dimensional Cargo &middot; Up to 482 MT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Project Cargo &amp; Heavy-Lift Engineering
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                Turnkey multimodal solutions for the energy sector, offshore oil &amp; gas, wind farm developments, industrial machinery, and structural steel. From site disassembly and tandem crane rigging to maritime chartering and foundation placement.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 lg:w-80 shrink-0">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Sectors Served
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Energy &amp; Power</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Offshore Oil &amp; Gas</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Wind Turbines</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Heavy Machinery</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Structural Steel</span>
              </div>
            </div>
          </div>

          {/* Project Engineering Methodology & Portfolio Link */}
          <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-xs text-slate-300">
              <div className="font-mono text-[#ff6b4a] font-semibold">ENGINEERED LOGISTICS CHAIN:</div>
              <p className="text-slate-400 leading-relaxed">
                Route surveys, civil bypass calculations, mobile heavy crane discharge, hydraulic SPMT multi-axle modular trailers, and police escort permits.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors whitespace-nowrap shadow-md shadow-[#c42f0b]/20"
            >
              <span>Explore 11 Verified Movements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES 4-GRID (Ocean, Air, Customs, Risk) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ocean Services */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold mb-3">
              <Anchor className="w-4 h-4" />
              <span>Maritime Freight</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0b2144] tracking-tight">Ocean Freight (FCL &amp; LCL)</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Competitive carrier service agreements with the world&apos;s leading shipping lines. FCL capacity security and dependable weekly consolidated LCL sailings into and out of all major global container ports.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>FCL Contracts:</strong> Direct space allocations and competitive pricing agreements with premier global ocean carriers.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>LCL Consolidation:</strong> Weekly scheduled consolidations minimizing inventory holding costs on partial loads.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/#quote"
              className="text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Get Ocean Freight Rate</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Air Services */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold mb-3">
              <Plane className="w-4 h-4" />
              <span>Aviation Logistics</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0b2144] tracking-tight">Air Freight &amp; Charter Solutions</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Scheduled standard and expedited international air transportation, dedicated freighter chartering for capacity shortfalls, and end-to-end milestone tracking.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {AIR_SPECIALTIES.slice(0, 4).map((spec, i) => (
                <div key={i} className="p-2.5 bg-slate-50 rounded border border-slate-100">
                  <div className="font-semibold text-slate-800">{spec.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{spec.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/#quote"
              className="text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Inquire Airfreight Capacity</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Customs Brokerage */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold mb-3">
              <FileCheck className="w-4 h-4" />
              <span>Regulatory Compliance &middot; AEO Tier-2</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0b2144] tracking-tight">Customs Brokerage &amp; Compliance</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Facilitating import and export declarations to Customs of India and Participating Government Agencies (PGAs) through licensed in-house customs brokers across all 10 corporate branches.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>Export Compliance:</strong> Designated specialists ensuring accurate Electronic Export Information (EEI) filing.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>Import Compliance:</strong> Licensed Customs Brokers on-site at major air cargo complexes and sea ports.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/#quote"
              className="text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Consult Customs Desk</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Risk Management & Insurance */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold mb-3">
              <ShieldAlert className="w-4 h-4" />
              <span>Supply Chain Resilience</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0b2144] tracking-tight">Cargo Risk Management &amp; Insurance</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Traditional carrier liability is strictly limited by international conventions. Our risk analytics and marine cargo insurance solutions provide comprehensive financial protection against transit disruptions.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>All-Risk Coverage:</strong> Full insured value compensation regardless of carriage cause.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0 mt-0.5" />
                <span><strong>Spot &amp; Blanket Policies:</strong> Flexible underwriting for single high-value project shipments or continuous annual supply chains.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/#quote"
              className="text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Request Risk Assessment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
