import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  console.log('request url', req.url)
  console.log('pathname', req.nextUrl.pathname)
  console.log('basePath', req.nextUrl.basePath)
  return NextResponse.next()
}