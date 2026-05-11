# Piano SEO — GSM Servizi

> **⚠️ File correlati nella stessa cartella:**
> - **`AUDIT-SEO.md`** (2026-05-11) — schede esistenti su PG/PB/Virgilio/Maps, struttura legale (STP), 9 domande aperte da risolvere col cliente
> - **`BENCHMARK-SEO.md`** (2026-05-11) — benchmark sui 5 competitor SEO della zona, dove si colloca GSM (2/10), roadmap di sorpasso a 6/12/24 mesi
>
> Senza la lettura di questi due, procedere con le rivendicazioni o l'apertura GBP rischia di pubblicare dati incoerenti.

Guida operativa per far indicizzare e scalare il sito **gsmservizi.it** su Google e motori secondari.

Il sito è già tecnicamente pronto (sitemap, robots, metadata, JSON-LD LocalBusiness). Il lavoro che resta è quasi tutto **off-site**: dire al mondo che esistiamo.

## Filosofia del piano

L'obiettivo di GSM **non è viralità o traffico massimo**, ma **incremento misurabile dei clienti acquisiti**. Questa scelta cambia le priorità rispetto a una strategia SEO generalista:

- Cerchiamo **traffico qualificato**, non volume. Una visita di una farmacista di Roma vale 100 visite random.
- Privilegiamo **leve ad alto impatto sui lead** (recensioni Google, GBP, conversione sito) prima di quelle ad alto impatto sul traffico (blog massivo, backlink).
- Blog editoriale calibrato su **24 articoli/anno** mirati a keyword transazionali ("quanto costa un commercialista a Roma"), non 52 su keyword informativi generici ("scadenza F24 giugno").
- Misuriamo non solo le visite ma il **funnel completo**: visite → click contatto → telefonate → consulti → clienti firmati.

Target da dimensionare con Marongiu: quanti **clienti nuovi all'anno** vogliamo? Da quel numero si calibra il ritmo delle attività.

---

## Strategia in 4 step

| Step | Cosa | Tempo stimato | Stato |
|------|------|---------------|-------|
| 1 | Verifica dominio su Google Search Console | 30 min + attesa DNS | da fare |
| 2 | Invio sitemap + richiesta indicizzazione | 10 min | da fare |
| 2-bis | Bing Webmaster Tools (copre Bing/Yahoo/DuckDuckGo/Ecosia) | 2 min | da fare |
| 3 | Creazione Profilo Google Business | 30 min + verifica postale 7-14 gg | da fare |
| 4 | Iscrizione a 8 directory autorevoli | 1-2 ore distribuite | da fare |

> **Nota su Yahoo e altri motori:** non serve rifare tutto. Yahoo, DuckDuckGo, Ecosia, AOL e Brave usano l'indice di **Bing**. Configurando Bing Webmaster Tools (step 2-bis) li copri tutti. Yandex/Baidu/Naver irrilevanti per Roma.

---

## Cose da procurarsi prima di iniziare

Da chiedere a GSM (Marongiu o segreteria):

- [ ] **Numero di telefono reale** dello studio (in `lib/site.ts` è ancora placeholder `+39 06 XXXXXXX`)
- [ ] **Anno di fondazione** dello studio
- [ ] **Foto** dello studio (esterno, interno, team, dettagli) — vedi sezione "Foto — lista scatti" più sotto per il servizio del [data]
- [ ] **Credenziali Google** dell'account aziendale che farà da owner di Search Console + Business Profile (idealmente `info@gsmservizi.it` o account Google del titolare). Lo stesso account verrà usato anche per Bing.

---

## Foto — lista scatti per il giorno del servizio fotografico

Le foto le scatta direttamente Vittorio in studio. Smartphone moderno (iPhone 12+ o Android top di gamma) basta — non serve fotografo professionista per la base.

### Preparazione (10 min prima di scattare)

- **Studio in ordine:** scrivanie sgombre, niente bicchieri/cibo/giacche
- **Documenti cliente via:** nessuna pratica leggibile sui tavoli (privacy)
- **Luci:** tutte accese + tende aperte. Luce naturale = mattina tardi o primo pomeriggio
- **Vetri puliti**, piante annaffiate
- **Team coordinato:** chiedere ai 4 dottori di vestirsi formale, toni scuri (blu/grigio/nero) — fa professionale e omogeneo
- **Telefono:** HDR attivo, modalità "1x" (no zoom digitale), lente pulita

