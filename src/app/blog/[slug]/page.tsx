import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteContainer } from "@/components/layouts/site-container";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,

    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.description,
      url: `/blog/${slug}`,
      publishedTime: post.metadata.date,
    },

    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
    },
  }
}

export default async function PostPage({
  params,
}: PostPageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { Content, metadata } = post;

  return (
    <main>
      <SiteContainer className="py-16 sm:py-20 md:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <time dateTime={metadata.date}>
                {formatPostDate(metadata.date)}
              </time>

              <span aria-hidden="true">·</span>

              <span>{metadata.category}</span>
            </div>

            <h1 className="font-heading text-4xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl">
              {metadata.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {metadata.description}
            </p>
          </header>

          <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-8 prose-a:text-primary prose-a:decoration-primary/50 prose-a:underline prose-a:underline-offset-4 hover:prose-a:decoration-primary prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
            <Content />
          </div>
        </article>

        <Link
          href="/blog"
          className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex pt-16"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Voltar para textos
        </Link>
      </SiteContainer>
    </main>
  )
}
