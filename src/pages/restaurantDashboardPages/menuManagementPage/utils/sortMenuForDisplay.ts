import type { OwnerDishSummaryDTO } from "../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { MenuSortType } from "../components/MenuToolBar/components/MenuSortDropdown/menuSortType";

export const sortMenuForDisplay = (
  menu: OwnerDishSummaryDTO[],
  selectedSortOption: MenuSortType | null
) => {
  return [...menu].sort((a, b) => {
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
};
