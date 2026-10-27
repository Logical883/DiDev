import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { slides } from '../content/site'
import { cn } from '../lib/cn'
import { Button } from './Button'
import { MotionField } from './MotionField'

const DURATION = 8500

export function HeroSlider({ onPlayFilm }: { onPlayFilm: () => void }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = slides[index]

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setTimeout(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, DURATION)
    return () => window.clearTimeout(timer)
  }, [index, paused])

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-navy text-white">
      <MotionField className="absolute inset-0 h-full w-full opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,53,0.55)_0%,rgba(17,24,53,0.78)_48%,rgba(17,24,53,0.92)_100%)]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] size-[520px] rounded-full bg-teal/25 blur-3xl" />
      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-5xl flex-col items-center justify-center px-6 pt-36 pb-40 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-yellow uppercase">{slide.kicker}</p>
        <h1 key={slide.id} className="animate-rise mt-5 text-[clamp(2.8rem,6.4vw,5.4rem)] text-white">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{slide.text}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button href={slide.primary.href}>{slide.primary.label}</Button>
          <button type="button" onClick={onPlayFilm} className="inline-flex items-center gap-2 text-sm font-semibold text-white">
            <Play className="size-4" />
            Play brand film
          </button>
        </div>
        <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {slides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              aria-selected={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
              className={cn('h-1.5 rounded-full transition-all', itemIndex === index ? 'w-8 bg-yellow' : 'w-3 bg-white/40')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
