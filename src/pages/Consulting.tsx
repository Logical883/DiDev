import { caseBlueprint, method, packages, pillars, services } from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand, Eyebrow, PageHero } from '../components/Chrome'
import { cn } from '../lib/cn'
import { usePageMeta } from '../lib/page'

export function ConsultingPage() {
  usePageMeta(
    'DiDev Consulting — Learn. Build. Transform.',
    'Digital transformation, data systems, responsible AI adoption and workforce capability for organizations.',
  )

  return (
    <>
      <PageHero
        eyebrow="DiDev Consulting"
        title="Make technology work for the organization."
        lede="Strategy, data, responsible AI and workforce capability. Scoped around the work that needs to change, then taught so people can carry it."
      />

      <section className="bg-white py-16">
        <Container className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <img src="/brand/logo-consulting.png" alt="DiDev Consulting" className="h-16 w-auto" />
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Organizations come with disconnected tools, reports nobody trusts, or training that never reaches the job. Consulting starts with that problem, not with a platform.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Eyebrow>Service pillars</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">What we examine, deliver and review.</h2>
          <div className="mt-10 hidden overflow-hidden border border-line md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  {['Pillar', 'What we examine', 'What you receive', 'What we agree to review'].map((heading) => (
                    <th key={heading} className="px-5 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pillars.map((pillar) => (
                  <tr key={pillar.name} className="border-t border-line bg-white align-top">
                    <th className="px-5 py-5 font-display text-base font-semibold text-navy">{pillar.name}</th>
                    <td className="px-5 py-5 text-muted">{pillar.examine}</td>
                    <td className="px-5 py-5 text-muted">{pillar.deliver}</td>
                    <td className="px-5 py-5 text-muted">{pillar.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:hidden">
            {pillars.map((pillar) => (
              <article key={pillar.name} className="border border-line bg-white p-5">
                <h3 className="text-xl text-navy">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted"><span className="font-semibold text-navy">Examine. </span>{pillar.examine}</p>
                <p className="mt-2 text-sm leading-6 text-muted"><span className="font-semibold text-navy">Receive. </span>{pillar.deliver}</p>
                <p className="mt-2 text-sm leading-6 text-muted"><span className="font-semibold text-navy">Review. </span>{pillar.review}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-7">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-navy uppercase">{service.number}</p>
                <h3 className="mt-3 text-2xl text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-line px-2.5 py-1 text-xs font-semibold text-navy">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Engagement models</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">Formats, not a price list.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Scope, duration and commercial terms are set after discovery. These models describe the shape of the work.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.title} className={cn('flex flex-col p-7', item.featured ? 'bg-navy text-white' : 'border border-line bg-white')}>
                <p className={cn('text-[11px] font-semibold tracking-[0.16em] uppercase', item.featured ? 'text-yellow' : 'text-navy')}>{item.label}</p>
                <h3 className="mt-4 text-2xl">{item.title}</h3>
                <p className={cn('mt-3 text-sm leading-7', item.featured ? 'text-white/75' : 'text-muted')}>{item.text}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 bg-yellow" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={item.href} variant={item.featured ? 'yellow' : 'ghost'}>{item.action}</Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <Eyebrow>Client experience</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">Four movements.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {method.map((step) => (
              <article key={step.number}>
                <p className="font-display text-4xl text-navy">{step.number}</p>
                <h3 className="mt-4 text-xl text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Evidence</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] text-navy">Case studies have to earn their claims.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              DiDev does not publish client logos, testimonials or performance figures until the source, the method and permission are on record. The structure below is the standard a published engagement must meet.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              We also do not promise a guaranteed return, a fixed productivity gain from AI, or results that depend on decisions outside the agreed scope.
            </p>
          </div>
          <div className="border-t border-line">
            {caseBlueprint.map((item, index) => (
              <article key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5">
                <p className="text-sm font-semibold text-navy">0{index + 1}</p>
                <div>
                  <h3 className="text-lg text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Consulting"
        title="Describe the business problem first."
        text="We will tell you if it is a fit, and what a useful first conversation would cover."
        href="/contact?topic=transformation"
        label="Discuss a project"
      />
    </>
  )
}
