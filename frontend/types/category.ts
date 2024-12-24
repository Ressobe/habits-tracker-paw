import { z } from "zod";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const createCategorySchema = categorySchema.omit({ id: true });
export type CreateCategory = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = z.object({
  name: z.string().min(3)
});

export type UpdateCategory = z.infer<typeof updateCategorySchema>;
