/**
 * Freyer Editorial Industrial Design System Tokens
 * Canonical source of truth derived from the Homepage Hero.
 */

export const THEME_TOKENS = {
  colors: {
    // Primary Backgrounds (Warm Light Stone / Paper)
    background: "#F7F6F2",         // Primary light canvas
    backgroundAlt: "#FFFFFF",      // Clean white card / panel surface
    surfaceElevated: "#FFFFFF",    // Raised card / panel surface
    surfaceMuted: "rgba(23, 24, 27, 0.04)",
    surfaceHover: "rgba(23, 24, 27, 0.07)",
    
    // Borders
    borderHairline: "#DCDCD7",
    borderSubtle: "#DCDCD7",
    borderFocus: "#17181B",

    // Foregrounds & Text
    textPrimary: "#17181B",        // Primary charcoal/black
    textSecondary: "#62656B",      // Secondary editorial slate
    textMuted: "#62656B",
    textFaint: "rgba(23, 24, 27, 0.40)",
    textGhost: "rgba(23, 24, 27, 0.25)",

    // Cinematic Dark Contrast Section
    darkBackground: "#17181B",
    darkText: "#F7F6F2",
    darkBorder: "rgba(247, 246, 242, 0.12)",

    // Canonical Brand Accent
    accent: "#E33B12",             // Freyer International Red
    accentHover: "#C42F0B",
    accentMuted: "rgba(227, 59, 18, 0.12)",
    accentGlow: "rgba(227, 59, 18, 0.25)",
  },
  typography: {
    fontDisplay: "var(--font-barlow-condensed), system-ui, sans-serif",
    fontBody: "var(--font-poppins), system-ui, sans-serif",
    fontMono: "var(--font-ibm-plex-mono), var(--font-space), monospace",
  },
  layout: {
    maxWidth: "1560px",
    contentGutter: "px-6 sm:px-10 lg:px-16",
  }
} as const;
