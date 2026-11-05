'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import {
  LOCALE_QUERY_KEY,
  normalizeAibLocale,
  readStoredLocale,
  shouldIgnoreUrlLocale,
  subscribeStoredLocale,
} from '@/lib/locale'

function DocumentLangInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const sync = () => {
      let locale = readStoredLocale()
      if (searchParams.has(LOCALE_QUERY_KEY)) {
        const urlLocale = normalizeAibLocale(searchParams.get(LOCALE_QUERY_KEY))
        if (!shouldIgnoreUrlLocale(urlLocale)) locale = urlLocale
      }
      document.documentElement.lang = locale
    }

    sync()
    return subscribeStoredLocale(sync)
  }, [pathname, searchParams])

  return null
}

export function DocumentLang() {
  return (
    <Suspense fallback={null}>
      <DocumentLangInner />
    </Suspense>
  )
}
