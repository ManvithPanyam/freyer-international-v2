"use client";

import React, { useState } from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { FeaturedLeader } from "@/components/about/FeaturedLeader";
import { BoardGrid } from "@/components/about/BoardGrid";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { CompanyPhilosophy } from "@/components/about/CompanyPhilosophy";
import { StakeholderPillars } from "@/components/about/StakeholderPillars";
import { AboutCredentialsAwards } from "@/components/about/AboutCredentialsAwards";
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
      {/* 00: Monumental Display Hero */}
      <AboutHero />

      {/* 01: Featured Managing Director */}
      <FeaturedLeader person={mdLeader} onSelect={setSelectedPerson} />

      {/* 02: Board of Directors */}
      <BoardGrid directors={BOARD_DIRECTORS} onSelect={setSelectedPerson} />

      {/* 03: Operational Leadership Desks */}
      <LeadershipGrid leaders={OPERATIONAL_LEADERSHIP} onSelect={setSelectedPerson} />

      {/* 04: Corporate Philosophy & Core Values */}
      <CompanyPhilosophy />

      {/* 05: Three Stakeholders Ecosystem */}
      <StakeholderPillars />

      {/* 06: Statutory Accreditations & Honors */}
      <AboutCredentialsAwards />

      {/* 07: Enterprise Architecture Bridge */}
      <AboutBridge />

      {/* Detail Slide-out Dossier Drawer */}
      <LeadershipDrawer
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </>
  );
}
