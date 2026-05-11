"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";

const INITIAL_DURATION_MS = 4200;
const NAVIGATION_DURATION_MS = 2000;

export function PageShimmer() {
  const pathname = usePathname();
  const [active, setActive] = useState<boolean>(true);
  const [renderKey, setRenderKey] = useState<number>(0);
  const [prevPathname, setPrevPathname] = useState<string>(pathname);
  const [isInitial, setIsInitial] = useState<boolean>(true);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname === "/") {
      setActive(true);
      setIsInitial(false);
      setRenderKey((k) => k + 1);
    }
  }

  useEffect(() => {
    if (!active) return;
    const duration = isInitial ? INITIAL_DURATION_MS : NAVIGATION_DURATION_MS;
    const t = window.setTimeout(() => setActive(false), duration);
    return () => window.clearTimeout(t);
  }, [active, renderKey, isInitial]);

  if (!active) return null;

  return (
    <div
      key={renderKey}
      role="status"
      aria-live="polite"
      aria-label="Caricamento pagina"
      className="page-shimmer-overlay"
    >
      <div className="page-shimmer-stage">
        <span className="page-shimmer-wordmark">
          GSM Servizi
        </span>
        <span className="page-shimmer-suffix">{site.legalName.endsWith("S.r.l.") ? "S.r.l." : ""}</span>
      </div>
    </div>
  );
}

export default PageShimmer;
