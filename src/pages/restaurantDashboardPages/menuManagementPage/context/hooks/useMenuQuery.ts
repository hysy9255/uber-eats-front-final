import { useCallback } from "react";
import { getToken } from "../../../../../shared/utils/getToken";
import { useRestaurantDashboard } from "../../../shared/context/useRestaurantDashboard";
import { getOwnerDishSummaries } from "../../api/dish/getOwnerDishSummaries/getOwnerDishSummaries";
import { getDishCategories } from "../../api/category/getDishCategories/getDishCategories";

export const useMenuQuery = () => {
  const { restaurantId } = useRestaurantDashboard();
  const token = getToken();

  const loadMenuData = useCallback(async () => {
    try {
      if (!token || !restaurantId) return;

      return await getOwnerDishSummaries(restaurantId, token);
    } catch (error) {
      console.error(error);
      throw new Error("Error loading menu");
    }
  }, [token, restaurantId]);

  const loadCategoriesData = useCallback(async () => {
    try {
      if (!token || !restaurantId) return;

      return await getDishCategories(restaurantId, token);
    } catch (error) {
      console.error(error);
      throw new Error("Error loading categories");
    }
  }, [token, restaurantId]);

  return { loadMenuData, loadCategoriesData };
};
