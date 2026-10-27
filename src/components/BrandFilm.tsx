import { useEffect, useState } from 'react'
import { Pause, Play, X } from 'lucide-react'
import { filmChapters } from '../content/site'
import { cn } from '../lib/cn'

function ChapterArt({ id }: { id: string }) {
  if (id === 'build') {
    return (
      <svg viewBox="0 0 360 220" className="h-full w-full" aria-hidden="true">
        <rect x="40" y="120" width="70" height="70" fill="#111835" />
        <rect x="130" y="78" width="80" height="112" fill="#00b894" />
        <rect x="230" y="40" width="90" height="150" fill="#111835" />
        <circle cx="275" cy="28" r="14" fill="#f8d618" />
      </svg>
    )
  }
  if (id === 'transform') {
    return (
      <svg viewBox="0 0 360 220" className="h-full w-full" aria-hidden="true">
        <line x1="70" y1="150" x2="180" y2="70" stroke="#ffffff" strokeOpacity="0.45" />
        <line x1="180" y1="70" x2="290" y2="140" stroke="#ffffff" strokeOpacity="0.45" />
        <line x1="70" y1="150" x2="290" y2="140" stroke="#f8d618" strokeOpacity="0.8" />
        <circle cx="70" cy="150" r="16" fill="#00b894" />
        <circle cx="180" cy="70" r="22" fill="#f8d618" />
        <circle cx="290" cy="140" r="16" fill="#ffffff" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 360 220" className="h-full w-full" aria-hidden="true">
      <path d="M40 150c40-70 80-70 120-8v48H40z" fill="#111835" />
      <path d="M200 142c40-62 80-62 120 8v48H200z" fill="#00b894" />
      <circle cx="180" cy="58" r="26" fill="#f8d618" />
    </svg>
  )
}

export function BrandFilm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [chapter, setChapter] = useState(0)
  const [playing, setPlaying] = useState(true)
  const current = filmChapters[chapter]

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open || !playing) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const timer = window.setTimeout(() => {
      setChapter((value) => (value + 1) % filmChapters.length)
    }, 7000)
    return () => window.clearTimeout(timer)
  }, [open, playing, chapter])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm" role="presentation" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="film-title"
        className="film-stage w-full max-w-5xl bg-navy text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-yellow uppercase">Brand film</p>
          <button type="button" onClick={onClose} className="grid size-10 place-items-center border border-white/20" aria-label="Close film">
            <X className="size-4" />
          </button>
        </div>
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[240px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,184,148,0.35),transparent_45%),linear-gradient(160deg,#111835,#1a2748)] p-8">
            <ChapterArt key={current.id} id={current.id} />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 md:px-10">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-yellow uppercase">{current.kicker}</p>
            <h2 id="film-title" className="mt-3 text-5xl text-white">{current.title}</h2>
            <p className="mt-5 text-base leading-7 text-white/75">{current.text}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-t border-white/10 px-5 py-4 md:px-7">
          <button
            type="button"
            className="grid size-10 place-items-center bg-yellow text-navy"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? 'Pause film' : 'Play film'}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          <div className="grid flex-1 grid-cols-3 gap-2">
            {filmChapters.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setChapter(index)
                  setPlaying(true)
                }}
                className="text-left"
              >
                <span className="block h-0.5 overflow-hidden bg-white/15">
                  <span
                    className={cn(
                      'block h-full origin-left bg-yellow',
                      index < chapter && 'w-full',
                      index === chapter && 'w-full',
                      index === chapter && playing && 'progress-bar',
                      index > chapter && 'w-0',
                    )}
                  />
                </span>
                <span className="mt-2 block text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
