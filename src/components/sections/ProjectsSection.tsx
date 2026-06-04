"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import BrowserMockup from "@/components/common/BrowserMockup";
import SectionWrapper from "@/components/common/SectionWrapper";
import TechBadge from "@/components/common/TechBadge";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["id"]>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const previewProjects = filteredProjects.slice(0, 3);

  return (
    <SectionWrapper id="projects">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-heading">Resume-Aligned Product Work</h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === filter.id
                  ? "text-black"
                  : "border border-white/10 bg-white/[0.03] text-[var(--text-secondary)]"
              }`}
              style={
                activeFilter === filter.id
                  ? { background: "var(--gradient-accent)" }
                  : undefined
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          <AnimatePresence mode="popLayout">
            {previewProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                whileHover={{ y: -6, scale: 1.008 }}
                className="surface-panel relative overflow-hidden rounded-[2rem] border border-white/8 p-6 md:p-8"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 bg-[rgba(8,8,16,0.78)]" />
                <div className="absolute left-4 top-0 font-[family-name:var(--font-outfit)] text-[7rem] font-bold leading-none text-white/5 md:text-[10rem]">
                  {project.number}
                </div>

                <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="font-mono text-sm uppercase tracking-[0.26em] text-[var(--text-code)]">
                      {project.tagline}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-[-0.04em]">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-8 text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    <div className="mt-7 space-y-4 text-sm">
                      {[
                        ["Challenge", project.challenge],
                        ["Solution", project.solution],
                        ["Impact", project.impact],
                      ].map(([label, value]) => (
                        <div key={label} className="grid gap-2 md:grid-cols-[120px_1fr]">
                          <p className="font-mono uppercase tracking-[0.24em] text-[var(--text-muted)]">
                            {label}
                          </p>
                          <p className="text-[var(--text-secondary)]">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 text-sm">
                      {Object.entries(project.links)
                        .filter(([, href]) => Boolean(href))
                        .map(([key, href]) => (
                          <a
                            key={key}
                            href={href}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[var(--text-primary)] hover:border-white/20"
                          >
                            {key === "live"
                              ? "Live Demo"
                              : key === "github"
                                ? "GitHub"
                                : "Case Study"}
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

        {projects.length > 3 ? (
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              View All Projects
            </Link>
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}
