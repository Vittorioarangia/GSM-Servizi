import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";

import { site, zone } from "@/lib/site";

export function ZonesStrip() {
  return (
    <section
      aria-labelledby="zone-title"
      className="section-y bg-paper"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Local
          </p>
          <h2 id="zone-title" className="text-ink">
            Dove ci trovi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            A pochi passi da Piazza Epiro, accessibili da tutto il quadrante San Giovanni.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Colonna sinistra: chip cliccabili per ciascuna zona */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
              Quartieri serviti
            </h3>
            <ul role="list" className="mt-5 flex flex-wrap gap-2.5">
              {zone.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zone/${z.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-warm px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {z.zone}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line bg-paper-warm p-5">
              <p className="font-[family-name:var(--font-display)] text-lg text-ink">
                {site.legalName}
              </p>
              <address className="mt-1 text-sm not-italic leading-relaxed text-ink/80">
                {site.contact.address}
                <br />
                {site.contact.postalCode} {site.contact.locality} ({site.contact.region})
                <br />
                <span className="text-muted">{site.contact.hours}</span>
              </address>
              <a
                href="https://maps.google.com/?q=Piazza+Epiro+Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Apri in Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Colonna destra: mappa Google Maps */}
          <div className="overflow-hidden rounded-xl border border-line bg-paper-warm">
            <iframe
              title={`Posizione di ${site.legalName} su Google Maps`}
              src="https://www.google.com/maps?q=Piazza+Epiro+16%2FA,+Roma&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block aspect-square w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZonesStrip;
