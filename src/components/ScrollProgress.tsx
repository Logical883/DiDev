import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Thin bar fixed to the very top of the viewport that fills from left to
 * right as the page is scrolled. Decorative, so hidden from assistive tech.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const root = document.documentElement
      const distance = root.scrollHeight - root.clientHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, root.scrollTop / distance)) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1" aria-hidden="true">
      <div ref={bar} className="h-full origin-left bg-yellow will-change-transform" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}