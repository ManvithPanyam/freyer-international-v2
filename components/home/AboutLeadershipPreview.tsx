"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, ShieldCheck, Award, Users } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

export function AboutLeadershipPreview() {
  return (
    <section
      id="about-preview"
      aria-label="About and Leadership Preview"
      className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]"
    >
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border-subtle)] mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[var(--color-cta)] font-semibold">05</span>
              <span className="text-[var(--color-border-subtle)] font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Corporate Governance &middot; Leadership Core
              </span>
            </div>
            <h2
              className="text-[var(--color-text-primary)] font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              The leadership and principles behind the movement
            </h2>
          </div>

          <Button
            href="/about"
            variant="secondary"
            size="sm"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            className="border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] shrink-0 self-start sm:self-auto"
          >
            Meet our leadership
          </Button>
        </div>

        {/* Content Grid: Philosophy Quote + Leadership Dossier Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Customer-First Conviction Pull Quote (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] space-y-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-cta)]">
              <Quote className="w-5 h-5" />
            </div>

            <blockquote className="text-lg sm:text-2xl text-[var(--color-text-primary)] font-medium leading-relaxed tracking-tight">
              &ldquo;We don&rsquo;t just want to move your goods from point A to B, we want to understand your business and design a solution to fit your requirements.&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-secondary)]">
              <div>
                <span className="font-semibold text-[var(--color-text-primary)]">T.J. Srinivasaraj</span> &middot; Managing Director
              </div>
              <div className="text-[var(--color-cta)] font-semibold">
                MCA DIN 02336691
              </div>
            </div>
          </div>

          {/* Right Column: Board & Operational Overview Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-blue)] shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  MCA-Registered Board of Directors
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Led by experienced industry directors governing nationwide freight, heavy-lift project engineering, and customs authority.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-cta)] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Three Stakeholders Principle
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  A mutual-growth ecosystem committed equally to customer value, symbiotic carrier alliances, and empowering logistics professionals.
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[var(--color-text-secondary)]">
              <Link href="/careers" className="hover:text-[var(--color-brand-blue)] flex items-center gap-1">
                <span>Explore Careers at Freyer</span>
                <ArrowRight className="w-3 h-3 text-[var(--color-cta)]" />
              </Link>
              <span>&middot;</span>
              <Link href="/csr" className="hover:text-[var(--color-brand-blue)] flex items-center gap-1">
                <span>CSR &amp; Stewardship</span>
                <ArrowRight className="w-3 h-3 text-[var(--color-cta)]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
