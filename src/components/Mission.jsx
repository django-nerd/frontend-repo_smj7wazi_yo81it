export default function Mission() {
  return (
    <section id="mission" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mission</h2>
          <p className="mt-4 text-emerald-100/80 leading-relaxed">
            To transform ideas into motion that sticks — visuals that spark curiosity, sell the vision, and feel unmistakably modern. The mission is to fuse cinematic taste with technical craft to deliver work that looks expensive and performs.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6">
          <div className="text-emerald-300 text-sm mb-2">Values</div>
          <ul className="space-y-2 text-emerald-100/90 text-sm">
            <li>Precision-driven design</li>
            <li>Momentum in every frame</li>
            <li>Honest collaboration</li>
            <li>On-time delivery</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
