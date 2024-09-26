import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello, netxt.js!',
  }

  return NextResponse.json(data)
}
