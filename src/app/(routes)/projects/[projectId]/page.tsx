import { Description } from '@/components/description'
import { Title } from '@/components/title'

export default function ProjectIdPage({
  params,
}: {
  params: { projectId: string }
}) {
  return (
    <div className="w-full max-w-lg space-y-10">
      <header>
        <Title>Ver projeto</Title>
        <Description>Veja os detalhes de seu projeto</Description>
      </header>
      <div></div>
    </div>
  )
}
