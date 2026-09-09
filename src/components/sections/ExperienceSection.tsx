"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import TechBadge from "@/components/common/TechBadge";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  const visibleExperience = experience.slice(0, 3);

  return (
    <SectionWrapper id="work">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Experience</p>
          <h2 className="section-heading">
            Companies I&apos;ve Built With
          </h2>
        </div>

        <div className="relative mt-8 md:mt-10">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(0,210,255,0),rgba(0,210,255,0.7),rgba(139,92,246,0.7),rgba(139,92,246,0))] md:left-1/2 md:block" />
          <div className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(0,210,255,0),rgba(0,210,255,0.7),rgba(139,92,246,0.7),rgba(139,92,246,0))] md:hidden" />

          <div className="space-y-6 md:space-y-8">
            {visibleExperience.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid gap-4 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="hidden md:block" />
                <span className="absolute left-[14px] top-8 size-3 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,210,255,0.4)] md:left-1/2 md:-translate-x-1/2" />
                <motion.article
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -6 }}
                  className="surface-panel ml-10 rounded-[1.75rem] border border-[var(--border-subtle)] p-6 md:ml-0"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex size-8 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] text-[var(--accent-cyan)]">
                      <Briefcase className="size-3.5" />
                    </span>
                    <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold">
                      {item.company}
                    </h3>
                  </div>
                  <p className="mt-2 text-[var(--accent-cyan)]">{item.role}</p>
                  <p className="mt-1 flex min-w-0 flex-wrap items-center gap-2 font-mono text-sm text-[var(--text-secondary)]">
                    <CalendarDays className="size-3.5 shrink-0 text-[var(--text-muted)]" />
                    <span className="min-w-0 break-words">
                      {item.period.start} → {item.period.end}
                      {item.engagement ? ` · ${item.engagement}` : ""}
                    </span>
                  </p>
                  <p className="mt-5 text-[var(--text-secondary)]">{item.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>• {achievement}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.tech.slice(0, 10).map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>

        {experience.length > 3 ? (
          <div className="mt-6 flex justify-center">
            <Link
              href="/companies"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              View All Companies
            </Link>
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}
