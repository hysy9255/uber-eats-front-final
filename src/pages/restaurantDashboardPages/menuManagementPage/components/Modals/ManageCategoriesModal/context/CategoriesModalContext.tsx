import { createContext } from "react";
import type { DishCategoryDTO } from "../../../../api/category/getDishCategories/dishCategory.dto";

type CategoriesModalContextValue = {
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  openAddModal: () => void;
  openEditModal: (categoryToEdit: DishCategoryDTO) => void;
  openDeleteModal: (categoryToDelete: DishCategoryDTO) => void;
  closeAddModal: () => void;
  closeEditModal: () => void;
  closeDeleteModal: () => void;
  categoryToEdit: DishCategoryDTO | null;
  categoryToDelete: DishCategoryDTO | null;
};

export const CategoriesModalContext =
  createContext<CategoriesModalContextValue | null>(null);
