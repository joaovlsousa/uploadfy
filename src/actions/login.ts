'use server'

import { cookies } from 'next/headers'

import { api } from '@/lib/api'

export interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  accessToken: string | null
}

export interface LoginReturn {
  success: string | null
  error: string | null
}

export async function login(payload: LoginRequest): Promise<LoginReturn> {
  try {
    const res = await api.post('/login', payload)

    const { accessToken } = res.data as LoginResponse

    if (!accessToken) {
      return { success: null, error: 'Algo deu errado' }
    }

    cookies().set('access_token', accessToken, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60,
    })

    return { success: 'Successo', error: null }
  } catch {
    return { success: null, error: 'Algo deu errado' }
  }
}
