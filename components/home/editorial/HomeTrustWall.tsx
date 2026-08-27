"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const TRUST_MARKS = [
  {
    name: "AEO Tier-2",
    issuer: "CBIC · Ministry of Finance",
    type: "Sovereign Customs Authority",
    image: "/images/aeo-logo.jpg",
  },
  {
    name: "IATA Cargo Agent",
    issuer: "International Air Transport Assoc.",
    type: "Regulated Air Cargo",
    image: "/images/IATA.png",
  },
  {
    name: "WCA World",
    issuer: "ID: 110488",
    type: "190+ Country Forwarding Alliance",
    image: "/images/wca.png",
  },
  {
    name: "Security Cargo Network",
    issuer: "SCN Member",
    type: "Vetted International Logistics",
    image: "/images/SCN.png",
  },
  {
    name: "Worldwide Partners Alliance",
    issuer: "WPA Certified",
    type: "Global Freight Network",
    image: "/images/wpa.jpg",
  },
  {
    name: "AMTOI & ACAAI",
    issuer: "Multimodal & Air Cargo",
    type: "National Industry Governance",
    image: "/images/amtoi.png",
  },
];

export function HomeTrustWall() {
  return (
    <section className="relative w-full bg-[#050b18] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-[1560px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.35em] uppercase font-bold block mb-3">
              Institutional Trust &amp; Governance
            </span>
            <h2
              className="font-black tracking-tight text-white leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
            >
              Trusted to move
              <br />
              <span className="text-slate-400 font-light italic">
                what matters.
              </span>
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-[#ff6b4a] transition-colors self-start md:self-auto"
          >
            <span>View Verified Credentials</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Institutional Mark Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center pt-6">
          {TRUST_MARKS.map((mark) => (
            <div
              key={mark.name}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff6b4a]/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[190px]"
            >
              <div className="relative h-16 w-32 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={mark.image}
                  alt={mark.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              <div className="pt-4 border-t border-white/10 w-full space-y-0.5">
                <div className="text-xs font-bold text-white tracking-tight">
                  {mark.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {mark.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
