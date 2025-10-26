// src/components/layout/Header.tsx
// Header minimalista: apenas as marcas, sem navegação.
export function Header() {
  return (
    <header className="relative border-b border-zinc-200 shadow-lg z-100">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 ">
        <div className="flex h-12 items-center justify-between md:h-14">
          {/* Marca "Energia Livre Cemig" à esquerda (sempre visível) */}
          <img
            src="/logos/energia_livre_cemig.svg"
            alt="Energia Livre Cemig"
            width="160"
            height="16"
            className="h-4 w-auto md:h-[18px] "
            loading="eager"
          />
          {/* Logomarca CEMIG à direita (aparece no desktop) */}
          <img
            src="/logos/cemig_logo.svg"
            alt="CEMIG"
            width="72"
            height="24"
            className="hidden h-6 w-auto md:block"
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
