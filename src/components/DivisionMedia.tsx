import { SkeletonImage } from './Skeletons'

/** Photo shown at the top of each division card on the home page. */
const photos: Record<string, { src: string; position: string }> = {
    'DiDev Academy': { src: '/brand/9H7A2697.jpg', position: '50% 25%' },
    'DiDev Consulting': { src: '/brand/IMG_7023.jpeg', position: '50% 25%' },
    'DiDev Network': { src: '/brand/gemini-edited-1765231859644.png', position: '50% 25%' },
  }
  
  export function DivisionMedia({ name, logo }: { name: string; logo: string }) {
    const photo = photos[name]
  
    if (!photo) {
      return (
        <div className="flex h-40 items-center justify-center bg-mist">
          <SkeletonImage wrap="" src={logo} alt="" className="h-14 w-auto" />
        </div>
      )
    }
  
    return (
      <div className="relative h-52 overflow-hidden bg-mist">
        <SkeletonImage
          src={photo.src}
          alt=""
          loading="lazy"
          decoding="async"
          style={{ objectPosition: photo.position }}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }