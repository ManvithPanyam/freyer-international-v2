"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Warehouse,
} from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  verifiedBadge?: string;
}

const STATS: StatItem[] = [
  {
    value: "10",
    label: "Stations across 8 Cities",
    sublabel: "Physical offices across major Indian ports and trade centers",
    icon: Building2,
    verifiedBadge: "Pan-India Reach",
  },
  {
    value: "AEO-LO",
    label: "CBIC Customs Certified",
    sublabel: "Logistics Operator (INAAQCA4076M0F243) valid through Aug 2029",
    icon: ShieldCheck,
    verifiedBadge: "Official CBIC Tier",
  },
  {
    value: "1,000,000+ sq. ft.",
    label: "Warehousing Footprint",
    sublabel: "Multi-client WMS facilities, CFS operations & 3PL distribution",
    icon: Warehouse,
    verifiedBadge: "Verified Capacity",
  },
  {
    value: "482 MT",
    label: "Heavy-Lift Benchmark",
    sublabel: "Single breakbulk movement & 11 documented project cases",
    icon: TrendingUp,
    verifiedBadge: "Verified Moves",
  },
];

export function StatsBar() {
  return (
    <section
      aria-label="Operational Scale & Certifications"
      className="relative z-20 bg-[#07152b] border-y border-white/10 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col justify-between ${
                  idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    {stat.verifiedBadge && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {stat.verifiedBadge}
                      </span>
                    )}
                  </div>

                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-2 font-normal leading-relaxed">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
