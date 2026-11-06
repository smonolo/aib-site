import { MainNavbar } from '@/components/layout/main-navbar'

export function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 w-full bg-aib-canvas/75 pt-[env(safe-area-inset-top)] text-aib-fg backdrop-blur-xl backdrop-saturate-150 dark:bg-aib-canvas-inverse/75 dark:text-aib-fg-inverse">
        <MainNavbar />
      </header>
      <div
        className="h-[calc(env(safe-area-inset-top)+3.25rem)] shrink-0 sm:h-[calc(env(safe-area-inset-top)+3.5rem)]"
        aria-hidden
      />
    </>
  )
}
