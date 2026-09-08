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

function isLowContrastAccent(color?: string) {
  const rgb = parseHex(color);
  if (!rgb) return false;
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.72;
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
  const lowContrast = isLowContrastAccent(color);
  const accent = lowContrast ? "#64748b" : (color ?? "var(--accent-cyan)");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]",
        className,
      )}
      style={{
        borderColor: lowContrast
          ? "var(--border-default)"
          : `color-mix(in srgb, ${accent} 45%, transparent)`,
        backgroundColor: lowContrast
          ? "var(--panel-muted)"
          : `color-mix(in srgb, ${accent} 16%, transparent)`,
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
