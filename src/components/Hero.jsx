import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] lg:min-h-[82vh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-black/50 dark:via-black/30 dark:to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live market preview
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Ethereal — a clean, modern way to view stocks
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-black/70 dark:text-white/70">
            A glass-morphic, 3D-first experience for real-time market insights. Smooth, minimal, and focused on what matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-sm hover:shadow">
              Get started
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-sm hover:bg-white/90 dark:hover:bg-white/10">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
