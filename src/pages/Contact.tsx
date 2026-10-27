import { company } from '../content/site'
import { ContactForm } from '../components/ContactForm'
import { Container, Eyebrow, PageHero } from '../components/Chrome'
import { usePageMeta } from '../lib/page'

const next = [
  { title: 'You describe the need', text: 'Who is involved, what is stuck, and what a useful result would look like.' },
  { title: 'We review the fit', text: 'Academy, consulting, network or speaking. If it is not a fit, we say so.' },
  { title: 'A scoped conversation', text: 'The next step is a discussion or a written view of what an engagement could cover.' },
]

export function ContactPage() {
  usePageMeta(
    'Contact DiDev — Learn. Build. Transform.',
    'Start a conversation with DiDev about learning pathways, consulting, partnerships or speaking.',
  )

  return (
    <>
      <PageHero
        eyebrow="Inquiries"
        title="Tell us what you are working toward."
        lede="Academy pathways, consulting engagements, partnerships and speaking. Share the context and we will respond to what you send."
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 text-4xl text-navy">A clear brief travels further than a long one.</h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              {company.legal} works primarily online, with selected in-person programmes, from {company.location} and with partners across {company.reach}.
            </p>
            <div className="mt-8 space-y-5">
              {next.map((item, index) => (
                <article key={item.title} className="border-l-4 border-yellow pl-4">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-navy uppercase">0{index + 1}</p>
                  <h3 className="mt-1 text-xl text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  )
}
