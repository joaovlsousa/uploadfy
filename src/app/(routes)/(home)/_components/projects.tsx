import { getPinnedProjects } from '@/actions/get-pinned-projects'
import { Error } from '@/components/error'
import { Project, ProjectSkeleton } from '@/components/project'

export async function Projects() {
  const { data, error } = await getPinnedProjects()

  if (error) {
    return <Error message="Não foi possível carregar seus projetos" />
  }

  if (!data?.projects.length) {
    return <Error message="Sua coleção está vazia" />
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {data?.projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
    </div>
  )
}
