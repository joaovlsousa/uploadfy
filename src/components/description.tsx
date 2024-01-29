import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Description({
  className,
  children,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
}
