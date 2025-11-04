import { Rocket, LineChart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 grid place-items-center">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Ethereal</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70 dark:text-white/70">
          <a href="#overview" className="hover:text-black dark:hover:text-white transition-colors">Overview</a>
          <a href="#markets" className="hover:text-black dark:hover:text-white transition-colors">Markets</a>
          <a href="#insights" className="hover:text-black dark:hover:text-white transition-colors">Insights</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-sm hover:shadow transition-shadow">
            <LineChart className="h-4 w-4" />
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
