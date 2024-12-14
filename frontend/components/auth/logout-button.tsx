"use client";

import { logoutAction } from "@/actions/logout";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const handleClick = async () => {
    await logoutAction();
  };

  return <Button onClick={handleClick}>Logout</Button>;
}
