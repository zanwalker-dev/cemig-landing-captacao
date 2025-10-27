"use client";

import { useState } from "react";

export function SimulatorSection() {
  const [showResult, setShowResult] = useState(false);

  function onCalculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowResult(true);
  }

  function onReset() {
    setShowResult(false);
  }

  return (
    <section
      aria-labelledby="simulator-title"
      className="relative w-full overflow-hidden"
    >
      <div className="container mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-8 py-6 md:py-0">
        {/* Ilustração */}
        <div className={`order-2 ${showResult ? "md:order-2" : "md:order-1"}`}>
          <div className="hidden md:block mx-auto aspect-square max-w-full w-[80%]">
            <img
              src="/banner/simulacao-hero.png"
              alt="Pessoas sorrindo representando economia de energia"
              className="w-full"
              loading="lazy"
              width="1040"
              height="1040"
            />
          </div>
        </div>

        {/* Texto + Formulário / Resultado */}
        <div className={`order-1 ${showResult ? "md:order-1" : "md:order-2"}`}>
          <h2
            id="simulator-title"
            className="text-center text-xl leading-tight text-[#2C7566] md:text-left md:text-3xl"
          >
            Faça uma simulação e descubra quanto você pode economizar*.
          </h2>

          <p className="mt-4 text-center text-[18px] leading-8 text-foreground md:text-left md:text-lg">
            Desconto garantido todos os meses do contrato apenas para empresas
            ligadas em média e alta tensão.
          </p>

          {/* ===== FORM ===== */}
          {!showResult && (
            <form
              onSubmit={onCalculate}
              className="mt-6 md:mt-8"
              noValidate
              aria-describedby="simulator-note"
            >
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <div className="w-full">
                  <label htmlFor="sim-cep" className="sr-only">
                    CEP
                  </label>
                  <input
                    id="sim-cep"
                    name="cep"
                    type="text"
                    inputMode="numeric"
                    placeholder="CEP"
                    className="h-14 w-full rounded-md border border-zinc-300 bg-white px-4 text-[16px] text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#2C7566]/30"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="sim-valor" className="sr-only">
                    Valor da conta
                  </label>
                  <input
                    id="sim-valor"
                    name="valor"
                    type="text"
                    inputMode="decimal"
                    placeholder="Valor da conta"
                    className="h-14 w-full rounded-md border border-zinc-300 bg-white px-4 text-[16px] text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#2C7566]/30"
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <button
                  type="submit"
                  className="mx-auto block h-fit py-4 w-full rounded-full bg-[#D8FF5E] px-8 text-center text-sm md:text-base font-semibold tracking-wide text-[#0A2E28] transition hover:opacity-95 md:px-30 md:w-fit"
                >
                  CALCULAR
                </button>
              </div>

              <p
                id="simulator-note"
                className="mt-6 text-[14px] leading-7 text-foreground/80 md:mt-8"
              >
                *A base de cálculo apresentada é apenas uma estimativa. Para
                obter o valor exato do desconto, preencha nosso formulário.
              </p>
            </form>
          )}

          {/* ===== RESULTADO ===== */}
          {showResult && (
            <div className="mt-6 md:mt-8" aria-live="polite">
              <div className="rounded-xl bg-zinc-100/80 p-5 md:p-6">
                <p className="text-center text-lg md:text-xl text-[#1B2F2A]/90">
                  Economia de{" "}
                  <strong className="whitespace-nowrap text-[#0F6C58] font-extrabold">
                    R$ 18.000,00
                  </strong>{" "}
                  por ano,
                </p>
                <p className="mt-2 text-center text-base md:text-lg text-[#0F6C58]">
                  <span className="font-semibold">R$1.500</span> por mês.
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <a
                  href="#lead"
                  className="mx-auto block h-fit py-4 w-full rounded-full bg-[#D8FF5E] px-8 text-center text-sm md:text-base font-semibold tracking-wide text-[#0A2E28] transition hover:opacity-95 md:px-30 md:w-fit"
                >
                  APROVEITAR DESCONTO
                </a>
              </div>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={onReset}
                  className="text-[#2C7566] text-sm md:text-base font-semibold underline decoration-[#2C7566]/30 underline-offset-2 hover:opacity-90"
                >
                  FAZER OUTRA SIMULAÇÃO
                </button>
              </div>

              <p className="mt-6 text-[14px] leading-7 text-foreground/80 md:mt-8">
                *A base de cálculo apresentada é apenas uma estimativa. Para
                obter o valor exato do desconto, preencha nosso formulário.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Grafismos */}
      <img
        src="/grafismo/circle-graphism.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 hidden h-[560px] w-auto -translate-y-10 opacity-70 md:block -z-40"
        loading="lazy"
      />
      <img
        src="/grafismo/confirmacao-graphism-mobile.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 block h-80 w-auto opacity-50 md:hidden -z-40"
        loading="lazy"
      />
    </section>
  );
}
