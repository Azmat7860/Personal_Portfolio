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
    "Full Stack Software Engineer with 3+ years of experience building scalable, production-ready web applications using MERN, TypeScript, Next.js, REST APIs, authentication, RBAC, and AI-powered solutions. Focused on clean architecture, performance, and reliable end-to-end delivery.",
  about: [
    "I'm Azmat Ullah Khan, a Full Stack Software Engineer with 3+ years of experience building scalable, production-ready web applications. I specialize in the MERN stack, TypeScript, Next.js, NestJS, REST APIs, authentication, and RBAC, with experience building AI-powered features and delivering solutions end to end.",
    "I've worked on enterprise SaaS platforms, analytics dashboards, customer and vendor platforms, booking systems, payment integrations, and real-time features. My work spans application architecture, database design, responsive interfaces, secure APIs, authentication, authorization, and production deployments.",
    "I focus on clean architecture, maintainable code, reusable components, performance, security, and thoughtful user experience. I enjoy solving complex problems across the stack, working closely with product requirements, and turning ideas into reliable, production-ready software.",
    "I'm comfortable taking ownership of features from planning and implementation to testing, refinement, and deployment. I continuously explore modern development practices and AI technologies to build smarter, more efficient, and maintainable applications.",
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
