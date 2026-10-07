/**
 * Freyer Editorial Industrial Design System Tokens
 * Canonical source of truth derived from the Homepage Hero.
 */

export const THEME_TOKENS = {
  colors: {
    // Primary Backgrounds (Dark Grey / Graphite)
    background: "#121316",         // Deepest graphite stage canvas (FTRHero background)
    backgroundAlt: "#181A1F",      // Primary section alternating graphite canvas
    surfaceElevated: "#1E2026",    // Raised card / panel surface
    surfaceMuted: "rgba(255, 255, 255, 0.03)",
    surfaceHover: "rgba(255, 255, 255, 0.06)",
    
    // Borders
    borderHairline: "rgba(255, 255, 255, 0.08)",
    borderSubtle: "rgba(255, 255, 255, 0.12)",
    borderFocus: "rgba(255, 255, 255, 0.28)",

    // Foregrounds & Text
    textPrimary: "#F8F7F4",
    textSecondary: "#A1A1AA",      // zinc-400
    textMuted: "#71717A",          // zinc-500
    textFaint: "rgba(255, 255, 255, 0.40)",
    textGhost: "rgba(255, 255, 255, 0.25)",

    // Canonical Brand Accent
    accent: "#E1390F",             // Freyer International Orange/Red
    accentHover: "#C42F0B",
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
