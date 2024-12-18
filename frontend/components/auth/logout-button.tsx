"use client";

import { logoutAction } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const handleClick = async () => {
    await logoutAction();
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <LogOut />
      <span>Logout</span>
    </Button>
  );
}
