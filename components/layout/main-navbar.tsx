'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { AppIcon, type AppIconName } from '@/components/icons/app-icon'
import { LanguageSelect } from '@/components/layout/language-select'
import { ThemeToggle } from '@/components/layout/theme-toggle'
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
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-1 px-[max(0.75rem,env(safe-area-inset-left))] py-1 pr-[max(0.75rem,env(safe-area-inset-right))] sm:gap-4 sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:py-1.5 sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
      <Link
        href={aibLocaleHref('/', locale)}
        className={cn(
          'inline-flex shrink-0 items-center rounded-aib-sm px-1 transition-opacity hover:opacity-70 motion-reduce:transition-none',
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
          className="h-4.5 w-auto brightness-0 group-data-[nav=overlay]/header:brightness-100 sm:h-5 dark:brightness-100"
          priority
        />
      </Link>

      <div className="flex min-w-0 items-center gap-0 sm:gap-1">
        <nav aria-label={copy.productsNav}>
          <ul className="flex items-center gap-0 sm:gap-1">
            {links.map(link => {
              const active =
                pathname === link.match || pathname.startsWith(`${link.match}/`)
              return (
                <li key={link.match}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-aib-sm px-2 text-[13px] font-bold tracking-[-0.1px] no-underline transition-colors motion-reduce:transition-none sm:px-3 sm:text-[14px]',
                      'text-aib-muted hover:text-aib-fg dark:text-aib-muted-dark dark:hover:text-aib-fg-inverse',
                      'group-data-[nav=overlay]/header:text-white/70 group-data-[nav=overlay]/header:hover:text-white',
                      touchTargetClass,
                      focusRingClass,
                      active &&
                        'text-aib-fg group-data-[nav=overlay]/header:text-white dark:text-aib-fg-inverse'
                    )}
                  >
                    <AppIcon
                      name={link.icon}
                      size={16}
                      strokeWidth={active ? 2 : 1.75}
                    />
                    <span className="sr-only min-[420px]:not-sr-only min-[420px]:inline">
                      {link.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div
          className="flex items-center gap-0 sm:gap-1"
          role="group"
          aria-label={copy.languageAndTheme}
        >
          <LanguageSelect />
          <ThemeToggle />
        </div>
      </div>
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
