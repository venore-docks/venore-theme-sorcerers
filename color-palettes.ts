import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o magenta-arcano do bloco base de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const SORCERERS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.5 0.22 295)",
      primaryForeground: "oklch(0.98 0.01 295)",
      accent: "oklch(0.87 0.08 300)",
      accentForeground: "oklch(0.26 0.05 295)",
      ring: "oklch(0.55 0.19 295)",
    },
    dark: {
      primary: "oklch(0.68 0.2 295)",
      primaryForeground: "oklch(0.16 0.02 295)",
      accent: "oklch(0.32 0.06 300)",
      accentForeground: "oklch(0.92 0.03 300)",
      ring: "oklch(0.64 0.18 295)",
    },
  },
  THEME_HUE_PRESETS,
);
