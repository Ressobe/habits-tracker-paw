"use server";

import apiClient from "@/api/client";
import { UpdateUser } from "@/types/user";
import { revalidateTag } from "next/cache";

export async function updateUserAction(values: UpdateUser) {
  const { response, error } = await apiClient.PUT("/api/account/update-names", {
    body: {
      firstName: values.firstName,
      lastName: values.lastName,
    },
  });

  if (error) {
    return { error: "sss" };
  }

  revalidateTag("user-info");

  console.log(data?.message);

  return { success: "user updated!" };
}
