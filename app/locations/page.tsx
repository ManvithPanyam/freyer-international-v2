import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationsExplorer } from "@/components/locations/LocationsExplorer";

export const metadata: Metadata = {
  title: "Pan-India Locations & Hubs | Freyer International Logistics",
  description: "Direct operational footprint across 10 verified Freyer branch locations in India, connected to 190+ countries through global forwarding alliances.",
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-20">
        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Our Network</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-2">
              Pan-India Physical Reach
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              10 operating hubs across India.
              <br />
              <span className="text-slate-500 font-light italic">
                190+ countries through global alliances.
              </span>
            </h1>
            <p className="text-slate-600 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed">
              Direct physical infrastructure positioned across India&apos;s primary maritime container gateways, international airport complexes, and inland manufacturing corridors.
            </p>
          </div>
        </div>

        {/* ── Locations Explorer Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationsExplorer />
        </div>
      </main>
      <Footer />
    </>
  );
}
