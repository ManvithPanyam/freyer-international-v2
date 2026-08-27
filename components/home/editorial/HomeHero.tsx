"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Hls from "hls.js";

export function HomeHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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
      className="relative h-screen w-full bg-[#03060f] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* ── Background Logistics Visual ── */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        {/* 0ms Poster Frame */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Freyer International cargo vessel and heavy logistics operations"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{
            opacity: videoLoaded && isPlaying ? 0 : 0.85,
            transition: "opacity 0.8s ease",
            filter: "saturate(0.95) brightness(0.85)",
          }}
        />

        {/* Adaptive HLS Video Stream */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: videoLoaded && isPlaying ? 0.75 : 0,
              transition: "opacity 0.8s ease",
              filter: "saturate(0.95) brightness(0.85)",
            }}
          />
        )}

        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060f] via-black/25 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/50" />
      </motion.div>

      {/* ── Top Spacer (Preserves clean room below header) ── */}
      <div className="pt-28 sm:pt-32 px-6 sm:px-12 lg:px-20 relative z-10" />

      {/* ── Dominant Statement ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1560px] mx-auto w-full px-6 sm:px-12 lg:px-20 my-auto py-6"
      >
        <div className="max-w-5xl">
          <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-[0.35em] uppercase font-bold block mb-4">
            Integrated Global Logistics · Freyer International
          </span>

          <h1
            className="font-black tracking-[-0.045em] text-white leading-[0.88] select-none"
            style={{ fontSize: "clamp(3.25rem, 8.5vw, 8.5rem)" }}
          >
            WE MOVE WHAT
            <br />
            <span className="text-slate-300 font-light italic">
              OTHERS CAN’T.
            </span>
          </h1>

          <p className="mt-6 text-slate-200 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
            Integrated multimodal freight forwarding, AEO Tier-2 customs brokerage, and heavy-lift project engineering across India and global trading corridors.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#quote"
              className="inline-flex items-center gap-3 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs sm:text-sm font-mono tracking-widest uppercase font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#c42f0b]/25 transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#scale"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-mono tracking-wider px-6 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all"
            >
              <span>Explore The Journey</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom Subtle Scroll Prompt ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-xs py-4 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold">10 INDIAN HUBS</span>
            <span className="text-slate-600">·</span>
            <span className="text-white font-bold">AEO TIER-2 CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-ping" />
            <span>Scroll to begin narrative</span>
          </div>
        </div>
      </div>
    </section>
  );
}
