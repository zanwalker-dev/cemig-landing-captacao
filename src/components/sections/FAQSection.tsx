export function FAQSection() {
  return (
    <section aria-labelledby="faq-title" className="bg-white">
      <div className="container py-10 md:py-14">
        <h2
          id="faq-title"
          className="text-center text-xl font-bold md:text-2xl"
        >
          Dúvidas frequentes
        </h2>
        <div className="mx-auto mt-6 max-w-3xl divide-y rounded-xl border">
          <details className="group p-4">
            <summary className="cursor-pointer list-none font-medium">
              Preciso ter empresa formalizada?
            </summary>
            <div className="mt-2 text-sm opacity-80">
              Conteúdo final entra depois.
            </div>
          </details>
          <details className="group p-4">
            <summary className="cursor-pointer list-none font-medium">
              Em quanto tempo começo a ver resultados?
            </summary>
            <div className="mt-2 text-sm opacity-80">
              Conteúdo final entra depois.
            </div>
          </details>
          <details className="group p-4">
            <summary className="cursor-pointer list-none font-medium">
              Existem custos iniciais?
            </summary>
            <div className="mt-2 text-sm opacity-80">
              Conteúdo final entra depois.
            </div>
          </details>
          <details className="group p-4">
            <summary className="cursor-pointer list-none font-medium">
              Tenho carteira de clientes: como aproveitar?
            </summary>
            <div className="mt-2 text-sm opacity-80">
              Conteúdo final entra depois.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
