"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";
import GradientText from "@/components/common/GradientText";
import NoiseSurface from "@/components/common/NoiseSurface";
import SectionLink from "@/components/common/SectionLink";
import StackVisualization from "@/components/common/StackVisualization";
import Tooltip from "@/components/common/Tooltip";
import { personal } from "@/data/personal";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socialIcons = [
  { label: "GitHub", href: personal.github, icon: GitHubIcon },
  { label: "LinkedIn", href: personal.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      setTaglineIndex((current) => (current + 1) % personal.heroTaglines.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-[var(--section-y-mobile)] md:pt-28 md:pb-[var(--section-y-tablet)] lg:pb-[var(--section-y-desktop)]"
    >
      <NoiseSurface />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <motion.div
        aria-hidden
        className="absolute -left-28 top-12 size-[32rem] rounded-full bg-cyan-400/8 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 22, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-10rem] top-20 size-[40rem] rounded-full bg-violet-500/8 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-12rem] left-10 size-[26rem] rounded-full bg-emerald-400/8 blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 14, 0], y: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:items-center lg:gap-10">
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-[40rem]"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--border-accent)] bg-[var(--hero-pill)] px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-code)]"
          >
            <span>{personal.heroPill}</span>
            <span
              className="size-2 rounded-full bg-[var(--accent-cyan)]"
              style={{ animation: "blink 1.4s ease-in-out infinite" }}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">
              The Engineering Room
            </p>
            <h1 className="text-[clamp(2.25rem,8vw,4rem)] leading-none whitespace-normal sm:whitespace-nowrap">
              <GradientText className="hero-name-shimmer">
                Azmat Ullah Khan
              </GradientText>
            </h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="ambient-glow rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                3+ years professional experience
              </span>
              <span className="rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                AI SaaS · Enterprise Apps · MERN
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 border-l border-[var(--border-accent)] pl-5"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={personal.heroTaglines[taglineIndex]}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="min-h-[3rem] font-[family-name:var(--font-outfit)] text-[clamp(1.35rem,2vw,2rem)] italic tracking-[-0.03em] text-[var(--text-secondary)]"
              >
                {personal.heroTaglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-[34rem] text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <SectionLink
              sectionId="work"
              className="ambient-glow inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-[var(--cta-ink)] shadow-[var(--shadow-glow)] hover:-translate-y-1"
              style={{ background: "var(--gradient-accent)" }}
            >
              View My Work
              <ArrowRight className="size-4" />
            </SectionLink>
            <a
              href="/Azmat_Ullah_Khan_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel-muted)] px-6 py-3 text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--panel-soft)]"
            >
              Download Resume
              <Download className="size-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex gap-3">
            {socialIcons.map((item) => {
              const Icon = item.icon;

              return (
                <Tooltip key={item.label} label={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                  >
                    <Icon className="size-4" />
                  </a>
                </Tooltip>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="justify-self-end"
        >
          <StackVisualization />
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-[var(--text-muted)] md:flex"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="mb-2 flex h-12 w-7 justify-center rounded-full border border-[var(--border-default)]">
          <span className="mt-2 h-3 w-1 rounded-full bg-[var(--accent-cyan)]" />
        </div>
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}
