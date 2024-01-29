import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Title({ className, children, ...props }: ComponentProps<'h1'>) {
  return (
    <h1 className={cn('text-2xl font-bold', className)} {...props}>
      {children}
    </h1>
  )
}
