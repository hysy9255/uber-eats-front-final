import { useCallback } from "react";
import { getToken } from "../../../../shared/utils/getToken";
import { useRestaurantDashboard } from "../../shared/context/useRestaurantDashboard";
import { getRestaurantHours } from "../api/getRestaurantHours/getRestaurantHours";
import { updateRestaurantHours } from "../api/updateRestaurantHours/updateRestaurantHours";
import type { UpdateRestaurantHoursDTO } from "../api/updateRestaurantHours/updateRestaurantHours.dto";

export const useRestaurantHoursData = () => {
  const token = getToken();

  const { restaurantId } = useRestaurantDashboard();

  const loadOperatingHours = useCallback(async () => {
    try {
      if (!restaurantId) throw new Error("No restaurant ID found");
      return await getRestaurantHours(restaurantId); // Replace with actual restaurant ID
    } catch (e) {
      console.error(e);
      throw new Error("Error Loading Operating Hours");
    }
  }, [restaurantId]);

  const updateOperatingHours = async (payload: UpdateRestaurantHoursDTO[]) => {
    try {
      if (!token) throw new Error("No token found");
      if (!restaurantId) throw new Error("No restaurant ID found");

      await updateRestaurantHours(token, restaurantId, payload);
    } catch (e) {
      console.error(e);
      throw new Error("Error Updating Operating Hours");
    }
  };

  return { loadOperatingHours, updateOperatingHours };
};
