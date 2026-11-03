import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { slides } from '../content/site'
import { cn } from '../lib/cn'
import { Button } from './Button'

const DURATION = 8500

/** Hero photos, shown in order. Adjust `position` if a crop cuts someone off. */
const photos = [
  { src: '/brand/IMG_6273.jpeg', position: '62% 30%' },
  { src: '/brand/IMG_3316.jpg', position: '62% 30%' },
  { src: '/brand/FO8A9940.jpeg', position: '62% 30%' },
]

const motion = `
@keyframes hero-drift {
  from { transform: scale(1.02) translate3d(0, 0, 0); }
  to { transform: scale(1.1) translate3d(-1.5%, -1%, 0); }
}
.hero-photo { animation: hero-drift 16s ease-in-out infinite alternate; }
@media (prefers-reduced-motion: reduce) { .hero-photo { animation: none; } }
`

export function HeroSlider({ onPlayFilm }: { onPlayFilm: () => void }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const slide = slides[index]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (paused) return
    if (reduceMotion) return
    const timer = window.setTimeout(() => {
      setIndex((value) => (value + 1) % slides.length)
    }, DURATION)
    return () => window.clearTimeout(timer)
  }, [index, paused, reduceMotion])

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <style>{motion}</style>
        {photos.map((photo, photoIndex) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            aria-hidden="true"
            decoding="async"
            style={{ objectPosition: photo.position }}
            className={cn(
              'hero-photo absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out',
              photoIndex === index % photos.length ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,53,0.86)_0%,rgba(17,24,53,0.62)_46%,rgba(17,24,53,0.38)_100%)] lg:bg-[linear-gradient(90deg,rgba(17,24,53,0.94)_0%,rgba(17,24,53,0.8)_32%,rgba(17,24,53,0.28)_58%,rgba(17,24,53,0.12)_100%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col items-center justify-start px-5 pt-32 pb-44 text-center md:px-8 md:pt-28 lg:items-start lg:justify-center lg:text-left">
        <div className="max-w-lg">
        <h1 key={slide.id} className="animate-rise text-[clamp(2.5rem,4.4vw,4.15rem)] text-white">
          {slide.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/85">{slide.text}</p>
        <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
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
              className={cn('h-1.5 rounded-full transition-all', itemIndex === index ? 'w-8 bg-yellow' : 'w-3 bg-white/50')}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}