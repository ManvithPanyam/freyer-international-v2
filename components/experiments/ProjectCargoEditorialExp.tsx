"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Scale, Box, Calendar, ChevronRight, Compass } from "lucide-react";

interface ProjectRecord {
  id: number;
  routeTitle: string;
  origin: string;
  destination: string;
  weightHeadline: string;
  weightLabel: string;
  transportMode: string;
  specs: { label: string; value: string }[];
  description: string;
  primaryImage: string;
  allImages: string[];
}

const VERIFIED_PROJECTS: ProjectRecord[] = [
  {
    id: 11,
    routeTitle: "Venice to Mundra",
    origin: "Venice, Italy",
    destination: "Mundra, India",
    weightHeadline: "37.6 MT",
    weightLabel: "Single Unit Net Weight (37,600 KG)",
    transportMode: "BBK on Container Vessel",
    specs: [
      { label: "Cargo Type", value: "Boom Crane Assembly" },
      { label: "Dimensions", value: "2,700 × 400 × 455 cm" },
      { label: "Execution Mode", value: "BBK on Container Vessel" },
      { label: "Commercial Terms", value: "Ex-Works with Road Permit" },
    ],
    description:
      "Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.",
    primaryImage: "/images/11.1.jpg",
    allImages: ["/images/11.1.jpg", "/images/11.2.jpg", "/images/11.3.jpg", "/images/11.4.jpg"],
  },
  {
    id: 9,
    routeTitle: "Shanghai to Jebel Ali",
    origin: "Shanghai, China",
    destination: "Jebel Ali, UAE",
    weightHeadline: "482 MT",
    weightLabel: "Total Cargo Weight",
    transportMode: "Break Bulk Shipment",
    specs: [
      { label: "Total Volume", value: "796 CBM" },
      { label: "Package Count", value: "29 PKG" },
      { label: "Transport Mode", value: "Break Bulk Direct Vessel" },
      { label: "Scope", value: "Heavy Industrial Cargo" },
    ],
    description: "Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT.",
    primaryImage: "/images/9.1.jpg",
    allImages: ["/images/9.1.jpg", "/images/9.2.jpg"],
  },
  {
    id: 4,
    routeTitle: "Al Jubail to Jebel Ali",
    origin: "Al Jubail, Saudi Arabia",
    destination: "Jebel Ali, UAE",
    weightHeadline: "2 × 148 MT",
    weightLabel: "Heaviest Dual Units (296 MT Total)",
    transportMode: "Door Delivery",
    specs: [
      { label: "Heaviest Unit", value: "2 × 148 MT Units" },
      { label: "Delivery Mode", value: "Door Delivery + Accessories" },
      { label: "Sector", value: "Middle East Industrial Corridor" },
      { label: "Logistics Type", value: "Turnkey Heavy Lift Transfer" },
    ],
    description: "Door-Delivery Heaviest piece- 2 x 148 MT + Accessories.",
    primaryImage: "/images/4.jpg",
    allImages: ["/images/4.jpg"],
  },
  {
    id: 2,
    routeTitle: "Masan to Chennai",
    origin: "Masan, South Korea",
    destination: "Chennai, India",
    weightHeadline: "200 MT",
    weightLabel: "Total Movement Weight",
    transportMode: "Break Bulk",
    specs: [
      { label: "Package Count", value: "22 Packages" },
      { label: "Cubic Volume", value: "837 CBM" },
      { label: "Execution Date", value: "May 2023" },
      { label: "Discharge Port", value: "Chennai Port Trust" },
    ],
    description: "22 Packages / 837 cbm / WT 200 MT (May 2023).",
    primaryImage: "/images/2.1.jpg",
    allImages: ["/images/2.1.jpg", "/images/2.2.jpg", "/images/2.3.jpg", "/images/2.4.jpg"],
  },
  {
    id: 1,
    routeTitle: "Kobe to Chennai",
    origin: "Kobe, Japan",
    destination: "Chennai, India",
    weightHeadline: "37.1 MT",
    weightLabel: "37,100 KG Net Weight",
    transportMode: "RORO Movement",
    specs: [
      { label: "Dimensions", value: "904 × 310 × 316 cm" },
      { label: "Transport Mode", value: "Roll-on / Roll-off (RORO)" },
      { label: "Execution Date", value: "April 2023" },
      { label: "Origin Gateway", value: "Port of Kobe" },
    ],
    description: "904 x 310 x 316 cm - WT 37100 KG (April 2023).",
    primaryImage: "/images/1.jpg",
    allImages: ["/images/1.jpg"],
  },
  {
    id: 7,
    routeTitle: "Ex Genoa to Jebel Ali",
    origin: "Genoa, Italy",
    destination: "Jebel Ali, UAE",
    weightHeadline: "68 MT each",
    weightLabel: "17 Units Total Movement",
    transportMode: "Door to Door",
    specs: [
      { label: "Dimensions", value: "360 × 263 × 400 cm" },
      { label: "Total Units", value: "17 units moved in different lots" },
      { label: "Service Type", value: "Door to Door Logistics" },
      { label: "Unit Weight", value: "68,000 KG each" },
    ],
    description: "360 x 263 x 400 cm- WT 68000 KG each Total 17 units moved in different lots (Door to Door).",
    primaryImage: "/images/7.1.jpg",
    allImages: ["/images/7.1.jpg", "/images/7.2.jpg", "/images/7.3.jpg"],
  },
  {
    id: 6,
    routeTitle: "Ex Genoa to Sohar",
    origin: "Genoa, Italy",
    destination: "Sohar, Oman",
    weightHeadline: "8 × 40 FR",
    weightLabel: "39,800 KG Each Unit",
    transportMode: "Flat Rack",
    specs: [
      { label: "Unit Specs", value: "319 × 231 × 360 cm" },
      { label: "Container Units", value: "8 × 40 Flat Rack" },
      { label: "Staging", value: "Lots of 2 × 40 FR consecutive vessels" },
      { label: "Total Weight", value: "39,800 KG per unit" },
    ],
    description: "8 x 40 FR – 319 x 231 x 360 cm- WT 39800 KG each (lots of 2 x 40 FR loaded on consecutive vessels).",
    primaryImage: "/images/6.1.jpg",
    allImages: ["/images/6.1.jpg", "/images/6.2.jpg"],
  },
];

