import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock, X } from 'lucide-react'
import { hundredDaysPlaylistId, programmePages } from '../content/site'
import { Button } from './Button'

export type ProgrammeCard = {
  slug: string
  title: string
  text: string
  price: string
  format: string
  image: string
  imageAlt: string
}

/**
 * Programme details in a modal, so visitors stay on the Academy page.
 * 100 Days of Data plays its YouTube playlist inline; paid programmes
 * link out to their purchase page in a new tab.
 */
export function ProgrammeModal({ programme, onClose }: { programme: ProgrammeCard | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!programme) return
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
  }, [programme, onClose])

  if (!programme) return null

  const page = programmePages[programme.slug]
  const isPlaylist = programme.slug === '100-days-of-data'
  const playlistSrc = `https://www.youtube-nocookie.com/embed/videoseries?${new URLSearchParams({
    list: hundredDaysPlaylistId,
    rel: '0',
    playsinline: '1',
  })}`

  return (
    <div
      className="film-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-black/25 p-3 backdrop-blur-xl backdrop-saturate-150 sm:p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="programme-title"
        className="film-stage relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close programme details"
          className="absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-navy shadow-md backdrop-blur transition hover:bg-white"
        >
          <X className="size-4" />
        </button>

        <div className="overflow-y-auto">
          <div className="p-3 pb-0">
            {isPlaylist ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <iframe
                  src={playlistSrc}
                  title="100 Days of Data playlist"
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={programme.image}
                alt={programme.imageAlt}
                className="aspect-[16/8] w-full rounded-2xl object-cover object-[50%_30%]"
              />
            )}
          </div>

          <div className="px-6 pt-6 pb-7 md:px-9 md:pb-9">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">{page?.school}</p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 id="programme-title" className="text-[clamp(1.7rem,3.5vw,2.3rem)] leading-tight text-navy">
                {programme.title}
              </h2>
              <p className="font-display text-2xl font-bold text-navy">{programme.price}</p>
            </div>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4" aria-hidden="true" />
              {programme.format}
            </p>

            {page ? (
              <>
                <p className="mt-5 text-base leading-7 text-ink/80">{page.summary}</p>

                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold text-navy">What you will do</h3>
                    <ul className="mt-3 space-y-2.5">
                      {page.learn.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-muted">
                          <Check className="mt-1 size-4 shrink-0 text-black" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Who it is for</h3>
                    <ul className="mt-3 space-y-2.5">
                      {page.forWhom.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-muted">
                          <Check className="mt-1 size-4 shrink-0 text-black" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
                  <Button href={page.cta.href} className="rounded-xl">
                    {isPlaylist ? 'Open on YouTube' : page.cta.label}
                  </Button>
                  <Link
                    to="/contact?topic=academy"
                    onClick={onClose}
                    className="text-center text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy sm:ml-2"
                  >
                    Ask a question first
                  </Link>
                </div>
                <p className="mt-4 text-xs leading-6 text-muted">{page.note}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
