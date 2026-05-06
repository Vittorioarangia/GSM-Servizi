import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GSM Servizi — Commercialista Roma San Giovanni";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0B1220";
const PAPER = "#FAF7F2";
const PAPER_WARM = "#F5EFE6";
const ACCENT = "#8C1D2C";
const ACCENT_SOFT = "#F2E6DC";
const MUTED = "#6B7280";

async function loadFraunces(weight: 400 | 600 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,${weight}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
    },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?[\w-]+['"]?\)/);
  if (!match) {
    throw new Error("Fraunces font URL not found");
  }
  const fontUrl = match[1].replace(/['"]/g, "");
  const fontRes = await fetch(fontUrl);
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  const [frauncesRegular, frauncesBold] = await Promise.all([
    loadFraunces(400),
    loadFraunces(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundImage: `linear-gradient(135deg, ${PAPER} 0%, ${PAPER_WARM} 100%)`,
          fontFamily: "Fraunces",
          color: INK,
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "60%",
            paddingRight: "48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "84px",
                height: "84px",
                borderRadius: "18px",
                backgroundColor: ACCENT,
                color: PAPER,
                fontSize: "60px",
                fontWeight: 700,
                lineHeight: 1,
                fontFamily: "FrauncesBold",
              }}
            >
              G
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontFamily: "FrauncesBold",
                  fontWeight: 700,
                  color: INK,
                  lineHeight: 1.1,
                }}
              >
                GSM Servizi
              </span>
              <span
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginTop: "4px",
                }}
              >
                Studio Commercialisti
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1
              style={{
                fontSize: "68px",
                fontFamily: "FrauncesBold",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: INK,
                margin: 0,
              }}
            >
              Il tuo commercialista a Roma San Giovanni.
            </h1>
            <p
              style={{
                fontSize: "26px",
                lineHeight: 1.4,
                color: MUTED,
                margin: 0,
              }}
            >
              Numeri chiari, decisioni serene. PMI, farmacie, professionisti, privati.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: ACCENT,
              }}
            />
            <span style={{ fontSize: "20px", color: INK }}>
              gsmservizi.it · Appio Latino, Roma
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            border: `2px solid ${ACCENT}`,
            borderRadius: "20px",
            backgroundColor: ACCENT_SOFT,
            padding: "48px 32px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "24px",
            }}
          >
            Primo incontro
          </span>
          <span
            style={{
              fontSize: "76px",
              fontFamily: "FrauncesBold",
              fontWeight: 700,
              lineHeight: 1,
              color: ACCENT,
              textAlign: "center",
            }}
          >
            Analisi
            <br />
            gratuita
          </span>
          <div
            style={{
              marginTop: "28px",
              padding: "12px 22px",
              borderRadius: "999px",
              backgroundColor: ACCENT,
              color: PAPER,
              fontSize: "20px",
              fontFamily: "Fraunces",
              fontWeight: 400,
            }}
          >
            Risposta entro 24h
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              fontSize: "14px",
              color: MUTED,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Prenota online
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesRegular, style: "normal", weight: 400 },
        { name: "FrauncesBold", data: frauncesBold, style: "normal", weight: 700 },
      ],
    },
  );
}
