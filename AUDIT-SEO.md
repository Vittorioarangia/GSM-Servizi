# Audit SEO — GSM Servizi

**Data audit:** 2026-05-11
**Fonti:** Google search, WebFetch su PagineGialle/PagineBianche/Virgilio/Commercialista.com/Waze, ricerche ODCEC

---

## Aggiornamento 2026-05-11 — uscita socio Marongiu

Il Dott. Marongiu ha lasciato lo studio. **GSM Servizi Srl è la stessa azienda di sempre**, semplicemente passa da 3 a 2 soci paritari (Sabatini e Gasperini), con Arangia come collaboratrice. Continuità totale di entità, indirizzo, telefono, clienti, storia aziendale.

Cambia poco rispetto all'audit originale. Aggiustamenti puntuali:

| Punto | Aggiornamento |
|-------|---------------|
| Team sul sito | Marongiu rimosso da `lib/site.ts`. "Tre soci" → "Due soci" su chi-siamo + team-teaser. Badge "Capo dello studio" sparisce (paritari) |
| Telefono studio | ✅ Confermato `06 77266301`, aggiornato in `lib/site.ts` |
| Schede directory GSM Servizi Srl (PG, PB, Virgilio) | Restano valide: rivendicare e arricchire come previsto |
| Pin Google Maps "Studio Associato Marongiu" | Da chiarire: se quel nome era un vecchio brand dello stesso studio (stessa entità, solo nome diverso sulla scheda), si rivendica e si rinomina in "GSM Servizi". Se invece era un'entità giuridica separata che coesisteva con GSM Srl (associazione professionale di Marongiu), allora è di Marongiu. **Domanda da girare a Sabatini/Gasperini.** |
| Profili personali Marongiu (Commercialista.com, 36commercialisti, smarongiu.it) | Sono suoi come persona fisica, non riguardano lo studio. Da ignorare. |
| Claim "300+ clienti" | Lascia così (decisione Vittorio: si rivede più avanti se serve) |
| Specializzazione farmacie | Resta valida — è dello studio, non solo di Marongiu |
| Domande "da girare a Marongiu" | ➡️ ora si girano a Sabatini o Gasperini |

Le sezioni che seguono restano come riferimento dell'audit originale. Quando trovi "Marongiu" come interlocutore, leggi "Sabatini o Gasperini".

---

## Decisioni del cliente (aggiornate 2026-05-11)

| # | Domanda | Decisione | Note |
|---|---------|-----------|------|
| 1a | **Brand commerciale** del sito (nome visibile in homepage, header, social) | **"GSM Servizi - Studio Commercialisti"** ✅ DEFINITIVO. Scelta di marketing settata. | Indipendente dall'entità legale. In Italia nome commerciale e ragione sociale possono benissimo differire. |
| 1b | **Ragione sociale** da inserire nel footer + sezione "dati legali" di Google Business | TBD — dipende da chi fattura l'attività regolamentata (GSM Servizi Srl come STP, oppure Studio Associato Marongiu, oppure i professionisti come liberi professionisti). Da chiarire con Marongiu. | Vedi sezione "Vincoli STP" sotto per la domanda precisa. |
| 2 | Categoria CCIAA "elaborazione dati" è errata? | ✅ **NO, RESTA COSÌ**. GSM Servizi Srl mantiene ATECO `63.11.19` (elaborazione dati). L'attività regolamentata di commercialista viene fatturata da un'altra entità (probabilmente Studio Associato Marongiu o i professionisti come liberi professionisti). Nessuna pratica ComUnica da aprire. | Le schede directory di GSM Servizi Srl restano nella loro categoria, ma vanno rivendicate per aggiungere link sito + descrizione + foto. Per la categoria "Commercialista" si userà l'entità professionale, non la SRL. |
| 3 | Gasperini Via Enrico Fermi 38 attivo? | TBD — Vittorio chiede | |
| 4 | Sabatini cognome "Vergari"? Studio Via Bevagna attivo? | TBD — Vittorio chiede | |
| 5 | Arangia iscrizione ODCEC? | TBD — Vittorio chiede | |
| 6 | Telefono ufficiale | TBD — Vittorio chiede | Trovato online `06 77266301` |
| 7 | Email pubblica | TBD — Vittorio chiede | `info@gsmservizi.it` vs `segreteriagsm4@gmail.com` |
| 8 | Dominio smarongiu.it ancora attivo? | TBD — Vittorio chiede a Marongiu | Se sì, redirezionare a gsmservizi.it |
| 9 | Facebook page ufficiale? | TBD — Vittorio chiede | |

