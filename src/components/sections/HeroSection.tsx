// src/components/sections/HeroSection.tsx
// Hero estático, mobile-first, fiel ao Figma: título + copy + CTA + imagem (direita no desktop)
// Sem JS / sem libs — compatível com next export
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-8 md:py-10">
        {/* “cartão” do banner (bordas arredondadas + leve sombra) */}
        <div className="grid gap-6 rounded-2xl border border-border bg-background/90 p-4 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-6">
          {/* Texto (esquerda no desktop) */}
          <div className="flex flex-col justify-center">
            <h1
              id="hero-title"
              className="text-2xl font-extrabold leading-tight tracking-tight md:text-[40px] md:leading-[1.15]"
            >
              Seja um parceiro Energia Livre Cemig
            </h1>

            <p className="mt-3 text-base text-foreground/80 md:text-lg">
              Multiplique seus lucros no Mercado Livre de Energia.
            </p>

            <div className="mt-6">
              <Button
                size="lg"
                aria-label="Quero ser parceiro"
                className="px-6"
              >
                Quero ser parceiro
              </Button>
            </div>
          </div>

          {/* Imagem (direita no desktop) */}
          <div className="relative">
            <img
              src="/banner/banner_1_mobile.png"
              srcSet="/banner/banner_1_mobile.png 640w, /banner/banner_1_desktop.png 1280w"
              sizes="(max-width: 768px) 100vw, 45vw"
              width="1280"
              height="720"
              alt="Pessoa usando tablet representando parceria com a Cemig"
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
            />

            {/* Dots e setas — decorativos (não-interativos) */}
            <div
              className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 select-none items-center gap-2 md:flex"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
              <span className="h-2 w-2 rounded-full bg-foreground/80" />
              <span className="h-2 w-2 rounded-full bg-foreground/20" />
            </div>

            <img
              src="/icons/arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-2 top-1/2 hidden -translate-y-1/2 md:block"
              width="28"
              height="28"
              loading="lazy"
            />
            <img
              src="/icons/arrow-right.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 md:block"
              width="28"
              height="28"
              loading="lazy"
            />
          </div>
        </div>

        {/* Ícone “play” sob o cartão (desktop), como no Figma */}
        <div className="mt-3 hidden justify-center md:flex" aria-hidden="true">
          <img
            src="/icons/play.svg"
            alt=""
            width="28"
            height="28"
            className="opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
