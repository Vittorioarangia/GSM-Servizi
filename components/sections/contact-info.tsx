import { MapPin, Phone, Mail, Clock, Shield } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  /** Layout: stack (default, verticale) o inline (orizzontale, separato da virgole) */
  variant?: "stack" | "inline";
  /** Mostra anche orari */
  showHours?: boolean;
  /** Mostra anche PEC */
  showPec?: boolean;
  className?: string;
};

/**
 * ContactInfo — riusabile.
 * Render NAP completo (Name-Address-Phone) con icone Lucide.
 * Server component.
 */
export function ContactInfo({
  variant = "stack",
  showHours = true,
  showPec = true,
  className,
}: Props) {
  if (variant === "inline") {
    return (
      <p
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/80",
          className,
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {site.contact.address}, {site.contact.postalCode} {site.contact.locality}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {site.contact.phone}
          </a>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {site.contact.email}
          </a>
        </span>
      </p>
    );
  }

  return (
    <ul
      role="list"
      className={cn("flex flex-col gap-5 text-base text-ink/85", className)}
    >
      <li className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
        >
          <MapPin className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Indirizzo
          </p>
          <address className="mt-0.5 not-italic leading-relaxed">
            {site.legalName}
            <br />
            {site.contact.address}
            <br />
            {site.contact.postalCode} {site.contact.locality} ({site.contact.region})
          </address>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
        >
          <Phone className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Telefono
          </p>
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className="mt-0.5 inline-block font-medium hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {site.contact.phone}
          </a>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
        >
          <Mail className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Email
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-0.5 inline-block font-medium hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {site.contact.email}
          </a>
        </div>
      </li>

      {showPec ? (
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
          >
            <Shield className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              PEC
            </p>
            <a
              href={`mailto:${site.contact.pec}`}
              className="mt-0.5 inline-block font-medium hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {site.contact.pec}
            </a>
          </div>
        </li>
      ) : null}

      {showHours ? (
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
          >
            <Clock className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Orari
            </p>
            <p className="mt-0.5 leading-relaxed">{site.contact.hours}</p>
          </div>
        </li>
      ) : null}
    </ul>
  );
}

export default ContactInfo;
