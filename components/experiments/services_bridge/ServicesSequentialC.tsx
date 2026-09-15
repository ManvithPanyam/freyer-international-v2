"use client";

import React from "react";
import Image from "next/image";

export const SEQUENTIAL_SERVICES = [
  {
    step: "01",
    name: "Ocean Services",
    category: "Maritime Transport",
    headline: "Scheduled capacity across major global sea lines.",
    body: "Securing dedicated vessel allocation with Tier-1 ocean carriers. Weekly dependable departures for full container loads (FCL) and consolidated less-than-container loads (LCL) connecting domestic trade gateways to international destinations.",
    metrics: [
      { label: "Configuration", value: "FCL & LCL" },
      { label: "Frequency", value: "Weekly Sailings" },
      { label: "Reach", value: "Global Port Corridors" }
    ],
    image: "/images/Ocean-Services.jpg",
    alignment: "left"
  },
  {
    step: "02",
    name: "Air Services",
    category: "Atmospheric Transit",
    headline: "Speed and charter capacity for high-priority shipments.",
    body: "IATA endorsed cargo operations engineered for strict delivery deadlines. Providing international scheduled bellyhold, temperature-sensitive cold chain, and full aircraft chartering for out-of-gauge or urgent cargo.",
    metrics: [
      { label: "Agent Status", value: "IATA Approved" },
      { label: "Aircraft", value: "Bellyhold & Full Charter" },
      { label: "Specialty", value: "Pharma / DG / High-Value" }
    ],
    image: "/images/Air-Services.jpg",
    alignment: "right"
  },
  {
    step: "03",
    name: "Customs Services",
    category: "Statutory Clearance",
    headline: "In-house licensed brokers ensuring regulatory adherence.",
    body: "Seamless statutory filing with Indian Customs and Participating Government Agencies (PGAs). Licensed brokers operating at corporate and station levels to execute Electronic Export Information and import clearance without demurrage.",
    metrics: [
      { label: "Personnel", value: "Licensed Customs Brokers" },
      { label: "Filing", value: "Electronic Export & Import" },
      { label: "Locations", value: "Air, Ocean & Dry Ports" }
    ],
    image: "/images/Customs-Services.jpg",
    alignment: "left"
  },
  {
    step: "04",
    name: "Warehouse & Distribution",
    category: "Contract Storage",
    headline: "Over 1,000,000 square feet of WMS-enabled space.",
    body: "Turnkey multi-client warehousing positioned near primary ports, highways, and rail ramps. Comprehensive capabilities ranging from Container Freight Station (CFS) management to complete 3PL inventory and reverse logistics.",
    metrics: [
      { label: "Footprint", value: "1,000,000+ SQ FT" },
      { label: "Technology", value: "WMS Enabled" },
      { label: "Services", value: "Pick, Pack, CFS & 3PL" }
    ],
    image: "/images/Warehouse.jpg",
    alignment: "right"
  },
  {
    step: "05",
    name: "Risk Management",
    category: "Asset Protection",
    headline: "Comprehensive indemnity beyond standard carrier liability.",
    body: "Mitigating financial loss through predictive case modeling and tailored insurance structures. Offering full insured value compensation, spot coverage, and blanket marine policies designed for high-value and vulnerable supply chains.",
    metrics: [
      { label: "Valuation", value: "Up to 100% Insured Value" },
      { label: "Scope", value: "All-Risk Protection" },
      { label: "Structure", value: "Spot & Blanket Policies" }
    ],
    image: "/images/Risk-Management.jpg",
    alignment: "left"
  },
  {
    step: "06",
    name: "Project Cargo",
    category: "Heavy-Lift Breakbulk",
    headline: "Specialized engineering for oversize industrial freight.",
    body: "The physical benchmark of Freyer's logistics network. Mobilizing heavy cargo cranes, route survey permits, and specialized vessel stowage for power generation, wind energy, and offshore structures weighing up to hundreds of tons.",
    metrics: [
      { label: "Documented", value: "482 MT Single Record" },
      { label: "Machinery", value: "Heavy Mobile Cranes" },
      { label: "Discharge", value: "Multi-Axle Transport" }
    ],
    image: "/images/Project-Cargo.jpg",
    alignment: "right"
  }
];

export function ServicesSequentialC({ isMasterPage = false }: { isMasterPage?: boolean }) {
  return (
    <section className="relative bg-[#060c18] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-16 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            {isMasterPage ? "Core Forwarding Infrastructure" : "Concept C • Quiet Visual Sequence"}
          </div>
          <h2 id="concept-c-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            A PROGRESSION OF LOGISTICS CAPABILITIES.
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Six verified disciplines operating across ocean terminals, air freight hubs, customs checkpoints, and 1,000,000+ sq ft of contract warehousing.
          </p>
        </div>

        {/* The Quiet Visual Sequence */}
        <div className="divide-y divide-white/10">
          {SEQUENTIAL_SERVICES.map((item, idx) => {
            const isReverse = item.alignment === "right";
            return (
              <div
                key={idx}
                className={`py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] rounded-lg overflow-hidden border border-white/10 bg-black ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent opacity-70" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-black/80 text-[#e1390f] border border-white/15">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#e1390f] uppercase tracking-widest">
                      {item.category}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      {item.name}
                    </h3>
                    <div className="text-base text-slate-200 font-medium pt-1">
                      {item.headline}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {item.body}
                  </p>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
