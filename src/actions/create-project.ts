'use server'

import { api } from '@/lib/api'
import { ProjectSchema } from '@/schemas'
import { cookies } from 'next/headers'

interface APIResponse {
  projectId: string | undefined
}

interface CreateProjectReturn {
  projectId: string | null
  error: string | null
}

export async function createProject(
  payload: ProjectSchema,
): Promise<CreateProjectReturn> {
  try {
    const accessToken = cookies().get('access_token')?.value

    if (!accessToken) {
      throw new Error('Unauthorized')
    }

    const res = await api.post('/project', payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const { projectId } = res.data as APIResponse

    if (!projectId) {
      throw new Error('Bad request')
    }

    return { projectId, error: null }
  } catch (error) {
    return { projectId: null, error: 'Algo deu errado' }
  }
}
