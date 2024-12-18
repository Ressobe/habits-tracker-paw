"use server";

import { NewHabit } from "@/types/habit";
import createHabit from "../api/create-habit";

export async function createHabitAction(values: NewHabit) {
  const { error } = await createHabit(values);

  console.log(values);

  if (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  return { sucess: "Habit created" };
}
