import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import projectsData from "@/freyer-forensics-v2/content/projects.json";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";
import { ProjectsCargoHeroStage } from "@/components/projects/ProjectsCargoHeroStage";
import { ArrowRight, Compass, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Cargo & Documented Movements | 11 Engineering Records",
  description:
    "Documented heavy-lift and breakbulk project cargo movements engineered by Freyer International Logistics, including the 482 MT Shanghai to Jebel Ali breakbulk shipment and 27-meter Venice boom crane transit.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      <Header />
      <main>
        {/* ── SECTION 1: EDITORIAL INTRODUCTION ── */}
        <PageHeader
          breadcrumbs={[{ label: "Projects" }]}
          eyebrow="DOCUMENTED INTERNATIONAL MOVEMENTS"
          title="PROJECT CARGO."
          subtitle="DOCUMENTED MOVEMENTS."
          description="A verifiable engineering archive of 11 documented international heavy-lift and multimodal project cargo consignments, presenting original commercial records, authentic field photography, and physical transport parameters."
        />

        {/* ── SECTION 2: THE FEATURED CARGO EXPERIENCE (CINEMATIC INDUSTRIAL CENTERPIECE) ── */}
        <section
          aria-label="Featured Cargo Movements in Motion"
          className="relative bg-[#0c0e12] py-10 sm:py-16 border-b border-white/10"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <ProjectsCargoHeroStage />
          </div>
        </section>

        {/* ── SECTION 3: DOCUMENTED PROJECT EVIDENCE (RESTRAINED TYPOGRAPHIC STRIP) ── */}
        <section
          aria-label="Documented Project Evidence"
          className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border-subtle)] py-12 sm:py-16"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <div className="flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cta)]" />
              <span>EMPIRICAL SOURCE-GROUNDED EVIDENCE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
              {/* Stat 1: 11 Documented Projects */}
              <div className="space-y-2 border-l-2 border-[var(--color-cta)] pl-5">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-none tracking-tight"
                >
                  11
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-text-primary)] font-bold">
                  DOCUMENTED PROJECT RECORDS
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                  Complete technical case studies backed by commercial shipping bills, stowage notes, and original quayside photography.
                </p>
              </div>

              {/* Stat 2: 482 MT Shanghai to Jebel Ali */}
              <div className="space-y-2 border-l-2 border-[var(--color-brand-blue)] pl-5">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-brand-blue)] font-[family-name:var(--font-barlow-condensed)] leading-none tracking-tight"
                >
                  482 MT
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-text-primary)] font-bold">
                  TOTAL BREAKBULK SHIPMENT WEIGHT
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                  Shanghai to Jebel Ali ocean breakbulk consignment: 29 packages totaling 796 CBM stowed under-deck.
                </p>
              </div>

              {/* Stat 3: 2,700 CM Longest Consignment */}
              <div className="space-y-2 border-l-2 border-[var(--color-border-subtle)] pl-5">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-none tracking-tight"
                >
                  2,700 CM
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-text-primary)] font-bold">
                  LONGEST CARGO CONSIGNMENT
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                  Venice to Mundra 27-meter lattice boom crane assembly (37,600 kg) under special road permit and container vessel BBK deck stowage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: THE COMPLETE PROJECT ARCHIVE ── */}
        <section
          id="archive"
          aria-label="Complete Project Archive"
          className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}
        >
          <div className="mb-10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cta)]" />
              <span>THE ARCHIVE &bull; ELEVEN DOCUMENTED MOVEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-none">
              ELEVEN DOCUMENTED MOVEMENTS.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] max-w-2xl font-light">
              Filter by transport mode or search by port and consignment details. Every record is derived directly from authentic project documentation.
            </p>
          </div>

          <ProjectsExplorer initialProjects={projectsData} />
        </section>

        {/* ── SECTION 5: CONNECT THE PROJECTS TO GLOBAL MOVEMENTS (ATLAS CTA) ── */}
        <section
          aria-label="Transition to World Movement Atlas"
          className="bg-[var(--color-bg-base)] border-t border-[var(--color-border-subtle)] py-20 sm:py-24"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-cta)] font-semibold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Cartographic Intelligence</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-tight">
                  FOLLOW THE MOVEMENT. <br />
                  <span className="text-[var(--color-brand-blue)] font-light italic text-[0.88em]">
                    WORLD MOVEMENT ATLAS
                  </span>
                </h3>
                <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
                  Trace the exact geographic trade corridors, transshipment hubs, and international maritime passages connecting India, China, the UAE, Europe, and the Far East.
                </p>
              </div>

              <Link
                href="/network-partners"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-cta)] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md group shrink-0"
              >
                <span>Launch World Movement Atlas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: CONTACT & PROJECT CARGO ENQUIRY CTA ── */}
        <section
          aria-label="Project Cargo Enquiry CTA"
          className="bg-[#17181B] text-[#F7F6F2] py-20 sm:py-24 border-t border-white/10"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-cta)] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-cta)]" />
                  <span>PROJECT CARGO &bull; HEAVY-LIFT ENGINEERING DESK</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)] leading-tight">
                  PLAN AN ENGINEERED MOVEMENT.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Engage Freyer&apos;s project cargo controllers for heavy-lift rigging calculations, civil route clearances, ocean breakbulk charters, or bonded container vessel stowage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-cta)] hover:bg-[#c42f0b] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-[var(--color-cta)]/20"
                >
                  <span>Submit Heavy-Lift RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+914442111111"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--color-cta)]" />
                  <span>Contact Operations Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
