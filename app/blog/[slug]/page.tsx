import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/seo";

/**
 * Placeholder per il futuro routing degli articoli.
 * Verrà popolato con MDX nei prossimi step. Per ora ogni richiesta ritorna 404.
 */

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return [];
}

export const metadata: Metadata = buildMetadata({
  title: "Articolo non disponibile",
  description: "Questo articolo non è ancora pubblicato.",
  path: "/blog",
  noIndex: true,
});

type Params = Promise<{ slug: string }>;

export default async function BlogArticlePage({
  params,
}: {
  params: Params;
}): Promise<never> {
  // Riferimento a params per evitare warning del linter; il valore non è usato
  // perché ogni slug porta a 404 finché non implementiamo MDX.
  await params;
  notFound();
}
