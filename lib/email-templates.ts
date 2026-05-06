import { site } from "@/lib/site";
import {
  type LeadInput,
  type Tipologia,
  tipologieLabels,
} from "@/lib/lead-schema";

/* ============================================================
   Sanitization helper — evita injection HTML negli output email.
   ============================================================ */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function tipologiaLabel(t: Tipologia): string {
  return tipologieLabels[t] ?? t;
}

/* ============================================================
   Email allo studio — riepilogo richiesta
   Layout sobrio, inline-styles per compatibilità email client.
   ============================================================ */
export function studioTemplate(input: LeadInput): string {
  const nome = escapeHtml(input.nome);
  const email = escapeHtml(input.email);
  const telefono = escapeHtml(input.telefono);
  const tipologia = escapeHtml(tipologiaLabel(input.tipologia));
  const messaggio = nl2br(input.messaggio);
  const provenienza = input.paginaProvenienza
    ? escapeHtml(input.paginaProvenienza)
    : "(non disponibile)";

  return `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nuova analisi gratuita</title>
  </head>
  <body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Inter,Arial,Helvetica,sans-serif;color:#0B1220;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border:1px solid #E5E1DA;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="background-color:#0B1220;color:#FFFFFF;padding:24px 28px;">
                <div style="font-family:Georgia,serif;font-size:20px;font-weight:600;letter-spacing:-0.01em;">${escapeHtml(site.name)}</div>
                <div style="margin-top:6px;font-size:13px;color:rgba(255,255,255,0.78);">Nuova richiesta di analisi gratuita</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <h1 style="margin:0 0 8px 0;font-family:Georgia,serif;font-size:22px;font-weight:500;color:#0B1220;line-height:1.25;">
                  Nuova richiesta da ${nome}
                </h1>
                <p style="margin:0 0 20px 0;font-size:14px;color:#6B7280;line-height:1.6;">
                  Tipologia: <strong style="color:#0B1220;">${tipologia}</strong>
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#6B7280;width:140px;">Nome</td>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#0B1220;font-weight:600;">${nome}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#6B7280;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#0B1220;">
                      <a href="mailto:${email}" style="color:#8C1D2C;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#6B7280;">Telefono</td>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#0B1220;">
                      <a href="tel:${telefono}" style="color:#8C1D2C;text-decoration:none;">${telefono}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#6B7280;">Tipologia</td>
                    <td style="padding:10px 0;border-bottom:1px solid #E5E1DA;color:#0B1220;">${tipologia}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:16px 0 8px 0;color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Messaggio</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:0 0 16px 0;color:#0B1220;font-size:14px;line-height:1.7;background-color:#F5EFE6;border-radius:10px;">
                      <div style="padding:14px 16px;">${messaggio}</div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:24px;padding:14px 16px;background-color:#FAF7F2;border:1px solid #E5E1DA;border-radius:10px;">
                  <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#6B7280;margin-bottom:6px;">Contesto</div>
                  <div style="font-size:13px;color:#0B1220;">Pagina di provenienza: <span style="color:#1F2937;">${provenienza}</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background-color:#F5EFE6;border-top:1px solid #E5E1DA;font-size:12px;color:#6B7280;line-height:1.6;">
                ${escapeHtml(site.legalName)} · ${escapeHtml(site.contact.locality)} · Orari: ${escapeHtml(site.contact.hours)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/* ============================================================
   Autoreply al cliente — tono umano e rassicurante. NIENTE EMOJI.
   ============================================================ */
export function clienteTemplate(input: LeadInput): string {
  const nome = escapeHtml(input.nome.split(" ")[0] || input.nome);
  const phone = escapeHtml(site.contact.phone);
  const phoneIntl = escapeHtml(site.contact.phoneIntl);
  const email = escapeHtml(site.contact.email);
  const address = escapeHtml(site.contact.address);
  const locality = escapeHtml(site.contact.locality);
  const hours = escapeHtml(site.contact.hours);
  const siteName = escapeHtml(site.name);
  const siteUrl = site.url;

  return `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Abbiamo ricevuto la tua richiesta</title>
  </head>
  <body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Inter,Arial,Helvetica,sans-serif;color:#0B1220;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border:1px solid #E5E1DA;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <div style="font-family:Georgia,serif;font-size:18px;font-weight:600;color:#8C1D2C;letter-spacing:-0.01em;">${siteName}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 24px 32px;">
                <h1 style="margin:0 0 16px 0;font-family:Georgia,serif;font-size:24px;font-weight:500;color:#0B1220;line-height:1.25;">
                  Ciao ${nome}, abbiamo ricevuto la tua richiesta.
                </h1>
                <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:#0B1220;">
                  Grazie per averci scritto. Stiamo dando un primo sguardo a quello che ci hai raccontato e, se serve, prepariamo qualche domanda per inquadrare meglio la tua situazione.
                </p>
                <p style="margin:0 0 24px 0;font-size:15px;line-height:1.7;color:#0B1220;">
                  <strong style="color:#0B1220;">Ti ricontatteremo entro 24 ore lavorative</strong>, all'indirizzo email che hai indicato o al numero di telefono. Il primo incontro è senza impegno e senza costi: scegli tu se farlo in studio, in videocall o per telefono.
                </p>

                <div style="margin:24px 0;padding:18px 20px;background-color:#F5EFE6;border-radius:10px;">
                  <div style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B7280;margin-bottom:10px;">Nel frattempo</div>
                  <ul style="margin:0;padding:0 0 0 18px;font-size:14px;line-height:1.8;color:#0B1220;">
                    <li><a href="${siteUrl}/servizi" style="color:#8C1D2C;text-decoration:none;">Esplora i nostri servizi</a></li>
                    <li><a href="${siteUrl}/blog" style="color:#8C1D2C;text-decoration:none;">Leggi gli articoli del blog</a></li>
                    <li><a href="${siteUrl}/contatti" style="color:#8C1D2C;text-decoration:none;">Vai alla pagina contatti</a></li>
                  </ul>
                </div>

                <p style="margin:24px 0 6px 0;font-size:15px;line-height:1.7;color:#0B1220;">
                  A presto,
                </p>
                <p style="margin:0;font-size:15px;line-height:1.7;color:#0B1220;font-weight:600;">
                  Lo studio ${siteName}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px 32px;background-color:#FAF7F2;border-top:1px solid #E5E1DA;">
                <div style="font-size:12px;color:#6B7280;line-height:1.7;">
                  <div><strong style="color:#0B1220;">${siteName}</strong></div>
                  <div>${address} — ${locality}</div>
                  <div>
                    Telefono:
                    <a href="tel:${phoneIntl}" style="color:#8C1D2C;text-decoration:none;">${phone}</a>
                  </div>
                  <div>
                    Email:
                    <a href="mailto:${email}" style="color:#8C1D2C;text-decoration:none;">${email}</a>
                  </div>
                  <div style="margin-top:6px;">Orari: ${hours}</div>
                </div>
              </td>
            </tr>
          </table>
          <div style="margin-top:14px;font-size:11px;color:#9CA3AF;">
            Hai ricevuto questa email perché hai compilato il form di analisi gratuita su ${siteUrl}.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
