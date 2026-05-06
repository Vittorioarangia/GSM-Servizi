import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { servizi } from "@/lib/site";
import { serviziContent } from "@/lib/servizi-content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Servizi — Studio commercialisti Roma San Giovanni",
  description:
    "I servizi di GSM Servizi: contabilità, fiscalità, apertura partita IVA, paghe, consulenza societaria, revisione legale, controllo di gestione, crisi d'impresa.",
  path: "/servizi",
});

export default function ServiziHubPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/servizi" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Breadcrumb visivo */}
      <nav
        aria-label="Breadcrumb"
        className="container-page pt-8 text-sm text-muted"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link
              href="/"
              className="hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-line-strong">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li aria-current="page" className="text-ink">
            Servizi
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="container-page pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
            Studio commercialisti — Roma San Giovanni
          </p>
          <h1 className="text-balance">I nostri servizi</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Contabilità, fiscalità, lavoro, societario, revisione, controllo di
            gestione: tutto quello che serve a un’impresa, un professionista o
            un privato per stare in regola e prendere decisioni informate. Un
            referente unico per ogni cliente, risposte entro 24 ore lavorative,
            tariffari trasparenti.
          </p>
        </div>
      </section>

      {/* Griglia servizi */}
      <section className="container-page pb-20 md:pb-28">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {servizi.map((s) => {
            const content = serviziContent[s.slug];
            const preview = content?.bullets.slice(0, 3) ?? [];
            return (
              <li key={s.slug}>
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 md:p-7"
                  aria-label={`Approfondisci il servizio ${s.title}`}
                >
                  <h2 className="font-display text-2xl leading-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted">{s.short}</p>

                  {preview.length > 0 && (
                    <ul role="list" className="mt-5 space-y-2">
                      {preview.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-ink"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Approfondisci
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* CTA finale */}
      <section className="bg-ink text-paper">
        <div className="container-page py-16 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-paper">Non sai da quale servizio partire?</h2>
              <p className="mt-4 text-paper/80">
                Raccontaci la tua situazione: ti diciamo di cosa hai realmente
                bisogno, in quanto tempo possiamo affiancarti e quanto costa.
                Primo incontro gratuito, risposta entro 24 ore lavorative.
              </p>
            </div>
            <Link
              href="/analisi-gratuita"
              className="btn-primary shrink-0"
              aria-label="Richiedi un'analisi gratuita"
            >
              Analisi gratuita
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
