import { useEffect, useRef, useState, type IframeHTMLAttributes, type ImgHTMLAttributes, type ReactNode } from 'react'
import Skeleton from '@mui/material/Skeleton'

/** Joins class names, skipping empty values (local copy so this file has no other imports). */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

type Tone = 'light' | 'dark'

/** Shimmer colours: `dark` is for skeletons sitting on navy backgrounds. */
const toneSx = (tone: Tone) =>
  tone === 'dark'
    ? { bgcolor: 'rgba(255, 255, 255, 0.12)', '&::after': { background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.18), transparent)' } }
    : undefined

type SkeletonImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  tone?: Tone
  /** Set to false to skip the placeholder, e.g. for slides that are not showing yet. */
  skeleton?: boolean
  /** Extra classes for the placeholder, e.g. rounded corners or a z-index. */
  skeletonClassName?: string
  /**
   * When set, the image and its placeholder are wrapped in an inline-block
   * span (these classes are added to it). Use this for images that are not
   * inside a positioned parent, such as logos. Give the image width/height
   * attributes so the space is reserved before it loads.
   */
  wrap?: string
}

/**
 * An <img> that shows a Material UI skeleton until the file has loaded,
 * then fades the skeleton out. Without `wrap`, the skeleton is absolutely
 * positioned, so the image's parent must be positioned (relative/absolute).
 */
export function SkeletonImage({
  tone = 'light',
  skeleton = true,
  skeletonClassName,
  wrap,
  className,
  src,
  onLoad,
  onError,
  ...rest
}: SkeletonImageProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const img = ref.current
    setLoaded(Boolean(img?.complete && img.naturalWidth > 0))
    setGone(false)
  }, [src])

  useEffect(() => {
    if (!loaded) return
    const timer = window.setTimeout(() => setGone(true), 500)
    return () => window.clearTimeout(timer)
  }, [loaded])

  const placeholder =
    skeleton && !gone ? (
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        aria-hidden="true"
        className={cn('pointer-events-none absolute inset-0 transition-opacity duration-500', loaded && 'opacity-0', skeletonClassName)}
        sx={toneSx(tone)}
      />
    ) : null

  const image = (
    <img
      ref={ref}
      src={src}
      className={className}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
      onError={(event) => {
        setLoaded(true)
        onError?.(event)
      }}
      {...rest}
    />
  )

  if (wrap !== undefined) {
    return (
      <span className={cn('relative inline-block align-top', wrap)}>
        {placeholder}
        {image}
      </span>
    )
  }

  return (
    <>
      {placeholder}
      {image}
    </>
  )
}

/** An <iframe> with a skeleton behind it until it has loaded. Parent must be positioned. */
export function SkeletonIframe({ tone = 'dark', ...props }: IframeHTMLAttributes<HTMLIFrameElement> & { tone?: Tone }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {loaded ? null : (
        <Skeleton variant="rectangular" width="100%" height="100%" aria-hidden="true" className="absolute inset-0" sx={toneSx(tone)} />
      )}
      <iframe {...props} onLoad={() => setLoaded(true)} />
    </>
  )
}

function Bone({ className, tone = 'light', width, height = 16 }: { className?: string; tone?: Tone; width?: number | string; height?: number | string }) {
  return <Skeleton variant="rectangular" width={width} height={height} className={className} sx={toneSx(tone)} />
}

/** Same width and padding as Container in Chrome.tsx (not imported, to avoid a circular import). */
function Shell({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
}

/** Route-level fallback shown while a lazy page chunk is loading. Mirrors a typical page: hero, intro, cards. */
export function PageSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-live="polite" className="min-h-[100svh]">
      <span className="sr-only">Loading page</span>

      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-24" aria-hidden="true">
        <Shell>
          <Bone tone="dark" width={220} height={14} />
          <Bone tone="dark" className="mt-10 max-w-full" width={640} height={52} />
          <Bone tone="dark" className="mt-3 max-w-full" width={440} height={52} />
          <Bone tone="dark" className="mt-6 max-w-full" width={560} height={16} />
          <Bone tone="dark" className="mt-2 max-w-full" width={480} height={16} />
          <div className="mt-9 flex flex-wrap gap-3">
            <Bone tone="dark" width={200} height={48} />
            <Bone tone="dark" width={150} height={48} />
          </div>
        </Shell>
      </section>

      <section className="bg-paper py-16 md:py-24" aria-hidden="true">
        <Shell>
          <Bone width={160} height={12} />
          <Bone className="mt-4 max-w-full" width={420} height={40} />
          <Bone className="mt-5 max-w-full" width={560} height={14} />
          <Bone className="mt-2 max-w-full" width={500} height={14} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="bg-white p-3">
                <Bone height={190} />
                <Bone className="mt-5" width="70%" height={24} />
                <Bone className="mt-3" height={12} />
                <Bone className="mt-2" width="85%" height={12} />
                <Bone className="mt-5" width={130} height={40} />
              </div>
            ))}
          </div>
        </Shell>
      </section>
    </div>
  )
}
