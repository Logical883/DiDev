import { Link } from 'react-router-dom'
import { Container, PageHero } from '../components/Chrome'
import { Button } from '../components/Button'
import { usePageMeta } from '../lib/page'

export function NotFoundPage() {
  usePageMeta('Page not found — DiDev', 'This page is not part of the DiDev website.')
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page is not on the map."
        lede="The address may have changed. The company, the Academy, Consulting and the Network are still here."
      />
      <section className="py-16">
        <Container className="flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Link to="/contact" className="inline-flex items-center px-4 text-sm font-semibold text-navy">Contact DiDev</Link>
        </Container>
      </section>
    </>
  )
}
