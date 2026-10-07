"use client";

import React from "react";
import { Quote, Target, Shield, HeartHandshake } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";

export function CompanyPhilosophy() {
  return (
    <section id="company-philosophy" className="scroll-mt-28 py-20 sm:py-32 border-b border-[#DCDCD7] bg-[#F7F6F2] relative overflow-hidden">
      {/* Subtle architectural background gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(227, 59, 18, 0.05) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(23, 24, 27, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className={`relative z-10 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Index Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-[#DCDCD7] mb-16">
          <span className="text-xs font-mono text-[#E33B12] font-semibold">04</span>
          <span className="text-[#DCDCD7] font-mono">/</span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62656B]">
            Institutional Philosophy &amp; Core Conviction
          </span>
        </div>

        {/* Monumental Customer Philosophy Pull Quote */}
        <div className="max-w-5xl mx-auto text-center py-6 sm:py-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E33B12]/10 border border-[#E33B12]/20 mb-8">
            <Quote className="w-5 h-5 text-[#E33B12]" />
          </div>

          <blockquote
            className="text-[#17181B] font-extrabold tracking-[-0.02em] leading-[1.1] text-2xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
          >
            &ldquo;We don&rsquo;t just want to move your goods from point A to B,{" "}
            <span className="text-[#E33B12]">
              we want to understand your business
            </span>{" "}
            and design a solution to fit your requirements.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.24em] text-[#62656B]">
            <span>The Freyer Customer Philosophy</span>
            <span className="text-[#DCDCD7]">&middot;</span>
            <span className="text-[#E33B12]">Operating Principle</span>
          </div>
        </div>

        {/* Mission, Values, Vision Triad */}
        <div className="mt-20 pt-16 border-t border-[#DCDCD7] grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-xl border border-[#DCDCD7] bg-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#62656B] mb-6">
                <span className="text-[#E33B12] font-semibold">OUR MISSION</span>
                <span>EXECUTION</span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border border-[#DCDCD7] flex items-center justify-center mb-6 text-[#E33B12]">
                <Target className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#17181B] tracking-tight leading-snug mb-4">
                People, Process &amp; Network
              </h3>

              <p className="text-sm text-[#62656B] font-normal leading-relaxed">
                To create a niche for ourselves in the industry by leveraging our People, Process &amp; Network, 
                and being the most preferred logistics partner for our clients across every corridor of trade.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCDCD7] text-[11px] font-mono text-[#62656B]">
              Measurable physical efficiency
            </div>
          </div>

          {/* Values */}
          <div className="p-8 rounded-xl border border-[#DCDCD7] bg-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#62656B] mb-6">
                <span className="text-[#E33B12] font-semibold">OUR VALUES</span>
                <span>FOUNDATION</span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border border-[#DCDCD7] flex items-center justify-center mb-6 text-[#E33B12]">
                <Shield className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#17181B] tracking-tight leading-snug mb-4">
                Reliability &middot; Integrity &middot; Sincerity
              </h3>

              <div className="space-y-3 text-sm text-[#62656B] font-normal leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E33B12] mt-2 shrink-0" />
                  <span><strong className="text-[#17181B]">Reliability:</strong> Consistently executing cargo arrivals with zero compromises on safety.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E33B12] mt-2 shrink-0" />
                  <span><strong className="text-[#17181B]">Integrity:</strong> Absolute transparency in tariff structures and regulatory filings.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E33B12] mt-2 shrink-0" />
                  <span><strong className="text-[#17181B]">Sincerity:</strong> Unwavering dedication to client consignments under any operational disruption.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCDCD7] text-[11px] font-mono text-[#62656B]">
              The Freyer Moral Compass
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl border border-[#DCDCD7] bg-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#62656B] mb-6">
                <span className="text-[#E33B12] font-semibold">OUR VISION</span>
                <span>HORIZON</span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border border-[#DCDCD7] flex items-center justify-center mb-6 text-[#E33B12]">
                <HeartHandshake className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#17181B] tracking-tight leading-snug mb-4">
                Flexible &amp; Reliable Partner
              </h3>

              <p className="text-sm text-[#62656B] font-normal leading-relaxed">
                To be the most flexible and reliable partner for our customers by offering customized 
                and innovative solutions, continuously adapting to the complex demands of global supply chains.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCDCD7] text-[11px] font-mono text-[#62656B]">
              Future-proof multimodal agility
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
