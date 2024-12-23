"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { HabitForm } from "./habit-form";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function HabitSheet() {
  const [opened, setOpened] = useState(false);

  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-start w-full" variant="ghost">
          <Plus />
          <span>Create habit</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-6">
        <SheetHeader>
          <SheetTitle className="text-3xl font-bold">Add Habit</SheetTitle>
          <SheetDescription className="p-0">
            Tackle your goals in daily doses
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <HabitForm onSuccess={() => setOpened(false)} />
      </SheetContent>
    </Sheet>
  );
}
