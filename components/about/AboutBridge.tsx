"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Anchor, Globe, MapPin, Mail } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";

export function AboutBridge() {
  const pathways = [
    {
      label: "WHAT WE MOVE",
      title: "Projects & Heavy Lift",
      desc: "Industrial project cargo, breakbulk movements, and engineered heavy equipment.",
      href: "/projects",
      icon: Anchor,
    },
    {
      label: "WHERE WE MOVE",
      title: "Global Movement Atlas",
      desc: "Documented international trade lanes spanning Asia, Europe, and the Middle East.",
      href: "/network-partners",
      icon: Globe,
    },
    {
      label: "WHERE WE ARE",
      title: "India Station Network",
      desc: "Physical branch presence across 10 strategic commercial and port gateways.",
      href: "/locations",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-white/10 bg-[#121316]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#e1390f] mb-3 font-semibold">
              The Architecture of Freyer
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-tight uppercase text-3xl sm:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              PEOPLE &rarr; CAPABILITY &rarr; REACH
            </h2>
          </div>

          <p className="text-sm font-mono text-white/50 max-w-md">
            Having seen who leads Freyer, explore our physical operations, global shipment routes, and domestic infrastructure.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.href}
                href={path.href}
                className="group p-8 rounded-xl border border-white/10 bg-[#181A1F] hover:border-white/30 hover:bg-[#1F232B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-6">
                    <span className="text-[#e1390f] font-semibold">{path.label}</span>
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#e1390f] transition-colors">
                    {path.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                  <span>Enter Experience</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e1390f] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Commercial Inquiry Callout */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#181A1F] via-[#1E222A] to-[#181A1F] border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] mb-1">
              Engage Freyer Leadership Desk
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to engineer your next critical cargo consignment?
            </h4>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              Connect directly with our central freight forwarding desk and operational directors.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#e1390f] hover:bg-[#ff4614] text-white text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Connect With Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
