"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import Tooltip from "@/components/common/Tooltip";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip label={mounted && theme === "dark" ? "Light mode" : "Dark mode"}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={nextLabel}
        className={`inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] ${className}`}
      >
        {!mounted ? (
          <Sun className="size-4 opacity-0" />
        ) : theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </button>
    </Tooltip>
  );
}
