/**
 * GSM Servizi — single source of truth per dati strutturali del sito.
 * Modificare qui per aggiornare nav, NAP, servizi, settori, zone, team.
 */

export const site = {
  name: "GSM Servizi",
  legalName: "GSM Servizi S.r.l.",
  url: "https://gsmservizi.it",
  shortDesc: "Studio di Dottori Commercialisti a Roma San Giovanni — Appio Latino",
  tagline: "Studio di Dottori Commercialisti a Roma San Giovanni. Consulenza fiscale, societaria e del lavoro per imprese e professionisti.",
  promise: "Risposta entro 24h lavorative. Primo incontro gratuito.",
  // NAP (Name-Address-Phone) — DA CONFERMARE col cliente prima del go-live
  contact: {
    address: "Piazza Epiro 16/A",
    locality: "Roma",
    region: "RM",
    postalCode: "00183",
    country: "IT",
    phone: "+39 06 XXXXXXX",
    phoneIntl: "+390600000000",
    whatsapp: "+390600000000",
    email: "info@gsmservizi.it",
    pec: "gsmservizi@pec.it",
    hours: "Lun–Ven 09:00–18:30",
  },
  geo: { latitude: 41.8779, longitude: 12.5066 },
  social: {
    linkedin: "https://www.linkedin.com/company/gsm-servizi",
    facebook: "https://www.facebook.com/gsmservizi",
    instagram: "https://www.instagram.com/gsmservizi",
    google: "https://g.page/r/gsm-servizi",
  },
} as const;

/* ============================================================
   Servizi — 8 pillar + 2 secondari
   ============================================================ */
export type Servizio = {
  slug: string;
  title: string;
  short: string;
  long?: string;
  keywords: string[];
  visibleInNav: boolean;
};

export const servizi: Servizio[] = [
  {
    slug: "contabilita-e-bilancio",
    title: "Contabilità e bilancio",
    short: "Tenuta contabile, bilancio civilistico e fiscale, dichiarazioni dei redditi.",
    keywords: ["tenuta contabilità roma", "redazione bilancio roma"],
    visibleInNav: true,
  },
  {
    slug: "consulenza-fiscale-e-tributaria",
    title: "Consulenza fiscale e tributaria",
    short: "Pianificazione fiscale, regime forfettario, contenzioso tributario, interpelli.",
    keywords: ["consulenza fiscale roma", "commercialista forfettario roma"],
    visibleInNav: true,
  },
  {
    slug: "apertura-partita-iva",
    title: "Apertura partita IVA",
    short: "Scelta forma giuridica, apertura PI, registro imprese, INPS, INAIL, SCIA.",
    keywords: ["apertura partita iva roma", "aprire partita iva forfettario"],
    visibleInNav: true,
  },
  {
    slug: "consulenza-del-lavoro-e-paghe",
    title: "Consulenza del lavoro e paghe",
    short: "Cedolini, UniEMens, F24, assunzioni, dimissioni, TFR, CCNL.",
    keywords: ["consulenza lavoro roma", "elaborazione paghe roma"],
    visibleInNav: true,
  },
  {
    slug: "consulenza-societaria",
    title: "Consulenza societaria",
    short: "Costituzione società, fusioni, scissioni, cessioni quote, holding di famiglia.",
    keywords: ["consulenza societaria roma", "costituzione srl roma"],
    visibleInNav: true,
  },
  {
    slug: "revisione-legale-e-controllo",
    title: "Revisione legale e controllo",
    short: "Revisione legale dei conti, sindaco unico, collegio sindacale, audit volontario.",
    keywords: ["revisore legale roma", "collegio sindacale roma"],
    visibleInNav: true,
  },
  {
    slug: "consulenza-aziendale-e-controllo-di-gestione",
    title: "Consulenza aziendale e controllo di gestione",
    short: "Business plan, budget, reporting, KPI, valutazioni, due diligence.",
    keywords: ["controllo di gestione roma", "valutazione azienda roma"],
    visibleInNav: true,
  },
  {
    slug: "crisi-d-impresa-e-ristrutturazioni",
    title: "Crisi d'impresa e ristrutturazioni",
    short: "Composizione negoziata, concordato preventivo, piani di risanamento.",
    keywords: ["crisi impresa roma", "concordato preventivo roma"],
    visibleInNav: true,
  },
  {
    slug: "fiscalita-internazionale",
    title: "Fiscalità internazionale",
    short: "Stabili organizzazioni, trattati doppie imposizioni, regime impatriati.",
    keywords: ["fiscalità internazionale roma"],
    visibleInNav: false,
  },
  {
    slug: "servizi-a-privati",
    title: "Servizi a privati",
    short: "Modello 730, Redditi PF, IMU, successioni, donazioni.",
    keywords: ["730 roma", "successioni roma", "commercialista privati roma"],
    visibleInNav: false,
  },
];

