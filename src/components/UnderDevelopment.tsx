import type { ReactNode } from 'react'
import { pagesInDevelopment } from '../content/site'
import { Button } from './Button'
import { Container } from './Chrome'

export function UnderDevelopment() {
  return (
    <section className="flex min-h-[70svh] items-center bg-paper pt-28 pb-20">
      <Container>
        <div className="max-w-xl">
          <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] text-navy">This page is under development.</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            This part of DiDev is still being shaped. The home page is available.
          </p>
          <div className="mt-8">
            <Button href="/">Back to home</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function gatePage(page: ReactNode) {
  return pagesInDevelopment ? <UnderDevelopment /> : page
}
