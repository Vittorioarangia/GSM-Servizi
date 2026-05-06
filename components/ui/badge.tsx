import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "outline";
type BadgeSize = "sm" | "md";

const variantClass: Record<BadgeVariant, string> = {
  default: "bg-paper-warm border border-line text-ink",
  accent: "bg-accent-soft border border-accent/20 text-accent",
  outline: "bg-transparent border border-line-strong text-ink",
};

const sizeClass: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-0.5 tracking-wide",
  md: "text-xs px-2.5 py-1 tracking-wide",
};

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  uppercase?: boolean;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    {
      variant = "default",
      size = "md",
      uppercase = false,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full font-medium leading-none whitespace-nowrap",
          variantClass[variant],
          sizeClass[size],
          uppercase && "uppercase",
          className,
        )}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

export default Badge;
