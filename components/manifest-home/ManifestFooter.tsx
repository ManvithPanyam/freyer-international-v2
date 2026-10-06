import Image from "next/image";
import Link from "next/link";

/**
 * ManifestFooter
 *
 * Four-column ruled footer for the Manifest homepage.
 * Server component — no client state needed.
 *
 * Sections:
 *   1. Top 4-column grid: Company | Services | Company nav | Legal
 *   2. Branch stations two-col list (collapsible on mobile via <details>)
 *   3. Bottom bar: copyright left, memberships right
 */

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES: { label: string; slug: string }[] = [
  { label: "Ocean Freight", slug: "ocean-freight" },
  { label: "Air Freight", slug: "air-freight" },
  { label: "Customs Brokerage", slug: "customs-brokerage" },
  { label: "Warehousing & Distribution", slug: "warehousing-distribution" },
  { label: "Risk Management", slug: "risk-management" },
  { label: "Project Cargo", slug: "project-cargo" },
];

const COMPANY_LINKS: { label: string; href: string }[] = [
  { label: "About Freyer", href: "/about" },
  { label: "Documented Projects", href: "/projects" },
  { label: "Locations & Network", href: "/locations" },
  { label: "Network Partners", href: "/network" },
  { label: "Careers", href: "/careers" },
  { label: "CSR", href: "/csr" },
];

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const BRANCH_STATIONS: { name: string; phone: string }[] = [
  { name: "Chennai HQ", phone: "+91 44 43191919" },
  { name: "Chennai Airport", phone: "+91 96000 41033" },
  { name: "Delhi / NCR", phone: "0124-4068388" },
  { name: "Mumbai", phone: "022-46191301" },
  { name: "Bengaluru", phone: "080 4120 0300" },
  { name: "Hyderabad", phone: "040-48561797" },
  { name: "Visakhapatnam", phone: "+91 97402 20069" },
  { name: "Coimbatore", phone: "+91 99625 41554" },
  { name: "Tuticorin", phone: "+91 87544 46077" },
  { name: "Ahmedabad", phone: "+91 98214 65939" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const headingCls =
  "text-[11px] uppercase tracking-[0.08em] text-[#71717A] mb-4";

const linkCls =
  "block text-[14px] text-[#A1A1AA] hover:text-[#F8F7F4] transition-colors duration-150 leading-relaxed py-0.5";

// ── Component ─────────────────────────────────────────────────────────────────

export function ManifestFooter() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-[#121316] border-t border-white/[0.08] pt-16 pb-10"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Top 4-column grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Company block */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Freyer International Logistics"
              width={120}
              height={32}
              className="h-8 w-auto brightness-0 invert opacity-60"
            />
            <div className="flex flex-col gap-1">
              <p
                className="text-[11px] text-[#71717A] leading-snug"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Freyer International Logistics Pvt. Ltd.
              </p>
              <a
                href="tel:+914443191919"
                className="text-[12px] text-[#A1A1AA] hover:text-[#F8F7F4] transition-colors duration-150"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                +91 44 43191919
              </a>
              <a
                href="mailto:info@freyerinternational.com"
                className="text-[12px] text-[#A1A1AA] hover:text-[#F8F7F4] transition-colors duration-150"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                info@freyerinternational.com
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p
              className={headingCls}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Services
            </p>
            <nav aria-label="Services">
              {SERVICES.map(({ label, slug }) => (
                <Link
                  key={slug}
                  href={`/services#${slug}`}
                  className={linkCls}
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p
              className={headingCls}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Company
            </p>
            <nav aria-label="Company">
              {COMPANY_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={linkCls}
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <p
              className={headingCls}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Legal
            </p>
            <nav aria-label="Legal">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={linkCls}
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Branch stations section ──────────────────────────────── */}
        <div className="border-t border-white/[0.08] pt-8 mt-8">
          {/* Desktop: always visible */}
          <div className="hidden sm:block">
            <p
              className={headingCls}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Branch Stations
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {BRANCH_STATIONS.map(({ name, phone }) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] py-1.5"
                >
                  <span
                    className="text-[12px] text-[#A1A1AA]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {name}
                  </span>
                  <span
                    className="text-[12px] text-[#71717A] shrink-0"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {phone}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: collapsible */}
          <details className="sm:hidden group">
            <summary
              className={[
                headingCls,
                "cursor-pointer list-none flex items-center justify-between",
                "hover:text-[#A1A1AA] transition-colors duration-150",
              ].join(" ")}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              10 Branch Stations
              <span
                className="transition-transform duration-150 group-open:rotate-180"
                aria-hidden
              >
                &#x25BE;
              </span>
            </summary>
            <div className="mt-4 flex flex-col gap-0">
              {BRANCH_STATIONS.map(({ name, phone }) => (
                <div
                  key={name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] py-2"
                >
                  <span
                    className="text-[12px] text-[#A1A1AA]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {name}
                  </span>
                  <span
                    className="text-[12px] text-[#71717A] shrink-0"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {phone}
                  </span>
                </div>
              ))}
            </div>
          </details>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="border-t border-white/[0.08] mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[11px] text-[#71717A]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            &copy; 2024 Freyer International Logistics Pvt. Ltd. All rights
            reserved.
          </p>
          <p
            className="text-[11px] text-[#71717A]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            AEO-LO &middot; IATA &middot; WCA &middot; SCN &middot; AMTOI
          </p>
        </div>
      </div>
    </footer>
  );
}
