import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";

export function CtaFinal() {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative isolate w-full overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(140,29,44,0.35),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(140,29,44,0.18),transparent_55%)]"
      />
      <div className="container-page relative z-10 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
            {site.promise}
          </p>
          <h2 id="cta-final-title" className="text-paper [text-wrap:balance]">
            Pronto a partire?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/85 md:text-lg">
            Primo incontro gratuito, risposta entro 24 ore lavorative.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/analisi-gratuita" className="btn-primary">
              Analisi gratuita
            </Link>
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="btn-secondary border-white/70 bg-transparent text-paper hover:border-white hover:bg-white/10"
              aria-label={`Chiama lo studio al numero ${site.contact.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Chiamaci
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaFinal;
