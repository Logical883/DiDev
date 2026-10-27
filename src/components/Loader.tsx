import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

export function Loader() {
  const [phase, setPhase] = useState<'run' | 'leave' | 'done'>(() => {
    try {
      return sessionStorage.getItem('didev-intro') === '1' ? 'done' : 'run'
    } catch {
      return 'run'
    }
  })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (phase !== 'run') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduce ? 250 : 1600
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / duration)
      setProgress(Math.round(next * 100))
      if (next < 1) {
        frame = requestAnimationFrame(tick)
        return
      }
      try {
        sessionStorage.setItem('didev-intro', '1')
      } catch {
        /* storage may be blocked */
      }
      setPhase('leave')
      window.setTimeout(() => setPhase('done'), reduce ? 0 : 450)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [phase])

  useEffect(() => {
    if (phase === 'done') return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[90] flex items-center justify-center bg-paper text-navy transition-opacity duration-500',
        phase === 'leave' && 'opacity-0',
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading DiDev"
    >
      <div className="flex w-[min(92vw,420px)] flex-col items-center">
        <img
          src="/brand/logo-icon.png"
          alt=""
          className="h-28 w-auto"
        />
        <p className="mt-8 font-display text-3xl tracking-[-0.04em]">DiDev</p>
        <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-muted uppercase">
          Learn. Build. Transform.
        </p>
        <div className="mt-10 h-px w-full bg-line">
          <div className="loader-line h-px bg-yellow" />
        </div>
        <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-yellow uppercase">
          {progress}%
        </p>
      </div>
    </div>
  )
}
