import apiClient from "../client";

export async function getUserInfo() {
  return await apiClient.GET("/me", {
    next: {
      tags: ["user-info"],
    },
  });
}
