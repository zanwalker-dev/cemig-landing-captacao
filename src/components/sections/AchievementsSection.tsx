export function AchievementsSection() {
  return (
    <section
      id="conquistas"
      aria-labelledby="conquistas-title"
      className="relative"
    >
      <div className="container py-10 md:py-14">
        <h2
          id="conquistas-title"
          className="text-center text-xl font-bold md:text-2xl"
        >
          Conquistas
        </h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-4">
          <li className="rounded-xl border p-5 text-center">
            <strong className="block">Líder em fornecimento</strong>
            <span className="text-sm opacity-80">
              do Mercado Livre de Energia no Brasil.
            </span>
          </li>
          <li className="rounded-xl border p-5 text-center">
            <strong className="block">Maior em comercialização</strong>
            <span className="text-sm opacity-80">
              no Mercado Livre de Energia.
            </span>
          </li>
          <li className="rounded-xl border p-5 text-center">
            <strong className="block">Mais clientes</strong>
            <span className="text-sm opacity-80">no Brasil.</span>
          </li>
          <li className="rounded-xl border p-5 text-center">
            <strong className="block">Certificação sustentável</strong>
            <span className="text-sm opacity-80">para energia renovável.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
