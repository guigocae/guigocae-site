import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PostItem } from "@/components/ui/post-item";
import { SiteContainer } from "@/components/layouts/site-container";
import { Separator } from "@/components/ui/separator";

const posts = [
  {
    title: "Por que resolvi criar meu próprio blog",
    description: "Um espaço para registrar ideias, aprender a escrever melhor e guardar coisas que eu normalmente esqueceria depois de uma semana.",
    date: "05 out 2026",
    category: "Pessoal",
    href: "/blog/por-que-criei-meu-blog",
  },
  {
    title: "O que eu gostei tanto em Mistborn",
    description:
      "Algumas coisas que me fizeram gostar tanto da história de Vin, Kelsier e do mundo criado por Brandon Sanderson.",
    date: "28 set 2026",
    category: "Livros",
    href: "/blog/o-que-eu-gostei-em-mistborn",
  },
  {
    title: "Por que ainda gosto de criar coisas pequenas",
    description:
      "Nem todo projeto precisa virar um produto. Às vezes programar algo só porque parece divertido já é motivo suficiente.",
    date: "21 set 2026",
    category: "Programação",
    href: "/blog/projetos-pequenos",
  },
]

export default function Home() {
  return (
    <main>
      <SiteContainer>
        <section className="py-20 sm:py-28 md:py-32">
          <p className="mb-6 text-sm font-medium text-muted-foreground">
            Desenvolvedor & filómato.
          </p>

          <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl md:text-7xl">
            Hi, eu sou o Guilherme.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Escrevo sobre qualquer coisa interessante que vier na minha cabeça, e que eu esteja a fim de compartilhar.
          </p>
        </section>

        <Separator />

        <section className="py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Blog
              </p>

              <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                Últimos textos
              </h2>
            </div>

            <Link
              href="/blog"
              className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              Ver todos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            {posts.map((post) => (
              <PostItem key={post.href} {...post} />
            ))}
          </div>

          <Link
            href="/blog"
            className="group mt-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          >
            Ver todos os textos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </SiteContainer>
    </main>
  );
}
