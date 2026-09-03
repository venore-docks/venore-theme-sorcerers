import type { ContentSlotProps } from "@venore/theme-sdk";
import { Breadcrumbs } from "./Breadcrumbs";

// Coluna de conteúdo puxada pra ESQUERDA (mr-auto), não centrada — o peso da página fica fora do
// centro, e o vão à direita deixa a aurora aparecer. Fundo transparente: a base
// (--app-background) e a aurora animada moram no Shell.
export function ContentSlot({ children, sidebarContextualEnabled, sidebarContextual, breadcrumbs, breadcrumbsJsonLd }: ContentSlotProps) {
  const showSidebar = sidebarContextualEnabled && sidebarContextual != null;

  return (
    <div data-sidebar-contextual={showSidebar} className="min-w-0 flex-1">
      <Breadcrumbs breadcrumbs={breadcrumbs} breadcrumbsJsonLd={breadcrumbsJsonLd} />
      <div className={`flex gap-8 py-10 ${showSidebar ? "w-full max-w-6xl flex-col lg:flex-row" : "w-full max-w-3xl"} mr-auto`}>
        <main className="min-w-0 flex-1 text-foreground">{children}</main>
        {showSidebar && <aside className="w-full shrink-0 text-foreground lg:w-72">{sidebarContextual}</aside>}
      </div>
    </div>
  );
}
