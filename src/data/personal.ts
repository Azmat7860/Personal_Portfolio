import type { NavigationItem, SocialLink } from "@/types";

export const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
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
  role: "Senior Software Developer",
  location: "Lahore, Pakistan",
  availability: "Open to full-time, contract, and remote opportunities",
  email: "azmatkhan0470727@gmail.com",
  phone: "03150470727",
  github: "https://github.com/Azmat7860",
  linkedin: "https://www.linkedin.com/in/azmat-ullah-khan-289439237/",
  heroPill: "Senior Software Developer",
  heroTaglines: [
    "Building analytics SaaS with Next.js",
    "Architecting role-based enterprise platforms",
    "Integrating OpenAI into product workflows",
    "Shipping secure full-stack applications",
  ],
  intro:
    "Results-driven Full Stack Developer with 3+ years of professional experience engineering scalable web applications across healthcare, AI SaaS, and enterprise domains. Specialized in React.js, Next.js, TypeScript, Node.js, NestJS, analytics dashboards, and secure authentication systems.",
  about: [
    "I'm Azmat Ullah Khan, a Senior Software Developer and Full Stack Engineer with more than three years of professional experience building production-grade applications across AI SaaS, analytics, healthcare, and enterprise domains. My work spans everything from frontend architecture in React and Next.js to backend APIs, authentication systems, and scalable data workflows.",
    "Most recently at Tech Crusades, I have been leading development of the HighGear Platform, a dual-application enterprise analytics SaaS. That work includes KPI dashboards, role-based admin systems, TanStack Table data workflows, Supabase-backed architecture, and OpenAI-powered insights that turn raw operational data into actionable intelligence.",
    "Across teams at OptimaGeeks, Zysoftech, and Mercury Sols, I have built role-based dashboards, secure auth flows with AWS Amplify Cognito and JWT, clinical evaluation systems, and multi-vendor booking products. I care deeply about responsive UI architecture, maintainable code, and shipping features that solve real business problems.",
  ],
  currentlyAvailableFor: [
    "Full-time software engineering roles",
    "Contract and remote product development",
    "AI SaaS dashboards and analytics platforms",
    "Role-based enterprise application builds",
  ],
  statusLines: [
    "📍  Lahore, Pakistan",
    "💼  Open to Full-Time, Contract & Remote roles",
    "🚀  Currently building enterprise analytics systems",
    "📚  Upskilling in AWS Cloud Fundamentals and Docker",
  ],
  footerTagline: "Senior Software Developer • Full Stack Engineer",
};
