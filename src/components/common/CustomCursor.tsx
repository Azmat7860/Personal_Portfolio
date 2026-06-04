"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y, hasPointer } = useMousePosition();
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const ringX = useSpring(x - 20, { stiffness: 150, damping: 15 });
  const ringY = useSpring(y - 20, { stiffness: 150, damping: 15 });
  const dotX = useSpring(x - 4, { stiffness: 500, damping: 28 });
  const dotY = useSpring(y - 4, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(pointerQuery.matches && !motionQuery.matches);
    sync();

    pointerQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovered(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };

    window.addEventListener("mouseover", onOver);

    return () => {
      pointerQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (typeof document === "undefined" || !enabled || !hasPointer) return null;

  return createPortal(
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[180] hidden rounded-full border border-white/20 md:block"
        style={{
          x: ringX,
          y: ringY,
          width: 40,
          height: 40,
          opacity: hovered ? 0.2 : 0.6,
          scale: hovered ? 2.4 : 1,
          background: hovered ? "var(--gradient-accent)" : "transparent",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[181] hidden rounded-full bg-[var(--accent-cyan)] md:block"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          scale: hovered ? 0 : 1,
          boxShadow: "0 0 18px rgba(0, 210, 255, 0.5)",
        }}
      />
    </>,
    document.body,
  );
}
