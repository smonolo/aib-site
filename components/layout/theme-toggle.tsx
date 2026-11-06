'use client'

import { AltArrowDownIcon } from '@solar-icons/react/linear/alt-arrow-down'
import { Suspense } from 'react'
import { useSyncExternalStore } from 'react'
import { AppIcon } from '@/components/icons/app-icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { controlItemClass } from '@/lib/control-trigger'
import {
  applyThemePreference,
  readThemePreference,
  subscribeThemePreference,
  type ThemePreference,
} from '@/lib/theme'
import { uiCopy } from '@/lib/ui-copy'
import { useSiteLocale } from '@/lib/use-site-locale'
import { cn } from '@/lib/utils'

function ThemeToggleInner({ className }: { className?: string }) {
  const copy = uiCopy(useSiteLocale())
  const preference = useSyncExternalStore(
    subscribeThemePreference,
    readThemePreference,
    () => 'system' as ThemePreference
  )

  const options: {
    value: ThemePreference
    label: string
    icon: 'devices' | 'sun' | 'moon'
  }[] = [
    { value: 'system', label: copy.themeSystem, icon: 'devices' },
    { value: 'light', label: copy.themeLight, icon: 'sun' },
    { value: 'dark', label: copy.themeDark, icon: 'moon' },
  ]

  const current =
    options.find(option => option.value === preference) ?? options[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(controlItemClass, className)}
        aria-label={`${copy.themeLabel}: ${current.label}. ${copy.themeSelect}`}
        title={`${copy.themeLabel}: ${current.label}`}
      >
        <AppIcon name={current.icon} size={16} strokeWidth={1.75} />
        <span className="hidden sm:inline">{current.label}</span>
        <AltArrowDownIcon
          size={14}
          color="currentColor"
          strokeWidth={1.75}
          className="hidden opacity-70 sm:block"
          aria-hidden
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label={copy.themesAvailable}>
        <DropdownMenuRadioGroup
          value={preference}
          onValueChange={value => {
            applyThemePreference(value as ThemePreference)
          }}
        >
          {options.map(option => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <AppIcon name={option.icon} size={16} strokeWidth={1.75} />
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ThemeToggle({ className }: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div
          className={cn('inline-flex min-h-11 min-w-11', className)}
          aria-hidden
        />
      }
    >
      <ThemeToggleInner className={className} />
    </Suspense>
  )
}
