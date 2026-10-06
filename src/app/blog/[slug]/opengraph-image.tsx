import { ImageResponse } from "next/og";
import { getPost } from "@/lib/posts";

export const alt = "Artigo do Guigocae";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
            color: "#fafafa",
            fontSize: 72,
          }}
        >
          guigocae.
        </div>
      ),
      size,
    );
  }

  const { metadata } = post;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          guigocae
          <span style={{ color: "#14b8a6" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 24,
              color: "#14b8a6",
              fontSize: 22,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {metadata.category}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            {metadata.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#a3a3a3",
          }}
        >
          guigocae.com.br
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}