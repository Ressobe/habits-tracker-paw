"use server";

import apiClient from "@/api/client";

export async function getCategories() {
  const { data } = await apiClient.GET("/api/categories", {
    next: {
      tags: ["categories"]
    }
  });

  return data;
}
