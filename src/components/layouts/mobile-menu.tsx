"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "../ui/sheet";

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

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-muted md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[85%] max-w-sm p-0">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="font-heading text-xl">guigocae.</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-6 py-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b py-4 text-lg transition-colors last:border-b-0 hover:text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}