import React from "react";
import Image from "next/image";

const ACCREDITATIONS = [
  { name: "AEO Certified", subtitle: "Indian Customs", logo: "/images/AEO.jpg" },
  { name: "IATA Cargo Agent", subtitle: "Air Transport", logo: "/images/IATA.png" },
  { name: "WCA World", subtitle: "Global Network", logo: "/images/wca.png" },
  { name: "Security Cargo Network", subtitle: "SCN Partner", logo: "/images/SCN.png" },
  { name: "AMTOI", subtitle: "Multimodal Transport", logo: "/images/amtoi.png" },
  { name: "ACAAI", subtitle: "Air Cargo Agents", logo: "/images/Acaai.jpg" },
];

export function AccreditationsProof() {
  return (
    <section className="py-16 sm:py-20 bg-[#f8f9fa] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[#c42f0b] text-xs font-mono tracking-widest uppercase font-semibold">
            Institutional Accreditations
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b2144] mt-1">
            Certified Compliance & Global Network Alliances
          </h2>
        </div>

        {/* Real Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {ACCREDITATIONS.map((acc) => (
            <div
              key={acc.name}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col items-center justify-center text-center h-28 space-y-2 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-20 h-10">
                <Image
                  src={acc.logo}
                  alt={acc.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <span className="text-[11px] font-semibold text-[#0b2144] leading-none">
                {acc.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
