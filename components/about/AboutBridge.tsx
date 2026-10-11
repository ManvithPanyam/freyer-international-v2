"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Anchor, Globe, MapPin, Briefcase, HeartHandshake, Mail } from "lucide-react";
import { THEME_TOKENS } from "@/components/ui/design-system";
import { Button } from "@/components/ui/Button";

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
    {
      label: "JOIN OUR TEAMS",
      title: "Careers at Freyer",
      desc: "Join our licensed customs brokers, marine freight directors, and logistics engineers.",
      href: "/careers",
      icon: Briefcase,
    },
    {
      label: "SOCIAL IMPACT",
      title: "Stewardship & CSR",
      desc: "Community welfare, vocational logistics education, and green freight corridors.",
      href: "/csr",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#DCDCD7] bg-[#F7F6F2]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#DCDCD7]">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#E33B12] mb-3 font-semibold">
              The Architecture of Freyer
            </div>
            <h2
              className="text-[#17181B] font-black tracking-[-0.02em] leading-tight uppercase text-3xl sm:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              PEOPLE &rarr; CAPABILITY &rarr; REACH
            </h2>
          </div>

          <p className="text-sm font-mono text-[#62656B] max-w-md">
            Having seen who leads Freyer, explore our physical operations, global shipment routes, talent opportunities, and community stewardship.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((path, idx) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.href + idx}
                href={path.href}
                className="group p-8 rounded-xl border border-[#DCDCD7] bg-white hover:border-[#17181B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#62656B] mb-6">
                    <span className="text-[#E33B12] font-semibold">{path.label}</span>
                    <Icon className="w-4 h-4 text-[#62656B] group-hover:text-[#17181B] transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#17181B] tracking-tight group-hover:text-[#E33B12] transition-colors">
                    {path.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#62656B] font-normal leading-relaxed">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DCDCD7] flex items-center justify-between text-xs font-mono text-[#62656B] group-hover:text-[#17181B] transition-colors">
                  <span>Explore Destination</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E33B12] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Commercial Inquiry Callout - Intentional Dark Editorial Contrast */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#17181B] text-[#F7F6F2] border border-[#17181B] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#E33B12] mb-1 font-semibold">
              Engage Freyer Leadership Desk
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F7F6F2] tracking-tight">
              Ready to engineer your next critical cargo consignment?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F6F2]/70 mt-1 font-light">
              Connect directly with our central freight forwarding desk and operational directors.
            </p>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="shrink-0 bg-[#E33B12] text-white hover:bg-white hover:text-[#17181B]"
            icon={<Mail className="w-4 h-4" />}
          >
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
