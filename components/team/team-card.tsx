import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Membro } from "@/lib/site";
import { cn } from "@/lib/utils";
import { TeamAvatar } from "@/components/team/team-avatar";

type Variant = "compact" | "featured";

type Props = {
  member: Membro;
  variant?: Variant;
  className?: string;
};

/**
 * TeamCard — card riusabile per pagina Studio e referenze al team.
 * "featured" = card grande verticale (avatar XL, bio, expertise).
 * "compact"  = card ridotta (avatar md, riga base).
 * Foto reali da inserire in seguito; per ora monogrammi via TeamAvatar.
 */
export function TeamCard({ member, variant = "featured", className }: Props) {
  const href = `/chi-siamo/team/${member.slug}`;
  const isFeatured = variant === "featured";
  const isLeadFeatured = isFeatured && member.isLead === true;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-line bg-paper-warm transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_30px_-18px_rgba(11,18,32,0.25)]",
        isFeatured ? "p-7 md:p-8" : "p-5 md:p-6",
        isLeadFeatured && "border-l-4 border-l-accent",
        className,
      )}
      aria-labelledby={`team-${member.slug}-name`}
    >
      <div
        className={cn(
          "flex",
          isFeatured
            ? "flex-col items-center text-center md:items-start md:text-left"
            : "flex-row items-center gap-4 text-left",
        )}
      >
        <TeamAvatar
          initials={member.initials}
          size={isFeatured ? "xl" : "md"}
          tone={isLeadFeatured ? "accent" : "ink"}
        />

        <div className={cn(isFeatured ? "mt-6 md:mt-8" : "min-w-0 flex-1")}>
          {member.isLead && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Capo dello studio
            </p>
          )}
          <h3
            id={`team-${member.slug}-name`}
            className={cn(
              "font-[family-name:var(--font-display)] text-ink",
              isFeatured ? "text-2xl md:text-3xl" : "text-lg",
            )}
          >
            {member.name}
          </h3>
          <p
            className={cn(
              "text-muted",
              isFeatured ? "mt-2 text-sm md:text-base" : "mt-1 text-sm",
            )}
          >
            {member.role}
          </p>
        </div>
      </div>

      {isFeatured && (
        <p className="mt-6 text-base leading-relaxed text-ink/80">
          {member.bio}
        </p>
      )}

      {isFeatured && member.expertise.length > 0 && (
        <ul
          role="list"
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`Aree di competenza di ${member.name}`}
        >
          {member.expertise.map((tag) => (
            <li
              key={tag}
              className="inline-flex items-center rounded-full border border-line-strong bg-paper px-3 py-1 text-xs font-medium text-ink/75"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className={cn("mt-auto", isFeatured ? "pt-6" : "pt-4")}>
        <Link
          href={href}
          aria-label={`Apri il profilo completo di ${member.name}`}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Profilo completo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default TeamCard;
