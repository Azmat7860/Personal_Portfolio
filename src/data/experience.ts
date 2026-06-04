import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "tech-crusades",
    company: "Tech Crusades",
    companyUrl: "https://techcrusades.com",
    role: "Senior Software Developer",
    period: { start: "Sep 2025", end: "Present" },
    version: "v4.0.0",
    description:
      "Leading development of the HighGear Platform, a dual-application enterprise analytics SaaS spanning user workflows, admin controls, KPI reporting, and AI-assisted insights.",
    achievements: [
      "Led end-to-end feature delivery for HighGear using Next.js, TypeScript, and Supabase across analytics and admin experiences.",
      "Built KPI dashboards and reporting modules with Recharts to surface real-time operational metrics.",
      "Implemented platform-wide RBAC for the HighGear App and Admin Portal with tiered permission hierarchies.",
      "Integrated OpenAI APIs to generate AI-driven insights and contextual summaries within analytics workflows.",
      "Engineered large-scale data tables with TanStack Table and streamlined server-side operations with Next.js Server Actions.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Recharts", "TanStack Table"],
    type: "full-time",
    engagement: "Full-Time",
  },
  {
    id: "optimageeks",
    company: "OptimaGeeks",
    companyUrl: "https://optimageeks.com",
    role: "Associate Software Developer",
    period: { start: "Apr 2025", end: "Sep 2025" },
    version: "v3.0.0",
    description:
      "Delivered frontend-heavy product work across Kalpa AI and the Therapist Assessment platform, focusing on dashboards, auth flows, state architecture, and reporting systems.",
    achievements: [
      "Contributed to Kalpa AI by building role-based dashboards and multi-step workflows with Next.js, React, and TypeScript.",
      "Developed interactive analytics components with Recharts and shadcn/ui for clear, responsive chart experiences.",
      "Managed complex application state with Redux Toolkit across multi-step user journeys.",
      "Implemented AWS Amplify Cognito flows for sign-up, sign-in, MFA, and secure role-based access.",
      "Delivered the Therapist Assessment platform using the MERN stack with RBAC and ExcelJS export capabilities.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "AWS Amplify", "Recharts", "ExcelJS"],
    type: "full-time",
    engagement: "Full-Time",
  },
  {
    id: "zysoftech",
    company: "Zysoftech",
    companyUrl: "https://zysoftec.com",
    role: "Software Developer",
    period: { start: "Dec 2024", end: "Mar 2025" },
    version: "v2.0.0",
    description:
      "Worked remotely on Halal Table, a multi-vendor restaurant booking and discovery platform with real-time booking workflows, payments, and scalable backend services.",
    achievements: [
      "Delivered key restaurant booking workflows and instant vendor notifications using NestJS and React.js.",
      "Built customer-facing search, profile, review, and menu interfaces to improve discoverability and engagement.",
      "Integrated secure payment gateway flows and TypeORM data models on PostgreSQL for multi-vendor operations.",
      "Collaborated within a remote Agile team while maintaining code quality through peer reviews.",
    ],
    tech: ["NestJS", "React.js", "PostgreSQL", "TypeORM", "Redux", "Payment Gateway"],
    type: "contract",
    engagement: "Contract-Based Remote",
  },
  {
    id: "mercury-sols",
    company: "Mercury Sols",
    companyUrl: "https://mercurysols.org",
    role: "Software Developer",
    period: { start: "Jul 2023", end: "Dec 2024" },
    version: "v1.0.0",
    description:
      "Built and maintained full-stack client applications using the MERN stack, delivering reusable UI systems, secure authentication, and reliable REST API integrations.",
    achievements: [
      "Built and maintained full-stack web applications for multiple clients using React.js, Node.js, Express.js, and MongoDB.",
      "Developed RESTful APIs and integrated third-party services to support dependable data exchange across products.",
      "Implemented JWT-based authentication, role-based authorization, and session management across application modules.",
      "Designed reusable responsive React component libraries that accelerated delivery across client engagements.",
      "Delivered sprint commitments in Agile collaboration with designers and project managers.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    type: "full-time",
    engagement: "Full-Time",
  },
];
