import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationsExplorer } from "@/components/locations/LocationsExplorer";

export const metadata: Metadata = {
  title: "Locations & Global Network | Freyer International Logistics",
  description: "A physical Indian network across 10 branch locations, connected globally through established forwarding alliances.",
};

export default function LocationsPage() {
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
            <span className="text-slate-900 font-medium">Locations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: Broad Headline & Lead (8 cols) */}
            <div className="lg:col-span-8">
              <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-2">
                Physical Domestic Footprint
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
                10 operating hubs across India.
                <br />
                <span className="text-slate-500 font-light italic">
                  190+ countries through global alliances.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-3xl">
                A physical Indian network with dedicated infrastructure in major manufacturing, port, and gateway corridors, connected globally through established forwarding alliances.
              </p>
            </div>

            {/* Right: Authoritative Network Metric Stack (4 cols) */}
            <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-baseline justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Infrastructure Footprint
                </span>
                <span className="text-xs font-mono text-[#c42f0b] font-bold">10 STATIONS</span>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 text-left">
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">10</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Operating Hubs in India
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">190+</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Network Countries Reached
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">6</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Forwarding Alliances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Locations Explorer Body ── */}
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12">
          <LocationsExplorer />
        </div>
      </main>
      <Footer />
    </>
  );
}
