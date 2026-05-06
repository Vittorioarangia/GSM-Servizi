import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-ink hover:bg-paper-warm rounded-md transition-colors",
  white:
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors",
};

const sizeClass: Record<Size, string> = {
  sm: "text-sm px-4 py-2 min-h-9",
  md: "text-base px-6 py-3 min-h-11",
  lg: "text-lg px-8 py-4 min-h-12",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
    external?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buildClass(
  variant: Variant,
  size: Size,
  fullWidth: boolean | undefined,
  className: string | undefined,
): string {
  const useUtility = variant === "primary" || variant === "secondary";
  return cn(
    variantClass[variant],
    !useUtility && sizeClass[size],
    fullWidth && "w-full",
    className,
  );
}

function Inner({
  iconLeft,
  iconRight,
  children,
}: Pick<CommonProps, "iconLeft" | "iconRight" | "children">): React.ReactElement {
  return (
    <>
      {iconLeft ? (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {iconLeft}
        </span>
      ) : null}
      <span>{children}</span>
      {iconRight ? (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {iconRight}
        </span>
      ) : null}
    </>
  );
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    iconLeft,
    iconRight,
    fullWidth,
  } = props;

  const classes = buildClass(variant, size, fullWidth, className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children: _children, iconLeft: _il, iconRight: _ir, fullWidth: _fw, ...anchorProps } = props;
    void _v; void _s; void _c; void _children; void _il; void _ir; void _fw;

    const isExternal = external ?? /^(https?:|mailto:|tel:|#)/i.test(href);

    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorProps}
        >
          <Inner iconLeft={iconLeft} iconRight={iconRight}>
            {children}
          </Inner>
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorProps}
      >
        <Inner iconLeft={iconLeft} iconRight={iconRight}>
          {children}
        </Inner>
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _children, iconLeft: _il, iconRight: _ir, fullWidth: _fw, type, ...buttonProps } = props as ButtonAsButton;
  void _v; void _s; void _c; void _children; void _il; void _ir; void _fw;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      <Inner iconLeft={iconLeft} iconRight={iconRight}>
        {children}
      </Inner>
    </button>
  );
});

export default Button;
