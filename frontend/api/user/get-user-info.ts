import apiClient from "../client";

export async function getUserInfo() {
  return await apiClient.GET("/api/account/me", {
    next: {
      tags: ["user-info"],
    },
  });
}
