import { AddProductForm } from "@/components/add-product-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance">Add New Product</h1>
          <p className="text-muted-foreground mt-2">
            Fill in the details to add a new product to your inventory
          </p>
        </div>

        <AddProductForm />
      </div>
    </div>
  );
}
