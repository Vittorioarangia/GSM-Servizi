"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [prevPathname, setPrevPathname] = useState<string>(pathname);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="container-page flex h-20 items-center justify-between gap-4 md:h-24">
        <Link
          href="/"
          aria-label={`${site.legalName} — home`}
          className="flex items-baseline gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:text-4xl">
            <span className="text-ink">GSM</span>{" "}
            <span className="text-accent">Servizi</span>
          </span>
          <span className="hidden font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.18em] text-muted sm:inline md:text-base">
            S.r.l.
          </span>
        </Link>

        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-1 md:flex"
        >
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors",
                  "hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  active && "text-accent"
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200",
                    "group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/analisi-gratuita"
            className="btn-primary hidden text-sm md:inline-flex"
          >
            Analisi gratuita
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-paper-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            hidden={!open}
            className={cn(
              "fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col gap-1 overflow-y-auto bg-paper px-6 py-8 md:hidden"
            )}
          >
            <nav aria-label="Navigazione mobile" className="flex flex-col gap-1">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-md px-4 py-3 text-base font-medium text-ink transition-colors",
                      "hover:bg-paper-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      active && "text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/analisi-gratuita" className="btn-primary w-full">
                Analisi gratuita
              </Link>
              <a
                href={`tel:${site.contact.phoneIntl}`}
                className="btn-secondary w-full"
              >
                Chiama: {site.contact.phone}
              </a>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
