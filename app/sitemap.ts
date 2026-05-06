import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servizi, settori, zone, team } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/chi-siamo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/servizi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/settori`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.url}/zone`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contatti`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/analisi-gratuita`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
  ];

  const serviziUrls = servizi.map((s) => ({
    url: `${site.url}/servizi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  const settoriUrls = settori.map((s) => ({
    url: `${site.url}/settori/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const zoneUrls = zone.map((z) => ({
    url: `${site.url}/zone/${z.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const teamUrls = team.map((t) => ({
    url: `${site.url}/chi-siamo/team/${t.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...base, ...serviziUrls, ...settoriUrls, ...zoneUrls, ...teamUrls];
}
