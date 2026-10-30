import { createContext } from "react";
import type { OwnerDishSummaryDTO } from "../../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";

type MenuModalContextValue = {
  isAddMenuModalOpen: boolean;
  openAddMenuModal: () => void;
  closeAddMenuModal: () => void;
  menuToEdit: OwnerDishSummaryDTO | null;
  isEditMenuModalOpen: boolean;
  openEditMenuModal: (menu: OwnerDishSummaryDTO) => void;
  closeEditMenuModal: () => void;
  menuToDelete: OwnerDishSummaryDTO | null;
  isDeleteMenuModalOpen: boolean;
  openDeleteMenuModal: (menu: OwnerDishSummaryDTO) => void;
  closeDeleteMenuModal: () => void;
  isCategoriesModalOpen: boolean;
  openCategoriesModal: () => void;
  closeCategoriesModal: () => void;
};

export const MenuModalContext = createContext<MenuModalContextValue | null>(
  null
);
