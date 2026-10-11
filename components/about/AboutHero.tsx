"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Users, ShieldCheck, Building2 } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative bg-[#F7F6F2] text-[#17181B] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[#DCDCD7] overflow-hidden">
      {/* Background Architectural Mesh & Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(227, 59, 18, 0.06) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(23, 24, 27, 0.03) 0%, transparent 60%)",
        }}
      />
      
      <div className={`relative z-10 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-[11px] font-mono text-[#62656B] mb-8">
          <Link href="/" className="hover:text-[#17181B] transition-colors">
            Home
          </Link>
          <span className="text-[#DCDCD7] select-none">/</span>
          <span className="text-[#E33B12] font-medium">About &amp; Leadership</span>
        </nav>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DCDCD7] mb-8 shadow-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E33B12] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E33B12]" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#62656B] font-medium">
            Human &amp; Institutional Core &middot; Freyer International
          </span>
        </div>

        {/* Monumental Display Title */}
        <div className="max-w-5xl">
          <h1
            className="text-[#17181B] font-black tracking-[-0.03em] leading-[0.90] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(3.4rem, 8vw, 7.2rem)",
            }}
          >
            THE PEOPLE <br />
            <span className="text-[#17181B]">
              BEHIND THE MOVEMENT
            </span>
          </h1>

          <p className="mt-8 text-[#62656B] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
            Logistics is not just heavy machinery and container vessels. It is the calculated decisions, 
            statutory licenses, and operational vigilance of people who engineer movements under rigorous physical reality.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mt-12 pt-8 border-t border-[#DCDCD7] flex flex-wrap items-center justify-between gap-6">
          <nav aria-label="About Page Index" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#62656B]">
            <a href="#featured-leader" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>01 &middot; Managing Director</span>
            </a>
            <span className="text-[#DCDCD7]">&middot;</span>
            <a href="#board-of-directors" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>02 &middot; Board of Directors</span>
            </a>
            <span className="text-[#DCDCD7]">&middot;</span>
            <a href="#operational-leadership" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>03 &middot; Operations Desks</span>
            </a>
            <span className="text-[#DCDCD7]">&middot;</span>
            <a href="#company-philosophy" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>04 &middot; Philosophy &amp; Mission</span>
            </a>
            <span className="text-[#DCDCD7]">&middot;</span>
            <a href="#stakeholder-pillars" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>05 &middot; Three Stakeholders</span>
            </a>
            <span className="text-[#DCDCD7]">&middot;</span>
            <a href="#credentials-awards" className="hover:text-[#E33B12] transition-colors flex items-center gap-1.5">
              <span>06 &middot; Accreditations</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="#featured-leader"
              variant="secondary"
              size="sm"
              icon={<ArrowDown className="w-3.5 h-3.5 text-[#E33B12]" />}
            >
              Explore Roster
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
