// src/app/layout.tsx
// Troque o conteúdo inteiro pelo abaixo (remove o navbar e usa Header/Footer novos)
import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Energia Livre Cemig — Seja Parceiro",
  description:
    "Multiplique seus lucros no Mercado Livre de Energia com a Energia Livre Cemig.",
  openGraph: {
    title: "Energia Livre Cemig — Seja Parceiro",
    description:
      "Multiplique seus lucros no Mercado Livre de Energia com a Energia Livre Cemig.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00C853",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-emerald-500"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main id="conteudo" className="flex flex-col items-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
