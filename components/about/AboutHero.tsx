import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Users, ShieldCheck, Building2 } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative bg-[var(--color-bg-base)] text-[var(--color-text-primary)] pt-32 sm:pt-36 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)] overflow-hidden">
      {/* Background Architectural Mesh & Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(202, 51, 13, 0.05) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(33, 68, 149, 0.03) 0%, transparent 60%)",
        }}
      />
      
      <div className={`relative z-10 w-full max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:text-[var(--color-brand-blue)] transition-colors">
            Home
          </Link>
          <span className="text-[var(--color-border-subtle)] select-none">/</span>
          <span className="text-[var(--color-cta)] font-semibold">About &amp; Leadership</span>
        </nav>

        {/* Eyebrow Kicker */}
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--color-cta)] font-semibold">
            Human &amp; Institutional Core &middot; Freyer International
          </span>
        </div>

        {/* Split Editorial Roster Layout: Left Headline / Right Authentic Team Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h1
              className="text-[var(--color-text-primary)] font-black tracking-[-0.02em] leading-[0.98] uppercase text-balance break-words"
              style={{
                fontFamily: THEME_TOKENS.typography.fontDisplay,
                fontSize: "clamp(2.4rem, 4.6vw, 4.4rem)",
              }}
            >
              THE PEOPLE <br />
              <span className="text-[var(--color-brand-blue)] font-light italic text-[0.88em] leading-tight tracking-normal block mt-1.5 sm:mt-2">
                BEHIND THE MOVEMENT
              </span>
            </h1>

            <p className="mt-6 text-[var(--color-text-secondary)] text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Logistics is not just heavy machinery and container vessels. It is the calculated decisions, 
              statutory licenses, and operational vigilance of people who engineer movements under rigorous physical reality.
            </p>
          </div>

          {/* Right Column: Authentic Institutional Photography */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] bg-white shadow-lg group">
              <Image
                src="/images/About.jpg"
                alt="Freyer International operational team and corporate headquarters directors"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17181B]/80 via-[#17181B]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="bg-[#17181B]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                  Board &amp; Operational Leadership
                </span>
                <span className="text-[11px] text-white/80 hidden sm:inline-block">
                  MCA Verified Governance
                </span>
              </div>
            </div>
          </div>
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
