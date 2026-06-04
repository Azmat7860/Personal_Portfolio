"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Monitor, Server } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import TechBadge from "@/components/common/TechBadge";
import { skillCategories, skillsTicker } from "@/data/skills";

const iconMap = {
  Cloud,
  Database,
  Monitor,
  Server,
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="stack">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Stack</p>
          <h2 className="section-heading">
            Technology Stack
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Technologies powering production systems I build.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const spanClass =
              index === 0 ? "md:col-span-2 lg:col-span-1" : index === 1 ? "lg:row-span-1" : "";

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`surface-panel rounded-[1.75rem] border border-white/8 p-6 hover:-translate-y-1 hover:border-[var(--border-accent)] ${spanClass}`}
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-[var(--accent-cyan)]">
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

        <div className="ticker-mask mt-12 overflow-hidden rounded-full border border-white/8 bg-white/[0.02] px-0 py-4">
          <div
            className="flex min-w-max gap-8 font-mono text-sm text-[var(--text-muted)]"
            style={{ animation: "marquee 60s linear infinite" }}
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
