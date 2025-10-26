import React from "react";

export function AchievementsSection() {
  return (
    <section
      aria-labelledby="achievements-title js-reveal reveal [--reveal-delay:300ms]"
      className="relative overflow-hidden w-full"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16 container">
        {/* Título + subtítulo */}
        <h2
          id="achievements-title"
          className="text-center text-[32px] font-semibold tracking-tight text-[#2F7A67] md:text-[40px]"
        >
          Conquistas
        </h2>
        <p className="mx-auto mt-3 max-w-[980px] text-center text-[18px] leading-relaxed text-foreground/90 md:text-[22px]">
          Quando é o seu nome que está em jogo, você precisa contar com um{" "}
          <span className="font-extrabold">parceiro sólido</span> como a Energia
          Livre Cemig.
        </p>

        {/* Grid dos 4 itens */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-4 md:gap-8">
          {/* 1 */}
          <article className="text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#66FF9B] md:h-20 md:w-20">
              <img
                src="/icons/ach-energia.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 md:h-8 md:w-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] leading-snug text-foreground md:text-[22px]">
              <span className="font-extrabold">Líder em fornecimento</span> do
              Mercado Livre de Energia no Brasil.
            </h3>
          </article>

          {/* 2 */}
          <article className="text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#66FF9B] md:h-20 md:w-20">
              <img
                src="/icons/ach-parceria.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 md:h-8 md:w-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] leading-snug text-foreground md:text-[22px]">
              A <span className="font-extrabold">maior em comercialização</span>{" "}
              do Mercado Livre de Energia no Brasil.
            </h3>
          </article>

          {/* 3 */}
          <article className="text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#66FF9B] md:h-20 md:w-20">
              <img
                src="/icons/ach-estrela.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 md:h-8 md:w-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] leading-snug text-foreground md:text-[22px]">
              Somos a empresa com{" "}
              <span className="font-extrabold">maior número de clientes</span>{" "}
              no Brasil.
            </h3>
          </article>

          {/* 4 */}
          <article className="text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#66FF9B] md:h-20 md:w-20">
              <img
                src="/icons/rgc_cemig.png"
                alt="Selo RGC Cemig"
                className="h-14 w-14 md:h-12 md:w-12"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] leading-snug text-foreground md:text-[22px]">
              Garantimos{" "}
              <span className="font-extrabold">certificação sustentável</span>{" "}
              para energia renovável.
            </h3>
          </article>
        </div>
      </div>

      {/* Grafismos de fundo (decorativos) */}
      <img
        src="/grafismo/semicircle-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-80 top-20 md:-left-20 md:-top-10 -z-10 h-150 max-w-none md:block"
        loading="lazy"
      />
    </section>
  );
}
