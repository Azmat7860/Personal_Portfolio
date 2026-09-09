import type { ProjectFilterId } from "@/data/projectFilters";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function filterProjects(
  activeFilter: ProjectFilterId,
  source: Project[] = projects,
): Project[] {
  if (activeFilter === "all") return source;
  return source.filter((project) => project.category === activeFilter);
}
