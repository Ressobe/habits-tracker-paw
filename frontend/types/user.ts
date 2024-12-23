import { z } from "zod";

export const updateUserSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
});

export type UpdateUser = z.infer<typeof updateUserSchema>;

export const userSchema = z.object({
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export type User = z.infer<typeof userSchema>;
