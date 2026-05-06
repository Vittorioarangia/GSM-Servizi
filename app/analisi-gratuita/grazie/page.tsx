import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Grazie — GSM Servizi",
  description:
    "Abbiamo ricevuto la tua richiesta. Ti ricontattiamo entro 24 ore lavorative.",
  path: "/analisi-gratuita/grazie",
  noIndex: true,
});

const mapsQuery = encodeURIComponent(
  `${site.legalName} ${site.contact.address} ${site.contact.locality}`,
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function GraziePage() {
  return (
    <section className="container-page py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent"
        >
          <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
        </span>

        <h1 className="mb-4 text-ink [text-wrap:balance]">
          Grazie, ti ricontattiamo entro 24h.
        </h1>
        <p className="text-base leading-relaxed text-ink/85 md:text-lg">
          Abbiamo ricevuto la tua richiesta e ti abbiamo inviato un&apos;email di
          conferma. Uno dei nostri commercialisti la leggerà a breve e ti
          risponderà entro un giorno lavorativo all&apos;email o al telefono che
          ci hai indicato.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className="flex flex-col items-start gap-1 rounded-xl border border-line bg-white p-5 text-left transition-colors hover:border-ink"
          >
            <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-muted">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              Per urgenze, chiamaci
            </span>
            <span className="font-display text-xl font-medium text-ink">
              {site.contact.phone}
            </span>
            <span className="text-sm text-muted">{site.contact.hours}</span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-1 rounded-xl border border-line bg-white p-5 text-left transition-colors hover:border-ink"
          >
            <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-muted">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              Vieni a trovarci
            </span>
            <span className="text-[15px] font-semibold text-ink">
              {site.contact.address}
            </span>
            <span className="text-sm text-muted">
              {site.contact.locality} · Apri in Google Maps
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-secondary">
            Torna alla home
          </Link>
          <Link href="/servizi" className="btn-primary">
            Esplora i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}
