import apiClient from "@/api/client";

export async function getHabitDetails(habitId: string) {
  return await apiClient.GET("/api/habits/{id}/details", {
    params: {
      path: {
        id: habitId
      }
    },
    next: {
      tags: [`habits-${habitId}`]
    }
  });
}
