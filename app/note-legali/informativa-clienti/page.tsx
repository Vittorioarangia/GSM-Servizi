import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Informativa clienti dello studio",
  description:
    "Informativa privacy estesa per i clienti dello studio GSM Servizi: trattamento dati per finalità contabili, fiscali, lavoristiche e societarie ai sensi del GDPR e della normativa italiana.",
  path: "/note-legali/informativa-clienti",
});

const lastUpdate = "6 maggio 2026";

export default function InformativaClientiPage() {
  return (
    <>
      <section className="section-y bg-paper">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Note legali
            </p>
            <h1 className="text-ink [text-wrap:balance]">
              Informativa clienti dello studio
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Informativa estesa ai sensi degli articoli 13 e 14 del
              Regolamento (UE) 2016/679 (GDPR) destinata ai clienti dello
              studio per il trattamento dei dati nell&apos;ambito delle
              attività di consulenza contabile, fiscale, del lavoro e
              societaria.
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
              <section aria-labelledby="ic-1">
                <h2 id="ic-1" className="text-2xl text-ink">
                  1. Titolare del trattamento
                </h2>
                <p className="mt-3">
                  Titolare del trattamento è <strong>{site.legalName}</strong>,
                  con sede in {site.contact.address}, {site.contact.postalCode}{" "}
                  {site.contact.locality} ({site.contact.region}), nelle
                  persone dei legali rappresentanti pro tempore.
                </p>
                <ul role="list" className="mt-3 list-disc space-y-1 pl-6">
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
                  <li>
                    Telefono:{" "}
                    <a
                      href={`tel:${site.contact.phoneIntl}`}
                      className="font-medium text-accent hover:text-accent-hover"
                    >
                      {site.contact.phone}
                    </a>
                  </li>
                </ul>
              </section>

              <section aria-labelledby="ic-2">
                <h2 id="ic-2" className="text-2xl text-ink">
                  2. Tipologie di dati trattati
                </h2>
                <p className="mt-3">
                  Nello svolgimento dell&apos;incarico professionale lo studio
                  tratta le seguenti categorie di dati riferiti al cliente,
                  ai suoi familiari, dipendenti, collaboratori, soci,
                  fornitori e clienti:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Dati anagrafici e identificativi:</strong> nome,
                    cognome, codice fiscale, partita IVA, indirizzi di
                    residenza/sede, contatti telefonici e telematici, documenti
                    di identità.
                  </li>
                  <li>
                    <strong>Dati economici, contabili e fiscali:</strong>{" "}
                    fatture, scontrini, prima nota, libri contabili, bilanci,
                    dichiarazioni dei redditi, modelli F24, situazioni
                    patrimoniali, estratti conto bancari.
                  </li>
                  <li>
                    <strong>Dati relativi al rapporto di lavoro:</strong>{" "}
                    cedolini paga, libro unico, denunce contributive, comunicazioni
                    obbligatorie, modelli CU, presenze, infortuni.
                  </li>
                  <li>
                    <strong>Dati societari:</strong> atti costitutivi, statuti,
                    visure, verbali assembleari e di consiglio, libri sociali.
                  </li>
                  <li>
                    <strong>Categorie particolari di dati (art. 9 GDPR):</strong>{" "}
                    in via eccezionale e solo se strettamente necessari (ad
                    esempio dati relativi allo stato di salute per detrazioni
                    sanitarie o iscrizione a categorie protette).
                  </li>
                  <li>
                    <strong>Dati relativi a condanne penali (art. 10 GDPR):</strong>{" "}
                    nei limiti previsti dalla normativa antiriciclaggio e
                    dagli obblighi di adeguata verifica della clientela.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="ic-3">
                <h2 id="ic-3" className="text-2xl text-ink">
                  3. Finalità e basi giuridiche
                </h2>
                <p className="mt-3">
                  I dati sono trattati per le seguenti finalità:
                </p>
                <ol className="mt-3 list-decimal space-y-2 pl-6">
                  <li>
                    <strong>Esecuzione del mandato professionale</strong>{" "}
                    (consulenza contabile, fiscale, del lavoro, societaria,
                    revisione legale, contenzioso) — base giuridica art. 6,
                    par. 1, lett. b GDPR.
                  </li>
                  <li>
                    <strong>Adempimento di obblighi di legge</strong> in
                    materia tributaria, civilistica, lavoristica,
                    antiriciclaggio, conservazione delle scritture contabili —
                    base giuridica art. 6, par. 1, lett. c GDPR.
                  </li>
                  <li>
                    <strong>Difesa dei diritti del titolare</strong> in sede
                    giudiziaria o stragiudiziale — base giuridica art. 6, par.
                    1, lett. f GDPR.
                  </li>
                  <li>
                    <strong>Gestione amministrativa dello studio</strong>{" "}
                    (fatturazione attiva, recupero crediti, archiviazione) —
                    base giuridica art. 6, par. 1, lett. b e c GDPR.
                  </li>
                  <li>
                    <strong>Trattamento di categorie particolari</strong> ai
                    sensi dell&apos;art. 9, par. 2, lett. b, f e g GDPR e
                    della normativa nazionale di settore.
                  </li>
                </ol>
              </section>

              <section aria-labelledby="ic-4">
                <h2 id="ic-4" className="text-2xl text-ink">
                  4. Privacy by design e by default
                </h2>
                <p className="mt-3">
                  Lo studio adotta misure tecniche e organizzative adeguate
                  ai sensi degli articoli 25 e 32 GDPR, tra cui:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    minimizzazione dei dati raccolti rispetto alle finalità;
                  </li>
                  <li>
                    accesso ai dati limitato al personale autorizzato e
                    istruito (art. 29 GDPR);
                  </li>
                  <li>
                    cifratura dei supporti di archiviazione e dei canali di
                    trasmissione di documentazione sensibile;
                  </li>
                  <li>
                    backup periodici e procedure di disaster recovery;
                  </li>
                  <li>
                    obbligo di riservatezza esteso a collaboratori e
                    fornitori, anche sulla base del segreto professionale (art.
                    622 c.p. e art. 200 c.p.p.).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="ic-5">
                <h2 id="ic-5" className="text-2xl text-ink">
                  5. Soggetti destinatari dei dati
                </h2>
                <p className="mt-3">
                  Per le finalità sopra indicate i dati possono essere
                  comunicati ai seguenti soggetti, ciascuno nei limiti delle
                  proprie competenze:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Pubbliche amministrazioni e enti pubblici:</strong>{" "}
                    Agenzia delle Entrate, Agenzia delle Entrate-Riscossione,
                    INPS, INAIL, Camere di Commercio, Comuni, Regioni, Casse
                    professionali, MEF, Guardia di Finanza, Autorità
                    giudiziarie.
                  </li>
                  <li>
                    <strong>Sistema informatico interbancario</strong> per la
                    gestione di pagamenti e modelli F24.
                  </li>
                  <li>
                    <strong>Banche, intermediari finanziari, assicurazioni</strong>{" "}
                    per le operazioni connesse all&apos;incarico.
                  </li>
                  <li>
                    <strong>Consulenti esterni</strong> (legali, notai,
                    consulenti del lavoro, periti, revisori) coinvolti nello
                    svolgimento del mandato, ove necessario.
                  </li>
                  <li>
                    <strong>Fornitori IT e software house</strong> nominati
                    responsabili del trattamento ai sensi dell&apos;art. 28
                    GDPR (gestionali contabili, fatturazione elettronica,
                    archiviazione documentale, posta elettronica, hosting).
                  </li>
                  <li>
                    <strong>Ordini professionali</strong> in caso di obblighi
                    deontologici o richieste motivate.
                  </li>
                </ul>
                <p className="mt-3">
                  I dati non sono oggetto di diffusione e non sono trasferiti
                  in Paesi extra UE in assenza delle garanzie previste dagli
                  artt. 44 ss. GDPR.
                </p>
                <p className="mt-3">
                  L&apos;elenco aggiornato dei responsabili del trattamento è
                  disponibile su richiesta scrivendo a{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.email}
                  </a>
                  .
                </p>
              </section>

              <section aria-labelledby="ic-6">
                <h2 id="ic-6" className="text-2xl text-ink">
                  6. Periodo di conservazione
                </h2>
                <p className="mt-3">
                  I dati personali sono conservati per i seguenti periodi:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Documentazione contabile e fiscale: 10 anni</strong>{" "}
                    dalla data dell&apos;ultima registrazione, ai sensi
                    dell&apos;art. 2220 del codice civile e dell&apos;art. 22
                    del D.P.R. 600/1973.
                  </li>
                  <li>
                    <strong>Documentazione lavoristica e contributiva:</strong>{" "}
                    secondo i termini previsti dalla normativa di settore (in
                    via generale 10 anni; LUL 5 anni dalla cessazione del
                    rapporto, ferma la conservazione dei dati funzionali al
                    calcolo pensionistico).
                  </li>
                  <li>
                    <strong>Documenti societari:</strong> per la durata della
                    società e per i termini di legge successivi alla
                    cessazione.
                  </li>
                  <li>
                    <strong>Antiriciclaggio:</strong> 10 anni dalla cessazione
                    del rapporto continuativo, ai sensi dell&apos;art. 31 del
                    D.Lgs. 231/2007.
                  </li>
                  <li>
                    <strong>Contenzioso:</strong> per il tempo necessario alla
                    definizione del giudizio e alla decorrenza dei termini di
                    impugnazione.
                  </li>
                </ul>
                <p className="mt-3">
                  Decorsi tali termini, i dati sono cancellati o resi
                  anonimi, salvi gli ulteriori obblighi di legge.
                </p>
              </section>

              <section aria-labelledby="ic-7">
                <h2 id="ic-7" className="text-2xl text-ink">
                  7. Conferimento dei dati
                </h2>
                <p className="mt-3">
                  Il conferimento dei dati è obbligatorio per le finalità
                  connesse all&apos;esecuzione dell&apos;incarico e
                  all&apos;adempimento degli obblighi di legge. L&apos;eventuale
                  rifiuto di fornire i dati comporta l&apos;impossibilità per
                  lo studio di assumere o portare a termine il mandato
                  professionale.
                </p>
              </section>

              <section aria-labelledby="ic-8">
                <h2 id="ic-8" className="text-2xl text-ink">
                  8. Diritti dell&apos;interessato
                </h2>
                <p className="mt-3">
                  L&apos;interessato può esercitare in qualsiasi momento i
                  diritti previsti dagli articoli 15-22 GDPR:
                </p>
                <ul role="list" className="mt-3 list-disc space-y-1.5 pl-6">
                  <li>diritto di accesso (art. 15);</li>
                  <li>diritto di rettifica (art. 16);</li>
                  <li>
                    diritto alla cancellazione (art. 17), nei limiti compatibili
                    con gli obblighi di conservazione di legge;
                  </li>
                  <li>diritto alla limitazione del trattamento (art. 18);</li>
                  <li>diritto alla portabilità dei dati (art. 20);</li>
                  <li>diritto di opposizione (art. 21);</li>
                  <li>
                    diritto a non essere sottoposto a decisioni automatizzate
                    (art. 22).
                  </li>
                </ul>
                <p className="mt-3">
                  Le richieste possono essere inviate a{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.email}
                  </a>{" "}
                  o, in alternativa, alla PEC{" "}
                  <a
                    href={`mailto:${site.contact.pec}`}
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    {site.contact.pec}
                  </a>
                  . Lo studio fornirà riscontro entro un mese dalla ricezione
                  della richiesta, salvo proroga giustificata ai sensi
                  dell&apos;art. 12, par. 3 GDPR.
                </p>
              </section>

              <section aria-labelledby="ic-9">
                <h2 id="ic-9" className="text-2xl text-ink">
                  9. Reclamo all&apos;Autorità di controllo
                </h2>
                <p className="mt-3">
                  Resta impregiudicato il diritto di proporre reclamo al{" "}
                  <a
                    href="https://www.garanteprivacy.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:text-accent-hover"
                  >
                    Garante per la protezione dei dati personali
                  </a>{" "}
                  o di adire le opportune sedi giudiziarie ai sensi
                  dell&apos;art. 79 GDPR.
                </p>
              </section>

              <section aria-labelledby="ic-10">
                <h2 id="ic-10" className="text-2xl text-ink">
                  10. Decisioni automatizzate e profilazione
                </h2>
                <p className="mt-3">
                  Lo studio non adotta processi decisionali interamente
                  automatizzati, né attività di profilazione, in relazione ai
                  dati dei clienti.
                </p>
              </section>

              <section aria-labelledby="ic-11">
                <h2 id="ic-11" className="text-2xl text-ink">
                  11. Riferimenti normativi
                </h2>
                <ul role="list" className="mt-3 list-disc space-y-1 pl-6">
                  <li>Regolamento (UE) 2016/679 (GDPR).</li>
                  <li>D.Lgs. 196/2003 e successive modifiche e integrazioni.</li>
                  <li>D.P.R. 600/1973 — accertamento delle imposte sui redditi.</li>
                  <li>Articolo 2220 del codice civile — conservazione delle scritture contabili.</li>
                  <li>D.Lgs. 231/2007 — disciplina antiriciclaggio.</li>
                  <li>D.Lgs. 81/2008 — sicurezza sul lavoro, ove applicabile.</li>
                </ul>
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
                href="/note-legali/cookie-policy"
                className="font-medium text-accent hover:text-accent-hover"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Note legali", href: "/note-legali" },
          {
            name: "Informativa clienti",
            href: "/note-legali/informativa-clienti",
          },
        ])}
      />
    </>
  );
}
