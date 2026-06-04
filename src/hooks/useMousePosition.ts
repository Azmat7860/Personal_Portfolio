"use client";

import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, hasPointer: false });

  useEffect(() => {
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      if (frame) window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
          hasPointer: true,
        });
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return position;
}
