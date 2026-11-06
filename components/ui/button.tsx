import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 border border-transparent text-[14px] font-semibold whitespace-nowrap transition-opacity outline-none select-none focus-visible:ring-2 focus-visible:ring-aib-track-active/50 focus-visible:ring-offset-2 focus-visible:ring-offset-aib-canvas disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 dark:focus-visible:ring-offset-aib-canvas-inverse [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        default:
          'bg-aib-fg text-aib-fg-inverse hover:opacity-70 dark:bg-aib-fg-inverse dark:text-aib-fg',
        secondary:
          'bg-aib-surface-muted text-aib-fg hover:opacity-70 dark:bg-aib-surface-muted-dark dark:text-aib-fg-inverse',
        ghost:
          'bg-transparent text-aib-muted hover:opacity-70 dark:text-aib-muted-dark',
        quiet:
          'justify-start bg-transparent text-aib-track-idle hover:opacity-70 dark:text-aib-track-idle-dark',
        destructive: 'bg-aib-brand text-aib-fg-inverse hover:opacity-70',
      },
      size: {
        default: 'min-h-[52px] rounded-aib px-3',
        sm: 'min-h-11 rounded-aib-sm px-3 text-[13px]',
        xs: 'min-h-11 rounded-aib-sm px-2.5 text-[12px] font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
