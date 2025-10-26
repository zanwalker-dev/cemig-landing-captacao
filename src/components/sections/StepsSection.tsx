// src/components/sections/StepsSection.tsx
import { Button } from "@/components/ui/button";

export function StepsSection() {
  return (
    <section aria-labelledby="steps-title" className="relative container">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-14">
        {/* Título principal */}
        <h2
          id="steps-title"
          className="mx-auto max-w-[980px]  text-center text-[26px] leading-tight text-foreground md:text-[40px]"
        >
          Se você é{" "}
          <span className="font-bold text-[#0F6C58]">
            consultor ou profissional autônomo
          </span>
          ,<br className="hidden md:block" />
          essa é a sua chance de aumentar o seu faturamento.
        </h2>

        {/* Grid dos 3 passos */}
        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-8">
          {/* PASSO 1 */}
          <article className="relative">
            {/* número estilizado (imagem) */}
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
              <span className="">
                sobre o Mercado Livre de Energia, de graça.
              </span>
            </h3>

            <p className="mt-3 text-[15px] leading-6 text-foreground/80">
              A Energia Livre Cemig oferece um curso gratuito para seus
              parceiros, feito por especialistas em Mercado Livre de Energia.
            </p>

            <div className="mt-6">
              <Button className="h-12 w-full rounded-full bg-[#66FF9B] px-6 text-base font-semibold uppercase tracking-wide text-[#0A0A0A] hover:opacity-95 md:w-auto md:min-w-[320px]">
                QUERO FAZER O CURSO
              </Button>
            </div>
          </article>

          {/* PASSO 2 */}
          <article className="relative">
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
              <span className="">a Energia Livre Cemig.</span>
            </h3>

            <p className="mt-3 text-[15px] leading-6 text-foreground/80">
              Você vai ter mais certezas, mais ganhos e nenhuma surpresa, tudo
              com a garantia de segurança no fornecimento e a confiança de quem
              é líder do setor.
            </p>

            <div className="mt-6">
              <Button className="h-12 w-full rounded-full bg-[#66FF9B] px-6 text-base font-semibold uppercase tracking-wide text-[#0A0A0A] hover:opacity-95 md:w-auto md:min-w-[320px]">
                QUERO VENDER MAIS
              </Button>
            </div>
          </article>

          {/* PASSO 3 */}
          <article className="relative">
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
              <span className="font-bold">vantagens</span> de ser Energia Livre
              Cemig.
            </h3>

            <p className="mt-3 text-[15px] leading-6 text-foreground/80">
              Aqui seu cliente tem a certeza de economia garantida de até 35%,
              preço justo, fornecimento confiável e a solidez da maior empresa
              do Mercado Livre de Energia no Brasil.
            </p>

            <div className="mt-6">
              <Button className="h-12 w-full rounded-full bg-[#66FF9B] px-6 text-base font-semibold uppercase tracking-wide text-[#0A0A0A] hover:opacity-95 md:w-auto md:min-w-[320px]">
                QUERO APROVEITAR
              </Button>
            </div>
          </article>
        </div>
      </div>

      {/* grafismos de fundo (opcional): se tiverem em /public/grafismos, só trocar os src */}
      {/* <img src="/grafismos/curva-top.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden md:block" /> */}
    </section>
  );
}
