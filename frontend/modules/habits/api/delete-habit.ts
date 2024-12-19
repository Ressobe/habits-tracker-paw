import apiClient from "@/api/client";

export async function deleteHabit(id: string) {
  return await apiClient.DELETE("/api/habits/{id}", {
    params: {
      path: {
        id,
      },
    },
  });
}
