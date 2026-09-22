"use client";

import React, { useState } from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { FeaturedLeader } from "@/components/about/FeaturedLeader";
import { BoardGrid } from "@/components/about/BoardGrid";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { CompanyPhilosophy } from "@/components/about/CompanyPhilosophy";
import { StakeholderPillars } from "@/components/about/StakeholderPillars";
import { AboutBridge } from "@/components/about/AboutBridge";
import { LeadershipDrawer } from "@/components/about/LeadershipDrawer";
import {
  BOARD_DIRECTORS,
  OPERATIONAL_LEADERSHIP,
  LeadershipPerson,
} from "@/data/leadership";

export function AboutLeadershipClient() {
  const [selectedPerson, setSelectedPerson] = useState<LeadershipPerson | null>(null);

  const mdLeader = BOARD_DIRECTORS.find((d) => d.id === "tj-srinivasaraj") || BOARD_DIRECTORS[0];

  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* 01: Featured Managing Director */}
      <FeaturedLeader person={mdLeader} onSelect={setSelectedPerson} />

      {/* 02: Board of Directors */}
      <BoardGrid directors={BOARD_DIRECTORS} onSelect={setSelectedPerson} />

      {/* 03: Operational Leadership */}
      <LeadershipGrid leaders={OPERATIONAL_LEADERSHIP} onSelect={setSelectedPerson} />

      {/* 04: Corporate Philosophy & Values */}
      <CompanyPhilosophy />

      {/* 05: Three Stakeholders */}
      <StakeholderPillars />

      {/* 06: Architecture Bridge (People -> Capability -> Reach) */}
      <AboutBridge />

      {/* Detail Slide-out Dossier Drawer */}
      <LeadershipDrawer
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </>
  );
}
