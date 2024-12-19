import { z } from "zod";
import { categorySchema } from "./category";

export const habitSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: categorySchema,
  priority: z.number(),
  createdAt: z.date(),
});
export type Habit = z.infer<typeof habitSchema>;

export const habitDetailsSchema = z.object({
  id: z.string(),
  currentStreak: z.number(),
  streak: z.number(),
  fail: z.number(),
  realisationDates: z.array(
    z.object({
      date: z.date(),
    }),
  ),
});

export const newHabitSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  description: z.string().optional(),
  // cateogryId: z.number(),
  priority: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === "string" ? parseFloat(val) : val))
    .refine((val) => !isNaN(val), { message: "Must be a valid number" }),
});
export type NewHabit = z.infer<typeof newHabitSchema>;
