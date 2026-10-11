import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeartHandshake, Leaf, GraduationCap } from "lucide-react";
import { PageHeader, FreyerCard, SectionHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility (CSR) | Stewardship & Community",
  description:
    "Freyer International Logistics Corporate Social Responsibility initiatives and community engagement across healthcare, environment, and educational empowerment.",
  alternates: {
    canonical: "/csr",
  },
};

const CSR_PILLARS = [
  {
    icon: GraduationCap,
    pillar: "01 / Education & Skills",
    title: "Vocational Logistics Training",
    desc: "Empowering underprivileged students with specialized supply chain and customs documentation skills, creating sustainable employment pathways in multimodal transport.",
  },
  {
    icon: Leaf,
    pillar: "02 / Environment",
    title: "Green Freight Corridors",
    desc: "Optimizing multi-axle overland routes and prioritizing rail intermodal transfers to measurably reduce carbon intensity across domestic transit corridors.",
  },
  {
    icon: HeartHandshake,
    pillar: "03 / Community Welfare",
    title: "Healthcare & Regional Support",
    desc: "Direct support to local community centers and rural healthcare facilities situated near major port terminals and transport gateways across India.",
  },
];

export default function CsrPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "CSR" }]}
          eyebrow="Corporate Stewardship &middot; Social Responsibility"
          title="COMMUNITY STEWARDSHIP"
          subtitle="SUSTAINABLE SUPPLY CHAINS"
          description="At Freyer International, our commitment to logistics excellence extends to the communities in which we operate. We invest in education, green logistics practices, and community healthcare initiatives."
          stats={[
            { value: "3 PILLARS", label: "CSR CHARTER", sub: "Education · Green · Welfare" },
            { value: "10 CITIES", label: "COMMUNITY REACH", sub: "Local Station Programs" },
            { value: "INTERMODAL", label: "CARBON REDUCTION", sub: "Rail Transfer Prioritization" },
            { value: "100%", label: "TRANSPARENCY", sub: "Audited Corporate Governance" },
          ]}
        />

        <section className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter} space-y-16`}>
          <SectionHeader
            num="01"
            tag="Stewardship Pillars"
            title="THE 3E CHARTER."
            highlight="COMMUNITY IMPACT."
            description="Our structured social responsibility initiatives focus on tangible, measurable community empowerment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CSR_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <FreyerCard key={p.pillar} className="p-8 space-y-4">
                  <div className="w-10 h-10 rounded bg-[#E33B12]/10 border border-[#E33B12]/20 flex items-center justify-center text-[#E33B12]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono uppercase text-[#E33B12] font-bold">
                    {p.pillar}
                  </div>
                  <h3 className="text-xl font-bold text-[#17181B] font-mono uppercase">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62656B] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </FreyerCard>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
