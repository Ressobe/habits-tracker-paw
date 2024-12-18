import { Category } from "@/types/category";
import { EditCategoryForm } from "./edit-category-form";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

type CategoryItemProps = {
  category: Category;
};

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <li className="flex items-center">
      <EditCategoryForm category={category} />
      <Button variant="ghost">
        <Trash />
      </Button>
    </li>
  );
}
