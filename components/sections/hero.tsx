"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, Coffee, MapPin } from "lucide-react";

import { site } from "@/lib/site";

const subscribeMediaQueries = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 768px)");
  reduceMotion.addEventListener("change", callback);
  desktop.addEventListener("change", callback);
  return () => {
    reduceMotion.removeEventListener("change", callback);
    desktop.removeEventListener("change", callback);
  };
};

const getEnableVideo = (): boolean => {
  if (typeof window === "undefined") return false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  return !reduceMotion && isDesktop;
};

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const enableVideo = useSyncExternalStore(
    subscribeMediaQueries,
    getEnableVideo,
    () => false,
  );

  useEffect(() => {
    if (!enableVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [enableVideo]);

  return (
    <section
      aria-label="Introduzione GSM Servizi"
      className="relative isolate flex min-h-[88vh] w-full items-center overflow-hidden md:min-h-[92vh]"
    >
      {/* Background: poster mobile + video desktop */}
      <div className="absolute inset-0 -z-10">
        {/* Poster sempre visibile su mobile (e fallback se il video non parte) */}
        <Image
          src="/media/hero/home-roma-poster.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />

        {/* Su desktop: o il video o (se reduced-motion) il poster come fallback */}
        {enableVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero/home-roma-poster.webp"
            aria-hidden="true"
            className="hidden h-full w-full object-cover md:block"
          >
            <source src="/media/hero/home-roma.webm" type="video/webm" />
            <source src="/media/hero/home-roma.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/media/hero/home-roma-poster.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover md:block"
          />
        )}

        {/* Overlay leggibilità */}
        <div className="hero-video-overlay absolute inset-0" aria-hidden="true" />
      </div>

      {/* Contenuto */}
      <div className="container-page relative z-10 w-full py-24 text-paper md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
            Studio di Dottori Commercialisti · Roma
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-paper [text-wrap:balance]">
            Studio di Dottori Commercialisti
            <br />
            a Roma <span className="text-accent-soft">San Giovanni</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90 md:text-xl">
            Consulenza fiscale, societaria e del lavoro per imprese e
            professionisti. Oltre 300 clienti tra PMI, farmacie e privati.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/analisi-gratuita"
              className="btn-primary"
              aria-label="Richiedi un'analisi gratuita"
            >
              Analisi gratuita
            </Link>
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="btn-secondary border-white/70 bg-white/10 text-paper backdrop-blur-sm hover:border-white hover:bg-white/20"
              aria-label={`Chiama lo studio al numero ${site.contact.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Chiamaci
            </a>
          </div>

          {/* Trust strip */}
          <ul
            role="list"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper/85"
          >
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-soft" aria-hidden="true" />
              <span>Risposta entro 24h</span>
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="h-4 w-4 text-accent-soft" aria-hidden="true" />
              <span>Primo incontro gratuito</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-soft" aria-hidden="true" />
              <span>Studio a Piazza Epiro</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
