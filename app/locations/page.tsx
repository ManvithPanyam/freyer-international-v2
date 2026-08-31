import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MinimalLocations } from "@/components/locations/MinimalLocations";

export const metadata: Metadata = {
  title: "Locations & Global Network | Freyer International Logistics",
  description: "A physical Indian network across 10 branch locations, connected globally through established forwarding alliances.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-24 sm:pt-32">
        <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#c42f0b]">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Locations</span>
          </div>
          <div className="max-w-4xl pt-2 sm:pt-4">
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c42f0b] sm:text-sm mb-3">
              Physical domestic footprint
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
              10 operating hubs across India.
              <br />
              <span className="font-light italic text-slate-500">
                190+ countries through global alliances.
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600">
              A physical Indian network with dedicated infrastructure in major manufacturing, port, and gateway corridors, connected globally through established forwarding alliances.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1440px] px-6 sm:mt-28 sm:px-10 lg:px-16">
          <MinimalLocations />
        </section>
      </main>
      <Footer />
    </>
  );
}
