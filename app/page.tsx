'use client';

import { LTNav } from '@/components/freyer-light-theme/LTNav';
import { LTHero } from '@/components/freyer-light-theme/LTHero';
import { LTTrustBar } from '@/components/freyer-light-theme/LTTrustBar';
import { CompanyPositioning } from '@/components/home/CompanyPositioning';
import { LTServices } from '@/components/freyer-light-theme/LTServices';
import { FTRCargoMonument } from '@/components/freyer-total-redesign/FTRCargoMonument';
import { LTNetwork } from '@/components/freyer-light-theme/LTNetwork';
import { AboutLeadershipPreview } from '@/components/home/AboutLeadershipPreview';
import { LTDispatch } from '@/components/freyer-light-theme/LTDispatch';
import { LTFooter } from '@/components/freyer-light-theme/LTFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      {/* 01. Primary Navigation */}
      <LTNav />

      {/* 02. Hero with Integrated Proof Strip */}
      <LTHero />

      {/* 03. Accreditations & Statutory Authority */}
      <LTTrustBar />

      {/* 04. Corporate Positioning */}
      <CompanyPositioning />

      {/* 05. Multimodal Services Portfolio */}
      <LTServices />

      {/* 06. Featured Projects & Cargo Monument */}
      <FTRCargoMonument />

      {/* 07. India Station Network & Gateways */}
      <LTNetwork />

      {/* 08. About & Leadership Preview */}
      <AboutLeadershipPreview />

      {/* 09. Commercial Dispatch & Freight Rate Enquiry */}
      <LTDispatch />

      {/* 10. Comprehensive Footer */}
      <LTFooter />
    </div>
  );
}

