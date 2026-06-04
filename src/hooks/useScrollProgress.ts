"use client";

import { useScroll, useSpring } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.2,
  });

  return { scaleX };
}
