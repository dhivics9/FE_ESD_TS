import { z } from "zod";

// Create the Zod schema based on the provided JSON object
export const productSchema = z.object({
  member: z
    .string()
    .refine((val) => val !== "-", { message: "Please select a member" }),
  product: z.string().nonempty({ message: "Product is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  on_development: z
    .string()
    .nonempty({ message: "Development status is required" }),
});
