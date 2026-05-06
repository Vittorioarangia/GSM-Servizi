import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { servizi, settori } from "@/lib/site";
import { settoriContent } from "@/lib/settori-content";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return settori.map((s) => ({ slug: s.slug }));
}

function findSettore(slug: string) {
  const settore = settori.find((s) => s.slug === slug);
  if (!settore) return null;
  const content = settoriContent[settore.slug];
  if (!content) return null;
  return { settore, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findSettore(slug);
  if (!found) {
    return buildMetadata({
      title: "Settore non trovato",
      description: "La pagina richiesta non esiste.",
      path: `/settori/${slug}`,
      noIndex: true,
    });
  }

  const { settore } = found;
  const primaryKw = settore.keywords[0] ?? settore.title.toLowerCase();
  // Capitalizza la KW primaria per il title (es. "commercialista farmacie roma" → "Commercialista farmacie Roma")
  const titleKw =
    primaryKw.charAt(0).toUpperCase() + primaryKw.slice(1).replace(/ roma/i, " Roma");

  return buildMetadata({
    title: `${titleKw} | GSM Servizi`,
    description: `${settore.short} Studio commercialisti a Roma con specializzazione su ${settore.title.toLowerCase()}: contatta GSM Servizi per un primo incontro gratuito.`,
    path: `/settori/${settore.slug}`,
  });
}

export default async function SettorePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const found = findSettore(slug);
  if (!found) notFound();

  const { settore, content } = found;
  const primaryKw = settore.keywords[0] ?? "";

  // H1 ricco di keyword in modo naturale
  const h1 = primaryKw
    ? primaryKw.charAt(0).toUpperCase() +
      primaryKw.slice(1).replace(/ roma/i, " Roma")
    : `Commercialista per ${settore.title.toLowerCase()} a Roma`;

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Settori", href: "/settori" },
    { name: settore.title, href: `/settori/${settore.slug}` },
  ]);

  const faq = faqJsonLd(content.faq);

  const linkedServices = content.servicesUsed
    .map((s) => servizi.find((srv) => srv.slug === s))
    .filter((s): s is (typeof servizi)[number] => Boolean(s));

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faq} />

      {/* 1. Hero + breadcrumb */}
      <section
        aria-labelledby="settore-hero-title"
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
              href="/settori"
              className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Settori
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page" className="text-ink">
              {settore.title}
            </span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Settore
              {settore.highlight ? " · Specializzazione storica" : ""}
            </p>
            <h1 id="settore-hero-title" className="text-ink [text-wrap:balance]">
              {h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Sfide tipiche del settore */}
      <section
        aria-labelledby="challenges-title"
        className="section-y bg-paper"
      >
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Cosa serve sapere
            </p>
            <h2 id="challenges-title" className="text-ink">
              Le sfide tipiche del settore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              I problemi che incontriamo più spesso quando inizia un nuovo
              cliente del settore {settore.title.toLowerCase()}.
            </p>
          </div>
          <ul role="list" className="space-y-3 lg:col-span-8">
            {content.challenges.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-lg border border-line bg-paper-warm p-4 md:p-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent"
                />
                <p className="text-sm leading-relaxed text-ink md:text-base">
                  {c}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Il nostro approccio */}
      <section
        aria-labelledby="approach-title"
        className="section-y border-y border-line bg-paper-warm"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Come lavoriamo
            </p>
            <h2 id="approach-title" className="text-ink">
              Il nostro approccio
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Cosa facciamo concretamente per i clienti del settore{" "}
              {settore.title.toLowerCase()}.
            </p>
          </div>

          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {content.ourApproach.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-xl border border-line bg-paper p-5 md:p-6"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent-soft text-accent"
                >
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-ink md:text-base">
                  {a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Servizi più richiesti */}
      {linkedServices.length > 0 && (
        <section
          aria-labelledby="services-title"
          className="section-y bg-paper"
        >
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                Servizi rilevanti
              </p>
              <h2 id="services-title" className="text-ink">
                I servizi più richiesti
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
                Le aree di consulenza che attiviamo più spesso per il settore{" "}
                {settore.title.toLowerCase()}.
              </p>
            </div>

            <ul
              role="list"
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {linkedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-line bg-paper-warm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                      {s.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                      Scopri il servizio
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. FAQ */}
      <section
        aria-labelledby="faq-title"
        className="section-y border-t border-line bg-paper-warm"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              FAQ
            </p>
            <h2 id="faq-title" className="text-ink">
              Domande frequenti
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

      {/* 6. CTA finale */}
      <section
        aria-labelledby="cta-title"
        className="section-y bg-ink text-paper"
      >
        <div className="container-page text-center">
          <h2 id="cta-title" className="!text-paper [text-wrap:balance]">
            Vuoi un parere gratuito sul tuo {settore.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Raccontaci la tua situazione: il primo incontro è gratuito, in
            studio a Piazza Epiro o in videocall. Risposta entro 24 ore
            lavorative.
          </p>
          <div className="mt-8">
            <Link
              href={`/analisi-gratuita?settore=${settore.slug}`}
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
