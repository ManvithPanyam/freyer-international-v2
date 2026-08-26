import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutExplorer } from "@/components/about/AboutExplorer";

export const metadata: Metadata = {
  title: "About Us | Freyer International Logistics",
  description: "Indian Customs AEO Tier-2 accredited, IATA cargo agent, Great Place to Work certified logistics enterprise with 10 corporate branches across India.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-20">
        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">About Freyer</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-2">
              Corporate Governance &amp; Identity
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Engineered for global commerce.
              <br />
              <span className="text-slate-500 font-light italic">
                Grounded in compliance.
              </span>
            </h1>
            <p className="text-slate-600 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed">
              Freyer International delivers integrated logistics, international freight forwarding, and tailored supply chain solutions. We design workable, cost-effective transport architectures from manufacturing origin to global destination.
            </p>
          </div>

          {/* Simplified Section Navigation Index */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 pt-4 border-t border-slate-200 text-xs font-mono text-slate-600">
            <a href="#story" className="hover:text-[#c42f0b] transition-colors">
              Story
            </a>
            <span className="text-slate-300">&middot;</span>
            <a href="#credentials" className="hover:text-[#c42f0b] transition-colors">
              Credentials
            </a>
            <span className="text-slate-300">&middot;</span>
            <a href="#people" className="hover:text-[#c42f0b] transition-colors">
              People
            </a>
            <span className="text-slate-300">&middot;</span>
            <a href="#footprint" className="hover:text-[#c42f0b] transition-colors">
              Footprint
            </a>
            <span className="text-slate-300">&middot;</span>
            <a href="#alliances" className="hover:text-[#c42f0b] transition-colors">
              Alliances
            </a>
            <span className="text-slate-300">&middot;</span>
            <a href="#csr" className="hover:text-[#c42f0b] transition-colors">
              CSR
            </a>
          </nav>
        </div>

        {/* ── About Explorer Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutExplorer />
        </div>

        {/* ── Closing Institutional Dialogue CTA ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#0b2144] p-8 sm:p-12 rounded-2xl text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
                Corporate Dialogue
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
                Initiate a dialogue with Freyer leadership.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect directly with our corporate office or branch operations teams across 10 locations in India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <span>Contact Corporate Office</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-6 py-3.5 rounded border border-white/10 transition-colors"
              >
                <span>View Branch Network</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
