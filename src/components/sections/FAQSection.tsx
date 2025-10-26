"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter empresa formalizada?",
    a: (
      <>
        Sim. Para ser parceiro da Energia Livre Cemig é necessário possuir CNPJ
        ativo, seja como MEI, ME ou outro formato empresarial. Isso garante que
        você possa emitir notas fiscais, receber comissões e formalizar
        contratos de parceria de forma segura e transparente.
      </>
    ),
  },
  {
    q: "Qual é o tempo até eu começar a ver resultados?",
    a: (
      <>
        Os resultados podem ser percebidos rapidamente. Assim que você indica ou
        fecha seus primeiros contratos, o retorno vem com o pagamento das
        comissões conforme as regras da Energia Livre Cemig. O tempo depende do
        ritmo de prospecção e do ciclo de aprovação dos clientes.
      </>
    ),
  },
  {
    q: "Terei custos iniciais?",
    a: (
      <>
        Não. Tornar-se parceiro não exige investimento inicial. Todo o material
        de apoio, treinamentos e suporte comercial são fornecidos gratuitamente
        pela empresa. Você só precisa dedicar tempo e foco para gerar
        oportunidades e conversões.
      </>
    ),
  },
  {
    q: "Tenho carteira de clientes: como aproveito isso?",
    a: (
      <>
        Essa é a melhor vantagem! Se você já possui uma carteira ativa de
        empresas, pode oferecer a migração para o Mercado Livre de Energia com o
        selo Energia Livre Cemig, ampliando sua receita com comissões sobre cada
        contrato fechado. A equipe da Cemig apoia com materiais, propostas e
        acompanhamento técnico em cada etapa da venda.
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
