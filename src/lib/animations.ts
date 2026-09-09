import type { Variants } from "framer-motion";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

/** Entrance variants — keep opacity at 1 so reduced-motion / SSR never leave content invisible. */
export const fadeInUp = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
} satisfies Variants;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
} satisfies Variants;
