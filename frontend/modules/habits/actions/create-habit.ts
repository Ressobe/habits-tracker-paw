"use server";

import { NewHabit } from "@/types/habit";
import createHabit from "../api/create-habit";
import { revalidateTag } from "next/cache";

export async function createHabitAction(values: NewHabit) {
  const { error } = await createHabit(values);

  if (error) {
    return { error: error.title };
  }

  revalidateTag("habits");

  return { success: "Habit created" };
}
