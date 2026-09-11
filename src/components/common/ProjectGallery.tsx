"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useHasMounted } from "@/hooks/useHasMounted";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types";

type ProjectGalleryProps = {
  images: ProjectImage[];
  title: string;
  gradient: string;
  lightboxOpen: boolean;
  onLightboxOpenChange: (open: boolean) => void;
};

export default function ProjectGallery({
  images,
  title,
  gradient,
  lightboxOpen,
  onLightboxOpenChange,
}: ProjectGalleryProps) {
  const hasMounted = useHasMounted();
  const shouldReduceMotion = useReducedMotion();
  const canAnimate = hasMounted && !shouldReduceMotion;
  const [index, setIndex] = useState(0);

  const count = images.length;
  const active = images[index] ?? images[0];

  const goTo = (next: number) => {
    if (count <= 1) return;
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (!canAnimate || count <= 1 || lightboxOpen) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [canAnimate, count, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onLightboxOpenChange(false);
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % count);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => ((current - 1) % count + count) % count);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, count, onLightboxOpenChange]);

  if (!active) return null;

  return (
    <>
      <div className="relative min-w-0">
        <button
          type="button"
          onClick={() => onLightboxOpenChange(true)}
          className="group relative block w-full overflow-hidden rounded-[1.25rem] border border-[var(--border-default)] bg-[var(--mock-frame)] text-left shadow-[var(--shadow-card)]"
          aria-label={`Open gallery for ${title}`}
        >
          <div className="flex items-center gap-2 border-b border-[var(--mock-chrome-border)] px-4 py-3">
            <span className="size-2 rounded-full bg-[#f87171]" aria-hidden />
            <span className="size-2 rounded-full bg-[#fbbf24]" aria-hidden />
            <span className="size-2 rounded-full bg-[#34d399]" aria-hidden />
            <div className="ml-3 min-w-0 flex-1 truncate rounded-full border border-[var(--mock-chrome-border)] bg-[var(--mock-url)] px-3 py-1.5 font-mono text-[0.65rem] text-[var(--text-muted)]">
              {active.label ?? title}
            </div>
          </div>

          <div
            className="relative aspect-[16/9] overflow-hidden"
            style={{ background: gradient }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.src}
                initial={canAnimate ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                exit={canAnimate ? { opacity: 0 } : undefined}
                transition={{ duration: canAnimate ? 0.28 : 0 }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.src}
                  alt={active.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-90 backdrop-blur-sm transition group-hover:opacity-100">
              <Expand className="size-4" aria-hidden />
            </span>
          </div>
        </button>

        {count > 1 ? (
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${image.label ?? `image ${i + 1}`}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index
                      ? "w-7 bg-[var(--accent-cyan)]"
                      : "w-2 bg-[var(--text-secondary)] hover:bg-[var(--text-primary)]",
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--panel-muted)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                aria-label="Next image"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {hasMounted && lightboxOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[220] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} gallery`}
              onClick={() => onLightboxOpenChange(false)}
            >
              <motion.div
                initial={canAnimate ? { opacity: 0, y: 16, scale: 0.98 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: canAnimate ? 0.28 : 0 }}
                className="relative flex max-h-[min(92vh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b14] shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                  <div className="min-w-0">
                    <p className="truncate font-[family-name:var(--font-outfit)] text-base font-semibold text-white sm:text-lg">
                      {title}
                    </p>
                    <p className="truncate text-sm text-white/65">
                      {active.label ?? active.alt}
                      {count > 1 ? ` · ${index + 1} of ${count}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onLightboxOpenChange(false)}
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    aria-label="Close gallery"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="relative min-h-0 flex-1 overflow-hidden bg-black">
                  <div className="h-full max-h-[min(68vh,700px)] min-h-[min(52vh,480px)] overflow-y-auto overscroll-contain">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.src}
                        initial={canAnimate ? { opacity: 0 } : false}
                        animate={{ opacity: 1 }}
                        exit={canAnimate ? { opacity: 0 } : undefined}
                        transition={{ duration: canAnimate ? 0.22 : 0 }}
                        className="relative w-full"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={active.src}
                          alt={active.alt}
                          className="block h-auto w-full"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {count > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => goTo(index - 1)}
                        className="absolute left-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70 sm:left-4"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => goTo(index + 1)}
                        className="absolute right-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70 sm:right-4"
                        aria-label="Next image"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  ) : null}
                </div>

                {count > 1 ? (
                  <div className="flex shrink-0 items-center gap-2 overflow-x-auto border-t border-white/10 px-3 py-3 sm:px-4 sm:py-3.5">
                    {images.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "relative h-14 w-[5.25rem] shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24",
                          i === index
                            ? "border-[var(--accent-cyan)] opacity-100"
                            : "border-transparent opacity-65 hover:opacity-100",
                        )}
                        aria-label={`Select ${image.label ?? `image ${i + 1}`}`}
                        aria-current={i === index}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes="96px"
                          quality={80}
                          className="object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
