import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Governance Notice",
  description:
    "Data governance notice and privacy policy of Freyer International Logistics Pvt. Ltd., detailing information processing under India's DPDP Act 2023 & 2025 Rules, AEO customs compliance, and global forwarding data workflows.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Privacy Policy" }]}
          eyebrow="Data Governance &middot; Statutory Notice"
          title="PRIVACY POLICY"
          subtitle="DATA STEWARDSHIP & REGULATORY DISCLOSURE"
          description="Freyer International Logistics Pvt. Ltd. is committed to responsible data stewardship, commercial confidentiality, and transparent data processing under the Digital Personal Data Protection Act, 2023 (DPDP Act) and international trade compliance mandates."
        />

        <div className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <div className="max-w-4xl space-y-12 text-[#62656B] font-light text-base sm:text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#17181B] font-mono uppercase tracking-tight">
                1. Scope and Identity of Data Fiduciary
              </h2>
              <p>
                This Data Governance Notice applies to all digital interactions with Freyer International Logistics Pvt. Ltd., including our corporate domain (<span className="font-mono text-[#17181B]">freyerinternational.com</span>), freight inquiry portals, Freight Configurator tools, branch contact channels, and career desks.
              </p>
              <p>
                Under the DPDP Act 2023, <strong className="text-[#17181B]">Freyer International Logistics Pvt. Ltd.</strong> acts as the Data Fiduciary for personal data submitted through this website. For physical cargo operations, bills of lading, and customs declarations, data processing is additionally governed by statutory customs regulations under CBIC AEO Certification.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#17181B] font-mono uppercase tracking-tight">
                2. Categories of Data Collected
              </h2>
              <p>
                We process information solely to provide freight estimates, manage supply chain operations, and satisfy Indian Customs statutory compliance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#62656B] text-base font-light">
                <li><strong className="text-[#17181B] font-semibold">Commercial &amp; Consignment Data:</strong> Shipper and consignee names, billing addresses, cargo descriptions, HS codes, and commercial invoices required for EDI customs filings.</li>
                <li><strong className="text-[#17181B] font-semibold">Contact Information:</strong> Names, corporate email addresses, phone numbers, and operational roles provided via RFQ or telephone desks.</li>
                <li><strong className="text-[#17181B] font-semibold">Career Submissions:</strong> Resumes and employment qualifications submitted to our HR desks.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#17181B] font-mono uppercase tracking-tight">
                3. Statutory Customs Record Retention
              </h2>
              <p>
                Under Section 17 and Section 46 of the Customs Act, 1962, shipping bills, bills of entry, and multimodal carriage records must be retained for statutory audit periods mandated by the Central Board of Indirect Taxes and Customs (CBIC).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#17181B] font-mono uppercase tracking-tight">
                4. Data Protection Officer (DPO) Contact
              </h2>
              <p>
                For data protection inquiries or exercising statutory rights under the DPDP Act 2023, contact our corporate legal desk:
              </p>
              <div className="p-4 rounded border border-[#DCDCD7] bg-[#FFFFFF] font-mono text-xs text-[#17181B] space-y-1">
                <div>Corporate Compliance Directorate: Freyer International Logistics Pvt Ltd</div>
                <div>TAGA Tower, Sait Colony, Egmore, Chennai – 600 008, India</div>
                <div>Email: <span className="text-[#E33B12]">compliance@freyerinternational.com</span></div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
