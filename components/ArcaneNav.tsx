import { Globe2, ShieldCheck } from "lucide-react";
import type { NavGroup, SidebarLeftSlotProps } from "@venore/theme-sdk";
import { cn } from "@venore/theme-sdk/ui";
import { SidebarNavLink } from "./SidebarNavLink";

// Cartão de VIDRO flutuante — a navegação do tema no desktop. Não encosta na borda nem tem altura
// inteira: `self-start` + `sticky top-24` + margem própria, então ele paira sobre a aurora. Vidro
// = bg translúcido + backdrop-blur + borda e brilho de violeta. `collapsed`/`onToggleCollapsed`
// não têm o que significar aqui (não é uma coluna que colapsa) e não são usados. No mobile a
// navegação é o drawer (MobileNav).
export function ArcaneNav({ enabled, navMode, navItems, navGroups, canToggleAdminNav, onToggleNavMode }: SidebarLeftSlotProps) {
  if (!enabled) return null;
  const isAdmin = navMode === "admin";

  return (
    <aside
      data-nav-mode={navMode}
      className="sticky top-24 my-8 hidden h-fit w-72 shrink-0 flex-col gap-3 self-start rounded-panel border border-primary/25 bg-card/60 p-3 text-foreground shadow-float backdrop-blur-xl lg:flex"
    >
      {canToggleAdminNav && (
        <form action={onToggleNavMode} className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-muted/60 p-1 text-[11px] font-semibold uppercase tracking-caps">
          <button
            type="submit"
            disabled={!isAdmin}
            aria-current={!isAdmin ? true : undefined}
            className={cn("flex h-8 items-center justify-center gap-1.5 rounded-md ui-motion-base", !isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground hover:text-foreground")}
          >
            <Globe2 className="size-3.5 shrink-0" aria-hidden="true" />
            Site
          </button>
          <button
            type="submit"
            disabled={isAdmin}
            aria-current={isAdmin ? true : undefined}
            className={cn("flex h-8 items-center justify-center gap-1.5 rounded-md ui-motion-base", isAdmin ? "bg-card text-foreground shadow-float" : "text-muted-foreground hover:text-foreground")}
          >
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            Admin
          </button>
        </form>
      )}

      <nav data-nav-mode={navMode} className="flex flex-col gap-1">
        {isAdmin
          ? navGroups.map((group) => <ArcaneGroup key={group.key} group={group} />)
          : navItems.map((item) => <SidebarNavLink key={item.key} item={item} collapsed={false} isAdmin={false} />)}
        {isAdmin && navGroups.length === 0 && <p className="px-3 text-sm text-muted-foreground/56">—</p>}
        {!isAdmin && navItems.length === 0 && <p className="px-3 text-sm text-muted-foreground/56">—</p>}
      </nav>
    </aside>
  );
}

function ArcaneGroup({ group }: { group: NavGroup }) {
  return (
    <div className="space-y-1 pb-3">
      <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-caps text-muted-foreground/70">{group.label}</p>
      {group.items.map((item) => (
        <SidebarNavLink key={item.key} item={item} collapsed={false} isAdmin />
      ))}
    </div>
  );
}
