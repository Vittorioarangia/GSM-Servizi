import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

import { leadSchema, type LeadInput } from "@/lib/lead-schema";
import { studioTemplate, clienteTemplate } from "@/lib/email-templates";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ============================================================
   Rate limiting in memoria — semplice, no Redis.
   3 richieste / IP / ora. Stato si azzera al riavvio del processo
   (accettabile su Vercel: edge bot è bloccato dall'honeypot).
   ============================================================ */
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1h
const RATE_MAX = 3;
const rateMap = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const prev = rateMap.get(ip) ?? [];
  const recent = prev.filter((ts) => ts > cutoff);
  if (recent.length >= RATE_MAX) {
    rateMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

/* ============================================================
   POST /api/lead
   ============================================================ */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Richiesta non valida." },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot check anche su parse fallito: se il bot ha riempito website ma
    // ha rotto altri campi, comportiamoci come success silenzioso.
    const raw = body as Record<string, unknown> | null;
    if (raw && typeof raw === "object" && typeof raw.website === "string" && raw.website.length > 0) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      {
        ok: false,
        error: "Alcuni campi non sono compilati correttamente.",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 },
    );
  }

  const input: LeadInput = parsed.data;

  // Honeypot: bot ha riempito il campo nascosto -> 200 OK silenzioso.
  if (input.website && input.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Rate limit per IP
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Troppe richieste. Riprova tra un'ora oppure chiamaci." },
      { status: 429 },
    );
  }

  // Configurazione email
  const apiKey = process.env.RESEND_API_KEY;
  const studioTo = process.env.STUDIO_EMAIL_TO;
  const fromAddress = process.env.LEAD_EMAIL_FROM ?? `GSM Servizi <noreply@${new URL(site.url).hostname}>`;

  if (!apiKey || !studioTo) {
    console.error("[lead] Configurazione email mancante (RESEND_API_KEY o STUDIO_EMAIL_TO).");
    return NextResponse.json(
      { ok: false, error: "Servizio email temporaneamente non disponibile. Riprova più tardi o chiamaci." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const subjectStudio = `Nuova analisi gratuita — ${input.nome} (${input.tipologia})`;
  const subjectCliente = "Abbiamo ricevuto la tua richiesta — GSM Servizi";

  const results = await Promise.allSettled([
    resend.emails.send({
      from: fromAddress,
      to: studioTo,
      replyTo: input.email,
      subject: subjectStudio,
      html: studioTemplate(input),
    }),
    resend.emails.send({
      from: fromAddress,
      to: input.email,
      subject: subjectCliente,
      html: clienteTemplate(input),
    }),
  ]);

  const studioRes = results[0];
  const clienteRes = results[1];

  // L'email allo studio è la critica: se fallisce, l'utente deve sapere.
  if (studioRes.status === "rejected") {
    console.error("[lead] Invio email studio fallito:", studioRes.reason);
    return NextResponse.json(
      { ok: false, error: "Non siamo riusciti a inviare la tua richiesta. Riprova tra qualche minuto o chiamaci." },
      { status: 502 },
    );
  }

  // Autoreply non bloccante: se fallisce loggiamo e procediamo.
  if (clienteRes.status === "rejected") {
    console.error("[lead] Invio autoreply cliente fallito:", clienteRes.reason);
  }

  return NextResponse.json({ ok: true });
}
