"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CapabilityItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "air",
    index: "01",
    name: "Air Freight",
    tagline: "Time-critical international air forwarding and charter operations.",
    description:
      "Direct scheduled consolidations and expedited routing connecting India's manufacturing hubs with primary global cargo destinations.",
    image: "/images/Air-Services.jpg",
  },
  {
    id: "ocean",
    index: "02",
    name: "Ocean Freight",
    tagline: "Full container load (FCL) and consolidated (LCL) maritime transport.",
    description:
      "Reliable ocean carrier allocations across major maritime lanes with port-to-port, door-to-door, and breakbulk capability.",
    image: "/images/Ocean-Services.jpg",
  },
  {
    id: "customs",
    index: "03",
    name: "Customs Brokerage",
    tagline: "AEO-certified regulatory clearance & ICEGATE documentation.",
    description:
      "Licensed Customs House Agent (CHA) services with precise tariff classification, duty compliance, and rapid seaport/airport release.",
    image: "/images/Customs-Services.jpg",
  },
  {
    id: "warehouse",
    index: "04",
    name: "Contract Warehousing",
    tagline: "Secure commercial storage & 3PL inventory distribution.",
    description:
      "Strategically positioned multi-hub warehouse facilities providing inventory control, palletized storage, and domestic distribution.",
    image: "/images/Warehouse.jpg",
  },
  {
    id: "project",
    index: "05",
    name: "Project Cargo",
    tagline: "Heavy-lift, over-dimensional machinery & route engineering.",
    description:
      "Turnkey logistics for industrial plant machinery, power transformers, and heavy equipment using multi-axle modular transporters.",
    image: "/images/Project-Cargo.jpg",
  },
  {
    id: "risk",
    index: "06",
    name: "Cargo Risk Management",
    tagline: "Comprehensive marine transit insurance and loss prevention.",
    description:
      "End-to-end cargo insurance coverage and dedicated claim assistance protecting valuable capital assets across international transit routes.",
    image: "/images/Risk-Management.jpg",
  },
];

export function CapabilitiesIndex() {
  const [activeId, setActiveId] = useState<string>("air");
  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white text-[#0b2144]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#c42f0b] text-xs font-mono tracking-widest uppercase font-semibold">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2144] mt-2">
            Multimodal Expertise
          </h2>
        </div>

        {/* Editorial Index Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Typographic Index List */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveId(cap.id)}
                  onMouseEnter={() => setActiveId(cap.id)}
                  className={`w-full text-left py-6 sm:py-7 px-3 sm:px-4 transition-all duration-200 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-lg ${
                    isActive ? "bg-slate-50" : "hover:bg-slate-50/50"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`text-xs sm:text-sm font-mono tracking-wider pt-1 transition-colors ${
                        isActive ? "text-[#c42f0b] font-bold" : "text-slate-600"
                      }`}
                    >
                      {cap.index}
                    </span>
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                          isActive ? "text-[#0b2144]" : "text-slate-700"
                        }`}
                      >
                        {cap.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform shrink-0 ${
                      isActive ? "text-[#c42f0b] translate-x-0.5 -translate-y-0.5" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: High-Resolution Photo Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/2] sm:aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 shadow-xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152b]/90 via-[#07152b]/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2">
                    <span className="text-[#ff6b4a] text-[11px] font-mono tracking-wider uppercase font-semibold">
                      {activeCapability.index} / {activeCapability.name}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {activeCapability.description}
                    </p>
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
