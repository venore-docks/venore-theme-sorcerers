import type { ThemeManifest } from "@venore/theme-sdk";

export const sorcerersManifest: ThemeManifest = {
  key: "sorcerers",
  name: "Sorcerers",
  version: "2.0.0",
  themeContractVersion: "7.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand. Cor
  // aproxima o magenta-arcano de --primary no modo claro (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 84, position: "left", color: "oklch(0.5 0.22 295)" },
  colorModes: ["light", "dark"],
};
