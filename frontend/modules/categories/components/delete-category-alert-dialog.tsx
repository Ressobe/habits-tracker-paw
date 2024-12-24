"use client";

import { Category } from "@/types/category";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteCategoryAction } from "../actions/delete-category";
import { useToast } from "@/hooks/use-toast";
import { SucessToastMessage } from "@/components/sucess-toast-message";
import { ErrorToastMessage } from "@/components/error-toast-message";

type DeleteCategoryAlertDialogProps = {
  category: Category;
};

export function DeleteCategoryAlertDialog({ category }: DeleteCategoryAlertDialogProps) {
  const { toast } = useToast();

  const handleAction = async () => {
    const response = await deleteCategoryAction(category.id);
    if (response.success) {
      toast({
        description: <SucessToastMessage message={response.success} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
    if (response.error) {
      toast({
        description: <ErrorToastMessage message={response.error} />,
        className: "bg-secondary opacity-90",
        duration: 2000,
      });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your {category.name} (category)
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAction}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
