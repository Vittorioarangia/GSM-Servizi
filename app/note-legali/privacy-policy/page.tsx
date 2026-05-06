import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Informativa privacy ai sensi del Regolamento UE 2016/679 (GDPR) per i visitatori del sito di GSM Servizi: titolare, finalità, base giuridica, conservazione, diritti dell'interessato.",
  path: "/note-legali/privacy-policy",
});

const lastUpdate = "6 maggio 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Note legali
            </p>
            <h1 className="text-ink [text-wrap:balance]">Privacy Policy</h1>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Informativa sul trattamento dei dati personali resa ai sensi
              degli articoli 13 e 14 del Regolamento (UE) 2016/679 (di seguito
              &laquo;GDPR&raquo;) e del D.Lgs. 30 giugno 2003 n. 196 e
              successive modifiche.
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
              <section aria-labelledby="pp-1">
                <h2 id="pp-1" className="text-2xl text-ink">
                  1. Titolare del trattamento
                </h2>
                <p className="mt-3">
                  Il titolare del trattamento dei dati personali è{" "}
                  <strong>{site.legalName}</strong>, con sede in{" "}
                  {site.contact.address}, {site.contact.postalCode}{" "}
                  {site.contact.locality} ({site.contact.region}).
                </p>
                <ul role="list" className="mt-3 list-disc space-y-1 pl-6">
                  <li>P.IVA / C.F.: [PLACEHOLDER — codice fiscale e partita IVA]</li>
                  <li>
                    Telefono:{" "}
                    <a
                      href={`tel:${site.contact.phoneIntl}`}
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      {site.contact.phone}
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      {site.contact.email}
                    </a>
                  </li>
                  <li>
                    PEC:{" "}
                    <a
                      href={`mailto:${site.contact.pec}`}
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      {site.contact.pec}
                    </a>
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-2">
                <h2 id="pp-2" className="text-2xl text-ink">
                  2. Responsabile della protezione dei dati (DPO)
                </h2>
                <p className="mt-3">
                  Il titolare ha nominato / non ha nominato un Responsabile
                  della protezione dei dati. [PLACEHOLDER — confermare presenza
                  DPO; in caso affermativo riportare dati di contatto].
                </p>
              </section>

              <section aria-labelledby="pp-3">
                <h2 id="pp-3" className="text-2xl text-ink">
                  3. Tipologie di dati trattati
                </h2>
                <p className="mt-3">
                  Attraverso il sito{" "}
                  <Link
                    href="/"
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.url.replace(/^https?:\/\//, "")}
                  </Link>{" "}
                  vengono trattati i seguenti dati personali:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Dati di contatto forniti volontariamente</strong>{" "}
                    tramite i form del sito (nome, cognome, indirizzo email,
                    numero di telefono, denominazione azienda, contenuto del
                    messaggio).
                  </li>
                  <li>
                    <strong>Dati di navigazione</strong> raccolti
                    automaticamente dai sistemi informatici (indirizzo IP, user
                    agent, pagine visitate, timestamp), come descritto nella{" "}
                    <Link
                      href="/note-legali/cookie-policy"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Dati raccolti tramite cookie e tecnologie analoghe</strong>,
                    nei limiti del consenso prestato dall&apos;utente.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-4">
                <h2 id="pp-4" className="text-2xl text-ink">
                  4. Finalità del trattamento
                </h2>
                <p className="mt-3">I dati personali sono trattati per:</p>
                <ol className="mt-3 list-decimal space-y-2 pl-6">
                  <li>
                    Gestire le richieste di contatto, di preventivo e di
                    consulenza inviate tramite i form del sito o attraverso i
                    canali indicati nella pagina contatti.
                  </li>
                  <li>
                    Adempiere a obblighi precontrattuali e contrattuali nei
                    confronti dell&apos;interessato.
                  </li>
                  <li>
                    Adempiere a obblighi di legge, regolamento o normativa
                    nazionale e comunitaria.
                  </li>
                  <li>
                    Difendere o far valere un diritto in sede giudiziaria.
                  </li>
                  <li>
                    Garantire la sicurezza informatica del sito e prevenire
                    abusi.
                  </li>
                </ol>
              </section>

              <section aria-labelledby="pp-5">
                <h2 id="pp-5" className="text-2xl text-ink">
                  5. Base giuridica
                </h2>
                <p className="mt-3">
                  Il trattamento dei dati personali si fonda sulle seguenti
                  basi giuridiche:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Art. 6, par. 1, lett. b GDPR</strong> — esecuzione
                    di un contratto di cui l&apos;interessato è parte ovvero
                    misure precontrattuali adottate su sua richiesta (gestione
                    della richiesta di consulenza).
                  </li>
                  <li>
                    <strong>Art. 6, par. 1, lett. c GDPR</strong> —
                    adempimento di un obbligo legale al quale è soggetto il
                    titolare.
                  </li>
                  <li>
                    <strong>Art. 6, par. 1, lett. f GDPR</strong> — legittimo
                    interesse del titolare alla sicurezza del sito e alla
                    difesa di un proprio diritto.
                  </li>
                  <li>
                    <strong>Art. 6, par. 1, lett. a GDPR</strong> — consenso
                    libero, specifico e informato per i cookie non tecnici e
                    per eventuali comunicazioni di marketing.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-6">
                <h2 id="pp-6" className="text-2xl text-ink">
                  6. Form &laquo;Analisi gratuita&raquo;
                </h2>
                <p className="mt-3">
                  I dati conferiti tramite il form di richiesta di analisi
                  gratuita sono trattati esclusivamente per dare riscontro alla
                  richiesta e formulare un&apos;eventuale proposta di
                  consulenza. In particolare:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Dati raccolti:</strong> nome e cognome, email,
                    telefono, denominazione attività, settore, descrizione
                    della richiesta.
                  </li>
                  <li>
                    <strong>Conservazione:</strong> i dati sono conservati per
                    un massimo di 24 mesi dall&apos;ultimo contatto utile, al
                    termine dei quali sono cancellati o resi anonimi, salvo
                    instaurazione di un rapporto professionale.
                  </li>
                  <li>
                    <strong>Profilazione e decisioni automatizzate:</strong>{" "}
                    nessuna. I dati non sono soggetti a profilazione né a
                    processi decisionali automatizzati ai sensi dell&apos;art.
                    22 GDPR.
                  </li>
                  <li>
                    <strong>Marketing:</strong> i dati non sono utilizzati per
                    comunicazioni promozionali in assenza di un ulteriore e
                    specifico consenso.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-7">
                <h2 id="pp-7" className="text-2xl text-ink">
                  7. Periodo di conservazione
                </h2>
                <p className="mt-3">
                  I dati personali sono conservati per il tempo strettamente
                  necessario al perseguimento delle finalità per cui sono
                  raccolti, e in particolare:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    Richieste di contatto non seguite da incarico:
                    <strong> 24 mesi</strong>.
                  </li>
                  <li>
                    Dati di clienti dello studio: per l&apos;intera durata del
                    rapporto e per <strong>10 anni</strong> successivi alla sua
                    cessazione, ai sensi dell&apos;art. 2220 c.c. e del D.P.R.
                    600/1973 in materia di documentazione fiscale.
                  </li>
                  <li>
                    Dati di navigazione e log tecnici: massimo{" "}
                    <strong>12 mesi</strong>, salvo necessità di accertamento
                    di reati.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-8">
                <h2 id="pp-8" className="text-2xl text-ink">
                  8. Destinatari dei dati
                </h2>
                <p className="mt-3">
                  I dati personali possono essere comunicati a soggetti
                  espressamente nominati responsabili del trattamento ai sensi
                  dell&apos;art. 28 GDPR, tra cui fornitori di servizi di
                  hosting, posta elettronica, gestionali contabili,
                  piattaforme di comunicazione e consulenti esterni vincolati
                  da obbligo di riservatezza. I dati non sono oggetto di
                  diffusione.
                </p>
                <p className="mt-3">
                  [PLACEHOLDER — elenco aggiornato dei responsabili esterni
                  designati].
                </p>
              </section>

              <section aria-labelledby="pp-9">
                <h2 id="pp-9" className="text-2xl text-ink">
                  9. Trasferimento dei dati extra-UE
                </h2>
                <p className="mt-3">
                  Eventuali trasferimenti di dati verso Paesi terzi avvengono
                  esclusivamente in presenza di una decisione di adeguatezza
                  della Commissione Europea ovvero sulla base delle clausole
                  contrattuali standard adottate dalla Commissione, ai sensi
                  degli artt. 44 ss. GDPR.
                </p>
              </section>

              <section aria-labelledby="pp-10">
                <h2 id="pp-10" className="text-2xl text-ink">
                  10. Diritti dell&apos;interessato
                </h2>
                <p className="mt-3">
                  Ai sensi degli articoli 15-22 GDPR, l&apos;interessato ha
                  diritto di:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-1.5 pl-6">
                  <li>ottenere l&apos;accesso ai propri dati personali (art. 15);</li>
                  <li>chiederne la rettifica (art. 16);</li>
                  <li>chiederne la cancellazione (art. 17);</li>
                  <li>chiedere la limitazione del trattamento (art. 18);</li>
                  <li>ricevere notifica di rettifica, cancellazione o limitazione (art. 19);</li>
                  <li>ottenere la portabilità dei dati (art. 20);</li>
                  <li>opporsi al trattamento (art. 21);</li>
                  <li>
                    non essere sottoposto a decisioni automatizzate, inclusa la
                    profilazione (art. 22);
                  </li>
                  <li>
                    revocare il consenso in qualsiasi momento, senza
                    pregiudicare la liceità del trattamento basata sul
                    consenso prestato prima della revoca.
                  </li>
                </ul>
                <p className="mt-3">
                  Per esercitare tali diritti è possibile scrivere a{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.email}
                  </a>{" "}
                  o alla PEC{" "}
                  <a
                    href={`mailto:${site.contact.pec}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.pec}
                  </a>
                  .
                </p>
              </section>

              <section aria-labelledby="pp-11">
                <h2 id="pp-11" className="text-2xl text-ink">
                  11. Reclamo all&apos;Autorità di controllo
                </h2>
                <p className="mt-3">
                  L&apos;interessato che ritenga che il trattamento dei propri
                  dati personali avvenga in violazione del GDPR ha diritto di
                  proporre reclamo al{" "}
                  <a
                    href="https://www.garanteprivacy.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    Garante per la protezione dei dati personali
                  </a>{" "}
                  (Piazza Venezia 11, 00187 Roma) ovvero adire le opportune
                  sedi giudiziarie ai sensi dell&apos;art. 79 GDPR.
                </p>
              </section>

              <section aria-labelledby="pp-12">
                <h2 id="pp-12" className="text-2xl text-ink">
                  12. Modifiche alla presente informativa
                </h2>
                <p className="mt-3">
                  La presente informativa può essere soggetta a modifiche, di
                  cui sarà data evidenza in questa pagina. Si invita
                  l&apos;interessato a consultare periodicamente la sezione.
                </p>
              </section>

              <section aria-labelledby="pp-13">
                <h2 id="pp-13" className="text-2xl text-ink">
                  13. Riferimenti normativi
                </h2>
                <ul role="list" className="mt-3 list-disc space-y-1 pl-6">
                  <li>Regolamento (UE) 2016/679 — GDPR.</li>
                  <li>
                    D.Lgs. 30 giugno 2003 n. 196 (Codice in materia di
                    protezione dei dati personali) e successive modifiche e
                    integrazioni, in particolare D.Lgs. 101/2018.
                  </li>
                  <li>
                    Provvedimenti del Garante per la protezione dei dati
                    personali pubblicati su{" "}
                    <a
                      href="https://www.garanteprivacy.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      garanteprivacy.it
                    </a>
                    .
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-14 border-t border-line pt-6 text-sm text-muted">
              Vedi anche:{" "}
              <Link
                href="/note-legali/cookie-policy"
                className="font-medium text-accent hover:text-accent-hover"
              >
                Cookie Policy
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
          { name: "Privacy Policy", href: "/note-legali/privacy-policy" },
        ])}
      />
    </>
  );
}
