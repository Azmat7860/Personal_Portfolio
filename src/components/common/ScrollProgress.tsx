"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const { scaleX } = useScrollProgress();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-0.5 origin-left"
      style={{ scaleX, background: "var(--gradient-accent)" }}
    />
  );
}
