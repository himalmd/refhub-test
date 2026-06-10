import { resend } from '@/lib/resend/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  // TODO: send contact form email via Resend

  return NextResponse.json({ sent: true })
}
