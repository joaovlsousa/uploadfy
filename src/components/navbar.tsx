import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { MobileSidebar } from '@/components/sidebar/mobile-sidebar'

export function Navbar() {
  return (
    <header className="lg:hidden h-16 px-4 border-b flex items-center justify-between">
      <MobileSidebar />
      <Logo />
      <ModeToggle />
    </header>
  )
}
