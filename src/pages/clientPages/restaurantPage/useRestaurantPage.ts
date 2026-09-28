import { useCallback, useEffect, useState } from "react";
import { extractUniqueCategories } from "./utils/extractUniqueCategories";
import { getDayOfWeek } from "./utils/getDayOfWeek";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "./api/getRestaurantDetail";
import type { DishSummaryDTO } from "../dishPage/api/getDishSummaries/dishSummary.dto";
import { getDishSummaries } from "../dishPage/api/getDishSummaries/getDishSummaries";
import type { RestaurantDetailDTO } from "./api/restaurantDetail.dto";
import type { RestaurantHoursDTO } from "../../restaurantDashboardPages/RestaurantHoursPage/api/getRestaurantHours/restaurantHours.dto";
import { getRestaurantHours } from "../../restaurantDashboardPages/RestaurantHoursPage/api/getRestaurantHours/getRestaurantHours";

export const useRestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantDetailDTO>();
  const [menu, setMenu] = useState<DishSummaryDTO[]>([]);
  const [operatingHours, setOperatingHours] = useState<RestaurantHoursDTO[]>(
    []
  );
  const [operatingHoursPopUpOpen, setOperatingHoursPopUpOpen] = useState(false);

  const loadRestaurantViewData = useCallback(async () => {
    if (!restaurantId) return;

    try {
      const [restaurantDetailData, menuData, hoursData] = await Promise.all([
        getRestaurantDetail(restaurantId),
        getDishSummaries(restaurantId),
        getRestaurantHours(restaurantId),
      ]);

      setRestaurantDetail(restaurantDetailData);
      setMenu(menuData);
      setOperatingHours(hoursData);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load restaurant view data");
    }
  }, [restaurantId]);

  useEffect(() => {
    loadRestaurantViewData();
  }, [loadRestaurantViewData]);

  const today = getDayOfWeek(new Date());
  const todayHours = operatingHours.find((day) => day.dayOfWeek === today);

  const popularMenus = menu.slice(0, 6);

  const finalMenu = [
    ...popularMenus.map((dish) => ({ ...dish, category: "popular" })),
    ...menu,
  ];

  const categories = extractUniqueCategories(
    finalMenu.map((dish) => dish.category)
  );

  const handleClickOperatingHours = () => setOperatingHoursPopUpOpen(true);
  const handleClickCloseOperatingHours = () =>
    setOperatingHoursPopUpOpen(false);

  return {
    restaurantDetail,
    finalMenu,
    categories,
    operatingHours,
    todayHours,
    operatingHoursPopUpOpen,
    handleClickOperatingHours,
    handleClickCloseOperatingHours,
  };
};
