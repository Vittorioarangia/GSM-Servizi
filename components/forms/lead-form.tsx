"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, Phone } from "lucide-react";

import {
  leadSchema,
  type LeadInput,
  tipologie,
  tipologieLabels,
} from "@/lib/lead-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "error";

const inputBase =
  "block w-full h-12 rounded-md border border-line-strong bg-white px-3.5 text-[15px] text-ink placeholder:text-muted-soft transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60";

const inputError = "border-danger focus:border-danger focus:ring-danger/20";

export function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      messaggio: "",
      website: "",
    },
  });

  const onSubmit = async (data: LeadInput) => {
    setStatus("submitting");
    setSubmitError(null);

    const paginaProvenienza =
      typeof document !== "undefined" && document.referrer
        ? document.referrer.slice(0, 200)
        : typeof window !== "undefined"
          ? window.location.pathname
          : undefined;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, paginaProvenienza }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(
          payload?.error ??
            "Qualcosa è andato storto durante l'invio. Riprova o chiamaci.",
        );
      }

      router.push("/analisi-gratuita/grazie");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Qualcosa è andato storto durante l'invio. Riprova o chiamaci.";
      setSubmitError(message);
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04)] sm:p-8"
      aria-describedby="lead-form-help"
    >
      <p id="lead-form-help" className="mb-6 text-sm text-muted">
        I campi contrassegnati sono tutti obbligatori. Non condivideremo i tuoi
        dati con terze parti.
      </p>

      {/* Nome */}
      <div className="mb-5">
        <label
          htmlFor="lead-nome"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Nome e cognome
        </label>
        <input
          id="lead-nome"
          type="text"
          autoComplete="name"
          aria-invalid={errors.nome ? "true" : undefined}
          aria-describedby={errors.nome ? "lead-nome-err" : undefined}
          className={cn(inputBase, errors.nome && inputError)}
          {...register("nome")}
        />
        {errors.nome && (
          <p id="lead-nome-err" className="mt-1.5 text-sm text-danger">
            {errors.nome.message}
          </p>
        )}
      </div>

      {/* Email + Telefono */}
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="lead-email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "lead-email-err" : undefined}
            className={cn(inputBase, errors.email && inputError)}
            {...register("email")}
          />
          {errors.email && (
            <p id="lead-email-err" className="mt-1.5 text-sm text-danger">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lead-telefono"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Telefono
          </label>
          <input
            id="lead-telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={errors.telefono ? "true" : undefined}
            aria-describedby={
              errors.telefono ? "lead-telefono-err" : "lead-telefono-help"
            }
            className={cn(inputBase, errors.telefono && inputError)}
            {...register("telefono")}
          />
          {errors.telefono ? (
            <p id="lead-telefono-err" className="mt-1.5 text-sm text-danger">
              {errors.telefono.message}
            </p>
          ) : (
            <p id="lead-telefono-help" className="mt-1.5 text-xs text-muted">
              Ti ricontattiamo qui se preferisci.
            </p>
          )}
        </div>
      </div>

      {/* Tipologia */}
      <fieldset className="mb-5">
        <legend className="mb-2 block text-sm font-medium text-ink">
          Tipologia
        </legend>
        <div
          role="radiogroup"
          aria-invalid={errors.tipologia ? "true" : undefined}
          aria-describedby={
            errors.tipologia ? "lead-tipologia-err" : undefined
          }
          className="grid gap-2 sm:grid-cols-2"
        >
          {tipologie.map((value) => {
            const id = `lead-tipologia-${value}`;
            return (
              <label
                key={value}
                htmlFor={id}
                className="flex cursor-pointer items-center gap-3 rounded-md border border-line-strong bg-white px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-200 has-[:checked]:border-accent has-[:checked]:bg-accent-soft hover:border-ink"
              >
                <input
                  id={id}
                  type="radio"
                  value={value}
                  className="h-4 w-4 accent-accent"
                  {...register("tipologia")}
                />
                <span>{tipologieLabels[value]}</span>
              </label>
            );
          })}
        </div>
        {errors.tipologia && (
          <p id="lead-tipologia-err" className="mt-1.5 text-sm text-danger">
            {errors.tipologia.message}
          </p>
        )}
      </fieldset>

      {/* Messaggio */}
      <div className="mb-5">
        <label
          htmlFor="lead-messaggio"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Cosa ti serve?
        </label>
        <textarea
          id="lead-messaggio"
          rows={4}
          aria-invalid={errors.messaggio ? "true" : undefined}
          aria-describedby={
            errors.messaggio ? "lead-messaggio-err" : "lead-messaggio-help"
          }
          placeholder="Es. Apertura partita IVA in regime forfettario, oppure: vorrei una valutazione del bilancio della mia SRL, oppure: ho ricevuto un avviso dell'Agenzia delle Entrate..."
          className={cn(
            "block w-full rounded-md border border-line-strong bg-white p-3.5 text-[15px] text-ink placeholder:text-muted-soft transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60",
            errors.messaggio && inputError,
          )}
          {...register("messaggio")}
        />
        {errors.messaggio ? (
          <p id="lead-messaggio-err" className="mt-1.5 text-sm text-danger">
            {errors.messaggio.message}
          </p>
        ) : (
          <p id="lead-messaggio-help" className="mt-1.5 text-xs text-muted">
            Anche solo poche righe vanno bene: ne parliamo insieme.
          </p>
        )}
      </div>

      {/* Honeypot — invisibile a utenti, accessibile per bot */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="lead-website">Sito web (lasciare vuoto)</label>
        <input
          id="lead-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          {...register("website")}
        />
      </div>

      {/* Consenso */}
      <div className="mb-6">
        <label
          htmlFor="lead-consenso"
          className="flex cursor-pointer items-start gap-3 text-sm text-ink"
        >
          <input
            id="lead-consenso"
            type="checkbox"
            aria-invalid={errors.consenso ? "true" : undefined}
            aria-describedby={
              errors.consenso ? "lead-consenso-err" : undefined
            }
            className="mt-1 h-4 w-4 rounded border-line-strong accent-accent"
            {...register("consenso")}
          />
          <span className="leading-relaxed">
            Ho letto e accetto l&apos;
            <Link
              href="/note-legali/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              informativa privacy
            </Link>
            . Acconsento al trattamento dei dati per essere ricontattato.
          </span>
        </label>
        {errors.consenso && (
          <p id="lead-consenso-err" className="mt-1.5 text-sm text-danger">
            {errors.consenso.message}
          </p>
        )}
      </div>

      {/* Errore submit */}
      {submitError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-5 flex items-start gap-3 rounded-md border border-danger/30 bg-danger/5 p-3.5 text-sm text-danger"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>
            <div className="font-medium">{submitError}</div>
            <div className="mt-1 text-ink">
              Puoi anche chiamarci al{" "}
              <a
                href={`tel:${site.contact.phoneIntl}`}
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {site.contact.phone}
              </a>
              .
            </div>
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Invio in corso…
            </>
          ) : (
            "Invia richiesta"
          )}
        </button>
        <a
          href={`tel:${site.contact.phoneIntl}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Oppure chiama: {site.contact.phone}
        </a>
      </div>
    </form>
  );
}

export default LeadForm;
