'use client'

import { useEffect, useState } from 'react'

export const SITE_FOOTER_SELECTOR = '[data-site-footer]'

export function useFooterDockBottom(): number {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const footer = document.querySelector(SITE_FOOTER_SELECTOR)
    if (!(footer instanceof HTMLElement)) return

    const update = () => {
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight
      const top = footer.getBoundingClientRect().top
      setOffset(Math.max(0, viewportHeight - top))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.visualViewport?.addEventListener('resize', update)
    window.visualViewport?.addEventListener('scroll', update)
    const observer = new ResizeObserver(update)
    observer.observe(footer)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [])

  return offset
}
