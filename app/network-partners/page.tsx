import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GlobalMovementAtlas from "@/components/network/GlobalMovementAtlas";
import { NetworkAlliances } from "@/components/network/NetworkAlliances";
import { THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "World Movement Atlas & Global Alliances | Freyer International",
  description:
    "Explore Freyer International's interactive World Movement Atlas charting 11 verified project cargo movements across 10 countries, plus accredited global forwarder alliances including WCA, SCN, WPA, FDX, AMTOI, and ACAAI.",
  alternates: {
    canonical: "/network-partners",
  },
};

export default function NetworkPartnersPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#F8F7F4] selection:bg-[#e1390f] selection:text-white pt-20">
      <Header />
      <main>
        {/* Primary Interactive Cartographic Experience: World Movement Atlas */}
        <section aria-label="World Movement Atlas">
          <GlobalMovementAtlas />
        </section>

        {/* Global Forwarding Alliances & Accreditations */}
        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto border-t border-white/10 ${THEME_TOKENS.layout.contentGutter}`}>
          <div className="mb-12">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
              <span>Institutional Alliances &middot; Reciprocal Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
              Accredited Forwarding Networks
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Freyer anchors domestic physical operations across 10 Indian branch stations with audited memberships in premier global logistics federations.
            </p>
          </div>
          <NetworkAlliances />
        </section>
      </main>
      <Footer />
    </div>
  );
}
