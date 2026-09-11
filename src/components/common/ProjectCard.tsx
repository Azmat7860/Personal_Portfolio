"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import BrowserMockup from "@/components/common/BrowserMockup";
import ProjectGallery from "@/components/common/ProjectGallery";
import TechBadge from "@/components/common/TechBadge";
import { useHasMounted } from "@/hooks/useHasMounted";
import type { Project } from "@/types";

const detailIcons = {
  Challenge: Target,
  Solution: Lightbulb,
  Impact: TrendingUp,
} as const;

const linkLabels: Record<string, string> = {
  live: "Visit Site",
  github: "GitHub",
  caseStudy: "Case Study",
};

type ProjectCardProps = {
  project: Project;
  techLimit?: number;
  showNumberInTagline?: boolean;
  enableHoverLift?: boolean;
  excludeCaseStudy?: boolean;
  titleAs?: "h2" | "h3";
};

export default function ProjectCard({
  project,
  techLimit,
  showNumberInTagline = false,
  enableHoverLift = false,
  excludeCaseStudy = false,
  titleAs = "h3",
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasMounted = useHasMounted();
  const canAnimate = hasMounted && !shouldReduceMotion;
  const tech = techLimit ? project.tech.slice(0, techLimit) : project.tech;
  const Title = titleAs;
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const links = Object.entries(project.links).filter(([key, href]) => {
    if (!href) return false;
    if (excludeCaseStudy && key === "caseStudy") return false;
    return true;
  });

  return (
    <motion.article
      id={project.id}
      layout={canAnimate}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={canAnimate ? { opacity: 0, y: -12 } : { opacity: 0 }}
      transition={{ duration: canAnimate ? 0.35 : 0 }}
      whileHover={
        enableHoverLift && canAnimate ? { y: -6, scale: 1.008 } : undefined
      }
      className="surface-panel relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] p-5 sm:p-6 md:p-8"
      style={{ background: project.gradient }}
    >
      <div className="absolute inset-0" style={{ background: "var(--overlay-scrim)" }} />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(135deg, var(--project-card-glow), transparent 55%)",
        }}
      />
      {!showNumberInTagline ? (
        <div
          aria-hidden
          className="absolute left-4 top-0 font-[family-name:var(--font-outfit)] text-[5.5rem] font-bold leading-none text-[var(--text-primary)]/5 sm:text-[7rem] md:text-[10rem]"
        >
          {project.number}
        </div>
      ) : null}

      <div className="relative z-10 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8">
        <div className="min-w-0">
          <p className="font-mono text-sm uppercase tracking-[0.26em] text-[var(--text-code)]">
            {showNumberInTagline
              ? `${project.number} · ${project.tagline}`
              : project.tagline}
          </p>
          <Title className="mt-3 font-[family-name:var(--font-outfit)] text-[clamp(1.5rem,3vw,1.875rem)] font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:mt-4">
            {project.name}
          </Title>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[var(--text-secondary)] sm:leading-8">
            {project.description}
          </p>

          <div className="mt-6 space-y-4 text-sm sm:mt-7">
            {(
              [
                ["Challenge", project.challenge],
                ["Solution", project.solution],
                ["Impact", project.impact],
              ] as const
            ).map(([label, value]) => {
              const Icon = detailIcons[label];

              return (
                <div
                  key={label}
                  className="grid gap-2 md:grid-cols-[140px_minmax(0,1fr)]"
                >
                  <p className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    <Icon className="size-3.5 shrink-0 text-[var(--accent-cyan)]" />
                    {label}
                  </p>
                  <p className="min-w-0 break-words text-[var(--text-secondary)]">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {tech.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>

          {links.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-3 text-sm sm:mt-8 sm:gap-4">
              {links.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2 text-[var(--text-primary)] shadow-sm hover:border-[var(--border-accent)]"
                >
                  {linkLabels[key] ?? key}
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {hasGallery ? (
          <ProjectGallery
            images={gallery}
            title={project.name}
            gradient={project.gradient}
            lightboxOpen={lightboxOpen}
            onLightboxOpenChange={setLightboxOpen}
          />
        ) : (
          <BrowserMockup gradient={project.gradient} title={project.name} />
        )}
      </div>
    </motion.article>
  );
}
