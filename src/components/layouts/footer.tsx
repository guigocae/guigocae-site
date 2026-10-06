import Link from "next/link";

import { SiteContainer } from "./site-container";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto">
      <SiteContainer>
        <Separator />

        <div className="flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Guilherme Gomes Caetano.</p>

          <div className="flex items-center gap-5">
            <Link 
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>

            <Link
              href="/sobre"
              className="transition-colors hover:text-foreground"
            >
              Sobre
            </Link>
          </div>
        </div>
      </SiteContainer>
    </footer>
  )
}