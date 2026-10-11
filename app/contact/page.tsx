import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RfqProduct } from "@/components/home/RfqProduct";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  PageHeader,
  FreyerCard,
  SectionHeader,
  THEME_TOKENS,
} from "@/components/ui/design-system";
import { VERIFIED_STATIONS } from "@/components/ui/design-system/stationsData";

export const metadata: Metadata = {
  title: "Contact Desks & Branch Directory | 10 Indian Stations",
  description:
    "Direct commercial freight desks, quotation RFQ, and operational hubs across 10 branch stations in India: Chennai HQ, Chennai Airport, Bengaluru, Mumbai, Delhi NCR, Hyderabad, Vizag, Coimbatore, Tuticorin, and Ahmedabad.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Contact" }]}
          eyebrow="Commercial Desks &middot; 10 Pan-India Stations"
          title="DISPATCH DIRECTORY"
          subtitle="COMMERCIAL RFQ & BRANCH DESKS"
          description="Submit requests for freight quotations, multimodal tenders, customs brokerage, or reach direct operational controllers across our 10 verified branch stations."
          stats={[
            { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Direct Pan-India Desks" },
            { value: "CBIC AEO-LO", label: "CUSTOMS DESK", sub: "INAAQCA4076M0F243" },
            { value: "24-48 HR", label: "RFQ RESPONSE", sub: "Technical Tariff Breakdown" },
            { value: "DIRECT", label: "PHONE & EMAIL", sub: "Zero Generic Call Centers" },
          ]}
        />

        <div className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter} space-y-20 sm:space-y-28`}>
          {/* RFQ Form Stage */}
          <div>
            <SectionHeader
              num="01"
              tag="Commercial Inquiries"
              title="REQUEST A FREIGHT RATE."
              highlight="INSTANT DISPATCH."
              description="Complete the freight configurator below to receive an engineered tariff proposal tailored to your cargo profile."
            />
            <div className="mt-8">
              <RfqProduct />
            </div>
          </div>

          {/* 10 Verified Stations Contact Ledger */}
          <div>
            <SectionHeader
              num="02"
              tag="Station Directory"
              title="10 VERIFIED BRANCH STATIONS."
              highlight="DIRECT TELEPHONE CONTACTS."
              description="Direct telephone lines, email addresses, and physical premises across India's principal commercial gateways."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {VERIFIED_STATIONS.map((station) => (
                <FreyerCard key={station.id} className="p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 border-b border-[#DCDCD7] pb-3 mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E33B12] font-semibold block">
                          {station.city} Station
                        </span>
                        <h3 className="text-lg font-bold text-[#17181B] font-mono uppercase mt-0.5">
                          {station.name}
                        </h3>
                      </div>
                      {station.isHQ && (
                        <span className="text-[9px] font-mono uppercase bg-[#E33B12]/10 text-[#E33B12] border border-[#E33B12]/20 px-2 py-0.5 rounded shrink-0 font-semibold">
                          Corporate HQ
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs font-mono text-[#62656B]">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#E33B12] shrink-0 mt-0.5" />
                        <address className="not-italic leading-relaxed text-[#62656B]">
                          {station.address}
                        </address>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DCDCD7] space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#E33B12] shrink-0" />
                      <a href={`tel:${station.phone.replace(/\s+/g, "")}`} className="text-[#17181B] hover:text-[#E33B12] transition-colors font-medium">
                        {station.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-[#62656B] shrink-0" />
                      <a href={`mailto:${station.email}`} className="text-[#62656B] hover:text-[#17181B] transition-colors truncate">
                        {station.email}
                      </a>
                    </div>
                  </div>
                </FreyerCard>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
