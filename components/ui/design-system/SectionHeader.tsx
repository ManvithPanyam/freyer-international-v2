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
        <div className={`flex items-center gap-2 text-xs font-mono text-[var(--color-cta)] uppercase tracking-[0.24em] font-semibold mb-3 ${align === "center" ? "justify-center" : ""}`}>
          {num && <span>{num}</span>}
          {num && tag && <span className="text-[var(--color-border-subtle)] select-none">/</span>}
          {tag && <span>{tag}</span>}
        </div>
      )}

      {/* Main Title & Action Alignment */}
      <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"} gap-6 pb-6 border-b border-[var(--color-border-subtle)]`}>
        <div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
          <h2
            className="text-[var(--color-text-primary)] font-black tracking-[-0.02em] leading-[0.94] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "var(--token-text-4xl)",
            }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-[var(--color-text-secondary)] font-light italic">
                  {highlight}
                </span>
              </>
            )}
          </h2>
          {description && (
            <p className="mt-4 text-[var(--color-text-secondary)] text-sm sm:text-base font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
