import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantHoursDTO } from "./restaurantHours.dto";

export const getRestaurantHours = async (
  restaurantId: string
): Promise<RestaurantHoursDTO[]> => {
  const res = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/hours`, {
    method: "GET",
    headers: COMMON_HEADERS,
  });

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
