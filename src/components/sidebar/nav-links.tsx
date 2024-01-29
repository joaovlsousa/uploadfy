'use client'

import { HomeIcon, LayersIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LogoutButton } from '@/components/logout-button'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NavLinks() {
  const pathname = usePathname()

  const links = [
    {
      label: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'Projetos',
      href: '/projects',
      icon: LayersIcon,
    },
  ]

  return (
    <nav className="space-y-1.5">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="ghost"
          className={cn(
            'w-full hover:bg-sky-700/15 justify-start group',
            pathname === link.href && 'bg-sky-700/15',
          )}
        >
          <Link href={link.href}>
            <link.icon
              className={cn(
                'size-4 mr-2 group-hover:text-sky-500',
                pathname === link.href && 'text-sky-500',
              )}
            />
            <p>{link.label}</p>
          </Link>
        </Button>
      ))}

      <LogoutButton />
    </nav>
  )
}
