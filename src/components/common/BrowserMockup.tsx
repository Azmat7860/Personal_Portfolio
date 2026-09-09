export default function BrowserMockup({
  gradient,
  title,
}: {
  gradient: string;
  title: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[var(--border-default)] bg-[var(--mock-frame)] shadow-[var(--shadow-card)] md:aspect-[15/11]">
      <div className="flex items-center gap-2 border-b border-[var(--mock-chrome-border)] px-4 py-3">
        <span className="size-2 rounded-full bg-[#f87171]" />
        <span className="size-2 rounded-full bg-[#fbbf24]" />
        <span className="size-2 rounded-full bg-[#34d399]" />
        <div className="ml-4 h-8 flex-1 rounded-full border border-[var(--mock-chrome-border)] bg-[var(--mock-url)]" />
      </div>

      <div className="relative h-[calc(100%-3.5rem)] overflow-hidden p-4 md:p-5">
        <div
          className="absolute inset-4 rounded-2xl md:inset-5"
          style={{ background: gradient }}
        />
        <div className="relative flex h-full min-h-0 flex-col rounded-2xl border border-[var(--mock-well-border)] bg-[var(--mock-well)] p-4 backdrop-blur-sm md:p-5">
          <div className="space-y-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--text-code)]">
              deployed system
            </p>
            <h4 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-[family-name:var(--font-outfit)] text-[1.15rem] font-semibold tracking-[-0.035em] text-[var(--mock-title)] md:text-[1.45rem]">
              {title}
            </h4>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 md:mt-auto md:gap-3">
            {["UI", "API", "Data"].map((block) => (
              <div
                key={block}
                className="min-w-0 rounded-xl border border-[var(--mock-card-border)] bg-[var(--mock-card)] p-2.5 md:p-3"
              >
                <div className="mb-2 h-2.5 w-12 rounded-full bg-[var(--mock-line-strong)] md:mb-3 md:w-16" />
                <div className="space-y-1.5 md:space-y-2">
                  <div className="h-2 rounded-full bg-[var(--mock-line)]" />
                  <div className="h-2 rounded-full bg-[var(--mock-line)]" />
                  <div className="h-2 w-4/5 rounded-full bg-[var(--mock-line)]" />
                </div>
                <p className="mt-2 text-[0.7rem] text-[var(--mock-label)] md:mt-3 md:text-xs">
                  {block}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
