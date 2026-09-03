import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Base = violeta elétrico + magenta de conjuração do theme.css (esquema forte desta sessão). As
// rotações de hue derivam variações mantendo a mesma força de chroma.
export const SORCERERS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.52 0.26 295)",
      primaryForeground: "oklch(0.98 0.02 300)",
      accent: "oklch(0.62 0.26 340)",
      accentForeground: "oklch(0.99 0.02 340)",
      ring: "oklch(0.55 0.24 295)",
    },
    dark: {
      primary: "oklch(0.68 0.27 295)",
      primaryForeground: "oklch(0.12 0.04 295)",
      accent: "oklch(0.72 0.26 340)",
      accentForeground: "oklch(0.12 0.04 340)",
      ring: "oklch(0.68 0.27 295)",
    },
  },
  THEME_HUE_PRESETS,
);
