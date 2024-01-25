import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <HamburgerMenuIcon className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar isMobile />
      </SheetContent>
    </Sheet>
  )
}
