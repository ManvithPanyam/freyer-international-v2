import React from "react";
import Link from "next/link";
import { THEME_TOKENS } from "./tokens";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  stats?: Array<{
    value: string;
    label: string;
    sub?: string;
  }>;
  children?: React.ReactNode;
}

export function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  description,
  stats,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative bg-[var(--color-bg-base)] text-[var(--color-text-primary)] pt-32 sm:pt-36 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)] overflow-hidden">
      <div className={`relative z-10 w-full max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-secondary)] mb-6">
          <Link href="/" className="hover:text-[var(--color-brand-blue)] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label + idx}>
              <span className="text-[var(--color-border-subtle)] select-none">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[var(--color-brand-blue)] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[var(--color-cta)] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow Kicker */}
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--color-cta)] font-semibold">
            {eyebrow}
          </span>
        </div>

        {/* Monumental Barlow Condensed Title */}
        <div className="max-w-4xl">
          <h1
            className="text-[var(--color-text-primary)] font-black tracking-[-0.03em] leading-[0.92] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)",
            }}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-[var(--color-brand-blue)] font-light italic">
                  {subtitle}
                </span>
              </>
            )}
          </h1>

          {/* Business Lead Copy */}
          <p className="mt-6 text-[var(--color-text-secondary)] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {children && <div className="mt-8">{children}</div>}

        {/* Docked Stats Bar (Optional) */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)] grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="group p-4 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]">
                <div
                  className="font-bold text-[var(--color-text-primary)] tracking-tight leading-none text-2xl sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-cta)] font-semibold">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="mt-0.5 text-[10px] font-mono text-[var(--color-text-secondary)] truncate">
                    {s.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
