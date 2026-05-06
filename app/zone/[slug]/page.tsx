import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, MapPin, Train } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { zone } from "@/lib/site";
import { zoneContent } from "@/lib/zone-content";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return zone.map((z) => ({ slug: z.slug }));
}

function findZone(slug: string) {
  const z = zone.find((it) => it.slug === slug);
  if (!z) return null;
  const content = zoneContent[z.slug];
  if (!content) return null;
  return { z, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findZone(slug);
  if (!found) {
    return buildMetadata({
      title: "Zona non trovata",
      description: "La pagina richiesta non esiste.",
      path: `/zone/${slug}`,
      noIndex: true,
    });
  }

  const { z } = found;
  return buildMetadata({
    title: `${z.title} | GSM Servizi`,
    description: `${z.short} Studio commercialisti GSM Servizi a Roma — primo incontro gratuito, risposta entro 24h.`,
    path: `/zone/${z.slug}`,
  });
}

export default async function ZonePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const found = findZone(slug);
  if (!found) notFound();

  const { z, content } = found;

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Zone", href: "/zone" },
    { name: z.zone, href: `/zone/${z.slug}` },
  ]);

  const faq = faqJsonLd(content.faq);

  const service = serviceJsonLd({
    name: z.title,
    description: z.short,
    path: `/zone/${z.slug}`,
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faq} />
      <JsonLd data={service} />

      {/* 1. Hero + breadcrumb */}
      <section
        aria-labelledby="zone-hero-title"
        className="border-b border-line bg-paper-warm"
      >
        <div className="container-page py-16 md:py-24">
          <nav
            aria-label="Percorso di navigazione"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted"
          >
            <Link
              href="/"
              className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link
              href="/zone"
              className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Zone
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page" className="text-ink">
              {z.zone}
            </span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Zona · {z.zone}
            </p>
            <h1 id="zone-hero-title" className="text-ink [text-wrap:balance]">
              {z.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Come si raggiunge */}
      <section
        aria-labelledby="walking-title"
        className="section-y bg-paper"
      >
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Come arrivare
            </p>
            <h2 id="walking-title" className="text-ink">
              Lo studio dal quartiere {z.zone}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              {content.walkingDirections}
            </p>
            <ul
              role="list"
              className="mt-6 flex flex-wrap gap-2"
            >
              {z.reachable.map((r) => (
                <li
                  key={r}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-warm px-3 py-1.5 text-xs font-medium text-ink"
                >
                  <Train className="h-3 w-3 text-accent" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Riferimenti
            </p>
            <h2 className="text-ink">Punti di riferimento</h2>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.landmarks.map((l) => (
                <li
                  key={l}
                  className="flex items-start gap-3 rounded-lg border border-line bg-paper-warm p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent"
                  />
                  <p className="text-sm leading-relaxed text-ink md:text-base">
                    {l}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Perché qui */}
      <section
        aria-labelledby="why-title"
        className="section-y border-y border-line bg-paper-warm"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Perché qui
            </p>
            <h2 id="why-title" className="text-ink">
              Cosa cambia con uno studio del quartiere
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Quando il commercialista è del rione, il rapporto è diverso —
              tempi di risposta brevi, conoscenza diretta del territorio,
              presenza fisica quando serve.
            </p>
          </div>

          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {content.whyHere.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-xl border border-line bg-paper p-5 md:p-6"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent"
                />
                <p className="text-sm leading-relaxed text-ink md:text-base">
                  {w}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. FAQ */}
      <section
        aria-labelledby="faq-title"
        className="section-y bg-paper"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              FAQ
            </p>
            <h2 id="faq-title" className="text-ink">
              Domande frequenti dal quartiere {z.zone}
            </h2>
          </div>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {content.faq.map((item) => (
              <div key={item.q} className="py-5 md:py-6">
                <dt className="font-[family-name:var(--font-display)] text-lg text-ink md:text-xl">
                  {item.q}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink/80 md:text-base">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. CTA finale */}
      <section
        aria-labelledby="cta-title"
        className="section-y bg-ink text-paper"
      >
        <div className="container-page text-center">
          <h2 id="cta-title" className="!text-paper [text-wrap:balance]">
            Cerchi un commercialista a {z.zone}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Il primo incontro è gratuito, in studio o in videocall. Raccontaci
            la tua situazione: ti diciamo subito come possiamo aiutarti.
          </p>
          <div className="mt-8">
            <Link
              href={`/analisi-gratuita?zona=${z.slug}`}
              className="btn-primary"
            >
              Richiedi analisi gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
