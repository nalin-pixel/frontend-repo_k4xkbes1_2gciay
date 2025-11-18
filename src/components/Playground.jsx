import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-4 text-white">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  )
}

export default function Playground() {
  const [status, setStatus] = useState('Checking...')
  const [collections, setCollections] = useState([])
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({ username: '', display_name: '', rating: 1200 })

  useEffect(() => {
    fetch(`${baseUrl}/test`).then(r => r.json()).then(d => {
      setStatus(d.database)
      setCollections(d.collections || [])
    }).catch(() => setStatus('Backend not reachable'))

    fetch(`${baseUrl}/users`).then(r => r.json()).then(setUsers).catch(() => {})
  }, [])

  const createUser = async () => {
    if (!newUser.username) return
    const res = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const data = await res.json()
    setNewUser({ username: '', display_name: '', rating: 1200 })
    const fresh = await fetch(`${baseUrl}/users`).then(r=>r.json())
    setUsers(fresh)
  }

  return (
    <section id="play" className="bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Try it now</h2>
        <p className="text-white/70 mt-2">Quickly create a player profile and see matchmaking-ready data.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Backend" value={status} />
              <Stat label="Collections" value={collections.length} />
              <Stat label="Users" value={users.length} />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <h3 className="font-semibold text-xl">Create Profile</h3>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <input value={newUser.username} onChange={e=>setNewUser(v=>({...v, username: e.target.value}))} placeholder="username" className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-white/40" />
                <input value={newUser.display_name} onChange={e=>setNewUser(v=>({...v, display_name: e.target.value}))} placeholder="display name" className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-white/40" />
                <input type="number" value={newUser.rating} onChange={e=>setNewUser(v=>({...v, rating: Number(e.target.value)}))} placeholder="rating" className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-white/40" />
              </div>
              <button onClick={createUser} className="mt-4 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold">Save</button>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <h3 className="font-semibold text-xl">Players</h3>
              <div className="mt-3 space-y-2">
                {users.map(u => (
                  <div key={u.id} className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2 border border-white/5">
                    <div>
                      <div className="font-medium">{u.display_name || u.username}</div>
                      <div className="text-xs text-white/60">@{u.username}</div>
                    </div>
                    <div className="text-emerald-300 font-semibold">{u.rating}</div>
                  </div>
                ))}
                {users.length === 0 && (
                  <div className="text-white/60 text-sm">No users yet. Create one above to get started.</div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <h3 className="font-semibold">What happens next?</h3>
              <p className="text-white/70 mt-2 text-sm">Once two profiles exist, the system can match players by closest rating and create games with your preferred time control.</p>
              <a href="#learn" className="inline-block mt-3 text-emerald-300 hover:text-emerald-200">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
