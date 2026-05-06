"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";

export function StickyMobileBar() {
  return (
    <div
      role="navigation"
      aria-label="Azioni rapide"
      className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-accent/30 bg-ink text-white md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid h-full grid-cols-2">
        <a
          href={`tel:${site.contact.phoneIntl}`}
          aria-label={`Chiama ${site.name} al numero ${site.contact.phone}`}
          className="inline-flex h-full items-center justify-center gap-2 text-sm font-medium text-white transition-colors hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>Chiama</span>
        </a>
        <Link
          href="/analisi-gratuita"
          aria-label="Richiedi un'analisi gratuita"
          className="inline-flex h-full items-center justify-center gap-2 bg-accent text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
        >
          Analisi gratuita
        </Link>
      </div>
    </div>
  );
}
