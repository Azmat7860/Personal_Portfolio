"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

function parseCounter(value: string) {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return { number: Number(match[1]), suffix: match[2] };
}

export default function AnimatedCounter({
  value,
  duration = 1500,
}: {
  value: string;
  duration?: number;
}) {
  const { ref, isInView } = useInView<HTMLSpanElement>(0.25, true);
  const { number, suffix } = parseCounter(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  }, [duration, isInView, number]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
