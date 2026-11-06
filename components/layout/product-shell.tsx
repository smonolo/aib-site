import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
import { focusRingSurfaceClass } from '@/lib/focus'
import { cn } from '@/lib/utils'

export function ProductShell({
  subnav,
  children,
}: {
  subnav: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col bg-aib-canvas font-sans text-aib-fg antialiased dark:bg-aib-canvas-inverse dark:text-aib-fg-inverse">
      <SkipLink />
      <div className="flex h-dvh flex-col">
        <SiteHeader />
        <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col px-[max(0.75rem,env(safe-area-inset-left))] pt-4 pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-[max(1.5rem,env(safe-area-inset-left))] sm:pt-6 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pb-6">
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-aib bg-aib-surface dark:bg-aib-surface-dark">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-linear-to-b from-aib-surface from-35% to-transparent sm:h-12 dark:from-aib-surface-dark"
            />
            <div className="min-h-0 flex-1 [scroll-padding-bottom:7rem] overflow-y-auto overscroll-y-contain px-4 pt-8 pb-28 [-webkit-overflow-scrolling:touch] sm:[scroll-padding-bottom:8rem] sm:px-10 sm:pt-12 sm:pb-32">
              <main
                id="contenuto-principale"
                tabIndex={-1}
                className={cn(focusRingSurfaceClass)}
              >
                {children}
              </main>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center bg-linear-to-t from-aib-surface from-35% to-transparent px-2 pt-12 pb-3 sm:px-3 sm:pb-4 dark:from-aib-surface-dark">
              <div className="pointer-events-auto max-w-full">{subnav}</div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
