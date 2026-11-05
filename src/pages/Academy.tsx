import { useCallback, useState } from 'react'
import Chip from '@mui/material/Chip'
import MuiButton from '@mui/material/Button'
import { BarChart3, Bot, Megaphone, Workflow, type LucideIcon } from 'lucide-react'
import { academySchools, learnerAudiences } from '../content/site'
import { Button } from '../components/Button'
import { ProgrammeModal, type ProgrammeCard } from '../components/ProgrammeModal'
import { SkeletonImage } from '../components/Skeletons'
import { Container, CtaBand, Eyebrow, PageHero } from '../components/Chrome'
import { usePageMeta } from '../lib/page'

const schoolIcons: Record<(typeof academySchools)[number]['id'], LucideIcon> = {
  data: BarChart3,
  'digital-marketing': Megaphone,
  ai: Bot,
  transformation: Workflow,
}

const openSchools = academySchools.filter((school) => school.status === 'open')
const plannedSchools = academySchools.filter((school) => school.status === 'planned')

type ListedProgramme = ProgrammeCard & { schoolId: string; schoolName: string; tags: readonly string[] }

const programmes: ListedProgramme[] = openSchools.flatMap((school) =>
  school.programmes.map((programme) => ({ ...programme, schoolId: school.id, schoolName: school.name })),
)

