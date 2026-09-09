"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";
import ThemeToggle from "@/components/common/ThemeToggle";
import Tooltip from "@/components/common/Tooltip";
import { navigationItems, personal, socialLinks } from "@/data/personal";
import { cn } from "@/lib/utils";

const socialIconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
};

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -24, duration: 1 });
  } else {
    window.scrollTo({
      top: target.offsetTop - 24,
      behavior: "smooth",
    });
  }
}

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const rawHash = window.location.hash.replace(/^#/, "");
    const hash = rawHash.split("#")[0]?.trim();
    if (!hash) return;

    // Normalize accidental duplicated hashes like #projects#projects
    if (rawHash.includes("#") || window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, "", `/#${hash}`);
    }

    const timer = window.setTimeout(() => scrollToId(hash), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let current = navigationItems[0]?.id ?? "hero";

      navigationItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && marker >= section.offsetTop) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToSection = (id: string) => {
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push(id === "hero" ? "/" : `/#${id}`);
      return;
    }

    const nextUrl = id === "hero" ? "/" : `/#${id}`;
    window.history.pushState(null, "", nextUrl);

    if (id === "hero") {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection("hero");
      return;
    }

    setActiveSection(id);
    scrollToId(id);
  };

  const brandMark = (
    <>
      <span className="relative inline-flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[linear-gradient(135deg,rgba(0,210,255,0.26),rgba(139,92,246,0.22))] shadow-[0_0_32px_rgba(0,210,255,0.14)]">
        <span className="absolute inset-px rounded-[calc(1rem-1px)] bg-[var(--brand-mark-bg)]" />
        <span className="relative font-[family-name:var(--font-outfit)] text-lg font-bold tracking-[-0.08em] text-[var(--text-primary)]">
          A
          <span className="-ml-1 accent-text">K</span>
        </span>
      </span>
      <span className="hidden flex-col text-left md:flex">
        <span className="font-[family-name:var(--font-outfit)] text-base font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
          Azmat Ullah Khan
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
          Full Stack Developer
        </span>
      </span>
    </>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          scrolled
            ? "border-b border-[var(--border-subtle)] bg-[var(--nav-scrolled)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-shell flex h-18 items-center justify-between gap-4">
          {pathname === "/" ? (
            <button
              type="button"
              onClick={() => goToSection("hero")}
              className="group relative flex items-center gap-3"
              aria-label="Go to home section"
            >
              {brandMark}
            </button>
          ) : (
            <Link
              href="/"
              className="group relative flex items-center gap-3"
              aria-label="Go to home"
            >
              {brandMark}
            </Link>
          )}

          <div className="hidden items-center gap-8 rounded-full border border-[var(--border-subtle)] bg-[var(--panel-muted)] px-5 py-3 lg:flex">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  pathname === "/" && activeSection === item.id
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                )}
              >
                {item.label}
                <span className="absolute left-1/2 top-full mt-2 h-px w-0 -translate-x-1/2 bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full" />
                {pathname === "/" && activeSection === item.id ? (
                  <span className="absolute left-1/2 top-full mt-4 size-1.5 -translate-x-1/2 rounded-full bg-[var(--accent-cyan)]" />
                ) : null}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <div className="rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] px-4 py-2 text-xs text-[var(--text-secondary)] shadow-[var(--shadow-glow)]">
              <span className="mr-2 inline-block size-2 rounded-full bg-[var(--accent-emerald)]" />
              Available
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-primary)]"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] bg-[var(--bg-primary)] px-6 py-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-full max-w-lg flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-semibold">
                    {personal.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {personal.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)]"
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mt-16 flex flex-1 flex-col justify-between">
                <div className="space-y-5">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => goToSection(item.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="block text-left font-[family-name:var(--font-outfit)] text-[2rem] font-semibold tracking-[-0.04em]"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-8">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    Connect
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
                    {socialLinks.map((link) => {
                      const Icon = socialIconMap[link.label as keyof typeof socialIconMap];

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-default)] px-4 py-2 hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                        >
                          {Icon ? (
                            <Tooltip label={link.label}>
                              <Icon className="size-4" />
                            </Tooltip>
                          ) : null}
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
