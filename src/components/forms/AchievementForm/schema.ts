import { z } from "zod";

// Create the Zod schema based on the Achievement interface
export const achievementSchema = z.object({
  member_id: z.string().nonempty({ message: "Member ID is required" }),
  achievement: z.string().nonempty({ message: "Achievement is required" }),
  image: z.instanceof(File).optional(),
});