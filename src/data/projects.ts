import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "highgear-platform",
    number: "01",
    name: "HighGear Platform",
    tagline: "Enterprise Analytics SaaS",
    description:
      "Enterprise analytics platform with separate user and admin portals, providing KPI dashboards, AI-generated insights, and role-based access.",
    challenge:
      "The product needed live KPI reporting, admin controls, and secure access across multiple user types without becoming hard to maintain.",
    solution:
      "Developed the platform using Next.js, TypeScript, and Supabase PostgreSQL, building dashboards with Recharts and TanStack Table and integrating OpenAI for data summaries.",
    impact:
      "Delivered clearer analytics, AI-assisted insights, and more reliable reporting across both the app and admin portal.",
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
    gallery: [
      {
        src: "/projects/highgear/01-sign-up.png",
        alt: "HighGear dealer sign up",
        label: "Sign up",
      },
      {
        src: "/projects/highgear/02-sign-in.png",
        alt: "HighGear sign in",
        label: "Sign in",
      },
      {
        src: "/projects/highgear/03-dashboard.png",
        alt: "HighGear dealer pulse dashboard",
        label: "Dashboard",
      },
      {
        src: "/projects/highgear/04-portfolio-profitability.png",
        alt: "HighGear portfolio profitability",
        label: "Portfolio profitability",
      },
      {
        src: "/projects/highgear/05-portfolio-composition.png",
        alt: "HighGear portfolio composition",
        label: "Portfolio composition",
      },
      {
        src: "/projects/highgear/06-sales.png",
        alt: "HighGear sales analytics",
        label: "Sales",
      },
      {
        src: "/projects/highgear/07-inventory.png",
        alt: "HighGear inventory management",
        label: "Inventory",
      },
      {
        src: "/projects/highgear/08-collections.png",
        alt: "HighGear collections overview",
        label: "Collections",
      },
      {
        src: "/projects/highgear/09-charge-off.png",
        alt: "HighGear charge off analytics",
        label: "Charge off",
      },
      {
        src: "/projects/highgear/10-active-loans.png",
        alt: "HighGear active loans table",
        label: "Active loans",
      },
      {
        src: "/projects/highgear/11-user-management.png",
        alt: "HighGear admin user management",
        label: "User management",
      },
      {
        src: "/projects/highgear/12-audit-logs.png",
        alt: "HighGear admin audit logs",
        label: "Audit logs",
      },
      {
        src: "/projects/highgear/13-borrowing-base.png",
        alt: "HighGear borrowing base facility configuration",
        label: "Borrowing base",
      },
      {
        src: "/projects/highgear/14-billing-management.png",
        alt: "HighGear billing management for dealers",
        label: "Billing management",
      },
    ],
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
      "AI-powered homeschool platform with a child-facing learning kiosk and a mobile-first parent portal for session tracking, lesson progress, and reporting.",
    challenge:
      "Families needed adaptive lessons for kids plus a simple parent view for tracking sessions and learning progress.",
    solution:
      "Developed the kiosk with Electron and the parent portal with Next.js and TypeScript, using Supabase PostgreSQL and Deno Edge Functions with RLS, and integrating OpenAI for adaptive lessons and conversation prompts.",
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
    gallery: [
      {
        src: "/projects/knowly/parent-dashboard.png",
        alt: "Knowly parent portal dashboard with compliance and students",
        label: "Parent portal",
      },
      {
        src: "/projects/knowly/knowly-kiosk-child.png",
        alt: "Knowly kiosk child profile selection",
        label: "Choose child",
      },
      {
        src: "/projects/knowly/knowly-kiosk-home.png",
        alt: "Knowly kiosk home with continue learning and subjects",
        label: "Kiosk home",
      },
      {
        src: "/projects/knowly/knowly-kiosk-my-learning.png",
        alt: "Knowly kiosk my learning subject picker",
        label: "My learning",
      },
      {
        src: "/projects/knowly/knowly-kiosk-lesson.png",
        alt: "Knowly kiosk lesson being built for the student",
        label: "Lesson",
      },
      {
        src: "/projects/knowly/knowly-kiosk-summit.png",
        alt: "Knowly kiosk session complete summit screen",
        label: "Session complete",
      },
    ],
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
      "Role-based dashboard for an AI SaaS platform with different interfaces and workflows for multiple types of users.",
    challenge:
      "The product needed clear frontend architecture for role-specific dashboards, auth flows, and AI analytics that still felt usable.",
    solution:
      "Developed the platform with Next.js, React, and TypeScript, using Redux Toolkit for state management, shadcn/ui and Recharts for the interface and visualizations, and AWS Amplify (Cognito) for authentication, MFA, and session management.",
    impact:
      "Made role-based dashboards and secure auth flows easier to use across different AI product workflows.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn",
      "AWS Amplify",
    ],
    category: "frontend",
    links: { caseStudy: "/projects#kalpa-ai" },
    featured: true,
    gallery: [
      {
        src: "/projects/kalpa/01-sign-in.png",
        alt: "Kalpa AI sign in screen",
        label: "Sign in",
      },
      {
        src: "/projects/kalpa/02-dashboard.png",
        alt: "Kalpa AI trial overview dashboard",
        label: "Dashboard",
      },
      {
        src: "/projects/kalpa/03-trials.png",
        alt: "Kalpa AI trials list",
        label: "Trials",
      },
      {
        src: "/projects/kalpa/04-sites.png",
        alt: "Kalpa AI site subjects and CRF forms",
        label: "Sites",
      },
      {
        src: "/projects/kalpa/05-pending-forms.png",
        alt: "Kalpa AI pending forms list",
        label: "Pending forms",
      },
      {
        src: "/projects/kalpa/06-users.png",
        alt: "Kalpa AI users list",
        label: "Users",
      },
      {
        src: "/projects/kalpa/07-audit-logs.png",
        alt: "Kalpa AI audit logs",
        label: "Audit logs",
      },
      {
        src: "/projects/kalpa/08-edc-channels.png",
        alt: "Kalpa AI EDC channels",
        label: "EDC channels",
      },
    ],
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
      "Clinical assessment platform for Admins, Participants, and Raters to manage video assessments and provide structured feedback.",
    challenge:
      "Admins needed a structured way to handle assessments, video review assignments, and consolidated evaluation exports.",
    solution:
      "Developed the platform with React.js, Node.js, Express.js, and MongoDB, using Redux for state management and ExcelJS to generate consolidated multi-sheet evaluation reports.",
    impact:
      "Made assessment workflows clearer and gave admins downloadable multi-sheet evaluation reports.",
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
    gallery: [
      {
        src: "/projects/eventbutler/eventbutler-home.png",
        alt: "EventButler homepage with venue search",
        label: "Homepage",
      },
      {
        src: "/projects/eventbutler/eventbutler-locations.png",
        alt: "EventButler locations listing page",
        label: "Locations",
      },
      {
        src: "/projects/eventbutler/eventbutler-service-providers.png",
        alt: "EventButler service providers listing",
        label: "Service providers",
      },
      {
        src: "/projects/eventbutler/eventbutler-team-events.png",
        alt: "EventButler team events page",
        label: "Team events",
      },
      {
        src: "/projects/eventbutler/eventbutler-wedding.png",
        alt: "EventButler wedding planning page",
        label: "Wedding",
      },
    ],
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
    gallery: [
      {
        src: "/projects/yaksport/yaksport-home.png",
        alt: "YakSport training camp homepage",
        label: "Homepage",
      },
      {
        src: "/projects/yaksport/yaksport-hotels.png",
        alt: "YakSport hotels listing",
        label: "Hotels",
      },
      {
        src: "/projects/yaksport/yaksport-blogs.png",
        alt: "YakSport blogs listing",
        label: "Blogs",
      },
      {
        src: "/projects/yaksport/yaksport-papillon-belvil.png",
        alt: "YakSport Papillon Belvil hotel detail page",
        label: "Papillon Belvil",
      },
      {
        src: "/projects/yaksport/yaksport-terms.png",
        alt: "YakSport Titanic Deluxe Lara hotel detail page",
        label: "Titanic Deluxe Lara",
      },
    ],
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