/* ============================================================
   Settori — 4 verticali reali (300+ clienti GSM)
   ============================================================ */
export type Settore = {
  slug: string;
  title: string;
  short: string;
  highlight?: boolean;
  keywords: string[];
};

export const settori: Settore[] = [
  {
    slug: "pmi-e-srl",
    title: "PMI e SRL",
    short: "Gestione completa per piccole e medie imprese: contabilità, fiscalità, controllo di gestione, consulenza societaria.",
    keywords: ["commercialista pmi roma", "commercialista srl roma"],
  },
  {
    slug: "farmacie",
    title: "Farmacie",
    short: "Specializzazione consolidata nel settore farmaceutico: bilanci, fiscalità, gestione magazzino, valutazioni.",
    highlight: true,
    keywords: ["commercialista farmacie roma", "consulenza fiscale farmacie", "tenuta contabilità farmacia"],
  },
  {
    slug: "liberi-professionisti",
    title: "Liberi professionisti",
    short: "Avvocati, medici, architetti, ingegneri, consulenti: regime fiscale, dichiarazioni, previdenza professionale.",
    keywords: [
      "commercialista liberi professionisti roma",
      "commercialista avvocati roma",
      "commercialista medici roma",
      "commercialista architetti roma",
    ],
  },
  {
    slug: "privati-e-partite-iva",
    title: "Privati e partite IVA",
    short: "Modello 730, Redditi PF, IMU, successioni, regime forfettario, ditte individuali.",
    keywords: ["730 roma", "commercialista forfettario roma", "successioni roma"],
  },
];

/* ============================================================
   Zone — Local SEO cluster (cuore della strategia)
   ============================================================ */
export type Zone = {
  slug: string;
  title: string;          // human title
  zone: string;           // nome quartiere
  short: string;
  // Distanza/transito da Piazza Epiro (NAP centro)
  reachable: string[];
  keywords: string[];
};

export const zone: Zone[] = [
  {
    slug: "commercialista-roma-san-giovanni",
    title: "Commercialista Roma San Giovanni",
    zone: "San Giovanni",
    short: "Studio a 5 minuti dalla basilica di San Giovanni in Laterano.",
    reachable: ["Metro A San Giovanni", "Tram 3 e 8", "Bus 87 e 218"],
    keywords: ["commercialista roma san giovanni", "studio commercialisti san giovanni roma"],
  },
  {
    slug: "commercialista-roma-appio-latino",
    title: "Commercialista Roma Appio Latino",
    zone: "Appio Latino",
    short: "Sede operativa nel cuore dell'Appio Latino, accanto al Mercato di Piazza Epiro.",
    reachable: ["Metro A Re di Roma", "Bus 85, 87, 218"],
    keywords: ["commercialista roma appio latino", "commercialista appio latino"],
  },
  {
    slug: "commercialista-roma-piazza-epiro",
    title: "Commercialista Piazza Epiro",
    zone: "Piazza Epiro",
    short: "A pochi passi dal Mercato di Piazza Epiro, nel quartiere Appio Latino.",
    reachable: ["Metro A Re di Roma (5 min a piedi)", "Bus 85"],
    keywords: ["commercialista piazza epiro", "commercialista mercato epiro"],
  },
  {
    slug: "commercialista-roma-re-di-roma",
    title: "Commercialista Roma Re di Roma",
    zone: "Re di Roma",
    short: "A 7 minuti a piedi dalla Piazza Re di Roma e dalla metro A.",
    reachable: ["Metro A Re di Roma (7 min)", "Tram 3"],
    keywords: ["commercialista roma re di roma", "commercialista re di roma"],
  },
  {
    slug: "commercialista-roma-tuscolano",
    title: "Commercialista Roma Tuscolano",
    zone: "Tuscolano",
    short: "Studio facilmente raggiungibile dal quartiere Tuscolano.",
    reachable: ["Metro A Furio Camillo / Ponte Lungo", "Tram 8"],
    keywords: ["commercialista roma tuscolano"],
  },
  {
    slug: "commercialista-roma-laterano",
    title: "Commercialista Roma Laterano",
    zone: "Laterano",
    short: "A pochi minuti dalla Basilica di San Giovanni in Laterano.",
    reachable: ["Metro A San Giovanni", "Bus 81, 85, 87"],
    keywords: ["commercialista roma laterano"],
  },
];

