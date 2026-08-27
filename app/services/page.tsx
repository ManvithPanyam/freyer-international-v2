import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

export const metadata: Metadata = {
  title: "Services & Capabilities | Freyer International Logistics",
  description:
    "Six integrated logistics disciplines: 1,000,000+ sq ft warehousing & 3PL, turnkey project cargo engineering, ocean FCL/LCL, air charter, AEO-certified customs brokerage, and cargo risk management.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        {/* ── Page Header ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Services &amp; Capabilities</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Capabilities Dossier
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
              One logistics system.
              <br />
              <span className="text-slate-500 font-light italic">
                Six disciplines.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 leading-relaxed max-w-3xl">
              Integrated infrastructure and multimodal operations designed to realise your business goals across contract warehousing, heavy-lift project engineering, global ocean and air networks, customs compliance, and supply chain risk mitigation.
            </p>
          </div>

          {/* Compact Anchor Index */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-5 border-t border-slate-200 text-xs sm:text-sm font-mono text-slate-600">
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16 sm:space-y-24">
          <ServicesExplorer />

          {/* ── Operational FAQ Section ── */}
          <ServiceFAQ />

          {/* ── Clean Restrained Action Block ── */}
          <div className="bg-[#0b2144] p-8 sm:p-12 lg:p-14 rounded-3xl text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                Commercial Inquiry
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1.5">
                Need a logistics solution built around the cargo?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
                Connect directly with our operations teams across 10 corporate branches in India for freight rates, warehouse allocation, and project route planning.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-base font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <span>Request a Quotation</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-7 py-3.5 rounded-xl border border-white/15 transition-colors"
              >
                <span>View Documented Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
