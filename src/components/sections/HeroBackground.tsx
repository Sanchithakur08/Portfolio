/** Decorative, GPU-friendly hero backdrop: masked grid + two slowly drifting glows. */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_30%,transparent_75%)]" />
      <div className="absolute -left-[10%] top-[-15%] h-[38rem] w-[38rem] animate-drift rounded-full bg-violet-600/20 blur-[120px] will-change-transform" />
      <div className="absolute -right-[12%] top-[10%] h-[34rem] w-[34rem] animate-drift-reverse rounded-full bg-blue-600/[0.18] blur-[120px] will-change-transform" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
