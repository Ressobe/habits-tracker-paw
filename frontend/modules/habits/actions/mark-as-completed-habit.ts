'use server';

import apiClient from "@/api/client";
import { revalidateTag } from "next/cache";

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

  revalidateTag("habits");

  return { success: "Habit completed!" };
}
