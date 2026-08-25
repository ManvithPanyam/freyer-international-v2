import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProjectCargoStory() {
  return (
    <section id="project-cargo" className="py-24 sm:py-32 bg-[#07152b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
            Specialized Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 leading-tight">
            Moving what ordinary logistics cannot.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Turnkey project cargo engineering for heavy transformers, plant machinery, and over-dimensional cargo (ODC) requiring precision route surveys, multi-axle trailers, and port-to-foundation execution.
          </p>
        </div>

        {/* Editorial Feature Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Verified Project Photo */}
          <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[480px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/11.4.jpg"
              alt="Heavy Lift Transformer Transport and Multimodal Project Cargo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="bg-[#d63309] text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded font-semibold inline-block mb-2">
                Operational Case Evidence
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Industrial Transformer & Heavy Machinery Transit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Verified heavy haulage execution across Indian highway corridors utilizing multi-axle hydraulic modular trailers and engineered civil clearance.
              </p>
            </div>
          </div>

          {/* Technical Scope Card */}
          <div className="lg:col-span-4 bg-[#0b2144] p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                Technical Execution Scope
              </span>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] shrink-0 mt-0.5" />
                  <span>Physical Route Surveys & Civil Bridge Feasibility</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] shrink-0 mt-0.5" />
                  <span>Hydraulic Multi-Axle Modular Transporters</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] shrink-0 mt-0.5" />
                  <span>Port Direct Hook-to-Hook Stevedoring & Lashing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] shrink-0 mt-0.5" />
                  <span>Customs Special Cargo & ICEGATE Documentation</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-700/60">
              <a
                href="#quote"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#d63309] text-white text-xs font-semibold py-3.5 rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Consult Project Cargo Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
