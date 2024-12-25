"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import { Habit } from "@/types/habit";
import IconMenu from "@/components/icon-menu";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { HabitForm } from "./habit-form";
import { ResponsiveAlertDialog } from "@/components/responsive-alert-dialog";
import { deleteHabitAction } from "../actions/delete-habit";

type HabitDropdownMenuProps = {
  habit: Habit;
};

export function HabitDropdownMenu({ habit }: HabitDropdownMenuProps) {
  const [isEdit, setIsEditOpen] = useState(false);
  const [isDelete, setIsDeleteOpen] = useState(false);

  return (
    <>
      <ResponsiveDialog
        isOpen={isEdit}
        setIsOpen={setIsEditOpen}
        title="Update habit"
      >
        <HabitForm
          defaultValues={habit}
          onSuccess={() => setIsEditOpen(false)}
        />
      </ResponsiveDialog>
      <ResponsiveAlertDialog
        isOpen={isDelete}
        setIsOpen={setIsDeleteOpen}
        onCancel={() => setIsDeleteOpen(false)}
        handleContinue={() => deleteHabitAction(habit.id)}
      />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className="p-3 flex flex-col items-start w-full"
        >
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsEditOpen(true);
              }}
              className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <IconMenu text="Edit" icon={<SquarePen className="h-4 w-4" />} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsDeleteOpen(true);
              }}
              className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <IconMenu text="Delete" icon={<Trash className="h-4 w-4" />} />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
