import { cn } from "@/lib/utils";

/**
 * TeamAvatar — placeholder monogramma per il team GSM Servizi.
 * Foto del team da rifare (servizio fotografico in agenda).
 * Finché non arrivano gli scatti, usiamo iniziali centrate su sfondo neutro.
 */

type Size = "sm" | "md" | "lg" | "xl";
type Tone = "accent" | "ink";

type Props = {
  initials: string;
  size?: Size;
  tone?: Tone;
  className?: string;
};

const sizeClasses: Record<Size, string> = {
  // sm = 40px (target tap minimo nelle liste compatte)
  sm: "h-10 w-10 text-base",
  // md = 64px
  md: "h-16 w-16 text-xl",
  // lg = 128px
  lg: "h-32 w-32 text-4xl",
  // xl = 200px
  xl: "h-[12.5rem] w-[12.5rem] text-6xl",
};

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink-soft text-paper-warm",
  accent: "bg-accent-soft text-accent",
};

export function TeamAvatar({
  initials,
  size = "md",
  tone = "ink",
  className,
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Ritratto placeholder, iniziali ${initials}`}
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-full font-[family-name:var(--font-display)] font-semibold tracking-tight ring-1 ring-line",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {/* TODO: sostituire con foto professionale */}
      <span aria-hidden="true">{initials}</span>
    </div>
  );
}

export default TeamAvatar;
