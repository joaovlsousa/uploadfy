'use client'

import { LogOut } from 'lucide-react'
import { useTransition } from 'react'

import { logout } from '@/actions/logout'
import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  async function handleLogout() {
    startTransition(async () => {
      await logout()

      router.replace('/login')
    })
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={pending}
      variant="ghost"
      className="w-full hover:bg-sky-700/15 justify-start group disabled:bg-red-500/20"
    >
      {!pending && (
        <>
          <LogOut className="size-4 mr-2 group-hover:text-sky-500" />
          Encerrar seção
        </>
      )}

      {pending && <Loader message="Saindo..." />}
    </Button>
  )
}
