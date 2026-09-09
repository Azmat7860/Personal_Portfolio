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
    <div className="flex flex-wrap gap-3">
      {projectFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm ${
            activeFilter === filter.id
              ? "text-[var(--cta-ink)]"
              : "border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)]"
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
  );
}
