import { z } from "zod";

/**
 * Tipologia cliente — etichette user-friendly mappate sotto.
 * Le chiavi sono usate sia client che server.
 */
export const tipologie = [
  "privato",
  "partita-iva",
  "pmi-srl",
  "farmacia",
  "libero-professionista",
  "altro",
] as const;

export type Tipologia = (typeof tipologie)[number];

export const tipologieLabels: Record<Tipologia, string> = {
  privato: "Privato",
  "partita-iva": "Partita IVA / forfettario",
  "pmi-srl": "PMI o SRL",
  farmacia: "Farmacia",
  "libero-professionista": "Libero professionista",
  altro: "Altro",
};

/**
 * Schema condiviso client/server. Validazione minima ma completa.
 * `consenso` deve essere true (literal). `website` è honeypot anti-bot:
 * deve restare vuoto, qualsiasi valore non vuoto -> drop silenzioso lato server.
 */
export const leadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Inserisci nome e cognome (almeno 2 caratteri).")
    .max(80, "Il nome è troppo lungo."),
  email: z
    .string()
    .trim()
    .email("Inserisci un indirizzo email valido."),
  telefono: z
    .string()
    .trim()
    .min(6, "Inserisci un numero di telefono valido.")
    .max(20, "Il numero di telefono è troppo lungo."),
  messaggio: z
    .string()
    .trim()
    .min(10, "Scrivi almeno una frase su cosa ti serve.")
    .max(2000, "Il messaggio è troppo lungo."),
  tipologia: z.enum(tipologie, {
    errorMap: () => ({ message: "Seleziona una tipologia." }),
  }),
  consenso: z.literal(true, {
    errorMap: () => ({ message: "Devi accettare l'informativa privacy." }),
  }),
  // metadata leggera (solo pagina di provenienza, niente UTM)
  paginaProvenienza: z.string().max(200).optional(),
  // honeypot - DEVE essere vuoto
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
