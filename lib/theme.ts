export type ThemePreference = 'system' | 'light' | 'dark'

const THEME_KEY = 'aib-site-theme'
const THEME_CHANGE = 'aib-site-theme-change'

export const themeBootScript = `(function(){try{var k=${JSON.stringify(THEME_KEY)};var p=localStorage.getItem(k);if(p!=='light'&&p!=='dark'&&p!=='system')p='system';var dark=p==='dark'||(p!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);}catch(e){}})();`

export function readThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system'
  try {
    const raw = window.localStorage.getItem(THEME_KEY)
    if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  } catch {}
  return 'system'
}

export function applyThemePreference(preference: ThemePreference): void {
  window.localStorage.setItem(THEME_KEY, preference)
  const dark =
    preference === 'dark' ||
    (preference !== 'light' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  window.dispatchEvent(new Event(THEME_CHANGE))
}

export function subscribeThemePreference(
  onStoreChange: () => void
): () => void {
  if (typeof window === 'undefined') return () => {}
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY || event.key === null) onStoreChange()
  }
  window.addEventListener('storage', onStorage)
  window.addEventListener(THEME_CHANGE, onStoreChange)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(THEME_CHANGE, onStoreChange)
  }
}
