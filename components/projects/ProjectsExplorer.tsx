"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ChevronRight, ChevronLeft, Maximize2 } from "lucide-react";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Curate ordering so the lead featured project is the highest visual impact & engineering complexity (Boom Crane Project #11, Shanghai 482 MT #9, Masan 200 MT #2)
  const curatedProjects = React.useMemo(() => {
    const p11 = initialProjects.find((p) => p.id === 11);
    const p9 = initialProjects.find((p) => p.id === 9);
    const p2 = initialProjects.find((p) => p.id === 2);
    const others = initialProjects.filter((p) => p.id !== 11 && p.id !== 9 && p.id !== 2);
    return [p11, p9, p2, ...others].filter(Boolean) as Project[];
  }, [initialProjects]);

  const filters = ["All", "Break Bulk", "Flat Rack", "RORO", "Door to Door"];

  const filteredProjects = curatedProjects.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Break Bulk")
      return p.transport_mode.toLowerCase().includes("break bulk") || p.transport_mode.toLowerCase().includes("bb");
    if (selectedFilter === "Flat Rack")
      return p.transport_mode.toLowerCase().includes("flat rack");
    if (selectedFilter === "RORO")
      return p.transport_mode.toLowerCase().includes("roro");
    if (selectedFilter === "Door to Door")
      return p.transport_mode.toLowerCase().includes("door");
    return true;
  });

  const openProjectDetail = (p: Project) => {
    setSelectedProject(p);
    setActiveModalImageIndex(0);
  };

  const closeProjectDetail = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProjectDetail();
      } else if (e.key === "ArrowRight") {
        setActiveModalImageIndex((prev) =>
          prev < selectedProject.local_images.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveModalImageIndex((prev) =>
          prev > 0 ? prev - 1 : selectedProject.local_images.length - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, closeProjectDetail]);

  return (
    <div>
      {/* ── Editorial Filter Navigation ── */}
      <div className="flex items-center justify-between gap-4 pb-6 mb-12 sm:mb-16 border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-full shrink-0 ${
                selectedFilter === filter
                  ? "bg-[#0b2144] text-white font-bold shadow-xs"
                  : "bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 hover:text-[#0b2144]"
              }`}
            >
              {filter} {filter === "All" && `(${initialProjects.length})`}
            </button>
          ))}
        </div>
        <span className="hidden md:inline-block text-xs font-mono text-slate-400">
          Showing {filteredProjects.length} Verified Records
        </span>
      </div>

      {/* ── Premium Industrial Editorial Case Study Archive ── */}
      <div className="space-y-16 sm:space-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;

            return (
              <motion.article
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => openProjectDetail(project)}
                className="group cursor-pointer pb-16 sm:pb-24 border-b border-slate-200 last:border-b-0"
              >
                {/* ── Top Architectural Header Line ── */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[#c42f0b] font-bold tracking-widest uppercase">
                      CASE FILE #{project.id.toString().padStart(2, "0")}
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="uppercase tracking-wider text-slate-700 font-semibold">
                      {project.transport_mode}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    {project.date && <span className="text-slate-400">{project.date}</span>}
                    {project.local_images.length > 1 && (
                      <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-[#c42f0b]" />
                        <span>{project.local_images.length} ARCHIVAL PHOTOGRAPHS</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Editorial Asymmetric Spread ── */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isAlternate ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Documentary Photograph Frame */}
                  <div
                    className={`relative w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200/80 group-hover:border-slate-400/80 transition-all duration-300 ${
                      isAlternate
                        ? "lg:col-span-6 lg:order-2 aspect-[16/10]"
                        : "lg:col-span-7 lg:order-1 aspect-[16/10]"
                    }`}
                  >
                    {project.local_images.length > 0 ? (
                      <Image
                        src={project.local_images[0]}
                        alt={`${project.title} - Freyer project cargo engineering`}
                        fill
                        className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
                        Archived Operational Record
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Editorial Narrative & Engineering Specifications */}
                  <div
                    className={`space-y-6 ${
                      isAlternate
                        ? "lg:col-span-6 lg:order-1"
                        : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    {/* Monumental Route Typography */}
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#c42f0b] font-bold block mb-2">
                        Transit Corridor
                      </span>
                      <div className="flex flex-wrap items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0b2144]">
                        <span>{project.route_origin}</span>
                        <div className="flex items-center gap-1.5 text-[#c42f0b]">
                          <span className="w-5 sm:w-7 h-[2px] bg-[#c42f0b]" />
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </div>
                        <span className="text-slate-500 font-light italic">
                          {project.route_destination}
                        </span>
                      </div>
                    </div>

                    {/* Operational Scope Narrative */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                      {project.details}
                    </p>

                    {/* Inline Technical Specifications (tnum) */}
                    <div className="pt-5 border-t border-slate-200/80">
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 text-xs font-mono">
                        {project.weight_mt && (
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                              Total Mass
                            </span>
                            <span className="text-base font-bold text-[#0b2144] tabular-nums">
                              {project.weight_mt} MT
                            </span>
                          </div>
                        )}
                        {project.weight_kg && !project.weight_mt && (
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                              Total Mass
                            </span>
                            <span className="text-base font-bold text-[#0b2144] tabular-nums">
                              {project.weight_kg.toLocaleString()} KG
                            </span>
                          </div>
                        )}
                        {project.dimensions_cm && (
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                              Dimensions
                            </span>
                            <span className="text-sm font-semibold text-slate-800 tabular-nums">
                              {project.dimensions_cm} cm
                            </span>
                          </div>
                        )}
                        {project.cbm && (
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                              Volume
                            </span>
                            <span className="text-sm font-semibold text-slate-800 tabular-nums">
                              {project.cbm} CBM
                            </span>
                          </div>
                        )}
                        {project.packages && (
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                              Units
                            </span>
                            <span className="text-sm font-semibold text-slate-800 tabular-nums">
                              {project.packages} PKG
                            </span>
                          </div>
                        )}
                      </div>

                      {project.special_handling && (
                        <p className="text-xs text-slate-500 font-mono mt-3 line-clamp-2">
                          Special Scope: {project.special_handling}
                        </p>
                      )}
                    </div>

                    {/* Direct Case File Exploration Link */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#0b2144] group-hover:text-[#c42f0b] transition-colors uppercase">
                        <span>Inspect Complete Case File</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Deep Project Case Study Modal (Editorial Engineering Dossier) ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
            className="fixed inset-0 z-50 bg-[#071325]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#fbfcfd] border border-slate-200/90 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-[#0b2144]"
            >
              {/* Floating Close Button with 44x44 tap target */}
              <button
                ref={closeButtonRef}
                onClick={closeProjectDetail}
                className="absolute top-4 right-4 z-30 min-w-[44px] min-h-[44px] p-2.5 text-slate-600 hover:text-[#0b2144] rounded-full bg-white/90 hover:bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] flex items-center justify-center"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lead Archival Photographic Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                {selectedProject.local_images.length > 0 ? (
                  <Image
                    src={selectedProject.local_images[activeModalImageIndex] || selectedProject.local_images[0]}
                    alt={`${selectedProject.title} - Operational photo`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
                    Archived Operational Record
                  </div>
                )}

                {/* Mode Identifier Badge */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 text-[#ff6b4a] text-xs font-mono px-3 py-1 rounded-full font-bold uppercase">
                  {selectedProject.transport_mode}
                </div>

                {/* Left / Right Gallery Navigation Controls */}
                {selectedProject.local_images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveModalImageIndex((prev) =>
                          prev > 0 ? prev - 1 : selectedProject.local_images.length - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveModalImageIndex((prev) =>
                          prev < selectedProject.local_images.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Photo Counter Overlay */}
                {selectedProject.local_images.length > 1 && (
                  <div className="absolute bottom-3 right-4 bg-black/70 backdrop-blur-sm text-white font-mono text-[11px] px-2.5 py-1 rounded-md">
                    {activeModalImageIndex + 1} / {selectedProject.local_images.length}
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {selectedProject.local_images.length > 1 && (
                <div className="p-3.5 bg-slate-100/80 border-b border-slate-200 flex gap-2.5 overflow-x-auto scrollbar-none">
                  {selectedProject.local_images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImageIndex(idx)}
                      className={`relative min-w-[60px] min-h-[44px] w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
                        activeModalImageIndex === idx
                          ? "border-[#c42f0b] ring-2 ring-[#c42f0b]/40 shadow-xs"
                          : "border-slate-300 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail photo ${idx + 1} of ${selectedProject.title}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Case Study Dossier Body */}
              <div className="p-6 sm:p-10 space-y-8">
                <div>
                  {/* Spatial Corridor Tag */}
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#c42f0b] font-bold block mb-1">
                    Verified Transit Corridor
                  </span>
                  <div className="flex flex-wrap items-center gap-3 text-xl sm:text-3xl font-bold tracking-tight text-[#0b2144]">
                    <span>{selectedProject.route_origin}</span>
                    <div className="flex items-center gap-1.5 text-[#c42f0b]">
                      <span className="w-5 h-[2px] bg-[#c42f0b]" />
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="text-slate-500 font-light italic">
                      {selectedProject.route_destination}
                    </span>
                  </div>

                  <h2 id="modal-project-title" className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight mt-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Technical Engineering Specifications Ledger */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold">
                      Engineering Specifications
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      CBIC / Port Captaincy Validated
                    </span>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs font-mono">
                    <div className="border-b border-slate-100 pb-2">
                      <dt className="text-slate-400 text-[10px] uppercase">Origin Port / Site</dt>
                      <dd className="text-[#0b2144] font-bold text-sm mt-0.5">{selectedProject.route_origin}</dd>
                    </div>
                    <div className="border-b border-slate-100 pb-2">
                      <dt className="text-slate-400 text-[10px] uppercase">Destination Port / Site</dt>
                      <dd className="text-[#0b2144] font-bold text-sm mt-0.5">{selectedProject.route_destination}</dd>
                    </div>
                    <div className="border-b border-slate-100 pb-2">
                      <dt className="text-slate-400 text-[10px] uppercase">Transport Method</dt>
                      <dd className="text-[#0b2144] font-bold text-sm mt-0.5">{selectedProject.transport_mode}</dd>
                    </div>
                    <div className="border-b border-slate-100 pb-2">
                      <dt className="text-slate-400 text-[10px] uppercase">Total Mass</dt>
                      <dd className="text-[#0b2144] font-bold text-sm mt-0.5 tabular-nums">
                        {selectedProject.weight_mt ? `${selectedProject.weight_mt} MT` : selectedProject.weight_kg ? `${selectedProject.weight_kg.toLocaleString()} KG` : "Special Profile"}
                      </dd>
                    </div>
                    {selectedProject.dimensions_cm && (
                      <div className="border-b border-slate-100 pb-2">
                        <dt className="text-slate-400 text-[10px] uppercase">Dimensions (L × W × H)</dt>
                        <dd className="text-slate-800 font-bold text-sm mt-0.5 tabular-nums">{selectedProject.dimensions_cm} cm</dd>
                      </div>
                    )}
                    {selectedProject.packages && (
                      <div className="border-b border-slate-100 pb-2">
                        <dt className="text-slate-400 text-[10px] uppercase">Package Quantity</dt>
                        <dd className="text-slate-800 font-bold text-sm mt-0.5 tabular-nums">{selectedProject.packages} Packages</dd>
                      </div>
                    )}
                    {selectedProject.cbm && (
                      <div className="border-b border-slate-100 pb-2">
                        <dt className="text-slate-400 text-[10px] uppercase">Volume</dt>
                        <dd className="text-slate-800 font-bold text-sm mt-0.5 tabular-nums">{selectedProject.cbm} CBM</dd>
                      </div>
                    )}
                    {selectedProject.incoterm && (
                      <div className="border-b border-slate-100 pb-2">
                        <dt className="text-slate-400 text-[10px] uppercase">Commercial Incoterm</dt>
                        <dd className="text-slate-800 font-bold text-sm mt-0.5">{selectedProject.incoterm}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Special Scope / Operational Handling */}
                {selectedProject.special_handling && (
                  <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-700 leading-relaxed">
                    <span className="text-[#c42f0b] font-mono font-bold block mb-1 uppercase tracking-wider text-[11px]">
                      Operational Handling &amp; Engineering Scope:
                    </span>
                    {selectedProject.special_handling}
                  </div>
                )}

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-500">
                    Official Archival Case File &middot; Freyer International Logistics
                  </span>
                  <a
                    href="/#quote"
                    onClick={closeProjectDetail}
                    className="inline-flex items-center gap-2 bg-[#0b2144] hover:bg-[#071325] text-white text-xs font-mono font-semibold px-6 py-3 rounded-full transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b]"
                  >
                    <span>Request Quote For Similar Cargo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
