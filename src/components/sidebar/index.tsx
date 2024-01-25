import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { NavLinks } from '@/components/sidebar/nav-links'
import { Separator } from '@/components/ui/separator'

import { Copyright } from '@/components/copyright'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isMobile?: boolean
}

export function Sidebar({ isMobile }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col',
        !isMobile &&
          'hidden lg:flex fixed top-0 left-0 w-72 h-full p-4 border-r',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        {!isMobile && <ModeToggle />}
      </div>

      <Separator className="my-3" />
      <NavLinks />
      <div
        className={cn(
          isMobile ? 'absolute bottom-4 left-10' : 'mt-auto mx-auto',
        )}
      >
        <Copyright />
      </div>
    </aside>
  )
}
