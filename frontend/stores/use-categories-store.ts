import { Category } from "@/types/category";
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type Set<T> = (fn: (state: T) => Partial<T>) => void;

type StateCategoriesStore = {
  categories: Category[];
};

type ActionsCategoriesStore = {
  setCategories: (newCategories: Category[]) => void;
};

type CategoriesStore = StateCategoriesStore & ActionsCategoriesStore;

const initialSate: StateCategoriesStore = {
  categories: [],
};

export const categoriesStore = (
  set: Set<CategoriesStore>,
): CategoriesStore => ({
  ...initialSate,

  setCategories: (newCategories: Category[]) => {
    set(() => ({
      categories: [...newCategories],
    }));
  },
});

export const useCategoriesStore = create(
  persist(devtools(categoriesStore), {
    name: "categories",
    storage: createJSONStorage(() => sessionStorage),
  }),
);
