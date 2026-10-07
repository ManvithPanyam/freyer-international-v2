import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import projectsData from "@/freyer-forensics-v2/content/projects.json";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Documented Project Cargo Movements | 11 Case Studies",
  description:
    "Technical case studies of heavy-lift, over-dimensional cargo (ODC), breakbulk ocean freight, and turnkey multimodal engineering executed by Freyer International Logistics.",
  alternates: {
    canonical: "/projects",
  },
};

import { ProjectsCargoHeroStage } from "@/components/projects/ProjectsCargoHeroStage";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Projects" }]}
          eyebrow="Technical Engineering Archive &middot; 11 Movements"
          title="REAL CARGO EXECUTION"
          subtitle="DOCUMENTED ENGINEERING PROOF"
          description="A comprehensive technical archive of 11 verified heavy-lift and multimodal movements across breakbulk ocean carriage, hydraulic multi-axle road trailers, flatracks, and civil route clearance operations."
          stats={[
            { value: "11 PROJECTS", label: "VERIFIED ARCHIVE", sub: "Documented Case Studies" },
            { value: "482 MT", label: "MAX HEAVY LIFT", sub: "Shanghai to Jebel Ali Record" },
            { value: "2,700 CM", label: "LONGEST LENGTH", sub: "Boom Crane 37.6 MT (Venice)" },
            { value: "100%", label: "INCIDENT FREE", sub: "Rigorous Port & Route Planning" },
          ]}
        />

        {/* ── KINETIC CARGO SHIPMENTS HERO STAGE ── */}
        <section className={`pt-6 pb-12 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <ProjectsCargoHeroStage />
        </section>

        {/* ── COMPLETE 11-PROJECT FORENSIC EXPLORER ── */}
        <section className={`py-12 sm:py-16 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <ProjectsExplorer initialProjects={projectsData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
