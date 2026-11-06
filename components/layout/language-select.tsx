'use client'

import { AltArrowDownIcon } from '@solar-icons/react/linear/alt-arrow-down'
import { CheckIcon } from '@solar-icons/react/linear/check'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useTransition } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { controlTriggerClass } from '@/lib/control-trigger'
import {
  beginLocaleNavigation,
  hrefForLocale,
  isPendingLocale,
  LOCALE_QUERY_KEY,
  normalizeAibLocale,
  readStoredLocale,
  settleLocaleNavigation,
  shouldIgnoreUrlLocale,
  writeStoredLocale,
  type AibLocale,
} from '@/lib/locale'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

const LOCALE_LABELS: Record<AibLocale, string> = {
  it: 'Italiano',
  en: 'English',
}

const LOCALES: AibLocale[] = ['it', 'en']

function LanguageSelectInner({ className }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pending, startTransition] = useTransition()
  const locale = useSiteLocale()
  const copy = uiCopy(locale)

  useEffect(() => {
    if (searchParams.has(LOCALE_QUERY_KEY)) {
      const urlLocale = normalizeAibLocale(searchParams.get(LOCALE_QUERY_KEY))
      if (shouldIgnoreUrlLocale(urlLocale)) return
      settleLocaleNavigation(urlLocale)
      writeStoredLocale(urlLocale)
      return
    }

    if (isPendingLocale('it')) {
      settleLocaleNavigation(null)
      return
    }

    settleLocaleNavigation(null)

    if (readStoredLocale() !== 'en') return

    startTransition(() => {
      router.replace(hrefForLocale(pathname, searchParams, 'en'))
      router.refresh()
    })
  }, [pathname, router, searchParams])

  function applyLocale(next: AibLocale) {
    if (next === locale) return

    beginLocaleNavigation(next)
    startTransition(() => {
      router.replace(hrefForLocale(pathname, searchParams, next))
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-aib-sm px-2.5 text-[13px] font-semibold transition-opacity hover:opacity-70',
          controlTriggerClass,
          className
        )}
        aria-label={`${copy.languageLabel}: ${LOCALE_LABELS[locale]}. ${copy.languageSelect}`}
        disabled={pending}
      >
        <span aria-hidden>{locale.toUpperCase()}</span>
        <AltArrowDownIcon
          size={14}
          color="currentColor"
          strokeWidth={1.75}
          className="opacity-70"
          aria-hidden
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label={copy.languagesAvailable}>
        {LOCALES.map(code => {
          const selected = locale === code
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => applyLocale(code)}
              aria-checked={selected}
              role="menuitemradio"
            >
              <span
                className="flex size-4 items-center justify-center"
                aria-hidden
              >
                {selected ? (
                  <CheckIcon size={16} color="currentColor" strokeWidth={2} />
                ) : null}
              </span>
              {LOCALE_LABELS[code]}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function LanguageSelect({ className }: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div
          className={cn(
            'h-11 min-w-14 rounded-aib-sm bg-aib-surface dark:bg-aib-surface-muted-dark',
            className
          )}
          aria-hidden
        />
      }
    >
      <LanguageSelectInner className={className} />
    </Suspense>
  )
}
