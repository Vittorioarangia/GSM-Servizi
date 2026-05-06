import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, MapPin, Building2 } from "lucide-react";

import { servizi, settori, zone } from "@/lib/site";
import { serviziContent } from "@/lib/servizi-content";
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return servizi.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servizio = servizi.find((s) => s.slug === slug);
  const content = serviziContent[slug];

  if (!servizio || !content) {
    return buildMetadata({
      title: "Servizio non trovato",
      description: "La pagina richiesta non esiste.",
      path: `/servizi/${slug}`,
      noIndex: true,
    });
  }

  // First 155 chars of intro for description
  const flatIntro = content.intro.replace(/\s+/g, " ").trim();
  const description =
    flatIntro.length <= 155 ? flatIntro : `${flatIntro.slice(0, 152).trimEnd()}…`;

  return buildMetadata({
    title: `${servizio.title} — Studio commercialisti Roma`,
    description,
    path: `/servizi/${slug}`,
  });
}

export default async function ServizioPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const servizio = servizi.find((s) => s.slug === slug);
  const content = serviziContent[slug];

  if (!servizio || !content) {
    notFound();
  }

  const path = `/servizi/${slug}`;
  const introParagraphs = content.intro.split(/\n\n+/);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Servizi", href: "/servizi" },
    { name: servizio.title, href: path },
  ]);

  const flatIntro = content.intro.replace(/\s+/g, " ").trim();
  const serviceDescription =
    flatIntro.length <= 200 ? flatIntro : `${flatIntro.slice(0, 197).trimEnd()}…`;

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd
        data={serviceJsonLd({
          name: servizio.title,
          description: serviceDescription,
          path,
        })}
      />
      <JsonLd data={faqJsonLd(content.faq)} />

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
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <Link
              href="/servizi"
              className="hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Servizi
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li aria-current="page" className="text-ink">
            {servizio.title}
          </li>
        </ol>
      </nav>

      {/* Hero + Intro */}
      <section className="container-page pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
            Servizio
          </p>
          <h1 className="text-balance">{servizio.title}</h1>
          <p className="mt-6 text-lg font-medium text-ink">{servizio.short}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/90">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa includiamo */}
      <section
        aria-labelledby="cosa-includiamo"
        className="border-t border-line bg-paper-warm/40"
      >
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 id="cosa-includiamo" className="text-balance">
                Cosa includiamo
              </h2>
              <p className="mt-4 text-muted">
                Le attività concrete che gestiamo per i clienti del servizio
                {" "}
                <span className="text-ink">{servizio.title.toLowerCase()}</span>.
                Ogni intervento è preventivato in modo trasparente prima di
                iniziare.
              </p>
            </div>
            <ul role="list" className="grid gap-3 md:col-span-8 sm:grid-cols-2">
              {content.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-line bg-white p-4"
                >
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq"
        className="container-page py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 id="faq" className="text-balance">
            Domande frequenti
          </h2>
          <p className="mt-4 text-muted">
            Le domande che riceviamo più spesso sui nostri clienti per il
            servizio {servizio.title.toLowerCase()}.
          </p>

          <div className="mt-10 divide-y divide-line border-y border-line">
            {content.faq.map((item, i) => (
              <details
                key={i}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left font-medium text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
                  <span className="text-base md:text-lg">{item.q}</span>
                  <ChevronRight
                    className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <div className="mt-3 pr-9 text-ink/85 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Settori */}
      <section
        aria-labelledby="settori"
        className="border-t border-line bg-paper-warm/40"
      >
        <div className="container-page py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 id="settori" className="text-balance">
              Settori in cui lo applichiamo
            </h2>
            <p className="mt-4 text-muted">
              Lavoriamo da anni con quattro tipologie di clientela. Per ognuna
              abbiamo una pagina dedicata con specificità e referenze.
            </p>
          </div>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {settori.map((set) => (
              <li key={set.slug}>
                <Link
                  href={`/settori/${set.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="mt-4 font-display text-lg leading-tight text-ink">
                    {set.title}
                  </span>
                  <span className="mt-2 text-sm text-muted">{set.short}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Vai al settore
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zone */}
      <section aria-labelledby="zone" className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 id="zone" className="text-balance">
            Zone servite
          </h2>
          <p className="mt-4 text-muted">
            Lo studio è in zona Appio Latino — Piazza Epiro, raggiungibile dai
            quartieri limitrofi. Vedi la pagina della tua zona per indicazioni
            di transito e referenze locali.
          </p>
        </div>
        <ul
          role="list"
          className="mt-8 flex flex-wrap gap-3"
        >
          {zone.map((z) => (
            <li key={z.slug}>
              <Link
                href={`/zone/${z.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors hover:border-ink hover:bg-paper-warm focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {z.zone}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA finale specifica */}
      <section className="bg-ink text-paper">
        <div className="container-page py-16 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-paper">{content.cta.title}</h2>
              <p className="mt-4 text-paper/80">{content.cta.sub}</p>
            </div>
            <Link
              href="/analisi-gratuita"
              className="btn-primary shrink-0"
              aria-label={`Richiedi un'analisi gratuita su ${servizio.title}`}
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
