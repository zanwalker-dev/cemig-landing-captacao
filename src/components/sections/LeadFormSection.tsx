// src/components/sections/LeadFormSection.tsx
export function LeadFormSection() {
  return (
    <section
      id="contato"
      aria-labelledby="lead-title"
      className="bg-cemig-gradient"
    >
      <div className="container py-12 md:py-16">
        <h2
          id="lead-title"
          className="text-center text-xl font-bold md:text-2xl"
        >
          Quer saber mais?
          <br className="hidden md:block" /> Quer ter ainda mais certezas?
        </h2>

        <form
          className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-2"
          aria-describedby="lead-helper"
          action="#" // <— sem onSubmit
          method="get"
        >
          {/* ...inputs iguais... */}
        </form>
        <p id="lead-helper" className="sr-only">
          Campos para contato comercial.
        </p>
      </div>
    </section>
  );
}
