import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { settori } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Settori — Studio commercialisti Roma | GSM Servizi",
  description:
    "PMI, farmacie, liberi professionisti, privati: oltre 300 clienti seguiti in tutti i settori. Specializzazione storica nel comparto farmaceutico.",
  path: "/settori",
});

export default function SettoriHubPage() {
  const highlight = settori.find((s) => s.highlight);
  const others = settori.filter((s) => !s.highlight);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Settori", href: "/settori" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero stretto */}
      <section
        aria-labelledby="settori-hero-title"
        className="border-b border-line bg-paper-warm"
      >
        <div className="container-page py-20 md:py-28">
          <nav
            aria-label="Percorso di navigazione"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted"
          >
            <Link
              href="/"
              className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page" className="text-ink">
              Settori
            </span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Verticali
            </p>
            <h1 id="settori-hero-title" className="text-ink [text-wrap:balance]">
              I settori in cui siamo specializzati
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              Oltre 300 clienti seguiti tra PMI e SRL, farmacie, liberi
              professionisti e privati. Una specializzazione storica nel
              comparto farmaceutico e una presenza consolidata nel quadrante
              San Giovanni — Appio Latino di Roma.
            </p>
          </div>
        </div>
      </section>

      {/* Card grandi: settore in evidenza + altri 3 */}
      <section
        aria-labelledby="settori-grid-title"
        className="section-y bg-paper"
      >
        <div className="container-page">
          <h2 id="settori-grid-title" className="sr-only">
            Elenco dei settori
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {highlight && (
              <Link
                href={`/settori/${highlight.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-accent bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(140,29,44,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:col-span-2 lg:row-span-2 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-accent"
                />
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Specializzazione storica
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
                  {highlight.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
                  {highlight.short}
                </p>
                <span className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                  Approfondisci il settore
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            )}

            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/settori/${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-paper p-7 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75 md:text-base">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                  Scopri di più
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="settori-cta-title"
        className="section-y border-t border-line bg-paper-warm"
      >
        <div className="container-page text-center">
          <h2
            id="settori-cta-title"
            className="text-ink [text-wrap:balance]"
          >
            Non sai in quale settore rientri?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">
            Raccontaci la tua attività: in 30 minuti capiamo insieme quali
            sono le tue esigenze fiscali e quali servizi possiamo offrirti.
          </p>
          <div className="mt-8">
            <Link href="/analisi-gratuita" className="btn-primary">
              Richiedi analisi gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
