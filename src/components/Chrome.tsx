import type { ReactNode } from 'react'
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
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 text-white md:pt-44 md:pb-28">
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
  return (
    <section className="bg-navy text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-yellow uppercase">{eyebrow}</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] text-white">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/75">{text}</p>
        </div>
        <Button href={href}>{label}</Button>
      </Container>
    </section>
  )
}