### Scatti esterno (5 min)

1. **Insegna/targa studio frontale** — la foto più importante per Google "vedere" lo studio dalla strada
2. **Ingresso/portone con numero civico** (Piazza Epiro 16/A leggibile)
3. **Palazzo intero** dall'altro lato della strada (per contesto)
4. **Vista di Piazza Epiro** col Mercato sullo sfondo (vale come "quartiere")

→ tutte orizzontali. La 1 sarà la copertina della scheda Google Maps.

### Scatti interno (15 min)

5. **Reception / ingresso** con logo visibile
6. **Sala d'attesa** (se c'è) — angolazione larga, divani/sedie
7. **Sala riunioni vuota** — tavolo pulito, sedie in ordine, luce dalla finestra
8. **Sala riunioni "in azione"** — 2-3 dottori al tavolo che simulano riunione (laptop aperto, fogli, gesti naturali)
9. **Postazione di lavoro tipo** — scrivania ordinata con monitor, libri di diritto, calcolatrice
10. **Corridoio / vista d'insieme** dello studio

→ mix orizzontali/verticali. Orizzontali per Google Business e sito, verticali per Instagram/storie.

### Scatti team (20 min — la parte più importante)

Il team è quello che converte: chi cerca un commercialista vuole sapere "a chi sto affidando i miei soldi". Niente avatar o foto stock.

11. **Foto di gruppo dei 4 dottori** davanti all'insegna o in sala riunioni. Sfondo pulito, sorriso professionale rilassato
12. **Ritratto singolo Marongiu** — primo piano, sfondo neutro, sguardo in camera, busto incluso
13. **Ritratto singolo Gasperini** — stessa impostazione
14. **Ritratto singolo Sabatini** — stessa impostazione
15. **Ritratto singolo Arangia** — stessa impostazione

⚠️ Per i ritratti singoli: **stesso sfondo, stessa altezza camera, stessa luce** per tutti e 4. Se varia, la pagina team sembra disordinata.

16. **Candid al lavoro** — un dottore al computer, mezzo profilo, schermo non leggibile
17. **Stretta di mano** simulata (commercialista + "cliente"/collega) sopra il tavolo riunioni
18. **Dottore al telefono** alla scrivania (naturale, non posato)

### Scatti dettagli (5 min)

19. **Logo GSM** dove appare (porta, biglietti, parete)
20. **Targa "Dottori Commercialisti"** o iscrizione albo ODCEC
21. **Libreria con codici/manuali** (Codice Civile, TUIR, ecc.)
22. **Still life scrivania**: penna, calcolatrice, occhiali, agenda. Inquadratura dall'alto. Ottima per copertine articoli blog.

### Riepilogo numerico

| Categoria | Foto minime | Foto ideali |
|-----------|-------------|-------------|
| Esterno | 2 | 4 |
| Interno | 4 | 6 |
| Team | 5 (1 gruppo + 4 ritratti) | 8 |
| Dettagli | 2 | 4 |
| **Totale** | **13** | **22** |

Puntare a 22. Ne usiamo poi il meglio.

### Errori comuni da evitare

- ❌ **Controluce** (finestra dietro i soggetti) → silhouette nera
- ❌ **Zoom digitale** → sgrana. Avvicinarsi con i piedi
- ❌ **Documenti cliente visibili** anche sfocati → problema privacy
- ❌ **Tutti seduti dietro la scrivania** → composizione piatta. Variare: in piedi, seduti, di lato
- ❌ **Foto verticali per Google Business** → Google le taglia male. Per GBP servono **orizzontali 16:9 o 4:3**
- ❌ **Sorrisi finti tirati** → impacciati. Meglio uno sguardo serio-professionale di un sorriso forzato

---

## STEP 1 — Verifica dominio su Google Search Console

Senza questo Google scopre il sito a fatica e ci mette settimane. Con questo gli diciamo "esistiamo, vienici a leggere".

### Procedura

**1.** Apri https://search.google.com/search-console loggato con l'account Google di GSM.

