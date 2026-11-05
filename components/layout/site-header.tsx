import { MainNavbar } from '@/components/layout/main-navbar'

export function SiteHeader() {
  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-30 w-full bg-aib-canvas pt-[env(safe-area-inset-top)] text-aib-fg dark:bg-aib-canvas-inverse dark:text-aib-fg-inverse"
        role="banner"
      >
        <MainNavbar />
      </header>
      <div
        className="h-[calc(env(safe-area-inset-top)+4.25rem)] shrink-0 sm:h-[calc(env(safe-area-inset-top)+4.75rem)]"
        aria-hidden
      />
    </>
  )
}
