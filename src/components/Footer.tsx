import { Link } from 'react-router-dom'
import { company, nav } from '../content/site'

export function Footer() {
  return (
    <footer className="bg-[#0c1228] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <span className="inline-flex bg-white px-3 py-2">
            <img src="/brand/logo-horizontal.png" alt="DiDev" className="h-12 w-auto" />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            {company.positioning} Practical digital education and transformation support for people, businesses and institutions.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Company</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
            <Link to="/about" className="hover:text-yellow">About</Link>
            <Link to="/about#founder" className="hover:text-yellow">Founder</Link>
            <Link to="/about#speaking" className="hover:text-yellow">Speaking</Link>
            <Link to="/contact" className="hover:text-yellow">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Divisions</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
            {nav
              .filter((item) => item.href !== '/about' && item.href !== '/contact')
              .map((item) => (
                <Link key={item.href} to={item.href} className="hover:text-yellow">
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Inquiries</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            {company.legal}. {company.location}, working with people and organizations across {company.reach}.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex bg-yellow px-4 py-3 text-sm font-semibold text-navy"
          >
            Start a conversation
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {company.legal}. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
