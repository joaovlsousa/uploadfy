import { Description } from '@/components/description'
import { Title } from '@/components/title'
import { NewProjectForm } from './_components/new-project-form'

export default function NewProjectPage() {
  return (
    <main className="space-y-10">
      <header>
        <Title>Novo projeto</Title>
        <Description>Salve o seu novo projeto na coleção</Description>
      </header>
      <section className="w-full md:max-w-lg">
        <NewProjectForm />
      </section>
    </main>
  )
}
