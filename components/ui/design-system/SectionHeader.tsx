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
        <div className={`flex items-center gap-2 text-xs font-mono text-[#E33B12] uppercase tracking-[0.24em] font-semibold mb-3 ${align === "center" ? "justify-center" : ""}`}>
          {num && <span>{num}</span>}
          {num && tag && <span className="text-[#DCDCD7] select-none">/</span>}
          {tag && <span>{tag}</span>}
        </div>
      )}

      {/* Main Title & Action Alignment */}
      <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"} gap-6 pb-6 border-b border-[#DCDCD7]`}>
        <div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
          <h2
            className="text-[#17181B] font-black tracking-[-0.02em] leading-[0.94] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "var(--token-text-4xl)",
            }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-[#62656B] font-light italic">
                  {highlight}
                </span>
              </>
            )}
          </h2>
          {description && (
            <p className="mt-4 text-[#62656B] text-sm sm:text-base font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
