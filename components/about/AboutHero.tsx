"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Users, ShieldCheck, Building2 } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";

export function AboutHero() {
  return (
    <section className="relative bg-[#121316] text-[#F8F7F4] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
      {/* Background Architectural Mesh & Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(225, 57, 15, 0.12) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)",
        }}
      />
      
      <div className={`relative z-10 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-[11px] font-mono text-white/45 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/20 select-none">/</span>
          <span className="text-[#e1390f] font-medium">About &amp; Leadership</span>
        </nav>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-slate-300 font-medium">
            Human &amp; Institutional Core &middot; Freyer International
          </span>
        </div>

        {/* Monumental Display Title */}
        <div className="max-w-5xl">
          <h1
            className="text-white font-black tracking-[-0.03em] leading-[0.90] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(3.4rem, 8vw, 7.2rem)",
            }}
          >
            THE PEOPLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/60">
              BEHIND THE MOVEMENT
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            Logistics is not just heavy machinery and container vessels. It is the calculated decisions, 
            statutory licenses, and operational vigilance of people who engineer movements under rigorous physical reality.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <nav aria-label="About Page Index" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/60">
            <a href="#featured-leader" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>01 &middot; Managing Director</span>
            </a>
            <span className="text-white/20">&middot;</span>
            <a href="#board-of-directors" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>02 &middot; Board of Directors</span>
            </a>
            <span className="text-white/20">&middot;</span>
            <a href="#operational-leadership" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>03 &middot; Operations Desks</span>
            </a>
            <span className="text-white/20">&middot;</span>
            <a href="#company-philosophy" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>04 &middot; Philosophy &amp; Mission</span>
            </a>
            <span className="text-white/20">&middot;</span>
            <a href="#stakeholder-pillars" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>05 &middot; Three Stakeholders</span>
            </a>
            <span className="text-white/20">&middot;</span>
            <a href="#credentials-awards" className="hover:text-[#e1390f] transition-colors flex items-center gap-1.5">
              <span>06 &middot; Accreditations</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#featured-leader"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white bg-white/[0.05] hover:bg-white/[0.10] px-4 py-2 rounded border border-white/10 transition-colors"
            >
              <span>Explore Roster</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#e1390f]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
