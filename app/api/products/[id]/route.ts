import { NextResponse } from "next/server"

// Mock data store - replace with your actual database
let products: any[] = []

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Filter out the product with the matching ID
    const initialLength = products.length
    products = products.filter((p) => p._id !== id)

    if (products.length === initialLength) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
