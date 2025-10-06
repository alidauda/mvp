import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
  products: defineTable({
    name: v.string(),
    ownerId: v.id("users"),
    price: v.number(),
    description: v.string(),
    image: v.string(),
  }),
  invoices: defineTable({
    productId: v.id("products"),
    amount: v.number(),
    status: v.union(v.literal("paid"), v.literal("unpaid")),
  }),
  payments_links: defineTable({
    invoiceId: v.id("invoices"),
    link: v.string(),
    used: v.boolean(),
  }),
  payments_logs: defineTable({
    invoiceId: v.id("invoices"),
    amount: v.number(),
    status: v.union(v.literal("paid"), v.literal("unpaid")),

    transactionId: v.string(),
  }),
});
