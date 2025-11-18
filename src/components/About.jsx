import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What is O.legator</h2>
          <p className="mt-4 text-emerald-100/80 leading-relaxed">
            O.legator is a high‑tech creative studio persona — a crocodile‑minded maker with a taste for sleek motion and impactful storytelling. From hyper‑polished product spots to playful 3D experiments, the goal is simple: make brands impossible to ignore.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {['Promotional Videos','3D Logo/Text/Photo Animations','Ads, Intros & Outros','Product & Service Promos'].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-emerald-400/20 bg-slate-900/40 p-4 text-emerald-100/90"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
        >
          <div className="text-emerald-300 text-sm mb-2">Signature Style</div>
          <p className="text-white text-lg font-medium">Crocodile‑style design</p>
          <p className="text-emerald-100/80 mt-2 text-sm">Sharp lines, glossy surfaces, neon‑emerald accents, and a touch of playful bite.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { k: 'Projects', v: '120+' },
              { k: 'Clients', v: '80+' },
              { k: 'Render Hours', v: '5k+' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-emerald-400/20 bg-slate-900/40 p-4">
                <div className="text-2xl font-bold text-white">{s.v}</div>
                <div className="text-emerald-200/70 text-xs mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
