import type { OwnerDishSummaryDTO } from "../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { MenuTab } from "../constants/tabs";

export const filterMenuForDisplay = (
  menu: OwnerDishSummaryDTO[],
  currentCategory: string,
  currentTab: MenuTab
) => {
  return menu.filter((item) => {
    const matchesCategory =
      currentCategory === "" || item.category === currentCategory;

    const activeFilter = currentTab === "active" && item.isAvailable === true;
    const inactiveFilter =
      currentTab === "inactive" && item.isAvailable === false;

    const matchesTab = currentTab === "all" || activeFilter || inactiveFilter;

    return matchesCategory && matchesTab;
  });
};
