import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductsTable } from "@/components/products-table";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance">Products</h1>
            <p className="text-muted-foreground mt-2">
              Manage your product inventory
            </p>
          </div>
          <Button asChild>
            <Link href="/add-product">Add Product</Link>
          </Button>
        </div>

        <ProductsTable />
      </div>
    </div>
  );
}
