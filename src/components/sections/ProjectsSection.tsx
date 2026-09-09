"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import ProjectFilterBar from "@/components/common/ProjectFilterBar";
import SectionWrapper from "@/components/common/SectionWrapper";
import { type ProjectFilterId } from "@/data/projectFilters";
import { projects } from "@/data/projects";
import { filterProjects } from "@/lib/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const previewProjects = useMemo(
    () => filterProjects(activeFilter).slice(0, 3),
    [activeFilter],
  );

  return (
    <SectionWrapper id="projects">
      <div className="container-shell">
        <div className="max-w-2xl min-w-0">
          <p className="section-kicker">Projects</p>
          <h2 className="section-heading">Projects I&apos;ve Built</h2>
        </div>

        <div className="mt-6">
          <ProjectFilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-8 space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {previewProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                techLimit={10}
                enableHoverLift
              />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 ? (
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              View All Projects
            </Link>
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}
