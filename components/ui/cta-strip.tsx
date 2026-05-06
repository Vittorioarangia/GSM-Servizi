import * as React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export type CtaStripProps = {
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: "ink" | "paper";
  className?: string;
};

export function CtaStrip({
  title,
  subtitle,
  primaryHref = "/analisi-gratuita",
  primaryLabel = "Analisi gratuita",
  secondaryHref = `tel:${site.contact.phoneIntl}`,
  secondaryLabel = "Chiama",
  tone = "ink",
  className,
}: CtaStripProps): React.ReactElement {
  const isInk = tone === "ink";

  return (
    <section
      aria-label={title}
      className={cn(
        "relative w-full",
        isInk ? "bg-ink text-white" : "bg-paper-warm text-ink",
        className,
      )}
    >
      <div className="container-page section-y">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h2
              className={cn(
                "font-[family-name:var(--font-display)] [text-wrap:balance]",
                isInk ? "text-white" : "text-ink",
              )}
            >
              {title}
            </h2>
            {subtitle ? (
              <p
                className={cn(
                  "mt-4 text-base md:text-lg leading-relaxed",
                  isInk ? "text-white/80" : "text-muted",
                )}
              >
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:shrink-0">
            <Button
              href={primaryHref}
              variant="primary"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant={isInk ? "white" : "secondary"}
              iconLeft={<Phone className="h-4 w-4" />}
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaStrip;
