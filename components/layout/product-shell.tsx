import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'

export function ProductShell({
  subnav,
  children,
}: {
  subnav: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-aib-canvas font-sans text-aib-fg antialiased dark:bg-aib-canvas-inverse dark:text-aib-fg-inverse">
      <SkipLink />
      <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden">
        <SiteHeader />
        <div className="mx-auto w-full max-w-5xl flex-1 px-[max(1rem,env(safe-area-inset-left))] pt-8 pr-[max(1rem,env(safe-area-inset-right))] pb-28 sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:pt-10 sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
          <main id="contenuto-principale" tabIndex={-1}>
            {children}
          </main>
        </div>
        <SiteFooter />
      </div>
      {subnav}
    </div>
  )
}
