import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Azmat Ullah Khan | Senior Software Developer",
  description:
    "Senior Software Developer specializing in Next.js, React, TypeScript, enterprise analytics dashboards, AI SaaS products, and secure full-stack systems.",
  keywords: [
    "Azmat Ullah Khan",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Software Engineer",
  ],
  openGraph: {
    title: "Azmat Ullah Khan | Senior Software Developer",
    description:
      "Building analytics SaaS, role-based enterprise applications, and secure full-stack systems with React, Next.js, TypeScript, and OpenAI integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[var(--bg-primary)] font-[family-name:var(--font-dm-sans)] text-[var(--text-primary)]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
