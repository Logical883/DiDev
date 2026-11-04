import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { brandFilmYouTubeId } from '../content/site'

/**
 * Brand film window. Plays the YouTube video inline (privacy-enhanced
 * youtube-nocookie domain) so visitors never leave the site.
 */
export function BrandFilm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  if (!open) return null

  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  const src = `https://www.youtube-nocookie.com/embed/${brandFilmYouTubeId}?${params}`

  return (
    <div
      className="film-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="DiDev brand film"
        className="film-stage w-full max-w-5xl bg-navy text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-yellow uppercase">Brand film</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center border border-white/20 transition hover:border-yellow hover:text-yellow"
            aria-label="Close film"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={src}
            title="DiDev brand film"
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
