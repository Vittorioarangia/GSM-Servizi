import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie e delle tecnologie analoghe sul sito di GSM Servizi: tipologie, finalità, durata, gestione del consenso e Consent Mode v2.",
  path: "/note-legali/cookie-policy",
});

const lastUpdate = "6 maggio 2026";

type CookieRow = {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: "Necessari" | "Preferenze" | "Statistici" | "Marketing";
};

const rows: CookieRow[] = [
  {
    name: "next-auth.session / cookie tecnici di sessione",
    provider: "GSM Servizi",
    purpose: "Mantenere la sessione utente e proteggere i form da abusi.",
    duration: "Sessione",
    category: "Necessari",
  },
  {
    name: "cookie_consent",
    provider: "GSM Servizi",
    purpose: "Memorizzare le preferenze di consenso espresse dall'utente.",
    duration: "12 mesi",
    category: "Necessari",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Ireland Ltd. (Google Analytics 4)",
    purpose: "Statistiche aggregate di navigazione, attivati solo dopo consenso.",
    duration: "13 mesi",
    category: "Statistici",
  },
  {
    name: "Preferenze interfaccia",
    provider: "GSM Servizi",
    purpose: "Memorizzare scelte di visualizzazione (es. tema, lingua).",
    duration: "12 mesi",
    category: "Preferenze",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Note legali
            </p>
            <h1 className="text-ink [text-wrap:balance]">Cookie Policy</h1>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Informativa estesa sull&apos;uso dei cookie e delle tecnologie
              analoghe ai sensi dell&apos;art. 13 del Regolamento (UE)
              2016/679, dell&apos;art. 122 del D.Lgs. 196/2003 e delle linee
              guida del Garante per la protezione dei dati personali del 10
              giugno 2021.
            </p>
            <p className="mt-3 text-sm text-muted">
              Ultimo aggiornamento: {lastUpdate}
            </p>

            <div
              role="note"
              className="mt-8 rounded-xl border border-warning/30 bg-warning/5 p-5 text-sm leading-relaxed text-ink"
            >
              <p>
                <strong>Avviso:</strong> bozza — questa informativa va validata
                da un legale prima della pubblicazione. Le sezioni con{" "}
                <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                  [PLACEHOLDER]
                </code>{" "}
                richiedono dati specifici dello studio.
              </p>
            </div>

            <div className="mt-12 space-y-12 text-base leading-relaxed text-ink/85">
              <section aria-labelledby="cp-1">
                <h2 id="cp-1" className="text-2xl text-ink">
                  1. Cosa sono i cookie
                </h2>
                <p className="mt-3">
                  I cookie sono piccoli file di testo che i siti visitati
                  inviano al terminale dell&apos;utente, dove vengono
                  memorizzati per poi essere ritrasmessi agli stessi siti alla
                  visita successiva. Tecnologie analoghe (web beacon, pixel,
                  local storage, fingerprinting) sono trattate dalla presente
                  informativa allo stesso modo dei cookie.
                </p>
              </section>

              <section aria-labelledby="cp-2">
                <h2 id="cp-2" className="text-2xl text-ink">
                  2. Categorie di cookie utilizzati
                </h2>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl text-ink">
                  Cookie tecnici (necessari)
                </h3>
                <p className="mt-2">
                  Strettamente necessari al funzionamento del sito e
                  all&apos;erogazione dei servizi richiesti. Non richiedono il
                  consenso preventivo dell&apos;utente, ai sensi dell&apos;art.
                  122 D.Lgs. 196/2003.
                </p>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl text-ink">
                  Cookie di preferenze
                </h3>
                <p className="mt-2">
                  Memorizzano le scelte effettuate dall&apos;utente per
                  migliorare l&apos;esperienza di navigazione. Sono installati
                  solo previo consenso.
                </p>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl text-ink">
                  Cookie statistici
                </h3>
                <p className="mt-2">
                  Utilizzati per raccogliere informazioni in forma aggregata
                  sul numero di visitatori e su come utilizzano il sito.
                  Impieghiamo Google Analytics 4 con anonimizzazione
                  dell&apos;indirizzo IP, attivato esclusivamente previo
                  consenso dell&apos;utente.
                </p>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl text-ink">
                  Cookie di marketing
                </h3>
                <p className="mt-2">
                  Allo stato attuale il sito{" "}
                  <strong>non installa cookie di marketing o profilazione</strong>{" "}
                  di terze parti. In caso di future attivazioni la presente
                  informativa sarà aggiornata e all&apos;utente sarà richiesto
                  un nuovo consenso.
                </p>
              </section>

              <section aria-labelledby="cp-3">
                <h2 id="cp-3" className="text-2xl text-ink">
                  3. Elenco dei cookie
                </h2>
                <p className="mt-3">
                  La tabella seguente riepiloga i principali cookie utilizzati
                  sul sito. L&apos;elenco è indicativo: alcune voci possono
                  variare in base alle scelte di consenso e alla
                  configurazione del browser.
                </p>

                <div className="mt-5 overflow-x-auto rounded-xl border border-line">
                  <table className="w-full min-w-[36rem] text-left text-sm">
                    <thead className="bg-paper-warm text-xs uppercase tracking-wider text-ink">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Nome
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Fornitore
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Finalità
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Durata
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Categoria
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {rows.map((r) => (
                        <tr key={r.name} className="align-top">
                          <td className="px-4 py-3 font-mono text-xs">{r.name}</td>
                          <td className="px-4 py-3">{r.provider}</td>
                          <td className="px-4 py-3 text-ink/80">{r.purpose}</td>
                          <td className="px-4 py-3 text-ink/80">{r.duration}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                              {r.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section aria-labelledby="cp-4">
                <h2 id="cp-4" className="text-2xl text-ink">
                  4. Google Consent Mode v2
                </h2>
                <p className="mt-3">
                  Il sito implementa <strong>Google Consent Mode v2</strong>,
                  un&apos;infrastruttura tecnica che adatta dinamicamente il
                  comportamento dei tag Google (Analytics, eventuali tag
                  Ads) sulla base del consenso espresso dall&apos;utente nel
                  banner cookie.
                </p>
                <p className="mt-3">In particolare:</p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    Prima del consenso, lo stato di default è impostato a{" "}
                    <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                      denied
                    </code>{" "}
                    per le categorie{" "}
                    <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                      analytics_storage
                    </code>
                    ,{" "}
                    <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                      ad_storage
                    </code>
                    ,{" "}
                    <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                      ad_user_data
                    </code>{" "}
                    e{" "}
                    <code className="rounded bg-paper-warm px-1 py-0.5 text-xs">
                      ad_personalization
                    </code>
                    .
                  </li>
                  <li>
                    In assenza di consenso, Google riceve esclusivamente
                    segnali aggregati e privi di identificatori (cd. ping
                    cookieless), che non consentono di profilare
                    l&apos;utente.
                  </li>
                  <li>
                    A seguito del consenso, i tag vengono aggiornati
                    dinamicamente e i cookie analytics sono installati con
                    pieno funzionamento.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="cp-5">
                <h2 id="cp-5" className="text-2xl text-ink">
                  5. Gestione e revoca del consenso
                </h2>
                <p className="mt-3">
                  L&apos;utente può prestare, modificare o revocare in ogni
                  momento il proprio consenso tramite il banner cookie
                  presentato alla prima visita o riaprendo il pannello
                  preferenze dal pulsante &laquo;Preferenze cookie&raquo;
                  presente nel footer del sito.
                </p>
                <p className="mt-3">
                  In aggiunta, è sempre possibile gestire o eliminare i cookie
                  direttamente dalle impostazioni del proprio browser. Le
                  istruzioni per i principali browser sono disponibili ai
                  seguenti link:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-1 pl-6">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      Apple Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/it-it/microsoft-edge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
                <p className="mt-3">
                  La revoca del consenso non pregiudica la liceità del
                  trattamento basata sul consenso prestato prima della revoca.
                </p>
              </section>

              <section aria-labelledby="cp-6">
                <h2 id="cp-6" className="text-2xl text-ink">
                  6. Titolare del trattamento e diritti dell&apos;interessato
                </h2>
                <p className="mt-3">
                  Titolare del trattamento è <strong>{site.legalName}</strong>
                  , {site.contact.address}, {site.contact.postalCode}{" "}
                  {site.contact.locality}. L&apos;utente può esercitare in
                  qualsiasi momento i diritti previsti dagli articoli 15-22
                  GDPR scrivendo a{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.email}
                  </a>
                  . Per il quadro completo si rinvia alla{" "}
                  <Link
                    href="/note-legali/privacy-policy"
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>
            </div>

            <div className="mt-14 border-t border-line pt-6 text-sm text-muted">
              Vedi anche:{" "}
              <Link
                href="/note-legali/privacy-policy"
                className="font-medium text-accent hover:text-accent-hover"
              >
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link
                href="/note-legali/informativa-clienti"
                className="font-medium text-accent hover:text-accent-hover"
              >
                Informativa clienti dello studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Note legali", href: "/note-legali" },
          { name: "Cookie Policy", href: "/note-legali/cookie-policy" },
        ])}
      />
    </>
  );
}
