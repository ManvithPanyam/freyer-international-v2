import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NetworkAlliances } from "@/components/network/NetworkAlliances";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Global Alliances & Network Partners | Worldwide Corridors",
  description:
    "Explore Freyer International Logistics' accredited global forwarder alliances including WCA World, Security Cargo Network (SCN), WPA, FDX Logistics Network, AMTOI, and ACAAI.",
  alternates: {
    canonical: "/network-partners",
  },
};

export default function NetworkPartnersPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Network Partners" }]}
          eyebrow="International Forwarding Alliances &middot; 6 Networks"
          title="INDIA ON THE GROUND"
          subtitle="GLOBAL THROUGH TRUSTED NETWORKS"
          description="Freyer combines dedicated domestic operations across 10 branch stations in India with established reciprocal agency relationships across verified global forwarder alliances."
          stats={[
            { value: "6 NETWORKS", label: "GLOBAL ALLIANCES", sub: "Vetted Reciprocal Agency" },
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Direct Pan-India Presence" },
            { value: "AMTOI", label: "MULTIMODAL COUNCIL", sub: "Active Registered Operator" },
            { value: "ACAAI", label: "AIR CARGO AGENTS", sub: "Indian Aviation Association" },
          ]}
        />

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <NetworkAlliances />
        </section>
      </main>
      <Footer />
    </div>
  );
}
