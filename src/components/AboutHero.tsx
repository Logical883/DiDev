import { Link } from 'react-router-dom'
import { company } from '../content/site'
import { Button } from './Button'
import { Container } from './Chrome'

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src="/hero-poster.jpg"
        alt=""
        width={1280}
        height={720}
        className="absolute inset-0 -z-20 size-full object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-navy/55" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/55 to-transparent" aria-hidden="true" />

      <Container className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold tracking-[0.06em] text-white/80 uppercase">
          <Link to="/" className="hover:text-yellow">Home</Link>
          <span className="mx-2 text-white/50" aria-hidden="true">/</span>
          <span aria-current="page" className="text-white/60">About</span>
        </nav>

        <p className="mt-10 flex items-center gap-4 text-[12px] font-bold tracking-[0.2em] text-white uppercase">
          <span className="h-[3px] w-12 bg-yellow" aria-hidden="true" />
          {company.legal}
        </p>

        <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] text-white">
          Practical skills. Smarter systems. Meaningful impact.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          DiDev is an African-founded company for people who need digital capability they can use, and for organizations that need technology to change the work.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#founder">Meet the founder</Button>
          <Button href="/contact" variant="ghost-light">Contact us</Button>
        </div>

        <div className="mt-12 w-fit border border-yellow/40 bg-gradient-to-br from-navy to-navy-soft px-7 py-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] lg:absolute lg:right-8 lg:bottom-16 lg:mt-0">
          <p className="font-display text-3xl font-bold text-white">Learn. Build. Transform.</p>
          <p className="mt-3 text-[12px] font-bold tracking-[0.14em] text-yellow uppercase">
            African-founded, based in {company.location}
          </p>
        </div>
      </Container>
    </section>
  )
}