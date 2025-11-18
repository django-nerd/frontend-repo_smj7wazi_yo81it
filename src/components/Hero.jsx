import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/40 backdrop-blur px-3 py-1 text-xs text-emerald-200/90">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              High‑tech visuals crafted with precision
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-200 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                O.legator
              </span>
            </h1>
            <p className="mt-4 text-emerald-100/90 text-lg leading-relaxed">
              Content Creator • VFX & SFX Artist • Cinematography
            </p>
            <p className="mt-2 text-emerald-100/70 text-sm max-w-xl">
              Innovative promotional videos, 3D logo/text/photo animations, video ads, intros/outros, product and service promos — all with a signature crocodile‑style aesthetic.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-xl bg-emerald-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.5)] transition-shadow">View work</a>
              <a href="#contacts" className="px-5 py-3 rounded-xl border border-emerald-400/40 text-emerald-100 hover:border-emerald-400/70 transition-colors">Get in touch</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  )
}
