import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Learn() {
  const [lessons, setLessons] = useState([])
  const [puzzles, setPuzzles] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/lessons`).then(r=>r.json()).then(setLessons).catch(()=>{})
    fetch(`${baseUrl}/puzzles`).then(r=>r.json()).then(setPuzzles).catch(()=>{})
  }, [])

  return (
    <section id="learn" className="bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Learn by doing</h2>
        <p className="text-white/70 mt-2">Short lessons and tactical drills to build real strength.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-xl">Lessons</h3>
            <div className="mt-3 space-y-3">
              {lessons.map(l => (
                <div key={l.id} className="rounded-lg bg-slate-900/60 p-3 border border-white/5">
                  <div className="font-medium">{l.title}</div>
                  <div className="text-white/70 text-sm">{l.topic} • {l.difficulty}</div>
                </div>
              ))}
              {lessons.length === 0 && (
                <div className="text-white/60 text-sm">No lessons yet. Add some via the API.</div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-xl">Puzzles</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {puzzles.map(p => (
                <div key={p.id} className="rounded-lg bg-slate-900/60 p-3 border border-white/5">
                  <div className="text-sm text-white/70">FEN</div>
                  <div className="font-mono text-xs break-all">{p.fen}</div>
                  <div className="text-xs text-emerald-300 mt-2">{p.themes?.join(', ')}</div>
                </div>
              ))}
              {puzzles.length === 0 && (
                <div className="text-white/60 text-sm">No puzzles yet. Add some via the API.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
