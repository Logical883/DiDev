import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  MessagesSquare,
  Waypoints,
  type LucideIcon,
} from 'lucide-react'

const registry = {
  academy: GraduationCap,
  consulting: BriefcaseBusiness,
  network: Waypoints,
  conversation: MessagesSquare,
  learning: BookOpen,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof registry

export function MarkIcon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  const Icon = registry[name]
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />
}

export function Arrow({ className }: { className?: string }) {
  return <ArrowUpRight className={className} strokeWidth={1.75} aria-hidden="true" />
}
