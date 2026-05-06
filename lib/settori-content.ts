/**
 * GSM Servizi — Contenuto editoriale per le pagine /settori/[slug].
 * Ogni voce è UNICA: niente boilerplate riusato. La keyword principale del
 * settore deve comparire in modo naturale in intro e FAQ (Settore.keywords[0]).
 *
 * Nota: i `servicesUsed[]` referenziano slug presenti in `lib/site.ts → servizi`.
 */

export type SettoreContent = {
  intro: string;
  challenges: string[];
  ourApproach: string[];
  servicesUsed: string[];
  faq: { q: string; a: string }[];
};

export const settoriContent: Record<string, SettoreContent> = {
  /* ============================================================
     PMI e SRL — core business dello studio
     ============================================================ */
  "pmi-e-srl": {
    intro:
      "Le piccole e medie imprese romane sono il nucleo storico dei nostri clienti. Da GSM Servizi seguiamo SRL e PMI lungo l'intero ciclo di vita: dalla costituzione alla gestione contabile ordinaria, dal bilancio civilistico al controllo di gestione, fino alle operazioni straordinarie. La differenza la fanno i numeri letti in tempo reale, non a consuntivo: per questo lavoriamo con report mensili che mettono l'imprenditore in condizione di decidere prima.",
    challenges: [
      "Tenuta contabile ordinaria con liquidazioni IVA mensili o trimestrali sempre puntuali.",
      "Redazione del bilancio civilistico secondo OIC e deposito al Registro Imprese nei termini.",
      "Margini visibili in tempo reale: senza un controllo di gestione strutturato l'utile arriva in ritardo.",
      "Gestione del cash flow e dei rapporti bancari (centrale rischi, affidamenti, garanzie).",
      "Valutazione del passaggio da SRL a SRL semplificata, holding o trasformazioni societarie.",
      "Adempimenti ISA, esterometro, dichiarazioni dei redditi SC, IRAP, 770, CU.",
    ],
    ourApproach: [
      "Contabilità tenuta in studio con software cloud accessibile anche dal cliente: niente scatoloni di fatture a fine anno.",
      "Bilancio chiuso entro 90 giorni dall'esercizio, con nota integrativa scritta in italiano comprensibile.",
      "Report mensile di controllo di gestione su misura: P&L gestionale, cash flow, scadenziario, KPI per linea di business.",
      "Pianificazione fiscale anticipata in autunno per ottimizzare imposte e versamenti dell'anno successivo.",
      "Supporto su operazioni straordinarie (cessione quote, fusioni, conferimenti) con un unico interlocutore di studio.",
      "Coordinamento con il consulente del lavoro per paghe, assunzioni e CCNL applicabili.",
    ],
    servicesUsed: [
      "contabilita-e-bilancio",
      "consulenza-fiscale-e-tributaria",
      "consulenza-societaria",
      "consulenza-aziendale-e-controllo-di-gestione",
      "consulenza-del-lavoro-e-paghe",
      "revisione-legale-e-controllo",
    ],
    faq: [
      {
        q: "Cercate un commercialista per PMI a Roma: cosa offre lo studio?",
        a: "Da GSM Servizi seguiamo PMI e SRL romane con un servizio integrato: contabilità ordinaria, bilancio civilistico, dichiarazioni fiscali, paghe coordinate con il consulente del lavoro, controllo di gestione mensile e operazioni straordinarie. Un solo interlocutore di studio per tutta la gestione amministrativa.",
      },
      {
        q: "Il bilancio della SRL viene chiuso e depositato in tempi certi?",
        a: "Sì. Lavoriamo per chiudere il bilancio civilistico entro 90 giorni dalla fine dell'esercizio e depositarlo al Registro Imprese rispettando sempre i termini ordinari (120 giorni dall'assemblea), con nota integrativa redatta in linguaggio chiaro.",
      },
      {
        q: "Fate controllo di gestione anche per piccole SRL?",
        a: "Sì. Adattiamo la profondità del reporting alla dimensione: per una SRL con meno di un milione di fatturato un report mensile sintetico (P&L gestionale, cash flow, scadenziario) è già sufficiente per prendere decisioni informate sui margini.",
      },
      {
        q: "Quanto costa un commercialista per una SRL a Roma?",
        a: "Il costo dipende dal volume contabile, dal numero di dipendenti, dalla complessità del bilancio e dai servizi richiesti. Da GSM Servizi il primo incontro è gratuito e rilasciamo un preventivo annuale chiuso, senza costi a sorpresa.",
      },
      {
        q: "Seguite anche la trasformazione da ditta individuale a SRL?",
        a: "Sì. Valutiamo prima la convenienza fiscale e patrimoniale, redigiamo l'atto con il notaio e curiamo tutta la trafila al Registro Imprese, INPS e Agenzia delle Entrate.",
      },
    ],
  },

  /* ============================================================
     Farmacie — specializzazione storica, KW: commercialista farmacie roma
     ============================================================ */
  farmacie: {
    intro:
      "Il commercialista per farmacie a Roma è una figura specialistica: non basta saper redigere un bilancio, serve conoscere il magazzino farmaceutico, i ristorni, l'ENPAF, i meccanismi del SSN e le valutazioni di cessione di farmacia. Da GSM Servizi seguiamo titolari di farmacia da oltre vent'anni e questo è uno dei nostri settori di specializzazione storica: bilanci, fiscalità, gestione di magazzino, agevolazioni regionali del Lazio, passaggi generazionali e cessioni. La consulenza fiscale farmacie è un mestiere a sé.",
    challenges: [
      "Gestione del magazzino farmaceutico con valorizzazione corretta delle giacenze a fine esercizio (FEFO, scaduti, fascia A/C).",
      "Calcolo dei ristorni Federfarma e dei rimborsi del SSN, con riconciliazione mensile delle DCR.",
      "Contributo ENPAF del titolare farmacista e dei collaboratori iscritti, in aggiunta al regime fiscale ordinario.",
      "Agevolazioni regionali del Lazio per farmacie rurali, sussidiate o a basso fatturato.",
      "Valutazione della farmacia in caso di cessione, conferimento in società di capitali o passaggio generazionale.",
      "Determinazione di IRES e IRAP del titolare, gestione dell'IVA con aliquote multiple (4%, 10%, 22%) e ventilazione corrispettivi.",
      "Adempimenti specifici: registro stupefacenti, NSO per dispositivi medici, tracciabilità del farmaco.",
    ],
    ourApproach: [
      "Bilancio costruito sulle voci tipiche della farmacia: rimanenze farmaceutiche, debiti vs grossisti, ristorni maturati, fondi rischi su scaduti.",
      "Rapporto stretto con il software gestionale della farmacia per importare automaticamente vendite, DCR e movimenti di magazzino.",
      "Controllo mensile dei margini per area (etico, OTC, parafarmaco, dermocosmesi) — non solo l'utile a fine anno.",
      "Assistenza nelle cessioni di farmacia: due diligence contabile, valutazione del valore di avviamento, fiscalità della cessione di azienda.",
      "Coordinamento con ENPAF, Federfarma e ASL Roma 2 per gli adempimenti del titolare e dei collaboratori farmacisti.",
      "Pianificazione fiscale per il titolare: scelta tra ditta individuale, società di persone e SRL, con simulazione IRES/IRAP/IRPEF su tre anni.",
    ],
    servicesUsed: [
      "contabilita-e-bilancio",
      "consulenza-fiscale-e-tributaria",
      "consulenza-aziendale-e-controllo-di-gestione",
      "consulenza-societaria",
      "consulenza-del-lavoro-e-paghe",
      "crisi-d-impresa-e-ristrutturazioni",
    ],
    faq: [
      {
        q: "Perché serve un commercialista farmacie a Roma con esperienza specifica?",
        a: "Una farmacia non è una bottega come le altre: ha aliquote IVA multiple, ristorni Federfarma, contributo ENPAF, registro stupefacenti, magazzino con scadenze, ventilazione corrispettivi e norme regionali. Un commercialista generalista impiega mesi a metterli a fuoco; uno con esperienza specifica li conosce dal primo giorno.",
      },
      {
        q: "Vi occupate della valutazione di una farmacia in vendita?",
        a: "Sì. Da GSM Servizi valutiamo cessioni e acquisizioni di farmacie con metodi misti (reddituale, patrimoniale e dei multipli di settore) e seguiamo l'intera operazione: due diligence contabile, redazione dell'atto con il notaio, fiscalità della cessione d'azienda e passaggio dei dipendenti.",
      },
      {
        q: "Il titolare di farmacia paga ENPAF oltre a IRPEF e contributi INPS?",
        a: "Sì, ogni farmacista iscritto all'Ordine versa il contributo ENPAF (cassa di previdenza dei farmacisti). Lo gestiamo direttamente per il titolare e per gli eventuali collaboratori farmacisti dipendenti, integrandolo con la dichiarazione dei redditi.",
      },
      {
        q: "Conviene trasformare la farmacia individuale in SRL?",
        a: "Dipende dai redditi attesi, dalla composizione patrimoniale e dalla volontà di pianificare il passaggio generazionale. Lo valutiamo con una simulazione IRES/IRAP/IRPEF triennale: in alcuni casi la SRL conviene fiscalmente, in altri la ditta individuale resta più efficiente.",
      },
      {
        q: "Esistono agevolazioni regionali per le farmacie nel Lazio?",
        a: "Sì, esistono agevolazioni specifiche per farmacie rurali, sussidiate e a basso fatturato, oltre a misure regionali periodiche su digitalizzazione e DPC. Le monitoriamo per i nostri clienti e segnaliamo proattivamente i bandi pertinenti.",
      },
      {
        q: "Gestite il passaggio generazionale di una farmacia?",
        a: "Sì. Strutturiamo la cessione o la donazione delle quote/azienda, gestendo le imposte di registro, le agevolazioni per i trasferimenti d'azienda in linea retta e l'eventuale costituzione di una SRL familiare.",
      },
    ],
  },

  /* ============================================================
     Liberi professionisti — avvocati, medici, architetti, ingegneri
     ============================================================ */
  "liberi-professionisti": {
    intro:
      "Avvocati, medici, architetti, ingegneri e consulenti hanno un fisco diverso da quello degli imprenditori: cassa professionale, ritenuta d'acconto, regime forfettario o ordinario, fatturazione elettronica, deducibilità delle spese di studio. Da GSM Servizi siamo il commercialista per liberi professionisti a Roma di chi cerca un riferimento competente sulla previdenza autonoma e sulla gestione fiscale dello studio professionale, sia individuale sia in associazione tra professionisti.",
    challenges: [
      "Scelta tra regime forfettario (5% o 15%) e regime ordinario in base al fatturato e alla deducibilità delle spese.",
      "Gestione delle casse previdenziali specifiche: Cassa Forense (avvocati), ENPAM (medici), Inarcassa (architetti e ingegneri), gestione separata INPS per altri professionisti.",
      "Fatturazione elettronica obbligatoria anche per i forfettari, con corretta gestione del bollo virtuale.",
      "Deducibilità degli ammortamenti dello studio, dei beni strumentali e delle spese di rappresentanza.",
      "Modello Redditi PF con quadro RE (lavoro autonomo) o LM (forfettari), gestione di acconti e saldi IRPEF.",
      "Associazioni tra professionisti, STP e cessione dello studio: scelta della forma giuridica più efficiente.",
    ],
    ourApproach: [
      "Analisi annuale di convenienza forfettario / ordinario con simulazione su due o tre anni — non un calcolo a spanne.",
      "Gestione integrata della cassa professionale: calcolo dei contributi minimi, massimali, riscatti, eventuali rateizzazioni.",
      "Fatturazione elettronica configurata sul gestionale del professionista, con presidio sulle scadenze del bollo.",
      "Modello Redditi e modello unico cassa forense / ENPAM / Inarcassa redatti insieme, in coerenza dei dati.",
      "Consulenza sulla costituzione di STP o associazioni tra professionisti per condividere strutture e collaboratori.",
      "Pianificazione fiscale di fine anno: acquisti deducibili, accantonamenti, scadenza versamenti, rateizzazioni.",
    ],
    servicesUsed: [
      "consulenza-fiscale-e-tributaria",
      "apertura-partita-iva",
      "contabilita-e-bilancio",
      "consulenza-societaria",
      "consulenza-del-lavoro-e-paghe",
      "servizi-a-privati",
    ],
    faq: [
      {
        q: "Sono un libero professionista a Roma: regime forfettario o ordinario?",
        a: "Dipende da fatturato, spese deducibili, contributi alla cassa di categoria e prospettive di crescita. Il forfettario conviene a chi ha pochi costi e fattura sotto i 85.000 euro; l'ordinario torna utile a chi ha studio, collaboratori e ammortamenti significativi. Lo simuliamo prima di scegliere.",
      },
      {
        q: "Vi occupate degli adempimenti con Cassa Forense, ENPAM, Inarcassa?",
        a: "Sì. Gestiamo la dichiarazione e il versamento dei contributi alla cassa di categoria — Cassa Forense per gli avvocati, ENPAM per i medici, Inarcassa per architetti e ingegneri — coordinandoli con la dichiarazione dei redditi.",
      },
      {
        q: "I forfettari devono fare fattura elettronica?",
        a: "Sì, dal 2024 la fatturazione elettronica è obbligatoria anche per i forfettari. Configuriamo il gestionale, gestiamo l'invio allo SdI e presidiamo il calcolo del bollo da 2 euro per le fatture sopra i 77,47 euro.",
      },
      {
        q: "Posso aprire una STP con altri colleghi?",
        a: "Sì. La STP (Società tra Professionisti) è una forma giuridica pensata per associare avvocati, commercialisti, ingegneri o altri professionisti regolamentati. Vi assistiamo nella costituzione, nello statuto e negli adempimenti fiscali e previdenziali della società.",
      },
      {
        q: "Quali spese sono deducibili per un avvocato o un medico?",
        a: "Cancelleria, software gestionali, formazione professionale, abbonamenti, una quota dell'auto, spese di rappresentanza nei limiti, ammortamenti dei beni strumentali e — per chi è in regime ordinario — il canone dello studio. Le tracciamo durante l'anno, non solo in dichiarazione.",
      },
    ],
  },

  /* ============================================================
     Privati e partite IVA individuali
     ============================================================ */
  "privati-e-partite-iva": {
    intro:
      "Il commercialista per privati e partite IVA a Roma serve a togliere lo stress dagli adempimenti annuali: 730, IMU, successioni, ravvedimenti, regime forfettario per chi sta aprendo la propria attività, ditte individuali per artigiani e commercianti. Da GSM Servizi accompagniamo chi non ha bisogno di una struttura aziendale ma di un riferimento puntuale per dichiarazioni, imposte sulla casa e gestione della partita IVA in regime forfettario.",
    challenges: [
      "Modello 730 precompilato: integrazioni, oneri detraibili, spese sanitarie, ristrutturazioni, superbonus residui.",
      "Modello Redditi PF per chi non può presentare il 730 (proprietari di immobili all'estero, redditi diversi, ecc.).",
      "IMU su prime e seconde case: calcolo delle aliquote del Comune di Roma, ravvedimenti, esenzioni.",
      "Successioni e donazioni: dichiarazione di successione, volture catastali, calcolo delle imposte ipotecaria e catastale.",
      "Apertura di una partita IVA in regime forfettario al 5% (start-up) o 15% per chi avvia un'attività individuale.",
      "Ditte individuali: artigiani, commercianti e ambulanti con iscrizione INPS gestione commercianti o artigiani.",
    ],
    ourApproach: [
      "Compilazione del 730 anche con casi complessi: lavoro dipendente più redditi diversi, comodati, locazioni a canone concordato, oneri pluriennali.",
      "Calcolo IMU per ogni immobile posseduto e generazione dell'F24 con scadenze ricordate via email.",
      "Pratica di successione completa: telematica all'Agenzia delle Entrate, volture catastali in automatico, calcolo imposte e quote ereditarie.",
      "Apertura partita IVA forfettaria con simulazione contributi INPS gestione separata o cassa di categoria, già al primo incontro.",
      "Gestione annuale della ditta individuale: dichiarazioni, INPS commercianti/artigiani, F24, spesometro se applicabile.",
      "Ravvedimenti operosi per omissioni passate, con sanzioni ridotte e regolarizzazione spontanea.",
    ],
    servicesUsed: [
      "servizi-a-privati",
      "apertura-partita-iva",
      "consulenza-fiscale-e-tributaria",
      "contabilita-e-bilancio",
    ],
    faq: [
      {
        q: "Posso fare il 730 da voi anche se sono solo lavoratore dipendente?",
        a: "Certamente. Il 730 è uno dei nostri servizi base per privati: ti aiutiamo a recuperare detrazioni e crediti d'imposta (spese sanitarie, ristrutturazioni, mutui, scuola, sport per i figli), in studio o tutto a distanza con upload dei documenti.",
      },
      {
        q: "Sto per aprire partita IVA in forfettario: cosa devo sapere?",
        a: "Devi scegliere il codice ATECO corretto, valutare la cassa previdenziale (gestione separata INPS o cassa di categoria), preparare la SCIA se l'attività lo richiede, attivare la fatturazione elettronica. Lo facciamo in un solo incontro e ti consegniamo la PI già operativa.",
      },
      {
        q: "Gestite la dichiarazione di successione a Roma?",
        a: "Sì. Predisponiamo la successione telematica all'Agenzia delle Entrate, calcoliamo le imposte ipotecaria, catastale e di successione, eseguiamo le volture catastali e ti consegniamo il prospetto delle quote ereditarie.",
      },
      {
        q: "Calcolate l'IMU per chi ha più immobili?",
        a: "Sì. Calcoliamo l'IMU su tutti gli immobili posseduti applicando le aliquote del Comune di Roma o del Comune dove si trova l'immobile, generiamo l'F24 e ti ricordiamo via email le scadenze di acconto e saldo.",
      },
      {
        q: "Ho dimenticato di pagare un'imposta: posso ancora rimediare?",
        a: "Sì, con il ravvedimento operoso. Più tempestivo è il ravvedimento, minore è la sanzione. Calcoliamo imposta, interessi e sanzione ridotta e generiamo l'F24 da pagare.",
      },
    ],
  },
};
