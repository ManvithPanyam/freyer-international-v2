'use client';

import { LTNav } from '@/components/freyer-light-theme/LTNav';
import { LTHero } from '@/components/freyer-light-theme/LTHero';
import { LTTrustBar } from '@/components/freyer-light-theme/LTTrustBar';
import { FTRCargoMonument } from '@/components/freyer-total-redesign/FTRCargoMonument'; // Kept dark for cinematic contrast
import { LTServices } from '@/components/freyer-light-theme/LTServices';
import { LTNetwork } from '@/components/freyer-light-theme/LTNetwork';
import { LTDispatch } from '@/components/freyer-light-theme/LTDispatch';
import { LTFooter } from '@/components/freyer-light-theme/LTFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] selection:bg-[var(--color-cta)] selection:text-white">
      <LTNav />
      <LTHero />
      <LTTrustBar />
      <FTRCargoMonument />
      <LTServices />
      <LTNetwork />
      <LTDispatch />
      <LTFooter />
    </div>
  );
}

