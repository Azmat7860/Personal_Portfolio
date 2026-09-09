import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected products and platforms built by Azmat Ullah Khan — full-stack apps, AI-powered SaaS, and production MERN systems.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
