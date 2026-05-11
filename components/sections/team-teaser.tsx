import Link from "next/link";

import { team } from "@/lib/site";

export function TeamTeaser() {
  const members = team.slice(0, 4);

  return (
    <section
      aria-labelledby="team-title"
      className="section-y bg-paper-warm"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Lo studio
          </p>
          <h2 id="team-title" className="text-ink">
            Il team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
            Due soci e una professionista qualificata: persone reali, con esperienza
            sul territorio romano.
          </p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {members.map((m) => {
            const visibleExpertise = m.expertise.slice(0, 2);
            return (
              <li
                key={m.slug}
                className="flex h-full flex-col items-center rounded-xl border border-line bg-paper p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_-15px_rgba(11,18,32,0.25)]"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent font-[family-name:var(--font-display)] text-2xl font-medium text-white"
                >
                  {m.initials}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {m.role}
                </p>
                {visibleExpertise.length > 0 && (
                  <ul role="list" className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {visibleExpertise.map((e) => (
                      <li
                        key={e}
                        className="rounded-full border border-line bg-paper-warm px-2.5 py-1 text-[11px] font-medium text-ink/80"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link href="/chi-siamo" className="btn-secondary">
            Conosci tutto lo studio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TeamTeaser;
