"use client";

import Lenis from "@studio-freight/lenis";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasMounted = useHasMounted();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.085,
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      gestureOrientation: "vertical",
    });

    window.__lenis = lenis;
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Keep SSR and first client paint aligned; apply user preference after mount.
  return (
    <MotionConfig reducedMotion={hasMounted ? "user" : "never"}>
      {children}
    </MotionConfig>
  );
}
