const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Vittorio Carobene Arangia";
pres.company = "GSM Servizi";
pres.title = "Percorso di digitalizzazione — GSM Servizi";

// Palette: Pompeian red (warm terracotta) on cream
const RED = "8B2C2C";       // primary - rosso pompeiano
const RED_DARK = "5A1818";  // deeper for backgrounds
const CREAM = "F5EFE6";     // warm light bg
const SAND = "E8DDC9";      // secondary
const INK = "2B2118";       // body text
const MUTED = "5A4A3E";     // captions / body secondary (darkened for contrast on cream)
const ACCENT = "C97B5A";    // soft warm accent

const FONT_TITLE = "Georgia";
const FONT_BODY = "Calibri";

// helper: thin vertical accent bar
const accentBar = (slide, x, y, h) => {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.08, h,
    fill: { color: RED }, line: { type: "none" },
  });
};

// helper: footer
const addFooter = (slide, n, total) => {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 7.05, w: 12.3, h: 0,
    line: { color: SAND, width: 0.75 },
  });
  slide.addText("GSM Servizi · Percorso di digitalizzazione", {
    x: 0.5, y: 7.1, w: 8, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9, color: MUTED, margin: 0,
  });
  slide.addText(`${n} / ${total}`, {
    x: 11.8, y: 7.1, w: 1, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9, color: MUTED, align: "right", margin: 0,
  });
};

const TOTAL = 9;

// ---------------------------------------------------------------------------
// Slide 1 — Cover
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: RED_DARK };

  // decorative band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 7.5,
    fill: { color: RED }, line: { type: "none" },
  });

  s.addText("PROPOSTA", {
    x: 1, y: 1.6, w: 11, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, color: ACCENT, bold: true,
    charSpacing: 8, margin: 0,
  });

  s.addText("Percorso di digitalizzazione", {
    x: 1, y: 2.1, w: 11, h: 1.2,
    fontFace: FONT_TITLE, fontSize: 54, color: "FFFFFF", bold: true, margin: 0,
  });

  s.addText("Una proposta concreta per GSM Servizi", {
    x: 1, y: 3.4, w: 11, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 24, color: SAND, italic: true, margin: 0,
  });

  // separator line
  s.addShape(pres.shapes.LINE, {
    x: 1, y: 4.4, w: 2, h: 0,
    line: { color: ACCENT, width: 2 },
  });

  s.addText([
    { text: "Vittorio Carobene Arangia", options: { bold: true, breakLine: true } },
    { text: "Maggio 2026", options: { color: "FFFFFF" } },
  ], {
    x: 1, y: 4.7, w: 11, h: 1,
    fontFace: FONT_BODY, fontSize: 16, color: "FFFFFF", margin: 0,
  });
}

