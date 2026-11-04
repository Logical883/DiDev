import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './Icons'
import { cn } from '../lib/cn'

const styles = {
  yellow:
    'bg-yellow text-navy hover:bg-[#ffe14a] border border-yellow',
  navy: 'bg-navy text-white hover:bg-navy-soft border border-navy',
  ghost:
    'bg-transparent text-navy border border-navy/25 hover:border-navy hover:bg-white',
  'ghost-light':
    'bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/10',
} as const

type Variant = keyof typeof styles

type Props = {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  icon?: boolean
}

export function Button({
  children,
  href,
  variant = 'yellow',
  className,
  type = 'button',
  onClick,
  icon = true,
}: Props) {
  const classNames = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-[3px] px-5 py-3.5 text-[13px] font-semibold tracking-[0.04em] transition duration-200 hover:-translate-y-0.5',
    styles[variant],
    className,
  )
  const content = (
    <>
      {children}
      {icon ? <Arrow className="size-4" /> : null}
    </>
  )

  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={classNames} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        onClick={onClick}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {content}
    </button>
  )
}
