import { Loader2 } from 'lucide-react'

interface LoaderProps {
  message?: string
}

export function Loader({ message }: LoaderProps) {
  return (
    <div className="flex items-center gap-x-3">
      <Loader2 className="size-4 animate-spin" />
      <span>{message}</span>
    </div>
  )
}
