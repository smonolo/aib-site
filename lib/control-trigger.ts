import { focusRingClass, touchTargetClass } from '@/lib/focus'

export const controlTriggerClass = [
  touchTargetClass,
  focusRingClass,
  'border border-aib-border bg-aib-surface text-aib-fg dark:border-aib-border-dark dark:bg-aib-surface-muted-dark dark:text-aib-fg-inverse',
].join(' ')
