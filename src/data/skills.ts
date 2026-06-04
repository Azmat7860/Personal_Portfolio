import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Engineering",
    description: "Responsive interfaces, dashboards, and state-heavy product flows",
    icon: "Monitor",
    skills: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Next.js", color: "#F8FAFC" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "shadcn/ui", color: "#E2E8F0" },
      { name: "Recharts", color: "#22C55E" },
      { name: "TanStack Table", color: "#FF4154" },
    ],
  },
  {
    id: "backend",
    label: "Backend Engineering",
    description: "Secure APIs, auth workflows, and server-side product logic",
    icon: "Server",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Express.js", color: "#E2E8F0" },
      { name: "REST APIs", color: "#00D2FF" },
      { name: "JWT", color: "#F59E0B" },
      { name: "RBAC", color: "#A855F7" },
      { name: "WebSockets", color: "#10B981" },
    ],
  },
  {
    id: "database",
    label: "Databases & Storage",
    description: "Relational and document data models for real-world products",
    icon: "Database",
    skills: [
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "MySQL", color: "#4479A1" },
      { name: "TypeORM", color: "#EF4444" },
      { name: "Mongoose", color: "#880000" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    description: "Delivery tooling, cloud services, and product integrations",
    icon: "Cloud",
    skills: [
      { name: "AWS Amplify", color: "#FF9900" },
      { name: "OpenAI APIs", color: "#10A37F" },
      { name: "Docker", color: "#2496ED" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#E2E8F0" },
      { name: "Linux / Bash", color: "#A3E635" },
      { name: "CI/CD", color: "#A855F7" },
    ],
  },
];

export const skillsTicker = [
  "TypeScript",
  "Next.js",
  "OpenAI APIs",
  "TanStack Table",
  "AWS Cognito",
  "Recharts",
  "PostgreSQL",
  "NestJS",
  "RBAC",
  "Analytics Dashboards",
];
