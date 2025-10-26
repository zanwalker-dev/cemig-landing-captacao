import { ButtonForm } from "../ui/buttonForm";

export function LeadFormSection() {
  return (
    <section
      aria-labelledby="lead-title"
      className="relative overflow-x-hidden w-full js-reveal reveal [--reveal-delay:300ms]"
      style={{
        // gradiente próximo ao Figma (ajuste se quiser)
        backgroundImage:
          "linear-gradient(180deg, #CFFC4B 0%, #30F77E 45%, #12E672 100%)",
      }}
    >
      <div className="mx-auto max-w-[1120px] px-4 py-12 md:px-8 md:py-16 container">
        <h2
          id="lead-title"
          className="text-center text-2xl leading-tight text-foreground md:text-3xl"
        >
          Quer saber mais?
          <br />
          Quer ter ainda mais certezas?
        </h2>

        {/* form */}
        <form
          action="#"
          method="post"
          className="mx-auto mt-8 max-w-[980px]"
          noValidate
        >
          {/* grid dos campos */}
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {/* Empresa */}
            <div className="w-full">
              <label htmlFor="empresa" className="sr-only">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Empresa"
                autoComplete="organization"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* CNPJ */}
            <div className="w-full">
              <label htmlFor="cnpj" className="sr-only">
                CNPJ
              </label>
              <input
                id="cnpj"
                name="cnpj"
                type="text"
                inputMode="numeric"
                placeholder="CNPJ"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* Nome */}
            <div className="w-full">
              <label htmlFor="nome" className="sr-only">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Nome"
                autoComplete="given-name"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* Sobrenome */}
            <div className="w-full">
              <label htmlFor="sobrenome" className="sr-only">
                Sobrenome
              </label>
              <input
                id="sobrenome"
                name="sobrenome"
                type="text"
                placeholder="Sobrenome"
                autoComplete="family-name"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* Telefone */}
            <div className="w-full">
              <label htmlFor="telefone" className="sr-only">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="Telefone"
                autoComplete="tel"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* E-mail */}
            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </div>

          {/* botão */}
          <div className="mt-8 flex justify-center">
            <ButtonForm
              type="submit"
              className="h-12 w-full rounded-full px-10 text-white md:w-fit md:px-32 text-sm transition-colors"
            >
              AVANÇAR
            </ButtonForm>
          </div>
        </form>
      </div>
    </section>
  );
}