---

## Vincoli STP / struttura legale (DA CHIARIRE PRIMA DI PROCEDERE)

Dubbio sollevato da Vittorio in audit. È **critico** risolverlo prima di toccare ATECO, schede, o brand del sito.

### Il vincolo normativo

In Italia (Legge 183/2011, DPR 137/2012):
- L'attività di **dottore commercialista** è regolamentata e riservata agli iscritti all'albo ODCEC (persone fisiche).
- Una **SRL ordinaria NON può legalmente svolgere attività riservata di commercialista**.
- L'unica forma societaria autorizzata è la **STP (Società tra Professionisti)**, che richiede: soci professionisti iscritti all'albo come maggioranza, oggetto sociale specifico, **iscrizione alla sezione speciale dell'albo ODCEC**, e atto costitutivo dedicato.

### I due scenari possibili per GSM

**Scenario A — GSM Servizi Srl è una STP regolarmente costituita**
- Allora può svolgere attività di commercialista
- ATECO corretto = 69.20.11 (servizi forniti da dottori commercialisti)
- Categoria attuale "elaborazione dati" è un errore di classificazione → da aggiornare via ComUnica
- Brand del sito coerente con la realtà legale

**Scenario B — GSM Servizi Srl è una SRL ordinaria (non STP)**
- NON può svolgere attività riservata di commercialista
- ATECO "elaborazione dati" è **corretto** per i servizi operativi che la SRL fornisce (paghe, data entry, software, gestione contabile in conto terzi)
- L'attività professionale riservata è svolta dai **singoli soci** (Marongiu, Gasperini, Sabatini, Arangia) come liberi professionisti iscritti ODCEC, oppure dall'**associazione professionale** "Studio Associato Marongiu & C." come entità con partita IVA propria
- In questo caso il sito attuale, che si presenta come "Studio di Dottori Commercialisti GSM Servizi", **rischia un problema deontologico** perché pubblicizza attività riservata sotto un brand che giuridicamente non è abilitato a svolgerla

### Domanda precisa da fare a Marongiu

> Marongiu, ho un dubbio sulla struttura legale che vorrei chiarire prima di procedere con le directory e Google Business:
> - **GSM Servizi Srl è una STP iscritta alla sezione speciale ODCEC**, o è una SRL ordinaria che fornisce solo servizi operativi (paghe, data entry, ecc.)?
> - **L'attività di consulenza fiscale, redazione bilanci e dichiarazioni** è fatturata dalla SRL o dai singoli professionisti come liberi professionisti / da "Studio Associato Marongiu & C."?
> - **Chi è il soggetto giuridico** che il sito gsmservizi.it dovrebbe rappresentare come "studio commercialista"?

In base alla risposta cambiano: brand strategy del sito, NAP da usare, entità da rivendicare su Google Business, eventuale necessità di trasformare GSM Servizi Srl in STP, e tutto il resto.

### Soluzioni possibili (se Scenario B)

