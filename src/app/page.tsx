import { SiteContainer } from "@/components/layouts/site-container";

export default function Home() {
  return (
    <main>
      <SiteContainer className="py-20 sm:py-28">
        <section>
          <p className="mb-6 text-sm text-muted-foreground">
            Desenvolvedor & filómato.
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl md:text-7xl">
            Hi, eu sou o Guilherme.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Escrevo sobre qualquer coisa interessante que vier na minha cabeça, e que eu esteja a fim de compartilhar.
          </p>
        </section>
      </SiteContainer>
    </main>
  );
}
