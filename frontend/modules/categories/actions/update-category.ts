"use server";

import apiClient from "@/api/client";
import { UpdateCategory } from "@/types/category";
import { revalidateTag } from "next/cache";

export async function updateCategoryAction(categoryId: string, values: UpdateCategory) {
  const { error } = await apiClient.PUT("/api/categories/{id}", {
    params: {
      path: {
        id: categoryId,
      }
    },
    body: {
      name: values.name,
    }
  });
  if (error) {
    return { error: error.title };
  }

  revalidateTag("categories");

  return { success: "Category updated!" };
}
