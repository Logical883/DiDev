import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../content/site'
import { cn } from '../lib/cn'
import { Button } from './Button'

const linkClass = (isActive: boolean) =>
  cn(
    'relative py-2 text-[13px] font-semibold tracking-[0.08em] text-navy uppercase',
    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-yellow after:transition-transform after:duration-300',
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 hover:text-navy',
  )

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
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b border-line bg-white', scrolled && 'shadow-[0_10px_30px_rgba(17,24,53,0.08)]')}>
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
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={({ isActive }) => linkClass(isActive)}>
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
          className="grid size-11 place-items-center rounded-[3px] border border-line text-navy transition hover:border-navy hover:bg-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div id="mobile-nav" className={cn('border-t border-line bg-white lg:hidden', open ? 'block' : 'hidden')}>
        <nav className="mx-auto flex max-h-[calc(100svh-90px)] w-full max-w-7xl flex-col overflow-auto px-5 py-2 md:px-8" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn('border-b py-4 font-display text-3xl text-navy transition hover:pl-2', isActive ? 'border-yellow' : 'border-line')
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
