import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Cargo Engineering | Freyer International Logistics",
  description: "Over-dimensional, heavy-lift, and turnkey industrial cargo engineering by Freyer International Logistics.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#060f1e] text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#ff6b4a] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          <div className="max-w-3xl mb-16">
            <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
              Heavy-Lift Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Moving what ordinary logistics cannot.
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Turnkey multimodal engineering for over-dimensional cargo (ODC), breakbulk shipping, route surveys, hydraulic multi-axle transport, and port-to-foundation delivery.
            </p>
          </div>

          <div className="bg-[#0b1b36] p-8 sm:p-12 rounded-xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">Project Execution Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              <div className="space-y-2 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#ff6b4a] font-semibold">01 / ROUTE SURVEYS & CIVIL PLANNING</span>
                <p className="text-slate-400">Detailed route hazard assessment, bridge load capacity verification, overhead clearance mapping, and civil bypass engineering.</p>
              </div>
              <div className="space-y-2 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#ff6b4a] font-semibold">02 / HEAVY LIFT & CRANE OPERATIONS</span>
                <p className="text-slate-400">Tandem crane lifts, specialized rigging calculations, port yard flatcar handling, and direct ship-to-trailer discharge.</p>
              </div>
              <div className="space-y-2 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#ff6b4a] font-semibold">03 / HYDRAULIC MULTI-AXLE TRANSPORT</span>
                <p className="text-slate-400">Multi-axle hydraulic modular trailers (SPMT / pull trailers) for oversized industrial reactors, turbines, and structural girders.</p>
              </div>
              <div className="space-y-2 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                <span className="font-mono text-[#ff6b4a] font-semibold">04 / CUSTOMS & REGULATORY APPROVALS</span>
                <p className="text-slate-400">EXIM special cargo clearance, port authority coordination, police escort permissions, and highway transport approvals.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors"
              >
                <span>Consult Project Engineers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
