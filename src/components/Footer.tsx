import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUp, Mail, MapPin } from 'lucide-react'
import { company, instagram } from '../content/site'

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}
const information = [
  { label: 'About us', href: '/about' },
  { label: 'Academy', href: '/academy' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
]

const helpful = [
  { label: 'Founder', href: '/about#founder' },
  { label: 'Speaking', href: '/about#speaking' },
  { label: 'Data Foundation', href: '/academy/data-foundation' },
  { label: 'Digital Marketing Incubator', href: '/academy/digital-marketing-incubator' },
  { label: '100 Days of Data', href: '/academy/100-days-of-data' },
  { label: 'Data Foundation Live', href: '/network' },
  { label: 'Consulting services', href: '/consulting' },
  { label: 'Start a conversation', href: '/contact' },
]

export function Footer() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    navigate(`/contact?email=${encodeURIComponent(value)}`)
  }

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex" aria-label="DiDev home">
            <img src="/brand/logo-horizontal-gray.png" alt="DiDev. Learn. Build. Transform." className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-white/60">{company.tagline}</p>

          <h2 className="mt-8 text-base font-semibold text-yellow">About us</h2>
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/70">
            {company.positioning} Practical digital education and transformation support for people, businesses and institutions.
          </p>

          <h2 className="mt-8 text-base font-semibold text-yellow">Contact</h2>
          <div className="mt-3 space-y-3 text-sm text-white/75">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-yellow" aria-hidden="true" />
              <span>{company.location} · {company.reach}</span>
            </p>
            <a href={instagram} className="flex items-center gap-3 hover:text-yellow" target="_blank" rel="noreferrer">
              <InstagramMark className="size-4 shrink-0 text-yellow" />
              @miss_mailiana
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-yellow">Information</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {information.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-yellow">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-yellow">Helpful links</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {helpful.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="transition hover:text-yellow">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-white">Subscribe for updates</h2>
          <p className="mt-3 text-sm leading-7 text-white/65">
            Share your email and we will open a conversation. Nothing is stored on this site.
          </p>
          <form onSubmit={onSubmit} className="mt-5" noValidate>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="flex items-center gap-2 bg-white px-3 text-navy">
              <Mail className="size-4 shrink-0 text-ink/50" aria-hidden="true" />
              <input
                id="footer-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
              />
            </div>
            {error ? <p className="mt-2 text-sm text-[#ffb4b4]">{error}</p> : null}
            <button type="submit" className="mt-3 bg-yellow px-5 py-3 text-sm font-semibold text-navy transition hover:bg-[#ffe14a]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 py-6 md:flex-row md:justify-between md:px-8">
          <a
            href={instagram}
            aria-label="DiDev on Instagram"
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-full bg-white text-[#111835] transition hover:bg-white/90"
          >
            <InstagramMark className="size-4" />
          </a>
          <p className="text-xs text-white/55">© {new Date().getFullYear()} Mailiana-DiDev LTD. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid size-9 place-items-center bg-white text-[#111835] transition hover:bg-white/90"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}