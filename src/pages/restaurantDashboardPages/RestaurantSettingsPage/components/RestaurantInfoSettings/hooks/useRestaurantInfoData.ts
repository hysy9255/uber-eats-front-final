import { useCallback } from "react";
import { getToken } from "../../../../../../shared/utils/getToken";
import { useRestaurantDashboard } from "../../../../shared/context/useRestaurantDashboard";
import { getRestaurantSetting } from "../../../api/getRestaurantSetting/getRestaurantSetting";
import type { UpdateRestaurantSettingDTO } from "../../../api/updateRestaurantSetting/updateRestaurantSetting.dto";
import { updateRestaurantSetting } from "../../../api/updateRestaurantSetting/updateRestaurantSetting";

export const useRestaurantInfoData = () => {
  const token = getToken();
  const { restaurantId } = useRestaurantDashboard();

  const loadRestaurantInfoData = useCallback(async () => {
    try {
      if (!token || !restaurantId) return;
      return await getRestaurantSetting(token, restaurantId);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading profile data");
    }
  }, [token, restaurantId]);

  const updateRestaurantInfo = async (payload: UpdateRestaurantSettingDTO) => {
    try {
      if (!token || !restaurantId) return;

      await updateRestaurantSetting(token, restaurantId, payload);
      await loadRestaurantInfoData();
    } catch (e) {
      console.error("Failed to update restaurant setting", e);
      throw new Error("Error updating restaurant setting");
    }
  };

  return { loadRestaurantInfoData, updateRestaurantInfo };
};
