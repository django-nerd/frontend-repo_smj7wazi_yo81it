export default function Contacts() {
  return (
    <section id="contacts" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contacts</h2>
          <p className="mt-3 text-emerald-100/80">Ready to collaborate? Reach out with your brief and timeline.</p>
          <div className="mt-6 space-y-3 text-emerald-100/90">
            <a href="mailto:hello@olegator.studio" className="block">hello@olegator.studio</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="block">Behance</a>
          </div>
        </div>

        <form className="rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6 grid gap-4">
          <div>
            <label className="block text-sm text-emerald-200/80">Name</label>
            <input className="mt-1 w-full rounded-lg bg-slate-800/60 border border-emerald-400/20 px-3 py-2 text-white outline-none focus:border-emerald-400/60" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-emerald-200/80">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg bg-slate-800/60 border border-emerald-400/20 px-3 py-2 text-white outline-none focus:border-emerald-400/60" placeholder="name@email.com" />
          </div>
          <div>
            <label className="block text-sm text-emerald-200/80">Project details</label>
            <textarea rows="4" className="mt-1 w-full rounded-lg bg-slate-800/60 border border-emerald-400/20 px-3 py-2 text-white outline-none focus:border-emerald-400/60" placeholder="What are we creating?" />
          </div>
          <button type="button" className="mt-2 inline-flex justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-900 hover:brightness-110">Send inquiry</button>
        </form>
      </div>
    </section>
  )
}
