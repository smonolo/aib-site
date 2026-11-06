'use client'

import Image from 'next/image'
import { useSyncExternalStore } from 'react'
import { readResolvedDark, subscribeResolvedDark } from '@/lib/theme'

export function HubHeroMedia() {
  const dark = useSyncExternalStore(
    subscribeResolvedDark,
    readResolvedDark,
    () => false
  )

  return (
    <Image
      src={
        dark ? '/hub-hero-wildfire-dark.jpg' : '/hub-hero-wildfire-light.jpg'
      }
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  )
}
