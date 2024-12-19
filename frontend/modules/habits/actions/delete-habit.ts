"use server";

import { revalidateTag } from "next/cache";
import { deleteHabit } from "../api/delete-habit";

export async function deleteHabitAction(id: string) {
  const { error } = await deleteHabit(id);

  if (error) {
    return { error: "Something went wrong!" };
  }

  revalidateTag("habits");

  return { success: "Habit deleted!" };
}