1. **Trasformare GSM Servizi Srl in STP** (procedura formale: notaio, modifica statuto, iscrizione sezione speciale ODCEC). Allinea brand e realtà legale.
2. **Mantenere doppia struttura ma chiarirla**: nel footer del sito + sulle directory specificare che "GSM Servizi" è il brand di uno studio gestito dai dottori Marongiu, Gasperini, Sabatini (iscritti ODCEC Roma n. …), che si avvalgono di GSM Servizi Srl per i servizi operativi. Possibilmente intestare il sito allo **Studio Associato Marongiu & C.** (non più "nome vecchio da eliminare", ma il vero soggetto professionale) e usare "GSM Servizi" solo come marchio commerciale.
3. **Cambiare brand del sito** a un nome che rifletta l'associazione professionale, e tenere "GSM Servizi" solo per la parte operativa SRL.

**Decisione SEO impossibile senza prima sapere la struttura legale reale.** Tutto il piano d'azione qui sotto presuppone che questo dubbio venga risolto.

---

## Implicazioni delle decisioni prese

Sulla base delle decisioni 1 e 2, il piano d'azione si specifica come segue:

### Google Maps pin di "Studio Associato Marongiu"
**NON cancellare, ma rivendicare e rinominare** sulla parte visibile in "GSM Servizi - Studio Commercialisti". Ragione sociale interna della scheda = "Studio Associato Marongiu & C. S.R.L." (o l'entità che Marongiu indicherà come quella che fattura l'attività regolamentata).

Place ID `ChIJs8yXq8NhLxMRi7YeWFk9jMY` conserva:
- ~30+ anni di storia indirizzo
- Eventuali recensioni Google esistenti
- Autorità Maps accumulata
- Associazione con ricerche storiche

Cancellare e creare nuovo = ripartire da zero, perdita totale di autorità.

**Importante:** la decisione iniziale di Vittorio "Studio Marongiu = nome vecchio da eliminare" si applica al **brand visibile** (che diventa "GSM Servizi"), non necessariamente alla persistenza legale dell'entità "Studio Associato Marongiu & C.". Quest'ultima probabilmente resterà viva come scatola giuridica dietro il marchio, perché è quella iscritta ODCEC. Da confermare con Marongiu.

### Schede directory di "GSM Servizi S.r.l." (PG/PB/Virgilio/Kompass)
Rivendicare e:
- Aggiornare categoria a "Commercialista" (sarà più semplice dopo aggiornamento ATECO)
- Aggiungere link `https://gsmservizi.it`
- Aggiungere descrizione, foto, orari, email corretta

### Schede directory di "Studio Associato Marongiu" (Commercialista.com/36commercialisti/Waze)
Dopo che GSM Maps sarà online:
- Su Commercialista.com: il profilo Marongiu va modificato per indicare "Studio: GSM Servizi" (non più "Studio Associato Marongiu")
- Sulle directory dove "Studio Marongiu" appare come entità separata, contattare supporto per **chiusura** o **redirect verso scheda GSM Servizi**

### Dominio smarongiu.it
Se ancora attivo, configurare **redirect 301 → gsmservizi.it** per non disperdere SEO equity (link in entrata storici, menzioni, ecc.).

---

## TL;DR — 5 cose da sapere subito

1. **Google non vede praticamente il sito.** Una sola pagina indicizzata (la home), il resto non esiste per Google. Step 1+2 del piano SEO sono urgenti.

2. **Le schede di GSM Servizi esistono già su PG/PB/Virgilio/Kompass MA sono nella categoria SBAGLIATA** — "Elaborazione dati - servizio conto terzi" invece di "Commercialista". Per questo non vi trovano: chi cerca "commercialista Roma" non vi vede. Vanno **rivendicate e ricategorizzate**, non creare nuove.

3. **Google Maps ha già un pin** per **"Studio Associato Marongiu & C. S.R.L."** a Piazza Epiro 16 (Place ID `ChIJs8yXq8NhLxMRi7YeWFk9jMY`). Va **rivendicato**, non creare scheda nuova (creeresti un duplicato).

