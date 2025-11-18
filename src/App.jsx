import Hero from './components/Hero'
import Features from './components/Features'
import Playground from './components/Playground'
import Learn from './components/Learn'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Playground />
      <Learn />
      <footer className="bg-slate-950 border-t border-white/10 text-white/70 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>Chess Platform • Built for strategy, community, and growth.</div>
          <nav className="flex gap-4 text-sm">
            <a href="#play" className="hover:text-white">Play</a>
            <a href="#learn" className="hover:text-white">Learn</a>
            <a href="#features" className="hover:text-white">Features</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
