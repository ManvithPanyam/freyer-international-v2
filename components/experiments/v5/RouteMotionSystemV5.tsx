"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface RouteConnectorProps {
  label?: string;
  sourceCity?: string;
  destinationCity?: string;
  theme?: "darkToLight" | "lightToDark" | "darkToDark";
}

/**
 * Reusable vertical route-line transition connecting editorial sections.
 * Draws itself on scroll and carries a traveling precision cargo pip.
 */
export function SectionRouteConnector({
  label = "Transit Corridor",
  sourceCity,
  destinationCity,
  theme = "darkToLight",
}: RouteConnectorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.75], [0.35, 1]);
  const pipY = useTransform(scrollYProgress, [0.1, 0.75], [15, 92]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 0.95], [0.75, 1, 1, 0.75]);

  const lineColor =
    theme === "darkToLight"
      ? "#e1390f"
      : theme === "lightToDark"
      ? "#38bdf8"
      : "#f59e0b";

  return (
    <div
      ref={ref}
      className="relative w-full h-24 sm:h-32 flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <motion.div style={{ opacity }} className="relative flex flex-col items-center">
        {/* Origin Pill / Indicator */}
        {sourceCity && (
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
            {sourceCity}
          </span>
        )}

        {/* The Vector Hairline */}
        <div className="relative w-4 h-20 sm:h-24 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 16 100">
            {/* Background track */}
            <line
              x1="8"
              y1="0"
              x2="8"
              y2="100"
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            {/* Active Drawing Route Line */}
            <motion.line
              x1="8"
              y1="0"
              x2="8"
              y2="100"
              stroke={lineColor}
              strokeWidth="1.5"
              style={{ pathLength }}
            />
            {/* Traveling Precision Cargo Micro-Pip */}
            <motion.circle
              cx="8"
              r="2.5"
              fill={lineColor}
              style={{ cy: pipY }}
            />
          </svg>
        </div>

        {/* Destination / Section Milestone */}
        {destinationCity && (
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mt-1">
            {destinationCity}
          </span>
        )}
      </motion.div>
    </div>
  );
}

/**
 * Standalone Demonstration Workbench for Experiment C (Route-Line Motion System)
 */
export function RouteMotionWorkbench() {
  return (
    <div className="min-h-screen bg-[#060e1a] text-white py-20 px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="pb-8 border-b border-white/10 mb-16">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#e1390f] mb-2">
          [Experiment C]
        </div>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
          Route-Line Motion System
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light">
          A reusable visual motion language based on physical cargo movement. Drawing vector hairlines, traveling precision indicators, and interstitial docking transitions.
        </p>
      </div>

      {/* State 1: Hero to Network Corridor */}
      <div className="space-y-12">
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            State 01 &bull; Hero &rarr; 10 Stations
          </div>
          <p className="text-sm text-slate-300 font-light mb-6">
            Connects global maritime arrival to domestic operating footprint.
          </p>
          <SectionRouteConnector
            sourceCity="Port of Chennai"
            destinationCity="10 Stations Network"
            theme="darkToLight"
          />
        </div>

        {/* State 2: Network to Project Cargo */}
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            State 02 &bull; 10 Stations &rarr; Project Cargo
          </div>
          <p className="text-sm text-slate-300 font-light mb-6">
            Transforms administrative national network into heavy engineering breakbulk movement.
          </p>
          <SectionRouteConnector
            sourceCity="National Network"
            destinationCity="Heavy Lift (482 MT)"
            theme="lightToDark"
          />
        </div>

        {/* State 3: Project Cargo to Integrated Services */}
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            State 03 &bull; Project Cargo &rarr; Services System
          </div>
          <p className="text-sm text-slate-300 font-light mb-6">
            Docks heavy lift execution into comprehensive air, ocean, customs, and warehousing capabilities.
          </p>
          <SectionRouteConnector
            sourceCity="Project Cargo"
            destinationCity="6 Disciplines"
            theme="darkToDark"
          />
        </div>
      </div>
    </div>
  );
}
