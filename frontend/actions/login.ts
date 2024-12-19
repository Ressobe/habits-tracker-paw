"use server";

import apiClient from "@/api/client";
import { Login } from "@/types/auth";
import { cookies } from "next/headers";

export async function loginAction(values: Login) {
  const { data, error } = await apiClient.POST("/api/account/login", {
    body: {
      username: values.username,
      password: values.password,
    },
  });

  if (error) {
    return { error: `${error}` };
  }

  if (data?.token) {
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      path: "/",
    });
  }

  return { success: "You are logged in!" };
}
