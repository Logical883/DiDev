import { cn } from '../lib/cn'

/** Two photos per tab: [large rectangle, small rectangle]. */
const pairs: [string, string][] = [
  ['/brand/IMG_6273.jpeg', '/brand/IMG_3316.jpg'],
  ['/brand/FO8A9940.jpeg', '/brand/9H7A2782.jpg'],
  ['/brand/IMG_7023.jpeg', '/brand/9H7A2697.jpg'],
]

function Fade({ sources, active, slot }: { sources: string[]; active: number; slot: 'large' | 'small' }) {
  return (
    <>
      {sources.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
            slot === 'large' ? 'object-[50%_25%]' : 'object-[50%_20%]',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </>
  )
}

export function WhyVisual({ index }: { index: number }) {
  return (
    <div className="relative min-h-[320px] bg-mist">
      <div className="absolute top-8 left-8 h-48 w-[70%] overflow-hidden bg-navy">
        <Fade sources={pairs.map((pair) => pair[0])} active={index} slot="large" />
      </div>
      <div className="absolute right-8 bottom-8 h-28 w-[36%] bg-white shadow-[0_20px_50px_rgba(17,24,53,0.15)]">
        <img src="/brand/logo-icon.png" alt="" className="h-full w-full object-contain p-4" />
      </div>
      <div className="absolute bottom-16 left-16 h-24 w-40 overflow-hidden border-4 border-yellow bg-yellow">
        <Fade sources={pairs.map((pair) => pair[1])} active={index} slot="small" />
      </div>
    </div>
  )
}