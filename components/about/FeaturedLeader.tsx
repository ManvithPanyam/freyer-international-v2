"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Building2, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeadershipPerson } from "@/data/leadership";
import { THEME_TOKENS } from "@/components/ui/design-system";

interface FeaturedLeaderProps {
  person: LeadershipPerson;
  onSelect: (person: LeadershipPerson) => void;
}

export function FeaturedLeader({ person, onSelect }: FeaturedLeaderProps) {
  return (
    <section id="featured-leader" className="scroll-mt-28 py-16 sm:py-24 border-b border-[#DCDCD7] bg-[#F7F6F2]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header Line */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DCDCD7] mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#E33B12] font-semibold">01</span>
            <span className="text-[#DCDCD7] font-mono">/</span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62656B]">
              Executive Leadership &middot; Managing Director
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#62656B] hidden sm:inline-block">
            DIN Verified &middot; Ministry of Corporate Affairs
          </span>
        </div>

        {/* Editorial Split: Large Portrait Left / Executive Profile Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-[#DCDCD7] bg-white shadow-sm group">
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
                <div className="w-full h-full flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#DCDCD7]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F6F2] border border-[#DCDCD7] text-[10px] font-mono uppercase tracking-widest text-[#E33B12]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E33B12]" />
                      Executive Office
                    </div>
                    <span className="text-xs font-mono text-[#62656B]">REF // TJS-01</span>
                  </div>

                  {/* Monogram Graphic */}
                  <div className="my-auto text-center py-8">
                    <div
                      className="text-8xl sm:text-9xl font-black tracking-tighter text-[#17181B]/15 select-none group-hover:text-[#17181B]/25 transition-colors duration-300"
                      style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                    >
                      TJS
                    </div>
                    <div className="mt-2 text-xs font-mono uppercase tracking-[0.24em] text-[#62656B]">
                      Managing Director
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="pt-4 border-t border-[#DCDCD7] flex items-center justify-between text-[11px] font-mono text-[#62656B]">
                    <span>Active Since 2018</span>
                    <span className="text-[#E33B12]">Corporate Masthead</span>
                  </div>
                </div>
              )}

              {/* Status indicator on portrait */}
              <div className="absolute top-4 right-4 bg-[#17181B]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white">
                Current &middot; Verified
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Profile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#E33B12] mb-3 font-semibold">
                Managing Director &amp; Corporate Governance
              </div>

              <h2
                className="text-[#17181B] font-black tracking-[-0.02em] leading-[0.95] uppercase text-4xl sm:text-5xl lg:text-6xl"
                style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
              >
                {person.displayName || person.name}
              </h2>

              <div className="mt-3 text-xs sm:text-sm font-mono text-[#62656B]">
                Full Legal Name: <span className="text-[#17181B] font-medium">{person.name}</span>
              </div>

              {/* Verified Biography */}
              <div className="mt-8 text-[#62656B] text-base sm:text-lg font-normal leading-relaxed space-y-4 max-w-2xl">
                <p>
                  {person.bio}
                </p>
                <p className="text-sm text-[#62656B]">
                  Directing enterprise growth across primary deep-water maritime ports, air cargo gateways, 
                  and inland container terminals with a focus on strict statutory governance and high-efficiency cargo movement.
                </p>
              </div>

              {/* Institutional Responsibilities Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="p-4 rounded-lg bg-white border border-[#DCDCD7]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#62656B] mb-1">
                    <Building2 className="w-3.5 h-3.5 text-[#E33B12]" />
                    Corporate Scope
                  </div>
                  <div className="text-sm font-semibold text-[#17181B]">
                    Capital Allocation &amp; Network Scale
                  </div>
                  <div className="text-xs font-mono text-[#62656B] mt-1">
                    10 Branch Stations across 8 Industrial Hubs
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#DCDCD7]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#62656B] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E33B12]" />
                    Statutory Alignment
                  </div>
                  <div className="text-sm font-semibold text-[#17181B]">
                    AEO-LO &amp; IATA Agency
                  </div>
                  <div className="text-xs font-mono text-[#62656B] mt-1">
                    Direct MCA &amp; CBIC Verified Authority
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-10 pt-8 border-t border-[#DCDCD7] flex flex-wrap items-center gap-4">
              <Button
                type="button"
                onClick={() => onSelect(person)}
                variant="primary"
                size="md"
              >
                Read Full Profile Dossier
              </Button>

              {person.linkedinUrl && (
                <Button
                  href={person.linkedinUrl}
                  external
                  variant="secondary"
                  size="md"
                  aria-label={`View ${person.displayName || person.name} on LinkedIn`}
                  icon={
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#62656B] shrink-0" />
                  }
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0077b5] shrink-0 mr-1.5" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>Company Registry Page</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
