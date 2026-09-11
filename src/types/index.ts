export interface ProjectImage {
  src: string;
  alt: string;
  label?: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  category: "frontend" | "backend" | "fullstack";
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  /** Real UI / product screenshots for private or public projects */
  gallery?: ProjectImage[];
  featured: boolean;
  gradient: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: { start: string; end: string | "Present" };
  version: string;
  description: string;
  achievements: string[];
  tech: string[];
  type: "full-time" | "contract" | "freelance";
  engagement?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  color: string;
  icon?: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
