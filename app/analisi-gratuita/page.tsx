import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MessageCircle, Phone, Shield } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Analisi gratuita — Studio commercialisti Roma | GSM Servizi",
  description:
    "Primo incontro gratuito, risposta entro 24 ore lavorative. Compila il form e ti ricontattiamo.",
  path: "/analisi-gratuita",
});

const trustMarkers = [
  {
    icon: Clock,
    title: "Risposta entro 24h",
    body: "Ti ricontattiamo entro un giorno lavorativo.",
  },
  {
    icon: Shield,
    title: "Senza impegno",
    body: "Il primo incontro è gratuito. Nessun costo nascosto.",
  },
  {
    icon: MessageCircle,
    title: "In studio, in videocall o per telefono",
    body: "Scegli tu la modalità più comoda.",
  },
];

export default function AnalisiGratuitaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Analisi gratuita", href: "/analisi-gratuita" },
        ])}
      />

      <section className="container-page py-14 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Lato sinistro: contesto + rassicurazioni */}
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              {site.promise}
            </p>
            <h1 className="mb-5 text-ink [text-wrap:balance]">
              Analisi gratuita
            </h1>
            <p className="text-base leading-relaxed text-ink/85 md:text-lg">
              Raccontaci di cosa hai bisogno. Ti ricontattiamo entro 24 ore
              lavorative — senza impegno e senza costi.
            </p>

            <ul className="mt-8 space-y-4">
              {trustMarkers.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-ink">
                      {title}
                    </div>
                    <div className="text-sm text-muted">{body}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-line bg-paper-warm p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-muted">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                Preferisci chiamare?
              </div>
              <a
                href={`tel:${site.contact.phoneIntl}`}
                className="mt-3 block font-display text-2xl font-medium text-ink transition-colors hover:text-accent md:text-3xl"
              >
                {site.contact.phone}
              </a>
              <p className="mt-2 text-sm text-muted">
                {site.contact.hours}
              </p>
              <p className="mt-3 text-sm text-ink/80">
                Siamo a {site.contact.locality}, {site.contact.address}.{" "}
                <Link
                  href="/contatti"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Vedi tutti i contatti
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Lato destro: form */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
