"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { RfqProduct } from "@/components/home/RfqProduct";

export function HomeCommercialCTA() {
  return (
    <section id="quote" className="relative w-full bg-[#02050c] text-white py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto space-y-16">
        {/* Narrative Culmination Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.4em] uppercase font-bold block">
              Initiate Movement · Instant Feasibility &amp; Rates
            </span>
            <h2
              className="font-black tracking-tight text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
            >
              TELL US WHAT
              <br />
              <span className="text-[#ff6b4a]">NEEDS MOVING.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              Direct multimodal rate computation and route clearance review from Freyer operational desks in Chennai, Bengaluru, Mumbai, and New Delhi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-full transition-all"
            >
              <span>Explore All 6 Disciplines</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Natural Culmination Configurator */}
        <div className="pt-2">
          <RfqProduct />
        </div>

        {/* Institutional Contact Desks */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#ff6b4a]" />
            <span>10 Operating Hubs Across India</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#ff6b4a]" />
            <span>+91 44 4319 1919 / 080 4120 0300</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#ff6b4a]" />
            <span>info@freyerinternational.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
