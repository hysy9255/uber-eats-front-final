import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantDetailDTO } from "./restaurantDetail.dto";

export const getRestaurantDetail = async (
  restaurantId: string
): Promise<RestaurantDetailDTO> => {
  const res = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}`, {
    method: "GET",
    headers: COMMON_HEADERS,
  });
  if (!res.ok) throw new Error(await res.text());

  return await res.json();
};
