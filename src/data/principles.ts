import type { EngineeringPrinciple } from "@/types";

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "analytics",
    title: "Analytics-Driven Interfaces",
    description:
      "I build dashboards and reporting systems that turn dense operational data into clear decisions using tools like Recharts and TanStack Table.",
    icon: "GitBranch",
    tags: ["Recharts", "KPIs", "Business Intelligence"],
  },
  {
    id: "rbac",
    title: "Role-Based Product Design",
    description:
      "A lot of the systems I build serve multiple user types. I design around permissions, secure flows, and admin controls from the start.",
    icon: "Shield",
    tags: ["RBAC", "Auth", "Enterprise"],
  },
  {
    id: "ai-integration",
    title: "Practical AI Integration",
    description:
      "I use AI where it helps the product: OpenAI insights, adaptive lessons, RAG workflows, AI agents, and MCP-style integrations.",
    icon: "TrendingUp",
    tags: ["OpenAI", "RAG", "AI Agents", "MCP"],
  },
  {
    id: "auth-security",
    title: "Security in User Flows",
    description:
      "Auth is part of the product. I build secure flows with JWT, RBAC, session management, and platform auth when the project needs it.",
    icon: "Zap",
    tags: ["JWT", "RBAC", "Sessions"],
  },
  {
    id: "data-workflows",
    title: "Scalable Data Workflows",
    description:
      "From filtering and large tables to exports, I focus on making data-heavy workflows fast and easy to understand.",
    icon: "Layers",
    tags: ["TanStack Table", "PostgreSQL", "Supabase"],
  },
  {
    id: "delivery",
    title: "Cross-Functional Delivery",
    description:
      "I work well in Agile teams, with code review, CI/CD, and close collaboration with designers and product stakeholders.",
    icon: "BookOpen",
    tags: ["Agile", "CI/CD", "Collaboration"],
  },
];
