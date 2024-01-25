import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const font = Poppins({
  subsets: ['latin'],
  weight: '700',
})

export function Logo() {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src="/logo.svg"
        alt="logo"
        width={20}
        height={20}
        className="size-5"
      />
      <span className={cn('text-xl font-bold', font.className)}>Uploadfy</span>
    </div>
  )
}
