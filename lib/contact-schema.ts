import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required"),
  phone: z
    .string()
    .trim()
    .max(40)
    .transform((s) => (s.length ? s : undefined)),
  company: z
    .string()
    .trim()
    .max(120)
    .transform((s) => (s.length ? s : undefined)),
  serviceInterest: z.string().trim().min(1, "Select a service").max(80),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactPayload = z.infer<typeof contactSchema>;
