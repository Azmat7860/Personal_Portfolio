import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "highgear-platform",
    number: "01",
    name: "HighGear Platform",
    tagline: "Enterprise Analytics SaaS",
    description:
      "A dual-application analytics SaaS made up of a user-facing product and an admin portal, built around shared Supabase infrastructure and enterprise reporting workflows.",
    challenge:
      "Business stakeholders needed a scalable analytics platform that could handle live KPI reporting, admin controls, and secure role-based access across multiple user types.",
    solution:
      "Built the platform with Next.js, TypeScript, Supabase PostgreSQL, Recharts, TanStack Table, and OpenAI-powered summaries, while enforcing shared RBAC across both applications.",
    impact:
      "Delivered real-time analytics, AI-assisted insights, and enterprise-grade data workflows that improved decision-making across both user and admin experiences.",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Recharts", "TanStack Table"],
    category: "fullstack",
    links: { caseStudy: "/projects#highgear-platform" },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(0, 210, 255, 0.16), rgba(139, 92, 246, 0.12))",
    accentColor: "#00D2FF",
  },
  {
    id: "kalpa-ai",
    number: "02",
    name: "Kalpa AI",
    tagline: "AI-Powered SaaS Platform",
    description:
      "A role-based AI SaaS product with complex dashboards, multi-step user journeys, and data-rich interfaces tailored to multiple user personas.",
    challenge:
      "The product needed clear, scalable frontend architecture for role-specific dashboards, authentication flows, and AI-generated analytics that remained understandable to end users.",
    solution:
      "Implemented the experience using Next.js, React, TypeScript, Redux Toolkit, AWS Amplify Cognito, Recharts, Tailwind CSS, and shadcn/ui.",
    impact:
      "Enabled responsive, role-based dashboards and secure authentication flows that made complex AI-generated analytics more accessible and actionable.",
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "AWS Amplify", "Recharts", "shadcn/ui"],
    category: "frontend",
    links: { caseStudy: "/projects#kalpa-ai" },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(0, 210, 255, 0.12))",
    accentColor: "#10B981",
  },
  {
    id: "therapist-assessment-system",
    number: "03",
    name: "Therapist Assessment System",
    tagline: "Role-Based Clinical Evaluation Platform",
    description:
      "A structured clinical assessment platform built for Admin, Participant, and Rater workflows, including evaluation rubrics, session reviews, and exportable reporting.",
    challenge:
      "Clinical administrators needed a structured, role-based system for therapist performance assessments, video review assignments, and consolidated evaluation exports.",
    solution:
      "Built the platform with React.js, Node.js, Express.js, MongoDB, Redux, and ExcelJS, with RBAC, session workflows, and structured feedback collection.",
    impact:
      "Made therapist assessment workflows more structured and reportable while giving administrators downloadable multi-sheet evaluation exports.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "ExcelJS"],
    category: "fullstack",
    links: { caseStudy: "/projects#therapist-assessment-system" },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(16, 185, 129, 0.12))",
    accentColor: "#3B82F6",
  },
  {
    id: "halal-table",
    number: "04",
    name: "Halal Table",
    tagline: "Multi-Vendor Restaurant Booking & Discovery Platform",
    description:
      "A backend-focused restaurant booking platform where I built scalable vendor workflows, booking confirmations, payments, and data operations for multi-vendor growth.",
    challenge:
      "The product needed reliable booking workflows, instant vendor notifications, secure checkout, and scalable support for multiple restaurant vendors.",
    solution:
      "Built the system with NestJS, React.js, PostgreSQL, TypeORM, Redux, and payment gateway integrations, supported by optimized multi-vendor query flows.",
    impact:
      "Improved booking responsiveness and vendor operations while giving users a smoother restaurant discovery and checkout experience.",
    tech: ["NestJS", "React.js", "PostgreSQL", "TypeORM", "Redux", "Payment Gateway"],
    category: "backend",
    links: { caseStudy: "/projects#halal-table" },
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.16), rgba(239, 68, 68, 0.12))",
    accentColor: "#F59E0B",
  },
];