4. **Confusione tra entità legali**: al civico esistono due ragioni sociali — "GSM Servizi S.r.l." (registrata come "Elaborazione dati") e "Studio Associato Marongiu & C. S.R.L." (questa è quella che fa commercialista). Da chiarire con cliente quale entità intestare a Google Business e directory.

5. **3 soci su 4 hanno studi/profili a indirizzi diversi** da Piazza Epiro. Gasperini risulta a Via Enrico Fermi 38, Sabatini a Via Bevagna 14, Arangia non risulta da nessuna parte. Da chiarire se sono effettivamente entrati in GSM o se sono studi paralleli.

6. **Telefono reale trovato online:** `06 77266301` (PagineGialle/PagineBianche/Virgilio) — diverso dal placeholder `+39 06 XXXXXXX` in `lib/site.ts`. Marongiu su Commercialista.com riporta `06 7726631` (forse interno diverso).

---

## 1. Indicizzazione Google attuale

| Ricerca | Risultato |
|---------|-----------|
| `site:gsmservizi.it` | 1 risultato (solo homepage) |
| `site:gsmservizi.it servizi OR settori OR zone OR contatti` | 0 risultati |
| `"GSM Servizi" commercialista Roma Piazza Epiro` | 10 risultati ma nessuno è il sito GSM (tutti sono directory) |
| `"GSM Servizi" studio commercialisti Roma Appio Latino` | 0 risultati di gsmservizi.it |

**Diagnosi:** Google ha visto la homepage ma non ha crawlato le pagine interne. Probabilmente perché:
- Sitemap mai inviata su Search Console (è lo Step 1+2 del piano)
- Sito recente, Googlebot non ha ancora avuto ragione di approfondire

**Azione:** Step 1 (Search Console) e Step 2 (sitemap + richiesta indicizzazione) del piano SEO sono **urgenti**. Fino ad allora il sito è invisibile.

---

## 2. Entità legali presenti al civico Piazza Epiro 16/A

Esistono **due ragioni sociali** che operano allo stesso indirizzo:

### Entità A — "GSM Servizi S.r.l."
- **Categoria CCIAA visibile sulle directory:** `Elaborazione dati - servizio conto terzi`
- **Telefono trovato online:** `06 77266301`
- Email pubblica reperita: `segreteriagsm4@gmail.com` (non `info@gsmservizi.it`)
- Presente su: PagineGialle, PagineBianche, Virgilio Aziende, Kompass, Facebook

### Entità B — "Studio Associato Marongiu & C. S.R.L."
- **Categoria:** Studio commercialista (operativo come tale dal 1990, capeggiato da Marongiu)
- **Telefono:** `06 7726631` / fax `06 772663334`
- Presente su: Waze, Google Maps (Place ID `ChIJs8yXq8NhLxMRi7YeWFk9jMY`), Commercialista.com, 36commercialisti.com

### Implicazione SEO
**Quale entità mettiamo su Google Business e directory?**

- Se Google Business viene aperto a nome di "GSM Servizi S.r.l." → la CCIAA dice "Elaborazione dati", e Google **può rifiutare la categoria "Commercialista"** durante la verifica per incoerenza. Rischio sospensione scheda.
- Se Google Business viene aperto a nome di "Studio Associato Marongiu & C. S.R.L." → coerente con la categoria commercialista, ma non corrisponde al brand del sito ("GSM Servizi").

**Possibile soluzione:** nome scheda "GSM Servizi - Studio Commercialisti" con ragione sociale legale "Studio Associato Marongiu & C. S.R.L." nelle informazioni avanzate. Da verificare con il cliente quale entità giuridica gestirà effettivamente il rapporto col cliente finale.

