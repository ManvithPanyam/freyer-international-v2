"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";

export function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section id="top" className="relative min-h-screen flex items-center justify-center bg-[#07152b] text-white overflow-hidden pt-20 pb-16">
        {/* Background Image / Poster Frame with Subtle Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slide4.jpg"
            alt="Freyer International Multimodal Logistics Operations"
            fill
            priority
            className="object-cover object-center opacity-40 filter saturate-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/60 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Main Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            Complex cargo. <br className="hidden sm:inline" />
            <span className="text-slate-300 font-light italic">Precisely moved.</span>
          </motion.h1>

          {/* Concise Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed"
          >
            International air & ocean freight forwarding, AEO-certified customs brokerage, and turnkey project cargo engineering across 10 strategic hubs in India.
          </motion.p>

          {/* Actions: 1 Primary CTA + 1 Watch Film Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white font-semibold px-8 py-4 rounded text-sm sm:text-base transition-all duration-200 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-7 py-4 rounded text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Film</span>
            </button>
          </motion.div>

          {/* Subtle Scroll Cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 text-[11px] font-mono tracking-widest text-slate-400 uppercase"
          >
            Scroll to Explore ↓
          </motion.div>
        </div>
      </section>

      {/* Corporate Film Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setVideoModalOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/60 p-2 rounded-full backdrop-blur-sm focus:outline-none"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube-nocookie.com/embed/KEFt2quibkg?autoplay=1&rel=0"
                title="Freyer Logistics Corporate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
