import { cn } from "@/lib/utils";

export default function TechBadge({
  label,
  color,
  className,
}: {
  label: string;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]",
        className,
      )}
      style={{
        borderColor: color ? `${color}55` : undefined,
        backgroundColor: color ? `${color}12` : undefined,
      }}
    >
      <span
        className="size-2 rounded-full"
        style={{ backgroundColor: color ?? "var(--accent-cyan)" }}
      />
      {label}
    </span>
  );
}
