import { cn } from "@/lib/utils";

export default function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("accent-text", className)}>{children}</span>;
}
