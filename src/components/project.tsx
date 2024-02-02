import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { CodeSquare, MousePointerSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface ProjectProps {
  id: string
  title: string
  description: string
  imageUrl: string | null
  githubUrl: string
  deployUrl: string | null
}

export function Project({
  description,
  githubUrl,
  imageUrl,
  title,
  deployUrl,
  id,
}: ProjectProps) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={imageUrl ?? '/not-found.jpg'}
          alt={title}
          placeholder="blur"
          blurDataURL={imageUrl ?? '/not-found.jpg'}
          quality={100}
          width={1280}
          height={720}
          className="w-full aspect-video rounded-md"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <Title className="text-lg">{title}</Title>
        <Description>{description}</Description>
      </CardContent>
      <CardFooter className="gap-x-4">
        {deployUrl && (
          <Button asChild variant="outline">
            <Link href={deployUrl} target="_blank">
              <MousePointerSquare className="size-4" />
            </Link>
          </Button>
        )}
        <Button asChild variant="secondary">
          <Link href={githubUrl} target="_blank">
            <GitHubLogoIcon className="size-4" />
          </Link>
        </Button>
        <Button asChild className="w-full">
          <Link href={`/projects/${id}`}>
            <CodeSquare className="size-4 mr-2" />
            Ver projeto
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProjectSkeleton() {
  return (
    <div className="p-6 border rounded-md space-y-2">
      <Skeleton className="aspect-video w-full" />
      <div className="space-y-2">
        <Skeleton className="w-1/2 h-4 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="w-full h-3 rounded-full" />
          <Skeleton className="w-4/5 h-3 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-2">
        <Skeleton className="h-8 w-10 rounded-md" />
        <Skeleton className="h-8 w-10 rounded-md" />
        <Skeleton className="h-8 w-full rounded-md" />
      </div>
    </div>
  )
}
