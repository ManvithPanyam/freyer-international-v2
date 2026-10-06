"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Globe, Shield } from "lucide-react";

/** Verified accreditation ribbons — high-contrast enterprise authority strip. */
const ACCREDITATIONS = [
  {
    name: "CBIC AEO-LO",
    badge: "AEO Certified",
    detail: "INAAQCA4076M0F243",
    img: "/images/aeo-logo.jpg",
    width: 68,
  },
  {
    name: "IATA Cargo",
    badge: "Approved Agent",
    detail: "Direct Carrier Authority",
    img: "/images/IATA.png",
    width: 58,
  },
  {
    name: "WCA World",
    badge: "Verified Member",
    detail: "Global Forwarding Network",
    img: "/images/wca.png",
    width: 58,
  },
  {
    name: "SCN Network",
    badge: "Security Cargo",
    detail: "Independent Elite Agents",
    img: "/images/SCN.png",
    width: 58,
  },
  {
    name: "AMTOI",
    badge: "MTO Member",
    detail: "Multimodal Transport India",
    img: "/images/amtoi.png",
    width: 48,
  },
];

export function FTRTrustBar() {
  return (
    <section
      aria-label="Official Accreditations & Statutory Certifications"
      className="relative bg-[#181A1F] border-y border-white/10 py-6 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          {/* Institutional Label */}
          <div className="flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#e1390f]" />
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white">
                Statutory Accreditations
              </div>
              <div className="text-[10px] font-mono text-white/40">
                Government & International Cargo Authorizations
              </div>
            </div>
          </div>

          {/* Credential Cards */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {ACCREDITATIONS.map((item) => (
              <div
                key={item.name}
                className="shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/20 transition-colors"
              >
                <div className="relative h-6 w-12 shrink-0 bg-white/5 rounded p-1 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-white tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-2xs font-mono px-1.5 py-0.2 rounded bg-[#e1390f]/20 text-[#e1390f] uppercase font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-2xs font-mono text-white/40">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
