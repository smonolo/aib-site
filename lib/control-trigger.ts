import { focusRingClass, touchTargetClass } from '@/lib/focus'

export const controlItemClass = [
  touchTargetClass,
  focusRingClass,
  'inline-flex cursor-pointer items-center gap-1 rounded-aib-sm px-2 text-[13px] font-bold tracking-[-0.1px] transition-colors sm:gap-1.5 sm:px-3 sm:text-[14px]',
  'text-aib-muted hover:text-aib-fg dark:text-aib-muted-dark dark:hover:text-aib-fg-inverse',
  'group-data-[nav=overlay]/header:text-white/70 group-data-[nav=overlay]/header:hover:text-white',
  'motion-reduce:transition-none',
].join(' ')
