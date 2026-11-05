import { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { ArrowRight } from 'lucide-react'
import {
  challenges,
  divisions,
  founderQuote,
  highlights,
  offers,
  services,
  servicesLede,
} from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand } from '../components/Chrome'
import { HeroSlider } from '../components/HeroSlider'
import { MarkIcon, type IconName } from '../components/Icons'
import { useFilm } from '../components/FilmContext'
import { cn } from '../lib/cn'
import { usePageMeta } from '../lib/page'
import { WhyVisual } from '../components/WhyVisual'
import { DivisionMedia } from '../components/DivisionMedia'

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
          <Tabs
            value={gap}
            onChange={(_, value: number) => setGap(value)}
            variant="scrollable"
            scrollButtons={false}
            aria-label="Why DiDev"
            slotProps={{ indicator: { sx: { display: 'none' } } }}
            sx={{ mt: 4, '& .MuiTabs-flexContainer': { justifyContent: 'center', gap: 1.5 } }}
          >
            {gapTabs.map((label) => (
              <Tab
                key={label}
                label={label}
                disableRipple
                sx={{
                  minHeight: 40,
                  px: 2.5,
                  py: 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'primary.main',
                  bgcolor: '#fff',
                  '&.Mui-selected': { color: '#fff', bgcolor: 'primary.main', borderColor: 'primary.main' },
                }}
              />
            ))}
          </Tabs>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <WhyVisual index={gap} />
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
            {divisions.slice(0, 2).map((division) => (
              <article key={division.name} className="bg-white shadow-[0_16px_40px_rgba(17,24,53,0.08)]">
                <DivisionMedia name={division.name} logo={division.logo} />
                <div className="p-5">
                  <h3 className="text-xl text-navy">{division.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{division.text}</p>
                </div>
                <Link
                  to={division.href}
                  className="group flex items-center justify-between border-t border-line px-5 py-4 text-sm font-semibold text-navy"
                >
                  Enter
                  <span className="grid size-9 place-items-center rounded-full border border-navy transition group-hover:bg-navy group-hover:text-yellow">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)] text-navy">Open a programme directly.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            These pages are the addresses a campaign can use. Each one sits inside its school.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {offers.map((offer) => (
              <Link key={offer.slug} to={`/academy/${offer.slug}`} className="group border border-line p-5 transition hover:border-navy">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-navy uppercase">{offer.school}</p>
                <span className="mt-3 flex items-center justify-between gap-3 text-xl text-navy">
                  {offer.title}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">{offer.lede}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white md:py-28 lg:py-32" aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-14">
            <h2
              id="services-heading"
              className="max-w-xl text-[clamp(2.35rem,4.8vw,4.5rem)] leading-[1.02] text-white"
            >
              Practical work.
              <br />
              Clear standards.
            </h2>
            <p className="max-w-xs text-lg leading-8 text-white/85 lg:pb-2">{servicesLede}</p>
          </div>

          <article className="mt-16 border-l-[3px] border-yellow pl-6 md:mt-24 md:pl-10">
            <p className="font-display text-base text-white/85">{services[0].number}</p>
            <h3 className="mt-4 max-w-3xl text-[clamp(2rem,3.2vw,3.15rem)] text-white">{services[0].title}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{services[0].text}</p>
          </article>

          <ul className="mt-14 border-t border-white/15 md:mt-16">
            {services.slice(1).map((service) => (
              <li key={service.title} className="border-b border-white/15 py-7 md:py-8">
                <div className="grid gap-2 lg:grid-cols-[21.5rem_minmax(0,36rem)] lg:items-baseline lg:gap-x-12">
                  <div className="flex items-baseline gap-4">
                    <p className="shrink-0 font-display text-base text-white/80">{service.number}</p>
                    <h3 className="text-xl leading-snug text-white md:text-2xl">{service.title}</h3>
                  </div>
                  <p className="max-w-xl text-base leading-7 text-white/80">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
