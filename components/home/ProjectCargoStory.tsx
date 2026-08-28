"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectCargoStory() {
  const containerRef = useRef<HTMLElement>(null);
  const routeLineRef = useRef<HTMLDivElement>(null);
  const routeDotRef = useRef<HTMLDivElement>(null);
  const metricCardRef = useRef<HTMLDivElement>(null);
  const specTagsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Coordinated Background Zoom & Drift
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1, yPercent: 0 },
          {
            scale: 1.06,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 2. Continuous Scroll-Linked Route Corridor Draw (MUNDRA -> SITE)
      if (routeLineRef.current && routeDotRef.current) {
        const routeTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "center 40%",
            scrub: 0.5,
          },
        });

        routeTl
          .fromTo(
            routeLineRef.current,
            { width: "0%" },
            { width: "100%", ease: "power1.inOut" }
          )
          .fromTo(
            routeDotRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, ease: "back.out(2)" },
            "-=0.2"
          );
      }

      // 3. Staged Engineering Spec Tags Reveal
      if (specTagsRef.current?.children) {
        gsap.fromTo(
          specTagsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: specTagsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 4. Metric Telemetry Dossier Card Entrance
      if (metricCardRef.current) {
        gsap.fromTo(
          metricCardRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metricCardRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="project-cargo"
      ref={containerRef}
      className="relative bg-[#040914] text-white py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-b border-white/10"
    >
      {/* ── Background Photography Layer with Cinematic Depth ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src="/images/11.4.jpg"
            alt="ITALGRU heavy-lift crane boom structure on vessel flatracks — Freyer project cargo engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter: "brightness(0.92) contrast(1.08) saturate(0.9)",
            }}
          />
          {/* Subtle directional gradients for high-contrast typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040914]/95 via-[#040914]/75 to-[#040914]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-[#040914]/80" />
        </div>
      </div>

      {/* ── Editorial Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Technical Metadata Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-[0.22em] text-[#ff6b4a] uppercase font-bold">
              PROJECT CARGO // 37.6 MT
            </span>
            <span className="text-slate-600 font-mono text-xs">|</span>
            <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
              HEAVY-LIFT BREAKBULK MOVEMENT
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ff6b4a]" />
              Port-to-Foundation Turnkey
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Civil Route Clearance
            </span>
          </div>
        </div>

        {/* ── Signature Movement Corridor: MUNDRA ──→ SITE ── */}
        <div className="pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Movement Trajectory & Spatial Route Typography */}
            <div className="lg:col-span-7 space-y-8">
              {/* Route Trajectory Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                  <span>MUNDRA</span>
                  <div className="relative flex-1 min-w-[60px] sm:min-w-[120px] max-w-[200px] h-[2px] bg-white/20">
                    <div
                      ref={routeLineRef}
                      className="absolute top-0 left-0 bottom-0 bg-[#ff6b4a] shadow-[0_0_10px_#ff6b4a]"
                    />
                    <div
                      ref={routeDotRef}
                      className="absolute -right-1.5 -top-1 w-2.5 h-2.5 rounded-full bg-[#ff6b4a]"
                    />
                  </div>
                  <span className="text-slate-300 font-light italic">SITE</span>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
                  Turnkey heavy-lift engineering for an ITALGRU boom crane superstructure — navigating 1,420 km of civil bypasses, bridge load distributions, and port-to-foundation placement.
                </p>
              </div>

              {/* Verified Technical Tags */}
              <div ref={specTagsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Configuration</div>
                  <div className="text-sm font-bold text-white mt-1">12-Axle Hydraulic SPMT</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Dimensions</div>
                  <div className="text-sm font-bold text-white mt-1">2,700 × 400 × 455 cm</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm backdrop-blur-sm">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Surveyed Route</div>
                  <div className="text-sm font-bold text-white mt-1">1,420 KM Corridor</div>
                </div>
              </div>

              {/* Commercial Direct Action */}
              <div className="pt-4">
                <Link
                  href="/services/project-cargo"
                  className="inline-flex items-center gap-3 bg-[#c42f0b] hover:bg-[#a82506] active:bg-[#8f1f04] text-white font-semibold text-sm px-7 py-4 rounded-sm transition-colors duration-150 shadow-xl shadow-[#c42f0b]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Project Cargo Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: The Monumental Metric (One Dominant Engineering Fact) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <div
                ref={metricCardRef}
                className="relative bg-[#071224]/85 border border-white/15 p-8 sm:p-10 rounded-sm backdrop-blur-md w-full max-w-md shadow-2xl"
              >
                {/* Metric Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#ff6b4a] uppercase font-bold">
                    Primary Single Piece
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6b4a]" />
                    Mundra Quayside
                  </span>
                </div>

                {/* Colossal 37.6 MT */}
                <div className="space-y-1">
                  <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none">
                    37.6 <span className="text-3xl sm:text-4xl text-[#ff6b4a] font-light">MT</span>
                  </div>
                  <div className="text-sm font-mono tracking-widest text-slate-300 uppercase pt-2">
                    Superstructure Boom Assembly
                  </div>
                </div>

                {/* Engineered Execution Details */}
                <p className="mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Lashed on heavy-duty vessel flatracks with certified marine lashing calculations, transferred to hydraulic multi-axle trailers without intermediate laydown.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
