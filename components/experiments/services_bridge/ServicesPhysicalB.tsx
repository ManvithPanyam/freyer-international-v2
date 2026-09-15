"use client";

import React from "react";
import Image from "next/image";

export const PHYSICAL_DOMAINS = [
  {
    domain: "THE SEA",
    service: "Ocean Services",
    material: "Steel Containers & Deep-Water Draft",
    metric: "Weekly Scheduled Sailings",
    summary: "Long-standing carrier space allocations governing standard FCL equipment and global LCL consolidation.",
    image: "/images/Ocean-Services.jpg",
    scope: "Major Global Seaports"
  },
  {
    domain: "THE AIR",
    service: "Air Services",
    material: "Freighter Maindecks & Bellyhold",
    metric: "IATA Endorsed Cargo Agent",
    summary: "Time-critical international freight and full aircraft chartering for remote destinations and urgent supply lines.",
    image: "/images/Air-Services.jpg",
    scope: "International Hubs"
  },
  {
    domain: "THE GATEWAY",
    service: "Customs Services",
    material: "Statutory Seals & Duty Clearances",
    metric: "Licensed In-House Brokers",
    summary: "Direct filing of Electronic Export Information and import declarations to Indian Customs and PGAs.",
    image: "/images/Customs-Services.jpg",
    scope: "Air, Sea & ICD Checkpoints"
  },
  {
    domain: "THE FLOOR",
    service: "Warehouse & Distribution",
    material: "1,000,000+ Sq Ft Racked & Floor Space",
    metric: "WMS Enabled Multi-Client Facilities",
    summary: "Strategic storage facilities positioned along port-hinterland corridors, offering CFS to full 3PL distribution.",
    image: "/images/Warehouse.jpg",
    scope: "Major Industrial Corridors"
  },
  {
    domain: "THE SHIELD",
    service: "Risk Management",
    material: "Indemnity & Full-Value Coverage",
    metric: "100% Insured Value Policies",
    summary: "Predictive risk modeling and All-Risk marine insurance safeguarding cargo against catastrophic transit loss.",
    image: "/images/Risk-Management.jpg",
    scope: "Comprehensive Transit Insurance"
  },
  {
    domain: "THE RIG",
    service: "Project Cargo",
    material: "Heavy Cranes & Lowbed Trailers",
    metric: "482 MT Single Breakbulk Record",
    summary: "Out-of-gauge heavy lift engineering for energy, steel, and offshore infrastructure requiring specialized stowage.",
    image: "/images/Project-Cargo.jpg",
    scope: "Global Project Execution"
  }
];

export function ServicesPhysicalB() {
  return (
    <section className="relative bg-[#040810] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            Concept B &bull; Physical & Material Domains
          </div>
          <h2 id="concept-b-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            THE SIX PHYSICAL REALMS OF LOGISTICS.
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Freight is not an abstract digital service. It exists in steel containers, freighter maindecks, customs examination sheds, and million-square-foot floorplates.
          </p>
        </div>

        {/* 6 Physical Material Cards Grid — Industrial & Tactile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {PHYSICAL_DOMAINS.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-[#071120] overflow-hidden hover:border-white/25 transition-all duration-300"
            >
              {/* Material Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.service}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent opacity-90" />
                
                {/* Physical Domain Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-black/80 text-[#e1390f] border border-white/15">
                    {item.domain}
                  </span>
                </div>
              </div>

              {/* Physical Context & Description */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {item.material}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {item.service}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Hard Material Metric */}
                <div className="border-t border-white/10 pt-4 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Physical Standard
                  </div>
                  <div className="text-sm font-mono font-bold text-white">
                    {item.metric}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Scope: {item.scope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
