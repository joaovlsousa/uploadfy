import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { ChevronRight, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { Projects } from './_components/projects'

export default function Home() {
  return (
    <main className="space-y-10">
      <header>
        <Title>Home</Title>
        <Description>Bem vindo ao painel de projetos</Description>
      </header>
      <section>
        <Card className="md:w-fit border-dotted border-foreground">
          <CardHeader>
            <Title className="text-base font-medium">
              Que tal adicionar mais um projeto na sua coleção?
            </Title>
            <Description>Salve agora o seu mais novo projeto</Description>
          </CardHeader>
          <CardFooter className="justify-between">
            <Button asChild>
              <Link href="/new">
                <PlusCircle className="size-4 mr-2" />
                Adicionar projeto na coleção
              </Link>
            </Button>
            <Button asChild variant="link" size="sm" className="px-0">
              <Link href="/projects">
                Ver coleção
                <ChevronRight className="size-3" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
      <section>
        <Title>Principais projetos</Title>
        <Description>
          Estes são os projetos em destaque no seu portfólio
        </Description>

        <Suspense fallback={<p>carregando...</p>}>
          <Projects />
        </Suspense>
      </section>
    </main>
  )
}
