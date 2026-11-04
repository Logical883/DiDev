import { useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import { instagram } from '../content/site'
import { cn } from '../lib/cn'

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  )
}

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

type Social = { label: string; href: string; kind: 'linkedin' | 'instagram' | 'website' }

type Member = {
  name: string
  role: string
  photo: string
  position: string
  socials: Social[]
}

/**
 * Edit the team here. Add `socials` to show icons on a member's card.
 * The third member is a placeholder: replace the name and photo when ready.
 */
const team: Member[] = [
  {
    name: 'Agyapong Albert Yeboah',
    role: 'Head of Technology & Digital Operations',
    photo: '/brand/Albert_Pic.jpg',
    position: '50% 20%',
    socials: [
      { label: 'Agyapong Albert Yeboah on LinkedIn', href: 'https://www.linkedin.com/in/agyapong-albert-yeboah/', kind: 'linkedin' },
      { label: 'Agyapong Albert Yeboah portfolio', href: 'https://albertportfolio-rho.vercel.app/', kind: 'website' },
    ],
  },
  {
    name: 'Miss Mailiana',
    role: 'Founder & CEO',
    photo: '/brand/gemini-edited-1765227977845.png',
    position: '50% 20%',
    socials: [
      { label: 'Miss Mailiana on LinkedIn', href: 'https://www.linkedin.com/in/francisca-mailiana-zonky/', kind: 'linkedin' },
      { label: 'Miss Mailiana on Instagram', href: instagram, kind: 'instagram' },
    ],
  },
  {
    name: 'Name to be announced',
    role: 'Programs & Events Manager',
    photo: '/brand/team-placeholder.svg',
    position: '50% 50%',
    socials: [],
  },
]

/** Shortest signed distance from the active member, e.g. -1, 0 or 1. */
function offsetFrom(index: number, active: number, count: number) {
  let offset = (index - active) % count
  if (offset > count / 2) offset -= count
  if (offset < -count / 2) offset += count
  return offset
}

/**
 * Cover-flow style placement: the active card faces forward, neighbours
 * turn in toward it. Changing `active` lets CSS rotate every card into
 * its new place.
 */
function cardStyle(offset: number): CSSProperties {
  const distance = Math.abs(offset)
  return {
    transform: `translateX(calc(-50% + ${offset * 98}%)) translateZ(${distance * -140}px) rotateY(${offset * -32}deg) scale(${distance === 0 ? 1 : 0.8})`,
    zIndex: 10 - distance,
    opacity: distance > 1 ? 0 : 1,
  }
}

const ease = 'duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'

export function TeamCarousel() {
  const [active, setActive] = useState(1)
  const count = team.length
  const go = (step: number) => setActive((value) => (value + step + count) % count)

  return (
    <div className="mt-14">
      <div className="relative mx-auto max-w-4xl [perspective:1400px]">
        {/* Invisible spacer sets the stage height from the active card's size. */}
        <div aria-hidden="true" className="invisible mx-auto w-[36%]">
          <div className="aspect-[3/4]" />
          <p className="mt-4 font-display text-lg md:text-xl">&nbsp;</p>
          <p className="mt-1 text-sm">&nbsp;</p>
          <p className="text-sm">&nbsp;</p>
        </div>

        {team.map((member, memberIndex) => {
          const offset = offsetFrom(memberIndex, active, count)
          const isActive = offset === 0

          return (
            <div
              key={member.name}
              aria-hidden={Math.abs(offset) > 1 || undefined}
              style={cardStyle(offset)}
              className={cn(
                'absolute top-0 left-1/2 w-[36%] origin-bottom text-center transition-[transform,opacity] will-change-transform [transform-style:preserve-3d]',
                ease,
              )}
            >
              <div className="relative">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: member.position }}
                  className={cn(
                    'aspect-[3/4] w-full rounded-[22px] object-cover shadow-[0_24px_60px_rgba(17,24,53,0.18)] transition-[filter] md:rounded-[32px]',
                    ease,
                    isActive ? 'grayscale-0' : 'grayscale',
                  )}
                />
                {isActive ? null : (
                  <button
                    type="button"
                    onClick={() => setActive(memberIndex)}
                    aria-label={`Show ${member.name}`}
                    className="absolute inset-0 rounded-[22px] bg-white/15 transition hover:bg-transparent md:rounded-[32px]"
                  />
                )}
                {member.socials.length > 0 ? (
                  <ul
                    className={cn(
                      'absolute inset-x-0 bottom-3 flex justify-center gap-2 transition-opacity md:bottom-4',
                      ease,
                      isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
                    )}
                  >
                    {member.socials.map((social) => (
                      <li key={social.href}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          tabIndex={isActive ? undefined : -1}
                          className="grid size-8 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition hover:bg-yellow hover:text-navy md:size-9"
                        >
                          {social.kind === 'linkedin' ? (
                            <LinkedInMark className="size-4" />
                          ) : social.kind === 'website' ? (
                            <Globe className="size-4" aria-hidden="true" />
                          ) : (
                            <InstagramMark className="size-4" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <p
                className={cn(
                  'mt-4 font-display text-lg leading-tight transition-colors md:text-xl',
                  ease,
                  isActive ? 'font-bold text-navy' : 'text-muted',
                )}
              >
                {member.name}
              </p>
              <p
                className={cn(
                  'mt-1 text-sm text-muted transition-[opacity,transform]',
                  ease,
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
                )}
              >
                {member.role}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl items-center gap-6">
        <div className="relative h-px flex-1 bg-navy/15" aria-hidden="true">
          <div
            className="absolute top-1/2 left-0 h-[3px] -translate-y-1/2 bg-yellow transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${((active + 1) / count) * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous team member"
            className="grid size-10 place-items-center rounded-full bg-navy text-white transition hover:bg-yellow hover:text-navy"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next team member"
            className="grid size-10 place-items-center rounded-full bg-navy text-white transition hover:bg-yellow hover:text-navy"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}