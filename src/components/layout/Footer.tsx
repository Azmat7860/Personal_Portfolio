import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";
import SectionLink from "@/components/common/SectionLink";
import Tooltip from "@/components/common/Tooltip";
import { navigationItems, personal } from "@/data/personal";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[linear-gradient(180deg,transparent,var(--footer-fade))]">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
              {personal.name}
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {personal.footerTagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-[var(--text-secondary)]">
            {navigationItems
              .filter((item) => item.id !== "hero")
              .map((item) => (
                <SectionLink
                  key={item.id}
                  sectionId={item.id}
                  className="cursor-pointer hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </SectionLink>
              ))}
          </div>

          <div className="flex gap-3">
            {[
              { label: "GitHub", href: personal.github },
              { label: "LinkedIn", href: personal.linkedin },
              { label: "Email", href: `mailto:${personal.email}` },
            ].map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap];

              return (
                <Tooltip key={item.label} label={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                  >
                    <Icon className="size-4" />
                  </a>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Azmat Ullah Khan. All rights reserved.</p>
          <p>{personal.email} · {personal.phone}</p>
        </div>
      </div>
    </footer>
  );
}
