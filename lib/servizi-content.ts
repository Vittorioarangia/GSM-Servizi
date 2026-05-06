/**
 * GSM Servizi — contenuto esteso per ognuno dei 10 servizi.
 *
 * Questa mappa estende le voci di `servizi` in `lib/site.ts` con il copy
 * lungo richiesto dalle pagine /servizi/[slug]. Il contenuto è plain text
 * (no markdown), in italiano professionale; gli a-capo nei paragrafi sono
 * gestiti con `\n\n` e renderizzati lato pagina come `<p>` separati.
 */

export type ServizioContent = {
  /** 2-3 paragrafi di intro, separati da "\n\n". */
  intro: string;
  /** 6-10 sotto-servizi puntuali (frasi brevi, senza punto finale). */
  bullets: string[];
  /** 5-7 Q&A specifiche del servizio. */
  faq: { q: string; a: string }[];
  /** Micro-CTA contestuale al fondo della pagina. */
  cta: { title: string; sub: string };
};

export const serviziContent: Record<string, ServizioContent> = {
  /* ----------------------------------------------------------------
     1. Contabilità e bilancio
     ---------------------------------------------------------------- */
  "contabilita-e-bilancio": {
    intro:
      "Tenere la contabilità in ordine non è solo un obbligo di legge: è la base su cui poggia ogni decisione importante della tua attività. Da GSM Servizi ci occupiamo della contabilità ordinaria e semplificata di imprese, professionisti e società con un metodo strutturato, scadenze monitorate e un referente diretto per ogni cliente.\n\nRedigiamo bilanci civilistici e fiscali in linea con i principi contabili nazionali, gestiamo le dichiarazioni dei redditi (Modelli PF, SP, SC, ENC), IRAP, 770, CU e tutti gli adempimenti periodici (liquidazioni IVA, esterometro, Intrastat, ISA). Lo facciamo in maniera trasparente, con report leggibili e un confronto programmato a fine anno per spiegarti i numeri, non solo per consegnarli.\n\nLavoriamo in studio a Roma San Giovanni, ma seguiamo i clienti anche in modalità digitale: documenti contabili acquisiti via gestionale, bilanci condivisi in cloud, scadenziario sempre aggiornato.",
    bullets: [
      "Tenuta contabilità ordinaria e semplificata",
      "Redazione bilancio civilistico e fiscale",
      "Liquidazioni IVA periodiche (mensili o trimestrali)",
      "Modelli Redditi PF, SP, SC, ENC e dichiarazione IRAP",
      "Modello 770, CU e adempimenti sostituto d'imposta",
      "ISA e Indici Sintetici di Affidabilità",
      "Esterometro, Intrastat e LIPE",
      "Deposito bilancio al Registro Imprese",
      "Riclassificazione bilancio e analisi per indici",
    ],
    faq: [
      {
        q: "Qual è la differenza tra contabilità ordinaria e semplificata?",
        a: "La contabilità semplificata è riservata a imprese individuali e società di persone sotto determinate soglie di ricavi (400.000 € per servizi, 700.000 € per altre attività). L'ordinaria è obbligatoria per società di capitali e per chi supera quelle soglie. La differenza pratica è negli obblighi di tenuta dei libri e nel grado di analiticità del bilancio: in sede di consulenza valutiamo qual è il regime più conveniente per il tuo caso.",
      },
      {
        q: "Quando scade il deposito del bilancio al Registro Imprese?",
        a: "Per le società di capitali con esercizio coincidente con l'anno solare, il bilancio va approvato entro 120 giorni dalla chiusura (di norma il 30 aprile) e depositato entro 30 giorni dall'approvazione. Esistono casi in cui è ammesso il maggior termine di 180 giorni: lo verifichiamo insieme allo statuto.",
      },
      {
        q: "Posso tenere io la contabilità e farvela controllare a fine anno?",
        a: "Sì, è una formula che adottiamo con clienti che usano gestionali in autonomia (ditte individuali, micro SRL, professionisti). Concordiamo controlli trimestrali e una revisione di chiusura prima del bilancio, con un fee dedicato più contenuto rispetto alla tenuta full.",
      },
      {
        q: "Inviate voi i Modelli Redditi e l'F24 in scadenza?",
        a: "Sì. Predisponiamo le dichiarazioni, ti invitiamo in studio (o in videocall) per la revisione e l'autorizzazione, poi trasmettiamo telematicamente al fisco. Gli F24 vengono caricati nel cassetto fiscale o inviati via Entratel secondo le tue preferenze.",
      },
      {
        q: "Che gestionale usate?",
        a: "Lavoriamo principalmente con TeamSystem e Profis, e ci interfacciamo con i principali software di fatturazione elettronica usati dai clienti (Fatture in Cloud, Aruba, Fattura24, TS Studio). Se hai già un gestionale, valutiamo l'integrazione invece di farti cambiare strumento.",
      },
      {
        q: "Cosa succede se ricevo un avviso bonario o una comunicazione di irregolarità?",
        a: "Ce lo giri appena lo ricevi. Verifichiamo se l'irregolarità è fondata, predisponiamo la risposta e, se serve, gestiamo il ravvedimento operoso o la rateizzazione. Nei casi più complessi attiviamo il servizio di contenzioso tributario.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla tua contabilità?",
      sub: "Analizziamo la tua situazione attuale e ti diciamo come possiamo migliorarla. Senza impegno, in studio o in videocall.",
    },
  },

  /* ----------------------------------------------------------------
     2. Consulenza fiscale e tributaria
     ---------------------------------------------------------------- */
  "consulenza-fiscale-e-tributaria": {
    intro:
      "La consulenza fiscale è il cuore del lavoro del commercialista: significa pianificare le scelte dell'impresa o del professionista in modo da rispettare le norme tributarie e, allo stesso tempo, ridurre il carico fiscale entro i limiti che la legge consente.\n\nDa GSM Servizi affianchiamo titolari di partita IVA, società e privati nella scelta del regime fiscale più adatto, nella gestione di imposte dirette e indirette, nella risposta a verifiche fiscali e nel contenzioso tributario. Seguiamo da anni anche il regime forfettario e il Concordato Preventivo Biennale, due strumenti che richiedono una valutazione caso per caso e un monitoraggio annuale dei requisiti.\n\nIl nostro approccio è preventivo: ci sediamo accanto al cliente prima delle scadenze, non dopo gli avvisi. Quando arriva una comunicazione dall'Agenzia delle Entrate, ti diciamo subito se è fondata, quanto costa correggerla e quali sono le tue opzioni difensive.",
    bullets: [
      "Pianificazione fiscale annuale e pluriennale",
      "Valutazione e gestione del regime forfettario",
      "Concordato Preventivo Biennale (CPB)",
      "Imposte dirette: IRPEF, IRES, IRAP",
      "Imposte indirette: IVA, registro, bollo, ipotecaria",
      "Interpelli all'Agenzia delle Entrate",
      "Ravvedimento operoso e definizione agevolata",
      "Contenzioso tributario in tutti i gradi di giudizio",
      "Assistenza in verifiche fiscali e accertamenti",
    ],
    faq: [
      {
        q: "Quanto costa il regime forfettario?",
        a: "L'imposta sostitutiva è del 15% (5% per i primi cinque anni di attività, se rispetti i requisiti di start up). Si applica al reddito calcolato come ricavi per coefficiente di redditività, quindi non sui ricavi pieni. Il limite di ricavi/compensi per restare in forfettario è di 85.000 € annui. In consulenza ti facciamo la simulazione esatta sul tuo codice ATECO.",
      },
      {
        q: "Quando conviene uscire dal regime forfettario?",
        a: "In genere quando i costi deducibili reali superano in modo strutturale il coefficiente di redditività forfettario, oppure quando si avvicina la soglia degli 85.000 €. È una valutazione che richiede di proiettare ricavi e costi su due-tre anni: la facciamo in sede di pianificazione, prima che la scelta diventi obbligata.",
      },
      {
        q: "Conviene aderire al Concordato Preventivo Biennale?",
        a: "Dipende. Il CPB blocca il reddito imponibile per due anni a un valore proposto dall'Agenzia delle Entrate sulla base degli ISA. Conviene se prevedi un reddito superiore alla proposta o se cerchi stabilità e protezione da accertamenti. Non conviene se ti aspetti un calo di fatturato o se gli ISA ti propongono un valore già alto. Confrontiamo numeri tuoi e proposta CPB prima di decidere.",
      },
      {
        q: "Ho ricevuto un accertamento dall'Agenzia delle Entrate. Cosa posso fare?",
        a: "Le opzioni sono accertamento con adesione, ricorso entro 60 giorni, definizione agevolata o pagamento. La scelta dipende dal merito e dall'importo. Da GSM Servizi analizziamo la pretesa, valutiamo la solidità delle motivazioni dell'ufficio e ti proponiamo la strategia con un costo stimato per ognuna delle vie possibili.",
      },
      {
        q: "Posso fare ravvedimento operoso anche dopo che mi è arrivato un avviso?",
        a: "Sì, ma solo finché non viene notificato un atto impositivo o un avviso bonario non risulta da pagare. Le sanzioni si riducono in funzione del tempo trascorso dalla violazione: prima si interviene, meno si paga. La quantificazione la facciamo nel calendario annuale dei controlli interni.",
      },
      {
        q: "Cos'è un interpello e quando ha senso presentarlo?",
        a: "L'interpello è un'istanza all'Agenzia delle Entrate per ottenere un parere vincolante su come applicare una norma fiscale a un caso concreto. Ha senso quando l'operazione è rilevante e la norma ammette interpretazioni divergenti. Tempi: 90-120 giorni. Lo prepariamo nei casi di operazioni straordinarie, agevolazioni e regimi speciali.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla tua fiscalità?",
      sub: "Analizziamo regime, imposte e scadenze del tuo caso e ti diciamo dove puoi ottimizzare. Senza impegno.",
    },
  },

  /* ----------------------------------------------------------------
     3. Apertura partita IVA
     ---------------------------------------------------------------- */
  "apertura-partita-iva": {
    intro:
      "Aprire una partita IVA è un passaggio rapido sulla carta — bastano pochi giorni — ma le scelte che fai in questa fase ti accompagneranno per anni: regime fiscale, codice ATECO, forma giuridica, cassa previdenziale. Una scelta sbagliata si paga con tasse più alte o con vincoli che limitano la crescita.\n\nDa GSM Servizi ti seguiamo dal primo incontro fino al rilascio del numero di partita IVA: simuliamo i diversi regimi fiscali sul tuo caso reale, scegliamo insieme la forma giuridica (ditta individuale, SRL, SRL semplificata, studio associato), gestiamo le iscrizioni a Registro Imprese, INPS, INAIL, Camera di Commercio e l'eventuale SCIA al Comune.\n\nLa pratica è gratuita per il cliente che ci affida la consulenza continuativa nel primo anno. Il primo incontro è sempre gratuito: ti diciamo cosa serve, quanto costerà, e in quanto tempo sarai operativo.",
    bullets: [
      "Scelta del regime fiscale (forfettario, ordinario, semplificato)",
      "Scelta della forma giuridica (impresa individuale, SRL, SRLS, SAS, SNC)",
      "Apertura partita IVA all'Agenzia delle Entrate",
      "Iscrizione al Registro Imprese e REA",
      "Iscrizione INPS (gestione separata, artigiani, commercianti)",
      "Iscrizione INAIL e posizione assicurativa",
      "Pratica SCIA al Comune (per attività che la richiedono)",
      "Configurazione fatturazione elettronica e cassetto fiscale",
      "Business plan iniziale e proiezione fiscale 12-24 mesi",
    ],
    faq: [
      {
        q: "Quanto tempo serve per aprire la partita IVA?",
        a: "Nei casi standard la partita IVA viene rilasciata in 1-3 giorni lavorativi dalla trasmissione del modello AA9/AA7. Per le società di capitali (SRL, SRLS) servono 7-10 giorni perché va atto pubblico dal notaio e iscrizione al Registro Imprese. Le iscrizioni INPS e INAIL viaggiano in parallelo.",
      },
      {
        q: "Posso aprire la partita IVA in giornata?",
        a: "Per ditta individuale e libero professionista sì, è possibile in giornata se ci portate documento e codice fiscale entro la mattina e l'attività non richiede SCIA o autorizzazioni speciali. Per SRL e SRLS no, perché serve il rogito notarile.",
      },
      {
        q: "Quanto costa aprire una partita IVA?",
        a: "Per ditta individuale o professionista in forfettario il costo della pratica è contenuto: la tariffa standard di studio è di 150-250 € + diritti, e da GSM è gratuita se ci affidi la gestione contabile per il primo anno. Per una SRL i costi includono notaio (1.500-2.000 €), bolli, diritti camerali e l'eventuale capitale sociale: budget tipico 2.500-3.500 € chiavi in mano.",
      },
      {
        q: "Conviene il regime forfettario o l'ordinario al primo anno?",
        a: "Quasi sempre il forfettario, se rispetti i requisiti: ricavi attesi sotto 85.000 €, no partecipazioni rilevanti, no rapporto di lavoro prevalente con un solo committente che è anche tuo ex datore. Per i primi cinque anni l'imposta sostitutiva può scendere al 5%. Facciamo la simulazione confrontando i due regimi sul tuo conto economico previsto.",
      },
      {
        q: "Devo iscrivermi alla Camera di Commercio?",
        a: "Sì se sei impresa (ditta individuale commerciale, artigiana, società). No se sei libero professionista iscritto a un Albo (avvocato, medico, ingegnere, architetto). Per i forfettari professionisti senza Albo dipende dal codice ATECO: lo verifichiamo in fase di apertura.",
      },
      {
        q: "Posso aprire la partita IVA mentre sono dipendente?",
        a: "Sì, salvo divieti contrattuali del datore o incompatibilità (es. dipendenti pubblici con vincoli). La partita IVA da dipendente è frequente per attività secondarie, consulenze, e-commerce. Va valutato l'aspetto INPS: se sei dipendente, la gestione separata su redditi di partita IVA si calcola con aliquota ridotta.",
      },
    ],
    cta: {
      title: "Vuoi aprire partita IVA con un parere gratuito?",
      sub: "In 30 minuti ti diciamo regime, costi, tempi e iscrizioni necessarie sul tuo caso reale. Senza impegno.",
    },
  },

  /* ----------------------------------------------------------------
     4. Consulenza del lavoro e paghe
     ---------------------------------------------------------------- */
  "consulenza-del-lavoro-e-paghe": {
    intro:
      "Gestire il personale è un'attività che richiede competenze trasversali: contrattualistica, paghe, contributi, sicurezza, normativa CCNL. Lo studio GSM Servizi gestisce internamente l'elaborazione paghe e l'intera consulenza del lavoro, dall'assunzione del primo dipendente fino alla gestione di organici strutturati.\n\nElaboriamo cedolini puntuali entro il giorno concordato, gestiamo UniEMens, F24, autoliquidazione INAIL, certificazioni uniche e tutti gli adempimenti annuali. Ti affianchiamo nella scelta del CCNL applicabile, nella stesura della lettera di assunzione, nella gestione di dimissioni, licenziamenti, TFR e provvedimenti disciplinari.\n\nLavoriamo anche su rapporti atipici (co.co.co., partita IVA, sportivi dilettantistici, stage e tirocini), un'area dove l'errore di inquadramento costa caro in sede ispettiva. La nostra consulenza è preventiva: ti diciamo prima quali sono le forme contrattuali sostenibili, non dopo che le hai già attivate.",
    bullets: [
      "Elaborazione cedolini paga mensili",
      "UniEMens e denunce contributive INPS",
      "F24 contributivo e fiscale, autoliquidazione INAIL",
      "Assunzioni, proroghe, trasformazioni e cessazioni",
      "Calcolo TFR, ferie, permessi, straordinari",
      "Scelta e applicazione del CCNL",
      "Gestione co.co.co., partita IVA, sportivi dilettantistici",
      "Stage, tirocini, apprendistato",
      "Provvedimenti disciplinari, dimissioni e licenziamenti",
      "Certificazione Unica (CU) e Modello 770",
    ],
    faq: [
      {
        q: "Quanto costa elaborare un cedolino?",
        a: "La tariffa per cedolino dipende dal numero di dipendenti e dalla complessità del CCNL. Indicativamente per una piccola impresa 25-40 € a cedolino, con scaglioni decrescenti oltre i 5 dipendenti. La quota copre cedolino, UniEMens, F24, gestione presenze e adempimenti annuali. Preventivo trasparente prima di iniziare.",
      },
      {
        q: "Entro quando ricevo i cedolini ogni mese?",
        a: "Concordiamo un giorno fisso del mese (di solito tra il 27 e il 29) per la chiusura presenze, e consegniamo cedolini e F24 entro il giorno 5 del mese successivo. In modo che tu abbia margine per il pagamento entro il 16, scadenza standard contributi.",
      },
      {
        q: "Quale CCNL devo applicare?",
        a: "Dipende dall'attività prevalente dell'azienda, non dalla mansione del singolo. Per un'azienda di servizi può essere Commercio o Terziario; per un'attività di ristorazione, Pubblici Esercizi; per uno studio professionale, Studi Professionali. La scelta sbagliata espone a verifiche INPS e ispezioni: la valutiamo all'apertura della posizione.",
      },
      {
        q: "Posso assumere con un contratto a termine?",
        a: "Sì, ma con i limiti del Decreto Lavoro: durata massima 12 mesi liberi, fino a 24 mesi con causale. Le proroghe e i rinnovi seguono regole rigorose. Per evitare conversioni automatiche a tempo indeterminato (con costi alti) ti predisponiamo la lettera con la causale corretta.",
      },
      {
        q: "Un dipendente si è dimesso. Cosa devo fare?",
        a: "Le dimissioni vanno presentate dal lavoratore esclusivamente in modalità telematica (modulo INPS) tranne casi specifici. Tu devi comunicare la cessazione al Centro per l'Impiego entro 5 giorni e calcolare le competenze finali (ultima retribuzione, ratei ferie/permessi, TFR). Gestiamo l'intera procedura.",
      },
      {
        q: "Mi conviene assumere o usare collaboratori a partita IVA?",
        a: "La forma giusta dipende dalla natura del rapporto: se c'è subordinazione (orari, postazione, etero-direzione) il rapporto è di lavoro dipendente, indipendentemente da quello che firmate. Le partite IVA mascherate sono uno dei rilievi più frequenti delle ispezioni del lavoro. In consulenza facciamo un check di tutti i tuoi rapporti collaborativi.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla gestione del personale?",
      sub: "Cedolini, contratti, CCNL: analizziamo la tua situazione e ti diciamo come ottimizzarla. Senza impegno.",
    },
  },

  /* ----------------------------------------------------------------
     5. Consulenza societaria
     ---------------------------------------------------------------- */
  "consulenza-societaria": {
    intro:
      "La struttura societaria è uno strumento, non un obbligo: scegliere bene la forma e mantenerla coerente nel tempo significa proteggere il patrimonio personale, ottimizzare il carico fiscale e rendere l'azienda trasferibile a terzi o ai figli senza traumi.\n\nDa GSM Servizi ti accompagniamo in tutte le fasi della vita societaria: costituzione di SRL, SRL semplificate, società di persone e holding di famiglia; modifiche statutarie; operazioni straordinarie come fusioni, scissioni, conferimenti, trasformazioni; cessioni di quote e cessioni d'azienda; liquidazioni volontarie. Lavoriamo in stretto contatto con notai di fiducia per ridurre passaggi e tempi.\n\nUna parte importante della nostra attività è la pianificazione del passaggio generazionale tramite holding di famiglia: una struttura che, ben costruita, riduce significativamente il carico fiscale sui dividendi e protegge il controllo sull'azienda operativa.",
    bullets: [
      "Costituzione SRL, SRLS, SNC, SAS, società semplici",
      "Modifiche statutarie e dell'oggetto sociale",
      "Fusioni, scissioni, conferimenti, trasformazioni",
      "Cessione e acquisizione di quote societarie",
      "Cessione e affitto d'azienda",
      "Liquidazioni volontarie e cancellazioni",
      "Patti parasociali e accordi tra soci",
      "Holding di famiglia e pianificazione generazionale",
      "Verbali assembleari e libri sociali",
      "Adempimenti antiriciclaggio e titolare effettivo",
    ],
    faq: [
      {
        q: "Mi conviene la SRL o la ditta individuale?",
        a: "La SRL conviene quando il reddito imponibile annuo supera stabilmente i 60.000-70.000 €, quando vuoi proteggere il patrimonio personale, quando hai più soci o quando prevedi di vendere o conferire l'attività in futuro. Sotto certi livelli di utile la ditta individuale resta più economica e più semplice. La valutazione la facciamo con simulazione su tre anni di proiezione.",
      },
      {
        q: "Quanto costa costituire una SRL?",
        a: "Costo chiavi in mano in zona Roma: 2.500-3.500 € comprensivi di parcella notarile (1.500-2.000 €), bolli, diritti di iscrizione al Registro Imprese, vidimazione libri sociali. Capitale sociale minimo 1 €, ma sotto 10.000 € il versamento è interamente in contanti e servono accantonamenti utili a riserva legale fino al raggiungimento dei 10.000 €.",
      },
      {
        q: "Cos'è una holding di famiglia e quando serve?",
        a: "È una società che detiene le quote di una o più società operative, posseduta a sua volta dai membri della famiglia. Permette di tassare i dividendi al 1,2% (invece dell'IRPEF/IRES piena), di consolidare risorse, di gestire il passaggio generazionale e di proteggere il controllo. Si giustifica quando la società operativa genera utili distribuibili stabili e quando esiste una visione pluriennale.",
      },
      {
        q: "Voglio vendere la mia società. Da dove inizio?",
        a: "Si inizia con una valutazione d'azienda (per fissare l'aspettativa di prezzo), una due diligence preparatoria (per identificare e correggere criticità prima della vendita) e la scelta della struttura: cessione di quote, cessione di azienda, conferimento. Le tre opzioni hanno trattamenti fiscali molto diversi. Da GSM seguiamo l'intero processo, dalla preparazione al rogito.",
      },
      {
        q: "Sono il socio unico di una SRL. Devo nominare il sindaco?",
        a: "L'obbligo di organo di controllo per le SRL scatta superando per due esercizi consecutivi due dei seguenti limiti: attivo 4 mln, ricavi 4 mln, dipendenti 20. Sotto soglia non è obbligatorio. Sopra soglia bisogna nominare un sindaco unico o un revisore: lo studio gestisce sia la nomina sia, dove serve, l'incarico di revisione.",
      },
      {
        q: "Quanto tempo serve per cedere quote di SRL?",
        a: "Atto notarile in 5-10 giorni dall'incarico, iscrizione al Registro Imprese in altri 3-5 giorni. Se la cessione comporta cambio di compagine rilevante può servire una due diligence preliminare di 3-4 settimane. La pianificazione fiscale (regime di tassazione plusvalenza, eventuale rivalutazione) va impostata prima dell'atto.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito su un'operazione societaria?",
      sub: "Costituzione, cessione, holding di famiglia: analizziamo il tuo caso e ti proponiamo la struttura più adatta.",
    },
  },

  /* ----------------------------------------------------------------
     6. Revisione legale e controllo
     ---------------------------------------------------------------- */
  "revisione-legale-e-controllo": {
    intro:
      "La revisione legale dei conti e gli incarichi di sindaco sono attività riservate a professionisti iscritti al Registro dei Revisori Legali tenuto dal MEF. Da GSM Servizi disponiamo internamente di Revisori Legali iscritti, in primis la Dott.ssa Maria Cristina Arangia, e operiamo con un metodo conforme ai principi di revisione internazionali (ISA Italia).\n\nAccettiamo incarichi di revisione legale dei conti per SRL e SPA che superano le soglie di legge, per consorzi, fondazioni e altri enti soggetti al controllo. Gestiamo anche audit volontari per PMI che vogliono certificare il bilancio per ragioni bancarie, di vendita o di partecipazione a gare.\n\nFacciamo parte di collegi sindacali e di organismi di vigilanza. Lavoriamo con un calendario di verifiche trimestrali, una sola revisione annuale finale e una relazione che dialoga davvero con l'imprenditore — senza linguaggio iperformale fine a sé stesso.",
    bullets: [
      "Revisione legale dei conti (DLgs 39/2010)",
      "Sindaco unico in SRL e SPA",
      "Componente di collegio sindacale",
      "Audit volontario per PMI",
      "Verifiche periodiche trimestrali",
      "Relazione di revisione e giudizio sul bilancio",
      "Pareri di conformità e attestazioni",
      "Vigilanza ex art. 2403 c.c.",
      "Componente di Organismo di Vigilanza (D.Lgs 231/2001)",
    ],
    faq: [
      {
        q: "Quando è obbligatoria la revisione legale per una SRL?",
        a: "L'obbligo di nomina di un organo di controllo o di un revisore scatta per le SRL che superano per due esercizi consecutivi due dei seguenti limiti: attivo dello stato patrimoniale 4 mln di euro, ricavi 4 mln, dipendenti medi 20. Decade quando i limiti non sono superati per tre esercizi consecutivi. Va inserita la nomina nello statuto e iscritta al Registro Imprese.",
      },
      {
        q: "Qual è la differenza tra sindaco unico e revisore?",
        a: "Il sindaco unico vigila sull'osservanza della legge e dello statuto e può anche svolgere la revisione legale, se l'atto costitutivo lo prevede ed è iscritto al Registro dei Revisori. Il revisore svolge solo il controllo contabile (giudizio sul bilancio). Il collegio sindacale è la versione collegiale (3 membri) del sindaco unico. La scelta dipende dallo statuto e dalle dimensioni.",
      },
      {
        q: "Quanto costa un incarico di revisione legale?",
        a: "I compensi dipendono da dimensioni, complessità e settore. Per una SRL piccola appena entrata in obbligo si parte tipicamente da 4.000-6.000 €/anno; per realtà più strutturate il fee sale in proporzione a fatturato e ore stimate. Il preventivo viene formalizzato prima dell'accettazione, in coerenza con i principi di etica professionale.",
      },
      {
        q: "Posso fare revisione e tenuta contabilità con lo stesso studio?",
        a: "No. Il principio di indipendenza vieta al revisore di tenere la contabilità del soggetto revisionato. Se siamo i tuoi commercialisti, non possiamo essere anche i tuoi revisori, e viceversa. È una garanzia di terzietà che la legge impone.",
      },
      {
        q: "Cosa fa il revisore durante l'anno?",
        a: "Le attività si distribuiscono tra verifiche periodiche (cassa, banche, IVA, contributi, fatture trimestrali), pianificazione del lavoro, test sui processi, controlli sul bilancio finale, redazione della relazione. L'output ufficiale è la relazione di revisione che accompagna il bilancio in assemblea.",
      },
      {
        q: "Ho bisogno di certificare il bilancio per la banca, ma non sono in obbligo di revisione. Cosa propone GSM?",
        a: "Si tratta di audit volontario: un incarico facoltativo di revisione del bilancio, finalizzato a dare maggiore credibilità ai dati verso banche, investitori o controparti. Costo molto più contenuto della revisione obbligatoria, durata 2-4 settimane. Lo facciamo regolarmente per PMI in fase di richiesta finanziamento.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito su revisione e controllo?",
      sub: "Verifichiamo se sei in obbligo, valutiamo l'incarico e ti proponiamo un piano di lavoro su misura.",
    },
  },

  /* ----------------------------------------------------------------
     7. Consulenza aziendale e controllo di gestione
     ---------------------------------------------------------------- */
  "consulenza-aziendale-e-controllo-di-gestione": {
    intro:
      "Avere il bilancio a posto a fine anno non basta per guidare un'impresa: serve sapere mese per mese se si sta guadagnando, su quali prodotti, con quali clienti, e quanta cassa rimane. Il controllo di gestione fa esattamente questo — trasforma i dati contabili in informazioni utili per decidere.\n\nDa GSM Servizi affianchiamo PMI e studi professionali nella costruzione di un sistema di reporting su misura: budget annuale, forecast trimestrale, conto economico per linea di business, KPI operativi e finanziari, dashboard di controllo. Non installiamo software costosi: usiamo i dati del tuo gestionale e li trasformiamo in report leggibili che diventano la base degli incontri periodici di direzione.\n\nFacciamo anche valutazioni d'azienda (per cessioni, ingressi di soci, divisioni patrimoniali), due diligence buy-side e sell-side, e supporto nella stesura di business plan per banche, soci e investitori.",
    bullets: [
      "Business plan triennali e quinquennali",
      "Budget annuale e forecast rolling",
      "Reporting direzionale mensile o trimestrale",
      "Definizione e monitoraggio KPI finanziari e operativi",
      "Analisi di bilancio per indici e flussi",
      "Conto economico per linea di business o cliente",
      "Valutazione d'azienda con metodi reddituali, finanziari, patrimoniali",
      "Due diligence buy-side e sell-side",
      "Pianificazione finanziaria e gestione cassa",
    ],
    faq: [
      {
        q: "Cos'è il controllo di gestione e a chi serve davvero?",
        a: "È un sistema di rilevazione e reporting che misura i risultati economici e finanziari su periodi più brevi del bilancio annuale (mese, trimestre). Serve a tutte le imprese che hanno superato la fase iniziale e che hanno più di una linea di prodotto, più clienti significativi o più di 5-10 dipendenti. Sotto questa dimensione spesso bastano un budget semplice e un controllo cassa.",
      },
      {
        q: "Quanto costa avviare un controllo di gestione?",
        a: "Il setup iniziale (definizione modello, prima reportistica, formazione) costa tipicamente 3.000-8.000 € una tantum a seconda della complessità. La gestione continuativa (chiusura mensile, report direzionale, incontro mensile) parte da 400-800 €/mese. Va calibrato sul valore informativo che riesce a generare: senza un'utilità decisionale concreta è solo costo.",
      },
      {
        q: "Mi serve un business plan per la banca. Cosa fate?",
        a: "Predisponiamo business plan economico-finanziari triennali con conto economico, stato patrimoniale e cash flow proiettati, analisi di scenario, indicatori bancabili (DSCR, leverage, autonomia finanziaria) e una sezione narrativa coerente con i numeri. Coordiniamo la presentazione con la banca quando richiesto. Tempi: 2-4 settimane.",
      },
      {
        q: "Quanto vale la mia azienda?",
        a: "Una valutazione professionale richiede metodi multipli: reddituale (valore attuale dei redditi futuri), finanziario (DCF), patrimoniale, dei multipli di mercato. Il valore finale è una forchetta. Per una PMI media servono 2-4 settimane di lavoro e l'output è una perizia firmata utilizzabile in negoziazione, in atto, in tribunale o davanti al fisco.",
      },
      {
        q: "Cos'è una due diligence e quando va fatta?",
        a: "È l'analisi approfondita di un'azienda target prima di acquisirla (buy-side) o di metterla in vendita (sell-side). Coperture tipiche: contabile, fiscale, lavoro, legale, commerciale. La buy-side serve a verificare che il prezzo sia giustificato; la sell-side a preparare il dossier per i compratori e anticipare obiezioni. Tempi: 4-8 settimane.",
      },
      {
        q: "Posso avere un report mensile semplice, senza un sistema complicato?",
        a: "Sì. Per piccole realtà costruiamo un report di una pagina con: ricavi, margine, costi fissi principali, EBITDA, cassa, DSO clienti, magazzino. Si aggiorna in 2 ore al mese a partire dai dati gestionali. È spesso il modo migliore di iniziare prima di passare a sistemi più sofisticati.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito su controllo di gestione o valutazione?",
      sub: "Un'ora di analisi della tua situazione e una proposta concreta di intervento. Senza impegno.",
    },
  },

  /* ----------------------------------------------------------------
     8. Crisi d'impresa e ristrutturazioni
     ---------------------------------------------------------------- */
  "crisi-d-impresa-e-ristrutturazioni": {
    intro:
      "Il Codice della Crisi d'Impresa e dell'Insolvenza (D.Lgs 14/2019) ha cambiato l'approccio alla difficoltà aziendale: dalla gestione tardiva del fallimento alla prevenzione tempestiva attraverso strumenti di allerta e composizione negoziata. Chi si attiva presto ha più strumenti, più margine di trattativa e maggiori probabilità di salvare l'azienda.\n\nDa GSM Servizi affianchiamo imprenditori in tensione finanziaria per impostare un piano di risanamento credibile: analisi della situazione, redazione del piano, accesso alla composizione negoziata della crisi, gestione della trattativa con creditori e banche, supporto in concordato preventivo o piani attestati di risanamento.\n\nÈ un'area in cui il tempo è la variabile decisiva. Quando ci troviamo davanti a tensione di cassa, debiti fiscali rilevanti o una banca che chiede rientri, la prima cosa che facciamo è una diagnosi rapida: capire se siamo in crisi reversibile o in insolvenza, e da quella valutazione costruire la strategia.",
    bullets: [
      "Diagnosi della crisi e analisi di sostenibilità",
      "Composizione negoziata della crisi",
      "Concordato preventivo (in continuità o liquidatorio)",
      "Piani attestati di risanamento (art. 56 CCII)",
      "Accordi di ristrutturazione dei debiti",
      "Procedure liquidatorie volontarie",
      "Liquidazione giudiziale (ex fallimento)",
      "Trattative con banche, fornitori e Agenzia delle Entrate",
      "Esdebitazione e sovraindebitamento",
    ],
    faq: [
      {
        q: "Come capisco se la mia impresa è in crisi?",
        a: "Il Codice della Crisi indica indici concreti: DSCR a 6 mesi inferiore a 1, capitale circolante netto negativo, debiti scaduti rilevanti verso fisco, INPS o dipendenti. In pratica: se in 6 mesi non riesci a coprire le scadenze con il flusso di cassa atteso, sei in crisi. La diagnosi precoce è il primo strumento che attiviamo.",
      },
      {
        q: "Cos'è la composizione negoziata della crisi?",
        a: "È uno strumento volontario, riservato e fuori dal tribunale, in cui un esperto indipendente nominato dalla CCIAA accompagna l'imprenditore nella trattativa con i creditori per trovare un accordo di risanamento. Dura 6 mesi prorogabili, sospende le azioni esecutive su richiesta, non comporta spossessamento. È spesso la prima opzione da valutare.",
      },
      {
        q: "Quando conviene il concordato preventivo invece di altre procedure?",
        a: "Il concordato preventivo conviene quando: i creditori sono molti e disomogenei, serve una protezione legale forte da azioni esecutive, c'è un piano di continuità aziendale credibile o una liquidazione ordinata che dà più ai creditori del fallimento. È più costoso e formale della composizione negoziata, ma offre protezione e cogenza maggiori.",
      },
      {
        q: "Cosa rischio personalmente se la SRL fallisce?",
        a: "Di base la responsabilità del socio di SRL è limitata al capitale conferito. Però rispondi personalmente per: debiti garantiti con fideiussione personale (frequenti con le banche), ritenute non versate come amministratore, eventuali bancarotte semplici o fraudolente. La pianificazione delle azioni di amministratore in fase critica è fondamentale per non perdere quella protezione.",
      },
      {
        q: "Posso ancora trattare con l'Agenzia delle Entrate dei debiti scaduti?",
        a: "Sì, anche in fase di crisi. Strumenti tipici: rateizzazione ordinaria (fino a 72 rate, in casi gravi 120), transazione fiscale dentro composizione negoziata o concordato, definizioni agevolate quando previste per legge. Spesso il fisco è la voce di debito più importante e va gestita per prima nella strategia di ristrutturazione.",
      },
      {
        q: "Quanto tempo serve per attivare una composizione negoziata?",
        a: "Dalla decisione operativa alla nomina dell'esperto da parte della CCIAA passano in genere 2-3 settimane: il tempo di predisporre il dossier (situazione patrimoniale, elenco creditori, piano provvisorio, documentazione bancaria) e di presentare istanza. Da subito si possono richiedere misure protettive che congelano le azioni esecutive.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla tua situazione?",
      sub: "Diagnosi rapida e riservata, prime opzioni concrete sul tavolo. Massima riservatezza, nessun impegno.",
    },
  },

  /* ----------------------------------------------------------------
     9. Fiscalità internazionale
     ---------------------------------------------------------------- */
  "fiscalita-internazionale": {
    intro:
      "La fiscalità internazionale è l'area che più si è trasformata negli ultimi anni: scambio automatico di informazioni tra Stati, regole anti-abuso, BEPS, regime degli impatriati, nuova residenza fiscale. Per chi vive, lavora o investe oltre confine, sbagliare la dichiarazione vuol dire esporsi a sanzioni significative e a doppia imposizione.\n\nDa GSM Servizi assistiamo persone fisiche e imprese su questioni internazionali: stabili organizzazioni di società estere in Italia e di società italiane all'estero, applicazione dei trattati contro le doppie imposizioni, regime degli impatriati per chi rientra in Italia, monitoraggio fiscale (RW), residenza fiscale e trasferimenti.\n\nLavoriamo con corrispondenti in diverse giurisdizioni europee per coordinare obblighi multipli. L'approccio è preventivo: prima si imposta correttamente la struttura, dopo si difende a fatica.",
    bullets: [
      "Regime degli impatriati e dei lavoratori rientrati",
      "Determinazione e cambio della residenza fiscale",
      "Stabili organizzazioni di società estere in Italia",
      "Stabili organizzazioni di società italiane all'estero",
      "Applicazione delle convenzioni contro le doppie imposizioni",
      "Monitoraggio fiscale e quadro RW",
      "Tassazione di redditi esteri (lavoro, pensione, dividendi, capital gain)",
      "Transfer pricing per gruppi multinazionali",
      "Voluntary disclosure e regolarizzazioni",
    ],
    faq: [
      {
        q: "Sono rientrato in Italia dall'estero. Posso avere il regime impatriati?",
        a: "Il nuovo regime (dal 2024) prevede una detassazione del 50% del reddito di lavoro fino a 600.000 €/anno per cinque anni, condizionato al non essere stato residente in Italia nei tre periodi precedenti, all'impegno a restare almeno quattro anni e ad alcuni requisiti professionali (laurea o specializzazione). Ogni caso va valutato sulla situazione specifica.",
      },
      {
        q: "Sono iscritto AIRE ma vivo parte dell'anno in Italia. Sono fiscalmente residente?",
        a: "L'iscrizione AIRE non basta: la residenza fiscale italiana scatta se per più di 183 giorni hai in Italia residenza anagrafica, domicilio (centro principale di affari e interessi) o presenza fisica. La verifica è sostanziale e ogni caso va analizzato. Con paesi a tassazione bassa la verifica del fisco è più stringente.",
      },
      {
        q: "Devo dichiarare un conto corrente all'estero?",
        a: "Sì, va indicato nel quadro RW della dichiarazione dei redditi se sei residente fiscale in Italia. L'omissione comporta sanzioni dal 3% al 30% del valore dell'attività non dichiarata (fino al 60% se in paese non collaborativo). Il quadro RW va compilato anche se non ci sono redditi prodotti, solo per il monitoraggio.",
      },
      {
        q: "Lavoro per un'azienda estera ma vivo in Italia. Come pago le tasse?",
        a: "Se sei residente fiscale in Italia, il reddito da lavoro dipendente estero è imponibile in Italia, salvo quanto previsto dalla convenzione con il paese di lavoro. Spesso vale la regola dei 183 giorni e dell'esistenza di stabile organizzazione. Va verificato anche l'assoggettamento INPS (regolamenti UE o accordi bilaterali). La scelta della struttura corretta (dipendente, partita IVA, employer of record) impatta nettamente sul netto.",
      },
      {
        q: "Cos'è una stabile organizzazione e quando si configura?",
        a: "È una sede fissa di affari attraverso cui un'impresa estera svolge attività economica in un altro Stato. Si configura per presenza fisica (ufficio, magazzino, cantiere oltre certi mesi) o per agente dipendente. Se una società estera ha stabile in Italia, paga le imposte italiane sui redditi attribuibili a quella sede. È una delle aree di contenzioso internazionale più frequenti.",
      },
      {
        q: "Vorrei trasferirmi in Portogallo o Spagna. Quando interrompo la residenza italiana?",
        a: "La residenza fiscale italiana cessa quando, in un anno solare, non si superano 183 giorni di presenza/residenza/domicilio. Per essere a posto: cancellazione anagrafica e iscrizione AIRE, trasferimento effettivo della famiglia e degli interessi, attivazione delle utenze nel nuovo paese. Il fisco analizza la sostanza, non solo i moduli. Lo pianifichiamo insieme su un orizzonte di 12-18 mesi.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla tua situazione internazionale?",
      sub: "Residenza, redditi esteri, impatriati: analizziamo il tuo caso e ti diciamo come metterti in regola.",
    },
  },

  /* ----------------------------------------------------------------
     10. Servizi a privati
     ---------------------------------------------------------------- */
  "servizi-a-privati": {
    intro:
      "Non serve avere una partita IVA per aver bisogno di un commercialista: il privato cittadino si trova ogni anno davanti a dichiarazioni dei redditi, IMU, eredità, donazioni, conguagli per detrazioni e bonus. E quando arriva una comunicazione dal fisco, capire se è corretta richiede competenze precise.\n\nDa GSM Servizi seguiamo i privati su tutto l'arco degli adempimenti fiscali: Modello 730 con deduzioni, detrazioni e bonus aggiornati anno per anno, Modello Redditi PF per chi ha redditi da locazione o all'estero, calcoli IMU, pratiche di successione e dichiarazioni, donazioni, ravvedimenti, gestione di cartelle e avvisi.\n\nLavoriamo con orari ampi nei mesi delle scadenze (maggio-luglio per il 730, settembre-novembre per i Redditi), accogliamo i clienti in studio o in videocall, e teniamo memoria storica delle pratiche per evitare ai clienti di ripetere ogni anno gli stessi documenti.",
    bullets: [
      "Modello 730 (lavoratori dipendenti e pensionati)",
      "Modello Redditi PF (locazioni, redditi esteri, regime forfettario)",
      "Calcolo e versamento IMU, TASI, TARI",
      "Pratiche di successione e dichiarazione di successione",
      "Donazioni e atti di trasferimento patrimoniale",
      "Bonus edilizi: superbonus, ristrutturazione, ecobonus, mobili",
      "Ravvedimento operoso e sanatorie per privati",
      "Gestione cartelle esattoriali e rateizzazioni",
      "Visure catastali, planimetrie, volture",
      "Pareri su detrazioni e ottimizzazione fiscale familiare",
    ],
    faq: [
      {
        q: "Quanto costa fare il 730 da voi?",
        a: "Per un 730 standard (lavoratore dipendente o pensionato, senza casi particolari) la tariffa è di 60-90 €. Sale se ci sono detrazioni complesse (bonus edilizi pluriennali, eredità, redditi all'estero, familiari a carico complessi). Prima preventivo, poi lavorazione. Da maggio a luglio teniamo aperture pomeridiane dedicate.",
      },
      {
        q: "Devo dichiarare l'eredità ricevuta?",
        a: "La dichiarazione di successione va presentata entro 12 mesi dalla data del decesso, salvo casi di esonero (es. eredità di importo modesto tra parenti stretti senza immobili). Imposta di successione: aliquote agevolate (4% per coniuge e figli con franchigia 1 mln, 6% per fratelli con franchigia 100.000 €, 8% per altri). Gestiamo l'intera pratica, dal recupero documenti alla voltura catastale.",
      },
      {
        q: "Ho una casa locata. 730 o Modello Redditi?",
        a: "Se sei dipendente o pensionato e i tuoi redditi rientrano negli schemi del 730, puoi usare il 730 anche con redditi da locazione, scegliendo cedolare secca o tassazione ordinaria. Se la situazione si complica (immobili all'estero, plusvalenze, partita IVA in parallelo) si passa al Modello Redditi. Lo decidiamo in sede di raccolta documenti.",
      },
      {
        q: "Mi è arrivata una cartella di pagamento. Cosa posso fare?",
        a: "Le opzioni sono: pagamento integrale, rateizzazione (fino a 72 rate, 120 in casi di grave difficoltà), ricorso entro 60 giorni se la cartella è errata o prescritta, richiesta di sospensione. Va analizzata la natura del debito (fiscale, contributivo, multe), la prescrizione, eventuali sanatorie. Massima 5-10 giorni dalla notifica per non perdere termini.",
      },
      {
        q: "Quanto vale il superbonus o gli altri bonus edilizi nel 2026?",
        a: "Il superbonus è in fase di chiusura con percentuali ridotte e ambiti molto ristretti. Restano attivi il bonus ristrutturazione 50%, l'ecobonus 65%, il bonus mobili e altri strumenti più tradizionali. Le regole cambiano ogni anno con la legge di bilancio: ti facciamo il quadro aggiornato sul tuo caso prima di iniziare i lavori.",
      },
      {
        q: "Posso donare un immobile a mio figlio? Quanto costa?",
        a: "Sì. La donazione tra genitori e figli ha franchigia di 1 mln di euro per beneficiario; sopra la franchigia si applica il 4%. A questo si aggiungono imposta ipotecaria (2%) e catastale (1%) sul valore catastale dell'immobile. Esistono agevolazioni prima casa anche in donazione. Tempi: 3-4 settimane, atto notarile. Pianifichiamo insieme l'aspetto fiscale e successorio.",
      },
    ],
    cta: {
      title: "Vuoi un parere gratuito sulla tua dichiarazione o successione?",
      sub: "30 minuti per inquadrare la pratica, capire i tempi e ricevere un preventivo trasparente. Senza impegno.",
    },
  },
};
