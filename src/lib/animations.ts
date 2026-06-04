import type { Variants } from "framer-motion";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
} satisfies Variants;

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
} satisfies Variants;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
} satisfies Variants;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
} satisfies Variants;

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
} satisfies Variants;
