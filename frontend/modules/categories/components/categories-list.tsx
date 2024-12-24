import { Category } from "@/types/category";
import { CategoryItem } from "./category-item";

type CategoriesListProps = {
  categories: Category[]
};

export function CategoriesList({ categories }: CategoriesListProps) {

  return (
    <ul className="w-full flex flex-col gap-2">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </ul>
  );
}
