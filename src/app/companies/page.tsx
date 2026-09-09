import SectionLink from "@/components/common/SectionLink";
import TechBadge from "@/components/common/TechBadge";
import SiteChrome from "@/components/layout/SiteChrome";
import { experience } from "@/data/experience";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--bg-primary)]">
      <SiteChrome>
        <div className="container-shell pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl min-w-0">
            <p className="section-kicker">Companies</p>
            <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-[-0.04em] text-[var(--text-primary)]">
              Professional Experience
            </h1>
            <p className="mt-3 text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              A closer look at the companies I have worked with, the roles I held,
              and what I delivered.
            </p>
            <SectionLink
              sectionId="work"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to Home
            </SectionLink>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6">
            {experience.map((item) => (
              <article
                key={item.id}
                className="surface-panel rounded-[2rem] border border-[var(--border-subtle)] p-5 sm:p-6 md:p-8"
              >
                <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                  <div className="min-w-0 max-w-3xl">
                    <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(1.4rem,3vw,1.875rem)] font-semibold tracking-[-0.04em]">
                      {item.company}
                    </h2>
                    <p className="mt-2 text-base text-[var(--accent-cyan)] sm:text-lg">
                      {item.role}
                    </p>
                    <p className="mt-2 break-words font-mono text-sm text-[var(--text-secondary)]">
                      {item.period.start} → {item.period.end}
                      {item.engagement ? ` • ${item.engagement}` : ""}
                    </p>
                    <p className="mt-5 leading-7 text-[var(--text-secondary)] sm:leading-8">
                      {item.description}
                    </p>
                  </div>

                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-4 py-2 text-sm text-[var(--text-primary)] hover:border-[var(--border-accent)]"
                    >
                      Visit Website
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  ) : null}
                </div>

                <ul className="mt-7 grid gap-3 text-sm leading-7 text-[var(--text-secondary)] sm:mt-8">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="min-w-0 break-words">
                      • {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                  {item.tech.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SiteChrome>
    </main>
  );
}
