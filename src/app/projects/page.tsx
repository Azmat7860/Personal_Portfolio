import Link from "next/link";
import BrowserMockup from "@/components/common/BrowserMockup";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import TechBadge from "@/components/common/TechBadge";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <div className="container-shell pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="section-kicker">Projects</p>
          <h1 className="section-heading">Complete Project Archive</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Detailed case-study style summaries of the projects listed in my resume.
          </p>
          <Link
            href="/#projects"
            className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="surface-panel relative overflow-hidden rounded-[2rem] border border-white/8 p-6 md:p-8"
              style={{ background: project.gradient }}
            >
              <div className="absolute inset-0 bg-[rgba(8,8,16,0.78)]" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="font-mono text-sm uppercase tracking-[0.26em] text-[var(--text-code)]">
                    {project.number} • {project.tagline}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-[-0.04em] text-white">
                    {project.name}
                  </h2>
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
                </div>

                <BrowserMockup gradient={project.gradient} title={project.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
