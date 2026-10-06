import Link from "next/link";

import { MobileMenu } from "./mobile-menu";
import { SiteContainer } from "./site-container";

const navigation = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
]

export function Header() {
  return (
    <header className="border-b border-border/60">
      <SiteContainer className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight"
        >
          guigocae.
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </SiteContainer>
    </header>
  )
}