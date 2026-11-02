import { company, instagram } from '../content/site'

const linkedin = 'https://www.linkedin.com/in/francisca-mailiana-zonky/'

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

const socials = [
  { label: 'Miss Mailiana on LinkedIn', href: linkedin, Icon: LinkedInMark },
  { label: 'Miss Mailiana on Instagram', href: instagram, Icon: InstagramMark },
]

const motion = `
@keyframes founder-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes founder-plate {
  0%, 100% { transform: translate(14px, 14px); }
  50% { transform: translate(26px, 26px); }
}
.founder-float { animation: founder-float 6s ease-in-out infinite; }
.founder-plate { animation: founder-plate 6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .founder-float, .founder-plate { animation: none; }
  .founder-plate { transform: translate(18px, 18px); }
}
`

export function FounderCard() {
  return (
    <div className="relative mx-auto w-full max-w-md pr-8 pb-8 lg:max-w-none">
      <style>{motion}</style>
      <div className="founder-plate absolute inset-0 right-8 bottom-8 bg-yellow" aria-hidden="true" />
      <figure className="founder-float relative border border-navy/10 bg-white p-3 shadow-[0_24px_48px_-24px_rgba(17,24,53,0.35)]">
        <img
          src="/brand/mailiana.jpg"
          alt={`${company.founder}, founder of ${company.name}`}
          width={520}
          height={650}
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <figcaption className="flex items-center justify-between gap-4 px-2 pt-4 pb-2">
          <div>
            <p className="font-display text-lg font-bold text-navy">{company.founder}</p>
            <p className="mt-0.5 text-sm text-muted">Founder</p>
          </div>
          <ul className="flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center border border-navy/25 text-navy transition hover:border-navy hover:bg-navy hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </div>
  )
}