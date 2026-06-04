"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

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

  return <>{children}</>;
}
