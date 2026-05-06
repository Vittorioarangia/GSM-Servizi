import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileBar } from "@/components/layout/sticky-mobile-bar";
import { PageShimmer } from "@/components/layout/page-shimmer";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Commercialista Roma San Giovanni`,
    template: `%s — ${site.name}`,
  },
  description: site.shortDesc,
  applicationName: site.name,
  generator: "Next.js",
  authors: [{ name: site.legalName }],
  keywords: [
    "commercialista roma san giovanni",
    "commercialista roma appio latino",
    "commercialista piazza epiro",
    "commercialista roma re di roma",
    "studio commercialisti roma",
    "commercialista farmacie roma",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Commercialista Roma San Giovanni`,
    description: site.shortDesc,
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Vai al contenuto
        </a>
        <PageShimmer />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBar />
        <JsonLd data={localBusinessJsonLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
