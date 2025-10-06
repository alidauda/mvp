import { NextResponse } from "next/server"

// Mock data store - replace with your actual database
const products: any[] = []

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const newProduct = {
      _id: Date.now().toString(),
      ...body,
      ownerId: "user_123", // Replace with actual user ID from auth
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
