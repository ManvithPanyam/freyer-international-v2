"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

const ACCREDITATIONS = [
  {
    id: "aeo",
    name: "AEO Certified",
    logo: null,           // rendered as CSS text-mark below
    w: 120,
    h: 56,
    cert: "INAAQCA4076M0F243",
  },
  {
    id: "iata",
    name: "IATA Accredited",
    logo: "/images/IATA.png",
    w: 100,
    h: 64,
    cert: "Cargo Agent",
  },
  {
    id: "wca",
    name: "WCA World",
    logo: "/images/wca.png",
    w: 110,
    h: 61,
    cert: "Full Member",
  },
  {
    id: "scn",
    name: "SCN Partner",
    logo: "/images/SCN.png",
    w: 130,
    h: 50,
    cert: "Partner",
  },
  {
    id: "amtoi",
    name: "AMTOI",
    logo: "/images/amtoi.png",
    w: 64,
    h: 64,
    cert: "Member",
  },
  {
    id: "acaai",
    name: "ACAAI",
    logo: "/images/Acaai.jpg",
    w: 48,
    h: 64,
    cert: "Member",
  },
];

export function AccreditationsProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="accreditations"
      className="py-16 sm:py-20 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — quiet, institutional */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400">
            Certifications &amp; Network Memberships
          </span>
          <p className="mt-3 text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
            Freyer operates under direct certification from Indian Customs,
            IATA, and four global freight networks.
          </p>
        </motion.div>

        {/* Proof wall — two rows of three, logos floating on white */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-16 sm:gap-y-12 items-center justify-items-center">
          {ACCREDITATIONS.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Logo — grayscale at rest, color on hover */}
              {a.logo ? (
                <div
                  className="relative transition-all duration-300 group-hover:scale-105"
                  style={{ width: a.w, height: a.h }}
                >
                  <Image
                    src={a.logo}
                    alt={a.name}
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                    sizes="160px"
                  />
                </div>
              ) : (
                /* AEO text-mark — cleaner than certificate JPEG crop */
                <div
                  className="flex flex-col items-center justify-center transition-transform duration-200 group-hover:scale-105"
                  style={{ width: a.w, height: a.h }}
                  aria-label={a.name}
                >
                  <span className="text-[22px] font-black tracking-[0.08em] text-[#1a3a6b] leading-none">
                    AEO
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.18em] uppercase text-slate-500 mt-0.5">
                    Indian Customs
                  </span>
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Divider + verification note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center text-[10px] font-mono text-slate-300 mt-8 sm:mt-10 tracking-wider"
        >
          ALL CERTIFICATIONS VALID · AEO CERT NO. INAAQCA4076M0F243
        </motion.p>
      </div>
    </section>
  );
}
