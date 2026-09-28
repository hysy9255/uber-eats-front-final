import { useCallback, useEffect, useMemo, useState } from "react";
import type { MenuTab } from "./constants/tabs";
import { getOwnerDishSummaries } from "./api/dish/getOwnerDishSummaries/getOwnerDishSummaries";
import type { OwnerDishSummaryDTO } from "./api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { DishCategoryDTO } from "./api/category/getDishCategories/dishCategory.dto";
import type { MenuSortType } from "./components/MenuToolBar/Components/MenuSortDropdown/menuSortType";
import { getDishCategories } from "./api/category/getDishCategories/getDishCategories";
import { useRestaurantDashboard } from "../shared/context/useRestaurantDashboard";
import { getToken } from "../../../shared/utils/getToken";

export const useMenuManagementPage = () => {
  const { restaurantId } = useRestaurantDashboard();

  const token = getToken();

  // =====================
  // Data
  // =====================

  const [menu, setMenu] = useState<OwnerDishSummaryDTO[]>([]);
  const [categories, setCategories] = useState<DishCategoryDTO[]>([]);

  // =====================
  // Filters
  // =====================

  const [currentTab, setCurrentTab] = useState<MenuTab>("all");

  const [currentCategory, setCurrentCategory] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // =====================
  // Dropdown handlers
  // =====================
  const [selectedSortOption, setSelectedSortOption] =
    useState<MenuSortType | null>(null);

  // =====================
  // Modals
  // =====================

  const [addMenuItemModalOpen, setAddMenuItemModalOpen] = useState(false);

  const [isManageCategoriesOpen, setIsManageCategoriesOpen] = useState(false);

  const [targetEditMenuItem, setTargetEditMenuItem] =
    useState<OwnerDishSummaryDTO>();

  const loadMenu = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const menuData = await getOwnerDishSummaries(restaurantId, token);

      setMenu(menuData);
    } catch (error) {
      console.error(error);
      throw new Error("Error loading menu");
    }
  }, [token, restaurantId]);

  const loadCategories = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const categoriesData = await getDishCategories(restaurantId, token);

      setCategories(categoriesData);
    } catch (error) {
      console.error(error);
      throw new Error("Error loading categories");
    }
  }, [token, restaurantId]);

  useEffect(() => {
    void loadMenu();
    void loadCategories();
  }, [loadMenu, loadCategories]);

  // =====================
  // Filtering
  // =====================

  //   const filteredItems = useMemo(() => {
  //     const keyword = searchTerm.trim().toLowerCase();

  //     return menu.filter((item) => {
  //       const matchesCategory =
  //         currentCategory === "" || item.category === currentCategory;

  //       const matchesSearch =
  //         keyword === "" ||
  //         item.name.toLowerCase().includes(keyword) ||
  //         item.category.toLowerCase().includes(keyword);

  //       const matchesTab =
  //         currentTab === "all" ||
  //         (currentTab === "active" && item.status === "Active") ||
  //         (currentTab === "inactive" && item.status === "Inactive") ||
  //         (currentTab === "outOfStock" && item.status === "Out of stock");

  //       return matchesCategory && matchesSearch && matchesTab;
  //     });
  //   }, [menu, currentCategory, searchTerm, currentTab]);

  const filteredItems = useMemo(() => {
    return menu.filter((item) => {
      const matchesCategory =
        currentCategory === "" || item.category === currentCategory;

      const activeFilter = currentTab === "active" && item.isAvailable === true;
      const inactiveFilter =
        currentTab === "inactive" && item.isAvailable === false;

      const matchesTab = currentTab === "all" || activeFilter || inactiveFilter;

      return matchesCategory && matchesTab;
    });
  }, [menu, currentCategory, currentTab]);

  const displayItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (!selectedSortOption) {
        return a.category.localeCompare(b.category);
      }

      switch (selectedSortOption) {
        case "price-asc":
          return a.price - b.price;

        case "price-desc":
          return b.price - a.price;

        case "sold-asc":
          return a.numOfSold - b.numOfSold;

        case "sold-desc":
          return b.numOfSold - a.numOfSold;

        default:
          return 0;
      }
    });
  }, [filteredItems, selectedSortOption]);

  // =====================
  // Modal handlers
  // =====================

  const openAddMenuItemModal = () => {
    setAddMenuItemModalOpen(true);
  };

  const closeAddMenuItemModal = () => {
    setAddMenuItemModalOpen(false);
  };

  const openManageCategoriesModal = () => {
    setIsManageCategoriesOpen(true);
  };

  const closeManageCategoriesModal = () => {
    setIsManageCategoriesOpen(false);
  };

  const openEditMenuItemModal = (item: OwnerDishSummaryDTO) => {
    setTargetEditMenuItem(item);
  };

  const closeEditMenuItemModal = () => {
    setTargetEditMenuItem(undefined);
  };

  return {
    // data
    menu,
    categories,
    displayItems,

    // filters
    currentTab,
    setCurrentTab,

    currentCategory,
    setCurrentCategory,

    searchTerm,
    setSearchTerm,

    // add modal
    addMenuItemModalOpen,
    openAddMenuItemModal,
    closeAddMenuItemModal,

    // categories modal
    isManageCategoriesOpen,
    openManageCategoriesModal,
    closeManageCategoriesModal,

    // edit modal
    targetEditMenuItem,
    openEditMenuItemModal,
    closeEditMenuItemModal,

    // refresh
    loadMenu,
    loadCategories,

    // dropdowns
    selectedSortOption,
    setSelectedSortOption,
  };
};
