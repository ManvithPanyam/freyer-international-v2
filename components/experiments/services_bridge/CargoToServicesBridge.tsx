"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

interface BridgeProps {
  conceptName?: string;
}

export function CargoToServicesBridge({ conceptName }: BridgeProps) {
  return (
    <div className="relative bg-[#040810] text-white border-t border-white/10 py-16 sm:py-24 overflow-hidden">
      {/* Structural Bridge Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e1390f]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
                Operational Continuity
              </span>
            </div>
            <h3 id="cargo-bridge-heading" className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              THE SAME MARITIME RIGOR. <br />
              APPLIED TO EVERY CONSIGNMENT.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Moving 482 metric tons across ocean terminals demands uncompromising carrier leverage, 
              direct port stevedoring access, and precise customs execution. 
              Freyer applies this exact operational standard across our complete forwarding infrastructure.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-4 border-l border-white/10 pl-0 lg:pl-8 pt-4 lg:pt-0">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Core Forwarding Infrastructure
              </div>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                6 Verified Capabilities
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Warehouse Footprint
              </div>
              <div className="text-xl font-mono font-bold text-white mt-0.5">
                1,000,000+ SQ FT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
