import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Chess Learning & Play
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight">
            Master chess through play, puzzles, and community
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            A modern platform that combines real-time games, curated lessons, and tactical puzzles — built for focus, fairness, and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#learn" className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition">Start Learning</a>
            <a href="#play" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">Play a Game</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />
    </section>
  )
}
