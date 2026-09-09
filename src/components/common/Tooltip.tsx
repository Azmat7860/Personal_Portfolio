import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TooltipSide = "bottom" | "top";

export default function Tooltip({
  children,
  className,
  label,
  side = "top",
}: {
  children: ReactNode;
  className?: string;
  label: string;
  side?: TooltipSide;
}) {
  return (
    <span className={cn("group/tooltip relative inline-flex max-w-full min-w-0", className)}>
      {children}
      <span
        className={cn(
          "pointer-events-none absolute left-1/2 z-50 max-w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-[var(--border-default)] bg-[var(--tooltip-bg)] px-2.5 py-1.5 text-center text-xs font-medium text-[var(--tooltip-text)] opacity-0 shadow-xl transition-all duration-150 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100",
          side === "top"
            ? "bottom-full mb-2 translate-y-1"
            : "top-full mt-2 -translate-y-1",
        )}
        role="tooltip"
      >
        {label}
      </span>
    </span>
  );
}
