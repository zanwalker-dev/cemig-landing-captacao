"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-zinc-100"
    >
      <div className="container grid gap-6 py-8 md:grid-cols-2 md:gap-10 md:py-12">
        <div>
          <h1
            id="hero-title"
            className="text-2xl font-extrabold leading-tight md:text-4xl"
          >
            Seja um parceiro Energia Livre Cemig
          </h1>
          <p className="mt-3 text-base md:text-lg">
            Multiplique seus lucros no Mercado Livre de Energia.
          </p>
          <div className="mt-6">
            <div className="inline-flex rounded-full bg-primary px-4 py-2 text-primary-foreground">
              Teste bg-primary
            </div>
            <Button aria-label="Quero ser parceiro">Quero ser parceiro</Button>
          </div>
        </div>
        <div className="relative min-h-48 md:min-h-80">
          <img
            src="/banner/banner_1_mobile.png"
            srcSet="/banner/banner_1_mobile.png 480w, /banner/banner_1_desktop.png 960w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Pessoa usando tablet representando parceria com a Cemig"
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
            width="960"
            height="540"
          />
          {/* Pontos/slider e grafismos virão na etapa de seções */}
        </div>
      </div>
    </section>
  );
}
