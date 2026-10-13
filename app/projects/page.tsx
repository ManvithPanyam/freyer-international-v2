import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import projectsData from "@/freyer-forensics-v2/content/projects.json";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { ProjectsImmersiveHero } from "@/components/projects/ProjectsImmersiveHero";
import { ProjectsRegister, Project } from "@/components/projects/ProjectsRegister";
import { ArrowRight, Compass, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects in Motion | 11 Documented Industrial Movements | Freyer",
  description:
    "An editorial industrial portfolio of 11 documented heavy-lift, breakbulk, and multimodal project cargo shipments executed by Freyer International Logistics, including the 482 MT Shanghai to Jebel Ali breakbulk shipment and 27-meter Venice boom crane transit.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      <Header />
      <main>
        {/* ── 01. IMMERSIVE INDUSTRIAL HERO & FEATURED SHIPMENT ── */}
        {/* Unifies the editorial cover and featured cargo experience into one seamless opening */}
        <ProjectsImmersiveHero />

        {/* ── 02. THE PROJECT REGISTER: ELEVEN DOCUMENTED MOVEMENTS ── */}
        {/* Asymmetrical editorial gallery inspired by BBC Chartering & high-end portfolios */}
        <section
          id="register"
          aria-label="The Project Register — Documented Cargo Archive"
          className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}
        >
          <ProjectsRegister initialProjects={projectsData as unknown as Project[]} />
        </section>

        {/* ── 03. CARTOGRAPHIC TRANSITION: WORLD MOVEMENT ATLAS ── */}
        {/* Connects individual project case files to the global geographic trade lanes */}
        <section
          aria-label="Transition to World Movement Atlas"
          className="bg-white border-t border-[var(--color-border-subtle)] py-20 sm:py-28"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-cta)] font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Cartographic Intelligence</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-tight">
                  FOLLOW THE MOVEMENT. <br />
                  <span className="text-[#3b82f6] font-light italic text-[0.88em]">
                    WORLD MOVEMENT ATLAS
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
                  Trace the verified geographic trade corridors, transshipment seaports, and ocean lanes charting these 11 documented cargo movements across 10 international jurisdictions.
                </p>
              </div>

              <Link
                href="/network-partners"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-cta)] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md group shrink-0"
              >
                <span>Launch World Movement Atlas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 04. HEAVY-LIFT ENGINEERING DESK ENQUIRY CTA ── */}
        <section
          aria-label="Project Cargo Enquiry CTA"
          className="bg-[#111317] text-[#F7F6F2] py-20 sm:py-28 border-t border-white/10"
        >
          <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[var(--color-cta)] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-cta)]" />
                  <span>PROJECT CARGO &bull; HEAVY-LIFT ENGINEERING DESK</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)] leading-tight">
                  PLAN AN ENGINEERED MOVEMENT.
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Engage Freyer&apos;s project cargo controllers for heavy-lift crane rigging calculations, civil route clearances, ocean breakbulk charters, or bonded container vessel stowage.
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
