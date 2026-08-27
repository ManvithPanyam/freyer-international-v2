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
        {/* ── Page Header ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Locations</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
              10 operating hubs across India.
              <br />
              <span className="text-slate-500 font-light italic">
                190+ countries through global alliances.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-3xl">
              A physical Indian network, connected globally through established forwarding alliances.
            </p>
          </div>
        </div>

        {/* ── Locations Explorer Body ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <LocationsExplorer />
        </div>
      </main>
      <Footer />
    </>
  );
}
