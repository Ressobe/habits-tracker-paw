"use server";

import apiClient from "@/api/client";
import { NewHabit } from "@/types/habit";
import { revalidatePath, revalidateTag } from "next/cache";

export async function updateHabitAction(habitId: string, values: NewHabit) {
  const { error } = await apiClient.PUT("/api/habits/{id}", {
    params: {
      path: {
        id: habitId,
      },
    },
    body: {
      name: values.name,
      priority: values.priority,
      description: values.description,
    },
  });

  if (error) {
    return { error: "Something went wrong!" };
  }

  revalidateTag("habits");

  return { success: "Habit updated!" };
}
