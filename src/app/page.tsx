import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PostItem } from "@/components/ui/post-item";
import { SiteContainer } from "@/components/layouts/site-container";
import { Separator } from "@/components/ui/separator";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <main>
      <SiteContainer>
        <section className="py-20 sm:py-28 md:py-32">
          <p className="mb-6 text-sm font-medium text-muted-foreground">
            Desenvolvedor & filomático.
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
              <PostItem 
                key={post.slug}
                title={post.title}
                description={post.description}
                date={formatPostDate(post.date)}
                category={post.category}
                href={`/blog/${post.slug}`}
              />
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
