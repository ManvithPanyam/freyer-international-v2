"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Pause, X } from "lucide-react";

export function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const watchButtonRef = useRef<HTMLButtonElement>(null);

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

  // Handle video pause / play toggle
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

  // Close modal on Escape and restore focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalOpen(false);
        watchButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center bg-[#07152b] text-white overflow-hidden pt-20 pb-16"
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
              opacity: videoLoaded && isPlaying ? 0 : 0.72,
              transition: "opacity 1.2s ease",
              filter: "saturate(0.9)",
            }}
          />

          {/* Corporate video */}
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
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                opacity: videoLoaded && isPlaying ? 0.68 : 0,
                transition: "opacity 1.2s ease",
                filter: "saturate(0.9)",
              }}
            />
          )}

          {/* Neutral black vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />
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

        {/* ── Hero Content ── */}
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
            International air &amp; ocean freight, AEO-certified customs
            brokerage, and turnkey project cargo across 10 operational hubs in
            India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] active:bg-[#8f1f04] text-white font-semibold px-8 py-4 rounded-sm text-sm sm:text-base transition-colors duration-150 shadow-2xl shadow-[#c42f0b]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152b]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              ref={watchButtonRef}
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/15 active:bg-white/20 text-white border border-white/15 hover:border-white/30 font-medium px-7 py-4 rounded-sm text-sm sm:text-base transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Watch Freyer corporate film"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Film</span>
            </button>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase"
          >
            Scroll to explore ↓
          </motion.div>
        </div>
      </section>

      {/* ── Corporate Film Modal ── */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setVideoModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Freyer corporate film"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  watchButtonRef.current?.focus();
                }}
                className="absolute top-3 right-3 z-10 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 min-w-[44px] min-h-[44px] rounded-full backdrop-blur-sm transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close film"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src="https://www.youtube-nocookie.com/embed/KEFt2quibkg?autoplay=1&rel=0&modestbranding=1"
                title="Freyer International Logistics — Corporate Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
