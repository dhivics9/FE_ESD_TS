import { z } from "zod";

export const memberSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  role: z.string().nonempty({ message: "Role is required" }),
  status: z.string().nonempty({ message: "Status is required" }),
});