export function ProjectCargoEditorialExp() {
  const [activeRecordId, setActiveRecordId] = useState<number>(11);
  const activeRecord = VERIFIED_PROJECTS.find((p) => p.id === activeRecordId) || VERIFIED_PROJECTS[0];

  return (
    <section id="project-cargo-story" className="py-24 sm:py-32 bg-[#091524] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-[0.25em] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            Verified Heavy Lift Engineering Records
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Out-of-Gauge Cargo, <br />
            <span className="font-semibold text-white">Proven on Global Waterways.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From the heaviest single pieces to multi-lot industrial shipments. Every metric and route
            drawn verbatim from Freyer International's authenticated project execution archives.
          </p>
        </div>

        {/* Two-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Dossier Navigation (List of verified case studies) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
              Select Verified Movement ({VERIFIED_PROJECTS.length} Featured / 11 Total Records)
            </span>

            {VERIFIED_PROJECTS.map((item) => {
              const isSelected = item.id === activeRecord.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveRecordId(item.id)}
                  className={`text-left p-4 sm:p-5 rounded-lg transition-all border flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/10 border-amber-400/50 shadow-lg shadow-black/20"
                      : "bg-white/[0.03] border-white/5 hover:bg-white/[0.07] hover:border-white/15"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                          isSelected ? "bg-amber-400/20 text-amber-300" : "bg-white/5 text-slate-400"
                        }`}
                      >
                        {item.transportMode}
                      </span>
                      <span className="text-sm font-medium text-white tracking-wide">
                        {item.routeTitle}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-0.5">
                      {item.origin} &rarr; {item.destination}
                    </span>
                  </div>

                  <div className="text-right pl-4">
                    <span
                      className={`text-lg sm:text-xl font-mono font-medium block leading-none ${
                        isSelected ? "text-amber-400" : "text-slate-300"
                      }`}
                    >
                      {item.weightHeadline}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">
                      Verified Net
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Hero Spotlight Canvas */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRecord.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-xl overflow-hidden border border-white/10 bg-[#060e1a]"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={activeRecord.primaryImage}
                    alt={activeRecord.routeTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center brightness-95"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent" />

                  {/* Route Pill Top-Left */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono text-white flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activeRecord.origin} &rarr; {activeRecord.destination}</span>
                  </div>

                  {/* Transport Badge Top-Right */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 text-xs font-mono text-amber-400">
                    {activeRecord.transportMode}
                  </div>
                </div>

                {/* Technical Dossier Content */}
                <div className="p-6 sm:p-8">
                  {/* Weight Metric Callout */}
                  <div className="border-b border-white/10 pb-6 mb-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-1">
                          Cargo Metric Headline
                        </span>
                        <span className="text-3xl sm:text-5xl font-mono font-light text-white">
                          {activeRecord.weightHeadline}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono self-end">
                        {activeRecord.weightLabel}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 font-sans mt-4 leading-relaxed">
                      {activeRecord.description}
                    </p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {activeRecord.specs.map((spec, idx) => (
                      <div key={idx} className="bg-white/[0.03] p-3.5 rounded border border-white/5">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {spec.label}
                        </span>
                        <span className="text-sm font-medium text-white block mt-1">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Image Gallery Strips if available */}
                  {activeRecord.allImages.length > 1 && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                        Authenticated Operation Captures ({activeRecord.allImages.length} Photos)
                      </span>
                      <div className="grid grid-cols-4 gap-2.5">
                        {activeRecord.allImages.map((img, i) => (
                          <div
                            key={i}
                            className="relative aspect-[4/3] rounded overflow-hidden border border-white/10"
                          >
                            <Image
                              src={img}
                              alt={`${activeRecord.routeTitle} photo ${i + 1}`}
                              fill
                              sizes="150px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
