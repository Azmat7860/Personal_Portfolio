"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CalendarDays,
  FolderKanban,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import GradientText from "@/components/common/GradientText";
import SectionWrapper from "@/components/common/SectionWrapper";
import { personal } from "@/data/personal";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useHasMounted } from "@/hooks/useHasMounted";

const statusIconMap = {
  MapPin,
  Briefcase,
  Sparkles,
  Rocket,
};

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const hasMounted = useHasMounted();
  const canAnimate = hasMounted && !shouldReduceMotion;
  const resolvedStats = [
    { label: "Years Experience", display: "3+", icon: CalendarDays },
    { label: "Companies", display: String(experience.length), icon: Building2 },
    { label: "Degree", display: "BSCS", icon: GraduationCap },
    { label: "Projects", display: String(projects.length), icon: FolderKanban },
  ];

  return (
    <SectionWrapper id="about">
      <div className="container-shell grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
        <motion.div
          variants={staggerContainer}
          initial={false}
          whileInView={canAnimate ? "visible" : undefined}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-kicker">About</p>
          <div className="grid grid-cols-2 gap-4">
            {resolvedStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.article
                  key={stat.label}
                  variants={fadeInUp}
                  initial={false}
                  whileHover={canAnimate ? { y: -6, scale: 1.01 } : undefined}
                  className="surface-panel relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] p-4 pr-11 sm:p-5 sm:pr-12 hover:border-[var(--border-accent)]"
                >
                  <div className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] text-[var(--accent-cyan)]">
                    <Icon className="size-4" />
                  </div>
                  <p className="font-[family-name:var(--font-outfit)] text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-[-0.05em]">
                    <GradientText>
                      {/\d/.test(stat.display) ? (
                        <AnimatedCounter value={stat.display} />
                      ) : (
                        stat.display
                      )}
                    </GradientText>
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            initial={false}
            className="surface-panel mt-4 rounded-3xl border border-[var(--border-subtle)] p-6"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Status
            </p>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              {personal.statusItems.map((item, index) => {
                const Icon = statusIconMap[item.icon as keyof typeof statusIconMap];

                return (
                  <div
                    key={item.label}
                    className={`flex items-start gap-3 ${
                      index !== 0 ? "border-t border-[var(--border-subtle)] pt-3" : ""
                    }`}
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-[var(--accent-cyan)]" />
                    <span className="leading-6">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial={false}
            className="surface-panel mt-4 rounded-3xl border border-[var(--border-subtle)] p-6"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Education
            </p>
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-[var(--text-primary)]">
              {personal.education.degree}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {personal.education.school}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--panel-muted)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-code)]">
              <CalendarDays className="size-3.5" />
              {personal.education.period}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-[38rem] min-w-0"
          initial={false}
          whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(1.5rem,2.5vw,2.35rem)] font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
            The Engineer Behind the Code
          </h2>
          <p className="section-heading mt-2">Professional Summary</p>
          <div className="mt-6 space-y-5 text-[1.04rem] leading-7 text-[var(--text-secondary)] sm:leading-8">
            {personal.about.map((paragraph) => (
              <p key={paragraph} className="min-w-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
