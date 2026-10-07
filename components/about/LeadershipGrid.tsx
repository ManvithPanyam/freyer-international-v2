"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Shield, Anchor, Plane, MapPin } from "lucide-react";
import { LeadershipPerson } from "@/data/leadership";
import { THEME_TOKENS } from "@/components/ui/design-system";

interface LeadershipGridProps {
  leaders: LeadershipPerson[];
  onSelect: (person: LeadershipPerson) => void;
}

export function LeadershipGrid({ leaders, onSelect }: LeadershipGridProps) {
  return (
    <section id="operational-leadership" className="scroll-mt-28 py-16 sm:py-24 border-b border-white/10 bg-[#121316]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#e1390f] font-semibold">03</span>
              <span className="text-white/20 font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Frontline Execution &middot; Multimodal Disciplines
              </span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.95] uppercase text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              LEADERSHIP IN OPERATION
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
            Verified operational and commercial leaders directing heavy-lift engineering, liner cargo allocations, and statutory customs clearance.
          </p>
        </div>

        {/* Operational Leaders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => {
            const initials = leader.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={leader.id}
                onClick={() => onSelect(leader)}
                className="group relative rounded-xl border border-white/10 bg-[#181A1F] hover:border-white/25 hover:bg-[#1E2127] transition-all duration-200 cursor-pointer p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/8 text-[11px] font-mono text-white/40">
                    <span className="text-[#e1390f] font-semibold">DESK 0{idx + 1}</span>
                    <span className="truncate max-w-[160px]">{leader.location || "Branch Network"}</span>
                  </div>

                  {/* Monogram Badge & Title */}
                  <div className="mt-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-sm font-mono font-bold text-white/60 group-hover:text-white group-hover:border-[#e1390f] transition-colors shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#e1390f] transition-colors">
                        {leader.name}
                      </h3>
                      <div className="text-xs font-mono text-[#e1390f] font-medium mt-0.5">
                        {leader.title}
                      </div>
                    </div>
                  </div>

                  {/* Operational Scope */}
                  {leader.businessArea && (
                    <div className="mt-4 px-3 py-1.5 rounded bg-white/[0.03] border border-white/6 text-[11px] font-mono text-white/50">
                      {leader.businessArea}
                    </div>
                  )}

                  {/* Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    View Verified Specs
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e1390f] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
