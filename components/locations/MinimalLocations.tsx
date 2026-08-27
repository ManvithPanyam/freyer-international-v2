"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HUB_COORDS } from "@/components/home/indiaMapData";

const STATIONS = [
  ["bengaluru", "Bengaluru", "HQ · Corporate office"],
  ["chennai_egmore", "Chennai", "Primary operational hub"],
  ["chennai_airport", "Chennai Airport", "Air cargo terminal"],
  ["delhi", "Delhi / NCR", "North India gateway"],
  ["mumbai", "Mumbai", "West coast maritime hub"],
  ["hyderabad", "Hyderabad", "Deccan logistics hub"],
  ["visakhapatnam", "Visakhapatnam", "East coast seaport"],
  ["coimbatore", "Coimbatore", "Industrial manufacturing"],
  ["tuticorin", "Tuticorin", "Southern maritime gateway"],
  ["ahmedabad", "Ahmedabad", "Gujarat commercial hub"],
] as const;

export function MinimalLocations() {
  const [selected, setSelected] = useState("bengaluru");
  const station = STATIONS.find(([id]) => id === selected) ?? STATIONS[0];
  const hq = HUB_COORDS.find((hub) => hub.id === "bengaluru") ?? HUB_COORDS[0];

  return (
    <section className="overflow-hidden rounded-[2rem] bg-[#06101f] text-white">
      <div className="grid lg:grid-cols-[1.45fr_0.55fr]">
        <div className="relative min-h-[540px] overflow-hidden border-b border-white/10 lg:min-h-[700px] lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(30,58,95,.32),transparent_55%)]" />
          <svg viewBox="0 0 600 620" className="absolute inset-0 h-full w-full p-10 sm:p-16" aria-label="Freyer India operating hubs">
            <path d="M270 40L310 70L325 110L360 130L400 160L450 170L520 180L550 210L530 240L460 250L420 280L380 340L360 410L330 480L300 560L270 540L250 470L220 400L190 350L170 300L140 260L160 210L210 170L240 120Z" fill="#091a31" stroke="#27456d" strokeWidth="2" opacity=".9" />
            {HUB_COORDS.map((hub) => {
              const active = hub.id === selected;
              return (
                <g key={hub.id} onClick={() => setSelected(hub.id)} className="cursor-pointer">
                  <line x1={hq.cx} y1={hq.cy} x2={hub.cx} y2={hub.cy} stroke={active ? "#ff6846" : "#1b3555"} strokeWidth={active ? "1.6" : ".6"} strokeDasharray={active ? undefined : "3 5"} opacity={hub.id === "bengaluru" ? 0 : 1} />
                  {active && <circle cx={hub.cx} cy={hub.cy} r="14" fill="none" stroke="#ff6846" strokeWidth="1.5" opacity=".65" />}
                  <circle cx={hub.cx} cy={hub.cy} r={active ? 7 : 4.5} fill={active ? "#c42f0b" : "#06101f"} stroke={active ? "#fff" : "#6f839c"} strokeWidth={active ? 2 : 1.2} />
                  <text x={hub.cx + 10} y={hub.cy - 9} className={active ? "fill-white text-[11px] font-semibold" : "fill-slate-400 text-[10px]"}>{hub.city}</text>
                </g>
              );
            })}
          </svg>
          <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff6846]">Physical network</span>
            <div className="mt-2 text-2xl font-semibold tracking-tight">10 hubs across India.</div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-12 sm:left-12 sm:right-12">
            <span className="font-mono text-xs text-slate-500">Click a station</span>
            <span className="font-mono text-xs text-slate-500">10 / 10 active</span>
          </div>
        </div>

        <div className="flex flex-col p-8 sm:p-12 lg:p-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Selected station</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={station[0]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }} className="mt-8">
              <div className="font-mono text-xs text-[#ff6846]">{station[2]}</div>
              <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{station[1]}</h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-400">A local Freyer station connected to the wider Indian operating network and international forwarding partners.</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-12">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">All stations</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {STATIONS.map(([id, name]) => (
                <button key={id} onClick={() => setSelected(id)} className={`border-b py-1 text-sm transition-colors ${selected === id ? "border-[#ff6846] text-white" : "border-transparent text-slate-500 hover:text-white"}`}>
                  {name}
                </button>
              ))}
            </div>
            <a href="/contact" className="mt-10 inline-flex items-center text-sm font-semibold text-white hover:text-[#ff6846]">Contact the nearest desk <span className="ml-2">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
