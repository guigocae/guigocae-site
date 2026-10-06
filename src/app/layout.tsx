import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

const newsreader = Newsreader({
  variable:'--font-heading',
  subsets:['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Guigocae",
    template: "%s | Guigocae",
  },
  description: "Projetos, livros, ideias, programação e outras coisas que aparecem na minha cabeça.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", geistSans.variable, newsreader.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Header />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
