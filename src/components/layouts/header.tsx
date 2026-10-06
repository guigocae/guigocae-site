import Link from "next/link";

import { MobileMenu } from "../ui/mobile-menu";
import { SiteContainer } from "./site-container";
import { ThemeToggle } from "../ui/theme-toggle";

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
          guigocae
          <span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div />

          <ThemeToggle />
          
          <MobileMenu />
        </div>

      </SiteContainer>
    </header>
  )
}