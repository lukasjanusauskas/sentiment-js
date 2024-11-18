import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    result: Math.floor(Math.random() * 3) - 1
  })
}