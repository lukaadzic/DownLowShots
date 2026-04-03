import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  sessionType: z.string().min(1, "Please select a session type"),
  preferredDate: z.date().optional(),
  message: z.string().min(10, "Please include a brief message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
