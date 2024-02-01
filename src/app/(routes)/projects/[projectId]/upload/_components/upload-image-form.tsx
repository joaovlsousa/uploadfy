'use client'

import { CheckCircle2, Plus } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ChangeEvent, FormEvent, useState, useTransition } from 'react'
import { toast } from 'sonner'

import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { api } from '@/lib/api'
import { cn } from '@/lib/utils'

type UploadStatus = 'start' | 'uploaded' | 'finish'

export function UploadImageForm({ accessToken }: { accessToken: string }) {
  const params = useParams()

  const [isSubmitting, startTransition] = useTransition()
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('start')
  const [file, setFile] = useState<File | null>(null)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files ? e.target.files[0] : null)
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (file) {
      const formDataToUpload = new FormData()

      formDataToUpload.append('file', file)

      startTransition(async () => {
        try {
          const res = await api.post(
            `/upload/${params.projectId}`,
            formDataToUpload,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
              },
              onUploadProgress({ upload }) {
                setUploadStatus(upload ? 'uploaded' : 'start')
              },
            },
          )

          if (res.status === 201) {
            setUploadStatus('finish')
            setFile(null)

            toast.success('Imagem carregada com sucesso')
          }
        } catch (error) {
          toast.error('Algo deu errado')
        }
      })
    }
  }

  const previewUrl = file ? URL.createObjectURL(file) : null
  const progressUpload: number =
    (uploadStatus === 'uploaded' && 50) ||
    (uploadStatus === 'finish' && 100) ||
    0

  return (
    <form onSubmit={onSubmit} className="space-y-4 ml-4">
      <Label
        htmlFor="file"
        className="w-full relative flex flex-col items-center justify-center aspect-video bg-transparent border rounded-md cursor-pointer overflow-hidden"
      >
        {!file && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
            <Plus className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">
              Toque para selecionar uma imagem
            </span>
          </div>
        )}
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview d imagem"
            fill
            quality={100}
            placeholder="blur"
            blurDataURL={previewUrl}
          />
        )}
      </Label>
      <Input
        id="file"
        name="file"
        type="file"
        accept="image/png"
        onChange={handleFile}
        disabled={isSubmitting}
        className="invisible"
      />

      <div className="flex items-center gap-x-2">
        <Progress
          value={progressUpload}
          className="w-4/5 ease-linear transition-colors"
          data-upload={'finish'}
        />
        <CheckCircle2
          className={cn(
            'size-4 text-emerald-500 invisible transition-all',
            uploadStatus === 'finish' && 'visible',
          )}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !file || uploadStatus === 'finish'}
        className="w-full"
      >
        {isSubmitting ? <Loader message="Fazendo upload..." /> : 'Fazer upload'}
      </Button>
    </form>
  )
}
