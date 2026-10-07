// Light theme experiment home page at /experiments/light-theme
'use client';

import { LTNav } from '@/components/freyer-light-theme/LTNav';
import { LTHero } from '@/components/freyer-light-theme/LTHero';
import { LTTrustBar } from '@/components/freyer-light-theme/LTTrustBar';
import { FTRCargoMonument } from '@/components/freyer-total-redesign/FTRCargoMonument'; // Kept dark for cinematic contrast
import { LTServices } from '@/components/freyer-light-theme/LTServices';
import { LTNetwork } from '@/components/freyer-light-theme/LTNetwork';
import { LTDispatch } from '@/components/freyer-light-theme/LTDispatch';
import { LTFooter } from '@/components/freyer-light-theme/LTFooter';

export default function LightThemePage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <LTNav />
      <LTHero />
      <LTTrustBar />
      <FTRCargoMonument />  {/* Intentionally kept dark — cinematic contrast section */}
      <LTServices />
      <LTNetwork />
      <LTDispatch />
      <LTFooter />
    </div>
  );
}
