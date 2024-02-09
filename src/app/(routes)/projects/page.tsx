import { Suspense } from 'react'

import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { AllProjects, AllProjectsSkeleton } from './_components/all-projects'

export default function Projects() {
  return (
    <main className="space-y-10">
      <header>
        <Title>Projetos</Title>
        <Description>Visualize todos os projetos</Description>
      </header>
      <section>
        <Title>Todos os projetos</Title>
        <Description>Esta é a sua coleção de projetos</Description>

        <Suspense fallback={<AllProjectsSkeleton />}>
          <AllProjects />
        </Suspense>
      </section>
    </main>
  )
}
