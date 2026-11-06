'use client'

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
import { controlTriggerClass } from '@/lib/control-trigger'
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
        className={cn(
          'inline-flex size-11 cursor-pointer items-center justify-center rounded-aib-sm transition-opacity hover:opacity-70',
          controlTriggerClass,
          className
        )}
        aria-label={`${copy.themeLabel}: ${current.label}. ${copy.themeSelect}`}
        title={`${copy.themeLabel}: ${current.label}`}
      >
        <AppIcon name={current.icon} size={18} strokeWidth={1.75} />
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
          className={cn(
            'size-11 rounded-aib-sm bg-aib-surface dark:bg-aib-surface-muted-dark',
            className
          )}
          aria-hidden
        />
      }
    >
      <ThemeToggleInner className={className} />
    </Suspense>
  )
}
