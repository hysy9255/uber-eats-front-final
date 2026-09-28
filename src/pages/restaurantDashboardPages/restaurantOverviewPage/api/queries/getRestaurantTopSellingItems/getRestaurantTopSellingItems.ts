import { API_BASE_URL, COMMON_HEADERS } from "@/shared/constants/baseUrl";
import type { RestaurantTopSellingItemDTO } from "./RestaurantTopSellingItem.dto";

export const getRestaurantTopSellingItems = async (
  token: string,
  restaurantId: string,
  startDate: Date,
  endDate: Date
): Promise<RestaurantTopSellingItemDTO[]> => {
  const res = await fetch(
    `${API_BASE_URL}/owner/restaurants/${restaurantId}/overview/top-selling-items?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,
    {
      method: "GET",
      headers: { ...COMMON_HEADERS, Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
};
