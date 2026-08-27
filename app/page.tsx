import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroStatement } from "@/components/home/IntroStatement";
import { CapabilitiesIndex } from "@/components/home/CapabilitiesIndex";
import { ProjectCargoStory } from "@/components/home/ProjectCargoStory";
import { AccreditationsProof } from "@/components/home/AccreditationsProof";
import { NetworkInteractive } from "@/components/home/NetworkInteractive";
import { RfqProduct } from "@/components/home/RfqProduct";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b2144] selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <IntroStatement />
        <CapabilitiesIndex />
        <ProjectCargoStory />
        <AccreditationsProof />
        <NetworkInteractive />
        <RfqProduct />
      </main>
      <Footer />
    </div>
  );
}
