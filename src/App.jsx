import { useState } from 'react'
import { BUSINESS as B, NAV, IMG, SERVICES, FILTERS, PROJECTS, STATS, POINTS, BUDGETS } from './data'

const wa = (m) => `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(m)}`

// Image with graceful fallback so a dead link never breaks the layout
function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false)
  return bad
    ? <div className={`bg-gradient-to-br from-ink-soft to-ink ${className}`} role="img" aria-label={alt} />
    : <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />
}

const Eyebrow = ({ children, light }) => (
  <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${light ? 'text-ice' : 'text-sky-700'}`}>
    <span className="h-px w-10 bg-current" />{children}
  </p>
)

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ice text-ice">❄</span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{B.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60">{B.tagline}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-white/80 transition hover:text-ice">{n}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-sm bg-ice px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white lg:block">Book Consultation</a>
        <button className="text-2xl lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-ink px-6 py-4 lg:hidden">
          {NAV.map((n) => <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-3 text-white/80">{n}</a>)}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center text-white">
      <Img src={IMG.hero} alt="Air conditioning unit installed on an exterior wall" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">
        <Eyebrow light>HVAC Design — Installation — Maintenance</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          Engineering <span className="italic text-ice">Perfect</span><br />Climate for Every Space
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          From heat-load calculations to final commissioning — one engineering-led team for air conditioning, heating and ventilation in homes and businesses.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-sm bg-ice px-8 py-3.5 font-semibold text-ink transition hover:bg-white">Book Consultation</a>
          <a href="#portfolio" className="rounded-sm border border-white/40 px-8 py-3.5 font-semibold transition hover:bg-white hover:text-ink">View Our Work</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">One team, the full system — design through service.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-slate-200 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.n} className="group bg-white p-10 transition hover:bg-ink hover:text-white">
              <span className="font-display text-5xl text-sky-600/40 transition group-hover:text-ice">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-600 transition group-hover:text-white/70">{s.text}</p>
              <a href="#contact" className="mt-8 inline-block text-sm font-semibold text-sky-700 transition group-hover:text-ice">Discuss this service →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [f, setF] = useState('All')
  const list = f === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === f)
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Recent Work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">A portfolio of completed projects.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)}
                className={`rounded-sm border px-5 py-2 text-sm transition ${f === x ? 'border-ink bg-ink text-white' : 'border-slate-300 text-slate-600 hover:border-ink'}`}>{x}</button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <figure key={p.title} className="group relative h-80 overflow-hidden rounded-sm">
              <Img src={p.img} alt={p.title} className="h-full w-full transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-0 p-5 text-white">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ice">{p.cat}</span>
                <p className="mt-1 font-display text-lg">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-ink py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <Img src={IMG.about} alt="HVAC technician at work on outdoor equipment" className="h-[520px] w-full rounded-sm" />
          <div className="absolute -bottom-6 left-6 rounded-sm bg-ice px-6 py-4 text-ink shadow-xl">
            <p className="font-display text-lg font-semibold">{B.founder}</p>
            <p className="text-sm">{B.founderRole}</p>
          </div>
        </div>
        <div>
          <Eyebrow light>About The Company</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Engineering discipline, comfort by design.</h2>
          <p className="mt-6 leading-relaxed text-white/70">
            {B.name} was founded on a simple idea: a cooling system should be sized, installed and serviced like the engineered system it is. Every project starts with proper calculations and ends with a commissioned, documented installation.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/15 py-8">
            {STATS.map(([n, l]) => (
              <div key={l}><p className="font-display text-4xl text-ice">{n}</p><p className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</p></div>
            ))}
          </div>
          <ul className="mt-8 space-y-5">
            {POINTS.map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ice text-xs text-ink">✓</span>
                <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-white/60">{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', phone: '', service: '', budget: '', details: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    window.open(wa(`Hi ${B.name}! I'm ${f.name} (${f.phone}). Service: ${f.service}. Budget: ${f.budget}. ${f.details}`), '_blank')
  }
  const field = 'w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-sky-600'
  return (
    <section id="contact" className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <Eyebrow>Start Your Project</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Let's plan your perfect climate.</h2>
          <p className="mt-5 max-w-md text-slate-600">Tell us about your space and {B.founder}'s team will get back to you with next steps.</p>
          <dl className="mt-10 space-y-6 text-sm">
            {[['Address', B.address], ['Phone', B.phone], ['Email', B.email]].map(([k, v]) => (
              <div key={k} className="border-l-2 border-ice pl-4"><dt className="text-xs uppercase tracking-widest text-slate-500">{k}</dt><dd className="mt-1 text-base">{v}</dd></div>
            ))}
          </dl>
        </div>
        <form onSubmit={submit} className="space-y-6 rounded-sm bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <input required placeholder="Full Name" value={f.name} onChange={set('name')} className={field} />
            <input required type="tel" placeholder="Phone Number" value={f.phone} onChange={set('phone')} className={field} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <select required value={f.service} onChange={set('service')} className={field}>
              <option value="">Service Required</option>
              {SERVICES.map((s) => <option key={s.n}>{s.title}</option>)}<option>Not sure yet</option>
            </select>
            <select required value={f.budget} onChange={set('budget')} className={field}>
              <option value="">Project Budget</option>
              {BUDGETS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <textarea rows="4" placeholder="Project Details (optional)" value={f.details} onChange={set('details')} className={field} />
          <button className="w-full rounded-sm bg-ink py-4 font-semibold text-white transition hover:bg-sky-700">Book Consultation</button>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><Services /><Portfolio /><About /><Contact /></main>
      <footer className="bg-ink py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div><p className="font-display text-xl">{B.name}</p><p className="text-xs uppercase tracking-[0.2em] text-white/50">{B.tagline}</p></div>
          <nav className="flex gap-6 text-sm text-white/70">{NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-ice">{n}</a>)}</nav>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} {B.name}. All rights reserved.</p>
        </div>
      </footer>
      <a href={wa(`Hi ${B.name}! I'd like to ask about an HVAC project.`)} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl shadow-xl transition hover:scale-105">💬</a>
    </>
  )
}
