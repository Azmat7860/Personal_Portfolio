export const projectFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];
