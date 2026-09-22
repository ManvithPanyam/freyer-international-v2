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
    <section className="relative bg-[#121316] text-[#F8F7F4] pt-32 sm:pt-36 pb-12 sm:pb-16 border-b border-white/10 overflow-hidden">
      {/* Background Architectural Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(225, 57, 15, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 65%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className={`relative z-10 w-full max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Breadcrumb Row */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-[11px] font-mono text-white/45 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label + idx}>
              <span className="text-white/20 select-none">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#e1390f] font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow Kicker */}
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-slate-300 font-medium">
            {eyebrow}
          </span>
        </div>

        {/* Monumental Barlow Condensed Title */}
        <div className="max-w-4xl">
          <h1
            className="text-white font-black tracking-[-0.03em] leading-[0.92] uppercase"
            style={{
              fontFamily: THEME_TOKENS.typography.fontDisplay,
              fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)",
            }}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/60 font-light italic">
                  {subtitle}
                </span>
              </>
            )}
            <span className="text-[#e1390f]">.</span>
          </h1>

          {/* Business Lead Copy */}
          <p className="mt-6 text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {children && <div className="mt-8">{children}</div>}

        {/* Docked Stats Bar (Optional) */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <div
                  className="font-bold text-white tracking-tight leading-none text-2xl sm:text-3xl lg:text-4xl"
                  style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#e1390f] font-semibold">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="mt-0.5 text-[10px] font-mono text-white/40 truncate">
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
