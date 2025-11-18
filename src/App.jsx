import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Mission from './components/Mission'
import FAQ from './components/FAQ'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50 relative">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_600px_at_10%_-10%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(800px_500px_at_90%_10%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(900px_600px_at_50%_110%,rgba(16,185,129,0.18),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Mission />
        <FAQ />
        <Contacts />
      </main>

      <footer className="relative border-t border-emerald-400/10 py-10 mt-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/70 text-sm">© {new Date().getFullYear()} O.legator — All rights reserved.</p>
          <a href="#top" className="text-emerald-200/80 hover:text-white text-sm">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
