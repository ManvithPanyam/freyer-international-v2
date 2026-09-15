"use client";

import React, { useState } from "react";
import Image from "next/image";

export function CargoScaleFinalist() {
  const [activeTab, setActiveTab] = useState<"482mt" | "37mt">("482mt");

  return (
    <section id="cargo-finalist" className="relative bg-[#040810] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            Verified Project Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            THE SCALE OF 482 METRIC TONS.
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            No synthetic simulations. No invented stages. This is the documented physical weight and volume of heavy breakbulk freight executed by Freyer.
          </p>
        </div>

        {/* Record Toggle */}
        <div className="flex gap-3 pt-6 pb-8">
          <button
            onClick={() => setActiveTab("482mt")}
            className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition ${
              activeTab === "482mt"
                ? "bg-[#e1390f] text-white font-bold"
                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            Record #9 &bull; 482 MT Breakbulk
          </button>
          <button
            onClick={() => setActiveTab("37mt")}
            className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition ${
              activeTab === "37mt"
                ? "bg-[#e1390f] text-white font-bold"
                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            Record #11 &bull; 37.6 MT Boom Crane
          </button>
        </div>

        {/* Content View: 482 MT Breakbulk */}
        {activeTab === "482mt" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Raw Photographic Evidence */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] rounded-lg overflow-hidden border border-white/10 bg-black">
              <Image
                src="/images/2.1.jpg"
                alt="Freyer Breakbulk Shipment 482 MT"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Field Documentation Photo</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Shanghai to Jebel Ali &bull; 29 Packages Break Bulk Stowage
                </div>
              </div>
            </div>

            {/* Stark Monumental Data */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-[#071120] border border-white/10 space-y-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#e1390f]">Total Documented Weight</div>
                <div className="text-6xl sm:text-7xl font-bold font-mono tracking-tight text-white mt-1">
                  482 <span className="text-2xl sm:text-3xl text-[#e1390f]">MT</span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-6 border-y border-white/10 py-6">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Total Volume</div>
                  <div className="text-2xl font-mono font-bold text-white mt-0.5">796 CBM</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Package Units</div>
                  <div className="text-2xl font-mono font-bold text-white mt-0.5">29 Packages</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Port of Loading</div>
                  <div className="text-base font-semibold text-slate-200 mt-0.5">Shanghai, China</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Port of Discharge</div>
                  <div className="text-base font-semibold text-slate-200 mt-0.5">Jebel Ali, UAE</div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 leading-relaxed">
                Source: <span className="text-slate-200 font-sans">Official Freyer project archive record #9. Verified freight configuration: Break Bulk.</span>
              </div>
            </div>
          </div>
        )}

        {/* Content View: 37.6 MT Boom Crane */}
        {activeTab === "37mt" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Raw Photographic Evidence */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] rounded-lg overflow-hidden border border-white/10 bg-black">
              <Image
                src="/images/11.1.jpg"
                alt="Freyer Boom Crane 37.6 MT"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Field Documentation Photo</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Venice to Mundra &bull; 27-Meter Boom Crane Deck Stowage
                </div>
              </div>
            </div>

            {/* Stark Monumental Data */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-[#071120] border border-white/10 space-y-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#e1390f]">Verified Unit Weight</div>
                <div className="text-6xl sm:text-7xl font-bold font-mono tracking-tight text-white mt-1">
                  37.6 <span className="text-2xl sm:text-3xl text-[#e1390f]">MT</span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-6 border-y border-white/10 py-6">
                <div className="col-span-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Dimensions</div>
                  <div className="text-2xl font-mono font-bold text-white mt-0.5">2,700 × 400 × 455 CM</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Origin</div>
                  <div className="text-base font-semibold text-slate-200 mt-0.5">Venice, Italy</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Destination</div>
                  <div className="text-base font-semibold text-slate-200 mt-0.5">Mundra, India</div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 leading-relaxed">
                Source Note: <span className="text-slate-200 font-sans italic">"Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel."</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