/* ============================================================
   Team — soci + professionisti chiave
   Foto: placeholder finché non arriva il servizio fotografico
   ============================================================ */
export type Membro = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  isPartner: boolean;
  isLead?: boolean;
  bio: string;
  expertise: string[];
};

export const team: Membro[] = [
  {
    slug: "marongiu",
    name: "Dott. Marongiu",
    role: "Capo dello studio · Socio · Dottore Commercialista",
    initials: "M",
    isPartner: true,
    isLead: true,
    bio: "Capo dello studio GSM Servizi. Con esperienza pluriennale nella consulenza fiscale e societaria a PMI e SRL romane.",
    expertise: ["Consulenza societaria", "PMI e SRL", "Operazioni straordinarie"],
  },
  {
    slug: "gasperini",
    name: "Dott. Giampaolo Gasperini",
    role: "Socio · Dottore Commercialista",
    initials: "GG",
    isPartner: true,
    bio: "Socio dello studio. Aree di competenza: apertura partita IVA, regime forfettario, fiscalità per professionisti e privati.",
    expertise: ["Apertura partita IVA", "Regime forfettario", "Fiscalità professionisti"],
  },
  {
    slug: "fabrizio-sabatini",
    name: "Dott. Fabrizio Sabatini",
    role: "Socio · Dottore Commercialista",
    initials: "FS",
    isPartner: true,
    bio: "Socio dello studio. Aree di competenza: servizi a privati, successioni e donazioni, pianificazione fiscale e patrimoniale.",
    expertise: ["Servizi a privati", "Successioni e donazioni", "Pianificazione fiscale"],
  },
  {
    slug: "arangia",
    name: "Dott.ssa Maria Cristina Arangia",
    role: "Dottore Commercialista · Revisore Contabile",
    initials: "MA",
    isPartner: false,
    bio: "Dottore Commercialista e Revisore Contabile. Specializzata in revisione legale dei conti e controllo per PMI.",
    expertise: ["Revisione legale", "Collegio sindacale", "Audit volontario PMI"],
  },
];

/* ============================================================
   Navigation — primary
   ============================================================ */
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Settori", href: "/settori" },
  { label: "Zone", href: "/zone" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
] as const;

/* ============================================================
   FAQ — globali (riusate dove serve)
   ============================================================ */
export const faqGlobali = [
  {
    q: "Quanto costa un commercialista a Roma?",
    a: "Le tariffe dipendono dal regime fiscale, dal volume dei movimenti contabili e dai servizi richiesti. Da GSM Servizi il primo incontro è gratuito e ti rilasciamo un preventivo trasparente prima di iniziare.",
  },
  {
    q: "Dove si trova lo studio?",
    a: "Siamo a Roma, nel quartiere Appio Latino, a pochi passi da Piazza Epiro e dalla metro A Re di Roma / San Giovanni.",
  },
  {
    q: "In quanto tempo ricevo una risposta?",
    a: "Rispondiamo a tutte le richieste di analisi gratuita entro 24 ore lavorative.",
  },
  {
    q: "Posso fare la consulenza online?",
    a: "Sì. Lavoriamo in studio, in videocall e per telefono. Scegli tu la modalità.",
  },
  {
    q: "Vi occupate anche di privati?",
    a: "Sì. Modello 730, Redditi PF, IMU, successioni, donazioni: trattiamo tutte le esigenze fiscali del privato cittadino.",
  },
  {
    q: "Avete esperienza con le farmacie?",
    a: "Sì, le farmacie sono uno dei nostri settori storici. Conosciamo le specificità contabili e fiscali del comparto farmaceutico.",
  },
];
