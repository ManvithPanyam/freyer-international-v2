import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Services & Capabilities | 6 Integrated Disciplines",
  description:
    "Six integrated logistics disciplines: 1,000,000+ sq ft contract warehousing & 3PL, turnkey heavy-lift project cargo engineering, ocean FCL/LCL, international air cargo, CBIC AEO-LO customs brokerage, and marine cargo risk management.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Services" }]}
          eyebrow="Capabilities Dossier &middot; Six Disciplines"
          title="ONE INTEGRATED SYSTEM"
          subtitle="SIX LOGISTICS DISCIPLINES"
          description="Integrated physical infrastructure and multimodal operations designed to manage complex supply chains across contract warehousing, heavy-lift project cargo engineering, ocean and air corridors, customs compliance, and risk mitigation."
          visual={
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] bg-white shadow-lg group">
              <Image
                src="/images/Services.jpg"
                alt="Multimodal industrial freight operations showcasing international shipping containers and cargo infrastructure"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17181B]/80 via-[#17181B]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="bg-[#17181B]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                  Multimodal Operational Fleet &amp; Hubs
                </span>
                <span className="text-[11px] text-white/80 hidden sm:inline-block">
                  Verified Physical Assets
                </span>
              </div>
            </div>
          }
          stats={[
            { value: "1M+ SQ FT", label: "CONTRACT STORAGE", sub: "Bonded CFS & 3PL Facilities" },
            { value: "482 MT", label: "MAX HEAVY LIFT", sub: "Breakbulk Rigging & Civil Survey" },
            { value: "CBIC AEO-LO", label: "STATUTORY LICENSE", sub: "INAAQCA4076M0F243 License" },
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Pan-India Dedicated Desks" },
          ]}
        >
          {/* Quick Capability Jump Line */}
          <nav aria-label="Capabilities Index" className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-[var(--color-border-subtle)] text-xs font-mono text-[var(--color-text-secondary)]">
            <a href="#warehousing" className="hover:text-[var(--color-brand-blue)] transition-colors">01 &middot; Warehousing &amp; 3PL</a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#project-cargo" className="hover:text-[var(--color-brand-blue)] transition-colors">02 &middot; Project Cargo</a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#ocean-freight" className="hover:text-[var(--color-brand-blue)] transition-colors">03 &middot; Ocean Freight</a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#air-freight" className="hover:text-[var(--color-brand-blue)] transition-colors">04 &middot; Air Freight</a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#customs-brokerage" className="hover:text-[var(--color-brand-blue)] transition-colors">05 &middot; Customs Brokerage</a>
            <span className="text-[var(--color-border-subtle)]">&middot;</span>
            <a href="#risk-management" className="hover:text-[var(--color-brand-blue)] transition-colors">06 &middot; Risk Management</a>
          </nav>
        </PageHeader>

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <ServicesExplorer />
          <div className="mt-24 pt-16 border-t border-[var(--color-border-subtle)]">
            <ServiceFAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
