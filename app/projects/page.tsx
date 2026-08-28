import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import projectsData from "@/freyer-forensics-v2/content/projects.json";

export const metadata: Metadata = {
  title: "Documented Project Movements | Freyer International Logistics",
  description:
    "Operational case studies of heavy-lift, over-dimensional cargo (ODC), breakbulk, and turnkey multimodal engineering by Freyer International Logistics.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        {/* ── Editorial Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Documented Project Movements</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Documented Project Archive
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.06]">
              Real cargo.
              <br />
              <span className="text-slate-500 font-light italic">
                Documented execution.
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              A comprehensive technical archive of 11 verified heavy-lift and multimodal engineering movements spanning breakbulk ocean freight, hydraulic SPMT trailers, flatracks, and civil route clearances.
            </p>
          </div>

          {/* Factual Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-200">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">11</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Documented Movements</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">482 MT</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Heaviest Recorded Movement</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">2,700 cm</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Longest Cargo Length (Boom Crane)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0b2144]">Turnkey</div>
              <div className="text-xs text-slate-500 font-mono uppercase mt-1">Port-to-Site &amp; Ex-Works</div>
            </div>
          </div>
        </div>

        {/* ── Interactive Case Studies Explorer ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsExplorer initialProjects={projectsData} />
        </div>

        {/* ── Engineering Capabilities Callout ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#0b2144] p-8 sm:p-12 lg:p-14 rounded-2xl text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-sm">
            <div className="max-w-2xl">
              <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
                Turnkey Engineering Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                Have an over-dimensional shipment requiring engineered transport?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Our project cargo desk handles complete port-to-site execution, from civil bridge load assessments and police escorts to specialized vessel chartering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <span>Consult Project Engineers</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-6 py-3.5 rounded border border-white/15 transition-colors"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