// ---------------------------------------------------------------------------
// Slide 2 — Chi sono
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("Chi sono", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 36, color: INK, bold: true, margin: 0,
  });

  s.addText("Vittorio Carobene Arangia", {
    x: 0.5, y: 1.5, w: 12, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 22, color: RED, bold: true, margin: 0,
  });

  s.addText(
    "Digital consultant. Aiuto aziende e professionisti a costruire una presenza online che funziona davvero: siti web moderni, posizionamento su Google, comunicazione professionale e — quando serve — automazione e intelligenza artificiale per liberare tempo dalle attività ripetitive.",
    {
      x: 0.5, y: 2.05, w: 12, h: 1.2,
      fontFace: FONT_BODY, fontSize: 16, color: INK, margin: 0,
    }
  );

  // 3 cards
  const cards = [
    { title: "Sviluppo web", desc: "Siti veloci, mobile-first,\noptimizzati per conversione." },
    { title: "SEO & contenuti", desc: "Posizionamento su Google\ne contenuti che attraggono clienti." },
    { title: "AI & automazione", desc: "Strumenti che riducono\nlavoro manuale ripetitivo." },
  ];
  const cardW = 3.9;
  const gap = 0.3;
  const startX = (13.3 - (cardW * 3 + gap * 2)) / 2;
  const cardY = 4.0;

  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: cardY, w: cardW, h: 2.3,
      fill: { color: "FFFFFF" }, line: { color: SAND, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.08 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: cardY, w: cardW, h: 0.12,
      fill: { color: RED }, line: { type: "none" },
    });
    s.addText(c.title, {
      x: x + 0.3, y: cardY + 0.35, w: cardW - 0.6, h: 0.5,
      fontFace: FONT_TITLE, fontSize: 18, color: INK, bold: true, margin: 0,
    });
    s.addText(c.desc, {
      x: x + 0.3, y: cardY + 0.95, w: cardW - 0.6, h: 1.2,
      fontFace: FONT_BODY, fontSize: 13, color: MUTED, margin: 0,
    });
  });

  addFooter(s, 2, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 3 — L'obiettivo
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("L'obiettivo", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 36, color: INK, bold: true, margin: 0,
  });

  // Big stat on left
  s.addText("9", {
    x: 0.7, y: 1.5, w: 4, h: 2.6,
    fontFace: FONT_TITLE, fontSize: 170, color: RED, bold: true,
    valign: "top", margin: 0,
  });
  s.addText("su 10", {
    x: 0.7, y: 4.15, w: 4, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 30, color: ACCENT, italic: true, margin: 0,
  });

  // Right column
  s.addText(
    "potenziali clienti cercano online prima di scegliere un commercialista.",
    {
      x: 5, y: 1.8, w: 7.8, h: 1.4,
      fontFace: FONT_TITLE, fontSize: 22, color: INK, italic: true,
      valign: "top", margin: 0,
    }
  );

  s.addShape(pres.shapes.LINE, {
    x: 5, y: 3.3, w: 1.5, h: 0,
    line: { color: RED, width: 2 },
  });

  s.addText(
    "GSM è uno studio di livello — ma se non vi trovano, non possono sceglierci. La proposta è semplice: trasformare la presenza digitale in un canale stabile di acquisizione clienti, costruendo il percorso passo dopo passo.",
    {
      x: 5, y: 3.5, w: 7.8, h: 2.5,
      fontFace: FONT_BODY, fontSize: 15, color: INK, valign: "top", margin: 0,
    }
  );

  addFooter(s, 3, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 4 — Roadmap (timeline)
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("La roadmap in 3 fasi", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 36, color: INK, bold: true, margin: 0,
  });

  s.addText("Tempistiche pensate per crescere senza forzare i ritmi dello studio.", {
    x: 0.5, y: 1.3, w: 12, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true, margin: 0,
  });

  // Timeline horizontal line
  const lineY = 3.5;
  s.addShape(pres.shapes.LINE, {
    x: 1.5, y: lineY, w: 10.3, h: 0,
    line: { color: SAND, width: 4 },
  });

  const stages = [
    { x: 1.8, label: "Oggi", title: "Fase 1", subtitle: "Sito web + SEO", desc: "Essere trovati su Google da chi cerca un commercialista." },
    { x: 5.8, label: "+ 3-6 mesi", title: "Fase 2", subtitle: "LinkedIn & reputazione", desc: "Costruire autorevolezza e relazioni nel territorio." },
    { x: 9.8, label: "+ 12-24 mesi", title: "Fase 3", subtitle: "Automazione + AI", desc: "Liberare tempo dalle attività ripetitive a basso valore." },
  ];

  stages.forEach((st) => {
    // dot
    s.addShape(pres.shapes.OVAL, {
      x: st.x - 0.18, y: lineY - 0.18, w: 0.36, h: 0.36,
      fill: { color: RED }, line: { color: "FFFFFF", width: 3 },
    });
    // label above
    s.addText(st.label, {
      x: st.x - 1.5, y: lineY - 0.85, w: 3, h: 0.4,
      fontFace: FONT_BODY, fontSize: 11, color: ACCENT, bold: true, align: "center",
      charSpacing: 4, margin: 0,
    });
    // title below
    s.addText(st.title, {
      x: st.x - 1.5, y: lineY + 0.3, w: 3, h: 0.4,
      fontFace: FONT_TITLE, fontSize: 18, color: RED, bold: true, align: "center", margin: 0,
    });
    s.addText(st.subtitle, {
      x: st.x - 1.5, y: lineY + 0.75, w: 3, h: 0.4,
      fontFace: FONT_TITLE, fontSize: 16, color: INK, bold: true, align: "center", margin: 0,
    });
    s.addText(st.desc, {
      x: st.x - 1.5, y: lineY + 1.2, w: 3, h: 1.6,
      fontFace: FONT_BODY, fontSize: 12, color: MUTED, align: "center", margin: 0,
    });
  });

  addFooter(s, 4, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 5 — Fase 1: Sito + SEO (come si scala su Google)
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("Fase 1 · Essere trovati", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 32, color: INK, bold: true, margin: 0,
  });
  s.addText("Come si arriva in prima pagina di Google", {
    x: 0.7, y: 1.15, w: 12, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, color: ACCENT, italic: true, margin: 0,
  });

  // 5 leve
  const leve = [
    {
      n: "1",
      title: "Keyword locali",
      desc: "Le parole che i clienti scrivono davvero ('studio commercialisti san giovanni', 'commercialista roma centro') vanno inserite nei titoli, nelle pagine e negli URL del sito.",
    },
    {
      n: "2",
      title: "Google Business Profile",
      desc: "La scheda di Google Maps con orari, foto, servizi e recensioni: è il primo risultato che si vede sulle ricerche locali.",
    },
    {
      n: "3",
      title: "Contenuti utili",
      desc: "Articoli su scadenze fiscali, novità normative e guide pratiche: portano traffico costante e dimostrano competenza.",
    },
    {
      n: "4",
      title: "Performance tecnica",
      desc: "Sito veloce, mobile-first, con dati strutturati (schema markup) che dicono a Google chi siamo e cosa offriamo.",
    },
    {
      n: "5",
      title: "Link e citazioni",
      desc: "Presenza su directory locali, ordini professionali e siti di settore: aumenta l'autorevolezza agli occhi di Google.",
    },
  ];

  const colW = 5.9;
  const rowH = 1.5;
  const startY = 1.75;
  const startX = 0.5;

  leve.slice(0, 4).forEach((l, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (colW + 0.4);
    const y = startY + row * (rowH + 0.15);

    s.addShape(pres.shapes.OVAL, {
      x, y: y + 0.05, w: 0.5, h: 0.5,
      fill: { color: RED }, line: { type: "none" },
    });
    s.addText(l.n, {
      x, y: y + 0.05, w: 0.5, h: 0.5,
      fontFace: FONT_TITLE, fontSize: 18, color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(l.title, {
      x: x + 0.7, y, w: colW - 0.7, h: 0.45,
      fontFace: FONT_TITLE, fontSize: 16, color: INK, bold: true, margin: 0,
    });
    s.addText(l.desc, {
      x: x + 0.7, y: y + 0.5, w: colW - 0.7, h: 1.0,
      fontFace: FONT_BODY, fontSize: 12, color: MUTED, margin: 0,
    });
  });

  // 5th leva spans full width at bottom
  {
    const l = leve[4];
    const y = startY + 2 * (rowH + 0.15);
    s.addShape(pres.shapes.OVAL, {
      x: startX, y: y + 0.05, w: 0.5, h: 0.5,
      fill: { color: RED }, line: { type: "none" },
    });
    s.addText(l.n, {
      x: startX, y: y + 0.05, w: 0.5, h: 0.5,
      fontFace: FONT_TITLE, fontSize: 18, color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(l.title, {
      x: startX + 0.7, y, w: 12, h: 0.45,
      fontFace: FONT_TITLE, fontSize: 16, color: INK, bold: true, margin: 0,
    });
    s.addText(l.desc, {
      x: startX + 0.7, y: y + 0.5, w: 12, h: 0.55,
      fontFace: FONT_BODY, fontSize: 12, color: MUTED, margin: 0,
    });
  }

  // bottom note
  s.addText("Risultati visibili in 3-6 mesi · Costanza > spinte improvvise", {
    x: 0.5, y: 6.7, w: 12.3, h: 0.3,
    fontFace: FONT_BODY, fontSize: 11, color: ACCENT, bold: true,
    align: "center", italic: true, margin: 0,
  });

  addFooter(s, 5, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 6 — Risultato Fase 1
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: RED_DARK };

  // decorative band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 7.5,
    fill: { color: RED }, line: { type: "none" },
  });

  s.addText("UN RISULTATO GIÀ CONCRETO", {
    x: 1, y: 0.9, w: 11, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, color: ACCENT, bold: true,
    charSpacing: 6, margin: 0,
  });

  s.addText("1ª pagina", {
    x: 1, y: 1.5, w: 11, h: 2,
    fontFace: FONT_TITLE, fontSize: 92, color: "FFFFFF", bold: true, margin: 0,
  });

  s.addShape(pres.shapes.LINE, {
    x: 1, y: 3.8, w: 2.5, h: 0,
    line: { color: ACCENT, width: 3 },
  });

  s.addText(
    "Cercando “studio commercialisti san giovanni” oggi, GSM Servizi è già visibile in prima pagina su Google.",
    {
      x: 1, y: 4.1, w: 11, h: 1.2,
      fontFace: FONT_TITLE, fontSize: 26, color: "FFFFFF", italic: true, margin: 0,
    }
  );

  s.addText(
    "Il primo passo non è una promessa — sta già funzionando. Adesso si tratta di consolidare, allargare le query intercettate e portare il sito a generare contatti in modo costante.",
    {
      x: 1, y: 5.4, w: 11, h: 1.2,
      fontFace: FONT_BODY, fontSize: 15, color: "F5EFE6", margin: 0,
    }
  );
}

// ---------------------------------------------------------------------------
// Slide 7 — Fase 2: LinkedIn
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("Fase 2 · Essere riconosciuti", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 32, color: INK, bold: true, margin: 0,
  });
  s.addText("LinkedIn & reputazione professionale (3-6 mesi dall'avvio)", {
    x: 0.7, y: 1.15, w: 12, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, color: ACCENT, italic: true, margin: 0,
  });

  // left intro
  s.addText(
    "Una volta che il sito porta visite, serve un secondo livello: far sì che chi vi conosce ricordi il vostro nome, e che chi non vi conosce vi incontri nel posto giusto.",
    {
      x: 0.5, y: 1.85, w: 5.8, h: 1.5,
      fontFace: FONT_TITLE, fontSize: 18, color: INK, italic: true,
      valign: "top", margin: 0,
    }
  );

  s.addShape(pres.shapes.LINE, {
    x: 0.5, y: 3.5, w: 1.5, h: 0,
    line: { color: RED, width: 2 },
  });

  s.addText(
    "LinkedIn è oggi il social di riferimento per il mondo professionale: imprenditori, manager, consulenti. È il canale più diretto per portare lo studio davanti ai clienti che servono.",
    {
      x: 0.5, y: 3.7, w: 5.8, h: 2.2,
      fontFace: FONT_BODY, fontSize: 13, color: MUTED, valign: "top", margin: 0,
    }
  );

  // right action list
  const actions = [
    { t: "Profilo aziendale curato", d: "Logo, descrizione, servizi, foto del team." },
    { t: "Profili dei soci coordinati", d: "Stessa identità visiva e tono di voce." },
    { t: "Contenuti regolari", d: "Scadenze, novità, brevi guide — utili e leggibili." },
    { t: "Networking mirato", d: "Connessioni con clienti target e referrer locali." },
    { t: "Annunci sponsorizzati selettivi", d: "Solo dove portano contatti concreti." },
  ];

  const rightX = 6.8;
  const rightY = 1.85;
  const itemH = 0.95;

  actions.forEach((a, i) => {
    const y = rightY + i * itemH;
    s.addShape(pres.shapes.RECTANGLE, {
      x: rightX, y, w: 0.06, h: 0.85,
      fill: { color: RED }, line: { type: "none" },
    });
    s.addText(a.t, {
      x: rightX + 0.25, y, w: 6, h: 0.4,
      fontFace: FONT_TITLE, fontSize: 15, color: INK, bold: true, margin: 0,
    });
    s.addText(a.d, {
      x: rightX + 0.25, y: y + 0.4, w: 6, h: 0.45,
      fontFace: FONT_BODY, fontSize: 12, color: MUTED, margin: 0,
    });
  });

  addFooter(s, 7, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 8 — Fase 3: AI & automazione
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("Fase 3 · Lavorare meglio", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 32, color: INK, bold: true, margin: 0,
  });
  s.addText("Automazione + intelligenza artificiale (12-24 mesi)", {
    x: 0.7, y: 1.15, w: 12, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, color: ACCENT, italic: true, margin: 0,
  });

  s.addText(
    "Quando il flusso di clienti sarà cresciuto, la priorità cambia: non più 'farsi trovare', ma 'lavorare con qualità senza farsi sommergere'. Qui entrano automazione e AI — non come moda, ma come strumenti scelti dove portano un vantaggio reale.",
    {
      x: 0.5, y: 1.85, w: 12.3, h: 1.0,
      fontFace: FONT_BODY, fontSize: 14, color: INK,
      valign: "top", margin: 0,
    }
  );

  const blocks = [
    {
      title: "Raccolta documenti automatica",
      desc: "Portale clienti per inviare fatture e ricevute. Riconoscimento automatico (OCR) per non re-inserire i dati a mano.",
    },
    {
      title: "Assistente AI per i clienti",
      desc: "Risposte immediate alle domande ricorrenti (scadenze, documenti, stato pratica), con escalation allo studio.",
    },
    {
      title: "Prima analisi dei bilanci",
      desc: "L'AI prepara una bozza di lettura dei conti — voi la rifinite. Più tempo per la consulenza di valore.",
    },
    {
      title: "Integrazione col gestionale",
      desc: "Connessione con i sistemi che già usate per evitare doppi inserimenti, senza sostituire nulla.",
    },
  ];

  const cardW = 6.0;
  const cardH = 1.7;
  const startX = 0.5;
  const startY = 3.0;

  blocks.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + 0.3);
    const y = startY + row * (cardH + 0.2);

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" }, line: { color: SAND, width: 1 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.08, h: cardH,
      fill: { color: RED }, line: { type: "none" },
    });
    s.addText(b.title, {
      x: x + 0.3, y: y + 0.25, w: cardW - 0.6, h: 0.5,
      fontFace: FONT_TITLE, fontSize: 16, color: INK, bold: true, margin: 0,
    });
    s.addText(b.desc, {
      x: x + 0.3, y: y + 0.8, w: cardW - 0.6, h: 0.85,
      fontFace: FONT_BODY, fontSize: 12, color: MUTED, margin: 0,
    });
  });

  addFooter(s, 8, TOTAL);
}