**[DOMANDA APERTA #1 PER CLIENTE]** Quale delle due entità è quella che fattura ai clienti commercialisti? Quella va su Google Business.

---

## 3. Schede esistenti per "GSM Servizi S.r.l."

| Directory | URL | Stato | Categoria attuale | Sito web linkato | Telefono | Da fare |
|-----------|-----|-------|-------------------|------------------|----------|---------|
| **PagineGialle** | [gsmservizisrl-roma](https://www.paginegialle.it/gsmservizisrl-roma) | Esiste, vuota | Elaborazione dati ❌ | NO ❌ | 06 77266301 | **Rivendicare** via areaclienti.italiaonline.it. Cambiare categoria. Aggiungere sito, email, descrizione, orari, foto. |
| **PagineBianche** | [link](https://www.paginebianche.it/gsmservizisrl-roma-8d741d7f-f81c-4f8c-9e76-f0650e258ec6) | Esiste, vuota | Elaborazione dati ❌ | NO ❌ | 06 77266301 | **Rivendicare** (stesso login Italiaonline di PG). Stessa procedura. |
| **Virgilio Aziende** | [link](https://aziende.virgilio.it/elaborazione-dati/roma-rm/gsmservizisrl-roma) | Esiste | Elaborazione dati ❌ | NO ❌ | — | **Rivendicare** via Registra Attività (aziende.virgilio.it). |
| **Kompass** | [link](https://it.kompass.com/c/gsm-servizi-s-r-l/it1067360/) | Esiste (HTTP 403, accesso bloccato in audit) | — | — | — | Verificare manualmente. Kompass è B2B, richiede registrazione per modifiche. |
| **Facebook** | [Pagina GSM servizi](https://www.facebook.com/p/GSM-servizi-100088662123134/) | Pagina pubblica esiste | — | — | — | Verificare manualmente: chi la gestisce? È ufficiale GSM? Da prendere in mano o segnalare per chiusura se non vostra. |

### Punto chiave
Nessuna di queste schede ha attualmente il **link a gsmservizi.it**. Rivendicandole e aggiungendo il link, si guadagnano subito **4 backlink autorevoli** verso il sito (utilissimi per SEO).

---

## 4. Schede esistenti per "Studio Associato Marongiu" (entità commercialista)

| Directory | URL | Categoria | Stato | Da fare |
|-----------|-----|-----------|-------|---------|
| **Google Maps / Waze** | [Waze link](https://www.waze.com/it/live-map/directions/it/lazio/roma/studio-associato-marongiu-and-c.-s.r.l.?to=place.ChIJs8yXq8NhLxMRi7YeWFk9jMY) | Studio commercialista | **Pin esistente** Place ID `ChIJs8yXq8NhLxMRi7YeWFk9jMY` | **CRITICO: rivendicare su business.google.com** prima di creare scheda nuova. Cercare il pin su maps.google.com e cliccare "Rivendica questa attività". |
| **Commercialista.com** | [profilo Marongiu](https://www.commercialista.com/professionista/dott-marco-valerio-marongiu) | Commercialista | Profilo attivo ma intestato a persona (Marongiu) | Marongiu deve loggarsi e aggiungere link al sito GSM tra le info. |
| **36commercialisti.com** | [link](http://36commercialisti.com/elenco/marongiu-marco-valerio) | Commercialista | Profilo attivo (403 in audit) | Verificare manualmente, eventualmente rivendicare. |

---

## 5. Profili dei 4 soci — mappatura completa

### Dott. Marco Valerio Marongiu (capo studio)

| Fonte | Dati trovati |
|-------|--------------|
| Commercialista.com | Piazza Epiro 16, Roma. Phone `+39 06 7726631`. Email `marcomarongiu@smarongiu.it`. Iscritto ODCEC Roma n. AA_003168. Libero professionista dal 1990. Studio: "Studio Associato Marongiu" |
| Waze/Google Maps | "Studio Associato Marongiu & C. S.R.L.", Piazza Epiro 16, aperto Lun-Ven 09:30-18:30 |
| 36commercialisti.com | Profilo attivo |
| commercialistincitta.it | Profilo attivo (URL placeholder, contenuto in caricamento al momento dell'audit) |

**Stato:** ✅ Coerente con Piazza Epiro. Profili da arricchire con link a gsmservizi.it.

**Nota:** Marongiu ha un dominio personale `smarongiu.it` (visibile dall'email). **[DOMANDA APERTA #2]** Quel dominio è ancora attivo? Se sì, va indicato che lo studio ora è GSM Servizi (eventualmente redirect verso gsmservizi.it).

---

### Dott. Giampaolo Gasperini

| Fonte | Dati trovati |
|-------|--------------|
| 36commercialisti.com | Profilo attivo (HTTP 403 in audit) |
| commercialistincitta.it | "gasperini giampaolo - via enrico fermi, 38" — **NON Piazza Epiro** |

**[DOMANDA APERTA #3]** Gasperini ha effettivamente trasferito lo studio in Piazza Epiro o lavora ancora a Via Enrico Fermi 38? Se ancora attivo lì, la sua scheda lo mostra come studio separato. **In ogni caso il profilo va aggiornato** se è entrato in GSM.

**Possibili omonimi:** ci sono altri Gasperini commercialisti in zona Roma (es. Paolo Gasperini a Castel Gandolfo) — assicurati che le directory pubblichino il dottore giusto.

---

### Dott. Fabrizio Sabatini

In `lib/site.ts` è scritto "Dott. Fabrizio Sabatini". Le directory però lo mostrano come **"Sabatini Vergari Fabrizio"** (con secondo cognome Vergari).

| Fonte | Dati trovati |
|-------|--------------|
| Commercialista.com | Via Bevagna, 00191 Roma. Phone `06 3340691`. Iscritto ODCEC Roma n. AA_002732. |
| PagineGialle | "Sabatini Vergari Dr Fabrizio", Via Bevagna 14, Roma |
| Virgilio Aziende | Idem, Via Bevagna 14 |
| Studiosabatini.it | Sito proprio del suo studio (dominio personale attivo) |

**[DOMANDA APERTA #4]** Sabatini ha cognome completo "Sabatini Vergari" — il sito gsmservizi.it lo riporta solo come "Sabatini" (vedi `lib/site.ts` slug `fabrizio-sabatini`). Da uniformare. E: il suo studio in Via Bevagna 14 + dominio studiosabatini.it sono ancora attivi o ha chiuso per confluire in GSM?

---

### Dott.ssa Maria Cristina Arangia

| Fonte | Dati trovati |
|-------|--------------|
| Ricerche ODCEC | **Nessun risultato.** Una ricerca su nome restituisce "Accogli Maria Cristina" (omonima parziale, non lei) |
| Directory generaliste | Nessun risultato |

**[DOMANDA APERTA #5]** Arangia è effettivamente iscritta ODCEC Roma? Conferma numero di iscrizione e regione (se è iscritta a un altro ODCEC, va indicato sul sito).

---

## 6. Piano d'azione consigliato (basato sull'audit)

L'ordine cambia rispetto al piano `SEO.md` originale perché ora sappiamo che esistono già schede da rivendicare.

### Priorità 1 — Sbloccare l'indicizzazione (Step 1+2 del piano SEO)
Senza questo il sito resta invisibile. Procedere come da SEO.md.

### Priorità 2 — Risolvere i dubbi su entità legali e soci
Le 5 "Domande Aperte" sopra vanno chiarite col cliente **prima** di creare/rivendicare schede, altrimenti si rischia di pubblicare dati incoerenti.

### Priorità 3 — Rivendicare le schede esistenti
Una volta chiariti i dubbi, rivendicare nell'ordine:

1. **Google Maps "Studio Associato Marongiu"** (la cosa più importante)
2. **PagineGialle "GSM Servizi S.r.l."** + ricategorizzazione
3. **PagineBianche** (stesso login Italiaonline)
4. **Virgilio Aziende**
5. **Commercialista.com** (login Marongiu)
6. **Kompass** (verifica accesso)
7. **Facebook GSM servizi** (verificare proprietà)

### Priorità 4 — Iscrizioni a directory dove non esiste ancora
Solo a questo punto:
- Apple Business Connect
- Europages (sembra non esistere)
- Trustpilot (quando ci sono recensioni pronte)

### Priorità 5 — Categoria CCIAA
Se "GSM Servizi S.r.l." resta l'entità ufficiale per i clienti commercialisti, **valutare con il cliente se aggiornare la categoria CCIAA** da "Elaborazione dati - servizio conto terzi" a una categoria coerente con l'attività commercialista (es. ATECO 69.20.11 — Servizi forniti da dottori commercialisti). Senza questo, alcune directory continueranno a categorizzare male.

---

## 7. Domande aperte da girare al cliente (riepilogo)

1. **Quale entità legale** (GSM Servizi S.r.l. o Studio Associato Marongiu & C. S.R.L.) intestare a Google Business / directory? Quella che fattura ai clienti.
2. **Dominio smarongiu.it** di Marongiu è ancora attivo? Va dismesso/redirezionato a gsmservizi.it?
3. **Gasperini in Via Enrico Fermi 38** è ancora attivo? Quando è entrato in GSM?
4. **Sabatini cognome completo "Sabatini Vergari"?** Lo studio in Via Bevagna 14 + dominio studiosabatini.it sono ancora attivi?
5. **Arangia iscrizione ODCEC**: numero e regione?
6. **Telefono ufficiale dello studio**: è `06 77266301` (come da PG) o altro?
7. **Email pubblica corretta**: `info@gsmservizi.it` (nel sito) o `segreteriagsm4@gmail.com` (su directory)? Va unificata.
8. **Categoria CCIAA di GSM Servizi S.r.l.** è ancora "Elaborazione dati"? Andrebbe aggiornata a categoria commercialista.
9. **Facebook page** [GSM servizi](https://www.facebook.com/p/GSM-servizi-100088662123134/) è ufficiale GSM? Chi la gestisce?

---

## Sources

- [Gsm Servizi S.r.l. - PagineBianche](https://www.paginebianche.it/gsmservizisrl-roma-8d741d7f-f81c-4f8c-9e76-f0650e258ec6)
- [Gsm Servizi S.r.l. - PagineGialle](https://www.paginegialle.it/gsmservizisrl-roma)
- [Gsm Servizi S.r.l. - Virgilio Aziende](https://aziende.virgilio.it/elaborazione-dati/roma-rm/gsmservizisrl-roma)
- [Gsm Servizi S.r.l. - Kompass](https://it.kompass.com/c/gsm-servizi-s-r-l/it1067360/)
- [Facebook GSM servizi](https://www.facebook.com/p/GSM-servizi-100088662123134/)
- [Studio Associato Marongiu & C. S.R.L. - Waze (Google Place)](https://www.waze.com/it/live-map/directions/it/lazio/roma/studio-associato-marongiu-and-c.-s.r.l.?to=place.ChIJs8yXq8NhLxMRi7YeWFk9jMY)
- [Dott. Marco Valerio Marongiu - Commercialista.com](https://www.commercialista.com/professionista/dott-marco-valerio-marongiu)
- [Marongiu Marco Valerio - 36commercialisti.com](http://36commercialisti.com/elenco/marongiu-marco-valerio)
- [Gasperini Giampaolo - commercialistincitta.it](http://commercialistincitta.it/gasperini-giampaolo-via-enrico-fermi-38-roma/)
- [Fabrizio Sabatini Vergari - Commercialista.com](https://www.commercialista.com/professionista/fabrizio-sabatini-vergari/)
- [Sabatini Vergari Fabrizio - PagineGialle](https://www.paginegialle.it/sabatini-vergari-fabrizio-roma)
- [Commercialisti Appio Latino - PagineGialle (25 schede, GSM non in lista)](https://www.paginegialle.it/lazio/roma/commercialisti/quartiere-appio-latino.html)
