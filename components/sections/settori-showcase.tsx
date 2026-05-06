import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { settori } from "@/lib/site";

export function SettoriShowcase() {
  const highlight = settori.find((s) => s.highlight);
  const others = settori.filter((s) => !s.highlight);

  return (
    <section
      aria-labelledby="settori-title"
      className="section-y bg-paper-warm"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Settori
          </p>
          <h2 id="settori-title" className="text-ink">
            Conosciamo il tuo settore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            Oltre 300 clienti tra PMI, farmacie, professionisti e privati.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {highlight && (
            <Link
              href={`/settori/${highlight.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:col-span-2 lg:row-span-2"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-accent"
              />
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Settore di specializzazione
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
                {highlight.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
                {highlight.short}
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                Scopri di più
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          )}

          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/settori/${s.slug}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                {s.short}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                Scopri di più
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SettoriShowcase;
