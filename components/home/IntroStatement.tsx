import React from "react";

export function IntroStatement() {
  return (
    <section className="py-20 sm:py-28 bg-[#f8f9fa] text-[#0b2144] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[#c42f0b] text-xs font-semibold tracking-widest uppercase font-mono">
          Integrated Global Logistics
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2144] leading-tight max-w-4xl mx-auto">
          From high-velocity air freight to heavy-lift project engineering across India and global trade lanes.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          Headquartered with strategic presence in 10 commercial hubs, Freyer pairs rigorous customs compliance with specialized multimodal cargo transport.
        </p>
      </div>
    </section>
  );
}
