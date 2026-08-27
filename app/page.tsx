import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/home/editorial/HomeHero";
import { HomeScale } from "@/components/home/editorial/HomeScale";
import { HomeProofMovement } from "@/components/home/editorial/HomeProofMovement";
import { HomeSupplyChainJourney } from "@/components/home/editorial/HomeSupplyChainJourney";
import { HomeDisciplinesSplit } from "@/components/home/editorial/HomeDisciplinesSplit";
import { HomeTrustWall } from "@/components/home/editorial/HomeTrustWall";
import { HomeCommercialCTA } from "@/components/home/editorial/HomeCommercialCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#03060f] text-white selection:bg-[#ff6b4a] selection:text-white font-sans antialiased">
      <Header />
      <main className="relative">
        {/* Section 01 — Hook: Full-Screen Hero */}
        <HomeHero />

        {/* Section 02 — Scale: Enormous Fact (190+) */}
        <HomeScale />

        {/* Section 03 — Proof: Documented Real Movement */}
        <HomeProofMovement />

        {/* Section 04 — Intelligence: Supply Chain Sticky Journey */}
        <HomeSupplyChainJourney />

        {/* Section 05 — Capabilities: Six Disciplines Split-Screen */}
        <HomeDisciplinesSplit />

        {/* Section 06 — Trust: Institutional Identity Wall */}
        <HomeTrustWall />

        {/* Section 07 — CTA: Commercial Conversion */}
        <HomeCommercialCTA />
      </main>
      <Footer />
    </div>
  );
}
