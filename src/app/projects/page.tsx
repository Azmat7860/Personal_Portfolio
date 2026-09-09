"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import BrowserMockup from "@/components/common/BrowserMockup";
import CustomCursor from "@/components/common/CustomCursor";
import ProjectFilterBar from "@/components/common/ProjectFilterBar";
import ScrollProgress from "@/components/common/ScrollProgress";
import SectionLink from "@/components/common/SectionLink";
import TechBadge from "@/components/common/TechBadge";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { type ProjectFilterId } from "@/data/projectFilters";
import { projects } from "@/data/projects";

const detailIcons = {
  Challenge: Target,
  Solution: Lightbulb,
  Impact: TrendingUp,
} as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--bg-primary)]">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <div className="container-shell pt-32 pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Projects</p>
            <h1 className="section-heading">Projects I&apos;ve Built</h1>
            <p className="mt-2 text-lg leading-8 text-[var(--text-secondary)]">
              A closer look at the products and platforms I have worked on.
            </p>
            <SectionLink
              sectionId="projects"
              className="mt-8 inline-flex rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              Back to Home
            </SectionLink>
          </div>

          <div className="lg:pb-1">
            <ProjectFilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                id={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="surface-panel relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] p-6 md:p-8"
                style={{ background: project.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--overlay-scrim)" }}
                />
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--project-card-glow), transparent 55%)",
                  }}
                />
                <div className="relative z-10 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8">
                  <div className="min-w-0">
                    <p className="font-mono text-sm uppercase tracking-[0.26em] text-[var(--text-code)]">
                      {project.number} · {project.tagline}
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
                      {project.name}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-8 text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    <div className="mt-7 space-y-4 text-sm">
                      {(
                        [
                          ["Challenge", project.challenge],
                          ["Solution", project.solution],
                          ["Impact", project.impact],
                        ] as const
                      ).map(([label, value]) => {
                        const Icon = detailIcons[label];

                        return (
                          <div key={label} className="grid gap-2 md:grid-cols-[140px_1fr]">
                            <p className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.24em] text-[var(--text-muted)]">
                              <Icon className="size-3.5 text-[var(--accent-cyan)]" />
                              {label}
                            </p>
                            <p className="text-[var(--text-secondary)]">{value}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 text-sm">
                      {Object.entries(project.links)
                        .filter(([key, href]) => Boolean(href) && key !== "caseStudy")
                        .map(([key, href]) => (
                          <a
                            key={key}
                            href={href}
                            target={href?.startsWith("http") ? "_blank" : undefined}
                            rel={
                              href?.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2 text-[var(--text-primary)] shadow-sm hover:border-[var(--border-accent)]"
                          >
                            {key === "live" ? "Visit Site" : "GitHub"}
                            <ArrowUpRight className="size-4" />
                          </a>
                        ))}
                    </div>
                  </div>

                  <BrowserMockup gradient={project.gradient} title={project.name} />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}
