"use client";

import { projectFilters, type ProjectFilterId } from "@/data/projectFilters";

export default function ProjectFilterBar({
  activeFilter,
  onChange,
}: {
  activeFilter: ProjectFilterId;
  onChange: (filter: ProjectFilterId) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="group"
      aria-label="Filter projects by category"
    >
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={`rounded-full px-3.5 py-2 text-sm sm:px-4 ${
              isActive
                ? "text-[var(--cta-ink)]"
                : "border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)]"
            }`}
            style={
              isActive ? { background: "var(--gradient-accent)" } : undefined
            }
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
