import apiClient from "@/api/client";
import { NewHabit } from "@/types/habit";

export default async function createHabit(values: NewHabit) {
  return await apiClient.POST("/api/habits", {
    body: {
      name: values.name,
      priority: values.priority,
      description: values.description,
    },
  });
}
