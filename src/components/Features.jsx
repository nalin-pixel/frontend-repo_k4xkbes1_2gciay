export default function Features() {
  const items = [
    {
      title: 'Live Games',
      desc: 'Play bullet, blitz, rapid, or classical with fair timers and legal moves enforced.',
    },
    {
      title: 'Tactical Puzzles',
      desc: 'Sharpen pattern recognition with curated puzzles that adapt to your level.',
    },
    {
      title: 'Lessons & Analysis',
      desc: 'Understand openings, strategy, and endgames with bite-size lessons and analysis boards.',
    },
    {
      title: 'Community',
      desc: 'Chat, join clubs, and take part in tournaments to grow with others.',
    },
  ]

  return (
    <section id="features" className="bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to improve</h2>
        <p className="text-white/70 mt-2">Designed for focus and flow with smart algorithms behind the scenes.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-xl">{it.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
