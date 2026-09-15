"use client";

import React from "react";
import { MapPin, Building2, CheckCircle2 } from "lucide-react";

export function ServicesToNetworkBridge() {
  return (
    <div className="relative bg-[#040810] text-white border-t border-white/10 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e1390f]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
                National Operating Footprint
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              CAPABILITIES REQUIRE <br />
              PHYSICAL GROUND PRESENCE.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Global forwarding cannot operate from behind a digital portal alone. 
              Freyer anchors its operations through 10 fully staffed branch stations across 8 commercial hubs, 
              providing on-dock stevedoring, airport ramp clearance, and licensed customs brokerage at India's primary trade gates.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-4 border-l border-white/10 pl-0 lg:pl-8 pt-4 lg:pt-0">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Operating Stations
              </div>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                10 Branch Offices
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Commercial Hubs
              </div>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                8 Indian Cities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
