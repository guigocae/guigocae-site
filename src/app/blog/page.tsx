import type { Metadata } from "next";

import { PostItem } from "@/components/ui/post-item";
import { SiteContainer } from "@/components/layouts/site-container";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Textos sobre tudo o que eu acho interessante postar e outras coisas.",
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <SiteContainer className="py-16 sm:py-20 md:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Blog
          </p>

          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            Todos os textos
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Projetos, livros, programação, jogos e qualquer outra coisa que eu resolver escrever.
          </p>
        </header>

        <section>
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
        </section>
      </SiteContainer>
    </main>
  )
}