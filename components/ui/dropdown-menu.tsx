'use client'

import { Menu as MenuPrimitive } from '@base-ui/react/menu'
import { CheckIcon } from '@solar-icons/react/linear/check'
import { cn } from '@/lib/utils'

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  className,
  align = 'end',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 8,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            'z-50 max-h-(--available-height) min-w-40 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-aib border border-aib-border bg-aib-surface p-1 text-aib-fg shadow-[0_12px_32px_rgba(0,0,0,0.14)] outline-none',
            'dark:border-aib-border-dark dark:bg-aib-surface-dark dark:text-aib-fg-inverse dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)]',
            'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            'motion-reduce:animate-none motion-reduce:transition-none',
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      className={cn(
        'px-2.5 py-1.5 text-[12px] font-medium text-aib-muted dark:text-aib-muted-dark',
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        'flex min-h-11 cursor-pointer touch-manipulation items-center gap-2 rounded-aib-sm px-2.5 py-2.5 text-[13px] font-medium outline-none select-none',
        'focus:bg-aib-surface-muted dark:focus:bg-aib-surface-muted-dark',
        'data-disabled:pointer-events-none data-disabled:opacity-40',
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        'relative flex min-h-11 cursor-pointer touch-manipulation items-center gap-2 rounded-aib-sm py-2.5 pr-8 pl-2.5 text-[13px] font-medium outline-none select-none',
        'focus:bg-aib-surface-muted dark:focus:bg-aib-surface-muted-dark',
        'data-disabled:pointer-events-none data-disabled:opacity-40',
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2.5 flex size-4 items-center justify-center"
        aria-hidden
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon size={16} color="currentColor" strokeWidth={2} />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        'mx-1 my-1 h-px bg-aib-border dark:bg-aib-border-dark',
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
}
