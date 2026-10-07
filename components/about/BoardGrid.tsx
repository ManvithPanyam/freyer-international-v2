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
    <section id="board-of-directors" className="scroll-mt-28 py-16 sm:py-24 border-b border-white/10 bg-[#15171C]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#e1390f] font-semibold">02</span>
              <span className="text-white/20 font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Corporate Governance &middot; Statutory Authority
              </span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.95] uppercase text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              BOARD OF DIRECTORS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
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
                className="group relative rounded-xl border border-white/10 bg-[#1A1D23] hover:border-white/25 hover:bg-[#20242C] transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header / Portrait or Monogram */}
                <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-[#252830] to-[#17191E] border-b border-white/8 p-6 flex flex-col justify-between">
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
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/40">
                        <span>DIR-0{index + 2}</span>
                        <span className="text-[#e1390f] font-semibold">Active Board</span>
                      </div>
                      
                      <div className="text-center my-auto">
                        <div
                          className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors"
                          style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                        >
                          {initials}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-white/30">
                        <span>MCA Verified</span>
                        <span>Chennai HQ</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Profile Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold mb-2">
                      {director.title}
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#e1390f] transition-colors">
                      {director.displayName || director.name}
                    </h3>

                    <div className="mt-2 text-[11px] font-mono text-white/40 line-clamp-1">
                      {director.name}
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {director.bio}
                    </p>
                  </div>

                  {/* Footer link line */}
                  <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                    <span className="text-white/40 group-hover:text-white transition-colors">
                      Inspect Dossier
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Disclosure Banner */}
        <div className="mt-12 p-6 rounded-lg bg-white/[0.02] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-3">
            <Scale className="w-4 h-4 text-[#e1390f] shrink-0" />
            <span>
              Directorship records authenticated via Ministry of Corporate Affairs (RoC Bangalore, CIN: U74999KA2018PTC109274).
            </span>
          </div>
          <span className="text-[11px] text-white/30 shrink-0">
            Source Audit: Sept 2026
          </span>
        </div>
      </div>
    </section>
  );
}
