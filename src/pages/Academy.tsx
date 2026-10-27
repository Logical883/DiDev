import { learnerAudiences, programmes } from '../content/site'
import { Button } from '../components/Button'
import { Container, CtaBand, Eyebrow, PageHero } from '../components/Chrome'
import { usePageMeta } from '../lib/page'

export function AcademyPage() {
  usePageMeta(
    'DiDev Academy — Learn. Build. Transform.',
    'Project-based data and digital learning from DiDev Academy, continuing the work of The Digital College.',
  )

  return (
    <>
      <PageHero
        eyebrow="DiDev Academy"
        title="Build skills you can demonstrate."
        lede="Guided practice in data and digital work, with projects, feedback and a portfolio. The Digital College continues here."
      />

      <section className="border-b border-line bg-white">
        <Container className="grid gap-8 py-10 md:grid-cols-3">
          {['Practice before theory', 'Feedback on real work', 'A portfolio you can explain'].map((item, index) => (
            <p key={item} className="flex items-center gap-4 text-sm font-semibold text-navy">
              <span className="font-display text-2xl">0{index + 1}</span>
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <img src="/brand/logo-academy.png" alt="DiDev Academy" className="h-20 w-auto" />
            <h2 className="mt-8 text-[clamp(2rem,4vw,3.3rem)] text-navy">Learning that has to survive contact with the work.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Academy pathways are built around tasks: cleaning a dataset, writing a query, explaining a dashboard, or using an AI tool inside a rule. Theory is there to make the task clearer.
            </p>
            <p>
              Programmes are for students, career changers, working professionals and institutional cohorts. Length, price and the exact syllabus are confirmed for each intake. This page describes the design, not a fixed catalogue of dates.
            </p>
            <Button href="/contact?topic=academy">Enquire about a pathway</Button>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <Container>
          <Eyebrow>Pathways</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">Where people can begin.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article key={programme.title} className="flex flex-col bg-white p-7">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-navy uppercase">{programme.number}</p>
                <h3 className="mt-4 text-2xl text-navy">{programme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{programme.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {programme.tags.map((tag) => (
                    <span key={tag} className="border border-line px-2.5 py-1 text-xs font-semibold text-navy">{tag}</span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  {programme.outputs.map((output) => (
                    <li key={output} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 bg-yellow" />
                      {output}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Who it is for</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">Different starting points. The same standard of proof.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {learnerAudiences.map((audience, index) => (
              <article key={audience.title} className="border border-line bg-white p-7">
                <p className="font-display text-3xl text-navy">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-navy">{audience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{audience.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-muted">
            DiDev does not promise employment, a salary or instant mastery. A pathway provides instruction, practice, feedback and a way to judge progress. The learner’s effort, and the context they return to, still matter.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Academy"
        title="Ask about the next suitable pathway."
        text="Tell us who the learners are, what they need to be able to do, and when you want to begin."
        href="/contact?topic=academy"
        label="Enquire about learning"
      />
    </>
  )
}
