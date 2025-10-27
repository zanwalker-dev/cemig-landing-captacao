// src/components/sections/HeroCarousel.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  dragFree: false,
};

const AUTOPLAY_MS = 4500;

export function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  } satisfies EmblaOptionsType);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // chave para reiniciar a animação do dot quando muda slide ou play/pause
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setProgressKey((k) => k + 1); // reseta o timer do dot
    };
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla || !isPlaying) return;
    const id = setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [embla, isPlaying]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <section
      aria-label="Destaques"
      className="container js-reveal reveal [--reveal-delay:0ms]"
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
              <article className="min-w-0 shrink-0 grow-0 basis-full w-80 h-[331px] md:w-full md:h-80 overflow-hidden">
                <div className="grid gap-3 lg:gap-6 p-0 md:p-0 relative w-full h-full">
                  <div className="flex flex-col justify-end md:justify-between md:w-[75%] px-4 md:px-10 py-4 md:py-10">
                    <div>
                      <p className="text-basis font-extrabold leading-tight text-[#0F6C58] lg:text-2xl xl:text-3xl">
                        MERCADO LIVRE DE ENERGIA
                      </p>
                      <h1 className="mt-1 lg:text-2xl xl:text-2xl">
                        <span className="text-foreground ">Escolha a</span>
                        <span className="text-foreground font-bold">
                          {" "}
                          a líder
                        </span>
                        <span className="text-foreground "> que</span>
                        <span className="text-foreground font-bold">
                          {" "}
                          mais entrega energia{" "}
                          <br className="hidden lg:block" /> no país.
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <a href="/questionario">
                        <Button
                          size="lg"
                          className="px-12 md:px-18 uppercase tracking-wide w-full md:w-fit"
                        >
                          ESCOLHER AGORA
                        </Button>
                      </a>
                    </div>
                  </div>
                  <img
                    src="/banner/banner_1_mobile.png"
                    srcSet="/banner/banner_1_mobile.png 20w, /banner/banner_1_mobile.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional sorrindo usando tablet em ambiente de trabalho"
                    className="rounded-xl object-cover absolute overflow-hidden w-46 right-0 md:hidden -z-10"
                    loading="lazy"
                  />

                  <img
                    src="/banner/banner_1_desktop.png"
                    srcSet="/banner/banner_1_desktop.png 20w, /banner/banner_1_desktop.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional sorrindo usando tablet em ambiente de trabalho"
                    className="hidden md:block rounded-xl object-cover absolute overflow-hidden -right-26 w-158 xl:right-0 bottom-0 z-20"
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
              <article className=" min-w-0 shrink-0 grow-0 basis-full w-80 h-[331px] md:w-full md:h-80 overflow-hidden">
                <div className="grid gap-3 lg:gap-6 p-0 md:p-0 relative w-full h-full">
                  <div className="flex flex-col justify-end md:justify-between md:w-[75%] px-4 md:px-10 py-4 md:py-10">
                    <div>
                      <p className="text-basis font-extrabold leading-tight text-[#0F6C58] lg:text-2xl xl:text-[28px]">
                        ATÉ 35% DE DESCONTO
                        <span className="text-[#0F6C58] font-normal">
                          {" "}
                          NA SUA <br className="hidden md:block" /> CONTA DE
                          ENERGIA
                        </span>
                      </p>
                      <h1 className="mt-1 text-sm lg:text-xl ">
                        <span className="text-foreground">
                          Mude para quem é
                        </span>
                        <span className="text-foreground font-bold">
                          {" "}
                          líder de mercado
                        </span>
                        <span className="text-foreground"> e comece a</span>
                        <span className="text-foreground font-bold">
                          {" "}
                          <br className="hidden md:block" />
                          economizar com segurança e confiança.
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <a href="/questionario">
                        <Button
                          size="lg"
                          className="px-12 md:px-18 uppercase tracking-wide w-full md:w-fit"
                        >
                          APROVEITAR CONDIÇÃO
                        </Button>
                      </a>
                    </div>
                  </div>

                  <img
                    src="/banner/banner_2_mobile.png"
                    srcSet="/banner/banner_2_mobile.png 20w, /banner/banner_2_mobile.png 200w"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="md:hidden rounded-xl object-cover absolute overflow-hidden right-2 md:w-75 xl:w-80 md:-right-1 xl:right-8 md:-bottom-6 -z-30"
                    loading="lazy"
                  />
                  <img
                    src="/banner/banner_2_desktop.png"
                    srcSet="/banner/banner_2_desktop.png 100w, /banner/banner_2_desktop.png 200w"
                    sizes="(max-width: 800px) 90vw, 100vw"
                    width={1080}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="hidden md:block rounded-xl object-cover absolute overflow-hidden -right-20 bottom-0 md:w-150 xl:w-150 z-10 md:-z-10"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/grafismo_banner_2_mobile.png"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden left-0 bottom-0 w-74 md:w-90 md:-right-6 md:-bottom-20 -z-10 md:hidden"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/grafismo_banner_2_desktop.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className=" hidden md:block rounded-xl object-cover absolute overflow-hidden md:w-154 md:-right-14 md:bottom-0 -z-10 md:-z-20"
                    loading="lazy"
                  />

                  <img
                    src="/grafismo/mancha_banner_2_mobile.svg"
                    sizes="(max-width: 200px) 30vw, 45vw"
                    width={600}
                    height={0}
                    alt="Profissional em escritório com notebook"
                    className="rounded-xl object-cover absolute overflow-hidden right-0 bottom-30 w-30 md:w-40 lg:w-35 md:left-110 xl:left-126 md:rotate-90 md:bottom-2 -z-20 md:-z-10"
                    loading="lazy"
                  />
                  <div className="inset-0 bg-[#F4F5F4] absolute -z-40"></div>
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

          {/* === Controles inferiores (play/pause + dots com timer) === */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setIsPlaying((p) => !p);
                setProgressKey((k) => k + 1); // reinicia a animação do dot
              }}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Pausar rotação" : "Reproduzir rotação"}
              className="inline-grid w-9 h-9 place-items-center rounded-full border-3 border-[#0F6C58] bg-background text-foreground/80 shadow-sm"
            >
              {isPlaying ? (
                <Pause
                  fill="#0F6C58"
                  stroke="#0F6C58"
                  size={18}
                  strokeWidth={2.5}
                />
              ) : (
                <Play
                  fill="#0F6C58"
                  stroke="#0F6C58"
                  size={18}
                  strokeWidth={2.5}
                />
              )}
            </button>

            <nav aria-label="Trocar slide">
              <ul className="flex items-center gap-2">
                {" "}
                {/* gap menor, slots fixos */}
                {[0, 1].map((i) => {
                  const isActive = selectedIndex === i;
                  return (
                    <li key={i} className="dot-wrap">
                      {isActive ? (
                        <button
                          type="button"
                          onClick={() => scrollTo(i)}
                          className="dot-pill p-0"
                          aria-current="true"
                          aria-label={`Slide ${i + 1} (atual)`}
                          key={`${progressKey}-${isPlaying}`}
                        >
                          <span
                            className="dot-fill"
                            style={{
                              animation: isPlaying
                                ? `dot-fill ${AUTOPLAY_MS}ms linear forwards`
                                : "none",
                            }}
                          />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => scrollTo(i)}
                          aria-label={`Ir para o slide ${i + 1}`}
                          className="h-2 w-2 rounded-full bg-foreground/30 hover:bg-foreground/60 transition p-0"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
