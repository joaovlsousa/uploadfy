import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const accessToken = cookies().get('access_token')?.value

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/projects/:path*', '/new'],
}
