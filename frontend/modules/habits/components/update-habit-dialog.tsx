"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Habit } from "@/types/habit";
import { Pencil } from "lucide-react";
import { HabitForm } from "./habit-form";
import { useState } from "react";

type UpdateHabitDialogProps = {
  habit: Habit;
  onSucess?: () => void;
};

export function UpdateHabitDialog({ habit, onSucess }: UpdateHabitDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full">
          <Pencil />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your {habit.name}</DialogTitle>
        </DialogHeader>
        <HabitForm
          defaultValues={habit}
          onSuccess={() => {
            setOpen(false);
            onSucess?.();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
