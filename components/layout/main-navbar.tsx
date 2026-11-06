'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { AppIcon, type AppIconName } from '@/components/icons/app-icon'
import { focusRingClass, touchTargetClass } from '@/lib/focus'
import { aibLocaleHref } from '@/lib/locale'
import { products } from '@/lib/site'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

function MainNavbarInner() {
  const pathname = usePathname()
  const locale = useSiteLocale()
  const copy = uiCopy(locale)

  const links: {
    href: string
    label: string
    match: string
    icon: AppIconName
  }[] = [
    {
      href: aibLocaleHref(products.camera.path, locale),
      label: 'Camera',
      match: '/camera',
      icon: 'camera',
    },
    {
      href: aibLocaleHref(products.sitac.path, locale),
      label: 'SITAC',
      match: '/sitac',
      icon: 'map',
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-[max(1rem,env(safe-area-inset-left))] py-1 pr-[max(1rem,env(safe-area-inset-right))] sm:gap-4 sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:py-1.5 sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
      <Link
        href={aibLocaleHref('/', locale)}
        className={cn(
          'inline-flex shrink-0 items-center rounded-aib-sm px-1 transition-opacity hover:opacity-70',
          touchTargetClass,
          focusRingClass
        )}
        aria-label={copy.homeAriaLabel}
      >
        <Image
          src="/camera/logo.png"
          alt=""
          width={350}
          height={180}
          className="h-4.5 w-auto brightness-0 sm:h-5 dark:brightness-100"
          priority
        />
      </Link>

      <nav aria-label={copy.productsNav}>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map(link => {
            const active =
              pathname === link.match || pathname.startsWith(`${link.match}/`)
            return (
              <li key={link.match}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-aib-sm px-2.5 text-[13px] font-bold tracking-[-0.1px] text-aib-fg no-underline transition-opacity hover:opacity-70 sm:px-3 sm:text-[14px] dark:text-aib-fg-inverse',
                    touchTargetClass,
                    focusRingClass,
                    active ? 'opacity-100' : 'opacity-70'
                  )}
                >
                  <AppIcon
                    name={link.icon}
                    size={16}
                    strokeWidth={active ? 2 : 1.75}
                  />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export function MainNavbar() {
  return (
    <Suspense fallback={<div className="h-11" aria-hidden />}>
      <MainNavbarInner />
    </Suspense>
  )
}
