"use client";

import {
  BookOpen,
  GitBranch,
  Layers,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { engineeringPrinciples } from "@/data/principles";

const iconMap = {
  BookOpen,
  GitBranch,
  Layers,
  Shield,
  TrendingUp,
  Zap,
};

export default function EngineeringSection() {
  return (
    <SectionWrapper id="thinking" className="overflow-hidden">
      <div className="absolute inset-x-0 top-20 mx-auto h-[32rem] w-[72rem] max-w-full rounded-full bg-cyan-400/6 blur-3xl" />
      <div className="container-shell relative z-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Thinking</p>
          <h2 className="section-heading">
            Core Delivery Strengths
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            The patterns and strengths I bring into the products I build.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {engineeringPrinciples.map((principle) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="surface-panel rounded-[1.75rem] border border-[var(--border-subtle)] p-6 hover:-translate-y-1 hover:border-[var(--border-accent)]"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] text-[var(--accent-cyan)]">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  {principle.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {principle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--panel-muted)] px-3 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
