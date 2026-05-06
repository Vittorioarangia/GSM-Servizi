import type { Metadata } from "next";
import Link from "next/link";
import { Home, Briefcase, Mail, ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pagina non trovata",
  description:
    "La pagina che cerchi non esiste o è stata spostata. Torna alla home di GSM Servizi o esplora i nostri servizi.",
  path: "/404",
  noIndex: true,
});

const suggestions = [
  {
    icon: Home,
    title: "Home",
    description: "Torna alla pagina principale dello studio.",
    href: "/",
  },
  {
    icon: Briefcase,
    title: "Servizi",
    description: "Le otto aree di consulenza dello studio.",
    href: "/servizi",
  },
  {
    icon: Mail,
    title: "Contatti",
    description: "Telefono, email, PEC e indirizzo dello studio.",
    href: "/contatti",
  },
] as const;

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="section-y bg-paper"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p
            aria-hidden="true"
            className="font-[family-name:var(--font-display)] text-7xl font-medium text-accent md:text-8xl"
          >
            404
          </p>
          <h1
            id="not-found-title"
            className="mt-4 text-ink [text-wrap:balance]"
          >
            Pagina non trovata
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
            La pagina che cerchi non esiste o è stata spostata. Puoi tornare
            alla home oppure esplorare le sezioni qui sotto.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Torna alla home
            </Link>
            <Link href="/contatti" className="btn-secondary">
              Contattaci
            </Link>
          </div>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {suggestions.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.href} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-xl border border-line border-l-4 border-l-line bg-paper-warm p-6 transition-all duration-200 hover:-translate-y-1 hover:border-l-accent hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span
                    aria-hidden="true"
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                    Vai
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
