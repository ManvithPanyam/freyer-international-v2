"use client";

import React from "react";
import Link from "next/link";
import GlobalMovementAtlas from "@/components/network/GlobalMovementAtlas";
import { PresentationIndiaMap } from "@/components/experiments/india_map_presentation/PresentationIndiaMap";
import {
  ArrowLeft,
  Globe2,
  MapPin,
  ShieldCheck,
  FileText,
  Database,
  Building2,
  CheckCircle2,
  Anchor,
  ArrowDown,
} from "lucide-react";

export default function GlobalMovementAtlasPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Top Editorial Sticky Navigation */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/experiments/world-class-final-home"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Master
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Freyer Cartographic Evidence Suite
              </span>
            </div>
          </div>

          {/* Quick Section Anchors */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("where-freyer-moves")}
              className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#e1390f]" />
              <span>Where Freyer Moves</span>
            </button>
            <button
              onClick={() => scrollToSection("where-freyer-is")}
              className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Where Freyer Is</span>
            </button>
          </div>
        </div>
      </header>

      {/* TWO-TIER AUDIT HEADER BANNER */}
      <section className="bg-[#050b14] border-b border-white/10 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-[#e1390f] font-bold uppercase">Two-Tier Narrative:</span>
            <span className="text-slate-400">
              World Map (International Movement) &bull; India Map (Sovereign Physical Footprint)
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> CBIC AEO (LO) #INAAQCA4076M0F243
            </span>
            <span className="hidden lg:inline text-slate-600">&bull;</span>
            <span className="hidden lg:inline text-slate-400">SCN #420 (Colorado)</span>
            <span className="hidden lg:inline text-slate-600">&bull;</span>
            <span className="hidden lg:inline text-amber-400">WPA Global Winner 2023 & 2024</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: WHERE FREYER MOVES (World Movement Atlas)                      */}
      {/* ========================================================================= */}
      <section id="where-freyer-moves" className="py-2">
        <GlobalMovementAtlas />
      </section>

      {/* NARRATIVE HANDOFF DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="border-t border-b border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#040812] px-6 rounded-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-[11px] font-mono text-[#e1390f] uppercase tracking-widest font-semibold">
              SOVEREIGN DOMESTIC INFRASTRUCTURE
            </div>
            <div className="text-lg sm:text-xl font-bold uppercase text-white font-[family-name:var(--font-barlow-condensed)]">
              From Global Maritime Corridors to National Physical Hubs
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-xl">
              While international project cargo moves across global oceans, all customs filings and logistics operations anchor into Freyer's licensed pan-India station network.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("where-freyer-is")}
            className="px-4 py-2.5 rounded-lg bg-[#e1390f] hover:bg-[#c42f0b] text-white text-xs font-mono font-bold transition flex items-center gap-2 shrink-0 shadow-lg shadow-[#e1390f]/20"
          >
            <span>Inspect India Footprint</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: WHERE FREYER IS (Authoritative Pan-India Physical Network)     */}
      {/* ========================================================================= */}
      <section id="where-freyer-is" className="py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-400 font-semibold">
                WHERE FREYER IS &bull; SOVEREIGN DOMESTIC STATIONS
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
              Authoritative Pan-India Physical Network
            </h2>

            <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed font-sans">
              10 operating stations across 8 industrial hubs, licensed customs house brokerage, and direct terminal presence across India's premier seaports and air cargo gates.
            </p>
          </div>
        </div>

        <PresentationIndiaMap />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: FINAL SOURCE-TRUTH AUDIT TABLE                                  */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#02050b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#e1390f] uppercase tracking-widest font-semibold">
              TRANSPARENT FORENSIC REGISTRY
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
              Public Source-Truth Audit Matrix
            </h3>
            <p className="text-xs text-slate-400 font-sans max-w-2xl">
              Every country, route, cargo metric, and institutional certification displayed in this application has been verified against physical or archived source documents.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-xl">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#060e1a] text-slate-300 border-b border-white/10 text-[10px] uppercase">
                <tr>
                  <th className="p-3">Visible Claim</th>
                  <th className="p-3">Source File</th>
                  <th className="p-3">Source Type</th>
                  <th className="p-3">Exact Evidence Transcribed</th>
                  <th className="p-3 text-center">Public Safe?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-400">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-01: Kobe → Chennai (37.1 MT RoRo)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"KOBE TO CHENNAI RORO MOVEMENT - 904 x 310 x 316 cm - WT 37100 KG (April 2023)"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-02: Masan → Chennai (200 MT / 837 CBM)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"MASAN TO CHENNAI BB MOVEMENT - 22 Packages / 837 cbm / WT 200 MT (May 2023)"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-03: Qingdao → Sohar & Dammam (16 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"QINGDAO TO SOHAR & DAMMAM - 4 x BBK unit on cntr. vessel 760 x 615 x 50 cm/ 16 MT + 1 x 20 FR and 1 X40 FRfor each POD"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-04: Al Jubail → Jebel Ali (296 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"AL JUBAIL TO JEBEL ALI - Door-Delivery Heaviest piece- 2 x 148 MT + Accessories"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-05: Nhava Sheva → Mogadishu (135 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"EX NHAVA SHEVA TO MOGADISHU - 5 x 40 FR - WT 27000 KG each"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-06: Genoa → Sohar (318.4 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"EX GENOA TO SOHAR - 8 x 40 FR – 319 x 231 x 360 cm- WT 39800 KG each (lots of 2 x 40 FR loaded on consecutive vessels)"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-07: Genoa → Jebel Ali (1,156 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"EX GENOA TO JEBEL ALI - 360 x 263 x 400 cm- WT 68000 KG each Total 17 units moved in different lots (Door to Door )"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-08: Hamburg → Jeddah (Breakbulk)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"HAMBURG TO JEDDAH - Ex-Works Break Bulk Shipment"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-09: Shanghai → Jebel Ali (482 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"SHANGHAI TO JEBEL ALI - Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-10: Venice → Mundra (21 MT)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"VENICE TO MUNDRA - Ex-Works 410 x 345 x 495 cm – 21000 KG"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">MV-11: Venice → Mundra (27m Boom Crane)</td>
                  <td className="p-3 text-slate-400">project.html</td>
                  <td className="p-3 text-slate-400">Tier-D Project Record</td>
                  <td className="p-3 text-[11px] text-slate-300">"VENICE TO MUNDRA - Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on cntr. vessel"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">CBIC Indian Customs AEO Certificate</td>
                  <td className="p-3 text-slate-400">public/images/AEO.jpg</td>
                  <td className="p-3 text-emerald-400 font-bold">Tier-A Official License</td>
                  <td className="p-3 text-[11px] text-slate-300">"AUTHORIZED ECONOMIC OPERATOR CERTIFICATE - Freight Forwarder - LO - Certificate Number : INAAQCA4076M0F243 - Valid upto 19/08/2029"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">Security Cargo Network (SCN)</td>
                  <td className="p-3 text-slate-400">SCN_-Member_certificate.png</td>
                  <td className="p-3 text-amber-400">Tier-C Certificate</td>
                  <td className="p-3 text-[11px] text-slate-300">"2024 MEMBER IN GOOD STANDING PROUDLY PRESENTED TO Freyer International Logistics Pvt. Ltd. (India) - Member Number: 420 - Member since February 2019"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 font-semibold text-white">Worldwide Partners Alliance (WPA)</td>
                  <td className="p-3 text-slate-400">awards/11.jpeg, 13.jpeg</td>
                  <td className="p-3 text-amber-400">Tier-C Trophy</td>
                  <td className="p-3 text-[11px] text-slate-300">"Voted by WPA Network as: Global Winner - 2022/23 Most Valuable Member South Asia (Bangkok) & Global Winner - 2023/24 EXCELLENT SALES (Phuket)"</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">YES</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL FOOTER */}
      <footer className="border-t border-white/10 bg-black py-8 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Freyer International Logistics Pvt. Ltd. &bull; Cartographic Evidence Registry
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Chennai HQ: TAGA Tower, Sait Colony, Egmore</span>
            <span>&bull;</span>
            <Link href="/experiments/india-map-presentation-final" className="hover:text-white transition">
              India Presentation Cut &rarr;
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
