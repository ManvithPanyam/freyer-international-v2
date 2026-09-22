import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutExplorer } from "@/components/about/AboutExplorer";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "About Freyer | Corporate Overview, Credentials & Governance",
  description:
    "Explore the corporate story, CBIC AEO-LO certification, IATA accreditation, and nationwide forwarding governance of Freyer International Logistics.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "About" }]}
          eyebrow="Corporate Overview &amp; Compliance Dossier"
          title="ENGINEERED FOR COMMERCE"
          subtitle="GROUNDED IN REGULATORY INTEGRITY"
          description="From our registered headquarters in Bengaluru and primary ocean seaport hub in Chennai, Freyer International operates across 10 branch stations in India—combining CBIC AEO-LO Tier 2 authority, IATA cargo accreditation, and vetted global forwarding alliances."
          stats={[
            { value: "CBIC AEO-LO", label: "TIER 2 VERIFIED", sub: "INAAQCA4076M0F243" },
            { value: "IATA AGENT", label: "CODE 14-3-4852", sub: "Direct Apron Authority" },
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Chennai · Mumbai · Delhi" },
            { value: "6 ALLIANCES", label: "GLOBAL FORWARDING", sub: "WCA · SCN · WPA · FDX" },
          ]}
        >
          {/* Section Jump Anchors */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-xs font-mono border-t border-white/10 text-white/60">
            <a href="#story" className="hover:text-[#e1390f] transition-colors">01 &middot; Enterprise Story</a>
            <span className="text-white/20">&middot;</span>
            <a href="#credentials" className="hover:text-[#e1390f] transition-colors">02 &middot; Statutory Licenses</a>
            <span className="text-white/20">&middot;</span>
            <a href="#leadership" className="hover:text-[#e1390f] transition-colors">03 &middot; Leadership</a>
            <span className="text-white/20">&middot;</span>
            <a href="#footprint" className="hover:text-[#e1390f] transition-colors">04 &middot; Footprint</a>
            <span className="text-white/20">&middot;</span>
            <a href="#alliances" className="hover:text-[#e1390f] transition-colors">05 &middot; Alliances</a>
          </div>
        </PageHeader>

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <AboutExplorer />
        </section>
      </main>
      <Footer />
    </div>
  );
}
