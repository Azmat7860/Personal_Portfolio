"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

function parseHex(color?: string) {
  if (!color?.startsWith("#") || (color.length !== 7 && color.length !== 4)) {
    return null;
  }

  const hex =
    color.length === 4
      ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
      : color;

  const value = Number.parseInt(hex.slice(1), 16);
  if (Number.isNaN(value)) return null;

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function luminance(color?: string) {
  const rgb = parseHex(color);
  if (!rgb) return null;
  return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
}

function resolveAccent(color: string | undefined, theme: "dark" | "light") {
  if (!color) return "var(--accent-cyan)";

  const lum = luminance(color);
  if (lum === null) return color;

  if (theme === "dark" && lum > 0.86) return "#94a3b8";
  if (theme === "dark" && lum < 0.22) return "#94a3b8";
  if (theme === "light" && lum > 0.72) return "#0e7490";
  if (theme === "light" && lum < 0.18) return "#334155";

  return color;
}

export default function TechBadge({
  label,
  color,
  className,
}: {
  label: string;
  color?: string;
  className?: string;
}) {
  const { theme } = useTheme();
  const accent = resolveAccent(color, theme);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]",
        className,
      )}
      style={{
        borderColor: `color-mix(in srgb, ${accent} 45%, transparent)`,
        backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`,
      }}
    >
      <span
        className="size-2 shrink-0 rounded-full"
        style={{ backgroundColor: accent }}
      />
      {label}
    </span>
  );
}
