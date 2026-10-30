import { useCallback, useEffect, useMemo, useState } from "react";
import type { MenuTab } from "../../constants/tabs";
import type { MenuSortType } from "../../components/MenuToolBar/components/MenuSortDropdown/menuSortType";
import type { OwnerDishSummaryDTO } from "../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { DishCategoryDTO } from "../../api/category/getDishCategories/dishCategory.dto";
import { useMenuQuery } from "./useMenuQuery";
import { filterMenuForDisplay } from "../../utils/filterMenuForDisplay";
import { sortMenuForDisplay } from "../../utils/sortMenuForDisplay";

export const useMenuList = () => {
  const { loadMenuData, loadCategoriesData } = useMenuQuery();

  const [menu, setMenu] = useState<OwnerDishSummaryDTO[]>([]);
  const [categories, setCategories] = useState<DishCategoryDTO[]>([]);
  const [currentTab, setCurrentTab] = useState<MenuTab>("all");
  const [currentCategory, setCurrentCategory] = useState("");
  const [selectedSortOption, setSelectedSortOption] =
    useState<MenuSortType | null>(null);

  const loadMenu = useCallback(async () => {
    const menuData = await loadMenuData();
    if (!menuData) return;
    setMenu(menuData);
  }, [loadMenuData]);

  const loadCategories = useCallback(async () => {
    const categoriesData = await loadCategoriesData();
    if (!categoriesData) return;
    setCategories(categoriesData);
  }, [loadCategoriesData]);

  useEffect(() => {
    const loadData = async () => {
      loadMenu();
      loadCategories();
    };

    loadData();
  }, [loadMenu, loadCategories]);

  const filteredMenus = useMemo(
    () => filterMenuForDisplay(menu, currentCategory, currentTab),
    [menu, currentCategory, currentTab]
  );

  const displayMenus = useMemo(
    () => sortMenuForDisplay(filteredMenus, selectedSortOption),
    [filteredMenus, selectedSortOption]
  );

  return {
    currentTab,
    setCurrentTab,
    currentCategory,
    setCurrentCategory,
    selectedSortOption,
    setSelectedSortOption,
    displayMenus,
    categories,
    loadMenu,
    loadCategories,
  };
};
