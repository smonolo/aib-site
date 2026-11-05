export type AibLocale = 'it' | 'en'

export const LOCALE_QUERY_KEY = 'lang'
export const LOCALE_STORAGE_KEY = 'aib-site-lang'
const LOCALE_CHANGE = 'aib-site-lang-change'

export function parseAibLocale(value: unknown): AibLocale | null {
  const raw = Array.isArray(value) ? value[0] : value
  if (raw === 'en' || raw === 'it') return raw
  return null
}

export function normalizeAibLocale(value: unknown): AibLocale {
  return parseAibLocale(value) ?? 'it'
}

export function aibLocaleHref(path: string, locale: AibLocale): string {
  const [pathname, existingQuery = ''] = path.split('?')
  const params = new URLSearchParams(existingQuery)
  if (locale === 'en') params.set(LOCALE_QUERY_KEY, 'en')
  else params.delete(LOCALE_QUERY_KEY)
  const query = params.toString()
  return query ? `${pathname}?${query}` : pathname
}

export function hrefForLocale(
  pathname: string,
  searchParams: { toString(): string },
  locale: AibLocale
): string {
  const params = new URLSearchParams(searchParams.toString())
  if (locale === 'en') params.set(LOCALE_QUERY_KEY, 'en')
  else params.delete(LOCALE_QUERY_KEY)
  const query = params.toString()
  return query ? `${pathname}?${query}` : pathname
}

export function localeFromSearchParams(
  searchParams: Record<string, string | string[] | undefined> | undefined
): AibLocale {
  return normalizeAibLocale(searchParams?.[LOCALE_QUERY_KEY])
}

export function readStoredLocale(): AibLocale {
  if (typeof window === 'undefined') return 'it'
  try {
    return normalizeAibLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY))
  } catch {
    return 'it'
  }
}

export function writeStoredLocale(locale: AibLocale): void {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    window.dispatchEvent(new Event(LOCALE_CHANGE))
  } catch {}
}

let pendingLocaleNav: AibLocale | null = null

export function beginLocaleNavigation(locale: AibLocale): void {
  pendingLocaleNav = locale
  writeStoredLocale(locale)
}

export function shouldIgnoreUrlLocale(urlLocale: AibLocale): boolean {
  return pendingLocaleNav != null && pendingLocaleNav !== urlLocale
}

export function settleLocaleNavigation(urlLocale: AibLocale | null): void {
  if (pendingLocaleNav == null) return
  if (urlLocale == null && pendingLocaleNav === 'it') {
    pendingLocaleNav = null
    return
  }
  if (urlLocale != null && urlLocale === pendingLocaleNav) {
    pendingLocaleNav = null
  }
}

export function isPendingLocale(locale: AibLocale): boolean {
  return pendingLocaleNav === locale
}

export function subscribeStoredLocale(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const onStorage = (event: StorageEvent) => {
    if (event.key === LOCALE_STORAGE_KEY || event.key === null) onStoreChange()
  }
  window.addEventListener('storage', onStorage)
  window.addEventListener(LOCALE_CHANGE, onStoreChange)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(LOCALE_CHANGE, onStoreChange)
  }
}
