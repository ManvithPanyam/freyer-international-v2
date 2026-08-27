"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Hls from "hls.js";

export function HomeHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const shipY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const shipScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const hlsUrl = "/video/hls/master.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        autoStartLoad: true,
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        setVideoLoaded(true);
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
        setVideoLoaded(true);
      });
    } else {
      video.src = "/video/freyer-hero.mp4";
      video.addEventListener("canplay", () => {
        video.play().catch(() => {});
        setVideoLoaded(true);
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#02050e] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* ── Background Moving Ship with Spatial Depth ── */}
      <motion.div
        style={{ y: shipY, scale: shipScale }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src="/images/hero-poster.jpg"
          alt="Freyer container vessel navigating deep sea trade lanes"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{
            opacity: videoLoaded ? 0 : 0.9,
            transition: "opacity 0.8s ease",
            filter: "saturate(0.95) brightness(0.8)",
          }}
        />

        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: videoLoaded ? 0.82 : 0,
              transition: "opacity 0.8s ease",
              filter: "saturate(0.95) brightness(0.8)",
            }}
          />
        )}

        {/* Ambient Oceanic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02050e]/90 via-transparent to-black/50" />
      </motion.div>

      {/* ── Spatial Typographic Narrative ── */}
      <div className="pt-24 sm:pt-28 px-6 sm:px-12 lg:px-20 relative z-10" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-12 lg:px-20 my-auto"
      >
        <div className="max-w-5xl space-y-6">
          <motion.div style={{ y: textY1 }}>
            <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-[0.4em] uppercase font-bold block mb-4">
              Integrated Heavy Logistics · Freyer International
            </span>

            <h1
              className="font-black tracking-[-0.05em] text-white leading-[0.86] select-none"
              style={{ fontSize: "clamp(3.5rem, 9.5vw, 9.5rem)" }}
            >
              WE MOVE WHAT
            </h1>
          </motion.div>

          <motion.div style={{ y: textY2 }} className="space-y-6">
            <h1
              className="font-black tracking-[-0.05em] text-slate-300 font-light italic leading-[0.86] select-none"
              style={{ fontSize: "clamp(3.5rem, 9.5vw, 9.5rem)" }}
            >
              OTHERS CAN’T.
            </h1>

            <p className="text-slate-200 text-base sm:text-2xl font-light leading-relaxed max-w-2xl pt-2">
              Integrated multimodal freight forwarding, AEO Tier-2 customs brokerage, and heavy-lift engineering across India and global trade corridors.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="inline-flex items-center gap-3 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs sm:text-sm font-mono tracking-widest uppercase font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#c42f0b]/30 transition-all hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#scale"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono tracking-wider px-6 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Discover Scale</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Subdued Horizon Baseline ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md py-4 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-white font-bold">10 INDIAN HUBS</span>
            <span className="text-slate-600">·</span>
            <span className="text-white font-bold">AEO TIER-2</span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-white font-bold hidden sm:inline">IATA REGULATED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse" />
            <span>Scroll for physical journey</span>
          </div>
        </div>
      </div>
    </section>
  );
}
