import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantLiveOrdersDTO } from "./RestaurantLiveOrders.dto";

export const getRestaurantLiveOrders = async (
  token: string,
  restaurantId: string
): Promise<RestaurantLiveOrdersDTO> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/overview/live-orders`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
