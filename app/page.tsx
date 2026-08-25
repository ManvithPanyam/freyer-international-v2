import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesIndex } from "@/components/home/CapabilitiesIndex";
import { ProjectCargoStory } from "@/components/home/ProjectCargoStory";
import { NetworkGrid } from "@/components/home/NetworkGrid";
import { RfqProduct } from "@/components/home/RfqProduct";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07152b] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesIndex />
        <ProjectCargoStory />
        <NetworkGrid />
        <RfqProduct />
      </main>
      <Footer />
    </div>
  );
}
