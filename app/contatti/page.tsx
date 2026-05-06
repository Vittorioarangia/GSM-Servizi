import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { ContactInfo } from "@/components/sections/contact-info";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contatti — Studio commercialisti Roma | GSM Servizi",
  description: `Contatta GSM Servizi: ${site.contact.address}, ${site.contact.postalCode} ${site.contact.locality}. Telefono ${site.contact.phone}, email ${site.contact.email}. ${site.contact.hours}. Primo incontro gratuito.`,
  path: "/contatti",
});

const mapsQuery = encodeURIComponent(
  `${site.legalName} ${site.contact.address} ${site.contact.postalCode} ${site.contact.locality}`,
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

const reachOptions = [
  {
    icon: Phone,
    title: "Telefono",
    description: "Lun–Ven 09:00–18:30. Risposta diretta dello studio.",
    cta: "Chiama ora",
    href: `tel:${site.contact.phoneIntl}`,
    label: site.contact.phone,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Per richieste documentali, preventivi e quesiti.",
    cta: "Scrivi un'email",
    href: `mailto:${site.contact.email}`,
    label: site.contact.email,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Per messaggi rapidi e invio di documenti.",
    cta: "Apri chat",
    href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`,
    label: "Scrivici su WhatsApp",
    external: true,
  },
  {
    icon: Calendar,
    title: "Analisi gratuita",
    description: "Primo incontro senza impegno. Risposta entro 24h lavorative.",
    cta: "Prenota online",
    href: "/analisi-gratuita",
    label: "Compila il form",
  },
] as const;

export default function ContattiPage() {
  return (
    <>
      <section
        aria-labelledby="contatti-title"
        className="section-y bg-paper"
      >
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Colonna sinistra: testo + ContactInfo + PEC */}
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                Contatti
              </p>
              <h1 id="contatti-title" className="text-ink [text-wrap:balance]">
                Parliamone insieme
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
                Lo studio è aperto dal lunedì al venerdì. Scegli il canale che
                preferisci: telefono, email, WhatsApp o appuntamento in sede.
                Il primo incontro è sempre gratuito e senza impegno.
              </p>

              <div className="mt-10">
                <h2 className="font-[family-name:var(--font-display)] text-xl text-ink">
                  Dove ci trovi
                </h2>
                <div className="mt-5">
                  <ContactInfo showHours showPec={false} />
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Apri in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 rounded-xl border border-line bg-paper-warm p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg text-ink">
                  Email PEC
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Per comunicazioni ufficiali, atti, raccomandate digitali e
                  notifiche con valore legale.
                </p>
                <a
                  href={`mailto:${site.contact.pec}`}
                  className="mt-3 inline-block font-medium text-ink hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {site.contact.pec}
                </a>
              </div>
            </div>

            {/* Colonna destra: mappa Google Maps */}
            <div className="lg:sticky lg:top-24">
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

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted">
                  Quartiere Appio Latino · a pochi passi dalla metro A Re di Roma.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Apri in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="modi-contatto-title"
        className="section-y bg-paper-warm"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Come raggiungerci
            </p>
            <h2 id="modi-contatto-title" className="text-ink">
              Quattro modi per parlare con noi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Scegli il canale più comodo. Ti rispondiamo entro 24 ore
              lavorative.
            </p>
          </div>

          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {reachOptions.map((opt) => {
              const Icon = opt.icon;
              const external = "external" in opt && opt.external;
              const isInternal = opt.href.startsWith("/");
              const linkProps = external
                ? { target: "_blank", rel: "noopener noreferrer" as const }
                : {};

              const content = (
                <>
                  <span
                    aria-hidden="true"
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {opt.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {opt.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                    {opt.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-xs text-muted">{opt.label}</span>
                </>
              );

              const className =
                "group flex h-full flex-col rounded-xl border border-line border-l-4 border-l-line bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:border-l-accent hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

              return (
                <li key={opt.title} className="h-full">
                  {isInternal ? (
                    <Link href={opt.href} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <a href={opt.href} className={className} {...linkProps}>
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contatti", href: "/contatti" },
        ])}
      />
    </>
  );
}
