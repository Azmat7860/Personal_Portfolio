import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import SectionLink from "@/components/common/SectionLink";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import TechBadge from "@/components/common/TechBadge";
import { experience } from "@/data/experience";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--bg-primary)]">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <div className="container-shell pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="section-kicker">Companies</p>
          <h1 className="section-heading">Professional Experience</h1>
          <p className="mt-2 text-lg leading-8 text-[var(--text-secondary)]">
            A closer look at the companies I have worked with, the roles I held, and what I delivered.
          </p>
          <SectionLink
            sectionId="work"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </SectionLink>
        </div>

        <div className="mt-12 grid gap-6">
          {experience.map((item) => (
            <article
              key={item.id}
              className="surface-panel rounded-[2rem] border border-[var(--border-subtle)] p-6 md:p-8"
            >
              <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 max-w-3xl">
                  <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-[-0.04em]">
                    {item.company}
                  </h2>
                  <p className="mt-2 text-lg text-[var(--accent-cyan)]">{item.role}</p>
                  <p className="mt-2 font-mono text-sm text-[var(--text-secondary)]">
                    {item.period.start} → {item.period.end}
                    {item.engagement ? ` • ${item.engagement}` : ""}
                  </p>
                  <p className="mt-5 leading-8 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>

                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-4 py-2 text-sm text-[var(--text-primary)] hover:border-[var(--border-accent)]"
                  >
                    Visit Website
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </div>

              <ul className="mt-8 grid gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>• {achievement}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {item.tech.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
