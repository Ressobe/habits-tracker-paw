'use server';

import apiClient from "@/api/client";

export async function markAsCompletedHabitAction(habitId: string) {
  const { error } = await apiClient.POST("/api/realizations/{habitId}", {
    params: {
      path: {
        habitId
      }
    }
  });

  if (error) {
    return { error: error.title };
  }

  return { success: "Habit completed!" };
}
