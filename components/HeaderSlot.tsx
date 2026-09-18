import Link from "next/link";
import type { HeaderSlotProps } from "@venore/theme-sdk";
import { UserMenu } from "./UserMenu";
import { MobileNavToggleButton } from "./MobileNavToggleButton";
import { PlatformBrand } from "./PlatformBrand";

// Cabeçalho de VIDRO — translúcido + backdrop-blur sobre a aurora, fio de violeta na base. Sem
// mecânica de encolher/inverter ao rolar (este tema não usa mais HeaderScrollSentinel): a
// dramaticidade vem da aurora e do vidro, não de animação de scroll. `stickyEnabled` ainda é
// respeitado; `scrollShrinkEnabled` é ignorado (extensão aditiva do contrato, o tema pode
// ignorar).
export function HeaderSlot({
  brand,
  userbarEnabled,
  stickyEnabled,
  headerNavItems,
  user,
  canAccessAdmin,
  onSignOut,
  notificationAlert,
  userNavItems,
}: HeaderSlotProps) {
  return (
    <header
      className={
        "z-40 flex h-16 items-center justify-between gap-4 border-b border-header-border-subtle bg-card/70 px-4 text-foreground shadow-header backdrop-blur-xl sm:px-6 lg:h-20 " +
        (stickyEnabled ? "sticky top-0 " : "")
      }
    >
      <div className="flex min-w-0 items-center gap-2">
        <MobileNavToggleButton />
        <Link
          href="/"
          aria-label={brand.name}
          className="inline-flex items-center py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <PlatformBrand {...brand} isScrolled={false} />
        </Link>
      </div>

      {headerNavItems.length > 0 && (
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {headerNavItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-caps text-muted-foreground ui-motion-base outline-none hover:bg-accent/14 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {userbarEnabled ? (
        user ? (
          <div className="flex items-center gap-2">
            {notificationAlert && (
              <Link
                href={notificationAlert.href}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground ui-motion-base outline-none hover:bg-accent/14 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:px-2.5"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="hidden sm:inline">{notificationAlert.label}</span>
              </Link>
            )}
            <UserMenu user={user} canAccessAdmin={canAccessAdmin} onSignOut={onSignOut} userNavItems={userNavItems} />
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-caps text-muted-foreground ui-motion-base outline-none hover:bg-accent/14 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            Entrar
          </Link>
        )
      ) : null}
    </header>
  );
}
