"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const ACCREDITATIONS = [
  {
    id: "aeo",
    name: "CBIC AEO-LO Certified",
    detail: "Logistics Operator (INAAQCA4076M0F243)",
    subdetail: "Valid through 19/08/2029",
    logo: null, // Custom badge
    w: 120,
    h: 56,
  },
  {
    id: "iata",
    name: "IATA Cargo Agent",
    detail: "Regulated International Air Forwarder",
    subdetail: "Global Standards",
    logo: "/images/IATA.png",
    w: 100,
    h: 64,
  },
  {
    id: "wca",
    name: "WCA World",
    detail: "Independent Freight Forwarder Network",
    subdetail: "Full Member",
    logo: "/images/wca.png",
    w: 110,
    h: 56,
  },
  {
    id: "scn",
    name: "Security Cargo Network (SCN)",
    detail: "Member #420 in Good Standing (Since 2019)",
    subdetail: "Vetted International Alliance",
    logo: "/images/SCN.png",
    w: 120,
    h: 50,
  },
  {
    id: "amtoi",
    name: "AMTOI",
    detail: "Assoc. of Multimodal Transport Operators",
    subdetail: "Member in Standing",
    logo: "/images/amtoi.png",
    w: 64,
    h: 64,
  },
  {
    id: "acaai",
    name: "ACAAI",
    detail: "Air Cargo Agents Association of India",
    subdetail: "Member",
    logo: "/images/Acaai.jpg",
    w: 52,
    h: 64,
  },
];

export function AccreditationsProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="accreditations"
      className="py-16 sm:py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — quiet, institutional authority */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Credentials &amp; Global Alliances</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b2144]">
            Government Accreditations &amp; Global Freight Networks
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Directly accredited by the Central Board of Indirect Taxes &amp; Customs (CBIC) as an AEO Logistics Operator, IATA, and vetted global consortia.
          </p>
        </motion.div>

        {/* Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ACCREDITATIONS.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                {a.logo ? (
                  <div
                    className="relative transition-transform duration-200 group-hover:scale-105"
                    style={{ width: a.w, height: a.h }}
                  >
                    <Image
                      src={a.logo}
                      alt={a.name}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col justify-center px-3 py-1.5 rounded-lg bg-[#0b2144] text-white">
                    <span className="text-lg font-black tracking-wider leading-none">AEO-LO</span>
                    <span className="text-[9px] font-mono tracking-widest text-emerald-400 mt-0.5">CBIC INDIA</span>
                  </div>
                )}
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                  Verified
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0b2144]">
                  {a.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-mono">
                  {a.detail}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {a.subdetail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center text-[11px] font-mono text-slate-400 mt-10 tracking-wider"
        >
          ALL CERTIFICATIONS &amp; CONSORTIUM MEMBERSHIPS CURRENT &amp; ACTIVE
        </motion.p>
      </div>
    </section>
  );
}
