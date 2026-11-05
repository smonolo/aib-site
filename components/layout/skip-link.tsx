'use client'

import { Suspense } from 'react'
import { focusRingClass } from '@/lib/focus'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

function SkipLinkInner() {
  const copy = uiCopy(useSiteLocale())
  return (
    <a
      href="#contenuto-principale"
      className={cn(
        'sr-only z-100 rounded-aib-sm bg-aib-fg px-3 py-2 text-[13px] font-semibold text-aib-fg-inverse',
        'focus:not-sr-only focus:fixed focus:top-3 focus:left-3',
        focusRingClass
      )}
    >
      {copy.skipToContent}
    </a>
  )
}

export function SkipLink() {
  return (
    <Suspense fallback={null}>
      <SkipLinkInner />
    </Suspense>
  )
}
