"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quem pode migrar para o Mercado Livre de Energia?",
    a: (
      <>
        Podem migrar para o Mercado Livre de Energia consumidores conectados em
        média ou alta tensão, como indústrias, comércios, condomínios e empresas
        que possuem demanda contratada a partir de 500 kW. A partir de 2024,
        novas regras permitem que consumidores de menor porte também acessem o
        mercado, desde que estejam dentro do grupo A de fornecimento (ligados em
        média tensão) e contratem energia de fontes incentivadas (solar, eólica,
        biomassa ou pequenas centrais hidrelétricas).
      </>
    ),
  },
  {
    q: "A migração para o Mercado Livre é segura? ",
    a: (
      <>
        Sim. A migração é totalmente regulada pela Agência Nacional de Energia
        Elétrica (ANEEL) e pela Câmara de Comercialização de Energia Elétrica
        (CCEE), que garantem segurança jurídica e técnica em todo o processo. A
        Cemig Energia Livre acompanha o cliente em todas as etapas, da análise
        de viabilidade à operação no mercado, oferecendo suporte técnico e
        contratos transparentes, sem interrupção no fornecimento de energia.
      </>
    ),
  },
  {
    q: "Como funciona a contratação de energia no Mercado Livre?",
    a: (
      <>
        No Mercado Livre, o consumidor escolhe de quem comprar a sua energia,
        negociando preço, prazo e volume diretamente com a comercializadora. Com
        a Energia Livre Cemig o processo é simples: a equipe faz um diagnóstico
        de consumo, apresenta uma proposta personalizada e conduz toda a
        migração junto à distribuidora e à CCEE, garantindo previsibilidade e
        economia para o cliente.
      </>
    ),
  },
  {
    q: "Quais são os custos envolvidos na migração?",
    a: (
      <>
        Os custos variam conforme o perfil de consumo e o tipo de contrato atual
        com a distribuidora. Normalmente, o cliente pode ter despesas pontuais
        com adequações técnicas, adesão à CCEE e eventuais ajustes contratuais.
        A Cemig Energia Livre orienta o cliente em cada etapa e mostra o custo
        esperado, ou seja, o tempo de retorno do investimento frente à economia
        obtida.
      </>
    ),
  },
  {
    q: "Quanto tempo leva para migrar para o Mercado Livre?",
    a: (
      <>
        O processo de migração costuma levar cerca de 180 dias, dependendo do
        cronograma da distribuidora local e da complexidade técnica da unidade
        consumidora. Com o suporte da Cemig Energia Livre, esse processo é
        planejado de forma segura, sem riscos de descontinuidade no
        fornecimento, e com acompanhamento próximo até a ativação completa no
        mercado.
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section
      aria-labelledby="faq-title"
      className="relative overflow-hidden w-full js-reveal reveal [--reveal-delay:300ms]"
    >
      <div className="mx-auto max-w-[1120px] px-4 py-12 md:px-8 md:py-16 container">
        <h2
          id="faq-title"
          className="text-center text-[28px] font-semibold tracking-tight text-[#2F7A67] md:text-[36px]"
        >
          Dúvidas frequentes
        </h2>

        <div className="mx-auto mt-8 max-w-[980px] md:mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-lg text-start font-semibold leading-tight text-[#364B46] md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base leading-7 text-foreground/85 md:leading-8">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Grafismos de fundo (decorativos) */}
      <img
        src="/grafismo/triangle-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-150 max-w-none hidden md:block"
        loading="lazy"
      />
    </section>
  );
}
