import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Toolbar from '@mui/material/Toolbar'
import { Menu, X } from 'lucide-react'
import { nav } from '../content/site'
import { cn } from '../lib/cn'
import { Button } from './Button'
import { SkeletonImage } from './Skeletons'

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

  const isActive = (href: string) => (href === '/' ? location.pathname === '/' : location.pathname.startsWith(href))

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        zIndex: 50,
        bgcolor: '#fff',
        color: 'primary.main',
        borderBottom: '1px solid',
        borderColor: 'divider',
        boxShadow: scrolled ? '0 10px 30px rgba(17, 24, 53, 0.08)' : 'none',
        transition: 'box-shadow 200ms',
      }}
    >
      <Toolbar disableGutters className="mx-auto min-h-[78px] w-full max-w-7xl justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="shrink-0" aria-label="DiDev home">
          <SkeletonImage
            wrap=""
            src="/brand/logo-horizontal.png"
            alt="DiDev. Learn. Build. Transform."
            width={1600}
            height={531}
            className="h-12 w-auto sm:h-[52px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={({ isActive: active }) => linkClass(active)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="px-4 py-3">
            Start a conversation
          </Button>
        </div>

        <IconButton
          className="lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
          sx={{ width: 44, height: 44, borderRadius: '3px', border: '1px solid', borderColor: 'divider', color: 'primary.main', '&:hover': { borderColor: 'primary.main', bgcolor: '#e9eef2' } }}
        >
          <Menu className="size-5" aria-hidden="true" />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          backdrop: { sx: { bgcolor: 'rgba(17, 24, 53, 0.4)', backdropFilter: 'blur(2px)' } },
          paper: { id: 'mobile-nav', sx: { width: 'min(88vw, 380px)', bgcolor: '#fff' } },
        }}
      >
        <div className="flex h-[78px] shrink-0 items-center justify-end border-b border-line px-5">
          <IconButton
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            sx={{ width: 44, height: 44, borderRadius: '3px', border: '1px solid', borderColor: 'divider', color: 'primary.main' }}
          >
            <X className="size-5" aria-hidden="true" />
          </IconButton>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-auto px-5 py-2">
          <List disablePadding>
            {nav.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                to={item.href}
                selected={isActive(item.href)}
                disableGutters
                sx={{
                  py: 2,
                  borderBottom: '1px solid',
                  borderColor: isActive(item.href) ? 'secondary.main' : 'divider',
                  fontFamily: '"Manrope", Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  fontSize: 28,
                  letterSpacing: '-0.04em',
                  color: 'primary.main',
                  transition: 'padding-left 200ms',
                  '&:hover': { pl: 1, bgcolor: 'transparent' },
                  '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>
          <div className="py-6">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </nav>
      </Drawer>
    </AppBar>
  )
}
