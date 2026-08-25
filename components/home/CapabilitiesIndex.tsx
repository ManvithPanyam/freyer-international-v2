"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plane, Anchor, FileCheck, Warehouse, Compass, ShieldAlert } from "lucide-react";

interface CapabilityItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
  icon: React.ElementType;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "air",
    index: "01",
    name: "Air Freight Services",
    tagline: "High-velocity global air cargo routing & scheduled charters",
    description:
      "Integrated air freight solutions engineered for time-critical, temperature-controlled, and sensitive industrial shipments across major global airports.",
    image: "/images/Air-Services.jpg",
    specs: ["IATA Accredited", "Scheduled Consolidations", "Airport Hub Operations"],
    icon: Plane,
  },
  {
    id: "ocean",
    index: "02",
    name: "Ocean Freight Services",
    tagline: "FCL, LCL & multimodal maritime container operations",
    description:
      "Full container load (FCL) and consolidated less-than-container (LCL) forwarding across premier ocean shipping lanes with full port-to-port and door delivery.",
    image: "/images/Ocean-Services.jpg",
    specs: ["FCL / LCL Containerized", "Port Proximity Coordination", "Carrier Alliances"],
    icon: Anchor,
  },
  {
    id: "customs",
    index: "03",
    name: "Customs Brokerage (CHA)",
    tagline: "AEO-certified regulatory compliance & fast ICEGATE clearance",
    description:
      "Direct customs house agent brokerage ensuring rigorous tariff classification, duty assessment, and streamlined regulatory clearance at air and sea ports.",
    image: "/images/Customs-Services.jpg",
    specs: ["AEO Certified (Indian Customs)", "Tariff & HS Code Guidance", "Documentation Clearance"],
    icon: FileCheck,
  },
  {
    id: "warehouse",
    index: "04",
    name: "Contract Warehousing",
    tagline: "Secure commercial storage & 3PL inventory distribution",
    description:
      "Multi-city secure warehouse footprint delivering receipt, staging, inventory control, and dedicated distribution for industrial clients.",
    image: "/images/Warehouse.jpg",
    specs: ["Secure Storage Facilities", "Inventory Management", "Distribution Integration"],
    icon: Warehouse,
  },
  {
    id: "project",
    index: "05",
    name: "Project Cargo Engineering",
    tagline: "Heavy-lift, over-dimensional machinery & breakbulk logistics",
    description:
      "Specialized turnkey transport of industrial equipment, electrical transformers, and plant infrastructure using multi-axle trailers and custom route surveys.",
    image: "/images/Project-Cargo.jpg",
    specs: ["Over-Dimensional Cargo (ODC)", "Route & Feasibility Surveys", "Multi-Axle Haulage"],
    icon: Compass,
  },
  {
    id: "risk",
    index: "06",
    name: "Cargo Risk Management",
    tagline: "Comprehensive marine transit insurance & loss mitigation",
    description:
      "End-to-end marine cargo insurance coverage and claim assistance protecting valuable capital assets across international transit corridors.",
    image: "/images/Risk-Management.jpg",
    specs: ["All-Risk Marine Coverage", "Transit Risk Mitigation", "Claims Assistance"],
    icon: ShieldAlert,
  },
];

export function CapabilitiesIndex() {
  const [activeId, setActiveId] = useState<string>("air");
  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#0b2144] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Engineered for every freight modality.
          </h2>
        </div>

        {/* Typographic Index Grid with Interactive Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic Capability List */}
          <div className="lg:col-span-7 divide-y divide-slate-800 border-y border-slate-800">
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeId;
              const Icon = cap.icon;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveId(cap.id)}
                  onMouseEnter={() => setActiveId(cap.id)}
                  className={`w-full text-left py-6 sm:py-8 px-2 sm:px-4 transition-all duration-300 group flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b4a] rounded-lg ${
                    isActive ? "bg-white/5" : "hover:bg-white/[0.02]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`text-xs sm:text-sm font-mono tracking-wider pt-1 transition-colors ${
                        isActive ? "text-[#ff6b4a] font-bold" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {cap.index}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? "text-[#ff6b4a]" : "text-slate-400 group-hover:text-white"
                          }`}
                        />
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {cap.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isActive ? "text-[#ff6b4a] translate-x-1 -translate-y-1" : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl shadow-black/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeCapability.image}
                    alt={activeCapability.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/60 to-transparent" />

                  {/* Metadata Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[#ff6b4a] text-[10px] font-mono tracking-widest uppercase font-semibold">
                        Specification Preview
                      </span>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {activeCapability.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeCapability.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {activeCapability.specs.map((spec) => (
                        <span
                          key={spec}
                          className="bg-white/10 text-white text-[11px] font-mono px-2.5 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
