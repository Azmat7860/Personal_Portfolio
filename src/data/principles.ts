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
      "Many of the systems I build serve multiple personas. I design around permission hierarchies, secure user flows, and admin control surfaces from the start.",
    icon: "Shield",
    tags: ["RBAC", "Auth", "Enterprise"],
  },
  {
    id: "ai-integration",
    title: "Practical AI Integration",
    description:
      "I use AI where it adds product value, like contextual summaries and intelligent insights, not just as a novelty feature.",
    icon: "TrendingUp",
    tags: ["OpenAI", "Insights", "Product"],
  },
  {
    id: "auth-security",
    title: "Security in User Flows",
    description:
      "Authentication and authorization are product features. I build secure flows with Cognito, JWT, RBAC, and session-aware interfaces.",
    icon: "Zap",
    tags: ["Cognito", "JWT", "Access Control"],
  },
  {
    id: "data-workflows",
    title: "Scalable Data Workflows",
    description:
      "From multi-column filtering to large exports and table-heavy interfaces, I care about making data-intensive workflows fast and understandable.",
    icon: "Layers",
    tags: ["TanStack Table", "ExcelJS", "PostgreSQL"],
  },
  {
    id: "delivery",
    title: "Cross-Functional Delivery",
    description:
      "I work comfortably in Agile teams, collaborating with designers, product stakeholders, and fellow engineers to ship reliable software on time.",
    icon: "BookOpen",
    tags: ["Agile", "Delivery", "Collaboration"],
  },
];
