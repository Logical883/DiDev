import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import MuiButton from '@mui/material/Button'
import type { SxProps, Theme } from '@mui/material/styles'
import { Arrow } from './Icons'

const variants: Record<string, SxProps<Theme>> = {
  yellow: {
    bgcolor: 'secondary.main',
    color: 'primary.main',
    borderColor: 'secondary.main',
    '&:hover': { bgcolor: '#ffe14a', borderColor: '#ffe14a' },
  },
  navy: {
    bgcolor: 'primary.main',
    color: '#fff',
    borderColor: 'primary.main',
    '&:hover': { bgcolor: 'primary.light', borderColor: 'primary.light' },
  },
  ghost: {
    bgcolor: 'transparent',
    color: 'primary.main',
    borderColor: 'rgba(17, 24, 53, 0.25)',
    '&:hover': { bgcolor: '#fff', borderColor: 'primary.main' },
  },
  'ghost-light': {
    bgcolor: 'transparent',
    color: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.35)',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: '#fff' },
  },
}

type Variant = keyof typeof variants

type Props = {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  icon?: boolean
}

/**
 * Brand button built on Material UI's Button. Internal links ("/…") use the
 * router, other hrefs render a plain anchor. Tailwind classes passed through
 * `className` still win over the MUI styles.
 */
export function Button({ children, href, variant = 'yellow', className, type = 'button', onClick, icon = true }: Props) {
  const common = {
    variant: 'outlined' as const,
    disableElevation: true,
    className,
    onClick,
    endIcon: icon ? <Arrow className="size-4" /> : undefined,
    sx: [
      {
        gap: '10px',
        px: '20px',
        py: '14px',
        borderRadius: '3px',
        fontSize: 13,
        lineHeight: 1.5,
        letterSpacing: '0.04em',
        transition: 'transform 200ms, background-color 200ms, border-color 200ms',
        '&:hover': { transform: 'translateY(-2px)' },
        '& .MuiButton-endIcon': { m: 0 },
      },
      variants[variant],
    ] as SxProps<Theme>,
  }

  if (href?.startsWith('/')) {
    return (
      <MuiButton {...common} component={Link} to={href}>
        {children}
      </MuiButton>
    )
  }

  if (href) {
    return (
      <MuiButton {...common} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </MuiButton>
    )
  }

  return (
    <MuiButton {...common} type={type}>
      {children}
    </MuiButton>
  )
}
