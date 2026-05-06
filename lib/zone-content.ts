/**
 * GSM Servizi — Contenuto editoriale per le pagine /zone/[slug].
 * Local SEO core: ogni voce è UNICA per evitare il duplicate-content che Google
 * penalizza sui cluster geografici. Cita riferimenti reali del quartiere
 * (basiliche, mercati, parchi, fermate metro/tram) e mantiene la keyword
 * principale (Zone.keywords[0]) in modo naturale nell'intro.
 */

export type ZoneContent = {
  intro: string;
  walkingDirections: string;
  landmarks: string[];
  whyHere: string[];
  faq: { q: string; a: string }[];
};

export const zoneContent: Record<string, ZoneContent> = {
  /* ============================================================
     San Giovanni — Tier 1 KW: commercialista roma san giovanni
     ============================================================ */
  "commercialista-roma-san-giovanni": {
    intro:
      "Cerchi un commercialista a Roma San Giovanni? Il nostro studio è a pochi minuti dalla Basilica di San Giovanni in Laterano, sul lato dell'Appio Latino: una posizione comoda per imprenditori, professionisti e residenti del quartiere. San Giovanni è uno dei poli commerciali più vivi del centro storico romano, con via Appia Nuova, via La Spezia e l'asse di via Sannio che generano ogni anno nuove aperture di partita IVA, esercizi commerciali e attività professionali. Lavorare con uno studio del quartiere significa avere un riferimento vicino quando serve passare in studio per una firma, un chiarimento, un confronto sulla dichiarazione. Non solo videocall: anche presenza, quando conta. Da GSM Servizi seguiamo molte realtà di San Giovanni — negozi, ambulatori, studi professionali e SRL del quadrante — e questa prossimità si traduce in tempi di risposta brevi e conoscenza diretta del tessuto commerciale del rione.",
    walkingDirections:
      "Dalla fermata Metro A San Giovanni si raggiunge lo studio in circa 8-10 minuti a piedi attraversando piazzale Appio e proseguendo verso via Cesare Baronio. In alternativa la linea tram 3 e la 8 fermano a pochi isolati, e i bus 87 e 218 collegano direttamente l'area di San Giovanni con Piazza Epiro.",
    landmarks: [
      "Basilica di San Giovanni in Laterano",
      "Mura Aureliane e Porta San Giovanni",
      "Via Sannio (mercato e shopping)",
      "Piazza di Porta San Giovanni",
      "Scala Santa e Sancta Sanctorum",
    ],
    whyHere: [
      "Studio raggiungibile a piedi dalla basilica e dal piazzale di San Giovanni: niente traffico, niente parcheggio.",
      "Conoscenza diretta del tessuto commerciale di via Appia Nuova, via La Spezia e via Sannio.",
      "Coordinamento con i notai e gli avvocati della zona per cessioni di azienda, locazioni e successioni.",
      "Disponibilità a ricevere su appuntamento nella stessa giornata per emergenze fiscali del quadrante.",
    ],
    faq: [
      {
        q: "Quanto dista il vostro studio dalla metro San Giovanni?",
        a: "Lo studio è a circa 8-10 minuti a piedi dalla fermata Metro A San Giovanni, attraversando piazzale Appio in direzione Appio Latino. Servito anche dai tram 3 e 8 e dai bus 87 e 218.",
      },
      {
        q: "Cerco un commercialista a Roma San Giovanni per un negozio: vi occupate di partite IVA commerciali?",
        a: "Sì. Seguiamo molti commercianti del quadrante San Giovanni con apertura partita IVA, contabilità, dichiarazioni IVA, gestione INPS commercianti e adempimenti SCIA al Municipio Roma VII.",
      },
      {
        q: "Ricevete su appuntamento o è possibile passare senza?",
        a: "Riceviamo su appuntamento dal lunedì al venerdì 9:00-18:30. Per le emergenze fiscali (notifiche AdE, ravvedimenti urgenti) cerchiamo di riservare lo stesso giorno una finestra a chi è già nostro cliente.",
      },
      {
        q: "Sono titolare di uno studio professionale a San Giovanni: gestite anche la cassa di categoria?",
        a: "Sì. Gestiamo Cassa Forense, ENPAM, Inarcassa, gestione separata INPS in coerenza con la dichiarazione dei redditi del professionista. Molti dei nostri clienti hanno studio nel quartiere San Giovanni.",
      },
      {
        q: "Lavorate anche per i residenti del quartiere che hanno solo bisogno del 730?",
        a: "Certamente. Il 730 e la dichiarazione di successione sono servizi che offriamo anche ai privati residenti a San Giovanni e Laterano, in studio o totalmente da remoto con scambio digitale dei documenti.",
      },
    ],
  },

  /* ============================================================
     Appio Latino — sede operativa
     ============================================================ */
  "commercialista-roma-appio-latino": {
    intro:
      "Lo studio GSM Servizi ha sede operativa proprio nel quartiere Appio Latino, a Roma. Per chi cerca un commercialista a Roma Appio Latino siamo lo studio di prossimità: lavoriamo accanto al Mercato di Piazza Epiro, in una zona residenziale e commerciale che ospita PMI, studi professionali, farmacie storiche e una rete fitta di esercizi di vicinato. L'Appio Latino è uno dei rioni più riconoscibili del quadrante sud-est: tranquillo, ben servito dalla metro A, con un tessuto sociale stabile fatto di famiglie, professionisti e piccoli imprenditori che cercano un consulente con cui costruire un rapporto duraturo. Conosciamo le strade, conosciamo i clienti per nome, e questo si traduce in una consulenza più calibrata sulle reali esigenze dell'imprenditore o del professionista del quartiere.",
    walkingDirections:
      "Lo studio è il punto centrale del quartiere Appio Latino: dalla Metro A Re di Roma sono circa 7 minuti a piedi lungo via Magna Grecia, dalla Metro A Furio Camillo circa 10 minuti via via Macedonia. I bus 85, 87 e 218 attraversano il quartiere e fermano vicino allo studio.",
    landmarks: [
      "Mercato di Piazza Epiro",
      "Parco della Caffarella (accesso da via Macedonia)",
      "Mura Aureliane e Porta Latina",
      "Via Magna Grecia",
      "Chiesa di Santa Maria Ausiliatrice",
    ],
    whyHere: [
      "Sede operativa nel quartiere: non un recapito, ma lo studio dove si lavora ogni giorno.",
      "Vicinanza fisica al Mercato di Piazza Epiro e al tessuto di esercenti dell'Appio Latino.",
      "Pronti a ricevere clienti, fornitori e collaboratori senza richiedere lunghi spostamenti.",
      "Network consolidato con notai, avvocati e consulenti del lavoro del Municipio VII.",
    ],
    faq: [
      {
        q: "Lo studio si trova davvero nell'Appio Latino?",
        a: "Sì, la sede operativa di GSM Servizi è nel cuore del quartiere Appio Latino, a Roma, accanto al Mercato di Piazza Epiro. È il nostro quartiere di lavoro quotidiano, non un recapito secondario.",
      },
      {
        q: "Quali servizi offrite alle attività commerciali dell'Appio Latino?",
        a: "Apertura partita IVA, contabilità ordinaria e semplificata, dichiarazioni dei redditi, paghe, gestione INPS commercianti e artigiani, consulenza fiscale e operazioni straordinarie. Seguiamo bar, ristoranti, parrucchieri, farmacie e studi professionali del quartiere.",
      },
      {
        q: "Avete esperienza con le farmacie dell'Appio Latino?",
        a: "Sì, le farmacie sono uno dei settori storici dello studio. Conosciamo le specificità del comparto farmaceutico — magazzino, ristorni, ENPAF, ventilazione corrispettivi — e seguiamo titolari di farmacia anche al di fuori del quartiere.",
      },
      {
        q: "Lavorate anche con clienti che vivono fuori dall'Appio Latino?",
        a: "Sì. La sede è nel quartiere, ma molti clienti ci raggiungono dal Tuscolano, da Re di Roma, da San Giovanni e dal Laterano. Per chi non può venire in studio offriamo videocall e scambio documenti totalmente digitale.",
      },
      {
        q: "Il primo incontro è gratuito anche per i residenti dell'Appio Latino?",
        a: "Sì, il primo incontro conoscitivo è sempre gratuito, in studio o in videocall. È l'occasione per capire le tue esigenze e per rilasciarti un preventivo trasparente prima di iniziare.",
      },
    ],
  },

  /* ============================================================
     Piazza Epiro — KW: commercialista piazza epiro
     ============================================================ */
  "commercialista-roma-piazza-epiro": {
    intro:
      "Cerchi un commercialista a Piazza Epiro? Lo studio GSM Servizi è proprio qui: a pochi passi dal Mercato di Piazza Epiro, lo storico mercato rionale dell'Appio Latino. Piazza Epiro è il fulcro sociale e commerciale del quartiere: un mercato attivo da decenni, banchi di alimentari, fioristi, ferramenta, una piazza che la mattina è punto di incontro per i residenti e per gli esercenti del quadrante. Lavorare a Piazza Epiro significa avere un commercialista che conosce direttamente i banchi del mercato, gli ambulanti, i locali della piazza, il tessuto di artigiani e commercianti che fa l'identità di questa parte di Roma. Per chi ha un'attività in Piazza Epiro o nelle vie limitrofe — via Macedonia, via Albalonga, via Magna Grecia — siamo lo studio del quartiere a portata di pochi passi.",
    walkingDirections:
      "Lo studio è a pochi passi da Piazza Epiro. Dalla Metro A Re di Roma si raggiunge in circa 5 minuti a piedi seguendo via Magna Grecia in direzione del mercato. Il bus 85 ferma all'angolo della piazza e collega Piazza Epiro al centro storico.",
    landmarks: [
      "Mercato di Piazza Epiro",
      "Via Albalonga (asse commerciale del rione)",
      "Via Macedonia",
      "Chiesa di San Saturnino",
      "Parco della Caffarella (ingresso ovest)",
    ],
    whyHere: [
      "Studio a pochi passi dalla piazza e dal mercato — il rione è il nostro ufficio quotidiano.",
      "Esperienza diretta con commercianti, ambulanti e artigiani del Mercato di Piazza Epiro.",
      "Apertura nuove partite IVA con SCIA al Municipio VII e iscrizione INPS commercianti.",
      "Disponibilità a uscire dallo studio per consegne urgenti di documentazione tra Piazza Epiro e dintorni.",
    ],
    faq: [
      {
        q: "Avete esperienza con i commercianti del Mercato di Piazza Epiro?",
        a: "Sì. Siamo lo studio del quartiere e seguiamo da anni esercenti, banchi del mercato e artigiani della zona di Piazza Epiro: apertura partita IVA, contabilità semplificata, dichiarazioni IVA, gestione INPS commercianti, F24 e SCIA al Municipio Roma VII.",
      },
      {
        q: "Lo studio è raggiungibile dalla Metro A?",
        a: "Sì, dalla Metro A Re di Roma siamo a circa 5 minuti a piedi. È la fermata di riferimento per chi viene dal centro o dai quartieri serviti dalla linea.",
      },
      {
        q: "Posso passare in studio velocemente per una firma?",
        a: "Sì. Essendo il quartiere il nostro luogo di lavoro, riusciamo spesso a far passare i clienti del rione anche per pratiche brevi (firme, ritiro documenti, consegna F24) senza appuntamento esteso, previa una telefonata di coordinamento.",
      },
      {
        q: "Aprite partite IVA per ambulanti e banchi del mercato?",
        a: "Sì. Apertura partita IVA, scelta codice ATECO corretto per ambulanti alimentari o non alimentari, iscrizione INPS gestione commercianti, SCIA al Municipio VII e fatturazione elettronica configurata sul gestionale.",
      },
      {
        q: "Lavorate anche con i bar e i ristoranti della zona di Piazza Epiro?",
        a: "Sì. La ristorazione di prossimità è ben rappresentata tra i nostri clienti: contabilità, paghe, gestione corrispettivi telematici, IVA con aliquote multiple e adempimenti HACCP coordinati con consulenti di fiducia.",
      },
    ],
  },

  /* ============================================================
     Re di Roma — KW: commercialista roma re di roma
     ============================================================ */
  "commercialista-roma-re-di-roma": {
    intro:
      "Cerchi un commercialista a Roma Re di Roma? Il nostro studio è a circa 7 minuti a piedi dalla Piazza Re di Roma, una delle piazze più riconoscibili dell'Appio Latino, dotata di fermata della Metro A e snodo di linee bus che collegano il quartiere all'Esquilino, all'Aventino e al Tuscolano. Re di Roma è una zona dinamica, densa di studi professionali, palazzine storiche, attività di ristorazione e piccolo commercio: una platea di clienti che spesso ha bisogno di un commercialista vicino, raggiungibile a piedi durante la pausa pranzo o tra un appuntamento e l'altro. Lavorare con uno studio del quartiere consente proprio questo: organizzare un incontro veloce senza dover prenotare mezza giornata di trasferimenti, e avere un riferimento per le pratiche urgenti della zona di Re di Roma.",
    walkingDirections:
      "Dalla fermata Metro A Re di Roma sono circa 7 minuti a piedi lungo via Magna Grecia in direzione dell'Appio Latino. La piazza è anche servita dal tram 3 e da diverse linee bus che la collegano direttamente con San Giovanni e con la stazione Termini.",
    landmarks: [
      "Piazza Re di Roma e fermata Metro A",
      "Via Appia Nuova",
      "Mura Aureliane (tratto di Porta Asinaria)",
      "Via Magna Grecia",
      "Mercato di Piazza Epiro (a pochi minuti)",
    ],
    whyHere: [
      "Vicinanza alla fermata Metro A Re di Roma: punto di incontro comodo per chi viene da fuori quartiere.",
      "Esperienza con studi professionali della zona — avvocati, medici, ingegneri, architetti.",
      "Tempi di risposta brevi su pratiche urgenti del quadrante (notifiche, ravvedimenti, F24).",
      "Coordinamento con notai e consulenti di fiducia della zona di via Appia Nuova.",
    ],
    faq: [
      {
        q: "Quanto dista il vostro studio dalla Metro A Re di Roma?",
        a: "Circa 7 minuti a piedi lungo via Magna Grecia in direzione dell'Appio Latino. È una passeggiata breve in un quartiere a basso traffico pedonale, comoda anche per chi viene da fuori Roma in metro.",
      },
      {
        q: "Vicino a Re di Roma ci sono molti studi legali e medici: lavorate anche con loro?",
        a: "Sì, è uno dei nostri verticali. Seguiamo avvocati, medici, ingegneri e architetti con regime forfettario o ordinario, gestione delle casse di categoria (Cassa Forense, ENPAM, Inarcassa), fatturazione elettronica e dichiarazione dei redditi.",
      },
      {
        q: "Posso aprire una partita IVA da voi se lavoro nella zona di Re di Roma?",
        a: "Sì, apriamo partite IVA per nuovi professionisti e commercianti del quadrante Re di Roma in un solo incontro: scelta del codice ATECO, regime fiscale, iscrizione previdenziale, fatturazione elettronica e SCIA al Municipio VII se necessaria.",
      },
      {
        q: "Lo studio è raggiungibile anche con la macchina?",
        a: "Sì, ma l'area di Re di Roma e Appio Latino ha sosta a pagamento. Consigliamo la metro o i mezzi: chi viene da fuori Roma può posteggiare nei parcheggi di scambio della Metro A e proseguire fino a Re di Roma.",
      },
      {
        q: "Avete esperienza con le palazzine storiche della zona — gestione condominiale e successioni immobiliari?",
        a: "Sì. Seguiamo successioni immobiliari, calcolo IMU su seconde case e immobili a reddito, dichiarazione dei redditi da locazione (cedolare secca e ordinaria) per molti residenti delle palazzine di Re di Roma e dell'Appio Latino.",
      },
    ],
  },

  /* ============================================================
     Tuscolano — KW: commercialista roma tuscolano
     ============================================================ */
  "commercialista-roma-tuscolano": {
    intro:
      "Cerchi un commercialista a Roma Tuscolano? Lo studio GSM Servizi è facilmente raggiungibile dal quartiere Tuscolano, uno dei rioni più popolosi e vivaci del quadrante sud-est della Capitale, con un tessuto fitto di piccole e medie imprese, commercio di prossimità e migliaia di partite IVA. Il Tuscolano si estende lungo l'Appia Nuova fino al Quadraro e alla Cinecittà, attraversato dalla Metro A che lo collega in pochi minuti all'Appio Latino dove abbiamo sede. Per chi ha un'attività in zona — un negozio su via Tuscolana, uno studio professionale a Furio Camillo, una SRL operativa nei pressi del Quadraro — siamo lo studio di riferimento accessibile in metro o tram in pochi minuti, senza dover affrontare il traffico del centro.",
    walkingDirections:
      "Dalla Metro A Furio Camillo si raggiunge lo studio in circa 10 minuti a piedi tagliando per le traverse interne dell'Appio Latino. In alternativa la Metro A Ponte Lungo dista una sola fermata ed è collegata via tram 8 con il quadrante. Per chi viene dal Tuscolano alto la combinazione metro + 7 minuti a piedi è la soluzione più rapida.",
    landmarks: [
      "Via Tuscolana (asse commerciale)",
      "Piazza dei Re di Roma (punto di passaggio)",
      "Cinecittà e gli storici Studi del cinema italiano",
      "Quartiere del Quadraro",
      "Parco degli Acquedotti (Tuscolano sud)",
    ],
    whyHere: [
      "Una sola fermata di metro divide molte zone del Tuscolano dallo studio: spostamenti rapidi.",
      "Conoscenza del tessuto di PMI e commercianti del Tuscolano e del Quadraro.",
      "Esperienza con attività della filiera audiovisiva legate al polo di Cinecittà.",
      "Servizio di consulenza online totale per chi non vuole spostarsi dal Tuscolano.",
    ],
    faq: [
      {
        q: "Vivo al Tuscolano: come raggiungo lo studio in metro?",
        a: "Dal Tuscolano è sufficiente prendere la Metro A in direzione Battistini e scendere a Furio Camillo o a Re di Roma. Da entrambe le fermate si arriva allo studio in 7-10 minuti a piedi.",
      },
      {
        q: "Lavorate con commercianti e PMI del Tuscolano?",
        a: "Sì. Seguiamo commercianti, artigiani e SRL del Tuscolano e del Quadraro con contabilità, dichiarazioni, paghe e consulenza fiscale. La metro A rende il quadrante facilmente raggiungibile.",
      },
      {
        q: "Avete clienti nel mondo del cinema o dell'audiovisivo legati a Cinecittà?",
        a: "Sì. Il polo di Cinecittà attira professionisti dell'audiovisivo, società di produzione, freelance del settore: gestiamo regimi forfettari, gestione separata INPS, cessione di diritti d'autore e contratti a progetto.",
      },
      {
        q: "Posso lavorare con voi totalmente online dal Tuscolano?",
        a: "Sì. Molti nostri clienti del Tuscolano lavorano con noi totalmente online: scambio documenti via cloud, firma digitale, videocall periodiche e firma remota delle dichiarazioni.",
      },
      {
        q: "Aprite partite IVA per chi sta avviando un'attività al Tuscolano?",
        a: "Sì. Apertura partita IVA con scelta codice ATECO, regime forfettario o ordinario, iscrizione INPS o cassa di categoria, fatturazione elettronica e SCIA al Municipio Roma VII se richiesta dall'attività.",
      },
    ],
  },

  /* ============================================================
     Laterano — KW: commercialista roma laterano
     ============================================================ */
  "commercialista-roma-laterano": {
    intro:
      "Cerchi un commercialista a Roma Laterano? Il nostro studio è a pochi minuti dalla Basilica di San Giovanni in Laterano, uno dei luoghi simbolo della cristianità e cuore del rione Esquilino-San Giovanni. La zona del Laterano è una delle aree più attrattive del centro storico romano: ospita uffici, studi professionali, attività commerciali storiche su via Merulana e via Emanuele Filiberto, oltre a istituzioni religiose, scuole e collegi pontifici. Per chi ha sede o attività nella zona del Laterano — palazzine residenziali, studi associati, esercizi commerciali — siamo lo studio di prossimità raggiungibile con una breve passeggiata o due fermate di bus, evitando il traffico del centro.",
    walkingDirections:
      "Dalla Basilica di San Giovanni in Laterano si raggiunge lo studio in circa 12-15 minuti a piedi attraversando piazzale Appio e proseguendo lungo via Magna Grecia verso l'Appio Latino. In alternativa i bus 81, 85 e 87 collegano direttamente il Laterano con la zona dello studio, e la Metro A San Giovanni è la fermata di riferimento.",
    landmarks: [
      "Basilica di San Giovanni in Laterano",
      "Scala Santa e Sancta Sanctorum",
      "Obelisco Lateranense (il più alto e antico di Roma)",
      "Mura Aureliane — Porta Asinaria",
      "Via Merulana e Palazzo del Laterano",
    ],
    whyHere: [
      "Studio a breve distanza dalla basilica e dall'asse di via Emanuele Filiberto.",
      "Esperienza con uffici, studi associati e realtà istituzionali del rione.",
      "Coordinamento con i notai dell'area San Giovanni / Laterano per atti societari e successioni.",
      "Conoscenza dei regolamenti del Municipio Roma I e VII per attività a cavallo dei due Municipi.",
    ],
    faq: [
      {
        q: "Quanto dista lo studio dalla Basilica di San Giovanni in Laterano?",
        a: "Circa 12-15 minuti a piedi attraversando piazzale Appio in direzione Appio Latino. In alternativa i bus 81, 85 e 87 fanno il collegamento diretto in pochi minuti.",
      },
      {
        q: "Avete clienti tra studi professionali e uffici del Laterano?",
        a: "Sì. Diversi studi associati, professionisti e piccole attività della zona del Laterano e di via Merulana sono nostri clienti per contabilità, dichiarazioni, casse di categoria e paghe.",
      },
      {
        q: "Gestite immobili e successioni nella zona del Laterano?",
        a: "Sì. Calcoliamo l'IMU sugli immobili nella zona del Laterano (Municipio Roma I e VII), gestiamo dichiarazioni di successione e volture catastali, e seguiamo la fiscalità delle locazioni in cedolare secca o ordinaria.",
      },
      {
        q: "Lavorate anche per residenti del rione che hanno solo bisogno del 730?",
        a: "Sì. Il 730 e i servizi a privati sono parte integrante della nostra offerta: spese sanitarie, ristrutturazioni, mutui, oneri pluriennali. Per i residenti del Laterano e di San Giovanni può essere fatto in studio o totalmente online.",
      },
      {
        q: "Per un'attività al Laterano serve un commercialista che conosca il Municipio Roma I?",
        a: "Sì, conoscere i regolamenti del Municipio aiuta soprattutto sulla SCIA, sui dehors, sulle attività di somministrazione e sul piano commerciale. La zona del Laterano è a cavallo tra Municipio Roma I e Roma VII: gestiamo entrambi.",
      },
    ],
  },
};
