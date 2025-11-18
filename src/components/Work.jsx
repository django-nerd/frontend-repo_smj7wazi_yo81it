import { motion } from 'framer-motion'

const items = [
  { title: '3D Logo Reveal', tag: '3D • Logo', thumb: 'https://images.unsplash.com/photo-1581093458791-9d09bdb521d5?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Product Promo Reel', tag: 'Promo • Product', thumb: 'https://images.unsplash.com/photo-1551817958-20204d6ab4e9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Cinematic Outro', tag: 'Cinematic • Outro', thumb: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Text Animation Pack', tag: '3D • Text', thumb: 'https://images.unsplash.com/photo-1554200876-907f95b6fa78?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Service Presentation', tag: 'Promo • Service', thumb: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d7a54?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Ad Cutdowns', tag: 'Ads • Social', thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop' },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Work samples</h2>
            <p className="text-emerald-100/70 mt-2">A taste of recent projects and signature looks.</p>
          </div>
          <a href="#contacts" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-emerald-400/40 text-emerald-100/90 hover:border-emerald-400/70">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={i}
              href="#contacts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/40"
            >
              <img src={it.thumb} alt={it.title} className="h-56 w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-emerald-300 text-xs font-medium">{it.tag}</div>
                <div className="text-white font-semibold">{it.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
