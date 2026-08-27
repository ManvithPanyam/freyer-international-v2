import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Freyer International Logistics",
  description:
    "Data governance notice and privacy policy of Freyer International Logistics Pvt. Ltd., detailing information processing under India's DPDP Act 2023 & 2025 Rules, AEO Tier-2 customs compliance, and global forwarding data workflows.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Privacy Policy</span>
          </div>

          <div className="max-w-4xl mb-12 sm:mb-16">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Data Governance &amp; Statutory Compliance Notice
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Privacy Policy &amp; Data Notice
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl">
              Freyer International Logistics Pvt. Ltd. (&ldquo;Freyer&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to responsible data stewardship, commercial confidentiality, and transparent data processing in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act), the DPDP Rules 2025, and applicable global freight forwarding regulations.
            </p>
            <p className="text-xs font-mono text-slate-600 mt-3">
              Effective Date: January 1, 2026 &middot; Last Revised: August 2026 &middot; Applicable Entity: Freyer International Logistics Pvt. Ltd.
            </p>
          </div>

          <div className="max-w-4xl space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
            {/* 1. Scope & Fiduciary Status */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                1. Scope and Identity of Data Fiduciary
              </h2>
              <p>
                This Data Governance Notice applies to all digital interactions with Freyer International Logistics Pvt. Ltd., including our corporate domain (<span className="font-mono text-sm text-[#0b2144]">freyerinternational.com</span> and associated deployment mirrors), freight inquiry portals, Freight Configurator tools, branch contact channels, and career desks.
              </p>
              <p>
                Under the DPDP Act 2023, <strong>Freyer International Logistics Pvt. Ltd.</strong> acts as the Data Fiduciary for personal data submitted through this website. For physical cargo operations, bills of lading, and customs declarations, data processing is additionally governed by statutory customs regulations under Indian Customs AEO Tier-2 certification (<span className="font-mono text-sm font-semibold text-slate-900">INAAQCA4076M0F243</span>).
              </p>
            </section>

            {/* 2. Categories of Personal Data Collected */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                2. Categories of Information Collected &amp; Technical Data Flows
              </h2>
              <p>
                We adhere to data minimization principles. We only collect information that is strictly necessary to formulate commercial freight proposals, execute multimodal logistics, conduct recruitment, or fulfill statutory obligations:
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-base font-bold text-[#0b2144] mb-1">A. Freight Configurator &amp; Rate Inquiries (RFQ)</h3>
                  <p className="text-sm text-slate-600">
                    <strong>Data Elements:</strong> Shipper/consignee name, corporate email address, commercial contact number, company name, cargo origin/destination ports, commodity description, gross weight, dimensions, container equipment type, and hazardous material classification.
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    <strong>Purpose:</strong> Route engineering, freight rate estimation, vessel/aircraft capacity reservation, and preliminary customs feasibility analysis.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-base font-bold text-[#0b2144] mb-1">B. Corporate &amp; Branch Contact Desks</h3>
                  <p className="text-sm text-slate-600">
                    <strong>Data Elements:</strong> Full name, organizational affiliation, telephone number, email address, inquiry subject, and preferred branch station (Bengaluru, Chennai, Delhi/NCR, Mumbai, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, Ahmedabad).
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    <strong>Purpose:</strong> Responding to commercial inquiries, client onboarding, service status reporting, and agency relationship management.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-base font-bold text-[#0b2144] mb-1">C. Careers &amp; Employment Submissions</h3>
                  <p className="text-sm text-slate-600">
                    <strong>Data Elements:</strong> Candidate curriculum vitae (CV), educational qualifications, past logistics experience, professional certifications, contact coordinates, and identity credentials.
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    <strong>Purpose:</strong> Talent acquisition and background verification across our 10 operating hubs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-base font-bold text-[#0b2144] mb-1">D. Technical &amp; System Metadata</h3>
                  <p className="text-sm text-slate-600">
                    <strong>Data Elements:</strong> IP addresses (anonymized for regional load distribution), browser user-agent strings, device viewport dimensions, and time-stamped server access logs.
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    <strong>Purpose:</strong> DDoS prevention, secure HTTPS transport, edge caching, and responsive viewport rendering.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Legal Grounds for Processing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                3. Lawful Grounds for Processing
              </h2>
              <p>
                Under Section 4 and Section 6 of the DPDP Act 2023, we process personal data under the following legitimate and lawful bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Consent:</strong> Freely given, specific, and informed consent provided at the point of submitting an inquiry or application form.</li>
                <li><strong>Contractual Execution:</strong> Processing required to prepare quotations, issue forwarder cargo receipts (FCR), airway bills (AWB), multimodal bills of lading (MBL), and warehouse receipts.</li>
                <li><strong>Statutory Compliance:</strong> Mandatory reporting, customs filing (ICEGATE), KYC verification, and cargo manifests mandated by the Central Board of Indirect Taxes and Customs (CBIC), Directorate General of Shipping, IATA, and Indian Customs Act, 1962.</li>
              </ul>
            </section>

            {/* 4. Cross-Border Transfers & Alliance Sharing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                4. Cross-Border Forwarding &amp; Consortium Data Sharing
              </h2>
              <p>
                To provide seamless door-to-door multimodal freight across 190+ countries, Freyer coordinates with accredited international freight forwarder networks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Alliances:</strong> WCA World, Security Cargo Network (SCN), Worldwide Partners Alliance (WPA), and FDX Network partner offices solely in destination countries relevant to the specific shipment.</li>
                <li><strong>Carriers &amp; Port Authorities:</strong> Commercial ocean lines, air charter operators, terminal operators, and bonded container freight stations (CFS).</li>
                <li><strong>Statutory Regulatory Bodies:</strong> Indian Customs (AEO-T2 framework), port captaincies, and international customs administrations.</li>
              </ul>
              <p className="text-sm text-slate-500 italic">
                We do not sell, license, rent, or trade commercial contact lists or shipment databases to third-party marketing brokers or data brokers under any circumstances.
              </p>
            </section>

            {/* 5. Cookie & Storage Governance */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                5. Cookie Policy &amp; Storage Technologies Audit
              </h2>
              <p>
                Our technical architecture is built for privacy-first operations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Strictly Essential Functional State:</strong> We only store ephemeral local state necessary for interactive components (such as selected map node stations and multi-step configurator forms).</li>
                <li><strong>Zero Third-Party Advertising Cookies:</strong> We do not deploy behavioral ad networks, tracking pixels, or cross-site fingerprinting scripts.</li>
                <li><strong>Zero Third-Party Marketing Trackers:</strong> No external marketing beacons are loaded on this platform.</li>
              </ul>
            </section>

            {/* 6. Retention Schedule */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                6. Data Retention &amp; Disposal Schedule
              </h2>
              <p>
                Personal and commercial records are retained only for the duration necessary to satisfy the primary processing purpose or statutory audit requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Rate Quotes &amp; Inquiries:</strong> Retained for 12 months from the date of submission if no commercial booking ensues.</li>
                <li><strong>Statutory Logistics &amp; Customs Records:</strong> Retained for 5 to 7 years in compliance with Section 143AA of the Indian Customs Act, 1962, AEO Tier-2 audit mandates, and GST accounting rules.</li>
                <li><strong>Candidate Résumés:</strong> Retained for up to 6 months for recruitment consideration, after which records are securely purged unless active candidate consent is renewed.</li>
              </ul>
            </section>

            {/* 7. Rights of Data Principals */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                7. Rights of Data Principals (Under DPDP Act &amp; International Standards)
              </h2>
              <p>
                As a Data Principal, you are entitled to exercise the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Right of Access &amp; Summary:</strong> Request a summary of personal data held and processing activities undertaken.</li>
                <li><strong>Right to Correction &amp; Erasure:</strong> Request correction of misleading or inaccurate data, or erasure of data no longer required for statutory purposes.</li>
                <li><strong>Right of Grievance Redressal:</strong> Register complaints regarding data handling directly with our designated Grievance Officer.</li>
                <li><strong>Right to Nominate:</strong> Designate a nominee to exercise data rights in the event of incapacity.</li>
              </ul>
            </section>

            {/* 8. Grievance Redressal Officer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                8. Data Protection &amp; Grievance Redressal Officer
              </h2>
              <p>
                To exercise any statutory data rights or submit data governance inquiries, please contact our designated Grievance Redressal desk:
              </p>
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 text-sm font-mono space-y-1.5 text-slate-800">
                <div className="text-base font-bold text-[#0b2144] font-sans mb-1">
                  Data Governance &amp; Compliance Office
                </div>
                <div><strong>Entity:</strong> Freyer International Logistics Pvt. Ltd.</div>
                <div><strong>Corporate HQ:</strong> No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India</div>
                <div><strong>Operational Gateway:</strong> No.8, 1st Cross Street, Rajiv Gandhi Nagar, Vanagaram, Chennai - 600077, Tamil Nadu, India</div>
                <div><strong>Email:</strong> <a href="mailto:info@freyerinternational.com" className="text-[#c42f0b] hover:underline font-semibold">info@freyerinternational.com</a></div>
                <div><strong>Telephone:</strong> +91 44 4319 1919 / 080 4120 0300</div>
                <div><strong>Customs Certification:</strong> Indian Customs AEO-T2 INAAQCA4076M0F243</div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
