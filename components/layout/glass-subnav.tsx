'use client'

import Link from 'next/link'
import { AppIcon, type AppIconName } from '@/components/icons/app-icon'
import { focusRingClass } from '@/lib/focus'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

export type GlassSubnavItem = {
  href: string
  label: string
  icon: AppIconName
  active?: boolean
  external?: boolean
}

const ITEM_WIDTH = 72

export function GlassSubnav({
  items,
  ariaLabel,
}: {
  items: GlassSubnavItem[]
  ariaLabel: string
}) {
  const locale = useSiteLocale()
  const opensInNewTab = uiCopy(locale).opensInNewTab
  const activeIndex = Math.max(
    0,
    items.findIndex(item => item.active)
  )
  const hasActive = items.some(item => item.active)

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'relative inline-flex max-w-full items-stretch overflow-x-auto overscroll-x-contain rounded-full p-1',
        'bg-aib-canvas/90 backdrop-blur-2xl backdrop-saturate-150',
        'dark:bg-aib-canvas-inverse/90',
        '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-1 left-1 w-[72px] rounded-full bg-black/5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none dark:bg-white/12',
          !hasActive && 'opacity-0'
        )}
        style={{
          transform: `translateX(${activeIndex * ITEM_WIDTH}px)`,
        }}
      />

      {items.map(item => {
        const className = cn(
          'relative z-1 inline-flex min-h-11 w-[72px] shrink-0 touch-manipulation flex-col items-center justify-center gap-0.5 rounded-full px-1.5 py-1.5 text-[10px] leading-tight font-semibold whitespace-nowrap no-underline transition-colors sm:text-[11px]',
          focusRingClass,
          item.active
            ? 'text-aib-fg dark:text-aib-fg-inverse'
            : 'text-aib-muted hover:opacity-70 dark:text-aib-muted-dark'
        )

        const content = (
          <>
            <AppIcon
              name={item.icon}
              size={20}
              strokeWidth={item.active ? 2.25 : 1.75}
            />
            <span>{item.label}</span>
          </>
        )

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} (${opensInNewTab})`}
            >
              {content}
            </a>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={className}
            aria-current={item.active ? 'page' : undefined}
          >
            {content}
          </Link>
        )
      })}
    </nav>
  )
}
