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
        'sr-only z-100 rounded-aib-sm bg-aib-fg px-3 py-2.5 text-[13px] font-semibold text-aib-fg-inverse',
        'focus:not-sr-only focus:fixed focus:top-[max(0.75rem,env(safe-area-inset-top))] focus:left-[max(0.75rem,env(safe-area-inset-left))]',
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
