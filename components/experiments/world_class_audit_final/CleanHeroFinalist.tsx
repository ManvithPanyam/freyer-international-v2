"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, PhoneCall } from "lucide-react";

export function CleanHeroFinalist() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Respect prefers-reduced-motion — don't autoplay video if reduced motion preferred
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);
    // If video is already ready
    if (video.readyState >= 3) {
      setVideoLoaded(true);
    }
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between bg-[#060c18] text-white overflow-hidden">
      {/* ── Cinematic Rolling Container Ship Video Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Poster frame — shown immediately, fades smoothly as video streams */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Freyer International Container Shipping"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 0.25 : 0.85 }}
        />

        {/* Rolling Container Ship Video (Muted, looping, playsInline) */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            src="/video/freyer-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            style={{
              opacity: videoLoaded ? 0.55 : 0,
              filter: "saturate(0.85) contrast(1.05)",
            }}
          />
        )}

        {/* Deep, calm architectural gradients — preserves pristine typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/65 to-[#060c18]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c18] via-[#060c18]/80 to-transparent" />
      </div>

      {/* Top Quiet Masthead */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-20 sm:pt-24 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="text-xs font-mono tracking-widest uppercase text-slate-300">
          Freyer International Logistics
        </div>
        <div className="text-xs font-mono text-slate-400">
          Registered Office: Chennai, India
        </div>
      </div>

      {/* Primary Statement — Pure Editorial Discipline */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-12 my-auto">
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            Freight Forwarding &bull; Project Cargo &bull; Customs Brokerage
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            LOGISTICS BEYOND <br />
            BOUNDARIES.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            International air and ocean freight forwarding, licensed customs brokerage, 
            and breakbulk project cargo handled with verifiable operational precision.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#cargo-finalist"
              className="inline-flex items-center gap-2 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider font-mono transition"
            >
              <span>Inspect 482 MT Record</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#network-finalist"
              className="inline-flex items-center gap-2 rounded border border-white/20 hover:border-white/40 bg-white/5 text-white px-5 py-3 text-xs font-medium uppercase tracking-wider font-mono transition"
            >
              <span>10 Indian Stations</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quiet, Factual Baseline */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#060c18]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>CBIC AEO-LO Certified &bull; IATA Approved Cargo Agent</div>
          <div className="flex items-center gap-2 text-slate-300">
            <PhoneCall className="w-3.5 h-3.5 text-[#e1390f]" />
            <span>Chennai HQ: +91 44 43191919</span>
          </div>
        </div>
      </div>
    </section>
  );
}
