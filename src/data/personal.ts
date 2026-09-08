import type { NavigationItem, SocialLink } from "@/types";

export const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stacks" },
  { id: "work", label: "Work" },
  { id: "thinking", label: "Thinking" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Azmat7860" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/azmat-ullah-khan-289439237/",
  },
  { label: "Email", href: "mailto:azmatkhan0470727@gmail.com" },
];

export const personal = {
  name: "Azmat Ullah Khan",
  shortName: "Azmat",
  role: "Full Stack Software Engineer",
  location: "Lahore, Pakistan",
  availability: "Open to full-time, contract, and remote opportunities",
  email: "azmatkhan0470727@gmail.com",
  phone: "+92 315-0470727",
  github: "https://github.com/Azmat7860",
  linkedin: "https://www.linkedin.com/in/azmat-ullah-khan-289439237/",
  heroPill: "Full Stack Software Engineer",
  heroTaglines: [
    "Building AI-powered SaaS with Next.js",
    "Shipping RAG, agents and OpenAI workflows",
    "Architecting role-based enterprise platforms",
    "Delivering secure full-stack applications",
  ],
  intro:
    "Full Stack MERN Developer with 3+ years building production web apps. I work with React, Next.js, TypeScript, and Node.js, and ship secure APIs, RBAC, and AI-powered features end to end.",
  about: [
    "I'm Azmat Ullah Khan, a Full Stack Software Engineer with 3+ years of experience building production-ready web applications. I work across the stack: responsive React and Next.js frontends, secure Node.js and NestJS services, and data layers in MongoDB, PostgreSQL, and Supabase. Lately a lot of my work also includes AI-powered product features like OpenAI integrations, RAG workflows, and agent-style tooling.",
    "At Tech Crusades, I lead full-stack development of enterprise SaaS products using Next.js, TypeScript, and Supabase. Day to day that means application architecture, RBAC, KPI dashboards, reusable UI systems, CI/CD with GitHub Actions, Vercel deployments, and OpenAI-powered insights inside real product flows.",
    "Before that, at Mercury Sols, Earendel Technologies, and DanZee Tech, I built and maintained production MERN and NestJS applications. That work covered customer and vendor platforms, booking products, real-time features, JWT authentication, RBAC, and payment integrations. I care about clean architecture, responsive UI, and shipping features that actually help the business.",
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Khawaja Fareed University of Engineering and Information Technology",
    period: "2019 - 2023",
  },
  currentlyAvailableFor: [
    "Full-time software engineering roles",
    "AI-powered SaaS and product engineering",
    "Contract and remote full-stack development",
    "Role-based enterprise application builds",
  ],
  statusItems: [
    { icon: "MapPin", label: "Lahore, Pakistan" },
    { icon: "Briefcase", label: "Open to Full-Time, Contract and Remote roles" },
    { icon: "Sparkles", label: "Building AI SaaS, RAG workflows and agent features" },
    { icon: "Rocket", label: "Currently shipping enterprise products at Tech Crusades" },
  ],
  footerTagline: "Full Stack Software Engineer · AI-Powered Product Development",
};
