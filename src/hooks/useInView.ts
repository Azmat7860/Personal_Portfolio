"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.1, once = true) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, isInView };
}
