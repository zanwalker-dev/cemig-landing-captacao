// src/components/sections/TrustSignalsSection.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Play, Pause } from "lucide-react";

const AUTOPLAY_MS = 4500;

export function TrustSignalsSection() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  } satisfies EmblaOptionsType);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setProgressKey((k) => k + 1);
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

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section
      aria-labelledby="trust-title"
      className="bg-[#F3F6F5] w-full overflow-x-hidden js-reveal reveal [--reveal-delay:300ms]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16 container">
        {/* Cabeçalho ESTÁTICO */}
        <h2
          id="trust-title"
          className="text-center text-[28px] text-[#2F7A67] md:text-[40px]"
        >
          Sinais de confiança
        </h2>
        <p className="mx-auto mt-3 max-w-[920px] text-center text-[18px] leading-relaxed text-foreground/90 md:text-[22px]">
          Quem é parceiro da Energia Livre Cemig já tem todas as certezas.
          <br />
          <span className="font-extrabold text-foreground">
            Agora é a sua vez.
          </span>
        </p>

        {/* CARROSSEL (só este bloco se move) */}
        <div className="relative mt-10 md:mt-12">
          {/* viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* container */}
            <div className="flex">
              {/* === SLIDE 1 — Solar Power / Ronaldo === */}
              <article className="min-w-0 shrink-0 grow-0 basis-full">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
                  {/* logo */}
                  <div className="flex items-center justify-center w-full">
                    <img
                      src="/logos/solar_power.png"
                      alt="Solar Power Energy"
                      width="200"
                      height="0"
                      className="h-auto w-[180px] md:w-[360px]"
                      loading="lazy"
                    />
                  </div>

                  {/* quote */}
                  <div className="text-[16px] leading-7 text-foreground/90 md:text-[18px]">
                    <div
                      className="mb-3 text-[#2F7A67] text-3xl md:text-4xl"
                      aria-hidden="true"
                    >
                      <img
                        src="/icons/quote.svg"
                        alt="Solar Power Energy"
                        width="200"
                        height="0"
                        className="h-auto w-9 md:w-[38px]"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      A Cemig se tornou uma marca nacional de muita
                      credibilidade. A força da marca traz um ganho muito
                      grande, além de todo o aspecto de investimento, de
                      tecnologia, de relacionamento que a Cemig busca. Todo esse
                      aspecto fez sentido pra nós. A gente escolheu a Cemig como
                      parceira pela credibilidade e pela força.
                    </p>

                    <div className="mt-6">
                      <p className="text-[18px] font-extrabold text-foreground md:text-[20px]">
                        — Ronaldo Pedrosa
                      </p>
                      <p className="text-foreground/70">Solar Power</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* === SLIDE 2 — Sheila / Economia Inteligente === */}
              <article className="min-w-0 shrink-0 grow-0 basis-full">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
                  {/* logo (pode ajustar quando tiver a logo correta) */}

                  {/* quote */}
                  <div className="text-[16px] leading-7 text-foreground/90 md:text-[18px]">
                    <div
                      className="mb-3 text-[#2F7A67] text-3xl md:text-4xl"
                      aria-hidden="true"
                    >
                      <img
                        src="/icons/quote.svg"
                        alt="Solar Power Energy"
                        width="200"
                        height="0"
                        className="h-auto w-9 md:w-[38px]"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      Empresa de 72 anos líder de mercado, isso foi o que mais
                      me motivou. E o suporte da equipe me encantou, apesar de
                      ser uma empresa global, você tem muito acesso às pessoas,
                      acesso a dar ideias, a poder rever uma cláusula no
                      contrato. Essa confiança e esse suporte, eu acho que como
                      parceiro, são essenciais.
                    </p>

                    <div className="mt-6">
                      <p className="text-[18px] font-extrabold text-foreground md:text-[20px]">
                        — Sheila Gargioni
                      </p>
                      <p className="text-foreground/70">
                        Economia Inteligente Consultoria
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* controles inferiores (play/pause + dots com timer) */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setIsPlaying((p) => !p);
                setProgressKey((k) => k + 1);
              }}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Pausar rotação" : "Reproduzir rotação"}
              className="inline-grid h-9 w-9 place-items-center rounded-full border-3 border-[#0F6C58] bg-transparent text-foreground/80 shadow-sm"
            >
              {isPlaying ? (
                <Pause
                  size={18}
                  fill="#0F6C58"
                  stroke="#0F6C58"
                  strokeWidth={2.5}
                />
              ) : (
                <Play
                  size={18}
                  fill="#0F6C58"
                  stroke="#0F6C58"
                  strokeWidth={2.5}
                />
              )}
            </button>

            <nav aria-label="Trocar depoimento">
              <ul className="flex items-center gap-2">
                {[0, 1].map((i) => {
                  const isActive = selectedIndex === i;
                  return (
                    <li key={i} className="dot-wrap">
                      {isActive ? (
                        <button
                          type="button"
                          onClick={() => scrollTo(i)}
                          className="dot-pill"
                          aria-current="true"
                          aria-label={`Depoimento ${i + 1} (atual)`}
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
                          aria-label={`Ir para depoimento ${i + 1}`}
                          className="h-2 w-2 rounded-full bg-foreground/30 transition hover:bg-foreground/60"
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
