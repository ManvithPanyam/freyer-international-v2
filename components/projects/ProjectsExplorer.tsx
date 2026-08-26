"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, Box, Layers, Calendar, ShieldCheck, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  route_origin: string;
  route_destination: string;
  transport_mode: string;
  details: string;
  dimensions_cm: string | null;
  weight_kg: number | null;
  weight_mt: number | null;
  packages: number | null;
  cbm: number | null;
  date: string | null;
  incoterm: string | null;
  special_handling: string | null;
  local_images: string[];
}

export function ProjectsExplorer({ initialProjects }: { initialProjects: Project[] }) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const filters = ["All", "Break Bulk", "Flat Rack", "RORO", "Door to Door"];

  const filteredProjects = initialProjects.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Break Bulk") return p.transport_mode.toLowerCase().includes("break bulk") || p.transport_mode.toLowerCase().includes("bb");
    if (selectedFilter === "Flat Rack") return p.transport_mode.toLowerCase().includes("flat rack");
    if (selectedFilter === "RORO") return p.transport_mode.toLowerCase().includes("roro");
    if (selectedFilter === "Door to Door") return p.transport_mode.toLowerCase().includes("door");
    return true;
  });

  return (
    <div>
      {/* ── Mode Filter Tabs ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 text-xs font-mono rounded-full whitespace-nowrap transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b4a] ${
              selectedFilter === filter
                ? "bg-[#c42f0b] text-white font-semibold shadow-md shadow-[#c42f0b]/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/8"
            }`}
          >
            {filter} {filter === "All" && `(${initialProjects.length})`}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-[#0b182d] rounded-xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                {/* Primary Image Thumbnail */}
                <div
                  onClick={() => project.local_images.length > 0 && setActiveImageModal(project.local_images[0])}
                  className="relative aspect-[16/10] bg-black/40 cursor-pointer overflow-hidden"
                >
                  {project.local_images.length > 0 ? (
                    <Image
                      src={project.local_images[0]}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                      Operations Archived
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b182d] via-transparent to-transparent" />
                  
                  {/* Transport Mode Badge */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/15 text-[#ff6b4a] text-[10px] font-mono px-2.5 py-1 rounded tracking-wider uppercase font-semibold">
                    {project.transport_mode}
                  </span>

                  {/* Photo Count */}
                  {project.local_images.length > 1 && (
                    <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                      +{project.local_images.length} photos
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Origin -> Destination Route */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-white font-semibold">{project.route_origin}</span>
                    <ArrowRight className="w-3 h-3 text-[#ff6b4a]" />
                    <span className="text-white font-semibold">{project.route_destination}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#ff6b4a] transition-colors">
                    {project.title}
                  </h3>

                  {/* Technical Spec List */}
                  <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                    {project.weight_mt && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Gross Weight</dt>
                        <dd className="text-white font-mono font-medium">{project.weight_mt} MT</dd>
                      </div>
                    )}
                    {project.weight_kg && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Gross Weight</dt>
                        <dd className="text-white font-mono font-medium">{project.weight_kg.toLocaleString()} KG</dd>
                      </div>
                    )}
                    {project.dimensions_cm && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Dimensions (L×W×H)</dt>
                        <dd className="text-white font-mono font-medium">{project.dimensions_cm} cm</dd>
                      </div>
                    )}
                    {project.packages && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Package Count</dt>
                        <dd className="text-white font-mono font-medium">{project.packages} PKG</dd>
                      </div>
                    )}
                    {project.cbm && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Volume</dt>
                        <dd className="text-white font-mono font-medium">{project.cbm} CBM</dd>
                      </div>
                    )}
                    {project.incoterm && (
                      <div className="flex justify-between">
                        <dt className="text-slate-400 font-mono">Incoterm</dt>
                        <dd className="text-white font-mono font-medium">{project.incoterm}</dd>
                      </div>
                    )}
                  </dl>

                  {/* Special Handling / Notes */}
                  {project.special_handling && (
                    <div className="mt-4 p-3 bg-white/[0.03] border border-white/5 rounded text-[11px] text-slate-300 leading-relaxed">
                      <span className="text-[#ff6b4a] font-mono font-semibold block mb-0.5">Execution Notes:</span>
                      {project.special_handling}
                    </div>
                  )}

                  {/* Thumbnail gallery strip */}
                  {project.local_images.length > 1 && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-white/10 overflow-x-auto scrollbar-none">
                      {project.local_images.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageModal(imgSrc)}
                          className="relative w-12 h-12 rounded overflow-hidden shrink-0 border border-white/10 hover:border-[#ff6b4a] transition-colors focus:outline-none"
                        >
                          <Image src={imgSrc} alt="" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {project.date || "Verified Operation"}
                </span>
                <a
                  href="/#quote"
                  className="text-xs font-semibold text-[#ff6b4a] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Inquire Similar Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Image Lightbox Modal ── */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={activeImageModal}
                alt="Project Cargo Execution Photo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
