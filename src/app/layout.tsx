/* eslint-disable @next/next/no-img-element */
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Energia Livre Cemig — Seja Parceiro",
  description:
    "Multiplique seus lucros no Mercado Livre de Energia. Conheça as vantagens de ser parceiro da Energia Livre Cemig.",
  openGraph: {
    title: "Energia Livre Cemig — Seja Parceiro",
    description:
      "Multiplique seus lucros no Mercado Livre de Energia com a Cemig.",
    url: "https://exemplo-seu-dominio", // ajustar quando tiver a URL final
    siteName: "Cemig",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://exemplo-seu-dominio"), // ajustar quando publicar
};

export const viewport: Viewport = {
  themeColor: "#00C853",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Caso use fonte hospedada localmente depois, adicionaremos aqui os preload/preload */}
      </head>
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-cemig.green"
        >
          Pular para o conteúdo
        </a>
        <div className="flex min-h-dvh flex-col">
          {/* Header e Footer serão substituídos por componentes definitivos na próxima etapa */}
          <header className="border-b border-zinc-200">
            <div className="container flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/cemig_logo.svg"
                  alt="CEMIG"
                  width="84"
                  height="24"
                  loading="eager"
                />
                <span className="sr-only">Energia Livre Cemig</span>
              </div>
              <nav aria-label="principal" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="hover:underline" href="#como-funciona">
                      Como funciona
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#sinais">
                      Sinais de confiança
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#conquistas">
                      Conquistas
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#contato">
                      Fale conosco
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main id="conteudo" className="flex-1">
            {children}
          </main>

          <footer className="mt-10 bg-zinc-950 text-zinc-100">
            <div className="container flex flex-col items-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left">
              <img
                src="/logos/cemig_logo_footer.svg"
                alt="CEMIG"
                width="96"
                height="28"
                loading="lazy"
              />
              <p className="text-xs opacity-80">
                CEMIG ©{new Date().getFullYear()} — Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
