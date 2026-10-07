"use client";

import React from "react";
import { Users, Globe2, Briefcase } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";

export function StakeholderPillars() {
  const pillars = [
    {
      num: "01",
      title: "Our Customer",
      eyebrow: "COLLABORATIVE VALUE",
      icon: Users,
      highlight: "Customized & Innovative Solutions",
      description:
        "We strive to understand our customers' business and need for customized and innovative solutions. We build lasting value by designing transport architectures that reduce dwell times and safeguard capital investments.",
      commitment: "Total operational accountability from point of origin to destination berth.",
    },
    {
      num: "02",
      title: "Our Partners",
      eyebrow: "SYMBIOTIC ALLIANCES",
      icon: Globe2,
      highlight: "Mutual Trust & Sustainable Growth",
      description:
        "We treat our vendors and business associates as partners in our growth. We nurture our relationships with mutual trust and mutual benefit, aligning with first-class shipping lines, airlines, and licensed CFS operators worldwide.",
      commitment: "Rigorous standards of commercial transparency and long-term mutual stability.",
    },
    {
      num: "03",
      title: "Our Employee",
      eyebrow: "HUMAN CAPITAL CORE",
      icon: Briefcase,
      highlight: "Empowerment & Shared Growth",
      description:
        "We respect the individuality and potential of each employee. We provide opportunities for growth and encourage taking ownership of our actions, cultivating seasoned project cargo engineers and customs specialists.",
      commitment: "Continuous professional advancement in high-stakes multimodal logistics.",
    },
  ];

  return (
    <section id="stakeholder-pillars" className="scroll-mt-28 py-20 sm:py-32 border-b border-white/10 bg-[#15171C]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#e1390f] font-semibold">05</span>
              <span className="text-white/20 font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Institutional Ecosystem &middot; Three Stakeholders
              </span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.95] uppercase text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              THE THREE STAKEHOLDERS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
            Freyer International&rsquo;s sustainable operational framework is built upon three foundational commitments.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative rounded-xl border border-white/10 bg-[#1A1D23] hover:border-white/25 hover:bg-[#20242D] transition-all duration-200 p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/8 text-xs font-mono text-white/40">
                    <span className="text-[#e1390f] font-semibold">PILLAR {pillar.num}</span>
                    <span className="uppercase tracking-widest">{pillar.eyebrow}</span>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#e1390f]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mt-4 text-xs font-mono uppercase tracking-wider text-[#e1390f]">
                    {pillar.highlight}
                  </div>

                  <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/8">
                  <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-1">
                    Institutional Standard
                  </div>
                  <div className="text-xs text-white/70 font-light">
                    {pillar.commitment}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