**2.** Clicca **"Aggiungi proprietà"** (in alto a sinistra, accanto al nome account).

**3.** Scegli il riquadro **"Dominio"** (sinistra), NON "Prefisso URL".

**4.** Inserisci: `gsmservizi.it` (senza `https://`, senza `www`).

**5.** Google mostrerà un record TXT da aggiungere al DNS, tipo:
```
google-site-verification=AbCdEf123XyZ...
```
Copialo per intero.

**6.** **NON cliccare "Verifica" subito**. Prima va aggiunto al DNS.

### Messaggio da inoltrare al gestore del dominio (Aruba)

Il dominio gsmservizi.it è gestito esternamente da terzi. Copia-incolla in mail/WhatsApp, sostituendo `INCOLLA_QUI_LA_STRINGA` con il valore reale del record TXT.

---

> **Oggetto:** Aggiunta record TXT per verifica Google — dominio gsmservizi.it
>
> Ciao,
> per la verifica della proprietà del dominio su Google Search Console mi serve che aggiungi un record DNS di tipo TXT al dominio **gsmservizi.it** (gestito su Aruba).
>
> **Istruzioni passo passo (pannello Aruba):**
>
> 1. Accedi a https://admin.aruba.it con le credenziali del dominio.
> 2. Vai su **"Il Tuo Account" → "I Tuoi Servizi" → "Domini"**.
> 3. Clicca sul dominio **gsmservizi.it**.
> 4. Apri la sezione **"Gestione DNS"** (oppure "DNS e Server DNS" → "Gestione DNS avanzata").
> 5. Clicca su **"Aggiungi record"** e seleziona tipo **TXT**.
> 6. Compila così:
>    - **Tipo record:** TXT
>    - **Nome host / Sottodominio:** lascia **vuoto** (oppure scrivi `@` se obbligatorio — significa "dominio principale")
>    - **Valore TXT:** `INCOLLA_QUI_LA_STRINGA`
>    - **TTL:** lascia il default (3600 o "Standard")
> 7. **Salva**.
>
> **Importante:**
> - **NON cancellare** altri record TXT eventualmente già presenti (es. SPF posta `v=spf1 ...`) — vanno lasciati invariati, basta aggiungere il nuovo accanto.
> - Il record va sul **dominio principale** (gsmservizi.it), non su un sottodominio.
> - Dopo il salvataggio la propagazione DNS richiede da pochi minuti fino a 24-48h (di solito su Aruba 15-30 min).
>
> Quando hai salvato, fammi un cenno così procedo con la verifica su Google. Grazie!

---

### Dopo che il gestore conferma "fatto"

1. Aspetta **15-30 minuti** (a volte di più — la propagazione DNS non è istantanea).
2. Torna su Search Console e clicca **"Verifica"**.
3. Se compare **"Proprietà verificata"** → step 1 chiuso, procedi a step 2.
4. Se compare **"Verifica non riuscita"** → aspetta altri 30 min e riprova. Se dopo 24h ancora non va, di solito il problema è il "Nome host": prova con `@` invece di vuoto, o viceversa.

---

## STEP 2 — Invio sitemap e richiesta indicizzazione

Una volta verificato il dominio, dici a Google quali pagine guardare.

### Procedura

**1.** Dentro Search Console (sidebar sinistra) → **"Sitemap"**.

**2.** Nel campo "Aggiungi una nuova sitemap" incolla:
```
sitemap.xml
```
Clicca **"Invia"**.

L'URL completo della sitemap è `https://gsmservizi.it/sitemap.xml` — Next.js la genera automaticamente da `app/sitemap.ts`. Verifica che sia raggiungibile aprendola in browser.

**3.** Dopo qualche minuto, lo stato dovrebbe diventare **"Operazione riuscita"** con il numero di URL scoperti.

### Richiesta indicizzazione manuale delle pagine chiave

Per accelerare, chiedi indicizzazione manuale delle pagine più importanti. In Search Console:

1. In alto, **barra di ricerca "Controllo URL"**.
2. Incolla l'URL e premi invio.
3. Quando esce il report, clicca **"Richiedi indicizzazione"**.

Pagine prioritarie da fare una per una (Google permette ~10 richieste/giorno):

