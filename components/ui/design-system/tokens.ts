/**
 * Freyer Editorial Industrial Design System Tokens
 * Canonical source of truth derived from the Homepage Hero.
 */

export const THEME_TOKENS = {
  colors: {
    // Primary Backgrounds
    background: "#030712",         // Deepest stage canvas (FTRHero background)
    backgroundAlt: "#040812",      // Primary section alternating canvas
    surfaceElevated: "#091222",    // Raised card / panel surface
    surfaceMuted: "rgba(255, 255, 255, 0.03)",
    surfaceHover: "rgba(255, 255, 255, 0.06)",
    
    // Borders
    borderHairline: "rgba(255, 255, 255, 0.08)",
    borderSubtle: "rgba(255, 255, 255, 0.12)",
    borderFocus: "rgba(255, 255, 255, 0.28)",

    // Foregrounds & Text
    textPrimary: "#ffffff",
    textSecondary: "#cbd5e1",      // slate-300
    textMuted: "#94a3b8",          // slate-400
    textFaint: "rgba(255, 255, 255, 0.40)",
    textGhost: "rgba(255, 255, 255, 0.25)",

    // Canonical Brand Accent
    accent: "#e1390f",             // Freyer International Orange/Red
    accentHover: "#c42f0b",
    accentMuted: "rgba(225, 57, 15, 0.15)",
    accentGlow: "rgba(225, 57, 15, 0.35)",
  },
  typography: {
    fontDisplay: "var(--font-barlow-condensed), system-ui, sans-serif",
    fontBody: "var(--font-poppins), system-ui, sans-serif",
    fontMono: "var(--font-space), monospace",
  },
  layout: {
    maxWidth: "1560px",
    contentGutter: "px-6 sm:px-10 lg:px-16",
  }
} as const;
