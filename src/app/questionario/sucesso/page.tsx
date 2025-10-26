export const metadata = {
  title: "Enviado com sucesso — Energia Livre Cemig",
  description:
    "Sua resposta foi enviada com sucesso. Em breve entraremos em contato.",
  alternates: { canonical: "/questionario/sucesso/" },
};

export default function SucessoPage() {
  return (
    <main className=" w-full overflow-x-clip text-[#1B2F2A]">
      {/* Hero de confirmação */}
      <section className="relative w-full overflow-hidden h-full">
        <div className="container grid max-w-[1200px] items-center gap-4 px-4 py-10 md:grid-cols-2 md:gap-8 md:px-6 md:py-16">
          {/* Foto circular */}
          <div className="order-1">
            <div className="mx-auto w-[280px] max-w-full md:w-[420px]">
              <img
                src="/banner/confirm-hero.png"
                alt="Equipe conversando ao notebook"
                className="h-full w-full object-cover"
                loading="lazy"
                width="840"
                height="840"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2 space-y-4 w-full">
            <h1 className="text-2xl leading-snug text-[#0F6C58] md:text-3xl">
              Sua resposta foi enviada
              <br className="md:hidden" /> com sucesso.
            </h1>
            <p className="max-w-[640px] text-base  text-[#1B2F2A] md:text-lg md:leading-8">
              Em até 3 dias úteis, nossos agentes entrarão em contato por e-mail
              ou WhatsApp. Até logo!
            </p>

            <div className=" text-[15px]  text-[#1B2F2A] md:text-[16px]">
              <p>Equipe SINERGIA</p>
              <a
                href="https://energialivre.cemig.com.br/sinergia"
                className="text-[#2F7A67] underline decoration-[#2F7A67]/30 underline-offset-2 hover:opacity-90"
              >
                energialivre.cemig.com.br/sinergia
              </a>
            </div>
          </div>
        </div>
        {/* grafismo desktop */}
        <img
          src="/grafismo/circle-graphism.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -bottom-40 hidden h-auto w-[640px] md:block -z-30"
          loading="lazy"
        />
        {/* grafismo mobile */}
        <img
          src="/grafismo/confirmacao-graphism-mobile.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -bottom-32 block h-auto w-[520px] md:hidden -z-30"
          loading="lazy"
        />
      </section>
    </main>
  );
}