- `https://gsmservizi.it/`
- `https://gsmservizi.it/chi-siamo`
- `https://gsmservizi.it/servizi`
- `https://gsmservizi.it/settori`
- `https://gsmservizi.it/contatti`
- `https://gsmservizi.it/zone/commercialista-roma-san-giovanni`
- `https://gsmservizi.it/zone/commercialista-roma-appio-latino`
- `https://gsmservizi.it/settori/farmacie`
- `https://gsmservizi.it/servizi/apertura-partita-iva`
- `https://gsmservizi.it/servizi/consulenza-fiscale-e-tributaria`

Il giorno dopo continui con le altre pagine zone/servizi/settori.

---

## STEP 2-bis — Bing Webmaster Tools

Copre Bing, Yahoo, DuckDuckGo, Ecosia, AOL, Brave. Operazione lampo.

1. Vai su https://www.bing.com/webmasters
2. Login con lo **stesso account Google** usato per Search Console.
3. Clicca **"Importa da Google Search Console"**.
4. Autorizza, seleziona il dominio gsmservizi.it, conferma.
5. Importa automaticamente verifica + sitemap.

Fatto.

---

## STEP 3 — Profilo Google Business

La leva **più grossa** per la ricerca locale. Vi fa apparire nel pacchetto mappa quando uno cerca "commercialista Roma San Giovanni", "commercialista Appio Latino" ecc.

