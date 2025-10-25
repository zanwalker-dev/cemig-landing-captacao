// src/components/sections/HeroCarousel.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import { Button } from "@/components/ui/button";

type Slide = {
  id: string;
  titleTop: string;
  titleBold: string;
  titleRest: string;
  cta: string;
  imgMobile: string;
  imgDesktop: string;
  alt: string;
};

const slides: Slide[] = [
  {
    id: "1",
    titleTop: "SEJA UM PARCEIRO ENERGIA LIVRE CEMIG",
    titleBold: "Multiplique seus lucros",
    titleRest: " no Mercado Livre de Energia.",
    cta: "QUERO SER PARCEIRO",
    imgMobile: "/banner/banner_1.png",
    imgDesktop: "/banner/banner_1.png",
    alt: "Profissional sorrindo usando tablet em ambiente de trabalho",
  },
  {
    id: "2",
    titleTop: "SEJA UM PARCEIRO ENERGIA LIVRE CEMIG",
    titleBold: "Aumente sua renda",
    titleRest: " com indicações seguras.",
    cta: "QUERO INDICAR",
    imgMobile: "/banner/banner_2.png",
    imgDesktop: "/banner/banner_2.png",
    alt: "Profissional em escritório com notebook",
  },
  {
    id: "3",
    titleTop: "SEJA UM PARCEIRO ENERGIA LIVRE CEMIG",
    titleBold: "Conte com nosso apoio",
    titleRest: " do começo ao fim.",
    cta: "QUERO APROVEITAR",
    imgMobile: "/banner/banner_3.png",
    imgDesktop: "/banner/banner_3.png",
    alt: "Pessoa em atendimento recebendo orientação",
  },
];

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
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-8 md:py-10">
        <div className="relative">
          {/* Viewport */}
          <div
            className="overflow-hidden rounded-2xl border border-border bg-background/90 shadow-sm"
            ref={emblaRef}
          >
            {/* Container */}
            <div className="flex">
              {slides.map((s) => (
                // Cada slide ocupa 100% da largura (1 por vez)
                <article
                  key={s.id}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  {/* Card interno com grid texto/imagem */}
                  <div className="grid gap-6 p-0 md:grid-cols-[1.1fr_0.9fr] md:p-0">
                    <div className="flex flex-col justify-center">
                      <p className="text-[22px] font-extrabold leading-tight text-secondary md:text-[34px]">
                        {s.titleTop}
                      </p>
                      <h1 className="mt-1 text-[28px] font-black leading-tight md:text-[48px]">
                        <span className="text-secondary">{s.titleBold}</span>
                        <span className="text-foreground">{s.titleRest}</span>
                      </h1>

                      <div className="mt-6">
                        <Button
                          size="lg"
                          className="px-8 uppercase tracking-wide"
                        >
                          {s.cta}
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={s.imgMobile}
                        srcSet={`${s.imgMobile} 640w, ${s.imgDesktop} 1280w`}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        width={1280}
                        height={720}
                        alt={s.alt}
                        className="h-full w-full rounded-xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              ))}
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

          {/* Controles inferiores */}
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
                {slides.map((_, i) => (
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
