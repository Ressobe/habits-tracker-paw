"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  ArrowRight,
  MoreHorizontal,
  MoreVertical,
  Pencil,
  X,
} from "lucide-react";
import { useState } from "react";
import { Habit } from "@/types/habit";
import { Button } from "@/components/ui/button";

type HabitDropdownMenuProps = {
  habit?: Habit;
  closeCollapse?: () => void;
};

export function HabitDropdownMenu({
  habit,
  closeCollapse,
}: HabitDropdownMenuProps) {
  const [open, setOpen] = useState(false);

  const closeDropdownMenu = () => {
    if (closeCollapse) closeCollapse();
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="p-3 flex flex-col items-start w-full"
      >
        <Button variant="ghost" className="w-full">
          <ArrowRight /> Skip
        </Button>
        <Button variant="ghost" className="w-full">
          <X /> Fail
        </Button>
        <Button variant="ghost" className="w-full">
          <Pencil /> Edit
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