Richiede verifica via cartolina postale (Google manda un codice all'indirizzo dello studio), ci vogliono 7-14 giorni.

### ⚠️ PRIMA di creare la scheda: controlla se esiste già

Google Maps spesso ha già un pin "fantasma" per attività consolidate, generato da dati pubblici (CCIAA, recensioni utenti, ecc.) senza che il titolare lo sappia. **Se crei una nuova scheda mentre ne esiste già una, ti ritrovi 2 pin duplicati allo stesso indirizzo → Google penalizza entrambi**, e rimuoverne uno richiede settimane di ticket al supporto.

**Procedura di verifica preliminare:**

1. Apri https://www.google.com/maps
2. Cerca, una per una:
   - `GSM Servizi Piazza Epiro`
   - `studio commercialisti Piazza Epiro`
   - `Marongiu commercialista Roma San Giovanni`
   - `commercialista Piazza Epiro 16`
3. Se trovi un pin riconducibile (nome simile + indirizzo Piazza Epiro 16/A):
   - **NON creare scheda nuova**
   - Apri il pin, scorri in basso, clicca **"Rivendica questa attività"**
   - Procedi con la verifica (cartolina o telefono)
4. Se non trovi nulla riconducibile → procedi normalmente con la procedura sotto.

### Procedura (se non esiste già)

1. Vai su https://business.google.com con l'account Google di GSM.
2. Clicca **"Aggiungi attività"** → **"Aggiungi una sola attività"**.
3. Inserisci nome (sotto) e prosegui inserendo categoria, indirizzo, telefono, sito, orari (tutto qui sotto).
4. Alla fine, Google chiede la verifica: scegli **"Per posta"** (cartolina con codice). La cartolina arriva in 7-14 giorni a Piazza Epiro 16/A. Quando arriva, codice da inserire su business.google.com → attività verificata.

### Dati base da inserire

- **Nome attività:** `GSM Servizi - Studio Commercialisti`
  - Google vieta keyword stuffing tipo "GSM Servizi Commercialista Roma San Giovanni". Tieni pulito o ti possono sospendere la scheda.
- **Categoria principale:** `Commercialista`
- **Categorie aggiuntive** (massimo 9):
  1. Consulente fiscale
  2. Consulente del lavoro
  3. Servizio di contabilità
  4. Revisore contabile
  5. Studio legale e tributario (se applicabile)
- **Indirizzo:** Piazza Epiro 16/A, 00183 Roma RM
- **Telefono:** da inserire (quello reale, non il placeholder)
- **Sito web:** `https://gsmservizi.it`
- **Orari:**
  - Lunedì: 09:00-18:30
  - Martedì: 09:00-18:30
  - Mercoledì: 09:00-18:30
  - Giovedì: 09:00-18:30
  - Venerdì: 09:00-18:30
  - Sabato: Chiuso
  - Domenica: Chiuso

### Descrizione attività (max 750 caratteri — questa è 720)

Da copiare nel campo "Descrizione attività":

```
GSM Servizi è uno studio di Dottori Commercialisti a Roma, in zona San Giovanni - Appio Latino, a 5 minuti dalla metro A Re di Roma.

Affianchiamo PMI, SRL, farmacie, liberi professionisti (avvocati, medici, architetti) e privati cittadini nei quartieri Appio Latino, San Giovanni, Tuscolano, Re di Roma, Piazza Epiro e Laterano.

Servizi: contabilità e bilancio, apertura partita IVA, regime forfettario, consulenza fiscale e tributaria, consulenza del lavoro e paghe, consulenza societaria, revisione legale, crisi d'impresa, fiscalità internazionale, modello 730, successioni e donazioni.

Primo incontro gratuito. Risposta entro 24 ore lavorative.
```

### Servizi (campo "Servizi", uno per uno)

Aggiungili tutti — Google ci pesca le keyword:

- Tenuta contabilità ordinaria e semplificata
- Redazione bilancio civilistico e fiscale
- Dichiarazione dei redditi (PF, PG, IVA)
- Apertura partita IVA
- Regime forfettario
- Consulenza fiscale e tributaria
- Contenzioso tributario
- Elaborazione cedolini paga
- Consulenza del lavoro
- Costituzione SRL
- Consulenza societaria
- Revisione legale dei conti
- Collegio sindacale
- Crisi d'impresa e composizione negoziata
- Business plan e controllo di gestione
- Successioni e donazioni
- Modello 730
- IMU

### Foto da caricare

Google premia molto le schede con tante foto. Minimo:

1. **Logo** (1:1, alta risoluzione, sfondo trasparente o bianco)
2. **Esterno studio** (insegna, ingresso di Piazza Epiro 16/A) — fondamentale per "vedere" lo studio dalla strada
3. **Interno** (sala riunioni, reception, scrivanie)
4. **Team** (foto di gruppo dei 4 dottori + singole)
5. **Cover** (16:9, immagine d'effetto dello studio o del quartiere)

### Post settimanali (opzionale, molto utile)

GBP permette post stile Facebook. Pubblicarne 1 a settimana fa scalare la scheda. Argomenti: scadenze fiscali ("F24 del 16/06"), novità normative ("Regime forfettario 2026"), chiusure studio (15 agosto), case study clienti.

Quando il profilo è verificato, posso preparare un calendario di 10 post pronti da pubblicare.

---

## STEP 4 — Directory: rivendica le schede esistenti, poi compila le mancanti

**Importante: succede praticamente sempre che PagineGialle, PagineBianche, Cylex, Misterimprese abbiano GIÀ una scheda di GSM Servizi** (a volte più di una, duplicate). Pescano automaticamente dai registri CCIAA e creano schede senza che nessuno le abbia richieste.

**Regola d'oro:** mai creare una scheda nuova se ne esiste già una. Si **rivendica** quella esistente ("Sei il titolare di questa attività?") e si corregge. Creare in parallelo = duplicato = Google si confonde = NAP incoerente = danno SEO.

### 4.A — Audit (1 ora)

Per **ogni** directory (PG, PB, Cylex, Misterimprese, Europages), cerca:

- `GSM Servizi`
- `GSM Servizi Roma`
- `Marongiu commercialista Roma`
- `Gasperini commercialista Roma`
- `Sabatini commercialista Roma`
- `Arangia commercialista Roma`
- `Piazza Epiro commercialista`
- `00183 commercialista`

Apri un foglio Google Sheet con queste colonne:

| Directory | Link scheda | Nome | Indirizzo | Telefono | Categoria | Sito web | Foto | Da rivendicare? | Duplicato? |
|-----------|-------------|------|-----------|----------|-----------|----------|------|-----------------|------------|

Compilalo. È il tuo piano d'azione.

### 4.B — Rivendica scheda (esempio PagineGialle)

1. Sulla scheda trovata, scorri in basso → **"Sei il titolare di questa attività?"** o **"Rivendica la scheda"** (a volte è un'icona piccola)
2. Registra account con `info@gsmservizi.it`
3. Verifica: PG ti chiama al numero in scheda (se è sbagliato, segnala prima l'errore) oppure email PEC
4. Una volta verificato, dal pannello:
   - Correggi nome, indirizzo, telefono → **NAP coerente col sito**
   - **Aggiungi link a https://gsmservizi.it** ← questa è la cosa più importante per SEO
   - Aggiungi categorie corrette
   - Carica le foto del servizio
   - Aggiungi la descrizione (riusa quella di GBP)

Stessa procedura su PagineBianche (stesso login Italiaonline), Cylex, Misterimprese.

### 4.C — Gestione duplicati

Caso tipico: una scheda "GSM Servizi" + una "Studio Marongiu Gasperini" + una "Dott. Marongiu" tutte allo stesso indirizzo con dati diversi.

**Azione:** rivendica quella più completa e corretta, e scrivi al supporto della directory per chiedere chiusura/unificazione delle altre.

**Messaggio tipo da inviare al supporto:**

> Salve,
> sono il titolare dello studio commercialista "GSM Servizi" sito in Piazza Epiro 16/A, 00183 Roma.
> Sul vostro portale sono presenti più schede riferite alla stessa attività con dati parzialmente diversi:
> - Scheda 1: [link]
> - Scheda 2: [link]
> - Scheda 3: [link]
>
> La scheda corretta e da mantenere è la N. [X]. Chiedo cortesemente di **rimuovere o unificare** le altre per evitare informazioni discordanti.
>
> Dati corretti:
> - Ragione sociale: GSM Servizi S.r.l.
> - Nome commerciale: GSM Servizi — Studio Commercialisti
> - Indirizzo: Piazza Epiro 16/A, 00183 Roma RM
> - Telefono: [numero reale]
> - Email: info@gsmservizi.it
> - Sito: https://gsmservizi.it
>
> Resto a disposizione per le verifiche. Grazie.

### 4.D — Schede personali dei soci

Marongiu, Gasperini, Sabatini sono nell'albo ODCEC. Spesso hanno schede personali su PG/Cylex come liberi professionisti, **separate** dallo studio.

**Lasciale stare** (sono i loro profili personali), ma assicurati che ognuna riporti:
- Studio di appartenenza: GSM Servizi
- Indirizzo studio: Piazza Epiro 16/A
- Link al sito: `https://gsmservizi.it`

Così ogni profilo personale rinforza il sito dello studio con un backlink in più. È un assist gratuito.

### 4.E — Top 8 directory dove operare

| # | Directory | URL | Note |
|---|-----------|-----|------|
| 1 | **ODCEC Roma** | www.odcec.roma.it | Albo Ordine Dottori Commercialisti. Marongiu/Gasperini/Sabatini/Arangia sono già iscritti come persone fisiche — verifica che nei loro profili sia indicato lo studio **GSM Servizi** con sito web. Backlink dorato. |
| 2 | **PagineGialle** | www.paginegialle.it | Versione base gratis. Ottimo segnale NAP per Google. |
| 3 | **PagineBianche** | www.paginebianche.it | Gratis, stessa famiglia di PG. |
| 4 | **Europages Italia** | www.europages.it | B2B, autorevole. Profilo gratuito disponibile. |
| 5 | **Cylex Italia** | www.cylex.it | Directory generalista, profilo gratis. |
| 6 | **Misterimprese.it** | www.misterimprese.it | Spider che pesca da CCIAA. Verifica che i dati siano corretti, eventualmente reclama la scheda. |
| 7 | **Trustpilot** | it.trustpilot.com | **Per le recensioni**, non backlink. Le recensioni positive da clienti GSM spostano molto la fiducia. Da attivare quando ci sono 5-10 clienti pronti a recensire. |
| 8 | **Apple Business Connect** | businessconnect.apple.com | Equivalente Apple di Google Business. Copre utenti iPhone (Mappe Apple, Siri). Gratis. |

### Regola d'oro: consistenza NAP

Su **tutte** le directory + GBP + sito, scrivere NAP **identico**:

- **Nome:** `GSM Servizi - Studio Commercialisti`
- **Indirizzo:** `Piazza Epiro 16/A, 00183 Roma RM`
- **Telefono:** `[da confermare]`
- **Sito:** `https://gsmservizi.it`

Una virgola, un trattino o una sigla diversa → Google considera due attività diverse. Stupido ma è così.

### Cosa NON fare

- Iscriversi a directory cinesi/random tipo "Web Directory 2008" → Google le ignora o penalizza
- Pagare servizi "1000 backlink garantiti a 50€" → quasi sempre spam tossico, rischio penalizzazione
- Mettere nomi/indirizzi/telefono diversi su directory diverse → confonde Google e fa male al ranking locale

---

## Checklist progresso (spunta man mano)

### Step 1 — Google Search Console
- [ ] Account Google di GSM identificato
- [ ] Aggiunta proprietà "Dominio" gsmservizi.it
- [ ] Record TXT copiato
- [ ] Messaggio inviato al gestore dominio (Aruba)
- [ ] Gestore conferma salvataggio record
- [ ] Verifica completata su Search Console

### Step 2 — Sitemap e indicizzazione
- [ ] Sitemap.xml inviata
- [ ] Status "Operazione riuscita"
- [ ] Indicizzazione manuale delle 10 pagine prioritarie

### Step 2-bis — Bing
- [ ] Import da Google Search Console completato su bing.com/webmasters

### Step 3 — Google Business Profile
- [ ] Telefono studio raccolto
- [ ] Foto raccolte (logo, esterno, interno, team, cover)
- [ ] Scheda creata con tutti i dati
- [ ] Cartolina di verifica ricevuta e codice inserito
- [ ] Scheda verificata e online

### Step 4 — Directory (audit + rivendica + nuove)

**Audit (4.A):**
- [ ] Foglio Sheet di mappatura creato
- [ ] Cercato GSM Servizi + nomi soci + indirizzo su PG, PB, Cylex, Misterimprese, Europages, Apple Maps
- [ ] Mappato Sheet con tutte le schede trovate (link, dati, da rivendicare sì/no, duplicato sì/no)

**Rivendica/correggi schede esistenti (4.B + 4.C):**
- [ ] PagineGialle — rivendicata e corretta (NAP + link sito + foto + descrizione)
- [ ] PagineBianche — rivendicata e corretta
- [ ] Cylex Italia — rivendicata e corretta
- [ ] Misterimprese — rivendicata e corretta
- [ ] Duplicati segnalati al supporto delle directory dove necessario

**Profili soci ODCEC (4.D):**
- [ ] Marongiu — profilo ODCEC con riferimento studio + link sito
- [ ] Gasperini — profilo ODCEC con riferimento studio + link sito
- [ ] Sabatini — profilo ODCEC con riferimento studio + link sito
- [ ] Arangia — profilo ODCEC con riferimento studio + link sito

**Nuove iscrizioni (4.E — dove la scheda non esiste già):**
- [ ] Europages
- [ ] Apple Business Connect
- [ ] Trustpilot (più avanti, quando ci sono 5-10 clienti pronti a recensire)

### Step 5 — Campagna recensioni Google (target +30 in 4 mesi)
- [ ] GBP rivendicata e configurata (prerequisito)
- [ ] Review short link generato (`g.page/r/XXXXX/review`)
- [ ] Foglio Sheets di tracking creato
- [ ] Lista 75 clienti potenzialmente recensibili (con Marongiu)
- [ ] Settimana 1-4: 5 richieste/settimana inviate
- [ ] Settimana 5-8: 5 richieste/settimana inviate
- [ ] Settimana 9-12: 5 richieste/settimana inviate
- [ ] Settimana 13-16: 5 richieste/settimana inviate
- [ ] Tutte le recensioni ricevute hanno risposta dello studio entro 48h
- [ ] Obiettivo 30 recensioni 4.5+★ raggiunto

### Step 6 — Blog mirato
- [ ] Calendario editoriale 24 articoli/anno definito
- [ ] Autori per ogni articolo assegnati ai 4 soci
- [ ] 6 articoli pubblicati (3 mesi)
- [ ] 12 articoli pubblicati (6 mesi)
- [ ] 24 articoli pubblicati (12 mesi)
- [ ] Pagina "Dicono di noi" con recensioni Google embedded creata (modello Del Fiume)

### Step 7 — Google Business attivo
- [ ] Calendario post GBP settimanali creato
- [ ] 1 post/settimana per primi 3 mesi
- [ ] Nuove foto caricate ogni 2 settimane
- [ ] Q&A precompilate (5-10 domande tipiche)
- [ ] Messaggi diretti risposti entro 24h

### Step 8 — Backlink di qualità (5-7 nel primo anno)
- [ ] Profili soci ODCEC aggiornati con link sito (è anche in step 4.D)
- [ ] Contatto Federfarma Roma per inclusione tra studi consigliati
- [ ] 1 guest post su portale fiscale italiano (fiscoetasse / informazionefiscale / partitaiva)
- [ ] 1 comunicato stampa per evento/ricorrenza inviato a RomaToday / AbitareaRoma
- [ ] Almeno 1 intervista podcast/YouTube settoriale del Marongiu

### Step 9 — Misurazione del funnel
- [ ] Google Analytics 4 installato e configurato
- [ ] Eventi GA4: click telefono, click WhatsApp, invio form
- [ ] Search Console monitorata mensilmente
- [ ] Registro interno consulti gratuiti → clienti firmati
- [ ] Report mensile semplice (3 metriche: visite, lead, clienti)

---

## Tempi realistici (target +5-10 clienti/anno)

### Fase 1 — Fondazione (mese 1-2)
- **Settimana 1:** Step 1 + 2 + 2-bis (Google inizia a indicizzare il sito)
- **Settimana 1-2:** Step 3 avviato (GBP rivendicata pin Studio Marongiu, in attesa eventuale verifica)
- **Settimana 2-4:** Step 4 (audit + rivendica schede directory)

### Fase 2 — Acquisizione segnali (mese 2-5)
- **Mese 2-5:** Step 5 — campagna recensioni Google in pieno regime (5/settimana → 30 totali a fine mese 5)
- **Mese 2-3:** Step 6 inizia — pubblicazione 1 articolo blog ogni 2 settimane
- **Mese 2 in poi:** Step 7 — 1 post GBP/settimana, foto nuove ogni 2 settimane

### Fase 3 — Consolidamento (mese 4-12)
- **Mese 4-6:** prime visibilità su "commercialista appio latino" / "piazza epiro" — pacchetto mappa locale attivo
- **Mese 5-12:** Step 8 — backlink building (1 ogni 2 mesi, qualità >> quantità)
- **Mese 6-12:** Top 3 pacchetto mappa per "commercialista san giovanni" se Step 5 + 7 vengono mantenuti
- **Mese 12:** Step 9 — primo report annuale completo del funnel

### Aspettative oneste
- **Mese 1-3:** non vedrete quasi nulla in classifica. Stiamo seminando.
- **Mese 4-6:** primi click organici (10-50/mese), 1-2 chiamate spontanee/mese dal pacchetto mappa
- **Mese 7-12:** crescita costante. 2-5 lead/mese qualificati. **Primi clienti firmati dal canale online (1-3 nel primo anno).**
- **Anno 2:** consolidamento. **3-8 clienti firmati/anno dal canale online**, in linea con target +5-10/anno.

La SEO non è veloce. Ma è **cumulativa**: il lavoro fatto nei mesi 1-6 produce frutti per anni. Se invece non si fa, non succede mai.

---

## Domande aperte / prossime mosse

**Bloccate dall'attesa risposta Marongiu (vedi `AUDIT-SEO.md`):**
- Struttura legale STP vs SRL → da cui dipende intestazione GBP, footer sito, e tutta la fase di rivendica directory
- Cognome corretto Sabatini ("Vergari" o no?), status Gasperini/Sabatini/Arangia
- Telefono e email ufficiali da finalizzare
- Anni di esperienza sulle farmacie (claim hero homepage)

**Da pianificare quando Step 1-4 completati:**
- Calendario editoriale 24 articoli/anno (titoli + autori + scadenze)
- Calendario post GBP settimanali (52 spunti)
- Strategia recensioni: lista 75 clienti segmentati per dottore di riferimento + settore
- Pagina "Dicono di noi" sul sito (modello Del Fiume) — sviluppo Next.js, da fare quando ci sono 5+ recensioni
