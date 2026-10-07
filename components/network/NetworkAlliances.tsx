"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/design-system";

const ALLIANCES = [
  {
    name: "WCA World",
    logo: "/images/wca.png",
    detail: "World's largest network of independent freight forwarders, providing audited reciprocal financial protection.",
    tier: "Global Forwarding Alliance",
  },
  {
    name: "Security Cargo Network (SCN)",
    logo: "/images/SCN.png",
    detail: "Vetted international alliance of elite independent logistics operators with strict service benchmarks.",
    tier: "Elite Forwarder Alliance",
  },
  {
    name: "WPA (The Logistics Network)",
    logo: "/images/wpa.jpg",
    detail: "Global logistics network providing audited operational standards and verified cross-border settlement protection.",
    tier: "International Logistics Network",
  },
  {
    name: "FDX Logistics Network",
    logo: "/images/FDX.jpg",
    detail: "International freight logistics alliance spanning key trade corridors with priority agent reciprocal coverage.",
    tier: "Global Freight Alliance",
  },
  {
    name: "AMTOI",
    logo: "/images/amtoi.png",
    detail: "Association of Multimodal Transport Operators of India — statutory body promoting multimodal cargo efficiency.",
    tier: "National Multimodal Body",
  },
  {
    name: "ACAAI",
    logo: "/images/Acaai.jpg",
    detail: "Air Cargo Agents Association of India — primary national federation for regulated air cargo agents.",
    tier: "Aviation Forwarder Federation",
  },
];

const CORRIDOR_STEPS = [
  { num: "01", stage: "Origin Dispatch", desc: "Local pickup, bonded warehousing, and initial export customs EDI filing." },
  { num: "02", stage: "Statutory Clearance", desc: "ICEGATE documentation and licensed CBIC AEO-LO authorized expedited clearance." },
  { num: "03", stage: "Main Line-Haul", desc: "Tier-1 direct ocean container carrier or scheduled IATA freighter movement." },
  { num: "04", stage: "Gateway Inbound", desc: "Port discharge operations, customs import assessment, and CFS de-consolidation." },
  { num: "05", stage: "Final Foundation", desc: "Hydraulic multi-axle or bonded fleet delivery with verified electronic POD." },
];

export function NetworkAlliances() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ── Global Networks Showcase ── */}
      <section>
        <SectionHeader
          num="01"
          tag="Accredited Global Federations"
          title="GLOBAL REACH."
          highlight="LOCALLY EXECUTED."
          description="Freyer maintains active, vetted membership in premier international forwarding alliances, ensuring rigorous reciprocal agency performance across worldwide trade corridors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALLIANCES.map((alliance, index) => {
            const isSelected = active === index;
            return (
              <div
                key={alliance.name}
                onClick={() => setActive(index)}
                className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#E33B12] bg-white shadow-md shadow-[#E33B12]/10"
                    : "border-[#DCDCD7] bg-white hover:border-[#17181B] hover:shadow-xs"
                }`}
              >
                <div>
                  {/* High-Contrast Clean Plinth */}
                  <div className="relative flex h-20 w-full items-center justify-center rounded-lg bg-[#F7F6F2] border border-[#DCDCD7] p-3 mb-5">
                    <Image
                      src={alliance.logo}
                      alt={alliance.name}
                      width={160}
                      height={64}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E33B12] font-semibold mb-1">
                    {alliance.tier}
                  </div>
                  <h3 className="text-base font-bold text-[#17181B] font-mono uppercase tracking-tight">
                    {alliance.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#62656B] font-normal leading-relaxed">
                    {alliance.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCDCD7] flex items-center justify-between text-[11px] font-mono text-[#62656B]">
                  <span>Reciprocal Agency</span>
                  <span className={isSelected ? "text-[#E33B12] font-semibold" : "text-[#17181B]/70"}>
                    {isSelected ? "Active Focus" : "Vetted Partner"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5-Step Multimodal Corridor Execution ── */}
      <section>
        <SectionHeader
          num="02"
          tag="Operational Flow"
          title="END-TO-END CORRIDOR."
          highlight="MILESTONE INTEGRITY."
          description="How international freight moves from initial consignor dispatch to final quayside or foundation delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {CORRIDOR_STEPS.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-xl border border-[#DCDCD7] bg-white space-y-2 hover:border-[#17181B] transition-colors shadow-xs"
            >
              <div className="w-8 h-8 rounded bg-[#E33B12]/10 border border-[#E33B12]/20 flex items-center justify-center text-xs font-mono font-bold text-[#E33B12]">
                {step.num}
              </div>
              <div className="font-bold text-[#17181B] text-sm font-mono uppercase mt-2">
                {step.stage}
              </div>
              <p className="text-xs text-[#62656B] font-normal leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
