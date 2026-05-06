import Link from "next/link";
import {
  Calculator,
  FileText,
  Briefcase,
  Users,
  Building2,
  ShieldCheck,
  BarChart3,
  LifeBuoy,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { servizi } from "@/lib/site";

const iconBySlug: Record<string, LucideIcon> = {
  "contabilita-e-bilancio": Calculator,
  "consulenza-fiscale-e-tributaria": FileText,
  "apertura-partita-iva": Briefcase,
  "consulenza-del-lavoro-e-paghe": Users,
  "consulenza-societaria": Building2,
  "revisione-legale-e-controllo": ShieldCheck,
  "consulenza-aziendale-e-controllo-di-gestione": BarChart3,
  "crisi-d-impresa-e-ristrutturazioni": LifeBuoy,
};

export function ServicesGrid() {
  const items = servizi.filter((s) => s.visibleInNav);

  return (
    <section
      aria-labelledby="servizi-title"
      className="section-y bg-paper"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Cosa facciamo
          </p>
          <h2 id="servizi-title" className="text-ink">
            I nostri servizi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            Otto aree di competenza per accompagnare imprese, professionisti e privati
            in ogni adempimento fiscale, contabile e societario.
          </p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((s) => {
            const Icon = iconBySlug[s.slug] ?? FileText;
            return (
              <li key={s.slug} className="h-full">
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line border-l-4 border-l-line bg-paper-warm p-6 transition-all duration-200 hover:-translate-y-1 hover:border-l-accent hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span
                    aria-hidden="true"
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                    Approfondisci
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServicesGrid;
