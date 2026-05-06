import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Aggiornamenti fiscali e guide | GSM Servizi",
  description:
    "Approfondimenti, guide e aggiornamenti normativi a cura dello studio GSM Servizi: fisco, lavoro, società e settori specialistici come farmacie e libere professioni.",
  path: "/blog",
});

type Anteprima = {
  titolo: string;
  categoria: string;
  data: string;
  estratto: string;
};

const previews: Anteprima[] = [
  {
    titolo: "Regime forfettario 2026: cosa cambia per le partite IVA",
    categoria: "Fisco",
    data: "in arrivo",
    estratto:
      "Soglia di ricavi, coefficienti di redditività, flat tax al 15% e clausole di esclusione: il quadro aggiornato per il nuovo anno.",
  },
  {
    titolo: "Concordato preventivo biennale: convenienza e adesione",
    categoria: "Fisco",
    data: "in arrivo",
    estratto:
      "Come funziona la proposta dell'Agenzia delle Entrate, i casi in cui aderire conviene e gli effetti su acconti e contributi.",
  },
  {
    titolo: "Fiscalità delle farmacie: bilancio, IVA e magazzino",
    categoria: "Settori",
    data: "in arrivo",
    estratto:
      "Le specificità contabili e fiscali del settore farmaceutico, dalla gestione del magazzino alla valutazione dell'azienda.",
  },
  {
    titolo: "Aprire partita IVA passo passo: forfettario o ordinario",
    categoria: "Guide",
    data: "in arrivo",
    estratto:
      "Una guida pratica all'apertura della partita IVA: scelta del regime, codice ATECO, INPS, INAIL, fattura elettronica.",
  },
  {
    titolo: "Successioni: tempi, costi e adempimenti per gli eredi",
    categoria: "Privati",
    data: "in arrivo",
    estratto:
      "La dichiarazione di successione, le imposte applicabili, le franchigie e la voltura catastale spiegate in modo chiaro.",
  },
  {
    titolo: "Controllo di gestione per PMI: KPI essenziali",
    categoria: "Imprese",
    data: "in arrivo",
    estratto:
      "Quali indicatori scegliere e come costruire un cruscotto di reporting utile alle decisioni di un imprenditore.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Blog
            </p>
            <h1 className="text-ink [text-wrap:balance]">
              Blog dello studio
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
              Il blog è in arrivo. Stiamo lavorando ai primi approfondimenti su{" "}
              <strong>regime forfettario 2026</strong>,{" "}
              <strong>concordato preventivo biennale</strong>,{" "}
              <strong>fiscalità per farmacie</strong> e una guida{" "}
              <strong>passo passo all&apos;apertura della partita IVA</strong>.
            </p>
          </div>

          <ul
            role="list"
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-label="Anteprime degli articoli in arrivo"
          >
            {previews.map((p) => (
              <li key={p.titolo} className="h-full">
                <article
                  className="pointer-events-none flex h-full flex-col rounded-xl border border-line border-l-4 border-l-line bg-paper-warm p-6 opacity-90"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {p.categoria}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-line bg-paper px-2.5 py-0.5 text-xs font-medium text-muted">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      In arrivo
                    </span>
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl text-ink">
                    {p.titolo}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                    {p.estratto}
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-wider text-muted">
                    {p.data}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-xl border border-line bg-paper-warm p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                  Tieni d&apos;occhio i prossimi articoli
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  La newsletter dello studio è in fase di attivazione. Nel
                  frattempo puoi salvare la pagina nei preferiti o scriverci
                  per restare aggiornato.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="btn-primary cursor-not-allowed opacity-60"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Iscriviti — in arrivo
                </button>
                <Link href="/contatti" className="btn-secondary">
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />
    </>
  );
}
