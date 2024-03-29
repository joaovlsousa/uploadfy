'use server'

import { api } from '@/lib/api'
import { cookies } from 'next/headers'

interface APIResponse {
  projects: {
    id: string
    title: string
    description: string
    pinned: boolean
    githubUrl: string
    deployUrl: string | null
    imageUrl: string | null
  }[]
}

interface GetPinnedProjectsReturn {
  data: APIResponse | null
  error: string | null
}

export async function getPinnedProjects(): Promise<GetPinnedProjectsReturn> {
  try {
    const accessToken = cookies().get('access_token')?.value

    if (!accessToken) {
      throw new Error('Unauthorized')
    }

    const res = await api.get('/project/pinned', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const { projects } = res.data as APIResponse

    return { data: { projects }, error: null }
  } catch (error) {
    return { data: null, error: 'Algo deu errado' }
  }
}
