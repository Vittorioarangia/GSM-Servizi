import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SettoriShowcase } from "@/components/sections/settori-showcase";
import { ZonesStrip } from "@/components/sections/zones-strip";
import { TeamTeaser } from "@/components/sections/team-teaser";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata: Metadata = buildMetadata({
  title: "GSM Servizi — Commercialista Roma San Giovanni",
  description:
    "Studio commercialisti a Roma San Giovanni / Appio Latino. Oltre 300 clienti tra PMI, farmacie, professionisti e privati. Primo incontro gratuito, risposta entro 24h.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SettoriShowcase />
      <ZonesStrip />
      <TeamTeaser />
      <FaqAccordion />
      <CtaFinal />
    </>
  );
}
