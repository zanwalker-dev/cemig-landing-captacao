// src/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src="/logos/cemig_logo_footer.svg"
            alt="CEMIG"
            width="112"
            height="32"
            className="h-8 w-auto md:h-9"
            loading="lazy"
          />
          <p className="text-xs opacity-80">
            CEMIG ©{new Date().getFullYear()} — Todos os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
