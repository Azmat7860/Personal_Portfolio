import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Azmat Ullah Khan | Full Stack Software Engineer",
    template: "%s | Azmat Ullah Khan",
  },
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
  authors: [{ name: "Azmat Ullah Khan" }],
  creator: "Azmat Ullah Khan",
  openGraph: {
    title: "Azmat Ullah Khan | Full Stack Software Engineer",
    description:
      "Building AI-powered SaaS, analytics platforms, and secure full-stack systems with React, Next.js, TypeScript, Node.js, and OpenAI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azmat Ullah Khan | Full Stack Software Engineer",
    description:
      "Building AI-powered SaaS, analytics platforms, and secure full-stack systems with React, Next.js, TypeScript, Node.js, and OpenAI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const themeInitScript = `
(() => {
  try {
    var key = "azmat-portfolio-theme";
    var stored = localStorage.getItem(key);
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Do not put theme classes in React className — hydration would wipe them.
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full bg-[var(--bg-primary)] font-[family-name:var(--font-dm-sans)] text-[var(--text-primary)] antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
