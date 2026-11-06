import { BookIcon } from '@solar-icons/react/linear/book'
import { CameraIcon } from '@solar-icons/react/linear/camera'
import { DocumentTextIcon } from '@solar-icons/react/linear/document-text'
import { HomeIcon } from '@solar-icons/react/linear/home'
import { LetterIcon } from '@solar-icons/react/linear/letter'
import { LinkRoundIcon } from '@solar-icons/react/linear/link-round'
import { MapIcon } from '@solar-icons/react/linear/map'
import { MonitorSmartphoneIcon } from '@solar-icons/react/linear/monitor-smartphone'
import { MoonIcon } from '@solar-icons/react/linear/moon'
import { NotesIcon } from '@solar-icons/react/linear/notes'
import { ShieldCheckIcon } from '@solar-icons/react/linear/shield-check'
import { SquareArrowRightUpIcon } from '@solar-icons/react/linear/square-arrow-right-up'
import { Sun2Icon } from '@solar-icons/react/linear/sun-2'
import type { ComponentType, SVGProps } from 'react'
import { cn } from '@/lib/utils'

const ICONS = {
  home: HomeIcon,
  book: BookIcon,
  notes: NotesIcon,
  document: DocumentTextIcon,
  shield: ShieldCheckIcon,
  external: SquareArrowRightUpIcon,
  link: LinkRoundIcon,
  letter: LetterIcon,
  devices: MonitorSmartphoneIcon,
  sun: Sun2Icon,
  moon: MoonIcon,
  camera: CameraIcon,
  map: MapIcon,
} as const

export type AppIconName = keyof typeof ICONS

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
  strokeWidth?: number
}

export function AppIcon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
}: {
  name: AppIconName
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}) {
  const Icon = ICONS[name] as ComponentType<IconProps>
  return (
    <Icon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      aria-hidden
    />
  )
}
