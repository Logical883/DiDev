import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
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

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-20 text-white md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute -top-24 right-0 size-[480px] rounded-full bg-teal/20 blur-3xl" />
      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-yellow uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{lede}</p>
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
