import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import servicesData from "@/freyer-forensics-v2/content/services.json";

export const metadata: Metadata = {
  title: "Integrated Logistics Services | Freyer International Logistics",
  description: "Comprehensive multimodal logistics: 1M+ sq ft warehousing, turnkey project cargo, AEO-certified customs brokerage, ocean FCL/LCL, air charter, and cargo risk management.",
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
            <span className="text-slate-900 font-medium">Services &amp; Capabilities</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
              Multimodal Service Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.06]">
              Engineered logistics.
              <br />
              <span className="text-slate-500 font-light italic">
                From port to foundation.
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-5 leading-relaxed">
              Freyer International operates a fully integrated supply chain ecosystem spanning 1,000,000+ sq ft of WMS-enabled warehousing, heavy-lift project cargo engineering, AEO-certified customs brokerage, and global air and ocean freight contracts.
            </p>
          </div>

          {/* Quick Infrastructure Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-200">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">1,000,000+</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Sq Ft Warehouse Capacity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">AEO Tier-2</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Certified Customs Compliance</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">482 MT</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Project Cargo Engineering</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">10 Hubs</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Direct Physical Presence</div>
            </div>
          </div>
        </div>

        {/* ── Services Explorer with Deep Warehousing & Project Cargo Modules ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesExplorer rawServices={servicesData} />
        </div>

        {/* ── Direct RFQ Callout ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#0b2144] p-8 sm:p-12 rounded-2xl text-white">
            <div className="max-w-2xl mb-8">
              <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
                Commercial Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                Need customized contract logistics or project rate calculations?
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Connect directly with our corporate operations team for dedicated freight contracting, warehouse space allocation, and project route surveys.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors"
              >
                <span>Request a Quotation</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-6 py-3.5 rounded border border-white/10 transition-colors"
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
