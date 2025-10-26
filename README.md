# ⚡️ Energia Livre Cemig — Landing Page e Questionário

Landing page institucional e página de questionário da **Energia Livre Cemig**, desenvolvidas em **Next.js + Tailwind + shadcn/ui**, com exportação **estática (HTML/CSS/JS puro)** para deploy dentro de um ambiente **WordPress**.

---

## 🧭 Estrutura do projeto

/
├─ app/
│ ├─ page.tsx → Landing page principal
│ ├─ questionario/page.tsx → Página de questionário (formulário)
│ ├─ questionario/sucesso/ → Tela de confirmação “enviado com sucesso”
│
├─ public/
│ ├─ banner/ → Banners do carrossel hero
│ ├─ grafismo/ → SVGs decorativos do layout
│ ├─ icons/ → Ícones do design
│
├─ components/
│ ├─ sections/ → Seções modulares da landing page
│ ├─ ui/ → Componentes do shadcn/ui
│
├─ styles/
│ └─ globals.css → Tailwind + animações + reset
│
├─ tailwind.config.ts
├─ next.config.mjs → Configuração de build/export estático
└─ README.md → Este guia

yaml
Copiar código

---

## 🚀 Tecnologias e padrões

| Tecnologia         | Função                                                        |
| ------------------ | ------------------------------------------------------------- |
| **Next.js 14**     | Framework React com suporte a rotas estáticas (`app router`). |
| **TailwindCSS**    | Estilização e responsividade mobile-first.                    |
| **shadcn/ui**      | Componentes UI acessíveis e estilizados.                      |
| **pnpm**           | Gerenciador de pacotes rápido e isolado.                      |
| **Embla Carousel** | Carrossel leve para o hero e “Sinais de Confiança”.           |

---

## 🧩 Princípio do build estático

O WordPress não executa Node.js — por isso o projeto é exportado como **HTML estático + assets**.

O `next.config.mjs` contém:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ⬅️ gera site estático
  images: { unoptimized: true }, // ⬅️ compatível com WP
  trailingSlash: true,       // ⬅️ cada rota vira pasta com index.html
};

export default nextConfig;
🛠️ Como gerar os arquivos estáticos
1. Instalar dependências
bash
Copiar código
pnpm install
2. Rodar localmente para conferir
bash
Copiar código
pnpm dev
Acesse: http://localhost:3000

3. Gerar o build estático
bash
Copiar código
pnpm build
O Next gerará automaticamente a pasta /out com todos os HTMLs e assets:

pgsql
Copiar código
out/
├─ index.html
├─ questionario/
│  ├─ index.html
│  └─ sucesso/
│     └─ index.html
└─ _next/
⚠️ Não existe mais next export.
O output: 'export' já gera o conteúdo estático dentro de /out.

4. Visualizar a build localmente
bash
Copiar código
npx serve out -p 5050
Acesse: http://localhost:5050

⚠️ Use serve out (sem -s) para múltiplas páginas.
O -s força modo SPA e fará /questionario/ abrir a home.

🌐 Deploy no WordPress
Opção 1 — Upload direto (recomendado)
Acesse via FTP/SFTP o diretório do seu tema WordPress
wp-content/themes/seu-tema/.

Crie uma pasta chamada /cemig-landing/.

Faça upload do conteúdo interno da pasta /out (não a pasta out inteira).

O endereço será:

arduino
Copiar código
https://seudominio.com.br/cemig-landing/
https://seudominio.com.br/cemig-landing/questionario/
https://seudominio.com.br/cemig-landing/questionario/sucesso/
Opção 2 — Plugin de arquivos estáticos
Se o WP usa plugin tipo “Insert HTML Folder” ou “WP File Manager”:

Compacte o conteúdo de /out em .zip;

Faça upload pelo painel;

O plugin cria automaticamente uma rota pública com os arquivos estáticos.

🔗 Navegação entre páginas
Página	Caminho	Descrição
Landing page	/index.html	Página principal institucional.
Questionário	/questionario/index.html	Formulário multiperguntas obrigatório.
Sucesso	/questionario/sucesso/index.html	Tela de confirmação após envio.

Navegação configurada com links absolutos:

tsx
Copiar código
<a href="/questionario/">Ir para o questionário</a>
<form action="/questionario/sucesso/" method="get">…</form>
🧱 Regras de design e comportamento
Mobile-first: estilos base mobile + md: desktop.

Sem margin externa: use padding, gap, space-*.

Nada de SSR ou fetch dinâmico: todos os dados são estáticos.

Imagens: next/image com unoptimized: true.

Animações suaves: IntersectionObserver + CSS, sem quebrar o export.

Formulário:

Todos os fieldset e radio são required.

O botão ENVIAR redireciona para /questionario/sucesso/.

Pode ser adaptado para POST real (REST WP, Formspree etc).

🧩 Customizações futuras
Item	Onde alterar
Cores / tema	tailwind.config.ts (theme.extend.colors)
Imagens / banners	/public/banner/
Grafismos	/public/grafismo/
Ícones	/public/icons/
Seções / layout	/components/sections/

🧼 Checklist antes do deploy
 Rodar pnpm build sem erros.

 Conferir /out abrindo localmente (npx serve out).

 Testar navegação entre /, /questionario/, /questionario/sucesso/.

 Garantir que não existe scroll horizontal (overflow-x-hidden ok).

 Fazer upload do conteúdo de /out para o WP.

 Testar responsividade em desktop e mobile.
```
