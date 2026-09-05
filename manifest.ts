import type { ThemeManifest } from "@venore/theme-sdk";

export const sorcerersManifest: ThemeManifest = {
  key: "sorcerers",
  name: "Sorcerers",
  version: "0.1.0",
  themeContractVersion: "7.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand.
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 80, position: "left", color: "#8b3fd4" },
  colorModes: ["light", "dark"],
};
