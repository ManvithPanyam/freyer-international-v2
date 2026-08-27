"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const INSTITUTIONS = [
  {
    name: "AEO Tier-2",
    issuer: "CBIC · Sovereign Customs Authority",
    image: "/images/aeo-logo.jpg",
  },
  {
    name: "IATA Cargo Agent",
    issuer: "Regulated Global Aviation Forwarder",
    image: "/images/IATA.png",
  },
  {
    name: "WCA World",
    issuer: "190+ Country Forwarding Alliance",
    image: "/images/wca.png",
  },
  {
    name: "Security Cargo Network",
    issuer: "Vetted International Logistics Alliance",
    image: "/images/SCN.png",
  },
  {
    name: "Worldwide Partners Alliance",
    issuer: "Global Freight Forwarding Network",
    image: "/images/wpa.jpg",
  },
  {
    name: "AMTOI & ACAAI",
    issuer: "Multimodal & Air Cargo Governance",
    image: "/images/amtoi.png",
  },
];

export function HomeTrustWall() {
  return (
    <section className="relative w-full bg-[#02050c] text-white py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto space-y-16">
        {/* Monumental Institutional Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.4em] uppercase font-bold block">
              Governance &amp; Accreditation
            </span>
            <h2
              className="font-black tracking-tight text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              TRUSTED AT
              <br />
              <span className="text-slate-400 font-light italic">
                EVERY BORDER.
              </span>
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-[#ff6b4a] transition-colors self-start lg:self-auto"
          >
            <span>View Verified Certificates</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Monumental Institutional Marks Wall (Zero Cards, Pure Space) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 items-center pt-8 border-t border-white/10">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="group flex flex-col items-center text-center space-y-4 py-4 transition-all duration-300"
            >
              <div className="relative h-16 w-32 flex items-center justify-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white tracking-tight">
                  {inst.name}
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  {inst.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
