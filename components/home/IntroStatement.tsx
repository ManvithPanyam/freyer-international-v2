import React from "react";

export function IntroStatement() {
  return (
    <section className="py-20 sm:py-28 bg-[#f8f9fa] text-[#0b2144] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[#c42f0b] text-xs font-semibold tracking-widest uppercase font-mono block">
          Operating Philosophy
        </span>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b2144] leading-tight max-w-4xl mx-auto">
          &ldquo;We don&apos;t just want to move your goods from point A to point B. We want to understand your business and design a solution to fit your requirements.&rdquo;
        </blockquote>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
          From high-velocity international air and ocean freight to turnkey project cargo engineering — backed by AEO-certified customs brokerage across 10 operational hubs in India.
        </p>
      </div>
    </section>
  );
}
