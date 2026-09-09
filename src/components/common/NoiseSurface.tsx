export default function NoiseSurface({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.035] ${className}`}
    >
      <svg className="size-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise-filter)" />
      </svg>
    </div>
  );
}
