import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site, zone } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Le zone di Roma servite — Commercialista vicino a te | GSM Servizi",
  description:
    "Studio commercialisti GSM Servizi: a Piazza Epiro, serviamo San Giovanni, Appio Latino, Re di Roma, Tuscolano e Laterano. Trova lo studio del tuo quartiere.",
  path: "/zone",
});

export default function ZoneHubPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Zone", href: "/zone" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section
        aria-labelledby="zone-hub-title"
        className="border-b border-line bg-paper-warm"
      >
        <div className="container-page py-20 md:py-28">
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
            <span aria-current="page" className="text-ink">
              Zone
            </span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Local
            </p>
            <h1 id="zone-hub-title" className="text-ink [text-wrap:balance]">
              Commercialista a Roma — i quartieri serviti
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              Lo studio è in <strong>{site.contact.locality}</strong>, accanto al
              Mercato di Piazza Epiro nel quartiere Appio Latino. Da qui
              raggiungiamo a piedi o in pochi minuti di metro tutto il quadrante
              San Giovanni — Tuscolano — Laterano.
            </p>
          </div>
        </div>
      </section>

      {/* Griglia zone */}
      <section
        aria-labelledby="zone-list-title"
        className="section-y bg-paper"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              I quartieri
            </p>
            <h2 id="zone-list-title" className="text-ink">
              Scegli la tua zona
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Ogni pagina racconta come raggiungere lo studio dal quartiere e i
              servizi più richiesti dalla nostra clientela locale.
            </p>
          </div>

          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {zone.map((z) => (
              <li key={z.slug} className="h-full">
                <Link
                  href={`/zone/${z.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-paper-warm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                      {z.zone}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-ink">
                    {z.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {z.short}
                  </p>
                  <ul
                    role="list"
                    className="mt-4 flex flex-wrap gap-1.5 text-xs text-muted"
                  >
                    {z.reachable.slice(0, 2).map((r) => (
                      <li
                        key={r}
                        className="rounded-full border border-line bg-paper px-2.5 py-0.5"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                    Apri la zona
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA finale */}
      <section
        aria-labelledby="zone-cta-title"
        className="section-y bg-ink text-paper"
      >
        <div className="container-page text-center">
          <h2 id="zone-cta-title" className="!text-paper [text-wrap:balance]">
            La tua zona non è in elenco?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Lavoriamo anche con clienti fuori dal quadrante: in studio, in
            videocall e per telefono. Raccontaci dove sei e di cosa hai bisogno.
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
