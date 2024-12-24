"use server";

import apiClient from "@/api/client";
import { revalidateTag } from "next/cache";

export async function deleteCategoryAction(categoryId: string) {
  const { error } = await apiClient.DELETE("/api/categories/{id}", {
    params: {
      path: {
        id: categoryId,
      }
    }
  });

  if (error) {
    return { error: error.title };
  }

  revalidateTag("categories");

  return { success: "Category deleted!" };
}
