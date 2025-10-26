// src/components/sections/HeroCarousel.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Button } from "@/components/ui/button";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  dragFree: false,
};

export function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel(OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Atualiza dots quando slide muda
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  // Play/Pause simples (autoplay)
  useEffect(() => {
    if (!embla || !isPlaying) return;
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [embla, isPlaying]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <section
      aria-label="Destaques"
      className="border-b border-border bg-background container"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col justify-center items-center py-6 px-8">
        <div className="relative">
          {/* Viewport */}
          <div
            className="overflow-hidden rounded-2xl border border-border bg-background/90 shadow-sm w-80 h-[331px] md:w-full md:h-80"
            ref={emblaRef}
          >
            {/* Container */}
            <div className="flex w-full">
              {/* === SLIDE 1 === */}
              <article className="min-w-0 shrink-0 grow-0 basis-full w-80 h-[331px] md:w-full md:h-80">
                <div className="grid gap-3 lg:gap-6 p-0 md:p-0 relative w-full h-full">
                  <div className="flex flex-col justify-end md:justify-between md:w-[75%] px-4 md:px-6 py-4 md:py-10">
                    <div>
                      <p className="text-basis font-extrabold leading-tight text-[#0F6C58] lg:text-2xl xl:text-3xl">
                        SEJA UM PARCEIRO ENERGIA LIVRE CEMIG
                      </p>
                      <h1 className="mt-1 lg:text-2xl xl:text-3xl">
                        <span className="text-secondary font-bold">
                          Multiplique seus lucros
                        </span>
                        <span className="text-foreground">
                          {" "}
                          no Mercado Livre
                          <br className="hidden md:block" /> de Energia.
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <Button
                        size="lg"
                        className="px-8 uppercase tracking-wide w-full md:w-fit"
                      >
                        QUERO SER PARCEIRO
                      </Button>
                    </div>
                  </div>

                  <img
                    src="/banner/banner_1.png"
                    srcSet="/banner/banner_1.png 20w, /banner/banner_1.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional sorrindo usando tablet em ambiente de trabalho"
                    className="rounded-xl object-cover absolute overflow-hidden w-40 right-2 md:w-80  lg:w-90 md:right-8 md:-bottom-20 -z-10"
                    loading="lazy"
                  />
                  {/* GRAFISMO MOBILE */}
                  <img
                    src="/grafismo/grafismo_banner_1_mobile.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden right-0 bottom-0 w-70 md:w-90 md:-right-6 md:-bottom-20 -z-20 md:hidden"
                    loading="lazy"
                  />
                  {/* GRAFISMO DESKTOP */}
                  <img
                    src="/grafismo/grafismo_banner_1_desktop.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className=" hidden md:block rounded-xl object-cover absolute overflow-hidden md:w-210 md:right-0 md:bottom-0 -z-10 md:-z-20"
                    loading="lazy"
                  />
                </div>
              </article>

              {/* === SLIDE 2 === */}
              <article className=" min-w-0 shrink-0 grow-0 basis-full w-80 h-[331px] md:w-full md:h-80">
                <div className="grid gap-3 lg:gap-6 p-0 md:p-0 relative w-full h-full">
                  <div className="flex flex-col justify-end md:justify-between md:w-[75%] px-4 md:px-6 py-4 md:py-10">
                    <div>
                      <p className="text-basis font-extrabold leading-tight text-[#0F6C58] lg:text-2xl xl:text-3xl">
                        CURSO GRATUITO COM EXPERTS DO MERCADO
                        <br className="hidden md:block" /> LIVRE DE ENERGIA.
                      </p>
                      <h1 className="mt-1 text-sm lg:text-2xl xl:text-3xl block md:hidden">
                        <span className="text-foreground">
                          Domine os fundamentos para
                        </span>
                        <span className="text-foreground font-bold">
                          {" "}
                          se destacar no mercado livre de energia.
                        </span>
                      </h1>
                      <h1 className="mt-1 text-xs lg:text-xl xl:text-2xl md:block hidden">
                        <span className="text-foreground">
                          Domine os fundamentos para{" "}
                        </span>
                        <span className="text-foreground font-bold">
                          se destacar no mercado livre de energia{" "}
                          <br className="hidden lg:block xl:hidden" />
                        </span>
                        <span className="text-foreground">
                          {" "}
                          e esteja pronto para atuar com confiança e gerar
                          resultados reais.
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <Button
                        size="lg"
                        className="px-8 uppercase tracking-wide  w-full md:w-fit bg-[#1EFF8C] text-black"
                      >
                        QUERO APRENDER
                      </Button>
                    </div>
                  </div>

                  <img
                    src="/banner/banner_2.png"
                    srcSet="/banner/banner_2.png 20w, /banner/banner_2.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden w-40 md:w-75 xl:w-80 md:-right-1 xl:right-8 md:-bottom-6 -z-10"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/grafismo_banner_2_mobile.png"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden left-0 bottom-0 w-70 md:w-90 md:-right-6 md:-bottom-20 -z-10 md:hidden"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/grafismo_banner_2_desktop.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className=" hidden md:block rounded-xl object-cover absolute overflow-hidden md:w-154 md:right-0 md:bottom-0 -z-10 md:-z-20"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/mancha_banner_2_mobile.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden left-28 bottom-34 w-30 md:w-40 lg:w-35 md:left-136 xl:left-172 md:rotate-180 md:bottom-4  -z-20 "
                    loading="lazy"
                  />
                  <div className="inset-0 bg-[#F4F5F4] absolute -z-40"></div>
                </div>
              </article>

              {/* === SLIDE 3 === */}
              <article className="min-w-0 shrink-0 grow-0 basis-full w-80 h-[331px] md:w-full md:h-80">
                <div className="grid gap-6 p-0 md:p-0 relative w-full h-full">
                  <div className="flex flex-col justify-end md:justify-between md:w-[75%] px-4 md:px-6 py-4 md:py-10">
                    <div>
                      <p className="text-basis font-extrabold leading-tight text-[#0F6C58] lg:text-2xl xl:text-3xl">
                        SINAIS DE CONFIANÇA
                      </p>
                      <h1 className="mt-1 lg:text-2xl xl:text-3xl">
                        <span className="text-foreground">
                          Confira depoimentos de{" "}
                        </span>
                        <span className="text-foreground font-bold">
                          quem já está faturando{" "}
                          <br className="hidden lg:block xl:hidden" />
                        </span>
                        <span className="text-foreground">
                          {" "}
                          com o Mercado Livre de Energia. 
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <Button
                        size="lg"
                        className="px-8 uppercase tracking-wide w-full md:w-fit"
                      >
                        CONFERIR DEPOIMENTOS
                      </Button>
                    </div>
                  </div>

                  <img
                    src="/banner/banner_3.png"
                    srcSet="/banner/banner_3.png 20w, /banner/banner_3.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Pessoa em atendimento recebendo orientação"
                    className=" object-cover absolute overflow-hidden w-40 md:w-75 xl:w-80 right-12 md:-right-1 xl:right-8 md:-bottom-6 -z-10"
                    loading="lazy"
                  />
                  {/* MOBILE GRAFISMOS */}
                  <img
                    src="/grafismo/grafismo_banner_3_mobile.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden bottom-0 w-72 right-0 md:hidden -z-10"
                    loading="lazy"
                  />
                  <img
                    src="/grafismo/elipse_banner_3_mobile.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden left-1/2 transform -translate-x-1/2 top-0 w-68 -z-30 md:hidden"
                    loading="lazy"
                  />

                  {/* DESKTOP GRAFISMOS */}

                  <img
                    src="/grafismo/grafismo_banner_3_desktop.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className=" hidden md:block rounded-xl object-cover absolute overflow-hidden w-147  md:right-16 xl:right-26 md:bottom-0 -z-10 md:-z-20"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/elipse_banner_3_desktop.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className=" hidden md:block rounded-xl object-cover absolute overflow-hidden md:w-86 xl:w-95  md:right-30 xl:right-40 md:bottom-0 -z-10 md:-z-20"
                    loading="lazy"
                  />
                </div>
              </article>
            </div>
          </div>

          {/* Setas laterais coladas ao card (desktop) */}
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 md:inline-grid h-10 w-10 place-items-center rounded-full bg-background shadow-md ring-1 ring-border transition hover:opacity-90"
          >
            <img src="/icons/arrow-left.svg" alt="" width="20" height="20" />
          </button>
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:inline-grid h-10 w-10 place-items-center rounded-full bg-background shadow-md ring-1 ring-border transition hover:opacity-90"
          >
            <img src="/icons/arrow-right.svg" alt="" width="20" height="20" />
          </button>

          {/* Controles inferiores (play + dots) */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Pausar rotação" : "Reproduzir rotação"}
              className="inline-grid w-fit h-fit place-items-center rounded-full border border-border bg-background text-foreground/80 shadow-sm"
            >
              <img src="/icons/play.svg" alt="" width="24" height="24" />
            </button>

            <nav aria-label="Trocar slide">
              <ul className="flex items-center gap-3">
                {[0, 1, 2].map((i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => scrollTo(i)}
                      aria-current={selectedIndex === i ? "true" : "false"}
                      aria-label={`Ir para o slide ${i + 1}`}
                      className={`block h-2 w-2 rounded-full transition ${
                        selectedIndex === i
                          ? "bg-foreground/80"
                          : "bg-foreground/30 hover:bg-foreground/60"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
