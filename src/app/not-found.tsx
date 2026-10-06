import { SiteContainer } from "@/components/layouts/site-container";

export default function NotFound() {
  return (
    <main>
      <SiteContainer className="flex min-h-[65vh] items-center py-20">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            404
          </p>

          <h1 className="font-serif text-5xl font-medium tracking-tight sm:text-6xl">
            Não encontrei isso.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A página que você tentou acessar não existe ou resolveu
            desaparecer da internet.
          </p>
        </div>
      </SiteContainer>
    </main>
  );
}