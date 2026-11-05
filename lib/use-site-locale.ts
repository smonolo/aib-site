'use client'

import { useSearchParams } from 'next/navigation'
import { useSyncExternalStore } from 'react'
import {
  LOCALE_QUERY_KEY,
  normalizeAibLocale,
  readStoredLocale,
  shouldIgnoreUrlLocale,
  subscribeStoredLocale,
  type AibLocale,
} from '@/lib/locale'

export function useSiteLocale(): AibLocale {
  const searchParams = useSearchParams()
  const storedLocale = useSyncExternalStore(
    subscribeStoredLocale,
    readStoredLocale,
    () => 'it' as AibLocale
  )

  if (searchParams.has(LOCALE_QUERY_KEY)) {
    const urlLocale = normalizeAibLocale(searchParams.get(LOCALE_QUERY_KEY))
    if (shouldIgnoreUrlLocale(urlLocale)) {
      return storedLocale
    }
    return urlLocale
  }

  return storedLocale
}
