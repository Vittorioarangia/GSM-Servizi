import { ChevronDown } from "lucide-react";

import { faqGlobali } from "@/lib/site";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export function FaqAccordion() {
  return (
    <section
      aria-labelledby="faq-title"
      className="section-y bg-paper"
    >
      <div className="container-page max-w-3xl">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Domande frequenti
          </p>
          <h2 id="faq-title" className="text-ink">
            Le risposte alle domande più comuni
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Tariffe, modalità di lavoro, settori, sede: tutto quello che ti serve sapere
            prima del primo incontro.
          </p>
        </div>

        <div className="mt-10">
          {faqGlobali.map((f, i) => (
            <details
              key={i}
              className="group border-b border-line py-5 transition-colors [&[open]]:border-line-strong"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-ink hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-lg">
                <span className="font-[family-name:var(--font-display)] font-medium [text-wrap:balance]">
                  {f.q}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="mt-3 pr-9 text-sm leading-relaxed text-ink/80 md:text-base">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      <JsonLd data={faqJsonLd(faqGlobali.map((f) => ({ q: f.q, a: f.a })))} />
    </section>
  );
}

export default FaqAccordion;
