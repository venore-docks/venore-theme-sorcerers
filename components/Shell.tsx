import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { ArcaneNav } from "./ArcaneNav";
import { MobileNav } from "./MobileNav";

// Arranjo ASSIMÉTRICO e dramático (docs/themes/shell-contract.md — Abordagem A) — o único tema
// onde os efeitos são bem-vindos à vontade. Uma camada de AURORA animada (orbes de violeta e
// magenta em blur) atrás de tudo; a navegação é um cartão de VIDRO flutuante à esquerda (não
// encostado na borda, não de altura inteira); a coluna de conteúdo é puxada pra esquerda
// (mr-auto), deixando um vão grande à direita onde a aurora aparece — peso deliberadamente fora
// do centro. Distinto do Slime (sidebar rente), do rail do Nightcity/Druids, do híbrido do
// Knights e do eixo central do Paladins.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-(image:--app-background)">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-48 size-[44rem] rounded-full bg-primary/25 blur-3xl animate-[sorcerers-aurora_24s_ease-in-out_infinite]" />
        <div className="absolute -bottom-56 -right-48 size-[48rem] rounded-full bg-accent/25 blur-3xl animate-[sorcerers-aurora_30s_ease-in-out_infinite_reverse]" />
        <div className="absolute left-1/2 top-1/3 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl animate-[sorcerers-aurora_36s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 flex min-h-full flex-1 flex-col">
        <HeaderSlot {...header} />
        <MobileNav {...sidebarLeft} />
        <div className="mx-auto flex w-full max-w-[100rem] flex-1 gap-8 px-4 sm:px-6 lg:px-12">
          <ArcaneNav {...sidebarLeft} />
          <div className="flex min-w-0 flex-1 flex-col">
            <ContentSlot
              sidebarContextualEnabled={sidebarContextualEnabled}
              sidebarContextual={sidebarContextual}
              breadcrumbs={breadcrumbs}
              breadcrumbsJsonLd={breadcrumbsJsonLd}
            >
              {children}
            </ContentSlot>
            <FooterSlot {...footer} />
          </div>
        </div>
      </div>
    </div>
  );
}
