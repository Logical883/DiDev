import { networkActivities, networkProgramme } from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand, Eyebrow, PageHero } from '../components/Chrome'
import { usePageMeta } from '../lib/page'

const principles = [
  { title: 'A shared outcome', text: 'A partnership needs a reason: a cohort, an event, a community programme or a piece of research with a defined audience.' },
  { title: 'Clear roles', text: 'Who teaches, who hosts, who holds the data and who may use the names is agreed before anything is public.' },
  { title: 'No implied endorsements', text: 'Partner and client marks appear only with written permission. A conversation is not a logo on the website.' },
]

export function NetworkPage() {
  usePageMeta(
    'DiDev Network — Learn. Build. Transform.',
    'Events, peer learning and partnerships from DiDev Network, connecting people, institutions and digital opportunity.',
  )

  return (
    <>
      <PageHero
        eyebrow="DiDev Network"
        title="Progress is stronger together."
        lede="Events, peer learning and partnerships for people and institutions who want digital capability to travel further than a single classroom."
        actions={
          <>
            <Button href="/contact?topic=network">Propose a partnership</Button>
            <Button href="#calendar" variant="ghost-light">See the 2027 calendar</Button>
          </>
        }
      />

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <img src="/brand/logo-network.png" alt="DiDev Network" className="h-16 w-auto" />
            <h2 className="mt-8 text-[clamp(2rem,4vw,3.3rem)] text-navy">A network that grows with the work.</h2>
          </div>
          <div className="space-y-5 leading-8 text-muted">
            <p>
              DiDev Network is the community expression of the company: rooms, relationships and access. It is not a membership product with a published headcount, and it is not a list of logos.
            </p>
            <p>
              It is where learners, practitioners, universities, companies and community organizations can meet around practical digital work. The programme expands as the capacity to host it well expands.
            </p>
            <Button href="/contact?topic=network" variant="navy">Propose a partnership</Button>
          </div>
        </Container>
      </section>

      <section id="calendar" className="bg-navy py-20 text-white md:py-28">
        <Container>
          <Eyebrow light>2027 calendar</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.3rem)] text-white">{networkProgramme.name}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">{networkProgramme.text}</p>

          <ol className="mt-12 divide-y divide-white/15 border-y border-white/15">
            {networkProgramme.sessions.map((session) => (
              <li key={session.date} className="grid gap-3 py-7 md:grid-cols-[minmax(0,17rem)_1fr_auto] md:items-center md:gap-8">
                <div>
                  <p className="font-display text-2xl font-bold text-white">{session.date}</p>
                  <p className="mt-1 text-sm text-white/70">{session.day}</p>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/75">{session.text}</p>
                <span
                  className={
                    session.paid
                      ? 'w-fit bg-yellow px-3 py-1.5 text-xs font-semibold text-navy'
                      : 'w-fit border border-white/35 px-3 py-1.5 text-xs font-semibold text-white'
                  }
                >
                  {session.kind}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {networkProgramme.between.map((item) => (
              <article key={item.title} className="border border-white/15 p-6">
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/70">{networkProgramme.note}</p>
            <Button href="/contact?topic=network">Ask about a session</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <Eyebrow>What happens here</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">Four kinds of activity.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {networkActivities.map((activity, index) => (
              <article key={activity.title} className="border border-line p-7">
                <p className="font-display text-4xl text-navy">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-navy">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{activity.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Partnership standard</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">How a collaboration is allowed to begin.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="bg-navy p-7 text-white">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Network"
        title="If you host people, we should talk."
        text="Universities, companies, NGOs and community programmes can propose a cohort, an event or a longer partnership."
        href="/contact?topic=network"
        label="Start a partnership inquiry"
      />
    </>
  )
}