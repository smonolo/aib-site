import type { ComponentType } from 'react'
import type { AibLocale } from '@/lib/locale'
import { cn } from '@/lib/utils'

function ItalyFlag() {
  return (
    <svg viewBox="0 0 16 16" className="size-full" aria-hidden>
      <rect width="5.34" height="16" fill="#009246" />
      <rect x="5.34" width="5.32" height="16" fill="#ffffff" />
      <rect x="10.66" width="5.34" height="16" fill="#ce2b37" />
    </svg>
  )
}

function UkFlag() {
  return (
    <svg viewBox="0 0 16 16" className="size-full" aria-hidden>
      <rect width="16" height="16" fill="#012169" />
      <path d="M0 0 L16 16 M16 0 L0 16" stroke="#ffffff" strokeWidth="3.2" />
      <path d="M0 0 L16 16 M16 0 L0 16" stroke="#c8102e" strokeWidth="1.6" />
      <path d="M8 0 V16 M0 8 H16" stroke="#ffffff" strokeWidth="5" />
      <path d="M8 0 V16 M0 8 H16" stroke="#c8102e" strokeWidth="2.6" />
    </svg>
  )
}

const FLAGS: Record<AibLocale, ComponentType> = {
  it: ItalyFlag,
  en: UkFlag,
}

export function LocaleFlag({
  locale,
  className,
}: {
  locale: AibLocale
  className?: string
}) {
  const Flag = FLAGS[locale]
  return (
    <span
      className={cn(
        'inline-flex size-3.5 shrink-0 overflow-hidden rounded-[2.5px] ring-1 ring-black/12 dark:ring-white/16',
        className
      )}
      aria-hidden
    >
      <Flag />
    </span>
  )
}
