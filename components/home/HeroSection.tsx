"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Pause } from "lucide-react";

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [prefersReducedMotion]);

  const toggleBackgroundVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-[#07152b] text-white overflow-hidden pt-24 pb-16"
    >
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Poster frame */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: videoLoaded && isPlaying ? 0 : 0.75,
            transition: "opacity 1.2s ease",
            filter: "saturate(0.95)",
          }}
        />

        {/* 1080p Corporate Video */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: videoLoaded && isPlaying ? 0.72 : 0,
              transition: "opacity 1.2s ease",
              filter: "saturate(0.95)",
            }}
          >
            <source src="/video/freyer-hero.mp4" media="(min-width: 768px)" type="video/mp4" />
            <source src="/video/freyer-hero-mobile.mp4" type="video/mp4" />
          </video>
        )}

        {/* Neutral black vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: "inset 0 0 180px 60px rgba(0,0,0,0.35)" }}
        />

        {/* Background Video Pause/Play Control (WCAG 2.2.2) */}
        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={toggleBackgroundVideo}
            className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* ── Hero Content — centered, cinematic ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.04] max-w-4xl"
        >
          Complex cargo.
          <br />
          <span className="text-slate-300 font-light italic">
            Precisely moved.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 text-base sm:text-lg text-slate-300/90 max-w-xl font-normal leading-relaxed"
        >
          Air, ocean, customs and project cargo — across India and beyond.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex items-center justify-center w-full sm:w-auto"
        >
          <a
            href="/#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] active:bg-[#8f1f04] text-white font-semibold px-9 py-4 rounded-sm text-sm sm:text-base transition-colors duration-150 shadow-2xl shadow-[#c42f0b]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152b]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
