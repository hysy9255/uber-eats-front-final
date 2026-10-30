import { createContext } from "react";
import type { OwnerDishSummaryDTO } from "../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { DishCategoryDTO } from "../api/category/getDishCategories/dishCategory.dto";
import type { MenuSortType } from "../components/MenuToolBar/components/MenuSortDropdown/menuSortType";
import type { MenuTab } from "../constants/tabs";

type MenuManagementContextValue = {
  menuList: {
    currentCategory: string;
    currentTab: MenuTab;
    selectedSortOption: MenuSortType | null;
    setCurrentTab: React.Dispatch<React.SetStateAction<MenuTab>>;
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
    setSelectedSortOption: React.Dispatch<
      React.SetStateAction<MenuSortType | null>
    >;
    displayMenus: OwnerDishSummaryDTO[];
    categories: DishCategoryDTO[];
    loadMenu: () => void;
    loadCategories: () => void;
  };
  successMessage: {
    show: boolean;
    message: string;
    setSuccessMessage: React.Dispatch<
      React.SetStateAction<{
        show: boolean;
        message: string;
      }>
    >;
  };
};

export const MenuManagementContext =
  createContext<MenuManagementContextValue | null>(null);
