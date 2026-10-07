"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ChevronRight, ChevronLeft, Maximize2 } from "lucide-react";
import { THEME_TOKENS, FreyerCard, FreyerButton, IconButton } from "@/components/ui/design-system";

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

  // Curate ordering so the lead featured project is the highest visual impact & engineering complexity
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProjectDetail();
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, closeProjectDetail]);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DCDCD7]">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-150 rounded ${
                selectedFilter === filter
                  ? "bg-[#17181B] text-[#F7F6F2] font-bold"
                  : "bg-[#FFFFFF] hover:bg-[#F7F6F2] text-[#62656B] hover:text-[#17181B] border border-[#DCDCD7]"
              }`}
            >
              {filter} {filter === "All" && `(${initialProjects.length})`}
            </button>
          ))}
        </div>
        <span className="hidden md:inline-block text-xs font-mono text-[#62656B]">
          Showing {filteredProjects.length} Verified Records
        </span>
      </div>

      {/* Case Study Archive List */}
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
                id={`project-record-${project.id}`}
                onClick={() => openProjectDetail(project)}
                className="group cursor-pointer pb-16 sm:pb-24 border-b border-[#DCDCD7] last:border-b-0 scroll-mt-28"
              >
                {/* Header Line */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#62656B] mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[#E33B12] font-bold tracking-widest uppercase">
                      CASE FILE #{project.id.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[#DCDCD7]">/</span>
                    <span className="uppercase tracking-wider text-[#17181B] font-semibold">
                      {project.transport_mode}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    {project.date && <span>{project.date}</span>}
                    {project.local_images.length > 1 && (
                      <span className="flex items-center gap-1.5 text-[#17181B] font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-[#E33B12]" />
                        <span>{project.local_images.length} PHOTOGRAPHS</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Editorial Spread */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isAlternate ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photograph Frame */}
                  <div
                    className={`relative w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#DCDCD7] group-hover:border-[#17181B] transition-all duration-300 ${
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
                        className="object-cover object-center brightness-95 group-hover:scale-102 group-hover:brightness-100 transition-all duration-700 ease-out"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#62656B] font-mono text-xs">
                        Archived Operational Record
                      </div>
                    )}
                  </div>

                  {/* Route & Specifications */}
                  <div
                    className={`space-y-6 ${
                      isAlternate
                        ? "lg:col-span-6 lg:order-1"
                        : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    {/* Route Typography */}
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#E33B12] font-bold block mb-2">
                        Transit Corridor
                      </span>
                      <div className="flex flex-wrap items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17181B] font-mono uppercase">
                        <span>{project.route_origin}</span>
                        <div className="flex items-center gap-1.5 text-[#E33B12]">
                          <span className="w-5 sm:w-7 h-[2px] bg-[#E33B12]" />
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </div>
                        <span className="text-[#62656B] font-light italic">
                          {project.route_destination}
                        </span>
                      </div>
                    </div>

                    {/* Operational Details */}
                    <p className="text-sm sm:text-base text-[#62656B] leading-relaxed max-w-xl font-light">
                      {project.details}
                    </p>

                    {/* Specifications */}
                    <div className="pt-5 border-t border-[#DCDCD7] flex flex-wrap items-baseline gap-x-6 gap-y-3 text-xs font-mono">
                      {project.weight_mt && (
                        <div>
                          <span className="text-[#62656B] block text-[9px] uppercase tracking-wider">
                            Total Mass
                          </span>
                          <span className="text-base font-bold text-[#17181B] tabular-nums">
                            {project.weight_mt} MT
                          </span>
                        </div>
                      )}
                      {project.dimensions_cm && (
                        <div>
                          <span className="text-[#62656B] block text-[9px] uppercase tracking-wider">
                            Dimensions
                          </span>
                          <span className="text-sm font-semibold text-[#17181B] tabular-nums">
                            {project.dimensions_cm} cm
                          </span>
                        </div>
                      )}
                      {project.packages && (
                        <div>
                          <span className="text-[#62656B] block text-[9px] uppercase tracking-wider">
                            Packages
                          </span>
                          <span className="text-sm font-semibold text-[#17181B] tabular-nums">
                            {project.packages} PKG
                          </span>
                        </div>
                      )}
                      {project.incoterm && (
                        <div>
                          <span className="text-[#62656B] block text-[9px] uppercase tracking-wider">
                            Incoterm
                          </span>
                          <span className="text-sm font-semibold text-[#E33B12]">
                            {project.incoterm}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#17181B] group-hover:text-[#E33B12] transition-colors uppercase">
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#FFFFFF] border border-[#DCDCD7] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-[#17181B]"
            >
              <IconButton
                icon={<X className="w-5 h-5" />}
                aria-label="Close project details"
                onClick={closeProjectDetail}
                variant="light"
                className="absolute top-4 right-4 z-30"
              />

              {/* Modal Photograph */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#F7F6F2] overflow-hidden">
                {selectedProject.local_images.length > 0 ? (
                  <Image
                    src={selectedProject.local_images[activeModalImageIndex] || selectedProject.local_images[0]}
                    alt={`${selectedProject.title} - Operational photo`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#62656B] font-mono text-xs">
                    Archived Operational Record
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-[#17181B]/85 backdrop-blur-md border border-white/20 text-[#F7F6F2] text-xs font-mono px-3 py-1 rounded font-bold uppercase">
                  {selectedProject.transport_mode}
                </div>

                {selectedProject.local_images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveModalImageIndex((prev) =>
                          prev > 0 ? prev - 1 : selectedProject.local_images.length - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveModalImageIndex((prev) =>
                          prev < selectedProject.local_images.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E33B12] font-semibold">
                    Case File #{selectedProject.id.toString().padStart(2, "0")} &middot; {selectedProject.date}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono uppercase mt-1 text-[#17181B]">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="p-4 rounded border border-[#DCDCD7] bg-[#F7F6F2] flex items-center gap-3 text-lg sm:text-xl font-mono text-[#17181B]">
                  <span>{selectedProject.route_origin}</span>
                  <ArrowRight className="w-4 h-4 text-[#E33B12]" />
                  <span className="text-[#62656B]">{selectedProject.route_destination}</span>
                </div>

                <p className="text-sm sm:text-base text-[#62656B] font-light leading-relaxed">
                  {selectedProject.details}
                </p>

                {selectedProject.special_handling && (
                  <div className="p-4 rounded border border-[#E33B12]/20 bg-[#E33B12]/5 text-xs font-mono text-[#17181B]">
                    <span className="text-[#E33B12] font-bold block mb-1">Special Operational Scope:</span>
                    {selectedProject.special_handling}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
