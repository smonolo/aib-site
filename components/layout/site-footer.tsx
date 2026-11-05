'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { LanguageSelect } from '@/components/layout/language-select'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { focusRingClass, touchTargetClass } from '@/lib/focus'
import { aibLocaleHref } from '@/lib/locale'
import { products, site } from '@/lib/site'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

function SiteFooterInner() {
  const pathname = usePathname()
  const locale = useSiteLocale()
  const copy = uiCopy(locale)

  const mainLinks = [
    { href: aibLocaleHref('/', locale), label: copy.footerHome, match: '/' },
    {
      href: aibLocaleHref(products.camera.path, locale),
      label: products.camera.name,
      match: '/camera',
    },
    {
      href: aibLocaleHref(products.sitac.path, locale),
      label: products.sitac.name,
      match: '/sitac',
    },
  ]

  return (
    <footer
      data-site-footer
      role="contentinfo"
      className="mt-auto border-t border-aib-border bg-aib-surface-muted pb-[env(safe-area-inset-bottom)] text-aib-fg dark:border-aib-border-dark dark:bg-aib-surface-dark dark:text-aib-fg-inverse"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-[max(1rem,env(safe-area-inset-left))] py-10 pr-[max(1rem,env(safe-area-inset-right))] sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:py-12 sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:grid-cols-3">
        <div>
          <p className="text-xl font-bold tracking-[-0.3px]">{site.name}</p>
          <p className="mt-1 text-sm text-aib-muted dark:text-aib-muted-dark">
            {copy.siteTagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-aib-muted dark:text-aib-muted-dark">
            {copy.siteDescription}
          </p>
        </div>

        <nav aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" className="text-lg font-semibold">
            {copy.footerNav}
          </h2>
          <ul className="mt-3 space-y-1">
            {mainLinks.map(item => {
              const active =
                item.match === '/'
                  ? pathname === '/'
                  : pathname === item.match ||
                    pathname.startsWith(`${item.match}/`)
              return (
                <li key={item.match}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex items-center rounded-aib-sm px-1 font-medium transition-opacity hover:opacity-70',
                      touchTargetClass,
                      focusRingClass
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div>
          <h2 id="footer-contacts-heading" className="text-lg font-semibold">
            {copy.footerContacts}
          </h2>
          <address
            className="mt-3 space-y-1 text-sm text-aib-muted not-italic dark:text-aib-muted-dark"
            aria-labelledby="footer-contacts-heading"
          >
            <p>
              <a
                href={site.email.href}
                className={cn(
                  'inline-flex items-center rounded-aib-sm px-1 font-medium text-aib-fg transition-opacity hover:opacity-70 dark:text-aib-fg-inverse',
                  touchTargetClass,
                  focusRingClass
                )}
              >
                {site.email.display}
              </a>
            </p>
            <p>
              <a
                href={site.credits.author.href}
                className={cn(
                  'inline-flex items-center rounded-aib-sm px-1 font-medium text-aib-fg transition-opacity hover:opacity-70 dark:text-aib-fg-inverse',
                  touchTargetClass,
                  focusRingClass
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`smnl.dev (${copy.opensInNewTab})`}
              >
                smnl.dev
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-aib-border dark:border-aib-border-dark">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-[max(1rem,env(safe-area-inset-left))] py-4 pr-[max(1rem,env(safe-area-inset-right))] text-sm text-aib-muted sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:flex-row md:items-center md:justify-between dark:text-aib-muted-dark">
          <p>
            © {site.copyrightYear} {site.credits.author.name}
          </p>
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-2"
            role="group"
            aria-label={copy.languageAndTheme}
          >
            <p>{copy.footerUnaffiliated}</p>
            <LanguageSelect />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

export function SiteFooter() {
  return (
    <Suspense fallback={<div className="h-48" aria-hidden />}>
      <SiteFooterInner />
    </Suspense>
  )
}
