import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Copyright() {
  return (
    <footer className="mt-auto flex items-center gap-x-1 text-xs">
      <span className="text-sky-500">&copy; {new Date().getFullYear()}</span>
      <span className="text-muted-foreground">developed by</span>
      <Button asChild variant="link" size="sm" className="px-0 underline">
        <Link href="https://github.com/joaovlsousa" target="_blank">
          joaovlsousa
        </Link>
      </Button>
    </footer>
  )
}
