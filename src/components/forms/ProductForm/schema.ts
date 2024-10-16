import { z } from "zod";

// Create the Zod schema based on the provided JSON object
export const productSchema = z.object({
  product: z.string().nonempty({ message: "Product is required" }),
  photo: z.string().nonempty({ message: "Photo is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  on_development: z.boolean(),
});