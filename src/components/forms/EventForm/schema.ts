import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(1,  "Name is required"),
  date: z.string().min(1,  "Date is required"),
  detail: z.string().min(1,  "Detail is required"),
  organizer: z.string().min(1,  "Organizer is required"),
});
