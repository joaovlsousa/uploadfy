'use server'

import { cookies } from 'next/headers'

export async function logout(): Promise<void> {
  cookies().delete('access_token')
}
