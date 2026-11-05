'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import {
  GlassSubnav,
  type GlassSubnavItem,
} from '@/components/layout/glass-subnav'
import { aibCopy } from '@/lib/camera/copy'
import { aibLocaleHref } from '@/lib/locale'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'

function CameraSubnavInner() {
  const pathname = usePathname()
  const locale = useSiteLocale()
  const copy = aibCopy(locale)
  const chrome = uiCopy(locale)

  const items: GlassSubnavItem[] = [
    {
      href: aibLocaleHref('/camera', locale),
      label: 'Camera',
      icon: 'home',
      active: pathname === '/camera',
    },
    {
      href: aibLocaleHref('/camera/guide', locale),
      label: copy.nav.guide,
      icon: 'book',
      active:
        pathname === '/camera/guide' || pathname.startsWith('/camera/guide/'),
    },
    {
      href: aibLocaleHref('/camera/changelog', locale),
      label: copy.nav.changelog,
      icon: 'notes',
      active:
        pathname === '/camera/changelog' ||
        pathname.startsWith('/camera/changelog/'),
    },
    {
      href: aibLocaleHref('/camera/privacy', locale),
      label: copy.nav.privacy,
      icon: 'shield',
      active:
        pathname === '/camera/privacy' ||
        pathname.startsWith('/camera/privacy/'),
    },
    {
      href: aibLocaleHref('/camera/terms', locale),
      label: copy.nav.terms,
      icon: 'document',
      active:
        pathname === '/camera/terms' || pathname.startsWith('/camera/terms/'),
    },
  ]

  return <GlassSubnav ariaLabel={chrome.cameraSubnav} items={items} />
}

export function CameraSubnav() {
  return (
    <Suspense fallback={null}>
      <CameraSubnavInner />
    </Suspense>
  )
}
