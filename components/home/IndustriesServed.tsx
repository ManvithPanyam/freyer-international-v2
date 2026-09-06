"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Car,
  HardHat,
  ThermometerSnowflake,
  PlaneTakeoff,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface IndustryVertical {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keyCapabilities: string[];
  cargoExamples: string;
  transitModes: string[];
}

const VERTICALS: IndustryVertical[] = [
  {
    id: "renewables",
    name: "Renewable Energy & Power",
    headline: "Utility-Scale Solar & Wind Movement",
    description:
      "Engineered transport and customs handling for major renewable energy installations across India, the Middle East, and Southeast Asia.",
    icon: Zap,
    keyCapabilities: [
      "Quayside flat-rack & breakbulk discharge",
      "Hydraulic axle transport for nacelles & towers",
      "Concessional customs tariff classification",
      "Route civil surveys & bridge reinforcement",
    ],
    cargoExamples: "Wind turbine blades, nacelles, solar inverters, step-up transformers & BESS systems",
    transitModes: ["Ocean Breakbulk", "Heavy Hydraulic Road", "Project Customs"],
  },
  {
    id: "automotive",
    name: "Automotive & EV Mobility",
    headline: "Just-in-Time Factory Supply Chains",
    description:
      "Time-critical supply chain corridors connecting Tier-1 suppliers in Japan, Korea, Germany, and India with active manufacturing plants.",
    icon: Car,
    keyCapabilities: [
      "JIT/JIS plant delivery sequencing",
      "RoRo vessel stevedoring & specialized trailers",
      "Bonded warehouse buffering near assembly lines",
      "Class 9 lithium-ion DG handling compliance",
    ],
    cargoExamples: "CKD/SKD assembly kits, powertrain subassemblies, EV battery packs & stamping dies",
    transitModes: ["RoRo Shipping", "Air Charter Priority", "Cross-Border Trucking"],
  },
  {
    id: "engineering",
    name: "Heavy Engineering & EPC",
    headline: "Turnkey Industrial Plant Cargo",
    description:
      "End-to-end logistics engineering for capital projects, refinery expansions, cement plants, and steel infrastructure.",
    icon: HardHat,
    keyCapabilities: [
      "Tandem heavy crane lift engineering",
      "Port captaincy & marine lashing warranty",
      "State road highway permits & electrical clearances",
      "Foundation bolt-to-bolt offloading",
    ],
    cargoExamples: "Boilers, pressure vessels, boom cranes, heat exchangers & tunnel boring segments",
    transitModes: ["Heavy Multi-Axle", "Coastal Barge", "Ocean Heavy Lift"],
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Healthcare",
    headline: "Temperature-Controlled Cold Chain",
    description:
      "GDP-compliant cold-chain solutions for high-value formulations, active pharmaceutical ingredients (APIs), and critical clinical shipments.",
    icon: ThermometerSnowflake,
    keyCapabilities: [
      "Active reefer container temperature logging",
      "Refrigerated airside tarmac transport",
      "Dry ice & passive thermal packaging replenishment",
      "Priority AEO Green Channel clearance at airports",
    ],
    cargoExamples: "Temperature-sensitive biologics (+2°C to +8°C), sterile vaccines & bulk APIs",
    transitModes: ["Envirotainer Air Freight", "Reefer FCL Ocean", "GPS Cold Van"],
  },
  {
    id: "aerospace",
    name: "Aerospace & Marine Spares",
    headline: "24/7 AOG & Critical Parts Desk",
    description:
      "Round-the-clock emergency desk providing expedited airfreight and bonded clearances for grounded commercial aircraft and ocean vessels.",
    icon: PlaneTakeoff,
    keyCapabilities: [
      "24/7 AOG rapid response dispatch",
      "Hand-carry / On-Board Courier (OBC) options",
      "Airside delivery passes at major Indian gateways",
      "Bonded transit warehouse storage",
    ],
    cargoExamples: "Turbofan aircraft engines, avionics units, ship propellers & marine navigation spares",
    transitModes: ["Priority Next-Flight-Out", "Part/Full Air Charter", "Bonded Express Courier"],
  },
  {
    id: "electronics",
    name: "Electronics & High-Tech",
    headline: "Secure, High-Value Cargo Corridors",
    description:
      "Secure global logistics for precision electronics, semiconductor assembly machinery, and telecom infrastructure equipment.",
    icon: Cpu,
    keyCapabilities: [
      "Anti-vibration air-ride trailer transport",
      "GPS real-time tamper & tilt sensor monitoring",
      "Humidity-controlled clean storage",
      "Rapid duty assessment & documentation processing",
    ],
    cargoExamples: "SMT line equipment, telecommunication towers, server racks & silicon wafer equipment",
    transitModes: ["Air Freight Scheduled", "Secure Air-Ride FTL", "Ocean FCL"],
  },
];

export function IndustriesServed() {
  const [selectedId, setSelectedId] = useState<string>("renewables");
  const currentVertical = VERTICALS.find((v) => v.id === selectedId) || VERTICALS[0];
  const CurrentIcon = currentVertical.icon;

  return (
    <section
      id="industries"
      aria-label="Industries & Specialized Verticals"
      className="py-16 sm:py-24 bg-[#0a192f] text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c42f0b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c42f0b] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c42f0b]" />
              Sector Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineered for Industry Verticals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
            Logistics is not one-size-fits-all. We engineer customized SOPs, packaging standards, and customs protocols tailored to the strict regulatory demands of each sector.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {VERTICALS.map((vertical) => {
            const Icon = vertical.icon;
            const isSelected = vertical.id === selectedId;
            return (
              <button
                key={vertical.id}
                type="button"
                onClick={() => setSelectedId(vertical.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-150 border flex flex-col justify-between min-h-[90px] ${
                  isSelected
                    ? "bg-[#c42f0b] border-[#c42f0b] text-white shadow-lg shadow-[#c42f0b]/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-white" : "text-[#c42f0b]"}`} />
                <span className="text-xs font-bold leading-snug">{vertical.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVertical.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c42f0b]/20 border border-[#c42f0b]/40 flex items-center justify-center text-[#c42f0b]">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#c42f0b]">
                      Vertical Capability Profile
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentVertical.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {currentVertical.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Dedicated Operational Protocols
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentVertical.keyCapabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 border border-white/5 p-2.5 rounded-lg font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cargo Profile */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Representative Cargo Handled:
                  </span>
                  <p className="text-xs font-mono text-amber-200/90 bg-amber-950/30 border border-amber-500/20 p-3 rounded-lg">
                    {currentVertical.cargoExamples}
                  </p>
                </div>
              </div>

              {/* Right Technical Specification Block */}
              <div className="lg:col-span-5 bg-black/30 border border-white/10 rounded-2xl p-6 space-y-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold mb-3 pb-2 border-b border-white/10">
                    Multimodal Transport Architecture
                  </h4>
                  <div className="space-y-2">
                    {currentVertical.transitModes.map((mode, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs font-mono p-2.5 bg-white/5 rounded-lg border border-white/5"
                      >
                        <span className="text-slate-200 font-medium">{mode}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                          Active Lane
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs text-slate-400 leading-relaxed font-sans">
                    Need tailored SOPs for your industrial cargo? Consult with our technical route planners.
                  </div>
                  <a
                    href="/#quote"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors font-mono"
                  >
                    <span>Request Vertical Scope &amp; Tariff</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
