import type { Metadata } from "next";
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
    <div className="min-h-screen bg-[#121316] text-[#F8F7F4] selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Services" }]}
          eyebrow="Capabilities Dossier &middot; Six Disciplines"
          title="ONE INTEGRATED SYSTEM"
          subtitle="SIX LOGISTICS DISCIPLINES"
          description="Integrated physical infrastructure and multimodal operations designed to manage complex supply chains across contract warehousing, heavy-lift project cargo engineering, ocean and air corridors, customs compliance, and risk mitigation."
          stats={[
            { value: "1M+ SQ FT", label: "CONTRACT STORAGE", sub: "Bonded CFS & 3PL Facilities" },
            { value: "482 MT", label: "MAX HEAVY LIFT", sub: "Breakbulk Rigging & Civil Survey" },
            { value: "CBIC AEO-LO", label: "TIER 2 VERIFIED", sub: "INAAQCA4076M0F243 License" },
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Pan-India Dedicated Desks" },
          ]}
        >
          {/* Quick Capability Jump Line */}
          <nav aria-label="Capabilities Index" className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/10 text-xs font-mono text-white/60">
            <a href="#warehousing" className="hover:text-[#e1390f] transition-colors">01 &middot; Warehousing &amp; 3PL</a>
            <span className="text-white/20">&middot;</span>
            <a href="#project-cargo" className="hover:text-[#e1390f] transition-colors">02 &middot; Project Cargo</a>
            <span className="text-white/20">&middot;</span>
            <a href="#ocean-freight" className="hover:text-[#e1390f] transition-colors">03 &middot; Ocean Freight</a>
            <span className="text-white/20">&middot;</span>
            <a href="#air-freight" className="hover:text-[#e1390f] transition-colors">04 &middot; Air Freight</a>
            <span className="text-white/20">&middot;</span>
            <a href="#customs-brokerage" className="hover:text-[#e1390f] transition-colors">05 &middot; Customs Brokerage</a>
            <span className="text-white/20">&middot;</span>
            <a href="#risk-management" className="hover:text-[#e1390f] transition-colors">06 &middot; Risk Management</a>
          </nav>
        </PageHeader>

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <ServicesExplorer />
          <div className="mt-24 pt-16 border-t border-white/10">
            <ServiceFAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
