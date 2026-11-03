import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import { cn } from '../lib/cn'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto w-full max-w-7xl px-5 md:px-8', className)}>{children}</div>
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <p
      className={cn(
        'text-[11px] font-semibold tracking-[0.2em] uppercase',
        light ? 'text-yellow' : 'text-navy',
      )}
    >
      {children}
    </p>
  )
}

const crumbLabels: Record<string, string> = {
  about: 'About',
  academy: 'Academy',
  consulting: 'Consulting',
  network: 'Network',
  contact: 'Contact',
  'data-foundation': 'Data Foundation',
  'digital-marketing-incubator': 'Digital Marketing Incubator',
  '100-days-of-data': '100 Days of Data',
}

function labelFor(segment: string) {
  return (
    crumbLabels[segment] ??
    segment.replace(/-/g, ' ').replace(/^\w/, (letter) => letter.toUpperCase())
  )
}

type Crumb = { label: string; href?: string }

/** Hero photo per page, from public/brand. Tune `position` if a crop cuts someone off. */
const heroPhotos: Record<string, { src: string; position: string }> = {
  about: { src: '/brand/9H7A2782.jpg', position: '50% 30%' },
  academy: { src: '/brand/9H7A2697.jpg', position: '50% 30%' },
  consulting: { src: '/brand/IMG_7023.jpeg', position: '50% 30%' },
  network: { src: '/brand/gemini-edited-1765231859644.png', position: '50% 30%' },
  contact: { src: '/brand/IMG_6273.jpeg', position: '50% 30%' },
  'data-foundation': { src: '/brand/IMG_3316.jpg', position: '50% 30%' },
  'digital-marketing-incubator': { src: '/brand/FO8A9940.jpeg', position: '50% 30%' },
  '100-days-of-data': { src: '/brand/9H7A2782.jpg', position: '50% 30%' },
}
const fallbackPhoto = { src: '/hero-poster.jpg', position: '50% 30%' }

export function PageHero({
  title,
  lede,
  crumbs,
  actions,
  image,
}: {
  /** Kept so existing pages still compile. The hero no longer shows it. */
  eyebrow?: string
  title: string
  lede: string
  crumbs?: Crumb[]
  actions?: ReactNode
  image?: string
}) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const photo = image
    ? { src: image, position: '50% 30%' }
    : (heroPhotos[segments[segments.length - 1]] ?? heroPhotos[segments[0]] ?? fallbackPhoto)
  const trail: Crumb[] =
    crumbs ??
    segments.map((segment, index) => ({
      label: labelFor(segment),
      href: index < segments.length - 1 ? `/${segments.slice(0, index + 1).join('/')}` : undefined,
    }))

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src={photo.src}
        alt=""
        decoding="async"
        style={{ objectPosition: photo.position }}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/55" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/55 to-transparent" aria-hidden="true" />

      <Container className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold tracking-[0.06em] text-white/80 uppercase">
          <Link to="/" className="hover:text-yellow">Home</Link>
          {trail.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              <span className="mx-2 text-white/50" aria-hidden="true">/</span>
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-yellow">{crumb.label}</Link>
              ) : (
                <span aria-current="page" className="text-white/60">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="mt-10 max-w-3xl text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{lede}</p>
        {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </section>
  )
}

export function CtaBand({
  eyebrow = 'Begin',
  title = 'Tell us what needs to change.',
  text = 'A learning pathway, a consulting problem, a partnership or a room that needs a clear conversation.',
  href = '/contact',
  label = 'Start a conversation',
}: {
  eyebrow?: string
  title?: string
  text?: string
  href?: string
  label?: string
}) {
  const paths = [
    { title: 'Academy', text: 'A pathway people can demonstrate.', href: '/academy' },
    { title: 'Consulting', text: 'A problem scoped before a tool.', href: '/consulting' },
    { title: 'Network', text: 'A partnership with a shared outcome.', href: '/network' },
  ]

  return (
    <section className="bg-navy-soft text-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-yellow uppercase">{eyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.2rem)] text-white">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75">{text}</p>
          </div>
          <Button href={href}>{label}</Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.href}
              to={path.href}
              className="group flex items-center justify-between gap-4 border border-white/15 px-5 py-5 transition hover:border-yellow hover:bg-white/5"
            >
              <span>
                <span className="block font-display text-xl text-white">{path.title}</span>
                <span className="mt-1 block text-sm text-white/70">{path.text}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-yellow transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}