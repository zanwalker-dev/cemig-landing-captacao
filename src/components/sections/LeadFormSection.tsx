import { ButtonForm } from "../ui/buttonForm";

export function LeadFormSection() {
  return (
    <section
      aria-labelledby="lead-title"
      className="relative overflow-x-hidden w-full js-reveal reveal [--reveal-delay:300ms]"
      style={{
        backgroundImage: "linear-gradient(180deg, #30F77E 0%, #C4FF3F 100%)",
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

            {/* E-mail */}
            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail para contato"
                autoComplete="email"
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
                placeholder="Telefone para contato"
                autoComplete="tel"
                className="px-2 h-12 w-full rounded-md border border-white/30 bg-white text-[16px] text-foreground placeholder:text-foreground/60 shadow-[0_1px_0_rgba(0,0,0,0.05)] focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </div>

          {/* ✅ aceite de privacidade (obrigatório) */}
          <div className="mt-5 md:mt-6">
            <div className="flex items-start md:items-center gap-3">
              <input
                id="aceite-privacidade"
                name="aceite-privacidade"
                type="checkbox"
                required
                aria-describedby="texto-privacidade"
                className={[
                  "mt-0.5 h-4 w-4 shrink-0 rounded-[3px]",
                  "appearance-none border border-black/40",
                  "checked:bg-[#0F6C58] checked:border-[#0F6C58]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6C58]/40",
                  "transition",
                ].join(" ")}
              />
              <p
                id="texto-privacidade"
                className="text-xs md:text-sm leading-6 text-foreground/90"
              >
                Estou ciente de que os dados pessoais coletados neste formulário
                serão protegidos e tratados conforme determina a{" "}
                <a
                  href="https://www.cemig.com.br/politica-de-privacidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-foreground/30 underline-offset-2 hover:opacity-90"
                >
                  Política de Privacidade da Cemig
                </a>{" "}
                e a LGPD (Lei 13.709/2018).
              </p>
            </div>
          </div>

          {/* botão */}
          <div className="mt-8 flex justify-center">
            <ButtonForm
              type="submit"
              className="h-12 w-full rounded-full px-10 text-white md:w-fit md:px-32 text-sm transition-colors"
            >
              FALE COM A GENTE
            </ButtonForm>
          </div>
        </form>
      </div>
    </section>
  );
}
