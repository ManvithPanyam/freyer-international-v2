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
    <section className="relative bg-[#F7F6F2] text-[#17181B] pt-32 sm:pt-36 pb-12 sm:pb-16 border-b border-[#DCDCD7] overflow-hidden">
      <div className={`relative z-10 w-full max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#62656B] mb-6">
          <Link href="/" className="hover:text-[#17181B] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label + idx}>
              <span className="text-[#DCDCD7] select-none">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#17181B] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#E33B12] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow Kicker */}
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E33B12] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E33B12]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#62656B] font-semibold">
            {eyebrow}
          </span>
        </div>

        {/* Monumental Barlow Condensed Title */}
        <div className="max-w-4xl">
          <h1
            className="text-[#17181B] font-black tracking-[-0.03em] leading-[0.92] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)",
            }}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-[#62656B] font-light italic">
                  {subtitle}
                </span>
              </>
            )}
          </h1>

          {/* Business Lead Copy */}
          <p className="mt-6 text-[#62656B] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {children && <div className="mt-8">{children}</div>}

        {/* Docked Stats Bar (Optional) */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#DCDCD7] grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="group p-4 rounded-xl bg-[#FFFFFF] border border-[#DCDCD7]">
                <div
                  className="font-bold text-[#17181B] tracking-tight leading-none text-2xl sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#E33B12] font-semibold">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="mt-0.5 text-[10px] font-mono text-[#62656B] truncate">
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
