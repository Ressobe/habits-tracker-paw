import apiClient from "@/api/client";

export async function getHabit(habitId: string) {
  return await apiClient.GET("/api/habits/{id}", {
    params: {
      path: {
        id: habitId,
      },
    },
  });
}
