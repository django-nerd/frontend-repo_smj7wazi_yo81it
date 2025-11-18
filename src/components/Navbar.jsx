import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Contacts', href: '#contacts' },
  { label: 'Q&A', href: '#faq' },
  { label: 'What is O.legator', href: '#about' },
  { label: 'Mission', href: '#mission' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#top" className="flex items-center gap-2 group">
              <span className="text-2xl">🐊</span>
              <span className="text-white font-semibold tracking-tight text-lg">
                <span className="text-emerald-400">O</span>.legator
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-emerald-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg border border-emerald-400/20 text-emerald-100/80 hover:text-white hover:border-emerald-400/40 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-emerald-400/10 px-2 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-emerald-100/90 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
