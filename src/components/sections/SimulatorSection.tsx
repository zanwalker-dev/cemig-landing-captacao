"use client";

export function SimulatorSection() {
  return (
    <section
      aria-labelledby="simulator-title"
      className="relative w-full overflow-hidden"
    >
      <div className="container mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-8 py-6 md:py-0">
        {/* Ilustração (esquerda no desktop) */}
        <div className="order-2 md:order-1">
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

        {/* Texto + Formulário */}
        <div className="order-1 md:order-2">
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

          {/* Form */}
          <form
            action="#"
            method="get"
            className="mt-6 md:mt-8"
            noValidate
            aria-describedby="simulator-note"
          >
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {/* CEP */}
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

              {/* Valor da conta */}
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

            {/* Botão */}
            <div className="mt-6 md:mt-8">
              <button
                type="submit"
                className="mx-auto block h-fit py-4 w-full rounded-full bg-[#D8FF5E] px-8 text-center text-sm md:text-base font-semibold tracking-wide text-[#0A2E28] transition hover:opacity-95 md:px-30 md:w-fit"
              >
                CALCULAR
              </button>
            </div>

            {/* Nota */}
            <p
              id="simulator-note"
              className="mt-6 text-[14px] leading-7 text-foreground/80 md:mt-8"
            >
              *A base de cálculo apresentada é apenas uma estimativa. Para obter
              o valor exato do desconto, preencha nosso formulário.
            </p>
          </form>
        </div>
      </div>

      {/* Grafismos */}
      {/* desktop */}
      <img
        src="/grafismo/circle-graphism.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 hidden h-[560px] w-auto -translate-y-10 opacity-70 md:block -z-40"
        loading="lazy"
      />
      {/* mobile */}
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
