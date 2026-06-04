"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export default function SectionWrapper({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  const { ref, isInView } = useInView<HTMLElement>(0.1, true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("relative py-14 md:py-18 lg:py-22", className)}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}
