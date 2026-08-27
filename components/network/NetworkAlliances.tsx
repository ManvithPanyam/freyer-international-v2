"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", detail: "190+ countries" },
  { name: "Security Cargo Network", logo: "/images/SCN.png", detail: "Vetted global forwarders" },
  { name: "Worldwide Partners Alliance", logo: "/images/wpa.jpg", detail: "Air & ocean forwarding" },
  { name: "FDX Global", logo: "/images/FDX.jpg", detail: "Express & freight" },
  { name: "AMTOI", logo: "/images/amtoi.png", detail: "Indian multimodal network" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", detail: "Indian air cargo network" },
];

const STEPS = [
  ["01", "Origin", "Pickup and export handling"],
  ["02", "Compliance", "Documentation and customs"],
  ["03", "Main carriage", "Air and ocean movement"],
  ["04", "Destination", "Local clearance and handling"],
  ["05", "Final mile", "Delivery and proof of delivery"],
];

export function NetworkAlliances() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-24 sm:space-y-32">
      <section>
        <div className="flex items-end justify-between gap-8 border-b border-slate-200 pb-5">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c42f0b]">Accredited network</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b2144] sm:text-4xl">Global reach, locally executed.</h2>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">6 networks · 190+ countries</span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
          {ALLIANCES.map((alliance, index) => (
            <motion.button
              key={alliance.name}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group text-left outline-none"
            >
              <div className={`relative flex h-20 items-center justify-center border-b-2 transition-colors ${active === index ? "border-[#c42f0b]" : "border-transparent"}`}>
                <Image src={alliance.logo} alt={alliance.name} width={150} height={72} className="max-h-14 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="mt-3 text-sm font-semibold text-[#0b2144]">{alliance.name}</div>
              <AnimatePresence mode="wait" initial={false}>
                {active === index && (
                  <motion.div
                    key={alliance.detail}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-1 text-xs text-slate-500"
                  >
                    {alliance.detail}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200">
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between py-7 text-left">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Operational flow</span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0b2144] sm:text-3xl">How the network moves a shipment</h2>
          </div>
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-3xl font-light text-[#c42f0b]">+</motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="grid gap-0 pb-8 sm:grid-cols-5">
                {STEPS.map(([number, title, detail]) => (
                  <div key={number} className="border-t border-slate-200 py-5 pr-6">
                    <span className="font-mono text-xs font-bold text-[#c42f0b]">{number}</span>
                    <h3 className="mt-2 font-semibold text-[#0b2144]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
