import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { UploadImageForm } from './_components/upload-image-form'

export default function UploadImagePage() {
  const accessToken = cookies().get('access_token')?.value as string

  return (
    <div className="w-full max-w-lg space-y-10">
      <header className="flex gap-x-3">
        <Button asChild variant="ghost" size="icon">
          <Link href="/projects">
            <ChevronLeft className="size-6" />
          </Link>
        </Button>
        <div>
          <Title>Upload de imagem</Title>
          <Description>Faça upload de uma imagem do projeto</Description>
        </div>
      </header>
      <UploadImageForm accessToken={accessToken} />
    </div>
  )
}
