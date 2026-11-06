'use client'

import { useEffect, useState } from 'react'
import { MainNavbar } from '@/components/layout/main-navbar'
import { cn } from '@/lib/utils'

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > threshold)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const scrolled = useScrolled()
  const overHero = overlay && !scrolled

  return (
    <>
      <header
        data-nav={overHero ? 'overlay' : undefined}
        className={cn(
          'group/header fixed inset-x-0 top-0 z-30 w-full pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,color] duration-200 motion-reduce:transition-none',
          scrolled
            ? 'bg-aib-canvas/75 text-aib-fg backdrop-blur-xl backdrop-saturate-150 dark:bg-aib-canvas-inverse/75 dark:text-aib-fg-inverse'
            : 'bg-transparent text-aib-fg dark:text-aib-fg-inverse',
          overHero && 'text-white'
        )}
      >
        <MainNavbar />
      </header>
      {!overlay ? (
        <div
          className="h-[calc(env(safe-area-inset-top)+3.25rem)] shrink-0 sm:h-[calc(env(safe-area-inset-top)+3.5rem)]"
          aria-hidden
        />
      ) : null}
    </>
  )
}
