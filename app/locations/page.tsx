import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MinimalLocations } from "@/components/locations/MinimalLocations";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "10 Branch Stations Across India | Network Map",
  description:
    "Direct physical infrastructure and CBIC AEO-LO customs authority across 10 branch stations in India: Chennai HQ, Chennai Airport, Bengaluru, Delhi NCR, Mumbai, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, and Ahmedabad.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Locations" }]}
          eyebrow="Physical Domestic Footprint &middot; 10 Verified Stations"
          title="10 STATIONS ACROSS INDIA"
          subtitle="DIRECT GATEWAYS. UNIFIED GOVERNANCE."
          description="A dedicated physical network of 10 company branch stations operating at key maritime seaports, air cargo complexes, and manufacturing hubs, connecting domestic supply chains directly to international trade lanes."
          stats={[
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Direct Pan-India Presence" },
            { value: "CBIC AEO-LO", label: "TIER 2 VERIFIED", sub: "INAAQCA4076M0F243 License" },
            { value: "6 SEAPORTS", label: "DIRECT LIAISON", sub: "CITPL · JNPT · VOC · Vizag" },
            { value: "100%", label: "COMPANY OPERATED", sub: "Zero Third-Party Franchises" },
          ]}
        />

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <MinimalLocations />
        </section>
      </main>
      <Footer />
    </div>
  );
}
