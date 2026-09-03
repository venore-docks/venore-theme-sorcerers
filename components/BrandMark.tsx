// Marca do tema Sorcerers (vocação de Tibia) — símbolo em currentColor, nome de brand.name.
export function BrandMark({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 text-foreground">
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true" className="size-7 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 3l13 13-13 13L3 16z" opacity="0.55"/>
  <path d="M16 9c2 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.6.7-2.8 1.6-4C14 15 16 12 16 9z"/>
      </svg>
      <span className="min-w-0 truncate font-[600] uppercase tracking-[0.14em]">{name}</span>
    </span>
  );
}
