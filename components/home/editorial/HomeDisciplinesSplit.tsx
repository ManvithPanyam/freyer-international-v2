"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const DISCIPLINES = [
  {
    num: "01",
    id: "project-cargo",
    title: "Project Cargo Engineering",
    desc: "From site disassembly and route civil permits to 500 MT hydraulic SPMT transit, tandem crane rigging, and foundation discharge.",
    image: "/images/11.3.jpg",
    alt: "Heavy-lift crane spreader hoist lifting boom crane at terminal",
    href: "/services/project-cargo",
  },
  {
    num: "02",
    id: "warehousing",
    title: "Contract Warehousing",
    desc: "High-bay racked storage, bonded facilities, integrated WMS inventory automation, and multi-client distribution hubs.",
    image: "/images/slide4.jpg",
    alt: "Modern high-bay logistics warehouse facility",
    href: "/services/warehousing",
  },
  {
    num: "03",
    id: "ocean-freight",
    title: "Ocean Freight",
    desc: "Guaranteed ocean vessel allocations across major trade lanes, direct port delivery (DPD), and container freight station integration.",
    image: "/images/Ocean-Services.jpg",
    alt: "Deep-sea container vessel underway",
    href: "/services/ocean-freight",
  },
  {
    num: "04",
    id: "air-freight",
    title: "Air Freight & Charter",
    desc: "Time-critical air forwarding, scheduled consolidations, direct airline booking authorities, and specialized aircraft chartering.",
    image: "/images/Air-Services.jpg",
    alt: "Cargo aircraft loading operations on airport tarmac",
    href: "/services/air-freight",
  },
  {
    num: "05",
    id: "customs-brokerage",
    title: "Customs Brokerage",
    desc: "Direct EDI ICEGATE customs clearance, tariff advisory, duty deferral privileges, and full sovereign compliance management.",
    image: "/images/Customs-Services.jpg",
    alt: "Customs brokerage documentation and port clearance",
    href: "/services/customs-brokerage",
  },
  {
    num: "06",
    id: "cargo-risk",
    title: "Cargo Risk Management",
    desc: "Tailored cargo insurance policies, certified marine lashing inspections, route hazard mitigation, and expedited claims settlement.",
    image: "/images/Risk-Management.jpg",
    alt: "Cargo risk management and security inspections",
    href: "/services/risk-management",
  },
];

export function HomeDisciplinesSplit() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = DISCIPLINES.length;
    const segment = 1 / total;
    const idx = Math.min(Math.floor(latest / segment), total - 1);
    if (idx !== activeIdx && idx >= 0) {
      setActiveIdx(idx);
    }
  });

  const activeDiscipline = DISCIPLINES[activeIdx] || DISCIPLINES[0];

  return (
    <section
      ref={containerRef}
      id="disciplines"
      className="relative h-[300vh] w-full bg-[#02050c] text-white border-t border-white/10"
    >
      {/* ── Sticky Editorial Split Canvas ── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 sm:p-12 lg:p-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Pure Typography and Single Proof Sentence */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[#ff6b4a] text-xs font-mono tracking-[0.4em] uppercase font-bold block mb-3">
                Six Multimodal Disciplines
              </span>
              <h2
                className="font-black tracking-tight text-white leading-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
              >
                Six disciplines.
                <br />
                <span className="text-slate-400 font-light italic">
                  One integrated standard.
                </span>
              </h2>
            </div>

            {/* Active Discipline Editorial Transformation */}
            <div className="min-h-[220px] flex flex-col justify-between py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiscipline.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  <div className="text-sm font-mono font-bold text-[#ff6b4a]">
                    DISCIPLINE {activeDiscipline.num}
                  </div>

                  <h3
                    className="font-black text-white tracking-tight"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                  >
                    {activeDiscipline.title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-lg">
                    {activeDiscipline.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={activeDiscipline.href}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff6b4a] hover:text-white transition-colors"
                    >
                      <span>Explore Capability Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Edge-to-Edge Large Logistics Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeDiscipline.image}
                  alt={activeDiscipline.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ filter: "brightness(0.92) contrast(1.15)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
