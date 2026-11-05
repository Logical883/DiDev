import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import { X } from 'lucide-react'
import { brandFilmYouTubeId } from '../content/site'
import { SkeletonIframe } from './Skeletons'

/**
 * Brand film window, built on Material UI's Dialog (focus trap, Escape to
 * close and scroll lock come with it). Plays the YouTube video inline
 * (privacy-enhanced youtube-nocookie domain) so visitors never leave the site.
 */
export function BrandFilm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  const src = `https://www.youtube-nocookie.com/embed/${brandFilmYouTubeId}?${params}`

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      aria-label="DiDev brand film"
      slotProps={{
        backdrop: { sx: { bgcolor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(16px) saturate(1.5)' } },
        paper: {
          sx: { m: 2, width: 'calc(100% - 32px)', borderRadius: '16px', bgcolor: '#000', color: '#fff', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)', outline: '1px solid rgba(255, 255, 255, 0.1)' },
        },
      }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-yellow uppercase">Brand film</p>
        <IconButton
          onClick={onClose}
          aria-label="Close film"
          sx={{ width: 40, height: 40, borderRadius: 0, border: '1px solid rgba(255, 255, 255, 0.2)', color: '#fff', '&:hover': { borderColor: '#f8d618', color: '#f8d618', bgcolor: 'transparent' } }}
        >
          <X className="size-4" />
        </IconButton>
      </div>
      <div className="relative aspect-video w-full bg-black">
        <SkeletonIframe
          src={src}
          title="DiDev brand film"
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Dialog>
  )
}
