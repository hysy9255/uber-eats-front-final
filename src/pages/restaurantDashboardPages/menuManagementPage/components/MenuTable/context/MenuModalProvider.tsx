import { useState, type ReactNode } from "react";
import { MenuModalContext } from "./MenuModalContext";
import type { OwnerDishSummaryDTO } from "../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";

interface MenuItemsModalProviderProps {
  children: ReactNode;
}

export const MenuModalProvider = ({
  children,
}: MenuItemsModalProviderProps) => {
  const [isAddMenuModalOpen, setIsAddMenuModalOpen] = useState(false);

  const [menuToEdit, setMenuToEdit] = useState<OwnerDishSummaryDTO | null>(
    null
  );

  const [menuToDelete, setMenuToDelete] = useState<OwnerDishSummaryDTO | null>(
    null
  );

  const openAddMenuModal = () => {
    setIsAddMenuModalOpen(true);
  };

  const closeAddMenuModal = () => {
    setIsAddMenuModalOpen(false);
  };

  const openEditMenuModal = (menu: OwnerDishSummaryDTO) => {
    setMenuToEdit(menu);
  };

  const closeEditMenuModal = () => {
    setMenuToEdit(null);
  };

  const isEditMenuModalOpen = menuToEdit !== null;

  const openDeleteMenuModal = (menu: OwnerDishSummaryDTO) => {
    setMenuToDelete(menu);
  };

  const closeDeleteMenuModal = () => {
    setMenuToDelete(null);
  };

  const isDeleteMenuModalOpen = menuToDelete !== null;

  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  const openCategoriesModal = () => {
    setIsCategoriesModalOpen(true);
  };

  const closeCategoriesModal = () => {
    setIsCategoriesModalOpen(false);
  };

  return (
    <MenuModalContext.Provider
      value={{
        isAddMenuModalOpen,
        openAddMenuModal,
        closeAddMenuModal,
        menuToEdit,
        isEditMenuModalOpen,
        openEditMenuModal,
        closeEditMenuModal,
        menuToDelete,
        isDeleteMenuModalOpen,
        openDeleteMenuModal,
        closeDeleteMenuModal,
        isCategoriesModalOpen,
        openCategoriesModal,
        closeCategoriesModal,
      }}
    >
      {children}
    </MenuModalContext.Provider>
  );
};
