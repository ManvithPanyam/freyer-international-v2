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
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-20">
        {/* ── Page Header: Asymmetric Two-Column Composition on 1560px Canvas ── */}
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: Broad Headline & Lead (8 cols) */}
            <div className="lg:col-span-8">
              <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-2">
                Corporate Overview &amp; Compliance
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
                Engineered for global commerce.
                <br />
                <span className="text-slate-500 font-light italic">
                  Grounded in compliance.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-3xl">
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

            {/* Right: Institutional Credentials Snapshot (4 cols) */}
            <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-baseline justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Statutory Accreditation
                </span>
                <span className="text-xs font-mono text-[#c42f0b] font-bold">LICENSED</span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Indian Customs AEO Tier-2</span>
                  <span className="text-base font-bold text-[#0b2144] font-mono block">
                    INAAQCA4076M0F243
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Aviation Accreditation</span>
                  <span className="text-base font-bold text-[#0b2144] font-mono block">
                    IATA Regulated Cargo Agent
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Industry Recognition</span>
                  <span className="text-base font-bold text-[#0b2144] font-mono block">
                    9 Documented Trophies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── About Explorer Body ── */}
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
          <AboutExplorer />
        </div>
      </main>
      <Footer />
    </>
  );
}
