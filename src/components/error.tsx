import { AlertTriangle } from 'lucide-react'

interface ErrorProps {
  message: string
}

export function Error({ message }: ErrorProps) {
  return (
    <div className="w-full md:max-w-fit flex items-center justify-center p-4 mt-8 rounded-md bg-red-600/20">
      <AlertTriangle className="size-5 mr-2 text-yellow-600" />
      <span className="text-sm text-yellow-600 font-medium">{message}</span>
    </div>
  )
}
