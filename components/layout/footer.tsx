import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { servizi, settori, site, zone } from "@/lib/site";

const studioLinks = [
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy policy", href: "/note-legali/privacy-policy" },
  { label: "Cookie policy", href: "/note-legali/cookie-policy" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const naviServizi = servizi.filter((s) => s.visibleInNav);

  return (
    <footer className="bg-ink text-paper-warm">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-paper">
                {site.name}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-warm/80">
                {site.shortDesc}.
              </p>
            </div>
            <address className="not-italic">
              <ul className="flex flex-col gap-3 text-sm text-paper-warm/90">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {site.contact.address}
                    <br />
                    {site.contact.postalCode} {site.contact.locality} ({site.contact.region})
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`tel:${site.contact.phoneIntl}`}
                    className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{site.contact.hours}</span>
                </li>
              </ul>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-paper">Servizi</h2>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-paper-warm/85">
              {naviServizi.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-paper">Settori</h2>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-paper-warm/85">
                {settori.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/settori/${s.slug}`}
                      className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-paper">Zone</h2>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-paper-warm/85">
                {zone.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zone/${z.slug}`}
                      className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {z.zone}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-paper">Studio</h2>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-paper-warm/85">
              {studioLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-sm transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line/15 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-1 text-xs text-paper-warm/70">
              <p>
                {site.legalName} — P.IVA / C.F. 00000000000 — REA RM-0000000
              </p>
              <p>
                &copy; {year} {site.name} S.r.l. &mdash; Tutti i diritti riservati
              </p>
            </div>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn di GSM Servizi"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-paper-warm/20 text-paper-warm transition-colors hover:border-accent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook di GSM Servizi"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-paper-warm/20 text-paper-warm transition-colors hover:border-accent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram di GSM Servizi"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-paper-warm/20 text-paper-warm transition-colors hover:border-accent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
