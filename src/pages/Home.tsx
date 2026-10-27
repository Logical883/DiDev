import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  challenges,
  divisions,
  founderQuote,
  highlights,
  services,
} from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand } from '../components/Chrome'
import { HeroSlider } from '../components/HeroSlider'
import { MarkIcon, type IconName } from '../components/Icons'
import { useFilm } from '../components/FilmContext'
import { cn } from '../lib/cn'
import { usePageMeta } from '../lib/page'

const gapTabs = ['Strategy', 'Skills', 'Decisions']

export function HomePage() {
  const openFilm = useFilm()
  const [gap, setGap] = useState(0)
  const activeGap = challenges[gap]
  usePageMeta(
    'DiDev — Learn. Build. Transform.',
    'DiDev, by Mailiana-DiDev LTD, develops practical digital talent and helps organizations put technology, data and AI to work.',
  )

  return (
    <>
      <HeroSlider onPlayFilm={openFilm} />

      <section className="relative z-20 -mt-16 pb-4">
        <Container>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex min-h-[168px] flex-col items-center px-4 py-6 text-center shadow-[0_18px_40px_rgba(17,24,53,0.12)]',
                  index === 1 ? '-mt-3 bg-yellow text-navy lg:-mt-6' : 'bg-white text-navy',
                )}
              >
                <span className={cn('grid size-12 place-items-center rounded-full', index === 1 ? 'bg-navy text-yellow' : 'bg-mist text-navy')}>
                  <MarkIcon name={item.icon as IconName} className="size-5" />
                </span>
                <span className="mt-4 font-display text-lg leading-6">{item.title}</span>
                <span className="mt-2 text-sm leading-5 text-navy/70">{item.text}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="text-center text-[clamp(2rem,4vw,3.2rem)] text-navy">Why DiDev</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Why DiDev">
            {gapTabs.map((label, index) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={gap === index}
                onClick={() => setGap(index)}
                className={cn(
                  'rounded-full border px-5 py-2 text-sm font-semibold',
                  gap === index ? 'border-navy bg-navy text-white' : 'border-line bg-white text-navy',
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-h-[320px] bg-mist">
              <div className="absolute top-8 left-8 h-48 w-[70%] bg-navy" />
              <div className="absolute right-8 bottom-8 h-40 w-[55%] bg-white shadow-[0_20px_50px_rgba(17,24,53,0.15)]">
                <img src="/brand/logo-icon.png" alt="" className="h-full w-full object-contain p-6" />
              </div>
              <div className="absolute bottom-16 left-16 h-24 w-40 bg-yellow" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-navy uppercase">{activeGap.number}</p>
              <h3 className="mt-3 text-3xl text-navy">{activeGap.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted">{activeGap.text}</p>
              <p className="mt-4 text-base leading-8 text-muted">
                DiDev joins practical learning with organizational implementation, so people and systems move together.
              </p>
              <div className="mt-6">
                <Button href="/about" variant="navy">About the company</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-[clamp(2.1rem,4vw,3.4rem)] text-navy">A company with a practical difference.</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              DiDev develops people who can show their skill, and helps organizations turn technology, data and AI into work that holds up.
            </p>
            <blockquote className="mt-6 border-l-4 border-yellow pl-5 text-lg leading-8 text-navy">
              “{founderQuote}”
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {divisions.slice(0, 2).map((division, index) => (
              <article key={division.name} className="bg-white shadow-[0_16px_40px_rgba(17,24,53,0.08)]">
                <div className="flex h-40 items-center justify-center bg-mist">
                  <img src={division.logo} alt="" className="h-14 w-auto" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl text-navy">{division.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{division.text}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-line px-5 py-4">
                  <span className="grid size-8 place-items-center rounded-full bg-navy text-xs font-semibold text-yellow">0{index + 1}</span>
                  <Link to={division.href} className="text-sm font-semibold text-navy">Enter</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -right-24 bottom-[-80px] size-[460px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-10 bottom-10 size-[280px] rounded-full border border-white/10" />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="max-w-md">
              <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] text-white">Practical work. Clear standards.</h2>
            </div>
            <ServiceTile service={services[0]} featured />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {services.slice(1).map((service) => (
              <ServiceTile key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

function ServiceTile({
  service,
  featured = false,
}: {
  service: (typeof services)[number]
  featured?: boolean
}) {
  return (
    <article className={cn('border p-6', featured ? 'border-yellow bg-white/10' : 'border-white/15')}>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-yellow uppercase">{service.number}</p>
      <h3 className="mt-4 text-2xl text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{service.text}</p>
    </article>
  )
}
