import Link from "next/link";
import { BookOpen, Eye, Heart, MapPin, Phone } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { TeamCard } from "@/components/team/team-card";
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo";
import { site, team } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Lo studio — Soci e professionisti | GSM Servizi",
  description:
    "Tre soci, una specializzazione: lo studio GSM Servizi a Roma San Giovanni con oltre 300 clienti.",
  path: "/chi-siamo",
});

const valori = [
  {
    icon: Heart,
    title: "Vicinanza",
    text:
      "Siamo lo studio di quartiere accanto al Mercato di Piazza Epiro. Conosciamo i nostri clienti per nome e teniamo la relazione, non solo il fascicolo.",
  },
  {
    icon: Eye,
    title: "Trasparenza",
    text:
      "Preventivi chiari prima di iniziare, scadenze condivise, comunicazione documentata. Niente sorprese in fattura, niente termini gergali per coprire la sostanza.",
  },
  {
    icon: BookOpen,
    title: "Competenza",
    text:
      "Iscritti all’Ordine dei Dottori Commercialisti di Roma. Aggiornamento continuo su fiscalità, lavoro e crisi d’impresa. Specializzazione consolidata su PMI e farmacie.",
  },
] as const;

export default function ChiSiamoPage() {
  const partners = team.filter((m) => m.isPartner);
  const lead = partners.find((m) => m.isLead === true);
  const otherPartners = partners.filter((m) => !m.isLead);
  const professionisti = team.filter((m) => !m.isPartner);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Studio", href: "/chi-siamo" },
  ]);

  const persone = team.map((m) =>
    personJsonLd({
      slug: m.slug,
      name: m.name,
      role: m.role,
      bio: m.bio,
      expertise: m.expertise,
    }),
  );

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={persone} />

      {/* 1. Hero stretto */}
      <section
        aria-labelledby="studio-hero-title"
        className="border-b border-line bg-paper-warm"
      >
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Lo studio
            </p>
            <h1 id="studio-hero-title" className="text-ink [text-wrap:balance]">
              Lo Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              Tre soci, una squadra di professionisti, oltre 300 clienti seguiti
              tra PMI, farmacie e privati a Roma.
            </p>
          </div>
        </div>
      </section>

      {/* 2. I valori */}
      <section aria-labelledby="valori-title" className="section-y bg-paper">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Come lavoriamo
            </p>
            <h2 id="valori-title" className="text-ink">
              I valori
            </h2>
          </div>

          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {valori.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex h-full flex-col rounded-xl border border-line bg-paper-warm p-6 md:p-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. I soci */}
      <section
        aria-labelledby="soci-title"
        className="section-y border-y border-line bg-paper-warm"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Chi siamo
            </p>
            <h2 id="soci-title" className="text-ink">
              I soci dello studio
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Tre dottori commercialisti iscritti all’Ordine di Roma, ognuno con
              la propria area di specializzazione e una visione comune sulla
              relazione con il cliente.
            </p>
          </div>

          {lead && (
            <div className="mt-12">
              <TeamCard member={lead} variant="featured" />
            </div>
          )}

          {otherPartners.length > 0 && (
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {otherPartners.map((m) => (
                <li key={m.slug} className="h-full">
                  <TeamCard member={m} variant="featured" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 4. Professionisti */}
      {professionisti.length > 0 && (
        <section
          aria-labelledby="professionisti-title"
          className="section-y bg-paper"
        >
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                Lo staff
              </p>
              <h2 id="professionisti-title" className="text-ink">
                Professionisti chiave
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
                Collaboratori senior che integrano l’attività dei soci sulle
                aree specialistiche dello studio.
              </p>
            </div>

            <ul
              role="list"
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {professionisti.map((m) => (
                <li key={m.slug} className="h-full">
                  <TeamCard member={m} variant="featured" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. Lo studio — Dove siamo */}
      <section
        aria-labelledby="dove-siamo-title"
        className="section-y border-y border-line bg-paper-warm"
      >
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              La sede
            </p>
            <h2 id="dove-siamo-title" className="text-ink">
              Dove siamo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
              Lo studio è in zona Appio Latino, a pochi passi dal Mercato di
              Piazza Epiro: una traversa tranquilla a metà strada tra la metro A
              di Re di Roma e la basilica di San Giovanni in Laterano.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Riceviamo su appuntamento dal lunedì al venerdì. Per chi non può
              spostarsi lavoriamo anche in videocall e per telefono — la
              relazione resta la stessa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/zone"
                className="btn-secondary"
                aria-label="Scopri le zone di Roma servite dallo studio"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Le nostre zone
              </Link>
              <Link
                href="/contatti"
                className="btn-secondary"
                aria-label="Vai alla pagina contatti"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Contatti e indirizzo
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-4 rounded-xl border border-line bg-paper p-6 sm:grid-cols-2 md:p-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Quartiere
              </dt>
              <dd className="mt-1 text-base text-ink">Appio Latino — Roma</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Riferimento
              </dt>
              <dd className="mt-1 text-base text-ink">Piazza Epiro</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Metro
              </dt>
              <dd className="mt-1 text-base text-ink">
                A — Re di Roma / San Giovanni
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Orari
              </dt>
              <dd className="mt-1 text-base text-ink">{site.contact.hours}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 6. CTA finale */}
      <section
        aria-labelledby="cta-finale-title"
        className="section-y bg-ink text-paper"
      >
        <div className="container-page text-center">
          <h2
            id="cta-finale-title"
            className="!text-paper [text-wrap:balance]"
          >
            Conosciamoci di persona
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Il primo incontro è gratuito, in studio o in videocall. Raccontaci
            la tua situazione: ti diciamo subito come possiamo aiutarti.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/analisi-gratuita"
              className="btn-primary"
              aria-label="Richiedi un'analisi gratuita"
            >
              Richiedi analisi gratuita
            </Link>
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="btn-secondary border-paper/40 bg-white/5 text-paper hover:border-paper hover:bg-white/10"
              aria-label={`Chiama lo studio al numero ${site.contact.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
