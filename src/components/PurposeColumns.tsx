import { Compass, Target, Telescope, type LucideIcon } from 'lucide-react'
import { Container } from './Chrome'

const items: { title: string; text: string; Icon: LucideIcon }[] = [
  {
    title: 'Mission',
    text: 'To unlock human and organizational potential through accessible, practical technology education and digital transformation.',
    Icon: Target,
  },
  {
    title: 'Vision',
    text: 'To become one of Africa’s most trusted technology education and digital transformation companies, developing competitive talent and lasting institutional capability.',
    Icon: Telescope,
  },
  {
    title: 'Purpose',
    text: 'To make digital opportunity more accessible, and to help people and organizations turn potential into progress.',
    Icon: Compass,
  },
]

export function PurposeColumns() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map(({ title, text, Icon }) => (
            <article key={title} className="flex flex-col items-center px-6 py-10 text-center md:px-10 md:py-4">
              <div className="grid size-24 place-items-center rounded-full border-2 border-navy text-navy">
                <Icon className="size-11" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h2 className="mt-8 text-3xl text-navy">{title}</h2>
              <div className="mt-5 flex w-24 items-center gap-2" aria-hidden="true">
                <span className="h-px flex-1 bg-navy/25" />
                <span className="size-1.5 rounded-full bg-yellow" />
                <span className="h-px flex-1 bg-navy/25" />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}