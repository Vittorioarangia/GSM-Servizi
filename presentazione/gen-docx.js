const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  LevelFormat, HeadingLevel, TabStopType, TabStopPosition,
} = require("docx");

const FONT = "Calibri";
const RED = "8B2C2C"; // rosso pompeiano

const p = (children, opts = {}) =>
  new Paragraph({ children, spacing: { after: 160 }, ...opts });
const t = (text, opts = {}) =>
  new TextRun({ text, font: FONT, size: 22, ...opts });

const doc = new Document({
  creator: "Vittorio Carobene Arangia",
  title: "Lettera di presentazione - GSM Servizi",
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "—",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        // Header — sender + date
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          spacing: { after: 80 },
          children: [
            t("Vittorio Carobene Arangia", { bold: true, color: RED }),
            t("\tRoma, maggio 2026"),
          ],
        }),
        new Paragraph({
          spacing: { after: 480 },
          children: [
            t("Digital consultant — sviluppo web, SEO, automazione, AI", {
              italics: true, color: "8A7A6E", size: 18,
            }),
          ],
        }),

        // Greeting
        p([t("Cari amici di GSM Servizi,", { bold: true })]),

        // Body
        p([
          t(
            "vi scrivo perché in questi mesi ho avuto modo di guardare lo studio con attenzione e penso ci siano spazi importanti per crescere sul digitale — un terreno dove la maggior parte degli studi commercialisti resta indietro e che invece sta diventando il primo punto di contatto con chi cerca un professionista."
          ),
        ]),

        p([
          t(
            "Mi occupo da anni di portare aziende e professionisti online: sviluppo siti web moderni e veloci, ottimizzazione SEO per scalare le posizioni su Google, comunicazione su LinkedIn per consolidare la reputazione e — dove ha davvero senso — automazione di processi e integrazione di intelligenza artificiale per liberare tempo dalle attività ripetitive."
          ),
        ]),

        p([
          t("Quello che propongo per GSM è un percorso in tre fasi, calibrato sui tempi giusti:"),
        ]),

        // Bulleted phases
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 120 },
          children: [
            t("Fase 1 — Sito web e visibilità su Google. ", { bold: true }),
            t(
              "La base. Un primo risultato concreto è già qui: cercando “studio commercialisti san giovanni”, GSM è in prima pagina."
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 120 },
          children: [
            t("Fase 2 — LinkedIn e reputazione professionale. ", { bold: true }),
            t(
              "Portare lo studio davanti ai clienti giusti e costruire un'immagine di riferimento sul territorio."
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 240 },
          children: [
            t("Fase 3 — Automazione e AI (12-24 mesi). ", { bold: true }),
            t(
              "Quando il flusso di lavoro sarà cresciuto, introdurre strumenti che gestiscono il ripetitivo senza compromettere la qualità."
            ),
          ],
        }),

        p([
          t(
            "Nella presentazione allegata trovate tutto spiegato per bene, comprese le ragioni tecniche dietro a ogni scelta — in particolare il modo in cui si arriva sulla prima pagina di Google, che è la parte meno scontata."
          ),
        ]),

        p([
          t("Sono a disposizione per un caffè e ragionarci insieme con calma."),
        ]),

        // Sign-off
        new Paragraph({
          spacing: { before: 240, after: 80 },
          children: [t("A presto,")],
        }),
        new Paragraph({
          spacing: { after: 0 },
          children: [t("Vittorio Carobene Arangia", { bold: true, color: RED })],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("Lettera-Vittorio.docx", buf);
  console.log("OK -> Lettera-Vittorio.docx");
});
