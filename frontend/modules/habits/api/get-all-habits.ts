import apiClient from "@/api/client";

export async function getAllHabits() {
  return await apiClient.GET("/api/habits", {
    next: {
      tags: ["habits"],
    },
  });
}
