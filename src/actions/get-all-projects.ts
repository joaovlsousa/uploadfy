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

interface GetAllProjectsReturn {
  data: APIResponse | null
  error: string | null
}

export async function getAllProjects(): Promise<GetAllProjectsReturn> {
  try {
    const accessToken = cookies().get('access_token')?.value

    if (!accessToken) {
      throw new Error('Unauthorized')
    }

    const res = await api.get('/project', {
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
