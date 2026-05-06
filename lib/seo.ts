import type { Metadata } from "next";
import { site } from "./site";
import { absoluteUrl } from "./utils";

type SeoArgs = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path = "/", ogImage, noIndex }: SeoArgs): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ?? absoluteUrl("/og/cover.jpg");
  const fullTitle = title.includes(site.name) ? title : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: "it_IT",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

/* ============================================================
   JSON-LD generators
   ============================================================ */

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#studio`,
    name: site.legalName,
    url: site.url,
    image: absoluteUrl("/og/cover.jpg"),
    logo: absoluteUrl("/logo.svg"),
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: site.contact.locality,
      addressRegion: site.contact.region,
      postalCode: site.contact.postalCode,
      addressCountry: site.contact.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    areaServed: [
      { "@type": "City", name: "Roma" },
      { "@type": "Place", name: "San Giovanni" },
      { "@type": "Place", name: "Appio Latino" },
      { "@type": "Place", name: "Piazza Epiro" },
      { "@type": "Place", name: "Re di Roma" },
      { "@type": "Place", name: "Tuscolano" },
      { "@type": "Place", name: "Laterano" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: [site.social.linkedin, site.social.facebook, site.social.instagram, site.social.google].filter(Boolean),
  } as const;
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.href),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${site.url}/#studio` },
    areaServed: { "@type": "City", name: "Roma" },
    url: absoluteUrl(opts.path),
  };
}

export function personJsonLd(p: { slug: string; name: string; role: string; bio: string; expertise: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    description: p.bio,
    knowsAbout: p.expertise,
    worksFor: { "@id": `${site.url}/#studio` },
    url: absoluteUrl(`/chi-siamo/team/${p.slug}`),
  };
}

export function articleJsonLd(opts: { title: string; description: string; path: string; datePublished: string; dateModified?: string; author?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName, logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") } },
    url: absoluteUrl(opts.path),
  };
}
