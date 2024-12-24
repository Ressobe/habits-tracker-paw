"use server";

import apiClient from "@/api/client";
import { CreateCategory } from "@/types/category";
import { revalidateTag } from "next/cache";

export async function createCategoryAction(values: CreateCategory) {
  const { error } = await apiClient.POST("/api/categories", {
    body: {
      name: values.name
    }
  });

  if (error) {
    return { error: error.title };
  }

  revalidateTag("categories");

  return { success: "Category created!" };
}
