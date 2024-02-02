import { AlertTriangle } from 'lucide-react'

import { getPinnedProjects } from '@/actions/get-pinned-projects'
import { Project, ProjectSkeleton } from '@/components/project'

export async function Projects() {
  const { data, error } = await getPinnedProjects()

  if (error) {
    return (
      <div className="w-full md:max-w-fit flex items-center justify-center p-4 mt-8 rounded-md bg-red-600/20">
        <AlertTriangle className="size-5 mr-2 text-yellow-600" />
        <span className="text-sm text-yellow-600 font-medium">
          Não foi possível carregar seus projetos
        </span>
      </div>
    )
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
