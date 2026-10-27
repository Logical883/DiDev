import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company, nav } from '../content/site'
import { cn } from '../lib/cn'
import { Button } from './Button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 bg-white', scrolled && 'shadow-[0_10px_30px_rgba(17,24,53,0.08)]')}>
      <div
        className={cn(
          'overflow-hidden bg-navy text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase transition-all duration-300',
          scrolled ? 'max-h-0' : 'max-h-12',
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-2.5 md:px-8">
          <span>{company.legal}</span>
          <span className="hidden sm:inline">{company.tagline}</span>
          <span className="hidden md:inline">
            {company.location} · {company.reach}
          </span>
        </div>
      </div>

      <div className="border-b border-line">
        <div className="mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
          <Link to="/" className="shrink-0" aria-label="DiDev home">
            <img
              src="/brand/logo-horizontal.png"
              alt="DiDev. Learn. Build. Transform."
              className="h-12 w-auto sm:h-[52px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'border-b-2 pb-1 text-[13px] font-semibold tracking-[0.08em] text-navy uppercase',
                    isActive ? 'border-yellow' : 'border-transparent hover:border-navy/30',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="px-4 py-3">
              Start a conversation
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-[3px] border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={cn('border-t border-line bg-white lg:hidden', open ? 'block' : 'hidden')}>
        <nav
          className="mx-auto flex max-h-[calc(100svh-140px)] w-full max-w-7xl flex-col overflow-auto px-5 py-2 md:px-8"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'border-b-2 py-4 font-display text-3xl text-navy',
                  isActive ? 'border-yellow' : 'border-line',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="py-6">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
