'use client'

import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

type Props = Omit<ComponentProps<typeof Link>, 'href'> &
  VariantProps<typeof buttonVariants> & {
    href: string
    external?: boolean
    download?: string | boolean
  }

function labelFromChildren(children: ReactNode): string | null {
  if (typeof children === 'string') return children
  if (typeof children === 'number') return String(children)
  return null
}

export function ButtonLink({
  className,
  variant = 'default',
  size = 'sm',
  external,
  href,
  download,
  children,
  ...props
}: Props) {
  const locale = useSiteLocale()
  const opensInNewTab = uiCopy(locale).opensInNewTab
  const classes = cn(buttonVariants({ variant, size }), className)
  const asAnchor =
    Boolean(download) ||
    external ||
    href.startsWith('http') ||
    href.startsWith('mailto:')

  if (asAnchor) {
    const opensExternal = Boolean(external || href.startsWith('http'))
    const textLabel = labelFromChildren(children)
    const ariaLabel =
      props['aria-label'] ??
      (opensExternal && textLabel
        ? `${textLabel} (${opensInNewTab})`
        : undefined)

    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        {...(opensExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...(props as ComponentProps<'a'>)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
