"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Users, ShieldCheck, Building2 } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative bg-[var(--color-bg-base)] text-[var(--color-text-primary)] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[var(--color-border-subtle)] overflow-hidden">
      {/* Background Architectural Mesh & Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(202, 51, 13, 0.05) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(33, 68, 149, 0.03) 0%, transparent 60%)",
        }}
      />
      
      <div className={`relative z-10 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-[11px] font-mono text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:text-[var(--color-brand-blue)] transition-colors">
            Home
          </Link>
          <span className="text-[var(--color-border-subtle)] select-none">/</span>
          <span className="text-[var(--color-cta)] font-medium">About &amp; Leadership</span>
        </nav>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] mb-8 shadow-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[var(--color-cta)] font-medium">
            Human &amp; Institutional Core &middot; Freyer International
          </span>
        </div>

        {/* Monumental Display Title */}
        <div className="max-w-5xl">
          <h1
            className="text-[var(--color-text-primary)] font-black tracking-[-0.03em] leading-[0.90] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(3.4rem, 8vw, 7.2rem)",
            }}
          >
            THE PEOPLE <br />
            <span className="text-[var(--color-brand-blue)] font-light italic">
              BEHIND THE MOVEMENT
            </span>
          </h1>

          <p className="mt-8 text-[var(--color-text-secondary)] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
            Logistics is not just heavy machinery and container vessels. It is the calculated decisions, 
            statutory licenses, and operational vigilance of people who engineer movements under rigorous physical reality.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-6">
          <nav aria-label="About Page Index" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[var(--color-text-secondary)]">
            <a href="#featured-leader" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>01 &middot; Managing Director</span>
            </a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#board-of-directors" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>02 &middot; Board of Directors</span>
            </a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#operational-leadership" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>03 &middot; Operations Desks</span>
            </a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#company-philosophy" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>04 &middot; Philosophy &amp; Mission</span>
            </a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#stakeholder-pillars" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>05 &middot; Three Stakeholders</span>
            </a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#credentials-awards" className="hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1.5">
              <span>06 &middot; Accreditations</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="#featured-leader"
              variant="secondary"
              size="sm"
              icon={<ArrowDown className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />}
              className="border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white"
            >
              Explore Roster
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
