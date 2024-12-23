"use server";

import apiClient from "../client";

export async function getUserInfo() {
  const { data } = await apiClient.GET("/api/account/me", {
    next: {
      tags: ["user-info"],
    },
  });
  return data;
}
