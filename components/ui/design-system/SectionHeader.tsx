import React from "react";
import { THEME_TOKENS } from "./tokens";

interface SectionHeaderProps {
  num?: string;
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  num,
  tag,
  title,
  highlight,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      {/* Category Eyebrow */}
      {(num || tag) && (
        <div className={`flex items-center gap-2 text-[11px] font-mono text-[#e1390f] uppercase tracking-[0.24em] font-semibold mb-3 ${align === "center" ? "justify-center" : ""}`}>
          {num && <span>{num}</span>}
          {num && tag && <span className="text-white/20 select-none">/</span>}
          {tag && <span>{tag}</span>}
        </div>
      )}

      {/* Main Title & Action Alignment */}
      <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"} gap-6 pb-6 border-b border-white/10`}>
        <div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
          <h2
            className="text-white font-black tracking-[-0.02em] leading-[0.94] uppercase text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/60 font-light italic">
                  {highlight}
                </span>
              </>
            )}
          </h2>
          {description && (
            <p className="mt-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
