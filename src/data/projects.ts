import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "highgear-platform",
    number: "01",
    name: "HighGear Platform",
    tagline: "Enterprise Analytics SaaS",
    description:
      "Enterprise analytics platform with separate user and admin portals for KPI dashboards, AI-generated insights, and role-based access.",
    challenge:
      "The product needed live KPI reporting, admin controls, and secure access across multiple user types without becoming hard to maintain.",
    solution:
      "Built it with Next.js, TypeScript, and Supabase PostgreSQL. Used Recharts and TanStack Table for dashboards, and OpenAI for data summaries.",
    impact:
      "Gave teams clearer analytics, AI-assisted insights, and more reliable reporting across both the app and admin portal.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL (Supabase)",
      "OpenAI",
      "Tailwind CSS",
      "Recharts",
      "TanStack Table",
    ],
    category: "fullstack",
    links: {
      caseStudy: "/projects#highgear-platform",
      live: "https://www.highgeardata.com/",
    },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(0, 210, 255, 0.16), rgba(139, 92, 246, 0.12))",
    accentColor: "#00D2FF",
  },
  {
    id: "knowly-platform",
    number: "02",
    name: "Knowly Platform",
    tagline: "AI-Powered Homeschool EdTech SaaS",
    description:
      "AI-powered homeschool platform with a child-facing learning kiosk and a mobile-first parent portal for sessions, progress, and reporting.",
    challenge:
      "Families needed adaptive lessons for kids plus a simple parent view for tracking sessions and learning progress.",
    solution:
      "Built the kiosk with Electron and the parent portal with Next.js and TypeScript. Used Supabase PostgreSQL, Deno Edge Functions with RLS, and OpenAI for adaptive lessons and prompts.",
    impact:
      "Connected the learning experience for children with clearer parent visibility and AI-assisted lesson flows.",
    tech: [
      "Next.js",
      "TypeScript",
      "Electron",
      "PostgreSQL (Supabase)",
      "Deno Edge Functions",
      "OpenAI",
    ],
    category: "fullstack",
    links: {
      caseStudy: "/projects#knowly-platform",
      live: "https://www.knowlyeducation.com/",
    },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.16), rgba(16, 185, 129, 0.12))",
    accentColor: "#F59E0B",
  },
  {
    id: "kalpa-ai",
    number: "03",
    name: "Kalpa AI",
    tagline: "AI-Powered SaaS Platform",
    description:
      "Role-based dashboard for an AI SaaS platform, with different interfaces and workflows for multiple user types.",
    challenge:
      "The product needed clear frontend architecture for role-specific dashboards, auth flows, and AI analytics that still felt usable.",
    solution:
      "Built with Next.js, React.js, and TypeScript. Used Redux Toolkit for state, Tailwind CSS and shadcn/ui for the UI, and AWS Amplify for auth, MFA, and sessions.",
    impact:
      "Made role-based dashboards and secure auth flows easier to use across different AI product workflows.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "AWS Amplify",
    ],
    category: "frontend",
    links: { caseStudy: "/projects#kalpa-ai" },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(0, 210, 255, 0.12))",
    accentColor: "#10B981",
  },
  {
    id: "therapist-assessment-system",
    number: "04",
    name: "Therapist Assessment System",
    tagline: "Role-Based Clinical Evaluation Platform",
    description:
      "Clinical assessment platform for Admins, Participants, and Raters to manage video assessments and structured feedback.",
    challenge:
      "Admins needed a structured way to handle assessments, video review assignments, and consolidated evaluation exports.",
    solution:
      "Built with React.js, Node.js, Express.js, and MongoDB with Mongoose. Used Tailwind CSS for a clean, role-aware UI across Admins, Participants, and Raters.",
    impact:
      "Made assessment workflows clearer and gave admins a structured way to manage evaluations and feedback.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],
    category: "fullstack",
    links: { caseStudy: "/projects#therapist-assessment-system" },
    featured: true,
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(16, 185, 129, 0.12))",
    accentColor: "#3B82F6",
  },
  {
    id: "halal-table",
    number: "05",
    name: "Halal Table",
    tagline: "Multi-Vendor Restaurant Booking Platform",
    description:
      "Multi-vendor restaurant discovery and booking platform with restaurant profiles, menus, reviews, vendor management, and online payments.",
    challenge:
      "The product needed reliable booking flows, vendor notifications, payments, and scalable support for multiple restaurants in one system.",
    solution:
      "Built the backend with Nest.js and Node.js on PostgreSQL and Prisma. Added JWT auth, Swagger-documented APIs, and RBAC for multi-vendor restaurant and booking workflows.",
    impact:
      "Made restaurant discovery, booking, and vendor operations smoother with a more secure, documented multi-vendor API.",
    tech: [
      "Nest.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Swagger API",
      "RBAC",
    ],
    category: "backend",
    links: { caseStudy: "/projects#halal-table" },
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.16), rgba(239, 68, 68, 0.12))",
    accentColor: "#F59E0B",
  },
  {
    id: "eventbutler",
    number: "06",
    name: "EventButler",
    tagline: "Event Marketplace Platform",
    description:
      "Frontend work on EventButler, a marketplace for event locations, service providers, team events, and wedding planning across Germany and the DACH region.",
    challenge:
      "Users needed a clear way to search and browse thousands of locations and providers by category, region, and event type without a heavy booking flow getting in the way.",
    solution:
      "Worked as a frontend developer on search, browsing, and marketplace UI using HTML5, CSS3, Bootstrap, JavaScript, jQuery, and Ajax, with Git for version control.",
    impact:
      "Helped shape a smoother discovery experience for planners exploring venues and services on the platform.",
    tech: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Ajax",
      "Git",
    ],
    category: "frontend",
    links: {
      caseStudy: "/projects#eventbutler",
      live: "https://www.eventbutler.com/de-de/",
    },
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(139, 92, 246, 0.16), rgba(0, 210, 255, 0.12))",
    accentColor: "#8B5CF6",
  },
  {
    id: "yaksport",
    number: "07",
    name: "YakSport",
    tagline: "Sports Training Camp Travel Platform",
    description:
      "Sports travel platform for clubs, associations, and schools booking training camps and trips to destinations like Turkey, Spain, and Greece.",
    challenge:
      "Sports groups needed a simple way to explore training camp options, submit travel requests, and start trip planning with a specialized agency.",
    solution:
      "Worked on trip discovery and inquiry flows with HTML5, CSS3, and JavaScript, using MySQL, Postman, Git, and Agile delivery for a Danish sports travel experience.",
    impact:
      "Supported a clearer path from searching training camps to requesting a trip quote.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Postman API",
      "Agile",
      "Git",
    ],
    category: "fullstack",
    links: {
      caseStudy: "/projects#yaksport",
      live: "https://yaksport.dk/",
    },
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(59, 130, 246, 0.12))",
    accentColor: "#10B981",
  },
  {
    id: "spyre",
    number: "08",
    name: "Spyre",
    tagline: "Job Hunt & Resume Platform",
    description:
      "Jobs hunt platform with CV and resume templates plus an ATS checker to help candidates improve their resumes before applying.",
    challenge:
      "Job seekers needed resume templates, ATS feedback, and a smoother way to prepare applications in one product.",
    solution:
      "Implemented frontend and backend features for the platform, including core product flows and payment gateway integration.",
    impact:
      "Helped candidates build stronger resumes and move through job applications with clearer product tooling.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Gateway",
    ],
    category: "fullstack",
    links: { caseStudy: "/projects#spyre" },
    featured: false,
    gradient:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.14), rgba(139, 92, 246, 0.12))",
    accentColor: "#EC4899",
  },
];
