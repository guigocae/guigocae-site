import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
      `;
    })
    .join("");

  const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss
  version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>pt-BR</language>

    <atom:link 
      href="${siteConfig.url}/rss.xml"
      rel="self"
      type="application/rss+xml"
    />

    ${items}
  </channel>
</rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}