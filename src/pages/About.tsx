import { conversations, differentiators, founderQuote, profile, story, values } from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand, Eyebrow, PageHero } from '../components/Chrome'
import { PurposeColumns } from '../components/PurposeColumns'
import { TeamCarousel } from '../components/TeamCarousel'
import { usePageMeta } from '../lib/page'

export function AboutPage() {
  usePageMeta(
    'About DiDev — Learn. Build. Transform.',
    'DiDev is an African-founded technology education and digital transformation company operating under Mailiana-DiDev LTD.',
  )

  return (
    <>
      <PageHero
        title="Practical skills. Smarter systems. Meaningful impact."
        lede="DiDev is an African-founded company for people who need digital capability they can use, and for organizations that need technology to change the work."
        actions={
          <>
            <Button href="#team">Meet the team</Button>
            <Button href="/contact" variant="ghost-light">Contact us</Button>
          </>
        }
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Company profile</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">One promise for learners and organizations.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{profile}</p>
            <p>{story}</p>
          </div>
        </Container>
      </section>

      <PurposeColumns />

      <section className="py-20 md:py-28" id="team">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-navy">
              <span className="size-1.5 rounded-full bg-yellow" aria-hidden="true" />
              Team
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.3rem)] text-navy">The people behind DiDev</h2>
            <p className="mt-5 leading-8 text-muted">
              The company grew from 100 Days of Data, live Data Foundations sessions and The Digital College, alongside experience of how slowly technology is absorbed inside real operations. DiDev is the broader house around that work.
            </p>
          </div>

          <TeamCarousel />

          <figure className="mx-auto mt-16 max-w-3xl text-center">
            <blockquote className="text-xl leading-8 text-navy">
              “{founderQuote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted">Miss Mailiana, Founder &amp; CEO</figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <Container>
          <Eyebrow>Operating values</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">How the work is judged.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="bg-white p-6">
                <p className="font-display text-sm text-navy">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>What is distinct</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">Five standards, not slogans.</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {differentiators.map((item, index) => (
              <article key={item.title} className="grid gap-3 py-6 md:grid-cols-[180px_1fr] md:items-baseline">
                <p className="text-sm font-semibold tracking-[0.14em] text-navy uppercase">0{index + 1}</p>
                <div>
                  <h3 className="text-2xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28" id="speaking">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>Speaking</Eyebrow>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">Conversations with a practical point.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Keynotes, panels, workshops and facilitated discussions led by Miss Mailiana. The aim is a clearer decision, not a performance.
              </p>
              <div className="mt-6">
                <Button href="/contact?topic=speaking" variant="navy">Request a speaking conversation</Button>
              </div>
            </div>
            <div className="grid gap-4">
              {conversations.map((item) => (
                <article key={item.title} className="border border-line p-6">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-navy uppercase">{item.kicker}</p>
                  <h3 className="mt-2 text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <Container className="max-w-3xl">
          <Eyebrow>The Digital College</Eyebrow>
          <h2 className="mt-4 text-3xl text-navy">Now part of the DiDev journey.</h2>
          <p className="mt-4 leading-8 text-muted">
            Learners already inside The Digital College keep the teaching standard, project-based method and commitments they were given. DiDev Academy is the public name of that educational work as the company grows. What changes, and what stays, is explained directly to the people it affects.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Work with DiDev"
        title="Choose the path that matches the problem."
        text="Academy for demonstrated skill. Consulting for organizational change. Network for partnership and community."
      />
    </>
  )
}