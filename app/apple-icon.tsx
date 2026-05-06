import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PAPER = "#FAF7F2";
const ACCENT = "#8C1D2C";

async function loadFraunces(): Promise<ArrayBuffer> {
  const cssUrl =
    "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&display=swap";
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

export default async function AppleIcon(): Promise<ImageResponse> {
  const fraunces = await loadFraunces();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: PAPER,
          color: ACCENT,
          fontFamily: "Fraunces",
          fontSize: 138,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          borderRadius: 36,
        }}
      >
        G
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
      ],
    },
  );
}
