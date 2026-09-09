"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Cloud, Database, Monitor, Server, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import TechBadge from "@/components/common/TechBadge";
import { skillCategories, skillsTicker } from "@/data/skills";

const iconMap = {
  BookOpen,
  Cloud,
  Database,
  Monitor,
  Server,
  Sparkles,
};

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="stack">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Stacks</p>
          <h2 className="section-heading">Technology Stacks</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Technologies I use to build and ship production systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={category.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
                className="surface-panel rounded-[1.75rem] border border-[var(--border-subtle)] p-6 hover:-translate-y-1 hover:border-[var(--border-accent)]"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] text-[var(--accent-cyan)]">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
                  {category.label}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      label={skill.name}
                      color={skill.color}
                    />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="ticker-mask mt-8 overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--panel-muted)] px-0 py-3.5">
          <div
            className="flex min-w-max gap-8 font-mono text-sm text-[var(--text-muted)]"
            style={{ animation: shouldReduceMotion ? undefined : "marquee 60s linear infinite" }}
          >
            {[...skillsTicker, ...skillsTicker].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap">
                → {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
