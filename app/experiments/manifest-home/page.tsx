/**
 * FREYER INTERNATIONAL — "THE MANIFEST"
 *
 * Design concept: a freight document. Ruled rows, hairlines, mono data layer.
 * Fonts: Archivo (display) · IBM Plex Sans (body) · IBM Plex Mono (labels)
 *
 * Route: /experiments/manifest-home
 * Production: wire app/page.tsx to this page after sign-off.
 *
 * Verified content only. No invented facts.
 * Track Consignment CTA removed — no /track route exists.
 */
import { ManifestNav } from "@/components/manifest-home/ManifestNav";
import { ManifestHero } from "@/components/manifest-home/ManifestHero";
import { ManifestCredentialStrip } from "@/components/manifest-home/ManifestCredentialStrip";
import { ManifestProof } from "@/components/manifest-home/ManifestProof";
import { ManifestServices } from "@/components/manifest-home/ManifestServices";
import { ManifestNetwork } from "@/components/manifest-home/ManifestNetwork";
import { ManifestQuote } from "@/components/manifest-home/ManifestQuote";
import { ManifestFooter } from "@/components/manifest-home/ManifestFooter";

export default function ManifestHomePage() {
  return (
    <div className="min-h-screen bg-[#121316] text-[#F8F7F4] selection:bg-[#E1390F] selection:text-white font-[var(--font-ibm-plex-sans)]">
      {/* Sticky navigation — transparent over hero, solid on scroll */}
      <ManifestNav />

      <main>
        {/* 01 — Hero: full-bleed video + value proposition */}
        <ManifestHero />

        {/* 02 — Credential strip: IATA · WCA · SCN · AEO-LO · AMTOI */}
        <ManifestCredentialStrip />

        {/* 03 — Proof: Record #9 (482 MT) + Record #11 (37.6 MT) */}
        <ManifestProof />

        {/* 04 — Six disciplines: numbered accordion */}
        <ManifestServices />

        {/* 05 — India network: 10 verified stations */}
        <ManifestNetwork />

        {/* 06 — Engage directly: RFQ form + Chennai HQ contact */}
        <ManifestQuote />
      </main>

      {/* Footer */}
      <ManifestFooter />
    </div>
  );
}
