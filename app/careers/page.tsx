import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageHeader, FreyerCard, FreyerButton, SectionHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Careers & Professional Culture | Join Freyer",
  description:
    "Join Freyer International Logistics, a licensed CBIC AEO-LO forwarding organization operating across 10 branch stations in India.",
  alternates: {
    canonical: "/careers",
  },
};

const PRACTICE_AREAS = [
  {
    num: "01",
    title: "Freight Forwarding Operations",
    desc: "International Air and Ocean freight desks, carrier space allocations, multimodal routing, and global milestone tracking.",
  },
  {
    num: "02",
    title: "Licensed Customs Brokerage",
    desc: "Indian Customs import/export compliance, CBIC AEO statutory filings, EDI documentation, and tariff classification.",
  },
  {
    num: "03",
    title: "Project Cargo Engineering",
    desc: "Heavy-lift crane rigging calculations, oversized breakbulk stowage, route civil surveys, and on-site foundation delivery.",
  },
  {
    num: "04",
    title: "Contract Warehousing & 3PL",
    desc: "WMS inventory control, high-bay racking operations, pick-and-pack fulfillment, cross-docking, and CFS management.",
  },
  {
    num: "05",
    title: "Commercial & Account Management",
    desc: "Enterprise supply chain consulting, industrial customer relationship management, and commercial freight rate structuring.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Careers" }]}
          eyebrow="Talent Acquisition &middot; Operational Culture"
          title="OPERATIONAL RIGOR"
          subtitle="ENGINEERING CAREERS IN LOGISTICS"
          description="Build your career with an accredited, growing multimodal logistics organization. Join seasoned licensed customs brokers, marine freight specialists, and project cargo engineers across 10 branch stations in India."
          stats={[
            { value: "10 STATIONS", label: "PAN-INDIA DESKS", sub: "Direct Branch Locations" },
            { value: "5 DISCIPLINES", label: "PRACTICE AREAS", sub: "Forwarding · Customs · Projects" },
            { value: "CBIC AEO-LO", label: "GOVERNANCE", sub: "Tier 2 Statutory License" },
            { value: "100%", label: "MERIT BASED", sub: "Professional Career Mobility" },
          ]}
        />

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter} space-y-20`}>
          {/* Practice Areas */}
          <div>
            <SectionHeader
              num="01"
              tag="Operational Disciplines"
              title="PRACTICE AREAS."
              highlight="DISCIPLINED DESKS."
              description="Explore professional roles spanning core multimodal execution, statutory trade compliance, and heavy industrial logistics."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRACTICE_AREAS.map((area) => (
                <FreyerCard key={area.num} className="p-6 space-y-3">
                  <div className="text-xs font-mono uppercase text-[#e1390f] font-bold">
                    {area.num} / Practice Area
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono uppercase">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {area.desc}
                  </p>
                </FreyerCard>
              ))}
            </div>
          </div>

          {/* Direct Application Dossier */}
          <FreyerCard className="p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#e1390f] uppercase tracking-wider font-semibold">
                <Mail className="w-4 h-4" />
                <span>Direct HR Directorate</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono uppercase tracking-tight">
                Submit Your Professional Profile
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Forward your resume and operational experience directly to our talent acquisition team. State your preferred practice discipline and station location (Chennai, Bengaluru, Mumbai, Delhi, Hyderabad, Vizag, Coimbatore, Tuticorin, or Ahmedabad).
              </p>
              <div className="pt-2 text-xs font-mono text-white/60">
                Email: <span className="text-white">careers@freyerinternational.com</span>
              </div>
            </div>

            <div className="shrink-0">
              <FreyerButton href="mailto:careers@freyerinternational.com" size="md" variant="primary">
                Email Resume Directly
              </FreyerButton>
            </div>
          </FreyerCard>
        </section>
      </main>
      <Footer />
    </div>
  );
}
