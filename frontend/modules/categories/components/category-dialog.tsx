"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import { CategoryForm } from "./category-form";

type CategoryDialogProps = {
  closeDropdownMenu?: () => void;
};

export function CategoryDialog({ closeDropdownMenu }: CategoryDialogProps) {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    closeDropdownMenu?.();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <Bookmark />
          Create category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create a new <span className="text-orange-500">category</span>
          </DialogTitle>
          <DialogDescription>
            Create a new category for your habits
          </DialogDescription>
        </DialogHeader>
        <CategoryForm />
      </DialogContent>
    </Dialog>
  );
}
