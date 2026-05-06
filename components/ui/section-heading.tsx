import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
  id,
}: SectionHeadingProps): React.ReactElement {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "font-[family-name:var(--font-display)] text-ink [text-wrap:balance]",
          isCenter && "mx-auto",
        )}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "text-base text-muted md:text-lg leading-relaxed max-w-2xl [text-wrap:pretty]",
            isCenter && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
