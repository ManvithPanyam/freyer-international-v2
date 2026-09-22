import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutLeadershipClient } from "./AboutLeadershipClient";

export const metadata: Metadata = {
  title: "About & Leadership | Freyer International Logistics",
  description:
    "The people, philosophy, and institutional authority behind Freyer International Logistics. Verified Board of Directors, operational leadership, and corporate governance.",
  alternates: {
    canonical: "/experiments/about-leadership",
  },
};

export default function AboutLeadershipPage() {
  return (
    <div className="min-h-screen bg-[#121316] text-[#F8F7F4] selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <AboutLeadershipClient />
      </main>
      <Footer />
    </div>
  );
}
