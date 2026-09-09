"use client";

import { AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import ProjectFilterBar from "@/components/common/ProjectFilterBar";
import SectionLink from "@/components/common/SectionLink";
import SiteChrome from "@/components/layout/SiteChrome";
import { type ProjectFilterId } from "@/data/projectFilters";
import { filterProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
  const filteredProjects = useMemo(
    () => filterProjects(activeFilter),
    [activeFilter],
  );

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--bg-primary)]">
      <SiteChrome>
        <div className="container-shell pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl min-w-0">
              <p className="section-kicker">Projects</p>
              <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-[-0.04em] text-[var(--text-primary)]">
                Projects I&apos;ve Built
              </h1>
              <p className="mt-3 text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                A closer look at the products and platforms I have worked on.
              </p>
              <SectionLink
                sectionId="projects"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Back to Home
              </SectionLink>
            </div>

            <div className="lg:pb-1">
              <ProjectFilterBar
                activeFilter={activeFilter}
                onChange={setActiveFilter}
              />
            </div>
          </div>

          <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  showNumberInTagline
                  excludeCaseStudy
                  titleAs="h2"
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </SiteChrome>
    </main>
  );
}
