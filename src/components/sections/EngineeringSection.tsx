"use client";

import {
  BookOpen,
  GitBranch,
  Layers,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="thinking" className="overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-20 mx-auto h-[min(32rem,50vw)] w-[min(72rem,100%)] rounded-full bg-cyan-400/6 blur-3xl"
      />
      <div className="container-shell relative z-10">
        <div className="max-w-3xl min-w-0">
          <p className="section-kicker">Thinking</p>
          <h2 className="section-heading">Core Delivery Strengths</h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg">
            The patterns and strengths I bring into the products I build.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {engineeringPrinciples.map((principle) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={principle.id}
                initial={false}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.05,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -8, scale: 1.015 }
                }
                className="surface-panel rounded-[1.75rem] border border-[var(--border-subtle)] p-5 sm:p-6 hover:-translate-y-1 hover:border-[var(--border-accent)]"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] text-[var(--accent-cyan)]">
                  <Icon className="size-5" aria-hidden />
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
