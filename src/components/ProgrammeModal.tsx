import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import { Check, Clock, X } from 'lucide-react'
import { hundredDaysPlaylistId, programmePages } from '../content/site'
import { Button } from './Button'
import { SkeletonIframe, SkeletonImage } from './Skeletons'

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
 * Programme details in a Material UI Dialog, so visitors stay on the Academy page.
 * 100 Days of Data plays its YouTube playlist inline; paid programmes
 * link out to their purchase page in a new tab.
 */
export function ProgrammeModal({ programme, onClose }: { programme: ProgrammeCard | null; onClose: () => void }) {
  // Keep the last programme so the content stays put while the dialog fades out.
  const [last, setLast] = useState<ProgrammeCard | null>(programme)
  if (programme && programme !== last) setLast(programme)
  const shown = programme ?? last

  const page = shown ? programmePages[shown.slug] : undefined
  const isPlaylist = shown?.slug === '100-days-of-data'
  const playlistSrc = `https://www.youtube-nocookie.com/embed/videoseries?${new URLSearchParams({
    list: hundredDaysPlaylistId,
    rel: '0',
    playsinline: '1',
  })}`

  return (
    <Dialog
      open={Boolean(programme)}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-labelledby="programme-title"
      slotProps={{
        backdrop: { sx: { bgcolor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(16px) saturate(1.5)' } },
        paper: { sx: { m: { xs: 1.5, sm: 2 }, width: { xs: 'calc(100% - 24px)', sm: 'calc(100% - 32px)' }, maxHeight: '92svh', borderRadius: '24px', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)' } },
      }}
    >
      {shown ? (
        <>
          <IconButton
            onClick={onClose}
            aria-label="Close programme details"
            sx={{ position: 'absolute', top: 12, right: 12, zIndex: 10, width: 40, height: 40, bgcolor: 'rgba(255, 255, 255, 0.9)', color: 'primary.main', boxShadow: 3, backdropFilter: 'blur(8px)', '&:hover': { bgcolor: '#fff' } }}
          >
            <X className="size-4" />
          </IconButton>

          <div className="overflow-y-auto">
            <div className="p-3 pb-0">
              {isPlaylist ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                  <SkeletonIframe
                    src={playlistSrc}
                    title="100 Days of Data playlist"
                    className="absolute inset-0 size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-mist">
                  <SkeletonImage
                    src={shown.image}
                    alt={shown.imageAlt}
                    className="aspect-[16/8] w-full object-cover object-[50%_30%]"
                  />
                </div>
              )}
            </div>

            <div className="px-6 pt-6 pb-7 md:px-9 md:pb-9">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">{page?.school}</p>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 id="programme-title" className="text-[clamp(1.7rem,3.5vw,2.3rem)] leading-tight text-navy">
                  {shown.title}
                </h2>
                <p className="font-display text-2xl font-bold text-navy">{shown.price}</p>
              </div>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                <Clock className="size-4" aria-hidden="true" />
                {shown.format}
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
        </>
      ) : null}
    </Dialog>
  )
}
