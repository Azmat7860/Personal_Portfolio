import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Azmat Ullah Khan | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in React.js, Next.js, TypeScript, Node.js, AI-powered features (OpenAI, RAG, agents), enterprise SaaS, and secure full-stack systems.",
  keywords: [
    "Azmat Ullah Khan",
    "Full Stack Software Engineer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "OpenAI",
    "RAG",
    "AI Agents",
    "Software Engineer",
  ],
  openGraph: {
    title: "Azmat Ullah Khan | Full Stack Software Engineer",
    description:
      "Building AI-powered SaaS, analytics platforms, and secure full-stack systems with React, Next.js, TypeScript, Node.js, and OpenAI.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const themeInitScript = `
(() => {
  try {
    const key = "azmat-portfolio-theme";
    const stored = localStorage.getItem(key);
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark h-full antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-[var(--bg-primary)] font-[family-name:var(--font-dm-sans)] text-[var(--text-primary)]">
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
