import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services & Capabilities | Freyer International Logistics",
  description: "Six integrated logistics disciplines: 1,000,000+ sq ft warehousing & 3PL, turnkey project cargo engineering, ocean FCL/LCL, air charter, AEO-certified customs brokerage, and cargo risk management.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Services</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
              Capabilities Dossier
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.06]">
              One logistics system.
              <br />
              <span className="text-slate-500 font-light italic">
                Six disciplines.
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-5 leading-relaxed">
              Integrated infrastructure and multimodal operations designed to realise your business goals across contract warehousing, heavy-lift project engineering, global ocean and air networks, customs compliance, and supply chain risk mitigation.
            </p>
          </div>

          {/* Compact Anchor Index */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-slate-200 text-xs font-mono text-slate-600">
            <a href="#warehousing" className="hover:text-[#c42f0b] transition-colors">
              01 &middot; Warehousing &amp; 3PL
            </a>
            <a href="#project-cargo" className="hover:text-[#c42f0b] transition-colors">
              02 &middot; Project Cargo
            </a>
            <a href="#ocean-freight" className="hover:text-[#c42f0b] transition-colors">
              03 &middot; Ocean Freight
            </a>
            <a href="#air-freight" className="hover:text-[#c42f0b] transition-colors">
              04 &middot; Air Freight
            </a>
            <a href="#customs" className="hover:text-[#c42f0b] transition-colors">
              05 &middot; Customs Brokerage
            </a>
            <a href="#risk-management" className="hover:text-[#c42f0b] transition-colors">
              06 &middot; Risk Management
            </a>
          </nav>
        </div>

        {/* ── Editorial Longform Services Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesExplorer />
        </div>

        {/* ── Clean Action Block ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-[#0b2144] p-8 sm:p-12 rounded-2xl text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
                Commercial Logistics Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                Request space allocation or engineered project rate analysis.
              </h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Connect with our branch operations teams across 10 hubs in India for tailored freight contracts and warehousing solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <span>Request a Quotation</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-6 py-3.5 rounded border border-white/10 transition-colors"
              >
                <span>Documented Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
