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

      {/* ── Curated Projects Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && selectedFilter === "All";

            return (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => openProjectDetail(project)}
                className={`bg-[#0b182d] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all duration-200 group cursor-pointer ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0c1d38] to-[#071324]" : ""
                }`}
              >
                <div>
                  {/* Photo Container */}
                  <div
                    className={`relative bg-black/40 overflow-hidden ${
                      isFeatured ? "aspect-[21/9] sm:aspect-[2/1]" : "aspect-[16/10]"
                    }`}
                  >
                    {project.local_images.length > 0 ? (
                      <Image
                        src={project.local_images[0]}
                        alt={`${project.title} - Freyer project cargo movement`}
                        fill
                        className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        sizes={isFeatured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                        Documented Operational Movement
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b182d] via-black/20 to-transparent" />

                    {/* Mode Badge */}
                    <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/15 text-[#ff6b4a] text-[10px] font-mono px-2.5 py-1 rounded-sm uppercase tracking-wider font-semibold">
                      {project.transport_mode}
                    </span>

                    {/* Multi-Photo Indicator */}
                    {project.local_images.length > 1 && (
                      <span className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-slate-200 text-[10px] font-mono px-2.5 py-1 rounded-sm border border-white/10 flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>{project.local_images.length} photos</span>
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    {/* Route Line */}
                    <div className="flex items-center gap-2 text-base font-semibold text-white mb-1">
                      <span>{project.route_origin}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff6b4a]" />
                      <span>{project.route_destination}</span>
                    </div>

                    {/* Subtitle / Mode Summary */}
                    <p className="text-xs text-slate-400 font-medium mb-4">
                      {project.title.replace(/KOBE TO CHENNAI |MASAN TO CHENNAI |QINGDAO TO SOHAR & DAMMAM |AL JUBAIL TO JEBEL ALI |EX NHAVA SHEVA TO MOGADISHU |EX GENOA TO SOHAR |EX GENOA TO JEBEL ALI |HAMBURG TO JEDDAH |SHANGHAI TO JEBEL ALI |VENICE TO MUNDRA /i, "") || project.transport_mode}
                    </p>

                    {/* Metric Badges */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                      {project.weight_mt && (
                        <span className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded">
                          {project.weight_mt} MT
                        </span>
                      )}
                      {project.weight_kg && (
                        <span className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded">
                          {project.weight_kg.toLocaleString()} KG
                        </span>
                      )}
                      {project.dimensions_cm && (
                        <span className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded">
                          {project.dimensions_cm} cm
                        </span>
                      )}
                      {project.packages && (
                        <span className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded">
                          {project.packages} PKG
                        </span>
                      )}
                      {project.cbm && (
                        <span className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded">
                          {project.cbm} CBM
                        </span>
                      )}
                    </div>

                    {/* Special Handling snippet */}
                    {project.special_handling && (
                      <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {project.special_handling}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-7 py-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.date || "Documented Movement"}
                  </span>
                  <span className="text-xs font-semibold text-[#ff6b4a] group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Deep Project Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0b182d] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white"
            >
              {/* Close Button with 44x44 tap target */}
              <button
                ref={closeButtonRef}
                onClick={closeProjectDetail}
                className="absolute top-4 right-4 z-20 min-w-[44px] min-h-[44px] p-2.5 text-slate-400 hover:text-white rounded-full bg-black/70 hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center justify-center"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Photo Gallery Viewport */}
              <div className="relative aspect-[16/9] w-full bg-black/50 overflow-hidden">
                {selectedProject.local_images.length > 0 ? (
                  <Image
                    src={selectedProject.local_images[activeModalImageIndex] || selectedProject.local_images[0]}
                    alt={`${selectedProject.title} - Operational photo`}
                    fill
                    className="object-contain object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                    Operation Photo
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/15 text-[#ff6b4a] text-xs font-mono px-3 py-1 rounded font-semibold uppercase">
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails row */}
              {selectedProject.local_images.length > 1 && (
                <div className="p-4 bg-black/40 border-b border-white/10 flex gap-2 overflow-x-auto scrollbar-none">
                  {selectedProject.local_images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImageIndex(idx)}
                      className={`relative min-w-[56px] min-h-[44px] w-16 h-12 rounded-md overflow-hidden shrink-0 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        activeModalImageIndex === idx
                          ? "border-[#ff6b4a] ring-2 ring-[#ff6b4a]/40"
                          : "border-white/15 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image src={imgSrc} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Modal Technical Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] mb-2 uppercase tracking-wider font-semibold">
                    <span>{selectedProject.route_origin}</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>{selectedProject.route_destination}</span>
                  </div>
                  <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Technical Spec Sheet */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 sm:p-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                    Technical Specifications
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="border-b border-white/5 pb-2">
                      <dt className="text-slate-400">Origin Port / Site</dt>
                      <dd className="text-white font-semibold mt-0.5">{selectedProject.route_origin}</dd>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                      <dt className="text-slate-400">Destination Port / Site</dt>
                      <dd className="text-white font-semibold mt-0.5">{selectedProject.route_destination}</dd>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                      <dt className="text-slate-400">Transport Method</dt>
                      <dd className="text-white font-semibold mt-0.5">{selectedProject.transport_mode}</dd>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                      <dt className="text-slate-400">Gross Weight</dt>
                      <dd className="text-white font-semibold mt-0.5">
                        {selectedProject.weight_mt ? `${selectedProject.weight_mt} MT` : selectedProject.weight_kg ? `${selectedProject.weight_kg.toLocaleString()} KG` : "Special Weight Profile"}
                      </dd>
                    </div>
                    {selectedProject.dimensions_cm && (
                      <div className="border-b border-white/5 pb-2">
                        <dt className="text-slate-400">Dimensions (L × W × H)</dt>
                        <dd className="text-white font-semibold mt-0.5">{selectedProject.dimensions_cm} cm</dd>
                      </div>
                    )}
                    {selectedProject.packages && (
                      <div className="border-b border-white/5 pb-2">
                        <dt className="text-slate-400">Package Quantity</dt>
                        <dd className="text-white font-semibold mt-0.5">{selectedProject.packages} Packages</dd>
                      </div>
                    )}
                    {selectedProject.cbm && (
                      <div className="border-b border-white/5 pb-2">
                        <dt className="text-slate-400">Volume</dt>
                        <dd className="text-white font-semibold mt-0.5">{selectedProject.cbm} CBM</dd>
                      </div>
                    )}
                    {selectedProject.incoterm && (
                      <div className="border-b border-white/5 pb-2">
                        <dt className="text-slate-400">Commercial Incoterm</dt>
                        <dd className="text-white font-semibold mt-0.5">{selectedProject.incoterm}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Execution Notes */}
                {selectedProject.special_handling && (
                  <div className="p-4 bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 rounded-xl text-xs text-slate-200 leading-relaxed">
                    <span className="text-[#ff6b4a] font-mono font-semibold block mb-1">
                      Operational Handling &amp; Engineering Scope:
                    </span>
                    {selectedProject.special_handling}
                  </div>
                )}

                {/* CTA Action */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-400">
                    Official project record &middot; Freyer International Logistics
                  </span>
                  <a
                    href="/#quote"
                    className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors"
                  >
                    <span>Request Quote for Similar Cargo</span>
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
