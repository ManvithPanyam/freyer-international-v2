"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ChevronRight, ChevronLeft, Maximize2, Search } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export interface Project {
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

interface ProjectsRegisterProps {
  initialProjects: Project[];
}

export function ProjectsRegister({ initialProjects }: ProjectsRegisterProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);

  // Prioritize verified high-impact records for editorial flow
  const curatedProjects = React.useMemo(() => {
    const p9 = initialProjects.find((p) => p.id === 9);
    const p11 = initialProjects.find((p) => p.id === 11);
    const p7 = initialProjects.find((p) => p.id === 7);
    const p2 = initialProjects.find((p) => p.id === 2);
    const others = initialProjects.filter(
      (p) => p.id !== 9 && p.id !== 11 && p.id !== 7 && p.id !== 2
    );
    return [p9, p11, p7, p2, ...others].filter(Boolean) as Project[];
  }, [initialProjects]);

  const filters = ["All", "Break Bulk", "Flat Rack", "RORO", "Door to Door"];

  const filteredProjects = curatedProjects.filter((p) => {
    const matchesFilter =
      selectedFilter === "All" ||
      (selectedFilter === "Break Bulk" &&
        (p.transport_mode.toLowerCase().includes("break bulk") ||
          p.transport_mode.toLowerCase().includes("bb"))) ||
      (selectedFilter === "Flat Rack" && p.transport_mode.toLowerCase().includes("flat rack")) ||
      (selectedFilter === "RORO" && p.transport_mode.toLowerCase().includes("roro")) ||
      (selectedFilter === "Door to Door" && p.transport_mode.toLowerCase().includes("door"));

    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      p.route_origin.toLowerCase().includes(query) ||
      p.route_destination.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.transport_mode.toLowerCase().includes(query) ||
      (p.details && p.details.toLowerCase().includes(query));

    return matchesFilter && matchesQuery;
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
      {/* ── SECTION HEADER & SEARCH/FILTER CONTROL BAR ── */}
      <div className="space-y-6 pb-6 border-b border-[var(--color-border-subtle)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[var(--color-cta)] font-bold">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cta)]" />
              <span>THE PROJECT REGISTER &bull; COMPLETE ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] leading-none">
              ELEVEN DOCUMENTED MOVEMENTS.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light max-w-2xl leading-relaxed">
              An editorial gallery of verified breakbulk, out-of-gauge, flatrack, and heavy multimodal shipments executed under official bills of lading and authentic field surveys.
            </p>
          </div>

          <div className="text-xs font-mono text-[var(--color-text-secondary)] whitespace-nowrap self-start md:self-end">
            <span className="text-[var(--color-text-primary)] font-bold text-sm">
              {filteredProjects.length}
            </span>{" "}
            of {initialProjects.length} Canonical Case Files
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[var(--color-border-subtle)]">
          {/* Classification Filters */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded ${
                  selectedFilter === filter
                    ? "bg-[var(--color-text-primary)] text-white font-bold shadow-xs"
                    : "bg-[#FFFFFF] hover:bg-[var(--color-bg-base)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
                }`}
              >
                {filter} {filter === "All" && `(${initialProjects.length})`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
            <input
              type="text"
              placeholder="Search origin, destination, or mode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-8 py-1.5 text-xs font-mono bg-white border border-[var(--color-border-subtle)] rounded text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-cta)] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-mono leading-none"
                title="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── ASYMMETRIC EDITORIAL GRID (A1 Gallery / Jumbo Maritime Inspired) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Asymmetric rhythm: Item 0 and 3 are wide editorial anchors (7 cols), others 5 cols or 6 cols
            const isLeadAnchor = idx === 0 || idx === 3;
            const colSpanClass = isLeadAnchor
              ? "lg:col-span-7"
              : idx % 3 === 0
              ? "lg:col-span-6"
              : "lg:col-span-5";

            const primaryMetric = project.weight_mt
              ? `${project.weight_mt} MT`
              : project.weight_kg
              ? `${project.weight_kg.toLocaleString()} KG`
              : project.dimensions_cm
              ? `${project.dimensions_cm} cm`
              : project.packages
              ? `${project.packages} PKG`
              : null;

            return (
              <motion.article
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-record-${project.id}`}
                onClick={() => openProjectDetail(project)}
                className={`group cursor-pointer flex flex-col justify-between rounded-xl bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-cta)] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-lg scroll-mt-28 ${colSpanClass}`}
              >
                <div>
                  {/* Photo Frame with Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full bg-[#17181B] overflow-hidden">
                    {project.local_images.length > 0 ? (
                      <Image
                        src={project.local_images[0]}
                        alt={`${project.title} - Freyer project cargo engineering`}
                        fill
                        className="object-cover object-center brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/50 font-mono text-xs">
                        Archived Operational Record
                      </div>
                    )}

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                      <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-white border border-white/15 uppercase font-bold tracking-wider">
                        #{project.id.toString().padStart(2, "0")} &bull; {project.transport_mode}
                      </span>

                      {project.local_images.length > 1 && (
                        <span className="px-2 py-1 rounded bg-black/75 backdrop-blur-md text-white/90 border border-white/15 flex items-center gap-1">
                          <Maximize2 className="w-3 h-3 text-[var(--color-cta)]" />
                          <span>{project.local_images.length} PHOTOS</span>
                        </span>
                      )}
                    </div>

                    {/* Route Overlay on Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between gap-2 text-white">
                      <div className="text-xl sm:text-2xl font-black uppercase font-[family-name:var(--font-barlow-condensed)] tracking-tight leading-none drop-shadow-md">
                        <span>{project.route_origin}</span>
                        <span className="text-[var(--color-cta)] mx-1.5">→</span>
                        <span className="text-white/80 italic">{project.route_destination}</span>
                      </div>

                      {primaryMetric && (
                        <span className="text-base sm:text-lg font-black font-[family-name:var(--font-barlow-condensed)] text-white bg-[var(--color-cta)] px-2 py-0.5 rounded tracking-tight shrink-0 shadow-sm">
                          {primaryMetric}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Editorial Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed line-clamp-2">
                      {project.details}
                    </p>

                    {/* Compact Specs Row */}
                    <div className="pt-3 border-t border-[var(--color-border-subtle)] grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] block">
                          Consignment Scope
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-text-primary)] block truncate">
                          {project.packages
                            ? `${project.packages} PKG`
                            : project.dimensions_cm
                            ? `${project.dimensions_cm} cm`
                            : project.transport_mode}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] block">
                          Date / Terms
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-text-primary)] block truncate">
                          {project.date || project.incoterm || "Documented Voyage"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspect Action Footer */}
                <div className="px-5 sm:px-6 py-3.5 bg-[var(--color-bg-alt)] border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--color-text-primary)] group-hover:text-[var(--color-cta)] transition-colors">
                  <span className="font-bold tracking-wider uppercase text-[11px]">
                    Inspect Technical Dossier
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── PROJECT DETAIL MODAL DOSSIER ── */}
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
              className="relative bg-white border border-[var(--color-border-subtle)] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-[var(--color-text-primary)]"
            >
              <IconButton
                icon={<X className="w-5 h-5" />}
                aria-label="Close project details"
                onClick={closeProjectDetail}
                variant="light"
                className="absolute top-4 right-4 z-30"
              />

              {/* Modal Photograph Gallery */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#111317] overflow-hidden">
                {selectedProject.local_images.length > 0 ? (
                  <Image
                    src={
                      selectedProject.local_images[activeModalImageIndex] ||
                      selectedProject.local_images[0]
                    }
                    alt={`${selectedProject.title} - Operational photo`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/50 font-mono text-xs">
                    Archived Operational Record
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono px-3 py-1 rounded font-bold uppercase">
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
                      title="Previous photo"
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
                      title="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
                      Photo {activeModalImageIndex + 1} of {selectedProject.local_images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Modal Body: Archival Dossier */}
              <div className="p-6 sm:p-10 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--color-border-subtle)]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-cta)]" />
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-cta)] font-bold">
                        DOCUMENTED SHIPMENT DOSSIER &bull; RECORD #
                        {selectedProject.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-[var(--color-text-primary)] font-[family-name:var(--font-barlow-condensed)] tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {selectedProject.date && (
                    <span className="text-xs font-mono px-3 py-1 rounded bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] self-start shrink-0">
                      {selectedProject.date}
                    </span>
                  )}
                </div>

                {/* Corridor vector */}
                <div className="p-4 rounded-xl bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] flex items-center gap-3 text-lg sm:text-xl font-black font-[family-name:var(--font-barlow-condensed)] text-[var(--color-text-primary)] uppercase tracking-tight">
                  <span>{selectedProject.route_origin}</span>
                  <div className="flex items-center gap-1 text-[var(--color-cta)]">
                    <span className="w-5 h-[2px] bg-[var(--color-cta)]" />
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="text-[var(--color-text-secondary)] font-light italic">
                    {selectedProject.route_destination}
                  </span>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-3.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)] uppercase tracking-wider block">
                      Transport Mode
                    </span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)] font-mono block mt-0.5">
                      {selectedProject.transport_mode}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)] uppercase tracking-wider block">
                      Weight / Mass
                    </span>
                    <span className="text-sm font-bold text-[var(--color-cta)] font-mono block mt-0.5">
                      {selectedProject.weight_mt
                        ? `${selectedProject.weight_mt} MT`
                        : selectedProject.weight_kg
                        ? `${selectedProject.weight_kg.toLocaleString()} KG`
                        : "Documented"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)] uppercase tracking-wider block">
                      Dimensions
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] font-mono block mt-1 truncate">
                      {selectedProject.dimensions_cm
                        ? `${selectedProject.dimensions_cm} cm`
                        : "Manifest Stowed"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--color-text-secondary)] uppercase tracking-wider block">
                      Packages / Volume
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-text-primary)] font-mono block mt-0.5">
                      {selectedProject.packages
                        ? `${selectedProject.packages} PKG`
                        : selectedProject.cbm
                        ? `${selectedProject.cbm} CBM`
                        : "Consignment"}
                    </span>
                  </div>
                </div>

                {/* Archival Field Notes */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-bold block">
                    Verified Archival Field Manifest
                  </span>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] font-sans">
                    {selectedProject.details}
                  </p>
                </div>

                {selectedProject.special_handling && (
                  <div className="p-4 rounded-xl border border-[var(--color-cta)]/20 bg-[var(--color-cta)]/5 text-xs font-mono text-[var(--color-text-primary)] space-y-1">
                    <span className="text-[var(--color-cta)] font-bold uppercase tracking-wider block">
                      Documented Handling &amp; Vessel Stowage:
                    </span>
                    <p className="font-light text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedProject.special_handling}
                    </p>
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
