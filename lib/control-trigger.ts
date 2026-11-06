import { focusRingClass, touchTargetClass } from '@/lib/focus'

export const controlTriggerClass = [
  touchTargetClass,
  focusRingClass,
  'bg-aib-surface text-aib-fg dark:bg-aib-surface-muted-dark dark:text-aib-fg-inverse',
].join(' ')
