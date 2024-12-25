"use server";

import apiClient from "@/api/client";
import { NewPassword } from "@/types/auth";

export async function updatePasswordAction(values: NewPassword) {
  const { error } = await apiClient.PUT("/api/account/change-password", {
    body: {
      currentPassword: values.oldPassword,
      newPassword: values.confirmPassword,
    }
  })

  if (error) {
    return { error: error.title };
  }

  return { success: "Your password updated!" };
}
