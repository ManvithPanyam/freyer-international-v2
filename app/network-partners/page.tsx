import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NetworkAlliances } from "@/components/network/NetworkAlliances";

export const metadata: Metadata = {
  title: "Global Alliances & Network Partners | Freyer International Logistics",
  description: "Freyer International combines physical operations across India with established international forwarding relationships across 190+ countries.",
};

export default function NetworkPartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-24 sm:pt-32">
        <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#c42f0b]">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Network Partners</span>
          </div>

          <div className="max-w-6xl pt-4 sm:pt-8">
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c42f0b] sm:text-sm">
              International forwarding alliances
            </span>
            <h1 className="mt-4 max-w-6xl text-[clamp(3.6rem,7.6vw,7.8rem)] font-bold leading-[0.91] tracking-[-0.055em] text-[#0b2144]">
              India on the ground.
              <br />
              <span className="font-light italic text-slate-500">Global through trusted networks.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Freyer combines physical operations across 10 Indian hubs with established international forwarding relationships across 190+ countries.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-[1440px] px-6 sm:mt-32 sm:px-10 lg:px-16">
          <NetworkAlliances />
        </section>
      </main>
      <Footer />
    </>
  );
}
