import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export type Login = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    email: z.string().email({
      message: "Email is required",
    }),
    name: z.string().min(1, {
      message: "Name is required",
    }),
    firstName: z.string().min(1, {
      message: "First name is required",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required",
    }),
    password: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type Register = z.infer<typeof registerSchema>;

export const newPasswordSchema = z
  .object({
    oldPassword: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
    password: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type NewPassword = z.infer<typeof newPasswordSchema>;
