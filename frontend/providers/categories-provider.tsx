'use client';

import { useCategoriesStore } from "@/stores/use-categories-store";
import { Category } from "@/types/category";
import { useEffect } from "react";

type CategoriesProviderProps = {
  children: React.ReactNode;
  categories: Category[] | undefined;
};

export function CategoriesProvider({ children, categories }: CategoriesProviderProps) {
  const setCategories = useCategoriesStore((state) => state.setCategories);

  useEffect(() => {
    setCategories?.(categories ?? []);
  });

  return <>{children}</>;
}
