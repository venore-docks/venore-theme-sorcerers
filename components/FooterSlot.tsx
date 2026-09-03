import { Sitemap } from "@venore/theme-sdk/ui";
import type { FooterSlotProps } from "@venore/theme-sdk";
import { PlatformBrand } from "./PlatformBrand";

// Rodapé de vidro, alinhado à esquerda (mesma assimetria da Shell). Marca real (PlatformBrand)
// num painel translúcido com brilho; sitemap ao lado. brand.color não é consumido — o contrato só
// exige aceitar o campo.
export function FooterSlot({ brand, sitemapItems, creditsEnabled }: FooterSlotProps) {
  return (
    <footer className="mt-auto mr-auto grid w-full max-w-5xl gap-8 border-t border-primary/25 py-10 text-muted-foreground lg:grid-cols-[max-content_minmax(0,1fr)]">
      <div className="w-fit max-w-full space-y-4 rounded-panel border border-primary/25 bg-card/60 px-6 py-6 shadow-float backdrop-blur-xl">
        <div className="max-w-40">
          <PlatformBrand {...brand} isScrolled={false} />
        </div>
        {brand.description.trim().length > 0 && (
          <p className="max-w-[34ch] text-xs leading-6 text-muted-foreground">{brand.description}</p>
        )}
      </div>

      {sitemapItems.length > 0 && (
        <div className="pt-1">
          <Sitemap items={sitemapItems} />
        </div>
      )}

      {creditsEnabled && (
        <div data-credits className="col-span-full border-t border-border pt-4 text-xs text-muted-foreground">
          Venore Docks
        </div>
      )}
    </footer>
  );
}
