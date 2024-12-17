import { z } from "zod";
import { categorySchema } from "./category";

export const habitSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  cateogry: categorySchema,
  priority: z.number(),
  createdAt: z.date(),
});

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

export type Habit = z.infer<typeof habitSchema>;
