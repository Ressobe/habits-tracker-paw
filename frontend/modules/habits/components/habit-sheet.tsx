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

export function HabitSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center" variant="outline">
          <Plus />
          <span>Add Habit</span>
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
        <HabitForm />
      </SheetContent>
    </Sheet>
  );
}
