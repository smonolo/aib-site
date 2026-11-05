'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import {
  GlassSubnav,
  type GlassSubnavItem,
} from '@/components/layout/glass-subnav'
import { aibLocaleHref } from '@/lib/locale'
import { aibSitacCopy } from '@/lib/sitac/copy'
import { SITAC_APP_URL } from '@/lib/site'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'

function SitacSubnavInner() {
  const pathname = usePathname()
  const locale = useSiteLocale()
  const copy = aibSitacCopy(locale)
  const chrome = uiCopy(locale)

  const items: GlassSubnavItem[] = [
    {
      href: aibLocaleHref('/sitac', locale),
      label: 'SITAC',
      icon: 'home',
      active: pathname === '/sitac',
    },
    {
      href: aibLocaleHref('/sitac/guide', locale),
      label: copy.nav.guide,
      icon: 'book',
      active:
        pathname === '/sitac/guide' || pathname.startsWith('/sitac/guide/'),
    },
    {
      href: aibLocaleHref('/sitac/privacy', locale),
      label: copy.nav.privacy,
      icon: 'shield',
      active:
        pathname === '/sitac/privacy' || pathname.startsWith('/sitac/privacy/'),
    },
    {
      href: aibLocaleHref('/sitac/terms', locale),
      label: copy.nav.terms,
      icon: 'document',
      active:
        pathname === '/sitac/terms' || pathname.startsWith('/sitac/terms/'),
    },
    {
      href: SITAC_APP_URL,
      label: copy.nav.openApp,
      icon: 'external',
      external: true,
    },
  ]

  return <GlassSubnav ariaLabel={chrome.sitacSubnav} items={items} />
}

export function SitacSubnav() {
  return (
    <Suspense fallback={null}>
      <SitacSubnavInner />
    </Suspense>
  )
}
