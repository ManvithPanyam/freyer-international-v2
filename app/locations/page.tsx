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
          <div className="max-w-6xl pt-4 sm:pt-8">
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c42f0b] sm:text-sm">Physical domestic footprint</span>
            <h1 className="mt-4 max-w-6xl text-[clamp(3.6rem,7.6vw,7.8rem)] font-bold leading-[0.91] tracking-[-0.055em] text-[#0b2144]">
              10 operating hubs across India.
              <br />
              <span className="font-light italic text-slate-500">190+ countries through global alliances.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
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
