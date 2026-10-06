import type { Metadata } from "next";

import { SiteContainer } from "@/components/layouts/site-container";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Um pouco sobre quem escreve o Guigocae e por que este site existe.",
};

export default function SobrePage() {
  return (
    <main>
      <SiteContainer className="py-16 sm:py-20 md:py-24">
        <article className="max-w-3xl">
          <header className="mb-12">
            <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Sobre
            </p>

            <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
              Hi, eu sou o Guilherme.
            </h1>
          </header>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Trabalho como desenvolvedor e gosto de criar coisas, entender como elas funcionam, e ocasionalmente complicar minha vida tentando aprender alguma coisa nova ou pensando até ter uma crise existencial.
            </p>

            <p>
              Criei este site como um lugar para registrar ideias, projetos pessoais, coisas que aprendo programando, livros, jogos e qualquer outro assunto que eu achar interessante. A todo momento eu busco aprender sobre algo que eu tenho curiosidade, por isso eu deixei um adjetivo ali no slogan da página inicial: "filomático", uma palavra nova que aprendi enquanto desenvolvia este site, e que eu acredito que combina comigo.
            </p>

            <p>
              Também quero usar este espaço para escrever mais. Não necessariamente para ensinar alguma coisa ou pregar a minha opinião sobre determinado assunto para as pessoas — às vezes simplesmente para organizar uma ideia antes que eu esqueça dela.
            </p>

            <p>
              Então pense nisso menos como um blog profissional e mais como um experimento pessoal, um pequeno pedaço da internet que é meu.
            </p>
          </div>
        </article>
      </SiteContainer>
    </main>
  )
}