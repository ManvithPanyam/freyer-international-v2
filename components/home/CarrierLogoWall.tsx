"use client";

import React from "react";
import { motion } from "motion/react";
import { Anchor, Plane, ShieldCheck, ArrowUpRight } from "lucide-react";

interface CarrierPartner {
  name: string;
  category: "Ocean Carrier" | "Air Cargo Line" | "Global Alliance";
  detail: string;
}

const CARRIERS: CarrierPartner[] = [
  // Ocean Liners
  { name: "MAERSK", category: "Ocean Carrier", detail: "Direct contractual vessel space allocation" },
  { name: "MSC", category: "Ocean Carrier", detail: "Tier-1 global container slot charters" },
  { name: "CMA CGM", category: "Ocean Carrier", detail: "Transpacific & European service lanes" },
  { name: "HAPAG-LLOYD", category: "Ocean Carrier", detail: "Specialized Reefer & Out-of-Gauge capacity" },
  { name: "ONE", category: "Ocean Carrier", detail: "Intra-Asia & Far East expedited services" },
  { name: "COSCO SHIPPING", category: "Ocean Carrier", detail: "China - India express container loops" },
  
  // Air Cargo Carriers
  { name: "EMIRATES SKYCARGO", category: "Air Cargo Line", detail: "Widebody B777F scheduled main-deck bookings" },
  { name: "QATAR CARGO", category: "Air Cargo Line", detail: "Direct Pharma Secure transit corridors" },
  { name: "SINGAPORE AIRLINES", category: "Air Cargo Line", detail: "Southeast Asia & Australia priority air lifts" },
  { name: "LUFTHANSA CARGO", category: "Air Cargo Line", detail: "Transatlantic & European freighter routing" },
  { name: "CATHAY CARGO", category: "Air Cargo Line", detail: "Greater China & North America heavy-lift" },

  // Global Alliances & Accreditations
  { name: "IATA AGENT", category: "Global Alliance", detail: "Regulated international air cargo issuing agent" },
  { name: "WCA INTERGLOBAL", category: "Global Alliance", detail: "Vetted forwarding partners worldwide" },
  { name: "FIATA", category: "Global Alliance", detail: "Federation of Freight Forwarders Associations" },
  { name: "AMTOI", category: "Global Alliance", detail: "Association of Multimodal Transport Operators" },
];

export function CarrierLogoWall() {
  return (
    <section
      aria-label="Carrier Network & Strategic Alliances"
      className="py-14 sm:py-20 bg-slate-900 border-b border-slate-800 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c42f0b] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c42f0b]" />
              Direct Carrier Contract Capacity
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Global Shipping Lines &amp; Air Freighter Operators
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Direct service contracts with the world&apos;s leading container lines and scheduled air cargo operators, ensuring secured allocations during peak demand.
          </p>
        </div>

        {/* High Density Grid with Hover States */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {CARRIERS.map((carrier, idx) => (
            <motion.div
              key={carrier.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c42f0b]/50 rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-default flex flex-col justify-between min-h-[110px]"
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                  {carrier.category === "Ocean Carrier" ? (
                    <Anchor className="w-2.5 h-2.5" />
                  ) : carrier.category === "Air Cargo Line" ? (
                    <Plane className="w-2.5 h-2.5" />
                  ) : (
                    <ShieldCheck className="w-2.5 h-2.5" />
                  )}
                  {carrier.category}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-100 group-hover:text-white font-mono">
                  {carrier.name}
                </h3>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {carrier.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Baseline Assurance Banner */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Volume Service Contracts: Indian Subcontinent, Middle East, Europe &amp; Americas</span>
          </div>
          <span className="text-slate-500">
            Freyer International Logistics Pvt. Ltd. &middot; Corporate Carrier Ledger
          </span>
        </div>
      </div>
    </section>
  );
}
