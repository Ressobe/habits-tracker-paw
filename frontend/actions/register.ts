"use server";

import apiClient from "@/api/client";
import { Register } from "@/types/auth";
import { cookies } from "next/headers";

export async function registerAction(values: Register) {
  const { data, error } = await apiClient.POST("/register", {
    body: {
      username: values.name,
      email: values.email,
      lastName: values.firstName,
      firstName: values.lastName,
      password: values.password,
    },
  });

  if (error) {
    const errorMessage = Array.isArray(error)
      ? error.map((err) => `${err.description}`).join(", ")
      : `${error}`;
    return { error: `${errorMessage}` };
  }

  if (data?.token) {
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      path: "/",
    });
  }

  return { success: "You are registred!" };
}
