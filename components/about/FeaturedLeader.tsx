"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Building2, MapPin, Award } from "lucide-react";
import { LeadershipPerson } from "@/data/leadership";
import { THEME_TOKENS } from "@/components/ui/design-system";

interface FeaturedLeaderProps {
  person: LeadershipPerson;
  onSelect: (person: LeadershipPerson) => void;
}

export function FeaturedLeader({ person, onSelect }: FeaturedLeaderProps) {
  return (
    <section id="featured-leader" className="scroll-mt-28 py-16 sm:py-24 border-b border-white/10 bg-[#121316]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header Line */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#e1390f] font-semibold">01</span>
            <span className="text-white/20 font-mono">/</span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              Executive Leadership &middot; Managing Director
            </span>
          </div>
          <span className="text-[11px] font-mono text-white/30 hidden sm:inline-block">
            DIN Verified &middot; Ministry of Corporate Affairs
          </span>
        </div>

        {/* Editorial Split: Large Portrait Left / Executive Profile Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/12 bg-[#181A1F] shadow-2xl group">
              {person.imageSrc ? (
                <Image
                  src={person.imageSrc}
                  alt={`Portrait of ${person.displayName || person.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              ) : (
                /* Architectural Executive Monogram Placeholder */
                <div className="w-full h-full flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-[#1c1f26] via-[#14161a] to-[#0d0e12]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.05] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#e1390f]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e1390f]" />
                      Executive Office
                    </div>
                    <span className="text-xs font-mono text-white/25">REF // TJS-01</span>
                  </div>

                  {/* Monogram Graphic */}
                  <div className="my-auto text-center py-8">
                    <div
                      className="text-8xl sm:text-9xl font-black tracking-tighter text-white/10 select-none group-hover:text-white/15 transition-colors duration-300"
                      style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                    >
                      TJS
                    </div>
                    <div className="mt-2 text-xs font-mono uppercase tracking-[0.24em] text-white/40">
                      Managing Director
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="pt-4 border-t border-white/8 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>Active Since 2018</span>
                    <span className="text-[#e1390f]">Corporate Masthead</span>
                  </div>
                </div>
              )}

              {/* Status indicator on portrait */}
              <div className="absolute top-4 right-4 bg-[#121316]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white/80">
                Current &middot; Verified
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Profile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#e1390f] mb-3 font-semibold">
                Managing Director &amp; Corporate Governance
              </div>

              <h2
                className="text-white font-black tracking-[-0.02em] leading-[0.95] uppercase text-4xl sm:text-5xl lg:text-6xl"
                style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
              >
                {person.displayName || person.name}
              </h2>

              <div className="mt-3 text-xs sm:text-sm font-mono text-white/45">
                Full Legal Name: <span className="text-white/80">{person.name}</span>
              </div>

              {/* Verified Biography */}
              <div className="mt-8 text-slate-300 text-base sm:text-lg font-light leading-relaxed space-y-4 max-w-2xl">
                <p>
                  {person.bio}
                </p>
                <p className="text-sm text-slate-400">
                  Directing enterprise growth across primary deep-water maritime ports, air cargo gateways, 
                  and inland container terminals with a focus on strict statutory governance and high-efficiency cargo movement.
                </p>
              </div>

              {/* Institutional Responsibilities Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/8">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-[#e1390f]" />
                    Corporate Scope
                  </div>
                  <div className="text-sm font-medium text-white">
                    Capital Allocation &amp; Network Scale
                  </div>
                  <div className="text-xs font-mono text-white/40 mt-1">
                    10 Branch Stations across 8 Industrial Hubs
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/8">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#e1390f]" />
                    Statutory Alignment
                  </div>
                  <div className="text-sm font-medium text-white">
                    AEO-LO Tier 2 &amp; IATA Agency
                  </div>
                  <div className="text-xs font-mono text-white/40 mt-1">
                    Direct MCA &amp; CBIC Verified Authority
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onSelect(person)}
                className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white px-5 py-3 rounded text-xs font-mono uppercase tracking-[0.2em] border border-white/20 transition-colors"
              >
                <span>Read Full Profile Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f]" />
              </button>

              {person.linkedinUrl && (
                <a
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white px-4 py-3 rounded border border-white/10 hover:border-white/25 transition-colors"
                  aria-label={`View ${person.displayName || person.name} on LinkedIn`}
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>Company Registry Page</span>
                  <ArrowUpRight className="w-3 h-3 text-white/40" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
