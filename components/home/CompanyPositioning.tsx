"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, Building2, Anchor } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

export function CompanyPositioning() {
  return (
    <section
      id="company-positioning"
      aria-label="Freyer International Corporate Positioning"
      className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]"
    >
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Strategic Positioning Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] text-2xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cta)]" />
              Corporate Positioning &middot; Established Authority
            </div>

            <h2
              className="text-[var(--color-text-primary)] font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Architecting critical freight movement across sea, air, and overland gateways from India.
            </h2>

            <div className="space-y-4 text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
              <p>
                Headquartered in Chennai with a direct physical presence spanning 10 key maritime, air, and inland industrial hubs, Freyer International Logistics delivers end-to-end multimodal solutions for complex industrial supply chains.
              </p>
              <p>
                As a licensed CBIC AEO-LO customs broker and approved IATA cargo agent, we combine deep regulatory compliance with heavy-lift breakbulk engineering and contracted tier-1 global ocean liner allocations. We ensure total cargo integrity without third-party franchise friction.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button
                href="/about"
                variant="secondary"
                size="sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                className="border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)]"
              >
                Learn about Freyer
              </Button>
            </div>
          </div>

          {/* Right Column: Grounded Core Metrics & Operating Tenets (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tenet 1 */}
            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-cta)]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                Direct Statutory Authority
              </div>
              <div className="text-2xs text-[var(--color-text-secondary)] leading-relaxed">
                CBIC AEO-LO (License INAAQCA4076M0F243) and IATA accredited for priority customs clearance.
              </div>
            </div>

            {/* Tenet 2 */}
            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-blue)]">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                100% Owned Footprint
              </div>
              <div className="text-2xs text-[var(--color-text-secondary)] leading-relaxed">
                10 fully staffed branch stations across Chennai HQ, Mumbai, Delhi, Bengaluru, Vizag, and Gujarat.
              </div>
            </div>

            {/* Tenet 3 */}
            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-blue)]">
                <Anchor className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                Heavy-Lift Engineering
              </div>
              <div className="text-2xs text-[var(--color-text-secondary)] leading-relaxed">
                Engineered stowage, out-of-gauge (OOG) trailers, and a documented 482 MT single-lift record.
              </div>
            </div>

            {/* Tenet 4 */}
            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-cta)]">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                Global Reciprocal Alliances
              </div>
              <div className="text-2xs text-[var(--color-text-secondary)] leading-relaxed">
                Audited partner networks across WCA World, SCN, WPA, FDX, AMTOI, and ACAAI federations.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
