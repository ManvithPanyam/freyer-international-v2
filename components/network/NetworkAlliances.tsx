"use client";

import Image from "next/image";
import { useState } from "react";
import { FreyerCard, SectionHeader } from "@/components/ui/design-system";

const ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", detail: "World's largest network of independent freight forwarders" },
  { name: "Security Cargo Network", logo: "/images/SCN.png", detail: "Vetted international alliance of independent logistics operators" },
  { name: "WPA (The Logistics Network)", logo: "/images/wpa.jpg", detail: "Global logistics network with verified financial protection" },
  { name: "FDX Logistics Network", logo: "/images/FDX.jpg", detail: "International freight logistics alliance spanning key trade lanes" },
  { name: "AMTOI", logo: "/images/amtoi.png", detail: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", detail: "Air Cargo Agents Association of India statutory body" },
];

const CORRIDOR_STEPS = [
  { num: "01", stage: "Origin Dispatch", desc: "Local pickup, warehousing and initial export customs filing" },
  { num: "02", stage: "Statutory Clearance", desc: "ICEGATE EDI documentation and AEO-LO authorized clearance" },
  { num: "03", stage: "Main Line-Haul", desc: "Direct ocean carrier or IATA scheduled air movement" },
  { num: "04", stage: "Gateway Inbound", desc: "Port destination handling, customs import clearance & de-consolidation" },
  { num: "05", stage: "Final Foundation", desc: "Hydraulic multi-axle or bonded truck delivery with digital POD" },
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
          {ALLIANCES.map((alliance, index) => (
            <FreyerCard
              key={alliance.name}
              className={`p-6 cursor-pointer transition-all ${
                active === index ? "border-[#e1390f] bg-[#0d1a30]" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <div className="relative flex h-20 items-center justify-center border-b border-white/10 pb-4 mb-4">
                <Image
                  src={alliance.logo}
                  alt={alliance.name}
                  width={150}
                  height={72}
                  className="max-h-14 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-base font-bold text-white font-mono uppercase">{alliance.name}</div>
              <div className="mt-1 text-xs text-slate-300 font-light leading-relaxed">
                {alliance.detail}
              </div>
            </FreyerCard>
          ))}
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
            <FreyerCard key={step.num} className="p-5 space-y-2">
              <div className="w-8 h-8 rounded bg-[#e1390f]/15 border border-[#e1390f]/30 flex items-center justify-center text-xs font-mono font-bold text-[#e1390f]">
                {step.num}
              </div>
              <div className="font-bold text-white text-sm font-mono uppercase mt-2">
                {step.stage}
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </FreyerCard>
          ))}
        </div>
      </section>
    </div>
  );
}
