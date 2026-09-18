"use client";

import React from "react";
import { FTRNav } from "@/components/freyer-total-redesign/FTRNav";
import { FTRHero } from "@/components/freyer-total-redesign/FTRHero";
import { FTRTrustBar } from "@/components/freyer-total-redesign/FTRTrustBar";
import { FTRCargoMonument } from "@/components/freyer-total-redesign/FTRCargoMonument";
import { FTRServices } from "@/components/freyer-total-redesign/FTRServices";
import { FTRNetwork } from "@/components/freyer-total-redesign/FTRNetwork";
import { FTRDispatch } from "@/components/freyer-total-redesign/FTRDispatch";
import { FTRFooter } from "@/components/freyer-total-redesign/FTRFooter";

/**
 * FREYER INTERNATIONAL — TOTAL REDESIGN
 * Direction C: MASS
 *
 * The design language is derived from the physical properties of the cargo itself.
 * Weight. Volume. Displacement. Density.
 *
 * Homepage Narrative (5 questions answered in sequence, zero filler):
 *
 *  [WHO IS FREYER?]
 *  FTRHero — Asymmetric editorial split: enormous wordmark left / raw cargo photo right
 *
 *  [CAN THEY BE TRUSTED?]
 *  FTRTrustBar — AEO-LO · IATA · WCA · SCN · AMTOI (one quiet institutional line)
 *
 *  [HOW MUCH CAN THEY MOVE?]
 *  FTRCargoMonument — 482 carved from the cargo photograph. 37.6 MT secondary record.
 *
 *  [WHAT DO THEY DO FOR MY SHIPMENT?]
 *  FTRServices — 6 services in editorial sequence. Real photography. Verified specs.
 *
 *  [WHERE ARE THEY IN INDIA?]
 *  FTRNetwork — 10 verified stations. Truthful India map. Direct phone numbers.
 *
 *  [HOW DO I REACH THEM?]
 *  FTRDispatch — RFQ form + Chennai HQ contact plate. Direct and functional.
 *
 * Route: /experiments/freyer-total-redesign
 *
 * All content verified from Freyer source records.
 * Zero fabricated claims, statistics, or synthetic telemetry.
 */
export default function FreyerTotalRedesignPage() {
  return (
    <div className="min-h-screen bg-[#040812] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Navigation — transparent on hero, solid on scroll */}
      <FTRNav />

      {/* Act I: WHO IS FREYER? */}
      <FTRHero />

      {/* Act II: CAN THEY BE TRUSTED? */}
      <FTRTrustBar />

      {/* Act III: HOW MUCH CAN THEY MOVE? — THE SIGNATURE MOMENT */}
      <FTRCargoMonument />

      {/* Act IV: WHAT DO THEY DO FOR MY SHIPMENT? */}
      <FTRServices />

      {/* Act V: WHERE ARE THEY IN INDIA? */}
      <FTRNetwork />

      {/* Act VI: HOW DO I REACH THEM? */}
      <FTRDispatch />

      {/* Footer */}
      <FTRFooter />
    </div>
  );
}
