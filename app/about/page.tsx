import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutLeadershipClient } from "@/components/about/AboutLeadershipClient";

export const metadata: Metadata = {
  title: "About Freyer | Leadership, Governance & Institutional Dossier",
  description:
    "Explore the corporate governance, Board of Directors, MCA-verified leadership, CBIC AEO-LO certification, and operating philosophy of Freyer International Logistics.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      <Header />
      <main>
        <AboutLeadershipClient />
      </main>
      <Footer />
    </div>
  );
}
