// src/components/sections/LeadFormSection.tsx (placeholder acessível)
import { Button } from "@/components/ui/button";

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
          onSubmit={(e) => e.preventDefault()}
          aria-describedby="lead-helper"
        >
          <label className="flex flex-col gap-1 text-sm">
            <span>Empresa</span>
            <input
              className="h-11 rounded-md border px-3"
              name="empresa"
              autoComplete="organization"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>CNPJ</span>
            <input
              className="h-11 rounded-md border px-3"
              name="cnpj"
              inputMode="numeric"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>Nome</span>
            <input
              className="h-11 rounded-md border px-3"
              name="nome"
              autoComplete="given-name"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>Sobrenome</span>
            <input
              className="h-11 rounded-md border px-3"
              name="sobrenome"
              autoComplete="family-name"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>Telefone</span>
            <input
              className="h-11 rounded-md border px-3"
              name="telefone"
              inputMode="tel"
              autoComplete="tel"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>E-mail</span>
            <input
              className="h-11 rounded-md border px-3"
              name="email"
              type="email"
              autoComplete="email"
            />
          </label>

          <div className="md:col-span-2 mt-2 flex justify-center">
            <Button type="submit" size="lg" aria-label="Avançar">
              Avançar
            </Button>
          </div>
        </form>
        <p id="lead-helper" className="sr-only">
          Campos para contato comercial.
        </p>
      </div>
    </section>
  );
}