export function AcademyPage() {
  const [filter, setFilter] = useState<string>('all')
  const [openProgramme, setOpenProgramme] = useState<ProgrammeCard | null>(null)
  const closeProgramme = useCallback(() => setOpenProgramme(null), [])
  const activeSchool = openSchools.find((school) => school.id === filter)
  const visibleProgrammes = filter === 'all' ? programmes : programmes.filter((programme) => programme.schoolId === filter)
  usePageMeta(
    'DiDev Academy — Learn. Build. Transform.',
    'Project-based data and digital learning from DiDev Academy, continuing the work of The Digital College.',
  )

  return (
    <>
      <PageHero
        eyebrow="DiDev Academy"
        title="Build skills you can demonstrate."
        lede="Guided practice in data and digital work, with projects, feedback and a portfolio. The Digital College continues here."
        actions={
          <>
            <Button href="/contact?topic=academy">Enquire about learning</Button>
            <Button href="#schools" variant="ghost-light">Explore the schools</Button>
          </>
        }
      />

      <section className="border-b border-line bg-white">
        <Container className="grid gap-8 py-10 md:grid-cols-3">
          {['Practice before theory', 'Feedback on real work', 'A portfolio you can explain'].map((item, index) => (
            <p key={item} className="flex items-center gap-4 text-sm font-semibold text-navy">
              <span className="font-display text-2xl">0{index + 1}</span>
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SkeletonImage wrap="" src="/brand/logo-academy.png" alt="DiDev Academy" width={1600} height={574} className="h-20 w-auto" />
            <h2 className="mt-8 text-[clamp(2rem,4vw,3.3rem)] text-navy">Learning that has to survive contact with the work.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Academy pathways are built around tasks: cleaning a dataset, writing a query, explaining a dashboard, or using an AI tool inside a rule. Theory is there to make the task clearer.
            </p>
            <p>
              Programmes are for students, career changers and working professionals. Length, price and the exact syllabus are confirmed for each intake, so this page describes how the Academy is organised and not a fixed catalogue of dates.
            </p>
            <Button href="/contact?topic=academy">Enquire about a pathway</Button>
          </div>
        </Container>
      </section>

      <section id="schools" className="bg-mist py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Schools</Eyebrow>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.3rem)] text-navy">Choose a school, then a programme.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">
              Every programme is taught by people who do this work. Start free, or pick a guided path with monthly office hours.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter programmes by school">
            {[{ id: 'all', name: 'All programmes', count: programmes.length }, ...openSchools.map((school) => ({ id: school.id, name: school.name, count: school.programmes.length }))].map(
              (option) => {
                const selected = filter === option.id
                return (
                  <Chip
                    key={option.id}
                    clickable
                    aria-pressed={selected}
                    onClick={() => setFilter(option.id)}
                    variant={selected ? 'filled' : 'outlined'}
                    label={
                      <span className="inline-flex items-center gap-2">
                        {option.name}
                        <span className={selected ? 'text-xs text-white/60' : 'text-xs text-muted'}>{option.count}</span>
                      </span>
                    }
                    sx={{
                      height: 38,
                      px: 0.5,
                      fontSize: 14,
                      fontWeight: 600,
                      bgcolor: selected ? 'primary.main' : '#fff',
                      color: selected ? '#fff' : 'primary.main',
                      borderColor: selected ? 'primary.main' : 'rgba(17, 24, 53, 0.15)',
                      '&:hover': { bgcolor: selected ? 'primary.light' : '#fff', borderColor: selected ? 'primary.light' : 'rgba(17, 24, 53, 0.4)' },
                    }}
                  />
                )
              },
            )}
          </div>

          {activeSchool ? (
            <div className="mt-6 flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-navy">
                {(() => {
                  const Icon = schoolIcons[activeSchool.id]
                  return <Icon className="size-5" aria-hidden="true" />
                })()}
              </span>
              <p className="text-sm leading-6 text-muted">{activeSchool.text}</p>
            </div>
          ) : null}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProgrammes.map((programme) => (
              <article
                key={programme.slug}
                className="group flex flex-col rounded-3xl bg-white p-3 shadow-[0_10px_30px_rgba(17,24,53,0.06)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(17,24,53,0.12)]"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <SkeletonImage
                    src={programme.image}
                    alt={programme.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover object-[50%_30%]"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy backdrop-blur">
                    {programme.schoolName}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pt-5 pb-2">
                  <h3 className="text-[1.4rem] leading-tight text-navy">{programme.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{programme.text}</p>
                  <p className="mt-4 text-sm text-navy">
                    <span className="font-bold">{programme.price}</span>
                    <span className="text-muted"> · {programme.format}</span>
                  </p>
                  <p className="mt-2 mb-6 text-xs text-muted">{programme.tags.join(' · ')}</p>
                  <MuiButton
                    fullWidth
                    variant="contained"
                    disableElevation
                    onClick={() => setOpenProgramme(programme)}
                    sx={{ mt: 'auto', py: '14px', borderRadius: '12px', fontSize: 14, bgcolor: 'primary.main', color: '#fff', '&:hover': { bgcolor: 'primary.light' } }}
                  >
                    {programme.price === 'Free' ? 'Start watching' : 'View programme'}
                  </MuiButton>
                </div>
              </article>
            ))}
          </div>

          {plannedSchools.length > 0 ? (
            <div className="mt-16">
              <h3 className="text-xl text-navy">Coming next</h3>
              <p className="mt-1 text-sm text-muted">New schools we are preparing. Programmes will be listed here when they open.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {plannedSchools.map((school) => {
                  const Icon = schoolIcons[school.id]
                  return (
                    <article
                      key={school.id}
                      className="flex items-center gap-4 rounded-3xl bg-white p-4 pr-6 shadow-[0_10px_30px_rgba(17,24,53,0.06)]"
                    >
                      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-mist text-navy">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display text-lg font-bold text-navy">{school.name}</h4>
                        <p className="text-sm text-muted">Programmes to be announced</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-muted">Not open yet</span>
                    </article>
                  )
                })}
              </div>
            </div>
          ) : null}
        </Container>
        <ProgrammeModal programme={openProgramme} onClose={closeProgramme} />
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Who it is for</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.3rem)] text-navy">Different starting points. The same standard of proof.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {learnerAudiences.map((audience, index) => (
              <article key={audience.title} className="border border-line bg-white p-7">
                <p className="font-display text-3xl text-navy">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-navy">{audience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{audience.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-muted">
            DiDev does not promise employment, a salary or instant mastery. A pathway provides instruction, practice, feedback and a way to judge progress. The learner’s effort, and the context they return to, still matter.
          </p>
        </Container>
      </section>

      <CtaBand
        eyebrow="Academy"
        title="Ask about the next suitable pathway."
        text="Tell us who the learners are, what they need to be able to do, and when you want to begin."
        href="/contact?topic=academy"
        label="Enquire about learning"
      />
    </>
  )
}