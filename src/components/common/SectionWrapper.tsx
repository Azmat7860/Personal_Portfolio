"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function SectionWrapper({
  children,
  id,
  className,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} className={cn("section-y relative", className)}>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0.92, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
