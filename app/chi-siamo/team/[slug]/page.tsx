import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Mail, MapPin, Phone } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { TeamAvatar } from "@/components/team/team-avatar";
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo";
import { site, team, type Membro } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) {
    return buildMetadata({
      title: "Profilo non trovato",
      description: "Il profilo richiesto non è disponibile.",
      path: `/chi-siamo/team/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${member.name} — ${member.role} | GSM Servizi`,
    description: member.bio,
    path: `/chi-siamo/team/${member.slug}`,
  });
}

function expandExpertise(member: Membro): { title: string; text: string }[] {
  return member.expertise.map((title) => ({
    title,
    text: `${title}: area di competenza presidiata da ${member.name} all'interno dello studio GSM Servizi.`,
  }));
}

export default async function MembroPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const others = team.filter((m) => m.slug !== member.slug);
  const aree = expandExpertise(member);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Studio", href: "/chi-siamo" },
    { name: member.name, href: `/chi-siamo/team/${member.slug}` },
  ]);

  const persona = personJsonLd({
    slug: member.slug,
    name: member.name,
    role: member.role,
    bio: member.bio,
    expertise: member.expertise,
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={persona} />

      {/* Breadcrumb visivo */}
      <nav
        aria-label="Percorso di navigazione"
        className="border-b border-line bg-paper"
      >
        <div className="container-page py-4">
          <ol
            role="list"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"
          >
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/chi-siamo"
                className="inline-flex min-h-11 items-center hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Studio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {member.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Header pagina */}
      <section
        aria-labelledby="membro-title"
        className="border-b border-line bg-paper-warm"
      >
        <div className="container-page py-16 md:py-20">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-10 md:text-left">
            <TeamAvatar
              initials={member.initials}
              size="xl"
              tone={member.isLead ? "accent" : "ink"}
            />
            <div className="max-w-2xl">
              {member.isLead && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Capo dello studio
                </p>
              )}
              <h1 id="membro-title" className="text-ink [text-wrap:balance]">
                {member.name}
              </h1>
              <p className="mt-3 text-base text-muted md:text-lg">
                {member.role}
              </p>

              {member.expertise.length > 0 && (
                <ul
                  role="list"
                  className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
                  aria-label="Aree di competenza principali"
                >
                  {member.expertise.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center rounded-full border border-line-strong bg-paper px-3 py-1 text-xs font-medium text-ink/75"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section
        aria-labelledby="bio-title"
        className="section-y bg-paper"
      >
        <div className="container-page max-w-3xl">
          <h2 id="bio-title" className="text-ink">
            Bio
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
            {member.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            All’interno dello studio GSM Servizi, {member.name} cura
            personalmente le pratiche dei clienti seguiti, con un approccio
            diretto: numeri chiari, decisioni serene, nessun automatismo a
            scapito della relazione.
          </p>
        </div>
      </section>

      {/* Aree di competenza */}
      {aree.length > 0 && (
        <section
          aria-labelledby="aree-title"
          className="section-y border-y border-line bg-paper-warm"
        >
          <div className="container-page max-w-3xl">
            <h2 id="aree-title" className="text-ink">
              Aree di competenza
            </h2>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4"
            >
              {aree.map((a) => (
                <li
                  key={a.title}
                  className="rounded-xl border border-line bg-paper p-5 md:p-6"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {a.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Contatti */}
      <section
        aria-labelledby="contatti-title"
        className="section-y bg-paper"
      >
        <div className="container-page max-w-3xl">
          <h2 id="contatti-title" className="text-ink">
            Contatti
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            Per parlare con {member.name} puoi scriverci o chiamare lo studio.
            Il primo incontro conoscitivo è gratuito.
          </p>

          <ul role="list" className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-paper-warm p-4 transition-colors hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Scrivi una email allo studio: ${site.contact.email}`}
              >
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">
                  {site.contact.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneIntl}`}
                className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-paper-warm p-4 transition-colors hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Chiama lo studio al numero ${site.contact.phone}`}
              >
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">
                  {site.contact.phone}
                </span>
              </a>
            </li>
            <li className="sm:col-span-2">
              <div className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-paper-warm p-4">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-sm text-ink">
                  Studio in zona Appio Latino — Piazza Epiro, Roma.{" "}
                  {site.contact.hours}.
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href={`/analisi-gratuita?team=${member.slug}`}
              className="btn-primary"
              aria-label={`Prenota un appuntamento con ${member.name}`}
            >
              Prenota un appuntamento
            </Link>
          </div>
        </div>
      </section>

      {/* Altri membri del team */}
      {others.length > 0 && (
        <section
          aria-labelledby="altri-title"
          className="section-y border-t border-line bg-paper-warm"
        >
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="altri-title" className="text-ink">
                Altri membri del team
              </h2>
              <Link
                href="/chi-siamo"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent hover:translate-x-[-1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Torna alla pagina dello studio"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Torna allo studio
              </Link>
            </div>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {others.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/chi-siamo/team/${m.slug}`}
                    className="group flex min-h-11 items-center gap-4 rounded-xl border border-line bg-paper p-4 transition-colors hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`Apri il profilo di ${m.name}`}
                  >
                    <TeamAvatar
                      initials={m.initials}
                      size="md"
                      tone={m.isLead ? "accent" : "ink"}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-[family-name:var(--font-display)] text-base text-ink">
                        {m.name}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted">
                        {m.role}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
