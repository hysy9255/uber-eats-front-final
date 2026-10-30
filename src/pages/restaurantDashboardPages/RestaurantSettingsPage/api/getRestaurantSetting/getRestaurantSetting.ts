import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantSettingDTO } from "./restaurantSetting.dto";

export const getRestaurantSetting = async (
  token: string,
  restaurantId: string
): Promise<RestaurantSettingDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/settings`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
