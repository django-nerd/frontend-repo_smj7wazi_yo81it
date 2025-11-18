export default function FAQ() {
  const faqs = [
    {
      q: 'What services do you offer?',
      a: 'Promotional videos, 3D logo/text/photo animations, video ads, intros/outros, and product & service promos. Cinematography support on request.'
    },
    {
      q: 'How do we start?',
      a: 'Share your brief, references, and deadlines. You will receive a concept, timeline, and quote.'
    },
    { q: 'Do you handle sound design (SFX)?', a: 'Yes — integrated SFX and mixdown to match the visuals.' },
    { q: 'What formats do you deliver?', a: 'Master files for social, web, and broadcast. Source files on request.' },
  ]

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Questions and answers</h2>
        <div className="mt-6 divide-y divide-emerald-400/10 rounded-2xl border border-emerald-400/20 bg-slate-900/40">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none text-emerald-100/90 font-medium">
                <span className="group-open:text-white">{f.q}</span>
              </summary>
              <p className="mt-2 text-emerald-100/70 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
