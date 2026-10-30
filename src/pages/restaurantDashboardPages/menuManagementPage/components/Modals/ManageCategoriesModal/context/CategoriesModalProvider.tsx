import { useState, type ReactNode } from "react";
import { CategoriesModalContext } from "./CategoriesModalContext";
import type { DishCategoryDTO } from "../../../../api/category/getDishCategories/dishCategory.dto";

interface CategoriesModalProviderProps {
  children: ReactNode;
}

export const CategoriesModalProvider = ({
  children,
}: CategoriesModalProviderProps) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const [categoryToEdit, setCategoryToEdit] = useState<DishCategoryDTO | null>(
    null
  );
  const [categoryToDelete, setCategoryToDelete] =
    useState<DishCategoryDTO | null>(null);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (categoryToEdit: DishCategoryDTO) => {
    setCategoryToEdit(categoryToEdit);
  };

  const closeEditModal = () => {
    setCategoryToEdit(null);
  };

  const isEditModalOpen = categoryToEdit !== null;

  const openDeleteModal = (categoryToDelete: DishCategoryDTO) => {
    setCategoryToDelete(categoryToDelete);
  };

  const closeDeleteModal = () => {
    setCategoryToDelete(null);
  };

  const isDeleteModalOpen = categoryToDelete !== null;

  return (
    <CategoriesModalContext.Provider
      value={{
        isAddModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,
        openAddModal,
        openEditModal,
        openDeleteModal,
        closeAddModal,
        closeEditModal,
        closeDeleteModal,
        categoryToEdit,
        categoryToDelete,
      }}
    >
      {children}
    </CategoriesModalContext.Provider>
  );
};
