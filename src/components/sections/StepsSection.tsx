// src/components/sections/StepsSection.tsx
import { Button } from "@/components/ui/button";

export function StepsSection() {
  return (
    <section
      aria-labelledby="steps-title"
      className="relative overflow-x-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-14 container">
        <h2
          id="steps-title"
          className="mx-auto max-w-[980px] text-center text-[26px] leading-tight text-foreground md:text-[40px]"
        >
          Se você é{" "}
          <span className="font-bold text-[#0F6C58]">
            consultor ou profissional autônomo
          </span>
          ,<br className="hidden md:block" />
          essa é a sua chance de aumentar o seu faturamento.
        </h2>

        {/* Grid dos 3 passos */}
        <div className="mt-10 grid items-stretch gap-10 md:mt-12 md:grid-cols-3 md:gap-8">
          {/* PASSO 1 */}
          <article className="relative flex h-full flex-col">
            {/* bloco que cresce para empurrar o botão */}
            <div className="grow">
              <div className="mb-3 flex items-center gap-3">
                <img
                  src="/icons/num-1.svg"
                  alt="Passo 1"
                  width="44"
                  height="44"
                  className="h-11 w-11"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[20px] leading-snug text-[#0F6C58] md:text-[22px]">
                <span className="font-bold">Aprenda tudo</span>{" "}
                <span>sobre o Mercado Livre de Energia, de graça.</span>
              </h3>

              <p className="mt-3 text-[15px] leading-6 text-foreground/80">
                A Energia Livre Cemig oferece um curso gratuito para seus
                parceiros, feito por especialistas em Mercado Livre de Energia.
              </p>
            </div>

            <div className="mt-6 lg:mt-auto">
              <Button className="w-full md:w-[80%] px-6 text-sm uppercase tracking-wide">
                QUERO FAZER O CURSO
              </Button>
            </div>
          </article>

          {/* PASSO 2 */}
          <article className="relative flex h-full flex-col">
            <div className="grow">
              <div className="mb-3 flex items-center gap-3">
                <img
                  src="/icons/num-2.svg"
                  alt="Passo 2"
                  width="44"
                  height="44"
                  className="h-11 w-11"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[20px] leading-snug text-[#0F6C58] md:text-[22px]">
                <span className="font-bold">Indique</span>{" "}
                <span>a Energia Livre Cemig.</span>
              </h3>

              <p className="mt-3 text-[15px] leading-6 text-foreground/80">
                Você vai ter mais certezas, mais ganhos e nenhuma surpresa, tudo
                com a garantia de segurança no fornecimento e a confiança de
                quem é líder do setor.
              </p>
            </div>

            <div className="mt-6 lg:mt-auto">
              <Button className="w-full md:w-[80%] px-6 text-sm uppercase tracking-wide">
                QUERO VENDER MAIS
              </Button>
            </div>
          </article>

          {/* PASSO 3 */}
          <article className="relative flex h-full flex-col">
            <div className="grow">
              <div className="mb-3 flex items-center gap-3">
                <img
                  src="/icons/num-3.svg"
                  alt="Passo 3"
                  width="44"
                  height="44"
                  className="h-11 w-11"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[20px] leading-snug text-[#0F6C58] md:text-[22px]">
                Tenha todo o <span className="font-bold">apoio</span> e as{" "}
                <span className="font-bold">vantagens</span> de ser Energia
                Livre Cemig.
              </h3>

              <p className="mt-3 text-[15px] leading-6 text-foreground/80">
                Aqui seu cliente tem a certeza de economia garantida de até 35%,
                preço justo, fornecimento confiável e a solidez da maior empresa
                do Mercado Livre de Energia no Brasil.
              </p>
            </div>

            <div className="mt-3 lg:mt-auto">
              <Button className="mt-3  w-full md:w-[80%] px-6 text-sm uppercase tracking-wide">
                QUERO APROVEITAR
              </Button>
            </div>
          </article>
        </div>
      </div>

      <img
        src="/grafismo/grafismo-bg-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-46 -top-40 -z-50 hidden md:block"
      />
      <img
        src="/grafismo/grafismo-bg-1-mobile.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -top-40 -z-50 md:hidden"
      />
    </section>
  );
}
