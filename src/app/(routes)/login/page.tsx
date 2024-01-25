import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Copyright } from '@/components/copyright'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LoginForm } from './_components/login-form'

export default async function AuthPage() {
  const accessToken = cookies().get('access_token')

  if (accessToken) {
    redirect('/')
  }

  return (
    <div className="h-screen flex items-center">
      <div className="w-full h-full md:flex flex-col items-stretch p-10 hidden bg-muted border-l">
        <Logo />
        <Copyright />
      </div>
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="absolute top-10 right-10">
          <ModeToggle />
        </div>
        <Card className="w-full md:w-96 border-0 space-y-4 bg-background shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              Acesse o painel de projetos
            </CardTitle>
            <CardDescription>
              Faça login para acessar seus projetos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
