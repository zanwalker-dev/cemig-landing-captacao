// app/questionario/page.tsx
export const metadata = {
  title: "Questionário — Energia Livre Cemig",
  description: "Responda para avaliarmos seu perfil de parceria.",
  alternates: { canonical: "/questionario/" },
};

export default function QuestionarioPage() {
  return (
    <main className="min-h-screen bg-white text-[#1B2F2A]">
      {/* Conteúdo */}
      <section className="relative">
        {/* grafismo leve (opcional) */}
        <img
          src="/grafismos/semicircle-right.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-28 hidden h-[620px] max-w-none md:block"
          loading="lazy"
        />

        <div className="mx-auto w-full max-w-[960px] px-4 py-8 md:px-6 md:py-10">
          <form
            action="/questionario/sucesso/"
            method="get"
            className="space-y-8 md:space-y-10"
            noValidate
          >
            {/* 1 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você tem experiência em vendas B2B (empresa para empresa)?
              </legend>
              <Radio
                name="q1"
                options={[
                  "Tenho pouca experiência, atuei em poucos casos",
                  "Tenho experiência moderada com vendas B2B",
                  "Tenho ampla experiência em vendas B2B e em gestão comercial",
                  "Nunca atuei com vendas B2B",
                ]}
              />
            </fieldset>

            {/* 2 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você atua ou já atuou com vendas relacionadas ao Setor de
                Energia?
              </legend>
              <Radio
                name="q2"
                options={[
                  "Sim, com Energia Solar",
                  "Sim, com Eficiência Energética",
                  "Sim, com Manutenção Elétrica",
                  "Sim, com Mercado Livre de Energia",
                  "Sim, com outro segmento do Setor Elétrico",
                  "Não",
                ]}
              />
            </fieldset>

            {/* 3 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você possui uma equipe de trabalho que já atua no mercado de
                energia?
              </legend>
              <Radio name="q3" options={["Sim", "Não"]} />
            </fieldset>

            {/* 4 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você sabe detalhar quais consumidores podem migrar para o
                Mercado Livre de Energia?
              </legend>
              <Radio
                name="q4"
                options={[
                  "Todos os consumidores do Grupo A e B",
                  "Somente os consumidores do Grupo A",
                  "Todos os consumidores industriais e comerciais",
                  "Não, preciso me aprofundar",
                ]}
              />
            </fieldset>

            {/* 5 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Sobre o Mercado Livre de Energia na modalidade Varejista, você:
              </legend>
              <Radio
                name="q5"
                options={[
                  "Nunca ouvi falar",
                  "Já ouvi falar, mas não conheço detalhes",
                  "Conheço o básico",
                  "Tenho domínio completo",
                ]}
              />
            </fieldset>

            {/* 6 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Um consumidor do tipo A4 que optou pela modalidade tarifária
                AZUL possui:
              </legend>
              <Radio
                name="q6"
                options={[
                  "Demanda contratada única",
                  "Duas demandas contratadas (Ponta e Fora Ponta)",
                  "50% de desconto na TUSD",
                  "Não sei, mas pretendo aprofundar no assunto",
                ]}
              />
            </fieldset>

            {/* 7 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                No Mercado Livre de Energia, o que diferencia um consumidor que
                está no Mercado Atacadista de outro que está no Mercado
                Varejista?
              </legend>
              <Radio
                name="q7"
                options={[
                  "O Mercado Varejista é obrigatório para consumidores cuja Demanda Contratada é de até 500kW",
                  "O Mercado Varejista são para clientes varejistas com Demanda Contratada até 100kW",
                  "No Mercado Atacadista o consumidor não precisa ser um agente na CCEE",
                  "Não sei, mas pretendo aprofundar no assunto",
                ]}
              />
            </fieldset>

            {/* 8 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você conhece a estrutura das faturas de energia de um cliente
                elegível para o Mercado Livre de Energia na modalidade
                Varejista?
              </legend>
              <Radio
                name="q8"
                options={[
                  "Já vi, mas não sei explicar detalhadamente",
                  "Sei identificar se o cliente está elegível para o Mercado Livre de Energia em qualquer estado do Brasil",
                  "Tenho domínio completo inclusive para analisar se o cliente já está no Mercado Livre de Energia",
                  "Não conheço, mas pretendo estudar",
                ]}
              />
            </fieldset>

            {/* 9 */}
            <fieldset className="space-y-4">
              <legend className="mb-2 block text-[15px] font-semibold md:text-[16px]">
                Você está disposto a participar de um curso online (90 min de
                carga horária) antes de avançar caso seja necessário aprofundar
                os conhecimentos no Mercado Livre de Energia?
              </legend>
              <Radio name="q9" options={["Sim", "Não"]} />
            </fieldset>

            {/* Declaração + enviar */}
            <div className="space-y-4 pt-2 text-[13.5px] leading-6 text-[#2A3D39]/85 md:text-[14px]">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="declaracao"
                  required
                  className="mt-[3px] h-4 w-4 rounded border-[#2A3D39]/40 text-[#0F6C58] focus:ring-[#0F6C58]"
                />
                <span>
                  Declaro que todas as informações fornecidas neste formulário
                  são verdadeiras e estou ciente de que a continuidade no
                  processo poderá estar sujeita à análise e ao cumprimento de
                  etapas obrigatórias, como treinamentos e entrevistas.
                </span>
              </label>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="h-11 rounded-full bg-[#19A07F] px-10 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:opacity-95 md:h-12 md:px-12"
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

/* --- helpers locais --- */
type RadioProps = { name: string; options: string[] };

function Radio({ name, options }: RadioProps) {
  return (
    <ul className="space-y-3">
      {options.map((label, i) => {
        const id = `${name}-${i}`;
        return (
          <li key={id} className="flex items-start gap-3">
            <input
              type="radio"
              id={id}
              name={name}
              value={label}
              className="mt-[3px] h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#2A3D39]/50 outline-none ring-1 ring-transparent transition checked:border-[#0F6C58] checked:bg-[#0F6C58] focus-visible:ring-2 focus-visible:ring-[#0F6C58]/40"
              required={i === 0}
            />
            <label
              htmlFor={id}
              className="cursor-pointer text-[14px] leading-6 md:text-[15px]"
            >
              {label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
