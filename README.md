Meu blog pessoal para escrever sobre programação, projetos, livros, jogos e outras coisas que eu achar interessantes.

[guigocae.com.br](https://guigocae.com.br)

## Sobre o projeto

O Guigocae é um blog pessoal construído com Next.js e MDX.

A ideia foi manter a arquitetura simples: os posts são arquivos `.mdx` versionados junto com o próprio projeto, sem CMS, banco de dados ou API para gerenciamento de conteúdo.

Cada arquivo MDX exporta seus próprios metadados e é transformado em uma página estática pelo Next.js durante o build.

## Stack

- [Next.js](https://nextjs.org/) — App Router
- [React](https://react.dev/)
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com/)
- Base UI
- MDX
- next-themes
- Lucide
- Vercel

## Posts com MDX

Os posts ficam em:

```text
src/content/posts/
```

Cada arquivo representa um artigo:

```text
meu-primeiro-post.mdx
```

O nome do arquivo também é usado como slug:

```text
/blog/meu-primeiro-post
```

Um post possui metadados exportados diretamente pelo MDX:

```mdx
export const metadata = {
  title: "Bem-vindos ao meu site",
  description: "Meu primeiro texto no blog.",
  date: "2026-10-06",
  category: "Pessoal",
}

Conteúdo do artigo começa aqui.

## Um subtítulo

E continua normalmente usando Markdown.
```

Durante o build, o Next.js compila o MDX para componentes React.

O módulo resultante fornece tanto os exports do arquivo:

```ts
post.metadata
```

quanto o conteúdo compilado:

```ts
post.default
```

O conteúdo pode então ser renderizado normalmente:

```tsx
const Content = post.default

return <Content />
```

## SEO

O projeto também gera automaticamente:

- metadata por artigo
- canonical URLs
- Open Graph
- imagens Open Graph por post
- Twitter Cards
- `sitemap.xml`
- `robots.txt`
- feed RSS

O feed está disponível em:

```text
/rss.xml
```

Criado por [Guilherme Gomes](https://guigocae.com.br).