"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck, Building2, MapPin, Award, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { LeadershipPerson } from "@/data/leadership";
import { THEME_TOKENS } from "@/components/ui/design-system";

interface LeadershipDrawerProps {
  person: LeadershipPerson | null;
  onClose: () => void;
}

export function LeadershipDrawer({ person, onClose }: LeadershipDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (person) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [person, onClose]);

  if (!person) return null;

  const initials = (person.displayName || person.name)
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-xl bg-[#F7F6F2] text-[#17181B] h-full shadow-2xl border-l border-[#DCDCD7] flex flex-col z-10 animate-in slide-in-from-right duration-300 overflow-y-auto">
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 bg-[#F7F6F2]/95 backdrop-blur-md px-6 py-5 border-b border-[#DCDCD7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E33B12]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#62656B]">
              Verified Executive Dossier
            </span>
          </div>

          <IconButton
            icon={<X className="w-5 h-5 text-[#17181B]" />}
            aria-label="Close executive dossier"
            onClick={onClose}
          />
        </div>

        {/* Drawer Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Visual Header */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#DCDCD7] bg-white shadow-xs">
            {person.imageSrc ? (
              <Image
                src={person.imageSrc}
                alt={person.displayName || person.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-between p-6 bg-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#62656B]">
                  <span className="text-[#E33B12] uppercase tracking-widest">{person.category.toUpperCase()}</span>
                  <span>ID: {person.id.toUpperCase()}</span>
                </div>
                <div
                  className="text-6xl font-black text-[#17181B]/15 text-center my-auto select-none"
                  style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                >
                  {initials}
                </div>
                <div className="text-[11px] font-mono text-[#62656B] text-right">
                  Institutional Records
                </div>
              </div>
            )}

            <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#17181B]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white">
              Status: {person.status}
            </div>
          </div>

          {/* Name & Title */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#E33B12] font-semibold mb-2">
              {person.title}
            </div>
            <h2
              className="text-[#17181B] font-black tracking-[-0.02em] leading-tight uppercase text-3xl sm:text-4xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              {person.displayName || person.name}
            </h2>
            {person.displayName && person.name !== person.displayName && (
              <div className="mt-2 text-xs font-mono text-[#62656B]">
                Statutory Registered Name: <span className="text-[#17181B] font-medium">{person.name}</span>
              </div>
            )}
          </div>

          {/* Key Facts / Metadata */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-lg bg-white border border-[#DCDCD7] shadow-xs">
              <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider mb-1">Corporate Scope</div>
              <div className="text-xs font-semibold text-[#17181B] line-clamp-2">{person.businessArea || "Executive Operations"}</div>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#DCDCD7] shadow-xs">
              <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider mb-1">Station Base</div>
              <div className="text-xs font-semibold text-[#17181B]">{person.location || "Chennai HQ"}</div>
            </div>
          </div>

          {/* Verified Narrative Biography */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#62656B] pb-2 border-b border-[#DCDCD7]">
              Verified Executive Record
            </h3>
            <p className="text-sm text-[#62656B] font-normal leading-relaxed">
              {person.bio}
            </p>
          </div>

          {/* Forensic Data Citation */}
          <div className="p-4 rounded-lg bg-white border border-[#DCDCD7] text-xs font-mono space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-[#62656B]">
              <ShieldCheck className="w-4 h-4 text-[#E33B12]" />
              <span className="font-semibold text-[#17181B]">Citation Verification</span>
            </div>
            <div className="text-[#62656B] text-[11px] leading-relaxed">
              Source: {person.bioSource || "Official Corporate Filings / Regulatory Registry"}
            </div>
            {person.notes && (
              <div className="text-[#62656B] text-[11px] border-t border-[#DCDCD7] pt-2">
                Audit Note: {person.notes}
              </div>
            )}
          </div>

          {/* Links & Affiliations */}
          {person.linkedinUrl && (
            <div className="pt-2">
              <Button
                href={person.linkedinUrl}
                external
                variant="secondary"
                size="md"
                className="w-full"
                icon={<ExternalLink className="w-3.5 h-3.5 text-[#62656B]" />}
              >
                <svg className="w-4 h-4 fill-current text-[#0077b5] mr-1.5 shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>View Corporate Network Profile</span>
              </Button>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="sticky bottom-0 bg-[#F7F6F2] px-6 py-4 border-t border-[#DCDCD7] text-[11px] font-mono text-[#62656B] flex items-center justify-between">
          <span>Freyer International Logistics</span>
          <span>CIN: U74999KA2018PTC109274</span>
        </div>
      </div>
    </div>
  );
}
