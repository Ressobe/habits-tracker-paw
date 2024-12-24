import { Category } from "@/types/category";
import { EditCategoryForm } from "./edit-category-form";
import { DeleteCategoryAlertDialog } from "./delete-category-alert-dialog";

type CategoryItemProps = {
  category: Category;
};

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <li className="w-full flex items-center">
      <EditCategoryForm category={category} />
      <DeleteCategoryAlertDialog category={category} />
    </li>
  );
}
