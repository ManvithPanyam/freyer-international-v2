"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import { LeadershipPerson } from "@/data/leadership";
import { THEME_TOKENS } from "@/components/ui/design-system";

interface BoardGridProps {
  directors: LeadershipPerson[];
  onSelect: (person: LeadershipPerson) => void;
}

export function BoardGrid({ directors, onSelect }: BoardGridProps) {
  // Support directors excluding T.J. Srinivasaraj (who is already featured in Section 01)
  const supportingDirectors = directors.filter((d) => d.id !== "tj-srinivasaraj");

  return (
    <section id="board-of-directors" className="scroll-mt-28 py-16 sm:py-24 border-b border-[#DCDCD7] bg-[#F7F6F2]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#DCDCD7] mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#E33B12] font-semibold">02</span>
              <span className="text-[#DCDCD7] font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62656B]">
                Corporate Governance &middot; Statutory Authority
              </span>
            </div>
            <h2
              className="text-[#17181B] font-black tracking-[-0.02em] leading-[0.95] uppercase text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              BOARD OF DIRECTORS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#62656B] max-w-md">
            Four active registered directors verified across official 2026 corporate filings with the Ministry of Corporate Affairs (MCA).
          </p>
        </div>

        {/* 3 Supporting Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportingDirectors.map((director, index) => {
            const initials = director.displayName
              ? director.displayName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 3)
              : "DIR";

            return (
              <div
                key={director.id}
                onClick={() => onSelect(director)}
                className="group relative rounded-xl border border-[#DCDCD7] bg-white hover:border-[#17181B] hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header / Portrait or Monogram */}
                <div className="relative aspect-[16/10] w-full bg-[#F7F6F2] border-b border-[#DCDCD7] p-6 flex flex-col justify-between">
                  {director.imageSrc ? (
                    <Image
                      src={director.imageSrc}
                      alt={`Portrait of ${director.displayName || director.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#62656B]">
                        <span>DIR-0{index + 2}</span>
                        <span className="text-[#E33B12] font-semibold">Active Board</span>
                      </div>
                      
                      <div className="text-center my-auto">
                        <div
                          className="text-5xl font-black text-[#17181B]/15 group-hover:text-[#17181B]/25 transition-colors"
                          style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                        >
                          {initials}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-[#62656B]">
                        <span>MCA Verified</span>
                        <span>Chennai HQ</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Profile Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E33B12] font-semibold mb-2">
                      {director.title}
                    </div>

                    <h3 className="text-xl font-bold text-[#17181B] tracking-tight leading-snug group-hover:text-[#E33B12] transition-colors">
                      {director.displayName || director.name}
                    </h3>

                    <div className="mt-2 text-[11px] font-mono text-[#62656B] line-clamp-1">
                      {director.name}
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-[#62656B] font-normal leading-relaxed">
                      {director.bio}
                    </p>
                  </div>

                  {/* Footer link line */}
                  <div className="mt-6 pt-4 border-t border-[#DCDCD7] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#62656B] group-hover:text-[#17181B] transition-colors">
                      Inspect Dossier
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E33B12] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Disclosure Banner */}
        <div className="mt-12 p-6 rounded-lg bg-white border border-[#DCDCD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#62656B] shadow-xs">
          <div className="flex items-center gap-3">
            <Scale className="w-4 h-4 text-[#E33B12] shrink-0" />
            <span>
              Directorship records authenticated via Ministry of Corporate Affairs (RoC Bangalore, CIN: U74999KA2018PTC109274).
            </span>
          </div>
          <span className="text-[11px] text-[#62656B] shrink-0">
            Source Audit: Sept 2026
          </span>
        </div>
      </div>
    </section>
  );
}