// ---------------------------------------------------------------------------
// Slide 9 — Prossimi passi
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: CREAM };
  accentBar(s, 0.5, 0.5, 0.7);

  s.addText("Prossimi passi", {
    x: 0.7, y: 0.5, w: 12, h: 0.7,
    fontFace: FONT_TITLE, fontSize: 36, color: INK, bold: true, margin: 0,
  });

  s.addText(
    "Il sito è online, la prima pagina di Google è già nostra: la base c'è.",
    {
      x: 0.5, y: 1.6, w: 12.3, h: 0.6,
      fontFace: FONT_TITLE, fontSize: 22, color: RED, italic: true, bold: true, margin: 0,
    }
  );

  // 3 numbered steps
  const steps = [
    {
      n: "01",
      title: "Una chiacchierata di 30 minuti",
      desc: "Vediamo insieme la roadmap, la calibriamo sui tempi e sulle priorità reali dello studio.",
    },
    {
      n: "02",
      title: "Un piano scritto su misura",
      desc: "Obiettivi chiari, tempi e costi trasparenti, niente impegni che non servono.",
    },
    {
      n: "03",
      title: "Si parte dalla Fase 2",
      desc: "LinkedIn e contenuti — il modo più rapido per consolidare quello che la Fase 1 ha già acceso.",
    },
  ];

  const stepY = 2.6;
  const stepH = 1.2;

  steps.forEach((st, i) => {
    const y = stepY + i * (stepH + 0.15);
    s.addText(st.n, {
      x: 0.5, y, w: 1.2, h: 1,
      fontFace: FONT_TITLE, fontSize: 48, color: ACCENT, bold: true, margin: 0,
    });
    s.addText(st.title, {
      x: 1.8, y: y + 0.05, w: 11, h: 0.5,
      fontFace: FONT_TITLE, fontSize: 18, color: INK, bold: true, margin: 0,
    });
    s.addText(st.desc, {
      x: 1.8, y: y + 0.55, w: 11, h: 0.6,
      fontFace: FONT_BODY, fontSize: 13, color: MUTED, margin: 0,
    });
  });

  // bottom contact
  s.addShape(pres.shapes.LINE, {
    x: 0.5, y: 6.5, w: 12.3, h: 0,
    line: { color: SAND, width: 1 },
  });
  s.addText("Vittorio Carobene Arangia · Disponibile per un caffè quando volete", {
    x: 0.5, y: 6.65, w: 12.3, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, color: RED, bold: true,
    align: "center", italic: true, margin: 0,
  });
}

// Write
pres.writeFile({ fileName: "GSM-Digitalizzazione.pptx" }).then(name => {
  console.log("OK -> " + name);
});
