import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const price = 248.36;
const change = 3.42; // positive indicates up

const chartData = [
  220, 226, 232, 228, 235, 238, 242, 239, 244, 248, 246, 251, 249, 255, 252, 258, 261, 259, 264, 268
];

const watchlist = [
  { ticker: 'ETHR', name: 'Ethereal Inc.', price: 248.36, change: 3.42 },
  { ticker: 'ALFA', name: 'Alpha Tech', price: 112.18, change: -1.06 },
  { ticker: 'NOVA', name: 'Nova Systems', price: 78.92, change: 0.88 },
  { ticker: 'ORBX', name: 'Orbital X', price: 412.03, change: 5.31 },
];

function MiniChart({ data }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = ((max - d) / (max - min || 1)) * 100;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-28">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={`0,100 ${points} 100,100`}
        fill="url(#grad)"
        opacity="0.3"
      />
    </svg>
  );
}

export default function StockOverview() {
  const isUp = change >= 0;
  return (
    <section id="overview" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm text-black/60 dark:text-white/60">Ethereal Inc. (ETHR)</h3>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-4xl md:text-5xl font-semibold tracking-tight">${price.toFixed(2)}</span>
                  <span className={`inline-flex items-center gap-1.5 text-sm px-2.5 py-1 rounded-full ${isUp ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
                    {isUp ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    {Math.abs(change).toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${isUp ? 'text-emerald-600 bg-emerald-100/60' : 'text-rose-600 bg-rose-100/60'} dark:bg-white/10`}>
                {isUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {isUp ? 'Bullish trend' : 'Bearish trend'}
              </div>
            </div>
            <div className="mt-6">
              <MiniChart data={chartData} />
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Stat label="Open" value="$244.12" />
              <Stat label="High" value="$269.03" />
              <Stat label="Low" value="$219.58" />
              <Stat label="Volume" value="8.4M" />
            </div>
          </div>

          <div className="space-y-6">
            <div id="markets" className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Watchlist</h3>
                <span className="text-xs text-black/60 dark:text-white/60">Mock data</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {watchlist.map((item) => {
                  const up = item.change >= 0;
                  return (
                    <div key={item.ticker} className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-black/60 dark:text-white/60">{item.name}</div>
                          <div className="font-medium">{item.ticker}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${'{'}item.price.toFixed(2){'}'}</div>
                          <div className={`${up ? 'text-emerald-600' : 'text-rose-600'} text-xs flex items-center gap-1 justify-end`}>
                            {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                            {Math.abs(item.change).toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="insights" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InsightCard title="Low latency" desc="Real-time pricing with smooth interactions for a seamless flow." />
              <InsightCard title="Secure by design" desc="Modern stack with best practices and privacy-first approach." />
              <InsightCard title="Minimal UI" desc="Clean layouts with glass morphism and subtle depth cues." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-3 rounded-lg bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10">
      <div className="text-xs text-black/60 dark:text-white/60">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </div>
  );
}

function InsightCard({ title, desc }) {
  return (
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 shadow-sm">
      <div className="font-medium">{title}</div>
      <div className="mt-1.5 text-sm text-black/70 dark:text-white/70">{desc}</div>
    </div>
  );
}
