import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

export const SORCERERS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.48 0.2 300)",
      primaryForeground: "oklch(0.98 0.02 310)",
      accent: "oklch(0.68 0.19 45)",
      accentForeground: "oklch(0.2 0.05 40)",
      ring: "oklch(0.6 0.2 300)",
    },
    dark: {
      primary: "oklch(0.72 0.22 300)",
      primaryForeground: "oklch(0.14 0.04 300)",
      accent: "oklch(0.74 0.2 45)",
      accentForeground: "oklch(0.16 0.05 40)",
      ring: "oklch(0.74 0.2 45)",
    },
  },
  THEME_HUE_PRESETS,
);
