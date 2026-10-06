import { readdir } from "fs/promises";
import path from "path";

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  category: string;
}

export type Post = PostMetadata & {
  slug: string;
}

const postsDirectory = path.join(
  process.cwd(),
  "src/content/posts"
);

export async function getAllPosts(): Promise<Post[]> {
  const files = await readdir(postsDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");

        const { metadata } = await import(`@/content/posts/${slug}.mdx`);

        return {
          slug,
          ...(metadata as PostMetadata),
        }
      })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPost(slug: string) {
  try {
    const post = await import(`@/content/posts/${slug}.mdx`);

    return {
      Content: post.default,
      metadata: post.metadata as PostMetadata,
    }
  } catch {
    return null;
  }
}

export function formatPostDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .replace(".", "")
    .toUpperCase();

  return `${String(day).padStart(2, "0")} ${monthName} ${year}`;
}

