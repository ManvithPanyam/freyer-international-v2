import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutExplorer } from "@/components/about/AboutExplorer";

export const metadata: Metadata = {
  title: "About Freyer International Logistics | Credentials, Story & Governance",
  description:
    "Explore the corporate history, Indian Customs AEO Tier-2 certification, IATA accreditation, Great Place to Work certification, and leadership of Freyer International Logistics.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        {/* ── Page Header: Quiet, Confident Hero ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">About</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Corporate Overview &amp; Compliance
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
              Engineered for global commerce.
              <br />
              <span className="text-slate-500 font-light italic">
                Grounded in compliance.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 leading-relaxed max-w-3xl">
              From our registered headquarters in Bengaluru and primary seaport hub in Chennai, Freyer International operates across 10 strategic hubs in India—combining AEO Tier-2 customs authority, IATA air cargo certification, and audited global forwarding alliances.
            </p>

            {/* Section Navigation Line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm font-mono border-b border-slate-200 pb-4 text-slate-500">
              <a href="#story" className="hover:text-[#c42f0b] transition-colors font-medium">Story</a>
              <span>&middot;</span>
              <a href="#credentials" className="hover:text-[#c42f0b] transition-colors font-medium">Credentials</a>
              <span>&middot;</span>
              <a href="#people" className="hover:text-[#c42f0b] transition-colors font-medium">People</a>
              <span>&middot;</span>
              <a href="#footprint" className="hover:text-[#c42f0b] transition-colors font-medium">Footprint</a>
              <span>&middot;</span>
              <a href="#alliances" className="hover:text-[#c42f0b] transition-colors font-medium">Alliances</a>
              <span>&middot;</span>
              <a href="#csr" className="hover:text-[#c42f0b] transition-colors font-medium">CSR</a>
            </div>
          </div>
        </div>

        {/* ── About Explorer Body ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AboutExplorer />
        </div>
      </main>
      <Footer />
    </>
  );
}
