import { Navigate, useParams } from 'react-router-dom'
import { programmePages } from '../content/site'
import { Button } from '../components/Button'
import { Container, Eyebrow, PageHero } from '../components/Chrome'
import { usePageMeta } from '../lib/page'

export function AcademyProgrammePage() {
  const { slug = '' } = useParams()
  const page = programmePages[slug]

  usePageMeta(
    page ? `${page.title} — DiDev Academy` : 'DiDev Academy',
    page ? page.lede : 'DiDev Academy programmes.',
  )

  if (!page) return <Navigate to="/academy" replace />

  return (
    <>
      <PageHero eyebrow={page.school} title={page.title} lede={page.lede} />

      <section className="border-b border-line bg-white">
        <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-3">
            {page.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold text-muted">{fact.label}</dt>
                <dd className="mt-1 font-display text-lg font-bold text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <Button href={page.cta.href}>{page.cta.label}</Button>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>The programme</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] text-navy">What it is.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">{page.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {page.tags.map((tag) => (
                <span key={tag} className="border border-line px-2.5 py-1 text-xs font-semibold text-navy">{tag}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-7">
            <h3 className="text-2xl text-navy">You will learn to</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              {page.learn.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 bg-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] text-navy">Who it is for</h2>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-navy">
              {page.forWhom.map((item) => (
                <li key={item} className="font-semibold">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy p-8 text-white">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-white">Interested?</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">{page.note}</p>
            <div className="mt-6">
              <Button href={page.cta.href}>{page.cta.label}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}